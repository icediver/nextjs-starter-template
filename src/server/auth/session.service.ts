import 'server-only';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { SessionPayload } from './auth.type';

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export class SessionService {
	constructor() {}

	async encrypt(payload: SessionPayload) {
		return new SignJWT(payload)
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.setExpirationTime('1hr')
			.sign(key);
	}

	async decrypt(session: string | undefined = '') {
		try {
			const { payload } = await jwtVerify(session, key, {
				algorithms: ['HS256'],
			});
			return payload;
		} catch (error) {
			return null;
		}
	}

	async create(userId: string) {
		const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
		const session = await this.encrypt({ userId, expiresAt });

		cookies().set('session', session, {
			httpOnly: true,
			secure: true,
			expires: expiresAt,
			sameSite: 'lax',
			path: '/',
		});

		redirect('/');
	}

	async verify() {
		const cookie = cookies().get('session')?.value;

		const session = await this.decrypt(cookie);

		if (!session?.userId) {
			redirect('/login');
		}

		return { isAuth: true, userId: String(session.userId) };
	}

	async update() {
		const session = cookies().get('session')?.value;
		const payload = await this.decrypt(session);

		if (!session || !payload) {
			return null;
		}

		const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
		cookies().set('session', session, {
			httpOnly: true,
			secure: true,
			expires: expires,
			sameSite: 'lax',
			path: '/',
		});
	}

	delete() {
		cookies().delete('session');
		redirect('/login');
	}
}
