<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/harmonica/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('harmonica.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('harmonica.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('harmonica.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('harmonica.name') }} — {{ t('harmonica.subtitle') }}</p>
    <p class="updated-date">{{ t('harmonica.privacy.updated') }}: 2026-11-19</p>
    <p class="intro-text">{{ t('harmonica.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('harmonica.privacy.summary_b1') }}</li>
        <li>{{ t('harmonica.privacy.summary_b2') }}</li>
        <li>{{ t('harmonica.privacy.summary_b3') }}</li>
        <li>{{ t('harmonica.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.mic_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.mic_p1') }}</p>
      <p class="section-text">{{ t('harmonica.privacy.mic_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('harmonica.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('harmonica.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/partner-sites</a
        >
      </p>
      <p class="section-text">{{ t('harmonica.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.crash_p1') }}</p>
      <p class="section-text">
        {{ t('harmonica.privacy.crash_p2') }}
        <a
          href="https://firebase.google.com/support/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >firebase.google.com/support/privacy</a
        >
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.permissions_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.rating_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.rating_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.feedback_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.feedback_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('harmonica.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('harmonica.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
