import { NextResponse } from 'next/server';

import { verifySession } from '@/actions/auth/create.sessions';
import { db } from '@/lib/db.utils';

export async function GET() {
	const session = await verifySession();

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
