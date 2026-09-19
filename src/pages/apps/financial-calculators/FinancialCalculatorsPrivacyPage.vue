<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/financial-calculators/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/financial-calculators/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('financialCalculators.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('financialCalculators.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('financialCalculators.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('financialCalculators.name') }} — {{ t('financialCalculators.subtitle') }}
    </p>
    <p class="updated-date">{{ t('financialCalculators.privacy.updated') }}: 2026-09-19</p>
    <p class="intro-text">{{ t('financialCalculators.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.collect_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.storage_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('financialCalculators.privacy.permissions_internet') }}</li>
        <li>{{ t('financialCalculators.privacy.permissions_ad_id') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.consent_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.third_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('financialCalculators.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('financialCalculators.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
