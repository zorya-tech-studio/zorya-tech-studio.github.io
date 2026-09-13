<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/slavic-mythology/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/slavic-mythology/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('slavicMythology.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('slavicMythology.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('slavicMythology.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('slavicMythology.name') }} — {{ t('slavicMythology.subtitle') }}</p>
    <p class="updated-date">{{ t('slavicMythology.terms.updated') }}: 2026-09-13</p>
    <p class="intro-text">{{ t('slavicMythology.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.license_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('slavicMythology.terms.restrictions_reverse') }}</li>
        <li>{{ t('slavicMythology.terms.restrictions_modify') }}</li>
        <li>{{ t('slavicMythology.terms.restrictions_distribute') }}</li>
        <li>{{ t('slavicMythology.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.disclaimer_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.disclaimer_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.price_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('slavicMythology.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.law_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('slavicMythology.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('slavicMythology.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
