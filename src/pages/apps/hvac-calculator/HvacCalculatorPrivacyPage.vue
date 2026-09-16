<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/hvac-calculator/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/hvac-calculator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('hvacCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('hvacCalculator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('hvacCalculator.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('hvacCalculator.name') }} — {{ t('hvacCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('hvacCalculator.privacy.updated') }}: 2026-09-16</p>
    <p class="intro-text">{{ t('hvacCalculator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.collect_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.storage_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('hvacCalculator.privacy.permissions_internet') }}</li>
        <li>{{ t('hvacCalculator.privacy.permissions_ad_id') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.consent_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.third_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('hvacCalculator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('hvacCalculator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
