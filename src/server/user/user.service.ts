import { PrismaClient } from '@prisma/client';
import { hash, verify } from 'argon2';

import { InputLoginType, RegisterType } from '../auth/auth.actions';
import { sendVerification } from '../mail/mail.service';

export class UserService {
	constructor(private db: PrismaClient) {}

	async create(dto: RegisterType) {
		const userExists = await this.db.user.findUnique({
			where: {
				email: dto.email,
			},
		});
		if (userExists) {
			throw new Error('User already exists');
		}

		const user = await this.db.user.create({
			data: {
				name: dto.name,
				email: dto.email,
				password: await hash(dto.password),
			},
		});

		if (!user) {
			throw new Error('User not created');
		}

		const verificationLink = `http://localhost:3000/api/email/verify/${user.verificationToken}`;

		await sendVerification({
			sendTo: user.email,
			verificationLink,
			name: user.name || 'New User',
		});

		return user;
	}

	async validateUser(data: InputLoginType) {
		//  Query the database for the user with the given email
		const userData = await this.db.user.findUnique({
			where: { email: data.email },
		});

		// If user is not found, return early
		if (!userData) {
			return { message: 'User not found', user: null };
		}

		const { password, ...user } = userData;

		// Compare the user's password with the hashed password in the database
		const passwordMatch = await verify(password, data.password);

		// If the password does not match, return early
		if (!passwordMatch) {
			return { message: 'Password or login are incorrect', user: null };
		}

		return { user, message: 'Login successful' };
	}

	async verifyEmail(token: string) {
		const user = await this.db.user.findFirst({
			where: {
				verificationToken: token,
			},
		});

		if (!user) throw new Error('Token not exists!');

		await this.db.user.update({
			where: {
				id: user.id,
			},
			data: {
				verificationToken: null,
			},
		});

		return 'Email verified!';
	}

	async getUsers() {
		return this.db.user.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				password: false,
			},
		});
	}
	async getById(id: string) {
		return this.db.user.findUnique({ where: { id } });
	}
}
