<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/antysurzhyk/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/antysurzhyk/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('antysurzhyk.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('antysurzhyk.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('antysurzhyk.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('antysurzhyk.name') }} — {{ t('antysurzhyk.subtitle') }}</p>
    <p class="updated-date">{{ t('antysurzhyk.privacy.updated') }}: 2026-09-03</p>

    <p class="intro-text">{{ t('antysurzhyk.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.text_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.text_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.tts_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.tts_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('antysurzhyk.privacy.permissions_internet') }}</li>
        <li>{{ t('antysurzhyk.privacy.permissions_ad_id') }}</li>
        <li>{{ t('antysurzhyk.privacy.permissions_notifications') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.consent_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.purchase_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.purchase_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.backup_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.backup_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.rights_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
