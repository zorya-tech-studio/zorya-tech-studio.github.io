<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/hvac-calculator/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/hvac-calculator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('hvacCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('hvacCalculator.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('hvacCalculator.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('hvacCalculator.name') }} — {{ t('hvacCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('hvacCalculator.terms.updated') }}: 2026-09-16</p>
    <p class="intro-text">{{ t('hvacCalculator.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.license_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('hvacCalculator.terms.restrictions_reverse') }}</li>
        <li>{{ t('hvacCalculator.terms.restrictions_modify') }}</li>
        <li>{{ t('hvacCalculator.terms.restrictions_distribute') }}</li>
        <li>{{ t('hvacCalculator.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.price_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('hvacCalculator.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.law_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
