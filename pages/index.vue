<template>
  <div>
    <HeaderNavigation />
    <main class="main">
      <AtomsTypography tag="h1" variant="heading1">
        Welcome to Pangasinan Heritage
      </AtomsTypography>
      <AtomsTypography tag="p" variant="body">
        Discover the iconic heritage sites of Pangasinan.
      </AtomsTypography>
      <SearchForm />
      <HeritageGrid :sites="sites" />
    </main>
  </div>
</template>

<script setup>
const sites = [
  { id: 1, title: 'Hundred Islands', description: 'Alaminos, Pangasinan', image: '/alaminos.png' },
  { id: 2, title: 'Bolinao Lighthouse', description: 'Bolinao, Pangasinan', image: '/bolinao.png' },
  { id: 3, title: 'Balungao Hot Spring', description: 'Balungao, Pangasinan', image: '/balungao.png' },
  { id: 4, title: 'Dasol Beach', description: 'Dasol, Pangasinan', image: '/dasol.png' },
]
</script>

<style scoped>
.main {
  padding: var(--spacing-lg);
}
</style>