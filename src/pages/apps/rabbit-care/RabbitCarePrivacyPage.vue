<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/rabbit-care/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/rabbit-care/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('rabbitCare.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('rabbitCare.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('rabbitCare.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('rabbitCare.name') }} — {{ t('rabbitCare.subtitle') }}</p>
    <p class="updated-date">{{ t('rabbitCare.privacy.updated') }}: 2026-10-10</p>
    <p class="intro-text">{{ t('rabbitCare.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('rabbitCare.privacy.storage_progress') }}</li>
        <li>{{ t('rabbitCare.privacy.storage_favorites') }}</li>
        <li>{{ t('rabbitCare.privacy.storage_settings') }}</li>
        <li>{{ t('rabbitCare.privacy.storage_service') }}</li>
      </ul>
      <p class="section-text">{{ t('rabbitCare.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('rabbitCare.privacy.ads_google_policy') }}</li>
        <li>{{ t('rabbitCare.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('rabbitCare.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('rabbitCare.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.links_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.links_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('rabbitCare.privacy.not_accounts') }}</li>
        <li>{{ t('rabbitCare.privacy.not_permissions') }}</li>
        <li>{{ t('rabbitCare.privacy.not_analytics') }}</li>
        <li>{{ t('rabbitCare.privacy.not_selling') }}</li>
        <li>{{ t('rabbitCare.privacy.not_purchases') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('rabbitCare.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('rabbitCare.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
