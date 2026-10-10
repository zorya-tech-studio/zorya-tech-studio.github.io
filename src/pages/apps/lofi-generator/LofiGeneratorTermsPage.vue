<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/lofi-generator/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/lofi-generator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('lofiGenerator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('lofiGenerator.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('lofiGenerator.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('lofiGenerator.name') }} — {{ t('lofiGenerator.subtitle') }}</p>
    <p class="updated-date">{{ t('lofiGenerator.terms.updated') }}: 2026-10-10</p>
    <p class="intro-text">{{ t('lofiGenerator.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.license_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.content_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.content_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('lofiGenerator.terms.restrictions_reverse') }}</li>
        <li>{{ t('lofiGenerator.terms.restrictions_modify') }}</li>
        <li>{{ t('lofiGenerator.terms.restrictions_distribute') }}</li>
        <li>{{ t('lofiGenerator.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.price_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.rewarded_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.rewarded_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('lofiGenerator.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.law_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lofiGenerator.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('lofiGenerator.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
