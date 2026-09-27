<template>
  <form class="search-form" @submit.prevent="onSubmit">
    <input
      v-model="query"
      type="text"
      placeholder="Search heritage sites..."
      class="search-form__input"
      aria-label="Search heritage sites"
    />
    <AtomsButton type="submit" variant="primary">Search</AtomsButton>
  </form>
</template>

<script setup>
const query = ref('')

function onSubmit() {
  console.log('Searching for:', query.value)
}
</script>

<style scoped>
.search-form {
  display: flex;
  gap: 8px;
  margin-bottom: var(--spacing-lg);
}
.search-form__input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>