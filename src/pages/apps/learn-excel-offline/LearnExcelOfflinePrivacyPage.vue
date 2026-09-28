<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/learn-excel-offline/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/learn-excel-offline/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('learnExcelOffline.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('learnExcelOffline.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('learnExcelOffline.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('learnExcelOffline.name') }} — {{ t('learnExcelOffline.subtitle') }}
    </p>
    <p class="updated-date">{{ t('learnExcelOffline.privacy.updated') }}: 2026-09-28</p>
    <p class="intro-text">{{ t('learnExcelOffline.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('learnExcelOffline.privacy.storage_progress') }}</li>
        <li>{{ t('learnExcelOffline.privacy.storage_gamification') }}</li>
        <li>{{ t('learnExcelOffline.privacy.storage_certificates') }}</li>
        <li>{{ t('learnExcelOffline.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('learnExcelOffline.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('learnExcelOffline.privacy.ads_google_policy') }}</li>
        <li>{{ t('learnExcelOffline.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('learnExcelOffline.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('learnExcelOffline.privacy.ads_reset_id') }}</p>
      <p class="section-text">{{ t('learnExcelOffline.privacy.ads_rewarded') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.sharing_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.sharing_text') }}</p>
      <p class="section-text">{{ t('learnExcelOffline.privacy.review_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('learnExcelOffline.privacy.not_accounts') }}</li>
        <li>{{ t('learnExcelOffline.privacy.not_permissions') }}</li>
        <li>{{ t('learnExcelOffline.privacy.not_analytics') }}</li>
        <li>{{ t('learnExcelOffline.privacy.not_selling') }}</li>
        <li>{{ t('learnExcelOffline.privacy.not_purchases') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('learnExcelOffline.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('learnExcelOffline.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
