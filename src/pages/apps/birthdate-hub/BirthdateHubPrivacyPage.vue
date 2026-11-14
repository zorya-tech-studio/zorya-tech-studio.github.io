<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/birthdate-hub/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('birthdateHub.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('birthdateHub.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('birthdateHub.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('birthdateHub.name') }} — {{ t('birthdateHub.subtitle') }}</p>
    <p class="updated-date">{{ t('birthdateHub.privacy.updated') }}: 2026-11-14</p>
    <p class="intro-text">{{ t('birthdateHub.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('birthdateHub.privacy.summary_b1') }}</li>
        <li>{{ t('birthdateHub.privacy.summary_b2') }}</li>
        <li>{{ t('birthdateHub.privacy.summary_b3') }}</li>
        <li>{{ t('birthdateHub.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('birthdateHub.privacy.storage_p2') }}</p>
      <p class="section-text">{{ t('birthdateHub.privacy.storage_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('birthdateHub.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/ads</a
        >
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.notif_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.notif_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.crash_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.nature_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.nature_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('birthdateHub.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('birthdateHub.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
