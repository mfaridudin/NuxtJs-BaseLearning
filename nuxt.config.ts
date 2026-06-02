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
  }
})