<template>
  <component :is="tag" :class="`typography-${variant}`">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: 'p' },
  variant: { type: String, default: 'body' },
})
</script>

<style scoped>
.typography-heading1 { font-size: 32px; font-weight: bold; line-height: 1.2; }
.typography-heading2 { font-size: 24px; font-weight: bold; }
.typography-body { font-size: 16px; line-height: 1.6; }
.typography-caption { font-size: 12px; color: var(--color-muted); }
</style>