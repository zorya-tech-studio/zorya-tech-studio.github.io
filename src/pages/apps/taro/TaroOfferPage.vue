<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/taro/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/taro/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('taro.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('taro.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('taro.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('taro.name') }} — {{ t('taro.subtitle') }}</p>
    <p class="updated-date">{{ t('taro.offer.updated') }}: 2026-07-31</p>

    <p class="intro-text">{{ t('taro.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.license_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('taro.offer.restrictions_reverse') }}</li>
        <li>{{ t('taro.offer.restrictions_modify') }}</li>
        <li>{{ t('taro.offer.restrictions_distribute') }}</li>
        <li>{{ t('taro.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.ugc_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.ugc_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('taro.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.law_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('taro.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('taro.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
