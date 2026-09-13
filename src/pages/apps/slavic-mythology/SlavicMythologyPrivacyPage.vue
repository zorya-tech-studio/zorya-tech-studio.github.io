<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/slavic-mythology/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/slavic-mythology/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('slavicMythology.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('slavicMythology.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('slavicMythology.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('slavicMythology.name') }} — {{ t('slavicMythology.subtitle') }}</p>
    <p class="updated-date">{{ t('slavicMythology.privacy.updated') }}: 2026-09-13</p>
    <p class="intro-text">{{ t('slavicMythology.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.collect_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.storage_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('slavicMythology.privacy.permissions_internet') }}</li>
        <li>{{ t('slavicMythology.privacy.permissions_ad_id') }}</li>
        <li>{{ t('slavicMythology.privacy.permissions_notifications') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.rewarded_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.rewarded_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.consent_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.third_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
