<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/mexican-train/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('mexicanTrain.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('mexicanTrain.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('mexicanTrain.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('mexicanTrain.name') }} — {{ t('mexicanTrain.subtitle') }}</p>
    <p class="updated-date">{{ t('mexicanTrain.privacy.updated') }}: 2026-10-13</p>
    <p class="intro-text">{{ t('mexicanTrain.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('mexicanTrain.privacy.storage_games') }}</li>
        <li>{{ t('mexicanTrain.privacy.storage_scores') }}</li>
        <li>{{ t('mexicanTrain.privacy.storage_players') }}</li>
        <li>{{ t('mexicanTrain.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('mexicanTrain.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.files_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.files_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('mexicanTrain.privacy.ads_google_policy') }}</li>
        <li>{{ t('mexicanTrain.privacy.ads_google_ads') }}</li>
      </ul>
      <p class="section-text">{{ t('mexicanTrain.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('mexicanTrain.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('mexicanTrain.privacy.not_accounts') }}</li>
        <li>{{ t('mexicanTrain.privacy.not_server') }}</li>
        <li>{{ t('mexicanTrain.privacy.not_notifications') }}</li>
        <li>{{ t('mexicanTrain.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
