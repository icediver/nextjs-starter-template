'use server';

import 'server-only';

import { cache } from 'react';

import { db } from '../db.utils';

import { verifySession } from '@/actions/auth/create.sessions';

export const getUser = cache(async () => {
	const session = await verifySession();
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
			},
		});

		return user;
	} catch (error) {
		console.log('Failed to fetch user');
		return null;
	}
});
