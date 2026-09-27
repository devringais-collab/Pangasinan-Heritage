<template>
  <button class="btn" :class="variant">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
.primary {
  background-color: var(--color-primary);
  color: white;
}
.secondary {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ccc;
}
</style>