<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/five-tibetan-rites/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/five-tibetan-rites/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('fiveTibetanRites.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('fiveTibetanRites.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('fiveTibetanRites.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('fiveTibetanRites.name') }} — {{ t('fiveTibetanRites.subtitle') }}</p>
    <p class="updated-date">{{ t('fiveTibetanRites.privacy.updated') }}: 2026-09-20</p>
    <p class="intro-text">{{ t('fiveTibetanRites.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.collect_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.storage_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('fiveTibetanRites.privacy.permissions_internet') }}</li>
        <li>{{ t('fiveTibetanRites.privacy.permissions_ad_id') }}</li>
        <li>{{ t('fiveTibetanRites.privacy.permissions_notifications') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.consent_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.consent_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.health_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.health_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.third_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('fiveTibetanRites.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('fiveTibetanRites.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
