export default {
	// Server Configuration
	ssr: false,
	target: 'static',

	// General Configuration
	buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg'],
	components: ['~/components/global'],

	// Head
	head: {
		title: 'Nuxt Boilerplate',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
};
