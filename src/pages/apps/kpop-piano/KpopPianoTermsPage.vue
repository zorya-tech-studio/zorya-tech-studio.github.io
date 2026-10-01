<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/kpop-piano/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/kpop-piano/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('kpopPiano.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('kpopPiano.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('kpopPiano.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('kpopPiano.name') }} — {{ t('kpopPiano.subtitle') }}</p>
    <p class="updated-date">{{ t('kpopPiano.terms.updated') }}: 2026-10-01</p>
    <p class="intro-text">{{ t('kpopPiano.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.app_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.app_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.fiction_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.fiction_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.license_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.rewards_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.rewards_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.availability_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.availability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('kpopPiano.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
