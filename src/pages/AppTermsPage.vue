<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import {
  CONTACT_EMAIL,
  TERMS_TEXT,
  TERMS_UPDATED,
  findTermsTarget,
  profilesFor,
} from '../data/appTerms.js'
import { APP_TERMS_EXTRAS } from '../data/appTermsExtras.js'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => (route.params.locale === 'uk' ? 'uk' : 'en'))
const text = computed(() => TERMS_TEXT[locale.value])
const target = computed(() => findTermsTarget(route.meta.app))

const appName = computed(() => {
  const tg = target.value
  if (!tg) return ''
  return tg.kind === 'app' ? t(tg.app.nameKey) : tg.face.name
})

const privacyUrl = computed(() => {
  const tg = target.value
  if (tg?.kind === 'app' && tg.app.privacyRoute) return tg.app.privacyRoute(locale.value)
  return tg?.kind === 'watchface'
    ? `/${locale.value}/privacy#watch-faces`
    : `/${locale.value}/privacy`
})

const listUrl = computed(() =>
  target.value?.kind === 'watchface' ? `/${locale.value}/watch-faces` : `/${locale.value}/projects`,
)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() =>
  route.path.replace(/^\/(uk|en)(?=\/|$)/, `/${otherLocale.value}`),
)

// Sections for this app: universal ones plus those whose profile matches, numbered in order.
const sections = computed(() => {
  const tg = target.value
  if (!tg) return []
  const profiles = profilesFor(tg)
  const a = appName.value
  const list = text.value.sections
    .filter((s) => !s.when || profiles.has(s.when))
    .map((s) => ({
      ...s,
      paras: (s.paras || []).map((p) => p(a)),
      list: (s.list || []).map((p) => p(a)),
    }))
  // App-specific points (what the app does, its ads, purchases, accuracy...) right after "Content and accuracy".
  const extras = tg.kind === 'app' ? APP_TERMS_EXTRAS[tg.app.slug] : null
  if (extras?.length) {
    const at = list.findIndex((s) => s.id === 'content') + 1
    list.splice(at, 0, {
      id: 'app-specific',
      title: text.value.extrasTitle(a),
      paras: [],
      list: [],
      subsections: extras.map((b) => ({
        title: b.title ? t(b.title) : '',
        paras: (b.paras || []).map((k) => t(k)),
        list: (b.list || []).map((k) => t(k)),
      })),
    })
  }
  return list.map((s, i) => ({ ...s, heading: `${i + 1}. ${s.title.replace(/^\d+\.\s*/, '')}` }))
})
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="`/${locale}`">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <router-link :to="listUrl">{{ text.back }}</router-link>
      <template v-if="target">
        <span class="breadcrumb-sep">/</span>
        <span>{{ appName }}</span>
      </template>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ text.title }}</span>
    </nav>

    <template v-if="target">
      <div class="page-header">
        <h1 class="page-title">{{ text.title }}</h1>
        <div class="header-actions">
          <router-link :to="privacyUrl" class="header-link">{{ text.privacy }}</router-link>
          <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
            {{ otherLocale.toUpperCase() }}
          </router-link>
        </div>
      </div>

      <p class="app-label">{{ text.appLabel(appName) }}</p>
      <p class="updated-date">{{ text.updated }}: {{ TERMS_UPDATED }}</p>

      <div v-for="s in sections" :id="s.id" :key="s.id" class="policy-section">
        <h2 class="section-heading">{{ s.heading }}</h2>
        <p v-for="(p, i) in s.paras" :key="i" class="section-text">{{ p }}</p>
        <ul v-if="s.list.length" class="rules-list">
          <li v-for="(li, i) in s.list" :key="i">{{ li }}</li>
        </ul>
        <div v-for="(sub, j) in s.subsections || []" :key="j" class="subsection">
          <h3 v-if="sub.title" class="subsection-heading">{{ sub.title }}</h3>
          <p v-for="(p, i) in sub.paras" :key="i" class="subsection-text">{{ p }}</p>
          <ul v-if="sub.list.length" class="rules-list">
            <li v-for="(li, i) in sub.list" :key="i">{{ li }}</li>
          </ul>
        </div>
        <p v-if="s.privacyLink" class="section-text">
          <router-link :to="privacyUrl" class="inline-link">{{ text.privacyLinkText }}</router-link>
        </p>
        <p v-if="s.contact" class="section-text">
          {{ text.contactLead }}
          <a :href="`mailto:${CONTACT_EMAIL}`" class="contact-email">{{ CONTACT_EMAIL }}</a>
        </p>
      </div>
    </template>

    <template v-else>
      <h1 class="page-title">{{ text.notFoundTitle }}</h1>
      <p class="intro-text">
        {{ text.notFoundText }}
        <router-link :to="`/${locale}/projects`" class="inline-link">{{ text.back }}</router-link>
      </p>
    </template>
  </div>
</template>
