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
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
          media: 'print',
          onload: "this.media='all'"
        }
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