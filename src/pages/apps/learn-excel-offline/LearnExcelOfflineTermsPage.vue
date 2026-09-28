<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/learn-excel-offline/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/learn-excel-offline/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('learnExcelOffline.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('learnExcelOffline.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('learnExcelOffline.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('learnExcelOffline.name') }} — {{ t('learnExcelOffline.subtitle') }}
    </p>
    <p class="updated-date">{{ t('learnExcelOffline.terms.updated') }}: 2026-09-28</p>
    <p class="intro-text">{{ t('learnExcelOffline.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.license_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.educational_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.educational_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.engine_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.engine_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.trademark_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.trademark_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('learnExcelOffline.terms.restrictions_reverse') }}</li>
        <li>{{ t('learnExcelOffline.terms.restrictions_modify') }}</li>
        <li>{{ t('learnExcelOffline.terms.restrictions_distribute') }}</li>
        <li>{{ t('learnExcelOffline.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.price_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('learnExcelOffline.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.law_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
