'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { DottedSeparator } from '@/components/ui/dotted-separator';
import { Button } from '@/components/ui/shadcn/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/shadcn/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/shadcn/form';
import { Input } from '@/components/ui/shadcn/input';

import { login } from '@/actions/auth/register.actions';
import { LoginFormSchema } from '@/actions/auth/register.schema';

export function LoginCard() {
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof LoginFormSchema>) {
		login(values);
	}
	return (
		<Card className="h-full w-full md:w-[487px]">
			<CardHeader className="flex items-center justify-center p-7 text-center">
				<CardTitle className="text-2xl">Welcome back!</CardTitle>
			</CardHeader>
			<div className="mb-2 px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="Enter email address"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											type="password"
											placeholder="Enter password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							size="lg"
							className="w-full"
						>
							Login
						</Button>
					</form>
				</Form>
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
						href="/signup"
					>
						&nbsp;Sign Up
					</Link>
				</p>
			</CardContent>
		</Card>
	);
}
