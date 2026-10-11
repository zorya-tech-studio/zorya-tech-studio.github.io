<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/bluetooth-finder/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('bluetoothFinder.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('bluetoothFinder.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('bluetoothFinder.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('bluetoothFinder.name') }} — {{ t('bluetoothFinder.subtitle') }}</p>
    <p class="updated-date">{{ t('bluetoothFinder.privacy.updated') }}: 2026-10-12</p>
    <p class="intro-text">{{ t('bluetoothFinder.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('bluetoothFinder.privacy.storage_saved') }}</li>
        <li>{{ t('bluetoothFinder.privacy.storage_seen') }}</li>
        <li>{{ t('bluetoothFinder.privacy.storage_heart') }}</li>
        <li>{{ t('bluetoothFinder.privacy.storage_settings') }}</li>
        <li>{{ t('bluetoothFinder.privacy.storage_counters') }}</li>
      </ul>
      <p class="section-text">{{ t('bluetoothFinder.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.bluetooth_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.bluetooth_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('bluetoothFinder.privacy.bluetooth_new') }}</li>
        <li>{{ t('bluetoothFinder.privacy.bluetooth_old') }}</li>
        <li>{{ t('bluetoothFinder.privacy.bluetooth_map') }}</li>
      </ul>
      <p class="section-text">{{ t('bluetoothFinder.privacy.bluetooth_others') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.heart_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.heart_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.trackers_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.trackers_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.files_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.files_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('bluetoothFinder.privacy.ads_google_policy') }}</li>
        <li>{{ t('bluetoothFinder.privacy.ads_google_ads') }}</li>
      </ul>
      <p class="section-text">{{ t('bluetoothFinder.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('bluetoothFinder.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('bluetoothFinder.privacy.not_accounts') }}</li>
        <li>{{ t('bluetoothFinder.privacy.not_server') }}</li>
        <li>{{ t('bluetoothFinder.privacy.not_location') }}</li>
        <li>{{ t('bluetoothFinder.privacy.not_analytics') }}</li>
        <li>{{ t('bluetoothFinder.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bluetoothFinder.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('bluetoothFinder.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
