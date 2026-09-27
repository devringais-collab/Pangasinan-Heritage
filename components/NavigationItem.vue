<template>
  <a :href="to" class="navigation-item">
    <slot />
  </a>
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
  padding: 8px;
  font-size: 14px;
}
.navigation-item:hover {
  text-decoration: underline;
}
</style>