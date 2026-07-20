<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/molemap/privacy-policy`)
const disclaimerUrl = computed(() => `/${locale.value}/molemap/disclaimer`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/molemap/terms`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('molemap.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('molemap.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('molemap.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('molemap.name') }} — {{ t('molemap.subtitle') }}</p>
    <p class="updated-date">{{ t('molemap.offer.updated') }}: 2026-06-14</p>

    <p class="intro-text">{{ t('molemap.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.license_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('molemap.offer.restrictions_reverse') }}</li>
        <li>{{ t('molemap.offer.restrictions_modify') }}</li>
        <li>{{ t('molemap.offer.restrictions_distribute') }}</li>
        <li>{{ t('molemap.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.entertainment_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.entertainment_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.medical_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.medical_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('molemap.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.disclaimer_title') }}</h2>
      <p class="section-text">
        {{ t('molemap.offer.disclaimer_text') }}
        <router-link :to="disclaimerUrl" class="inline-link">{{
          t('molemap.disclaimer.title')
        }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.law_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('molemap.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
