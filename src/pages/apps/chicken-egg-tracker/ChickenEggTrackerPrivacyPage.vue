<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/chicken-egg-tracker/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('chickenEggTracker.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('chickenEggTracker.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('chickenEggTracker.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('chickenEggTracker.name') }} — {{ t('chickenEggTracker.subtitle') }}
    </p>
    <p class="updated-date">{{ t('chickenEggTracker.privacy.updated') }}: 2026-10-11</p>
    <p class="intro-text">{{ t('chickenEggTracker.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('chickenEggTracker.privacy.storage_eggs') }}</li>
        <li>{{ t('chickenEggTracker.privacy.storage_batches') }}</li>
        <li>{{ t('chickenEggTracker.privacy.storage_costs') }}</li>
        <li>{{ t('chickenEggTracker.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('chickenEggTracker.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.files_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.files_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('chickenEggTracker.privacy.ads_google_policy') }}</li>
        <li>{{ t('chickenEggTracker.privacy.ads_google_ads') }}</li>
      </ul>
      <p class="section-text">{{ t('chickenEggTracker.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('chickenEggTracker.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('chickenEggTracker.privacy.not_accounts') }}</li>
        <li>{{ t('chickenEggTracker.privacy.not_server') }}</li>
        <li>{{ t('chickenEggTracker.privacy.not_analytics') }}</li>
        <li>{{ t('chickenEggTracker.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chickenEggTracker.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('chickenEggTracker.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
