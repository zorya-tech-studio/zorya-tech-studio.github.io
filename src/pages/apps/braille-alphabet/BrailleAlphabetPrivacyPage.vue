<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/braille-alphabet/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/braille-alphabet/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('brailleAlphabet.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('brailleAlphabet.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('brailleAlphabet.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('brailleAlphabet.name') }} — {{ t('brailleAlphabet.subtitle') }}</p>
    <p class="updated-date">{{ t('brailleAlphabet.privacy.updated') }}: 2026-09-22</p>
    <p class="intro-text">{{ t('brailleAlphabet.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.collect_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.storage_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('brailleAlphabet.privacy.permissions_internet') }}</li>
        <li>{{ t('brailleAlphabet.privacy.permissions_ad_id') }}</li>
        <li>{{ t('brailleAlphabet.privacy.permissions_notifications') }}</li>
        <li>{{ t('brailleAlphabet.privacy.permissions_vibration') }}</li>
        <li>{{ t('brailleAlphabet.privacy.permissions_speech') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.consent_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.third_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('brailleAlphabet.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('brailleAlphabet.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
