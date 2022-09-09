// Imports
const generateBreakpoints = require('./assets/js/breakpoints');
const { screens } = generateBreakpoints([0, 768, 1024, 1440], {
	print: { raw: 'print' },
});

// Spacing
const spacings = {
	auto: 'auto',
	'1/2': '50%',

	'layout-margin': 'var(--grid-spacing-layout-margin)',
	'layout-gutter': 'var(--grid-spacing-layout-gutter)',

	0: '0px',
	4: '4px',
	8: '8px',
	16: '16px',
	20: '20px',
	24: '24px',
	32: '32px',
	48: '48px',
	64: '64px',
	96: '96px',
	128: '128px',
	256: '256px',

	'1/12col': 'var(--grid-spacing-1-12col)',
	'2/12col': 'var(--grid-spacing-2-12col)',
	'3/12col': 'var(--grid-spacing-3-12col)',
	'4/12col': 'var(--grid-spacing-4-12col)',
	'5/12col': 'var(--grid-spacing-5-12col)',
	'6/12col': 'var(--grid-spacing-6-12col)',
	'7/12col': 'var(--grid-spacing-7-12col)',
	'8/12col': 'var(--grid-spacing-8-12col)',
	'9/12col': 'var(--grid-spacing-9-12col)',
	'10/12col': 'var(--grid-spacing-10-12col)',
	'11/12col': 'var(--grid-spacing-11-12col)',
	'12/12col': 'var(--grid-spacing-12-12col)',

	'1/5col': 'var(--grid-spacing-1-5col)',
	'2/5col': 'var(--grid-spacing-2-5col)',
	'3/5col': 'var(--grid-spacing-3-5col)',
	'4/5col': 'var(--grid-spacing-4-5col)',
	'5/5col': 'var(--grid-spacing-5-5col)',
};


// Exports
module.exports = {
	darkMode: false,
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],

	theme: {
		// Breakpoints
		screens,

		// Fonts
		fontSize: {
			18: '18px',
		},

		fontFamily: {
			primary: 'Copyright (C) H&Co | typography.com',
			secondary: 'Copyright (C) H&Co | typography.com',
		},

		fontWeight: {
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			black: '900',
		},

		lineHeight: {
			1: '1',
		},


		// Colors
		colors: {
			white: 'var(--color-white)',
			black: 'var(--color-black)',
			red: 'var(--color-red)',

			transparent: 'transparent',
			current: 'currentColor',
		},

		// Spacing
		spacing: spacings,
		margin: spacings,
		padding: spacings,
		gap: spacings,

		width: {
			...spacings,
			full: '100%',
			screen: '100vw',
		},

		minWidth: {
			full: '100%',
			screen: '100vw',
		},

		height: {
			...spacings,
			full: '100%',
			screen: '100vh',
		},

		minHeight: {
			full: '100%',
			screen: '100vh',
		},

		// Easings
		transitionTimingFunction: {
			'ease-in': 'cubic-bezier(0.7, 0, .6, .9)',
			'ease-out': 'cubic-bezier(0.4, 0.1, 0.3, 1)',
			'ease-in-out': 'cubic-bezier(0.7, 0, 0.3, 1)',
		},

		transitionDuration: {
			100: '100ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			1000: '1000ms',
		},
	},
};
