<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/cat-training-care/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/cat-training-care/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('catTrainingCare.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('catTrainingCare.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('catTrainingCare.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('catTrainingCare.name') }} — {{ t('catTrainingCare.subtitle') }}</p>
    <p class="updated-date">{{ t('catTrainingCare.terms.updated') }}: 2026-09-25</p>
    <p class="intro-text">{{ t('catTrainingCare.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.license_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.notadvice_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.notadvice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.games_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.games_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('catTrainingCare.terms.restrictions_reverse') }}</li>
        <li>{{ t('catTrainingCare.terms.restrictions_modify') }}</li>
        <li>{{ t('catTrainingCare.terms.restrictions_distribute') }}</li>
        <li>{{ t('catTrainingCare.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.price_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('catTrainingCare.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.law_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTrainingCare.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('catTrainingCare.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
