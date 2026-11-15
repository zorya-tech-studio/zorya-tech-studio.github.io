<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/spectrum-analyzer/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('spectrumAnalyzer.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('spectrumAnalyzer.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('spectrumAnalyzer.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('spectrumAnalyzer.name') }} — {{ t('spectrumAnalyzer.subtitle') }}</p>
    <p class="updated-date">{{ t('spectrumAnalyzer.privacy.updated') }}: 2026-11-15</p>
    <p class="intro-text">{{ t('spectrumAnalyzer.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('spectrumAnalyzer.privacy.summary_b1') }}</li>
        <li>{{ t('spectrumAnalyzer.privacy.summary_b2') }}</li>
        <li>{{ t('spectrumAnalyzer.privacy.summary_b3') }}</li>
        <li>{{ t('spectrumAnalyzer.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('spectrumAnalyzer.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/ads</a
        >
      </p>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.crash_p1') }}</p>
      <p class="section-text">
        {{ t('spectrumAnalyzer.privacy.crash_p2') }}
        <a
          href="https://firebase.google.com/support/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >firebase.google.com/support/privacy</a
        >
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.notif_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.notif_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('spectrumAnalyzer.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('spectrumAnalyzer.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
