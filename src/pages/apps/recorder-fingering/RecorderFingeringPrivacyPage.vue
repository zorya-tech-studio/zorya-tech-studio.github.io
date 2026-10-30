<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/recorder-fingering/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('recorderFingering.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('recorderFingering.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('recorderFingering.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('recorderFingering.name') }} — {{ t('recorderFingering.subtitle') }}
    </p>
    <p class="updated-date">{{ t('recorderFingering.privacy.updated') }}: 2026-10-30</p>
    <p class="intro-text">{{ t('recorderFingering.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.short_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('recorderFingering.privacy.short_b1') }}</li>
        <li>{{ t('recorderFingering.privacy.short_b2') }}</li>
        <li>{{ t('recorderFingering.privacy.short_b3') }}</li>
        <li>{{ t('recorderFingering.privacy.short_b4') }}</li>
        <li>{{ t('recorderFingering.privacy.short_b5') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('recorderFingering.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.mic_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.mic_p1') }}</p>
      <p class="section-text">{{ t('recorderFingering.privacy.mic_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.ads_p1') }}</p>
      <p class="section-text">{{ t('recorderFingering.privacy.ads_p2') }}</p>
      <p class="section-text">{{ t('recorderFingering.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.permissions_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('recorderFingering.privacy.permissions_b1') }}</li>
        <li>{{ t('recorderFingering.privacy.permissions_b2') }}</li>
        <li>{{ t('recorderFingering.privacy.permissions_b3') }}</li>
        <li>{{ t('recorderFingering.privacy.permissions_b4') }}</li>
        <li>{{ t('recorderFingering.privacy.permissions_b5') }}</li>
      </ul>
      <p class="section-text">{{ t('recorderFingering.privacy.permissions_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.analytics_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.analytics_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.deletion_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.deletion_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('recorderFingering.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('recorderFingering.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
