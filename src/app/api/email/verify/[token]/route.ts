import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { db } from '@/lib/db.utils';

export async function GET(
	req: Request,
	{ params }: { params: { token: string } }
) {
	try {
		const user = await db.user.findFirst({
			where: { verificationToken: params.token },
		});

		if (!user) throw new Error('Token not exists!');

		await db.user.update({
			where: {
				id: user.id,
			},
			data: {
				verificationToken: null,
			},
		});
	} catch (error) {
		return new NextResponse('Internal Error', {
			status: 500,
		});
	}

	redirect('/');
}
