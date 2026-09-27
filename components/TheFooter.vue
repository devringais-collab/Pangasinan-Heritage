<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__brand">
        <img :src="logoSrc" alt="Logo" width="36" />
        <span>Pangasinan Heritage</span>
      </div>
      <p class="footer__text">
        Promoting cultural awareness and tourism for the province's most iconic heritage sites.
      </p>
      <p class="footer__copyright">
        © {{ new Date().getFullYear() }} Pangasinan Provincial Tourism Office. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
const logoSrc = `${config.app.baseURL}logo.webp`
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: white;
  padding: var(--spacing-xl) var(--spacing-lg);
  margin-top: var(--spacing-xl);
}
.footer__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 18px;
}
.footer__brand img {
  border-radius: 50%;
  background: white;
  padding: 2px;
}
.footer__text {
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  max-width: 500px;
}
.footer__copyright {
  color: rgba(255,255,255,0.6);
  font-size: 12px;
  margin-top: 8px;
}
</style>