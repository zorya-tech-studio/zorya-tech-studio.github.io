<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const offerUrl = computed(() => `/${locale.value}/auto-obd2/offer`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/auto-obd2/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('autoObd2.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('autoObd2.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('autoObd2.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="offerUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('autoObd2.name') }} — {{ t('autoObd2.subtitle') }}</p>
    <p class="updated-date">{{ t('autoObd2.privacy.updated') }}: 2026-06-11</p>

    <p class="intro-text">{{ t('autoObd2.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('autoObd2.privacy.permissions_internet') }}</li>
        <li>{{ t('autoObd2.privacy.permissions_ad_id') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.external_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.external_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('autoObd2.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('autoObd2.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
