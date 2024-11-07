import { Tailwind } from '@react-email/components';

export default function VerificationEmail({
	url,
	name,
}: {
	url: string;
	name: string;
}) {
	return (
		<Tailwind>
			<div className="mx-auto w-1/3 rounded-lg bg-neutral-100 p-20">
				<h1>Welcome, {name} !</h1>

				<p className="">Confirm your email address</p>

				<a
					className="my-8 rounded bg-sky-600 px-4 py-2 text-sky-100 no-underline hover:opacity-75"
					href={url}>
					Confirm
				</a>

				<p>Or, copy and paste this temporary link:</p>

				<a
					href={url}
					target="_blank"
					style={{
						color: '#A981DC',
					}}>
					{url}
				</a>
				<p>
					If you didn&apos;t request this email, there&apos;s nothing to worry
					about, you can safely ignore it.
				</p>
			</div>
		</Tailwind>
	);
}
