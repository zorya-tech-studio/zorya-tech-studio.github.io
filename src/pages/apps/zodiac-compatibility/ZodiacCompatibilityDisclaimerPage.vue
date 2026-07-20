<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/zodiac-compatibility/privacy-policy`)
const termsUrl = computed(() => `/${locale.value}/zodiac-compatibility/terms`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/zodiac-compatibility/disclaimer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="disclaimer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('zodiacCompatibility.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('zodiacCompatibility.disclaimer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('zodiacCompatibility.disclaimer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('zodiacCompatibility.name') }} — {{ t('zodiacCompatibility.subtitle') }}
    </p>
    <p class="updated-date">{{ t('zodiacCompatibility.disclaimer.updated') }}: 2026-06-12</p>

    <p class="intro-text">{{ t('zodiacCompatibility.disclaimer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.disclaimer.entertainment_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.disclaimer.entertainment_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.disclaimer.no_guarantees_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.disclaimer.no_guarantees_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.disclaimer.general_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.disclaimer.general_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.disclaimer.contact_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.disclaimer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
