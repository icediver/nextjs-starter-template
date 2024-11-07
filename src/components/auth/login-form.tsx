import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/shadcn/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/shadcn/form';
import { Input } from '@/components/ui/shadcn/input';

import { login } from '@/server/auth/auth.actions';
import { LoginFormSchema } from '@/server/auth/auth.schema';

export function LoginForm() {
	const queryClient = useQueryClient();

	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
		const result = await login(values);

		queryClient.invalidateQueries({ queryKey: ['user'] });

		if (result?.message) {
			toast.error(result.message);
		} else {
			toast.success('Login successful');
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4">
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
					className="w-full">
					Login
				</Button>
			</form>
		</Form>
	);
}
