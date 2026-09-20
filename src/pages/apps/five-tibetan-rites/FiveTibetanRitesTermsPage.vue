<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/five-tibetan-rites/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/five-tibetan-rites/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('fiveTibetanRites.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('fiveTibetanRites.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('fiveTibetanRites.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('fiveTibetanRites.name') }} — {{ t('fiveTibetanRites.subtitle') }}</p>
    <p class="updated-date">{{ t('fiveTibetanRites.terms.updated') }}: 2026-09-20</p>
    <p class="intro-text">{{ t('fiveTibetanRites.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.license_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.origin_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.origin_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('fiveTibetanRites.terms.restrictions_reverse') }}</li>
        <li>{{ t('fiveTibetanRites.terms.restrictions_modify') }}</li>
        <li>{{ t('fiveTibetanRites.terms.restrictions_distribute') }}</li>
        <li>{{ t('fiveTibetanRites.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.price_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('fiveTibetanRites.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.law_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
