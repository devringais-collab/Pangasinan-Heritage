// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    baseURL: '/Pangasinan-Heritage/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Pangasinan Heritage Digital Showcase',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Discover the iconic heritage sites of Pangasinan — Hundred Islands, Bolinao Lighthouse, Balungao Hot Spring, and Dasol Beach.' 
        },
      ],
      htmlAttrs: { lang: 'en' }
    }
  },
  ssr: true,
  nitro: {
    preset: 'github_pages',
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: true,
  },
})
