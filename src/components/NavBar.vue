<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const scrolled = ref(false)

const isHome = computed(() => route.name === 'home')
const homeUrl = computed(() => `/${locale.value}`)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleLocale() {
  const newLocale = locale.value === 'uk' ? 'en' : 'uk'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  router.replace({ params: { ...route.params, locale: newLocale } })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner">
      <router-link :to="homeUrl" class="nav-logo">Zorya Tech Studio</router-link>
      <div class="nav-right">
        <ul v-if="isHome" class="nav-links">
          <li><a href="#about">{{ t('nav.about') }}</a></li>
          <li><a href="#apps">{{ t('nav.apps') }}</a></li>
          <li><a href="#contact">{{ t('nav.contact') }}</a></li>
        </ul>
        <ul v-else class="nav-links">
          <li><router-link :to="homeUrl">{{ t('nav.about') }}</router-link></li>
          <li><router-link :to="homeUrl">{{ t('nav.apps') }}</router-link></li>
          <li><router-link :to="homeUrl">{{ t('nav.contact') }}</router-link></li>
        </ul>
        <button class="lang-toggle" @click="toggleLocale">
          <span :class="{ active: locale === 'uk' }">UA</span>
          <span class="lang-sep">/</span>
          <span :class="{ active: locale === 'en' }">EN</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  transition: background 0.3s, backdrop-filter 0.3s;
}

.navbar.scrolled {
  background: var(--bg-nav);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--accent-dim);
}

.nav-inner {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--accent);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-dim);
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--accent);
}

.lang-toggle {
  background: none;
  border: 1px solid var(--accent-dim);
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--text-dim);
  transition: border-color 0.2s;
}

.lang-toggle:hover {
  border-color: var(--accent);
}

.lang-toggle .active {
  color: var(--accent);
}

.lang-sep {
  margin: 0 2px;
  opacity: 0.3;
}

@media (max-width: 480px) {
  .nav-links {
    gap: 14px;
  }

  .nav-links a {
    font-size: 0.82rem;
  }

  .nav-right {
    gap: 12px;
  }
}
</style>
