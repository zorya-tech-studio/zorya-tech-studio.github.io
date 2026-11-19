<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/baglama/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('baglama.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('baglama.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('baglama.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('baglama.name') }} — {{ t('baglama.subtitle') }}</p>
    <p class="updated-date">{{ t('baglama.privacy.updated') }}: 2026-11-19</p>
    <p class="intro-text">{{ t('baglama.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('baglama.privacy.summary_b1') }}</li>
        <li>{{ t('baglama.privacy.summary_b2') }}</li>
        <li>{{ t('baglama.privacy.summary_b3') }}</li>
        <li>{{ t('baglama.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.mic_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.mic_p1') }}</p>
      <p class="section-text">{{ t('baglama.privacy.mic_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('baglama.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('baglama.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/partner-sites</a
        >
      </p>
      <p class="section-text">{{ t('baglama.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.crash_p1') }}</p>
      <p class="section-text">
        {{ t('baglama.privacy.crash_p2') }}
        <a
          href="https://firebase.google.com/support/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >firebase.google.com/support/privacy</a
        >
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.permissions_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.feedback_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.feedback_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('baglama.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('baglama.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
