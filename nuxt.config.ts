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
          content: 'Discover the iconic heritage sites of Pangasinan — Hundred Islands, Bolinao Lighthouse, Balungao Hot Spring, and Dasol Beach. A digital initiative by the Pangasinan Provincial Tourism Office.' 
        },
        { name: 'keywords', content: 'Pangasinan, heritage, tourism, Hundred Islands, Bolinao Lighthouse, Balungao Hot Spring, Dasol Beach' },
        { name: 'author', content: 'Pangasinan Provincial Tourism Office' },
        { property: 'og:title', content: 'Pangasinan Heritage Digital Showcase' },
        { property: 'og:description', content: 'Discover the iconic heritage sites of Pangasinan.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://devringais-collab.github.io/Pangasinan-Heritage/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pangasinan Heritage Digital Showcase' },
        { name: 'twitter:description', content: 'Discover the iconic heritage sites of Pangasinan.' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Pangasinan-Heritage/logo.png' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  ssr: true,
  nitro: {
    preset: 'github_pages'
  }
})