<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const offerUrl = computed(() => `/${locale.value}/starguide/offer`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/starguide/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('starguide.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('starguide.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('starguide.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="offerUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('starguide.name') }} — {{ t('starguide.subtitle') }}</p>
    <p class="updated-date">{{ t('starguide.privacy.updated') }}: 2026-06-15</p>

    <p class="intro-text">{{ t('starguide.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('starguide.privacy.permissions_internet') }}</li>
        <li>{{ t('starguide.privacy.permissions_ad_id') }}</li>
        <li>{{ t('starguide.privacy.permissions_notifications') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('starguide.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('starguide.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
