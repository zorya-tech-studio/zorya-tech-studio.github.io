<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/alias/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/alias/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('alias.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('alias.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('alias.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('alias.name') }} — {{ t('alias.subtitle') }}</p>
    <p class="updated-date">{{ t('alias.offer.updated') }}: 2026-05-24</p>

    <p class="intro-text">{{ t('alias.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.license_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('alias.offer.restrictions_reverse') }}</li>
        <li>{{ t('alias.offer.restrictions_modify') }}</li>
        <li>{{ t('alias.offer.restrictions_distribute') }}</li>
        <li>{{ t('alias.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.ugc_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.ugc_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('alias.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.law_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('alias.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('alias.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
