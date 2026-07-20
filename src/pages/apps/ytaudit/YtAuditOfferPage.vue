<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/ytaudit/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/ytaudit/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('ytaudit.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('ytaudit.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('ytaudit.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('ytaudit.name') }} — {{ t('ytaudit.subtitle') }}</p>
    <p class="updated-date">{{ t('ytaudit.offer.updated') }}: 2026-06-11</p>

    <p class="intro-text">{{ t('ytaudit.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.license_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.youtube_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.youtube_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('ytaudit.offer.restrictions_reverse') }}</li>
        <li>{{ t('ytaudit.offer.restrictions_modify') }}</li>
        <li>{{ t('ytaudit.offer.restrictions_distribute') }}</li>
        <li>{{ t('ytaudit.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('ytaudit.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.law_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('ytaudit.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('ytaudit.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
