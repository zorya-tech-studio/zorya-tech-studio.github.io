<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/hair-care-routine/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/hair-care-routine/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('hairCareRoutine.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('hairCareRoutine.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('hairCareRoutine.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('hairCareRoutine.name') }} — {{ t('hairCareRoutine.subtitle') }}</p>
    <p class="updated-date">{{ t('hairCareRoutine.offer.updated') }}: 2026-08-02</p>

    <p class="intro-text">{{ t('hairCareRoutine.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.license_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('hairCareRoutine.offer.restrictions_reverse') }}</li>
        <li>{{ t('hairCareRoutine.offer.restrictions_modify') }}</li>
        <li>{{ t('hairCareRoutine.offer.restrictions_distribute') }}</li>
        <li>{{ t('hairCareRoutine.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.health_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.health_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.price_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('hairCareRoutine.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.law_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
