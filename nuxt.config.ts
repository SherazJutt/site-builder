// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	app: {
		// pageTransition: { name: 'page', mode: 'out-in' },
		rootId: "__Wodwes-page-builder",
		rootTag: "main",
		head: {
			title: "Wodwes Page Builder",
			meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
			link: [
				// { rel: 'icon', type: 'image/svg', href: '/favicon.png' },
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com" },
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" },
			],
			// script: [{ src: '', async: true }],
		},
	},

	modules: ["@nuxt/ui", "@vueuse/nuxt"],
	css: ["~/assets/css/main.css"],
	ui: {
		colorMode: false,
	},

	alias: {
		"@": "/",
		"@images": "/assets/images",
	},

	runtimeConfig: {
		public: {
			pocketbaseUrl: "http://pocketbase-vkgoko4sgw0s4s4og084kcss.5.161.84.105.sslip.io",
		},
	},
});
