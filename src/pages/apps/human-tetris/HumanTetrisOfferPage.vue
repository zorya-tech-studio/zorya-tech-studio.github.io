<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/human-tetris/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/human-tetris/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('humanTetris.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('humanTetris.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('humanTetris.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('humanTetris.name') }} — {{ t('humanTetris.subtitle') }}</p>
    <p class="updated-date">{{ t('humanTetris.offer.updated') }}: 2026-06-22</p>

    <p class="intro-text">{{ t('humanTetris.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.license_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('humanTetris.offer.restrictions_reverse') }}</li>
        <li>{{ t('humanTetris.offer.restrictions_modify') }}</li>
        <li>{{ t('humanTetris.offer.restrictions_distribute') }}</li>
        <li>{{ t('humanTetris.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.price_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.safety_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.safety_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('humanTetris.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.law_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
