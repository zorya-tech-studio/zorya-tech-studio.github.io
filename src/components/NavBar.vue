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
const servicesUrl = computed(() => `/${locale.value}/services`)

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
      <router-link :to="homeUrl" class="nav-logo" @click="closeMenu">
        <svg class="nav-logo__star" viewBox="0 0 64 64" width="20" height="20" aria-hidden="true">
          <path
            d="M32 3 C 34.5 23, 41 29.5, 61 32 C 41 34.5, 34.5 41, 32 61 C 29.5 41, 23 34.5, 3 32 C 23 29.5, 29.5 23, 32 3 Z"
            fill="currentColor"
          />
        </svg>
        <span>Zorya Tech Studio</span>
      </router-link>
      <div class="nav-right">
        <ul v-if="isHome" class="nav-links nav-links-inline">
          <li>
            <a href="#about">{{ t('nav.about') }}</a>
          </li>
          <li>
            <a href="#apps">{{ t('nav.apps') }}</a>
          </li>
          <li>
            <router-link :to="servicesUrl">{{ t('nav.services') }}</router-link>
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
            <router-link :to="servicesUrl">{{ t('nav.services') }}</router-link>
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
            <router-link
              role="menuitem"
              :to="servicesUrl"
              :tabindex="menuOpen ? 0 : -1"
              @click="onLinkClick"
              >{{ t('nav.services') }}</router-link
            >
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
              :to="servicesUrl"
              :tabindex="menuOpen ? 0 : -1"
              @click="onLinkClick"
              >{{ t('nav.services') }}</router-link
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
  height: var(--nav-h);
  display: flex;
  align-items: center;
  background: rgba(10, 13, 20, 0.25);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition:
    background var(--t-slow),
    border-color var(--t-slow);
}

.navbar.scrolled,
.navbar.menu-open {
  background: rgba(10, 13, 20, 0.82);
  border-bottom-color: var(--hairline);
}

.nav-inner {
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 16px;
  color: var(--text);
  letter-spacing: var(--ls-snug);
}

.nav-logo__star {
  color: var(--accent);
  filter: drop-shadow(0 0 6px rgba(242, 182, 90, 0.45));
}

.nav-right {
  display: flex;
  align-items: center;
  gap: var(--sp-5);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: var(--sp-6);
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  color: var(--text-muted);
  transition: color var(--t-fast);
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text);
}

.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: none;
  border: 1px solid var(--hairline);
  border-radius: var(--r-pill);
  padding: 5px 12px;
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  transition:
    border-color var(--t-fast),
    color var(--t-fast);
}

.lang-toggle:hover {
  border-color: var(--accent-soft);
  color: var(--text);
}

.lang-toggle .active {
  color: var(--accent);
}

.lang-sep {
  margin: 0 2px;
  opacity: 0.4;
}

/* ── Hamburger ─────────────────────────────────────────────────────── */

.menu-toggle {
  display: none; /* shown on mobile via media query */
  position: relative;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid var(--hairline);
  border-radius: var(--r-sm);
  cursor: pointer;
  padding: 0;
  transition: border-color var(--t-fast);
}

.menu-toggle:hover {
  border-color: var(--accent-soft);
}

.menu-toggle .bar {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 1.5px;
  background: var(--text-muted);
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
  border-color: var(--accent-soft);
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
  background: var(--surface-1);
  border-bottom: 1px solid var(--hairline);
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
  padding: 15px 24px;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: var(--ls-snug);
  border-left: 2px solid transparent;
  transition:
    color var(--t-fast),
    border-color var(--t-fast),
    background var(--t-fast);
}

.nav-links-mobile a:hover,
.nav-links-mobile a:focus-visible {
  color: var(--text);
  border-left-color: var(--accent);
  background: var(--surface-2);
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
