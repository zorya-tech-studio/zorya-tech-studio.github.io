<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/pool-chemistry/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/pool-chemistry/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('poolChemistry.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('poolChemistry.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('poolChemistry.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('poolChemistry.name') }} — {{ t('poolChemistry.subtitle') }}</p>
    <p class="updated-date">{{ t('poolChemistry.terms.updated') }}: 2026-09-21</p>
    <p class="intro-text">{{ t('poolChemistry.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.license_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('poolChemistry.terms.restrictions_reverse') }}</li>
        <li>{{ t('poolChemistry.terms.restrictions_modify') }}</li>
        <li>{{ t('poolChemistry.terms.restrictions_distribute') }}</li>
        <li>{{ t('poolChemistry.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.price_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('poolChemistry.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.law_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('poolChemistry.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('poolChemistry.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
