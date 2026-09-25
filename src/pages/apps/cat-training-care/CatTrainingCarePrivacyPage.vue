<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/cat-training-care/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/cat-training-care/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('catTrainingCare.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('catTrainingCare.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('catTrainingCare.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('catTrainingCare.name') }} — {{ t('catTrainingCare.subtitle') }}</p>
    <p class="updated-date">{{ t('catTrainingCare.privacy.updated') }}: 2026-08-18</p>
    <p class="intro-text">{{ t('catTrainingCare.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('catTrainingCare.privacy.storage_profiles') }}</li>
        <li>{{ t('catTrainingCare.privacy.storage_progress') }}</li>
        <li>{{ t('catTrainingCare.privacy.storage_weight') }}</li>
        <li>{{ t('catTrainingCare.privacy.storage_gamification') }}</li>
        <li>{{ t('catTrainingCare.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('catTrainingCare.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('catTrainingCare.privacy.ads_google_policy') }}</li>
        <li>{{ t('catTrainingCare.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('catTrainingCare.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('catTrainingCare.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.notifications_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('catTrainingCare.privacy.not_accounts') }}</li>
        <li>{{ t('catTrainingCare.privacy.not_permissions') }}</li>
        <li>{{ t('catTrainingCare.privacy.not_analytics') }}</li>
        <li>{{ t('catTrainingCare.privacy.not_selling') }}</li>
        <li>{{ t('catTrainingCare.privacy.not_ai') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
