<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/wire-size-calc/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/wire-size-calc/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('wireSizeCalc.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('wireSizeCalc.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('wireSizeCalc.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('wireSizeCalc.name') }} — {{ t('wireSizeCalc.subtitle') }}</p>
    <p class="updated-date">{{ t('wireSizeCalc.privacy.updated') }}: 2026-08-20</p>

    <p class="intro-text">{{ t('wireSizeCalc.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('wireSizeCalc.privacy.permissions_internet') }}</li>
        <li>{{ t('wireSizeCalc.privacy.permissions_ad_id') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.consent_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('wireSizeCalc.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('wireSizeCalc.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
