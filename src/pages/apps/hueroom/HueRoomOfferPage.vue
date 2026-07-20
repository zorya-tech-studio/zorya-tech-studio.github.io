<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/hueroom/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/hueroom/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('hueroom.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('hueroom.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('hueroom.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('hueroom.name') }} — {{ t('hueroom.subtitle') }}</p>
    <p class="updated-date">{{ t('hueroom.offer.updated') }}: 2026-06-15</p>

    <p class="intro-text">{{ t('hueroom.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.license_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('hueroom.offer.restrictions_reverse') }}</li>
        <li>{{ t('hueroom.offer.restrictions_modify') }}</li>
        <li>{{ t('hueroom.offer.restrictions_distribute') }}</li>
        <li>{{ t('hueroom.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('hueroom.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.law_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('hueroom.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
