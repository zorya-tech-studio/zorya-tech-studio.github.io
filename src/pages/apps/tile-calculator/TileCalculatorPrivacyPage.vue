<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/tile-calculator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('tileCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('tileCalculator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('tileCalculator.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('tileCalculator.name') }} — {{ t('tileCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('tileCalculator.privacy.updated') }}: 2026-10-15</p>
    <p class="intro-text">{{ t('tileCalculator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('tileCalculator.privacy.storage_projects') }}</li>
        <li>{{ t('tileCalculator.privacy.storage_academy') }}</li>
        <li>{{ t('tileCalculator.privacy.storage_logo') }}</li>
        <li>{{ t('tileCalculator.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('tileCalculator.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.files_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.files_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('tileCalculator.privacy.ads_google_policy') }}</li>
        <li>{{ t('tileCalculator.privacy.ads_google_ads') }}</li>
      </ul>
      <p class="section-text">{{ t('tileCalculator.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('tileCalculator.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.permissions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('tileCalculator.privacy.not_accounts') }}</li>
        <li>{{ t('tileCalculator.privacy.not_server') }}</li>
        <li>{{ t('tileCalculator.privacy.not_notifications') }}</li>
        <li>{{ t('tileCalculator.privacy.not_purchases') }}</li>
        <li>{{ t('tileCalculator.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('tileCalculator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('tileCalculator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
