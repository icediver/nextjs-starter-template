'use client';

import { Button } from '@/components/ui/button/Button';

import { sendVerification } from '@/server/mail/mail.service';

export function Home() {
	return (
		<main className="container  mx-auto flex flex-1 flex-col ">
			<section className="flex h-96 items-center justify-center bg-[var(--section)] px-6 pt-20">
				<h1>First section</h1>
			</section>
			<section className="flex flex-1 flex-col items-center justify-center gap-6 bg-[var(--second-section-background)] px-6">
				<h1>Second section</h1>
				<Button
					onClick={() =>
						sendVerification({
							sendTo: 'artem_bsk@mail.ru',
							verificationLink: 'http://localhost:3000/api/auth/verify',
							name: 'Artem',
						})
					}>
					Button
				</Button>
			</section>
		</main>
	);
}
