<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/lux-meter/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/lux-meter/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('luxMeter.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('luxMeter.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('luxMeter.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('luxMeter.name') }} — {{ t('luxMeter.subtitle') }}</p>
    <p class="updated-date">{{ t('luxMeter.terms.updated') }}: 2026-08-02</p>

    <p class="intro-text">{{ t('luxMeter.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.license_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('luxMeter.terms.restrictions_reverse') }}</li>
        <li>{{ t('luxMeter.terms.restrictions_modify') }}</li>
        <li>{{ t('luxMeter.terms.restrictions_distribute') }}</li>
        <li>{{ t('luxMeter.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.accuracy_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.accuracy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.price_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('luxMeter.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.law_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
