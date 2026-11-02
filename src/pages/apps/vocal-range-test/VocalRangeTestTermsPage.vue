<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/vocal-range-test/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/vocal-range-test/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('vocalRangeTest.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('vocalRangeTest.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('vocalRangeTest.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('vocalRangeTest.name') }} — {{ t('vocalRangeTest.subtitle') }}</p>
    <p class="updated-date">{{ t('vocalRangeTest.terms.updated') }}: 2026-11-02</p>
    <p class="intro-text">{{ t('vocalRangeTest.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.app_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.app_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.age_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.age_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.data_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.data_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.content_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.content_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.adsterms_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.adsterms_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.liability_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('vocalRangeTest.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('vocalRangeTest.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
