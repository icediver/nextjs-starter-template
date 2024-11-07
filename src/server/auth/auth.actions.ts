'use server';

import { User } from '@prisma/client';
import { z } from 'zod';

import { ActionStateType } from '@/lib/create-safe.actions';
import { db } from '@/lib/db.utils';

import { UserService } from '../user/user.service';

import { LoginFormSchema, RegisterSchema } from './auth.schema';
import { FormState } from './auth.type';
import { SessionService } from './session.service';

export type RegisterType = z.infer<typeof RegisterSchema>;
export type ReturnType = ActionStateType<RegisterType, User>;

const userService = new UserService(db);

const sessionService = new SessionService();

export async function register(formData: RegisterType): Promise<FormState> {
	// 1. Validate form fields
	const validatedFields = RegisterSchema.safeParse({
		name: formData.name,
		email: formData.email,
		password: formData.password,
	});

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const user = await userService.create(validatedFields.data);

	if (!user) {
		return { message: 'User not created' };
	}

	const userId = user.id.toString();
	await sessionService.create(userId);
}

export type InputLoginType = z.infer<typeof LoginFormSchema>;

export async function login(formData: InputLoginType): Promise<FormState> {
	// 1. Validate form fields
	const validatedFields = LoginFormSchema.safeParse({
		email: formData.email,
		password: formData.password,
	});

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { user, message } = await userService.validateUser(
		validatedFields.data
	);
	if (!user) {
		return { message };
	}

	// 4. If login successful, create a session for the user and redirect
	const userId = user.id.toString();

	await sessionService.create(userId);
}

export async function logout() {
	sessionService.delete();
}
