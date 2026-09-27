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
.typography-heading1 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: var(--color-text);
}
.typography-heading2 {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text);
}
.typography-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-muted);
}
.typography-caption {
  font-size: 13px;
  color: var(--color-muted);
}

@media (max-width: 768px) {
  .typography-heading1 {
    font-size: 28px;
  }
  .typography-heading2 {
    font-size: 18px;
  }
}
</style>