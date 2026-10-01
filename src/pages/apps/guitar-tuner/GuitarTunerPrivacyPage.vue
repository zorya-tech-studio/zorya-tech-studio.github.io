<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/guitar-tuner/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/guitar-tuner/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('guitarTuner.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('guitarTuner.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('guitarTuner.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('guitarTuner.name') }} — {{ t('guitarTuner.subtitle') }}</p>
    <p class="updated-date">{{ t('guitarTuner.privacy.updated') }}: 2026-10-01</p>
    <p class="intro-text">{{ t('guitarTuner.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('guitarTuner.privacy.storage_reading') }}</li>
        <li>{{ t('guitarTuner.privacy.storage_notes') }}</li>
        <li>{{ t('guitarTuner.privacy.storage_practice') }}</li>
        <li>{{ t('guitarTuner.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('guitarTuner.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('guitarTuner.privacy.ads_google_policy') }}</li>
        <li>{{ t('guitarTuner.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('guitarTuner.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('guitarTuner.privacy.ads_reset_id') }}</p>
      <p class="section-text">{{ t('guitarTuner.privacy.ads_rewarded') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.audio_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.audio_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.sharing_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.sharing_text') }}</p>
      <p class="section-text">{{ t('guitarTuner.privacy.review_text') }}</p>
      <p class="section-text">{{ t('guitarTuner.privacy.update_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('guitarTuner.privacy.not_accounts') }}</li>
        <li>{{ t('guitarTuner.privacy.not_permissions') }}</li>
        <li>{{ t('guitarTuner.privacy.not_analytics') }}</li>
        <li>{{ t('guitarTuner.privacy.not_selling') }}</li>
        <li>{{ t('guitarTuner.privacy.not_purchases') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('guitarTuner.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('guitarTuner.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
