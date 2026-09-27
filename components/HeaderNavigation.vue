<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logoSrc" alt="Pangasinan Heritage Logo" width="44" />
      <span class="header__title">Pangasinan Heritage</span>
    </div>
    <nav class="header__nav">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/sites">Heritage Sites</NavigationItem>
      <NavigationItem to="/about">About</NavigationItem>
    </nav>
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
const logoSrc = `${config.app.baseURL}logo.webp`
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: var(--color-primary);
  color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header__logo img {
  border-radius: 50%;
  background: white;
  padding: 2px;
}
.header__title {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.3px;
}
.header__nav {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
  .header__nav {
    flex-direction: row;
    gap: 16px;
  }
}
</style>