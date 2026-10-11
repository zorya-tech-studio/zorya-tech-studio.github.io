<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/cat-jam/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('catJam.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('catJam.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('catJam.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('catJam.name') }} — {{ t('catJam.subtitle') }}</p>
    <p class="updated-date">{{ t('catJam.privacy.updated') }}: 2026-10-11</p>
    <p class="intro-text">{{ t('catJam.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('catJam.privacy.storage_progress') }}</li>
        <li>{{ t('catJam.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('catJam.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('catJam.privacy.ads_google_policy') }}</li>
        <li>{{ t('catJam.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('catJam.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('catJam.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('catJam.privacy.not_accounts') }}</li>
        <li>{{ t('catJam.privacy.not_permissions') }}</li>
        <li>{{ t('catJam.privacy.not_analytics') }}</li>
        <li>{{ t('catJam.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catJam.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('catJam.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
