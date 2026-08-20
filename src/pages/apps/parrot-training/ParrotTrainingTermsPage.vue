<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/parrot-training/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/parrot-training/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('parrotTraining.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('parrotTraining.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('parrotTraining.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('parrotTraining.name') }} â€” {{ t('parrotTraining.subtitle') }}</p>
    <p class="updated-date">{{ t('parrotTraining.terms.updated') }}: 2026-08-20</p>

    <p class="intro-text">{{ t('parrotTraining.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.license_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('parrotTraining.terms.restrictions_reverse') }}</li>
        <li>{{ t('parrotTraining.terms.restrictions_modify') }}</li>
        <li>{{ t('parrotTraining.terms.restrictions_distribute') }}</li>
        <li>{{ t('parrotTraining.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.disclaimer_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.disclaimer_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.price_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('parrotTraining.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.law_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('parrotTraining.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('parrotTraining.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
