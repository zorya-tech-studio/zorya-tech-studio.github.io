<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/zodiac-compatibility/privacy-policy`)
const disclaimerUrl = computed(() => `/${locale.value}/zodiac-compatibility/disclaimer`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/zodiac-compatibility/terms`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('zodiacCompatibility.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('zodiacCompatibility.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('zodiacCompatibility.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('zodiacCompatibility.name') }} — {{ t('zodiacCompatibility.subtitle') }}
    </p>
    <p class="updated-date">{{ t('zodiacCompatibility.offer.updated') }}: 2026-06-12</p>

    <p class="intro-text">{{ t('zodiacCompatibility.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.license_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('zodiacCompatibility.offer.restrictions_reverse') }}</li>
        <li>{{ t('zodiacCompatibility.offer.restrictions_modify') }}</li>
        <li>{{ t('zodiacCompatibility.offer.restrictions_distribute') }}</li>
        <li>{{ t('zodiacCompatibility.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.entertainment_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.entertainment_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('zodiacCompatibility.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.disclaimer_title') }}</h2>
      <p class="section-text">
        {{ t('zodiacCompatibility.offer.disclaimer_text') }}
        <router-link :to="disclaimerUrl" class="inline-link">{{
          t('zodiacCompatibility.disclaimer.title')
        }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.law_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
