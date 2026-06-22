export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],
  nitro: {
    prerender: {
      failOnError: false
    }
  },

  css: ['~/assets/styles/global.css'], // ← global CSS

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Montserrat', provider: 'google' },
    ]
  }
})