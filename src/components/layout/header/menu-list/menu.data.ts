export interface INavList {
	title: string;
	url: string;
}

export const menuItems: INavList[] = [
	{ title: 'About', url: '/about' },
	{ title: 'Services', url: '/services' },
	{ title: 'Technologies', url: '/technologies' },
	{ title: 'contacts', url: '/contacts' },
];
