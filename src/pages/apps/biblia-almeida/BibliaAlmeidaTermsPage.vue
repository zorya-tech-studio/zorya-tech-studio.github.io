<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/biblia-almeida/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/biblia-almeida/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('bibliaAlmeida.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('bibliaAlmeida.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('bibliaAlmeida.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('bibliaAlmeida.name') }} — {{ t('bibliaAlmeida.subtitle') }}</p>
    <p class="updated-date">{{ t('bibliaAlmeida.terms.updated') }}: 2026-10-09</p>
    <p class="intro-text">{{ t('bibliaAlmeida.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.definitions_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.definitions_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.subject_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.subject_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.acceptance_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.license_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.content_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.content_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.audio_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.audio_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.restrictions_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('bibliaAlmeida.terms.restrictions_reverse') }}</li>
        <li>{{ t('bibliaAlmeida.terms.restrictions_modify') }}</li>
        <li>{{ t('bibliaAlmeida.terms.restrictions_distribute') }}</li>
        <li>{{ t('bibliaAlmeida.terms.restrictions_circumvent') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.price_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.price_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.iap_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.iap_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.ip_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.ip_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('bibliaAlmeida.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.termination_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.termination_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.law_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('bibliaAlmeida.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('bibliaAlmeida.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
