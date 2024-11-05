import { useState } from 'react';

import { Theme } from './theme.type';

export const useDarkTheme = () => {
	const [theme, setTheme] = useState<Theme | null>(null);
	const toogleTheme = () => {
		const bodyClass = document.body.classList;
		if (bodyClass.contains(Theme.dark)) {
			bodyClass.remove(Theme.dark);
			setTheme(null);
			document.cookie = `theme=`;
		} else {
			bodyClass.add(Theme.dark);
			setTheme(Theme.dark);
			document.cookie = `theme=${Theme.dark}`;
		}
	};
	return { toogleTheme, theme };
};
