<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/pinochle/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('pinochle.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('pinochle.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('pinochle.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('pinochle.name') }} — {{ t('pinochle.subtitle') }}</p>
    <p class="updated-date">{{ t('pinochle.privacy.updated') }}: 2026-11-16</p>
    <p class="intro-text">{{ t('pinochle.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('pinochle.privacy.summary_b1') }}</li>
        <li>{{ t('pinochle.privacy.summary_b2') }}</li>
        <li>{{ t('pinochle.privacy.summary_b3') }}</li>
        <li>{{ t('pinochle.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('pinochle.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('pinochle.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/partner-sites</a
        >
      </p>
      <p class="section-text">{{ t('pinochle.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.crash_p1') }}</p>
      <p class="section-text">
        {{ t('pinochle.privacy.crash_p2') }}
        <a
          href="https://firebase.google.com/support/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >firebase.google.com/support/privacy</a
        >
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.permissions_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.feedback_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.feedback_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pinochle.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('pinochle.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
