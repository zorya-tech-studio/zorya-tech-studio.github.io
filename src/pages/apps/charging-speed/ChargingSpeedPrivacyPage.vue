<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/charging-speed/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('chargingSpeed.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('chargingSpeed.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('chargingSpeed.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('chargingSpeed.name') }} — {{ t('chargingSpeed.subtitle') }}</p>
    <p class="updated-date">{{ t('chargingSpeed.privacy.updated') }}: 2026-11-11</p>
    <p class="intro-text">{{ t('chargingSpeed.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.summary_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.summary_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.storage_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('chargingSpeed.privacy.storage_b1') }}</li>
        <li>{{ t('chargingSpeed.privacy.storage_b2') }}</li>
        <li>{{ t('chargingSpeed.privacy.storage_b3') }}</li>
      </ul>
      <p class="section-text">{{ t('chargingSpeed.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.ads_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.notif_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.notif_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.perm_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.perm_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('chargingSpeed.privacy.perm_b1') }}</li>
        <li>{{ t('chargingSpeed.privacy.perm_b2') }}</li>
        <li>{{ t('chargingSpeed.privacy.perm_b3') }}</li>
        <li>{{ t('chargingSpeed.privacy.perm_b4') }}</li>
        <li>{{ t('chargingSpeed.privacy.perm_b5') }}</li>
      </ul>
      <p class="section-text">{{ t('chargingSpeed.privacy.perm_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('chargingSpeed.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('chargingSpeed.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
