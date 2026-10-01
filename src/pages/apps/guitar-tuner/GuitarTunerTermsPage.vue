<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/guitar-tuner/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/guitar-tuner/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('guitarTuner.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('guitarTuner.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('guitarTuner.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('guitarTuner.name') }} — {{ t('guitarTuner.subtitle') }}</p>
    <p class="updated-date">{{ t('guitarTuner.terms.updated') }}: 2026-10-01</p>
    <p class="intro-text">{{ t('guitarTuner.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.license_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.content_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.content_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.audio_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.audio_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('guitarTuner.terms.restrictions_reverse') }}</li>
        <li>{{ t('guitarTuner.terms.restrictions_modify') }}</li>
        <li>{{ t('guitarTuner.terms.restrictions_distribute') }}</li>
        <li>{{ t('guitarTuner.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.price_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('guitarTuner.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.law_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
