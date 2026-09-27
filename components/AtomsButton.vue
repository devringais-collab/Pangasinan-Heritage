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
  padding: 10px 20px;
  border-radius: var(--border-radius-sm);
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s ease;
}
.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.primary {
  background-color: var(--color-primary);
  color: white;
}
.primary:hover {
  background-color: var(--color-primary-dark);
}
.secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
}
.secondary:hover {
  background-color: var(--color-primary);
  color: white;
}
</style>