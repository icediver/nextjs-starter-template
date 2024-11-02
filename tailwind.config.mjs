import { plugins, theme } from './src/config/tailwind';

const config = {
    darkMode: ['class'],
    content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: theme,
	plugins: plugins,
};
export default config;
