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
  margin: var(--spacing-lg) 0;
  max-width: 600px;
}
.search-form__input {
  flex: 1;
  padding: 12px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background: white;
  transition: all 0.2s ease;
  outline: none;
}
.search-form__input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 105, 92, 0.1);
}
.search-form__input::placeholder {
  color: #999;
}

@media (max-width: 600px) {
  .search-form {
    flex-direction: column;
  }
}
</style>