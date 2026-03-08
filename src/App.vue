<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <NavBar />
  <main id="main-content">
    <router-view />
  </main>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 1000;
  padding: 8px 16px;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-ui);
  font-weight: 600;
  border-radius: 0 0 6px 6px;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
  color: var(--bg);
}

main {
  min-height: 100vh;
}
</style>
