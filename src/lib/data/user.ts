'use server';

import 'server-only';

import { cache } from 'react';

import { db } from '../db.utils';

import { SessionService } from '@/server/auth/session.service';

export const getUser = cache(async () => {
	const sessionService = new SessionService();
	const session = await sessionService.verify();
	if (!session) return null;

	try {
		const user = await db.user.findUnique({
			where: { id: session.userId },
			select: {
				id: true,
				name: true,
				email: true,
				avatarPath: true,
				rights: true,
				verificationToken: true,
			},
		});

		return user;
	} catch (error) {
		console.log('Failed to fetch user');
		return null;
	}
});
