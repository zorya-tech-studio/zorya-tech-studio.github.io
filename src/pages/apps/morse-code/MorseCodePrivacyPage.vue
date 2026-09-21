<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/morse-code/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/morse-code/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('morseCode.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('morseCode.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('morseCode.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('morseCode.name') }} — {{ t('morseCode.subtitle') }}</p>
    <p class="updated-date">{{ t('morseCode.privacy.updated') }}: 2026-09-21</p>
    <p class="intro-text">{{ t('morseCode.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.collect_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.storage_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('morseCode.privacy.permissions_internet') }}</li>
        <li>{{ t('morseCode.privacy.permissions_ad_id') }}</li>
        <li>{{ t('morseCode.privacy.permissions_notifications') }}</li>
        <li>{{ t('morseCode.privacy.permissions_microphone') }}</li>
        <li>{{ t('morseCode.privacy.permissions_flashlight') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.consent_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.third_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('morseCode.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('morseCode.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
