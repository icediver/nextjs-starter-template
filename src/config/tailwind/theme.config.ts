import { fontFamily } from 'tailwindcss/defaultTheme';

import { colors } from './colors.config';

export const theme = {
	//container: {
	//	center: true,
	//	//padding: '2rem',
	//	screens: {
	//		'2xl': '1400px',
	//	},
	//},

	extend: {
		colors: {
			...colors,
		},
		borderRadius: {
			lg: `var(--radius)`,
			md: `calc(var(--radius) - 2px)`,
			sm: 'calc(var(--radius) - 4px)',
		},
		fontFamily: {
			sans: ['var(--font-sans)', ...fontFamily.sans],
		},

		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' },
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' },
			},

			animationOpacity: {
				from: { opacity: '0.2' },
				to: { opacity: '1' },
			},
			scaleIn: {
				'0%': {
					opacity: '0',
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: '0.3',
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1)',
				},
			},
		},
		animation: {
			opacity: 'animationOpacity 0.7s ease-in-out',
			scaleIn: 'scaleIn .35s ease-in-out',
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
		},
	},
};
