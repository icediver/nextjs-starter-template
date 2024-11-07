'use client';

import Link from 'next/link';

import { DottedSeparator } from '@/components/ui/dotted-separator';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/shadcn/card';

import { LoginForm } from './login-form';

export function LoginCard() {
	return (
		<Card className="h-full w-full md:w-[487px]">
			<CardHeader className="flex items-center justify-center p-7 text-center">
				<CardTitle className="text-2xl">Welcome back!</CardTitle>
			</CardHeader>
			<div className="mb-2 px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<LoginForm />
			</CardContent>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="flex items-center justify-center p-7">
				<p>
					Don&apos;t have an account?
					<Link
						className="text-blue-700"
						href="/signup">
						&nbsp;Sign Up
					</Link>
				</p>
			</CardContent>
		</Card>
	);
}
