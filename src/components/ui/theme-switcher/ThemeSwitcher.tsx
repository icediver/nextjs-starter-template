'use client';

import Moon from '@/assets/icons/moon.svg';
import Sun from '@/assets/icons/sun.svg';

import { Theme } from './theme.type';
import { useDarkTheme } from './useDarkTheme';

export default function ThemeSwitcher() {
	const { theme, toogleTheme } = useDarkTheme();
	return (
		<button
			onClick={toogleTheme}
			className="size-10 z-10">
			{theme === Theme.dark ? (
				<Sun className="h-8 w-8 fill-yellow-500" />
			) : (
				<Moon className="h-7 w-7 [&>path]:fill-gray-300" />
			)}
		</button>
	);
}
