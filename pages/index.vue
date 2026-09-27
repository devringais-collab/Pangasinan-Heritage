<template>
  <div>
    <HeaderNavigation />
    <main class="main">
      <div class="hero">
        <AtomsTypography tag="h1" variant="heading1">
          Welcome to Pangasinan Heritage
        </AtomsTypography>
        <AtomsTypography tag="p" variant="body">
          Discover the iconic heritage sites of Pangasinan.
        </AtomsTypography>
        <SearchForm />
      </div>
      <HeritageGrid :sites="sites" />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const base = config.app.baseURL

const sites = [
  { id: 1, title: 'Hundred Islands', description: 'Alaminos, Pangasinan', image: `${base}alaminos.webp` },
  { id: 2, title: 'Bolinao Lighthouse', description: 'Bolinao, Pangasinan', image: `${base}bolinao.webp` },
  { id: 3, title: 'Balungao Hot Spring', description: 'Balungao, Pangasinan', image: `${base}balungao.webp` },
  { id: 4, title: 'Dasol Beach', description: 'Dasol, Pangasinan', image: `${base}dasol.webp` },
]
</script>

<style scoped>
.main {
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}
.hero {
  margin-bottom: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>