<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/line-dance/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('lineDance.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('lineDance.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('lineDance.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('lineDance.name') }} — {{ t('lineDance.subtitle') }}</p>
    <p class="updated-date">{{ t('lineDance.privacy.updated') }}: 2026-10-15</p>
    <p class="intro-text">{{ t('lineDance.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('lineDance.privacy.storage_progress') }}</li>
        <li>{{ t('lineDance.privacy.storage_favorites') }}</li>
        <li>{{ t('lineDance.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('lineDance.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.files_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.files_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('lineDance.privacy.ads_google_policy') }}</li>
        <li>{{ t('lineDance.privacy.ads_google_ads') }}</li>
      </ul>
      <p class="section-text">{{ t('lineDance.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('lineDance.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.permissions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('lineDance.privacy.not_accounts') }}</li>
        <li>{{ t('lineDance.privacy.not_server') }}</li>
        <li>{{ t('lineDance.privacy.not_analytics') }}</li>
        <li>{{ t('lineDance.privacy.not_purchases') }}</li>
        <li>{{ t('lineDance.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.health_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.health_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('lineDance.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
