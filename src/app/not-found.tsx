import Link from 'next/link';

export default function NotFound() {
	return (
		<>
			<p>Could not find requested resource</p>
			<p>
				<Link href={'/'} className="text-primary">
					home
				</Link>
			</p>
		</>
	);
}
