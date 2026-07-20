<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/chromatic/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/chromatic/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('chromatic.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('chromatic.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('chromatic.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('chromatic.name') }} — {{ t('chromatic.subtitle') }}</p>
    <p class="updated-date">{{ t('chromatic.offer.updated') }}: 2026-06-15</p>

    <p class="intro-text">{{ t('chromatic.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.license_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('chromatic.offer.restrictions_reverse') }}</li>
        <li>{{ t('chromatic.offer.restrictions_modify') }}</li>
        <li>{{ t('chromatic.offer.restrictions_distribute') }}</li>
        <li>{{ t('chromatic.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('chromatic.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.law_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
