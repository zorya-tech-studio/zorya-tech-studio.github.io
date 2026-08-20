<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/tire-size-calculator/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/tire-size-calculator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('tireSizeDecoder.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('tireSizeDecoder.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('tireSizeDecoder.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('tireSizeDecoder.name') }} — {{ t('tireSizeDecoder.subtitle') }}</p>
    <p class="updated-date">{{ t('tireSizeDecoder.terms.updated') }}: 2026-08-20</p>

    <p class="intro-text">{{ t('tireSizeDecoder.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.license_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.notadvice_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.restrictions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('tireSizeDecoder.terms.restrictions_reverse') }}</li>
        <li>{{ t('tireSizeDecoder.terms.restrictions_modify') }}</li>
        <li>{{ t('tireSizeDecoder.terms.restrictions_distribute') }}</li>
        <li>{{ t('tireSizeDecoder.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.privacy_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.privacy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.law_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tireSizeDecoder.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('tireSizeDecoder.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
