<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/piano-tuner/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('pianoTuner.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('pianoTuner.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('pianoTuner.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('pianoTuner.name') }} — {{ t('pianoTuner.subtitle') }}</p>
    <p class="updated-date">{{ t('pianoTuner.privacy.updated') }}: 2026-11-19</p>
    <p class="intro-text">{{ t('pianoTuner.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('pianoTuner.privacy.summary_b1') }}</li>
        <li>{{ t('pianoTuner.privacy.summary_b2') }}</li>
        <li>{{ t('pianoTuner.privacy.summary_b3') }}</li>
        <li>{{ t('pianoTuner.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.mic_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.mic_p1') }}</p>
      <p class="section-text">{{ t('pianoTuner.privacy.mic_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('pianoTuner.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('pianoTuner.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/partner-sites</a
        >
      </p>
      <p class="section-text">{{ t('pianoTuner.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.crash_p1') }}</p>
      <p class="section-text">
        {{ t('pianoTuner.privacy.crash_p2') }}
        <a
          href="https://firebase.google.com/support/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >firebase.google.com/support/privacy</a
        >
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.permissions_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.feedback_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.feedback_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.rating_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.rating_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pianoTuner.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('pianoTuner.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
