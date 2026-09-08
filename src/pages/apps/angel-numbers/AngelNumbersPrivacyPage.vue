<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/angel-numbers/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/angel-numbers/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('angelNumbers.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('angelNumbers.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('angelNumbers.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('angelNumbers.name') }} — {{ t('angelNumbers.subtitle') }}</p>
    <p class="updated-date">{{ t('angelNumbers.privacy.updated') }}: 2026-09-08</p>

    <p class="intro-text">{{ t('angelNumbers.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.numerology_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.numerology_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('angelNumbers.privacy.permissions_internet') }}</li>
        <li>{{ t('angelNumbers.privacy.permissions_ad_id') }}</li>
        <li>{{ t('angelNumbers.privacy.permissions_notifications') }}</li>
      </ul>
      <p class="section-text">{{ t('angelNumbers.privacy.permissions_note') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.rewarded_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.rewarded_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.consent_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.accessibility_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.accessibility_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.backup_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.backup_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.rights_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
