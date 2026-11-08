<script setup>
// One shared header for every app legal page (privacy, terms, offer, disclaimer):
// breadcrumbs, app icon + name, then the Privacy | Terms switcher and the language toggle.
// Mounted once in App.vue; the page's own breadcrumbs/title/app label are hidden there.
// The app is found from route.meta.app (set on every app privacy and terms route).
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { apps, iconThumb } from '../data/apps.js'
import { TERMS_TEXT } from '../data/appTerms.js'
import { termsPath } from '../data/termsRoutes.js'

const route = useRoute()
const { t } = useI18n()

const locale = computed(() => (route.params.locale === 'uk' ? 'uk' : 'en'))
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() =>
  route.path.replace(/^\/(uk|en)(?=\/|$)/, `/${otherLocale.value}`),
)
const app = computed(() => {
  const slug = route.meta.app
  return slug ? apps.find((a) => a.slug === slug) : null
})
const text = computed(() => TERMS_TEXT[locale.value])
const privacyTo = computed(() => app.value?.privacyRoute?.(locale.value))
const termsTo = computed(() => `/${locale.value}/${termsPath(app.value?.slug)}`)
const active = computed(() => {
  if (/\/privacy/.test(route.path)) return 'privacy'
  if (/\/(terms|offer)/.test(route.path)) return 'terms'
  return null
})
const docTitle = computed(() =>
  active.value === 'privacy'
    ? text.value.privacy
    : active.value === 'terms'
      ? text.value.title
      : '',
)
</script>

<template>
  <header v-if="app && privacyTo" class="legal-head">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="`/${locale}`">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <router-link :to="`/${locale}/projects`">{{ text.back }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t(app.nameKey) }}</span>
    </nav>

    <div class="legal-head__app">
      <img
        :src="iconThumb(app)"
        alt=""
        class="legal-head__icon"
        width="64"
        height="64"
        decoding="async"
      />
      <div class="legal-head__names">
        <h1 class="legal-head__title">
          {{ t(app.nameKey) }}<span v-if="docTitle" class="legal-head__sr"> — {{ docTitle }}</span>
        </h1>
        <p v-if="app.subtitleKey" class="legal-head__subtitle">{{ t(app.subtitleKey) }}</p>
      </div>
    </div>

    <div class="legal-head__bar">
      <nav class="legal-head__tabs" :aria-label="`${text.privacy} / ${text.title}`">
        <router-link
          :to="privacyTo"
          class="legal-head__tab"
          :class="{ 'is-active': active === 'privacy' }"
          :aria-current="active === 'privacy' ? 'page' : undefined"
        >
          {{ text.privacy }}
        </router-link>
        <router-link
          :to="termsTo"
          class="legal-head__tab"
          :class="{ 'is-active': active === 'terms' }"
          :aria-current="active === 'terms' ? 'page' : undefined"
        >
          {{ text.title }}
        </router-link>
      </nav>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocale.toUpperCase() }}
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.legal-head {
  max-width: 940px;
  margin: 0 auto;
  padding: calc(var(--nav-h) + var(--sp-8)) var(--gutter) 0;
}
.legal-head__app {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  margin: var(--sp-5) 0 var(--sp-5);
}
.legal-head__icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 16px;
}
.legal-head__names {
  min-width: 0;
}
.legal-head__title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.1rem);
  line-height: 1.2;
  color: var(--text);
}
.legal-head__subtitle {
  margin: 4px 0 0;
  color: var(--text-muted);
}
/* Document name for screen readers and search; the active tab shows it visually. */
.legal-head__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.legal-head__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-3);
  flex-wrap: wrap;
  padding-bottom: var(--sp-5);
  border-bottom: 1px solid var(--hairline);
}
.legal-head__tabs {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
  background: var(--surface-1);
  border: 1px solid var(--hairline);
  border-radius: var(--r-pill);
}
.legal-head__tab {
  padding: 0.5rem 1.1rem;
  border-radius: var(--r-pill);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}
.legal-head__tab:hover {
  color: var(--text);
}
.legal-head__tab.is-active {
  color: var(--bg);
  background: var(--accent);
}
.legal-head__tab:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
