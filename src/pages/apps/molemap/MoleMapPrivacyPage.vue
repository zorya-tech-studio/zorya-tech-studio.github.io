<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/molemap/terms`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/molemap/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('molemap.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('molemap.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('molemap.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('molemap.name') }} — {{ t('molemap.subtitle') }}</p>
    <p class="updated-date">{{ t('molemap.privacy.updated') }}: 2026-06-14</p>

    <p class="intro-text">{{ t('molemap.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('molemap.privacy.permissions_notifications') }}</li>
        <li>{{ t('molemap.privacy.permissions_internet') }}</li>
        <li>{{ t('molemap.privacy.permissions_ad_id') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('molemap.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('molemap.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('molemap.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
