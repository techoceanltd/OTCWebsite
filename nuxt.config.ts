export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],

  // Serve every page as static HTML built at deploy time
  routeRules: {
    '/**': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/services', '/coverage', '/track', '/quote', '/contact'],
      failOnError: false
    }
  },

  css: ['~/assets/styles/global.css'], // ← global CSS

  image: {
    format: ['webp'],
    quality: 75
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Montserrat', provider: 'google' },
    ]
  }
})
