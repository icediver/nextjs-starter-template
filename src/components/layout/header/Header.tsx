'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import ThemeSwitcher from '@/components/ui/theme-switcher/ThemeSwitcher';
import { UserButton } from '@/components/ui/user-button';

import styles from './Header.module.scss';
import { Hamburger } from './hamburger/Hamburger';
import { Logo } from './logo/Logo';
import { MenuList } from './menu-list/MenuList';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	return (
		<header
			className={clsx('fixed left-0 top-0 z-50 w-full  ', {
				[styles.header]: isOpen,
			})}>
			<div className="container relative mx-auto flex h-20 items-center justify-between bg-[var(--navbar)] px-6 transition duration-700 lg:w-full">
				<Logo />
				<MenuList isOpen={isOpen} />
				<div className="flex items-center gap-4">
					<UserButton />
					<ThemeSwitcher />
					<Hamburger
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				</div>
			</div>
		</header>
	);
}
