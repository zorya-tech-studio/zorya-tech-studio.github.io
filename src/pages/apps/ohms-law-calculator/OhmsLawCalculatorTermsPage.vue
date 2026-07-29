<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/ohms-law-calculator/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/ohms-law-calculator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('ohmsLawCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('ohmsLawCalculator.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('ohmsLawCalculator.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('ohmsLawCalculator.name') }} — {{ t('ohmsLawCalculator.subtitle') }}
    </p>
    <p class="updated-date">{{ t('ohmsLawCalculator.terms.updated') }}: 2026-07-29</p>

    <p class="intro-text">{{ t('ohmsLawCalculator.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.use_title') }}</h2>
      <p class="section-text">{{ t('ohmsLawCalculator.terms.use_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.accuracy_title') }}</h2>
      <p class="section-text">{{ t('ohmsLawCalculator.terms.accuracy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.safety_title') }}</h2>
      <p class="section-text">{{ t('ohmsLawCalculator.terms.safety_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('ohmsLawCalculator.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.ads_title') }}</h2>
      <p class="section-text">
        {{ t('ohmsLawCalculator.terms.ads_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('ohmsLawCalculator.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ohmsLawCalculator.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('ohmsLawCalculator.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
