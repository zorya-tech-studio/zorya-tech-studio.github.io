<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const menuOpen = ref(false)
const panelEl = ref(null)
const togglerEl = ref(null)

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

function openMenu() {
  menuOpen.value = true
}

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value ? closeMenu() : openMenu()
}

function onLinkClick() {
  closeMenu()
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
    togglerEl.value?.focus()
  }
}

function onClickOutside(e) {
  if (!menuOpen.value) return
  const panel = panelEl.value
  const toggler = togglerEl.value
  if (panel && !panel.contains(e.target) && toggler && !toggler.contains(e.target)) {
    closeMenu()
  }
}

// Lock body scroll while panel is open; move focus into the panel when
// it opens so keyboard users can tab through the links naturally.
watch(menuOpen, async (open) => {
  if (open) {
    document.documentElement.style.overflow = 'hidden'
    await nextTick()
    const firstLink = panelEl.value?.querySelector('a')
    firstLink?.focus()
  } else {
    document.documentElement.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onClickOutside)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <nav :class="['navbar', { scrolled, 'menu-open': menuOpen }]" aria-label="Main navigation">
    <div class="nav-inner">
      <router-link :to="homeUrl" class="nav-logo" @click="closeMenu">Zorya Tech Studio</router-link>
      <div class="nav-right">
        <ul v-if="isHome" class="nav-links nav-links-inline">
          <li>
            <a href="#about">{{ t('nav.about') }}</a>
          </li>
          <li>
            <a href="#apps">{{ t('nav.apps') }}</a>
          </li>
          <li>
            <a href="#contact">{{ t('nav.contact') }}</a>
          </li>
        </ul>
        <ul v-else class="nav-links nav-links-inline">
          <li>
            <router-link :to="homeUrl + '#about'">{{ t('nav.about') }}</router-link>
          </li>
          <li>
            <router-link :to="homeUrl + '#apps'">{{ t('nav.apps') }}</router-link>
          </li>
          <li>
            <router-link :to="homeUrl + '#contact'">{{ t('nav.contact') }}</router-link>
          </li>
        </ul>
        <button class="lang-toggle" :aria-label="t('nav.switch_lang')" @click="toggleLocale">
          <span :class="{ active: locale === 'uk' }">UA</span>
          <span class="lang-sep">/</span>
          <span :class="{ active: locale === 'en' }">EN</span>
        </button>
        <button
          ref="togglerEl"
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu-panel"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <span class="bar bar-1" />
          <span class="bar bar-2" />
          <span class="bar bar-3" />
        </button>
      </div>
    </div>
    <div
      id="mobile-menu-panel"
      ref="panelEl"
      class="mobile-panel"
      :class="{ open: menuOpen }"
      role="menu"
      :aria-hidden="!menuOpen"
    >
      <ul class="nav-links nav-links-mobile">
        <template v-if="isHome">
          <li role="none">
            <a role="menuitem" href="#about" :tabindex="menuOpen ? 0 : -1" @click="onLinkClick">{{
              t('nav.about')
            }}</a>
          </li>
          <li role="none">
            <a role="menuitem" href="#apps" :tabindex="menuOpen ? 0 : -1" @click="onLinkClick">{{
              t('nav.apps')
            }}</a>
          </li>
          <li role="none">
            <a role="menuitem" href="#contact" :tabindex="menuOpen ? 0 : -1" @click="onLinkClick">{{
              t('nav.contact')
            }}</a>
          </li>
        </template>
        <template v-else>
          <li role="none">
            <router-link
              role="menuitem"
              :to="homeUrl + '#about'"
              :tabindex="menuOpen ? 0 : -1"
              @click="onLinkClick"
              >{{ t('nav.about') }}</router-link
            >
          </li>
          <li role="none">
            <router-link
              role="menuitem"
              :to="homeUrl + '#apps'"
              :tabindex="menuOpen ? 0 : -1"
              @click="onLinkClick"
              >{{ t('nav.apps') }}</router-link
            >
          </li>
          <li role="none">
            <router-link
              role="menuitem"
              :to="homeUrl + '#contact'"
              :tabindex="menuOpen ? 0 : -1"
              @click="onLinkClick"
              >{{ t('nav.contact') }}</router-link
            >
          </li>
        </template>
      </ul>
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
  transition:
    background 0.3s,
    backdrop-filter 0.3s;
}

.navbar.scrolled,
.navbar.menu-open {
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
  margin: 0;
  padding: 0;
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

/* ── Hamburger ─────────────────────────────────────────────────────── */

.menu-toggle {
  display: none; /* shown on mobile via media query */
  position: relative;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid var(--accent-dim);
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  transition: border-color 0.2s;
}

.menu-toggle:hover {
  border-color: var(--accent);
}

.menu-toggle .bar {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 1.5px;
  background: var(--text-dim);
  border-radius: 1px;
  transform-origin: center;
  transition:
    transform 0.25s ease,
    opacity 0.2s ease,
    top 0.25s ease,
    background 0.2s;
  margin-left: -9px;
}

.menu-toggle .bar-1 {
  top: 13px;
}
.menu-toggle .bar-2 {
  top: 19px;
}
.menu-toggle .bar-3 {
  top: 25px;
}

.menu-toggle[aria-expanded='true'] {
  border-color: var(--accent);
}

.menu-toggle[aria-expanded='true'] .bar {
  background: var(--accent);
}

.menu-toggle[aria-expanded='true'] .bar-1 {
  top: 19px;
  transform: rotate(45deg);
}
.menu-toggle[aria-expanded='true'] .bar-2 {
  opacity: 0;
}
.menu-toggle[aria-expanded='true'] .bar-3 {
  top: 19px;
  transform: rotate(-45deg);
}

/* ── Mobile slide-down panel ───────────────────────────────────────── */

.mobile-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-nav);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--accent-dim);
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition:
    max-height 0.3s ease,
    visibility 0s linear 0.3s;
}

.mobile-panel.open {
  max-height: 320px;
  visibility: visible;
  transition:
    max-height 0.3s ease,
    visibility 0s linear 0s;
}

.nav-links-mobile {
  flex-direction: column;
  gap: 0;
  padding: 8px 0;
}

.nav-links-mobile li {
  width: 100%;
}

.nav-links-mobile a {
  display: block;
  padding: 14px 24px;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-left: 2px solid transparent;
  transition:
    color 0.2s,
    border-color 0.2s,
    background 0.2s;
}

.nav-links-mobile a:hover,
.nav-links-mobile a:focus-visible {
  color: var(--accent);
  border-left-color: var(--accent);
  background: rgba(0, 240, 255, 0.04);
  outline: none;
}

@media (max-width: 720px) {
  .nav-links-inline {
    display: none;
  }
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .nav-right {
    gap: 12px;
  }
  .nav-inner {
    padding: 0 16px;
  }
  .nav-logo {
    font-size: 0.95rem;
    letter-spacing: 1.5px;
  }
}

@media (max-width: 380px) {
  .nav-logo {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
  .nav-right {
    gap: 8px;
  }
  .nav-inner {
    padding: 0 12px;
  }
}
</style>
