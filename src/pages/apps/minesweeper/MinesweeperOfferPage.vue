<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/minesweeper/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/minesweeper/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('minesweeper.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('minesweeper.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('minesweeper.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('minesweeper.name') }} — {{ t('minesweeper.subtitle') }}</p>
    <p class="updated-date">{{ t('minesweeper.offer.updated') }}: 2026-08-12</p>

    <p class="intro-text">{{ t('minesweeper.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.license_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('minesweeper.offer.restrictions_reverse') }}</li>
        <li>{{ t('minesweeper.offer.restrictions_modify') }}</li>
        <li>{{ t('minesweeper.offer.restrictions_distribute') }}</li>
        <li>{{ t('minesweeper.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('minesweeper.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.law_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
