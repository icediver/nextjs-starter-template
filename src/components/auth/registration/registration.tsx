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
	CardDescription,
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

import { createUser } from '@/actions/auth/register.actions';
import { registerSchema } from '@/actions/auth/register.schema';

export function RegistrationForm() {
	//const { mutate, isPending } = useRegister();

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof registerSchema>) {
		//mutate({ json: values });
		createUser(values);
		//console.log(values);
	}

	return (
		<Card className="h-full w-full  md:w-[487px]">
			<CardHeader className="flex items-center justify-center p-7 text-center">
				<CardTitle className="text-2xl">Sign Up</CardTitle>
				<CardDescription>
					By signing up, you agree to our{' '}
					<Link href="/privacy">
						<span className="text-blue-700">Privacy Policy</span>
					</Link>{' '}
					and{' '}
					<Link href="/terms">
						<span className="text-blue-700">Terms of Service</span>
					</Link>
					<span className="text-blue-700">Privacy Policy</span>
				</CardDescription>
			</CardHeader>
			<div className="mb-2 px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<Form {...form}>
					<form
						className="space-y-4"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							name="name"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											type="text"
											placeholder="Enter your name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											type="text"
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
							//disabled={isPending}
							size="lg"
							className="w-full"
						>
							Register
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
					Already have an account?
					<Link
						className="text-blue-700"
						href="/login"
					>
						&nbsp;Login
					</Link>
				</p>
			</CardContent>
		</Card>
	);
}
