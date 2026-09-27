<template>
  <div class="heritage-card">
    <div class="heritage-card__image-wrapper">
      <AtomsImage :src="image" :alt="title" variant="cover" />
    </div>
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
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--color-card-bg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}
.heritage-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
.heritage-card__image-wrapper {
  overflow: hidden;
  height: 220px;
}
.heritage-card__image-wrapper :deep(img) {
  transition: transform 0.4s ease;
}
.heritage-card:hover .heritage-card__image-wrapper :deep(img) {
  transform: scale(1.05);
}
.heritage-card__content {
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.heritage-card__content :deep(.btn) {
  margin-top: auto;
  align-self: flex-start;
}
</style>