<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/starguide/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/starguide/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('starguide.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('starguide.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('starguide.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('starguide.name') }} — {{ t('starguide.subtitle') }}</p>
    <p class="updated-date">{{ t('starguide.offer.updated') }}: 2026-06-15</p>

    <p class="intro-text">{{ t('starguide.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.license_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('starguide.offer.restrictions_reverse') }}</li>
        <li>{{ t('starguide.offer.restrictions_modify') }}</li>
        <li>{{ t('starguide.offer.restrictions_distribute') }}</li>
        <li>{{ t('starguide.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.accuracy_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.accuracy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('starguide.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.law_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('starguide.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
