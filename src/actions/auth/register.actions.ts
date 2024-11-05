'use server';

import { User } from '@prisma/client';
import { hash, verify } from 'argon2';
import { z } from 'zod';

import { ActionStateType } from '@/lib/create-safe.actions';
import { db } from '@/lib/db.utils';

import { createSession, deleteSession } from './create.sessions';
import { LoginFormSchema, registerSchema } from './register.schema';
import { FormState } from './register.type';

export type InputType = z.infer<typeof registerSchema>;
export type ReturnType = ActionStateType<InputType, User>;

export async function createUser(formData: InputType) {
	const oldUser = await db.user.findUnique({
		where: {
			email: formData.email,
		},
	});
	if (oldUser) {
		throw new Error('User already exists');
	}

	const user = await db.user.create({
		data: {
			name: formData.name,
			email: formData.email,
			password: await hash(formData.password),
		},
	});

	if (!user) {
		throw new Error('User not created');
	}

	const userId = user.id.toString();
	await createSession(userId);
}

export type InputLoginType = z.infer<typeof LoginFormSchema>;

export async function login(formData: InputLoginType): Promise<FormState> {
	// 1. Validate form fields
	const validatedFields = LoginFormSchema.safeParse({
		email: formData.email,
		password: formData.password,
	});
	const errorMessage = { message: 'Invalid login credentials.' };

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	// 2. Query the database for the user with the given email
	const user = await db.user.findUnique({
		where: { email: validatedFields.data.email },
	});

	// If user is not found, return early
	if (!user) {
		return errorMessage;
	}
	// 3. Compare the user's password with the hashed password in the database
	const passwordMatch = await verify(
		user.password,
		validatedFields.data.password
	);

	// If the password does not match, return early
	if (!passwordMatch) {
		return errorMessage;
	}

	// 4. If login successful, create a session for the user and redirect
	const userId = user.id.toString();

	await createSession(userId);
}

export async function logout() {
	deleteSession();
}
