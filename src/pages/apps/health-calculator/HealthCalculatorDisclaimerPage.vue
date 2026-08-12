<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/health-calculator/privacy-policy`)
const termsUrl = computed(() => `/${locale.value}/health-calculator/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/health-calculator/disclaimer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="disclaimer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('healthCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('healthCalculator.disclaimer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('healthCalculator.disclaimer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('healthCalculator.name') }} — {{ t('healthCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('healthCalculator.disclaimer.updated') }}: 2026-08-13</p>

    <p class="intro-text">{{ t('healthCalculator.disclaimer.statement') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.disclaimer.estimates_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.disclaimer.estimates_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.disclaimer.not_device_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.disclaimer.not_device_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.disclaimer.sources_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.disclaimer.sources_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.disclaimer.safety_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.disclaimer.safety_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.disclaimer.safety_help') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.disclaimer.emergency_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.disclaimer.emergency_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.disclaimer.contact_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.disclaimer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
