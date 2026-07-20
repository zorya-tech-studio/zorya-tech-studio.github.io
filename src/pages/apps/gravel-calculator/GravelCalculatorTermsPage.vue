<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/gravel-calculator/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/gravel-calculator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('gravelCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('gravelCalculator.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('gravelCalculator.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('gravelCalculator.name') }} — {{ t('gravelCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('gravelCalculator.terms.updated') }}: 2026-06-26</p>

    <p class="intro-text">{{ t('gravelCalculator.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.terms.use_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.terms.use_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.terms.accuracy_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.terms.accuracy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.terms.ads_title') }}</h2>
      <p class="section-text">
        {{ t('gravelCalculator.terms.ads_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
