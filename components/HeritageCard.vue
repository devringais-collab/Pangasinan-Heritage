<template>
  <div class="heritage-card">
    <AtomsImage :src="image" :alt="title" variant="cover" />
    <div class="heritage-card__content">
      <AtomsTypography tag="h3" variant="heading2">{{ title }}</AtomsTypography>
      <AtomsTypography tag="p" variant="body">{{ description }}</AtomsTypography>
      <AtomsButton variant="secondary">View Details</AtomsButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
})
</script>

<style scoped>
.heritage-card {
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.heritage-card:hover {
  transform: translateY(-4px);
}
.heritage-card__content {
  padding: var(--spacing-md);
}
</style>