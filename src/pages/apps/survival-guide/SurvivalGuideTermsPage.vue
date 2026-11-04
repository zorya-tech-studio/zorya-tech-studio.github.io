<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/survival-guide/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/survival-guide/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('survivalGuide.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('survivalGuide.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('survivalGuide.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('survivalGuide.name') }} — {{ t('survivalGuide.subtitle') }}</p>
    <p class="updated-date">{{ t('survivalGuide.terms.updated') }}: 2026-11-04</p>
    <p class="intro-text">{{ t('survivalGuide.terms.intro') }}</p>
    <div class="policy-section">
      <ul class="permissions-list">
        <li>{{ t('survivalGuide.terms.b1') }}</li>
        <li>{{ t('survivalGuide.terms.b2') }}</li>
        <li>{{ t('survivalGuide.terms.b3') }}</li>
        <li>{{ t('survivalGuide.terms.b4') }}</li>
        <li>{{ t('survivalGuide.terms.b5') }}</li>
        <li>{{ t('survivalGuide.terms.b6') }}</li>
        <li>{{ t('survivalGuide.terms.b7') }}</li>
        <li>{{ t('survivalGuide.terms.b8') }}</li>
        <li>{{ t('survivalGuide.terms.b9') }}</li>
      </ul>
      <p class="section-text">
        <router-link :to="privacyUrl">{{ t('survivalGuide.terms.privacy_note') }}</router-link>
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
