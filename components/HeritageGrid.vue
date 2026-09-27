<template>
  <div class="heritage-grid">
    <HeritageCard
      v-for="site in sites"
      :key="site.id"
      :title="site.title"
      :description="site.description"
      :image="site.image"
    />
  </div>
</template>

<script setup>
defineProps({
  sites: { type: Array, required: true },
})
</script>

<style scoped>
.heritage-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}
@media (min-width: 768px) {
  .heritage-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .heritage-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>