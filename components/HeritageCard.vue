<template>
  <img
    :src="src"
    :alt="alt"
    :class="`image-${variant}`"
    :width="width"
    :height="height"
    loading="lazy"
    decoding="async"
  />
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  variant: { type: String, default: 'fluid' },
  width: { type: String, default: '400' },
  height: { type: String, default: '300' },
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