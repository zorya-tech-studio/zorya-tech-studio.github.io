<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/ballet-beginners/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('balletBeginners.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('balletBeginners.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('balletBeginners.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('balletBeginners.name') }} — {{ t('balletBeginners.subtitle') }}</p>
    <p class="updated-date">{{ t('balletBeginners.privacy.updated') }}: 2026-10-24</p>
    <p class="intro-text">{{ t('balletBeginners.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.short_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('balletBeginners.privacy.short_b1') }}</li>
        <li>{{ t('balletBeginners.privacy.short_b2') }}</li>
        <li>{{ t('balletBeginners.privacy.short_b3') }}</li>
        <li>{{ t('balletBeginners.privacy.short_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('balletBeginners.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.notifications_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.voice_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.voice_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.ads_p1') }}</p>
      <p class="section-text">{{ t('balletBeginners.privacy.ads_p2') }}</p>
      <p class="section-text">{{ t('balletBeginners.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.permissions_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('balletBeginners.privacy.permissions_b1') }}</li>
        <li>{{ t('balletBeginners.privacy.permissions_b2') }}</li>
        <li>{{ t('balletBeginners.privacy.permissions_b3') }}</li>
      </ul>
      <p class="section-text">{{ t('balletBeginners.privacy.permissions_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.analytics_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.analytics_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.deletion_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.deletion_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('balletBeginners.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('balletBeginners.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
