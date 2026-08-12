<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/health-calculator/privacy-policy`)
const disclaimerUrl = computed(() => `/${locale.value}/health-calculator/disclaimer`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/health-calculator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('healthCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('healthCalculator.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('healthCalculator.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('healthCalculator.name') }} — {{ t('healthCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('healthCalculator.terms.updated') }}: 2026-08-13</p>

    <p class="intro-text">{{ t('healthCalculator.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.what_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.what_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.medical_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.medical_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.terms.medical_margins') }}</p>
      <p class="section-text">
        {{ t('healthCalculator.terms.medical_more') }}
        <router-link :to="disclaimerUrl" class="inline-link">{{
          t('healthCalculator.disclaimer.title')
        }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.age_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.age_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.accuracy_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.accuracy_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.terms.accuracy_endorsement') }}</p>
      <p class="section-text">{{ t('healthCalculator.terms.accuracy_corrections') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.responsibility_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.responsibility_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.ads_title') }}</h2>
      <p class="section-text">
        {{ t('healthCalculator.terms.ads_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
      <p class="section-text">{{ t('healthCalculator.terms.ads_rewarded') }}</p>
      <p class="section-text">{{ t('healthCalculator.terms.ads_third_party') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.liability_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.terms.liability_consumer') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.ip_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.terms.ip_use') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.law_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
