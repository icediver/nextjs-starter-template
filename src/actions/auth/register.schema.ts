import { z } from 'zod';

export const registerSchema = z.object({
	name: z.string().trim().min(1, 'Required'),
	email: z.string().trim().min(1, 'Required').email(),
	password: z
		.string()
		.min(6, 'Minimum 8 characters')
		.max(256, 'Maximum 256 characters'),
});

export const LoginFormSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email.' }),
	password: z.string().min(1, { message: 'Password field must not be empty.' }),
});
