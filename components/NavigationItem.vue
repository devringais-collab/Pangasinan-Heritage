<template>
  <NuxtLink :to="to" class="navigation-item">
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
})
</script>

<style scoped>
.navigation-item {
  color: white;
  text-decoration: none;
  padding: 8px 0;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  transition: opacity 0.2s ease;
}
.navigation-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}
.navigation-item:hover::after {
  width: 100%;
}
.navigation-item:hover {
  opacity: 0.95;
}
</style>