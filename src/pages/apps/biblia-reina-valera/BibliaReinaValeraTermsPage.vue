<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/biblia-reina-valera/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/biblia-reina-valera/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('bibliaReinaValera.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('bibliaReinaValera.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('bibliaReinaValera.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('bibliaReinaValera.name') }} — {{ t('bibliaReinaValera.subtitle') }}
    </p>
    <p class="updated-date">{{ t('bibliaReinaValera.terms.updated') }}: 2026-09-30</p>
    <p class="intro-text">{{ t('bibliaReinaValera.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.license_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.content_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.content_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.audio_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.audio_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('bibliaReinaValera.terms.restrictions_reverse') }}</li>
        <li>{{ t('bibliaReinaValera.terms.restrictions_modify') }}</li>
        <li>{{ t('bibliaReinaValera.terms.restrictions_distribute') }}</li>
        <li>{{ t('bibliaReinaValera.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.price_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('bibliaReinaValera.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.law_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
