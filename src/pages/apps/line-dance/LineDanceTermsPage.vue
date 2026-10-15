<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/line-dance/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/line-dance/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('lineDance.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('lineDance.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('lineDance.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('lineDance.name') }} — {{ t('lineDance.subtitle') }}</p>
    <p class="updated-date">{{ t('lineDance.terms.updated') }}: 2026-10-15</p>
    <p class="intro-text">{{ t('lineDance.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.license_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.content_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.content_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.health_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.health_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.data_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.data_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('lineDance.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.law_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('lineDance.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('lineDance.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
