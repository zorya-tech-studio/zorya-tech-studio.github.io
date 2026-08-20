<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/wire-size-calc/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/wire-size-calc/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('wireSizeCalc.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('wireSizeCalc.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('wireSizeCalc.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('wireSizeCalc.name') }} — {{ t('wireSizeCalc.subtitle') }}</p>
    <p class="updated-date">{{ t('wireSizeCalc.terms.updated') }}: 2026-08-20</p>

    <p class="intro-text">{{ t('wireSizeCalc.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.license_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.notadvice_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.restrictions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('wireSizeCalc.terms.restrictions_reverse') }}</li>
        <li>{{ t('wireSizeCalc.terms.restrictions_modify') }}</li>
        <li>{{ t('wireSizeCalc.terms.restrictions_distribute') }}</li>
        <li>{{ t('wireSizeCalc.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.privacy_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.privacy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.law_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
