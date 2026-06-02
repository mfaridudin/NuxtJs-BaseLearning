export default defineNuxtConfig({
  // mengaktifkan struktur folder nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  //  mengaktifkan devtools untuk debugging
  devtools: { enabled: true },

  // setup runtime config env
  runtimeConfig: {
    public: {
      appName: 'Selamat Datang di Belajar Nuxt Js - Pemula',
    }
  },

  // seo meta tags
  app: {
    head: {
      title: 'Belajar Nuxt Js - Pemula',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  }
})