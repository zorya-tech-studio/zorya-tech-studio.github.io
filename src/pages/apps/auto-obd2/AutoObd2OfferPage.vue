<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/auto-obd2/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/auto-obd2/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('autoObd2.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('autoObd2.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('autoObd2.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('autoObd2.name') }} — {{ t('autoObd2.subtitle') }}</p>
    <p class="updated-date">{{ t('autoObd2.offer.updated') }}: 2026-06-11</p>

    <p class="intro-text">{{ t('autoObd2.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.license_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('autoObd2.offer.restrictions_reverse') }}</li>
        <li>{{ t('autoObd2.offer.restrictions_modify') }}</li>
        <li>{{ t('autoObd2.offer.restrictions_distribute') }}</li>
        <li>{{ t('autoObd2.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.search_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.search_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('autoObd2.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.law_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
