<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/kpop-piano/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/kpop-piano/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('kpopPiano.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('kpopPiano.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('kpopPiano.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('kpopPiano.name') }} — {{ t('kpopPiano.subtitle') }}</p>
    <p class="updated-date">{{ t('kpopPiano.privacy.updated') }}: 2026-10-01</p>
    <p class="intro-text">{{ t('kpopPiano.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('kpopPiano.privacy.storage_progress') }}</li>
        <li>{{ t('kpopPiano.privacy.storage_settings') }}</li>
        <li>{{ t('kpopPiano.privacy.storage_counters') }}</li>
      </ul>
      <p class="section-text">{{ t('kpopPiano.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.ads_text') }}</p>
      <p class="section-text">{{ t('kpopPiano.privacy.ads_unity') }}</p>
      <ul class="permissions-list">
        <li>{{ t('kpopPiano.privacy.ads_google_policy') }}</li>
        <li>{{ t('kpopPiano.privacy.ads_google_partners') }}</li>
        <li>{{ t('kpopPiano.privacy.ads_unity_policy') }}</li>
      </ul>
      <p class="section-text">{{ t('kpopPiano.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('kpopPiano.privacy.ads_reset_id') }}</p>
      <p class="section-text">{{ t('kpopPiano.privacy.ads_rating') }}</p>
      <p class="section-text">{{ t('kpopPiano.privacy.ads_rewarded') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.review_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.review_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopPiano.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('kpopPiano.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
