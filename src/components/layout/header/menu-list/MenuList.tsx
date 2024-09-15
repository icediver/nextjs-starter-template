import clsx from 'clsx';
import { NavbarItem } from './navbar-item/NavbarItem';
import { menuItems } from './menu.data';

interface IMenuList {
	isOpen?: boolean;
}

export function MenuList({ isOpen = false }: IMenuList) {
	return (
		<nav
			className={clsx(
				// "hidden xl:block": variant === "desktop",
				'container absolute -top-[1000px] left-0 right-0 mx-auto bg-[var(--navbar)] px-6 py-8 transition-all duration-300',
				'lg:static lg:w-[600px] lg:bg-transparent',
				{ '!top-0': isOpen }
			)}
		>
			<ul
				className={clsx(
					'flex h-screen flex-col text-center font-bold text-white',

					'lg:h-min lg:flex-row lg:items-center lg:justify-between lg:gap-6'
				)}
			>
				{menuItems.map((item) => (
					<NavbarItem key={item.title} title={item.title} url={item.url} />
				))}
			</ul>
		</nav>
	);
}
