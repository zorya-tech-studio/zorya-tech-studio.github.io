<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/antysurzhyk/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/antysurzhyk/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('antysurzhyk.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('antysurzhyk.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('antysurzhyk.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('antysurzhyk.name') }} — {{ t('antysurzhyk.subtitle') }}</p>
    <p class="updated-date">{{ t('antysurzhyk.terms.updated') }}: 2026-09-03</p>

    <p class="intro-text">{{ t('antysurzhyk.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.license_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('antysurzhyk.terms.restrictions_reverse') }}</li>
        <li>{{ t('antysurzhyk.terms.restrictions_modify') }}</li>
        <li>{{ t('antysurzhyk.terms.restrictions_distribute') }}</li>
        <li>{{ t('antysurzhyk.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.disclaimer_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.disclaimer_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.price_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('antysurzhyk.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.law_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('antysurzhyk.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('antysurzhyk.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
