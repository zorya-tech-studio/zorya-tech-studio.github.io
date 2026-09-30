<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/biblia-reina-valera/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/biblia-reina-valera/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('bibliaReinaValera.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('bibliaReinaValera.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('bibliaReinaValera.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('bibliaReinaValera.name') }} — {{ t('bibliaReinaValera.subtitle') }}
    </p>
    <p class="updated-date">{{ t('bibliaReinaValera.privacy.updated') }}: 2026-09-30</p>
    <p class="intro-text">{{ t('bibliaReinaValera.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('bibliaReinaValera.privacy.storage_reading') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.storage_notes') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.storage_practice') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('bibliaReinaValera.privacy.ads_google_policy') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.ads_reset_id') }}</p>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.ads_rewarded') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.audio_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.audio_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.sharing_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.sharing_text') }}</p>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.review_text') }}</p>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.update_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('bibliaReinaValera.privacy.not_accounts') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.not_permissions') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.not_analytics') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.not_selling') }}</li>
        <li>{{ t('bibliaReinaValera.privacy.not_purchases') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaReinaValera.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('bibliaReinaValera.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
