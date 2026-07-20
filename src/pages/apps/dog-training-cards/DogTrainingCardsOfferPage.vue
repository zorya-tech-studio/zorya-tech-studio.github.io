<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/dog-training-cards/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/dog-training-cards/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('dogTraining.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('dogTraining.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('dogTraining.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('dogTraining.name') }} — {{ t('dogTraining.subtitle') }}</p>
    <p class="updated-date">{{ t('dogTraining.offer.updated') }}: 2026-06-22</p>

    <p class="intro-text">{{ t('dogTraining.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.license_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('dogTraining.offer.restrictions_reverse') }}</li>
        <li>{{ t('dogTraining.offer.restrictions_modify') }}</li>
        <li>{{ t('dogTraining.offer.restrictions_distribute') }}</li>
        <li>{{ t('dogTraining.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.disclaimer_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.disclaimer_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.price_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('dogTraining.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.law_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
