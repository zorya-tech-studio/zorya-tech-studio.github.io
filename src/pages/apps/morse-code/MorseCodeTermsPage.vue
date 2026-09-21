<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/morse-code/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/morse-code/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('morseCode.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('morseCode.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('morseCode.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('morseCode.name') }} — {{ t('morseCode.subtitle') }}</p>
    <p class="updated-date">{{ t('morseCode.terms.updated') }}: 2026-09-21</p>
    <p class="intro-text">{{ t('morseCode.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.license_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.flash_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.flash_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('morseCode.terms.restrictions_reverse') }}</li>
        <li>{{ t('morseCode.terms.restrictions_modify') }}</li>
        <li>{{ t('morseCode.terms.restrictions_distribute') }}</li>
        <li>{{ t('morseCode.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.price_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('morseCode.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.law_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('morseCode.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
