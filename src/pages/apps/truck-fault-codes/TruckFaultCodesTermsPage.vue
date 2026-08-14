<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/truck-fault-codes/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/truck-fault-codes/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('truckFaultCodes.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('truckFaultCodes.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('truckFaultCodes.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('truckFaultCodes.name') }} — {{ t('truckFaultCodes.subtitle') }}</p>
    <p class="updated-date">{{ t('truckFaultCodes.terms.updated') }}: 2026-08-14</p>

    <p class="intro-text">{{ t('truckFaultCodes.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.license_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.notascantool_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.notascantool_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.restrictions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('truckFaultCodes.terms.restrictions_reverse') }}</li>
        <li>{{ t('truckFaultCodes.terms.restrictions_modify') }}</li>
        <li>{{ t('truckFaultCodes.terms.restrictions_distribute') }}</li>
        <li>{{ t('truckFaultCodes.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.privacy_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.privacy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.law_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('truckFaultCodes.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('truckFaultCodes.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
