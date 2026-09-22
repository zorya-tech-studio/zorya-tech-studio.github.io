<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/braille-alphabet/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/braille-alphabet/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('brailleAlphabet.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('brailleAlphabet.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('brailleAlphabet.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('brailleAlphabet.name') }} — {{ t('brailleAlphabet.subtitle') }}</p>
    <p class="updated-date">{{ t('brailleAlphabet.terms.updated') }}: 2026-09-22</p>
    <p class="intro-text">{{ t('brailleAlphabet.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.license_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('brailleAlphabet.terms.restrictions_reverse') }}</li>
        <li>{{ t('brailleAlphabet.terms.restrictions_modify') }}</li>
        <li>{{ t('brailleAlphabet.terms.restrictions_distribute') }}</li>
        <li>{{ t('brailleAlphabet.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.price_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('brailleAlphabet.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.law_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
