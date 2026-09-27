<template>
  <img
    :src="src"
    :alt="alt"
    :class="`image-${variant}`"
  />
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  variant: { type: String, default: 'fluid' },
})
</script>

<style scoped>
.image-fluid {
  width: 100%;
  height: auto;
}
.image-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>