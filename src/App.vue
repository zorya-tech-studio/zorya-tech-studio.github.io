<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LegalTabs from './components/LegalTabs.vue'
import { apps } from './data/apps.js'

const route = useRoute()
// App legal pages (privacy / terms) get the Privacy | Terms switcher above the page.
const hasLegalTabs = computed(() => {
  const slug = route.meta.app
  return Boolean(slug) && apps.some((a) => a.slug === slug)
})
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <NavBar />
  <main id="main-content" :class="{ 'has-legal-tabs': hasLegalTabs }">
    <LegalTabs v-if="hasLegalTabs" />
    <router-view />
  </main>
</template>

<style scoped>
/* .skip-link styled globally in style.css */
main {
  min-height: 100vh;
}
/* The shared legal header (LegalTabs) replaces each page's own breadcrumbs, title and app label,
   so every app's privacy and terms pages look the same: app name first, then the document. */
.has-legal-tabs :deep(.privacy-page),
.has-legal-tabs :deep(.offer-page),
.has-legal-tabs :deep(.terms-page),
.has-legal-tabs :deep(.disclaimer-page) {
  padding-top: var(--sp-6);
}
.has-legal-tabs :deep(.breadcrumbs),
.has-legal-tabs :deep(.page-header),
.has-legal-tabs :deep(.app-label) {
  display: none;
}
.has-legal-tabs :deep(.legal-head .breadcrumbs) {
  display: flex;
}
</style>
