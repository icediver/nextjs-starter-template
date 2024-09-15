import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="relative top-32">
			<p>Could not find requested resource</p>
			<p>
				<Link href={'/'} className="text-primary">
					home
				</Link>
			</p>
		</div>
	);
}
