<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/angel-numbers/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/angel-numbers/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('angelNumbers.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('angelNumbers.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('angelNumbers.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('angelNumbers.name') }} — {{ t('angelNumbers.subtitle') }}</p>
    <p class="updated-date">{{ t('angelNumbers.terms.updated') }}: 2026-09-08</p>

    <p class="intro-text">{{ t('angelNumbers.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.license_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('angelNumbers.terms.restrictions_reverse') }}</li>
        <li>{{ t('angelNumbers.terms.restrictions_modify') }}</li>
        <li>{{ t('angelNumbers.terms.restrictions_distribute') }}</li>
        <li>{{ t('angelNumbers.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.disclaimer_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.disclaimer_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.price_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('angelNumbers.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.law_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('angelNumbers.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('angelNumbers.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
