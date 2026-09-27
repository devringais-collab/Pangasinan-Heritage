export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    baseURL: '/Pangasinan-Heritage/',
    buildAssetsDir: 'assets',
  },
  ssr: true,
  nitro: {
    preset: 'github_pages'
  }
})