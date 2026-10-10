<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/lofi-generator/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/lofi-generator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('lofiGenerator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('lofiGenerator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('lofiGenerator.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('lofiGenerator.name') }} — {{ t('lofiGenerator.subtitle') }}</p>
    <p class="updated-date">{{ t('lofiGenerator.privacy.updated') }}: 2026-10-10</p>
    <p class="intro-text">{{ t('lofiGenerator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('lofiGenerator.privacy.storage_settings') }}</li>
        <li>{{ t('lofiGenerator.privacy.storage_unlocks') }}</li>
        <li>{{ t('lofiGenerator.privacy.storage_stats') }}</li>
        <li>{{ t('lofiGenerator.privacy.storage_vibes') }}</li>
      </ul>
      <p class="section-text">{{ t('lofiGenerator.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('lofiGenerator.privacy.ads_google_policy') }}</li>
        <li>{{ t('lofiGenerator.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('lofiGenerator.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('lofiGenerator.privacy.ads_reset_id') }}</p>
      <p class="section-text">{{ t('lofiGenerator.privacy.ads_rewarded') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.audio_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.audio_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('lofiGenerator.privacy.not_accounts') }}</li>
        <li>{{ t('lofiGenerator.privacy.not_permissions') }}</li>
        <li>{{ t('lofiGenerator.privacy.not_analytics') }}</li>
        <li>{{ t('lofiGenerator.privacy.not_selling') }}</li>
        <li>{{ t('lofiGenerator.privacy.not_purchases') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
