import { NextResponse } from 'next/server';

import { db } from '@/lib/db.utils';

import { SessionService } from '@/server/auth/session.service';

export async function GET() {
	const sessionService = new SessionService();
	const session = await sessionService.verify();

	if (!session) {
		return new NextResponse('Unauthorized', {
			status: 401,
		});
	}

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

		return NextResponse.json(user);
	} catch (error) {
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}
}
