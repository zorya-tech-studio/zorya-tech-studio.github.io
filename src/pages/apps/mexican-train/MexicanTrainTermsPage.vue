<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/mexican-train/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/mexican-train/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('mexicanTrain.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('mexicanTrain.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('mexicanTrain.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('mexicanTrain.name') }} — {{ t('mexicanTrain.subtitle') }}</p>
    <p class="updated-date">{{ t('mexicanTrain.terms.updated') }}: 2026-10-13</p>
    <p class="intro-text">{{ t('mexicanTrain.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.license_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.game_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.game_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.data_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.data_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('mexicanTrain.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.law_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('mexicanTrain.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('mexicanTrain.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
