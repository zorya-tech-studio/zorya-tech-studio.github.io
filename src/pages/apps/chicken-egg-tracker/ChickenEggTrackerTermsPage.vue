<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/chicken-egg-tracker/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/chicken-egg-tracker/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('chickenEggTracker.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('chickenEggTracker.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('chickenEggTracker.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('chickenEggTracker.name') }} — {{ t('chickenEggTracker.subtitle') }}
    </p>
    <p class="updated-date">{{ t('chickenEggTracker.terms.updated') }}: 2026-10-11</p>
    <p class="intro-text">{{ t('chickenEggTracker.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.license_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.info_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.info_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.results_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.results_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.data_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.data_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('chickenEggTracker.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.law_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
