import clsx from 'clsx';
import Github from '@/assets/icons/github.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Telegram from '@/assets/icons/telegram.svg';
import Link from 'next/link';

export function Footer() {
	return (
		<footer
			className={clsx(
				'container mx-auto flex h-20 items-center justify-between bg-[var(--navbar)] px-6'
			)}
		>
			<ul className="flex items-center gap-4">
				<li>
					<Link href="https://github.com/icediver">
						<Github className="h-10 w-10 transition-all duration-300 hover:scale-125" />
					</Link>
				</li>
				<li>
					<Link href="https://www.instagram.com/1cediver/">
						<Instagram className="h-12 w-16 transition-all duration-300 hover:scale-110 hover:brightness-200" />
					</Link>
				</li>
				<li>
					<Link href="https://t.me/ageev_as">
						<Telegram className="h-12 w-16" />
					</Link>
				</li>
			</ul>
		</footer>
	);
}
