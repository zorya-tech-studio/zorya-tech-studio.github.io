<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/financial-calculators/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/financial-calculators/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('financialCalculators.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('financialCalculators.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('financialCalculators.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('financialCalculators.name') }} — {{ t('financialCalculators.subtitle') }}
    </p>
    <p class="updated-date">{{ t('financialCalculators.terms.updated') }}: 2026-09-19</p>
    <p class="intro-text">{{ t('financialCalculators.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.license_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('financialCalculators.terms.restrictions_reverse') }}</li>
        <li>{{ t('financialCalculators.terms.restrictions_modify') }}</li>
        <li>{{ t('financialCalculators.terms.restrictions_distribute') }}</li>
        <li>{{ t('financialCalculators.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.price_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('financialCalculators.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.law_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
