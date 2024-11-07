import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { SessionService } from './server/auth/session.service';

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/signup', '/'];
const sessionService = new SessionService();

export default async function middleware(req: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	// 3. Decrypt the session from the cookie
	const cookie = cookies().get('session')?.value;
	const session = await sessionService.decrypt(cookie);

	// 4. Redirect
	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/login', req.nextUrl));
	}

	if (
		isPublicRoute &&
		session?.userId &&
		!req.nextUrl.pathname.startsWith('/')
	) {
		return NextResponse.redirect(new URL('/', req.nextUrl));
	}

	return NextResponse.next();
}
