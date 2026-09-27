<template>
  <div>
    <HeaderNavigation />
    <main class="main">
      <AtomsTypography tag="h1" variant="heading1">About</AtomsTypography>
      <AtomsTypography tag="p" variant="body">
        The Pangasinan Heritage Digital Showcase is a project by the Pangasinan Provincial Tourism Office to promote cultural awareness and tourism.
      </AtomsTypography>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.main {
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
}
</style>