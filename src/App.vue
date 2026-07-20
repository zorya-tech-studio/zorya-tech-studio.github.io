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
/* .skip-link styled globally in style.css */
main {
  min-height: 100vh;
}
</style>
