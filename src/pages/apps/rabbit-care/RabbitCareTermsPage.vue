<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/rabbit-care/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/rabbit-care/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('rabbitCare.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('rabbitCare.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('rabbitCare.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('rabbitCare.name') }} — {{ t('rabbitCare.subtitle') }}</p>
    <p class="updated-date">{{ t('rabbitCare.terms.updated') }}: 2026-10-10</p>
    <p class="intro-text">{{ t('rabbitCare.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.license_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('rabbitCare.terms.restrictions_reverse') }}</li>
        <li>{{ t('rabbitCare.terms.restrictions_modify') }}</li>
        <li>{{ t('rabbitCare.terms.restrictions_distribute') }}</li>
        <li>{{ t('rabbitCare.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.price_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('rabbitCare.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.law_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
