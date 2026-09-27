<template>
  <header class="header">
    <div class="header__logo">
      <img src="/logo.png" alt="Pangasinan Heritage Logo" width="40" />
      <span class="header__title">Pangasinan Heritage</span>
    </div>
    <nav class="header__nav">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/sites">Heritage Sites</NavigationItem>
      <NavigationItem to="/about">About</NavigationItem>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--color-primary);
  color: white;
}
.header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header__title {
  font-weight: bold;
}
.header__nav {
  display: flex;
  gap: 16px;
}
@media (max-width: 600px) {
  .header__nav {
    flex-direction: column;
    gap: 8px;
  }
}
</style>