<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/bluetooth-finder/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/bluetooth-finder/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('bluetoothFinder.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('bluetoothFinder.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('bluetoothFinder.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('bluetoothFinder.name') }} — {{ t('bluetoothFinder.subtitle') }}</p>
    <p class="updated-date">{{ t('bluetoothFinder.terms.updated') }}: 2026-10-12</p>
    <p class="intro-text">{{ t('bluetoothFinder.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.license_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.finder_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.finder_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.heart_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.heart_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.trackers_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.trackers_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.use_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.use_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.data_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.data_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('bluetoothFinder.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.law_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
