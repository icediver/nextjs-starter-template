import clsx from 'clsx';
import Link from 'next/link';

export function NavbarItem({ title, url }: { title: string; url: string }) {
	return (
		<li key={title} className={clsx('relative text-8xl lg:text-sm')}>
			<Link
				href={url}
				className={clsx(
					'text-xs font-bold uppercase text-white',
					'after:content-"" after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-0 after:rounded-sm after:bg-[#858584] after:transition-all after:duration-300',
					'lg:hover:after:scale-100 lg:hover:after:bg-white'
				)}
			>
				{title}
			</Link>
		</li>
	);
}
