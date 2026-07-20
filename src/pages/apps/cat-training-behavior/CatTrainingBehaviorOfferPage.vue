<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/cat-training-behavior/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/cat-training-behavior/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('catTraining.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('catTraining.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('catTraining.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('catTraining.name') }} — {{ t('catTraining.subtitle') }}</p>
    <p class="updated-date">{{ t('catTraining.offer.updated') }}: 2026-06-25</p>

    <p class="intro-text">{{ t('catTraining.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.license_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('catTraining.offer.restrictions_reverse') }}</li>
        <li>{{ t('catTraining.offer.restrictions_modify') }}</li>
        <li>{{ t('catTraining.offer.restrictions_distribute') }}</li>
        <li>{{ t('catTraining.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.disclaimer_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.disclaimer_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.price_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('catTraining.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.law_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('catTraining.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
