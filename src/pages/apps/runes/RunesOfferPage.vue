<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/runes/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/runes/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('runes.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('runes.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('runes.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('runes.name') }} — {{ t('runes.subtitle') }}</p>
    <p class="updated-date">{{ t('runes.offer.updated') }}: 2026-08-13</p>

    <p class="intro-text">{{ t('runes.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.license_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('runes.offer.restrictions_reverse') }}</li>
        <li>{{ t('runes.offer.restrictions_modify') }}</li>
        <li>{{ t('runes.offer.restrictions_distribute') }}</li>
        <li>{{ t('runes.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.ugc_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.ugc_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('runes.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.law_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('runes.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('runes.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
