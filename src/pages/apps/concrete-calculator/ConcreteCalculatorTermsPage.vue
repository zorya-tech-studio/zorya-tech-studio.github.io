<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/concrete-calculator/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/concrete-calculator/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('concreteCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('concreteCalculator.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('concreteCalculator.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('concreteCalculator.name') }} — {{ t('concreteCalculator.subtitle') }}
    </p>
    <p class="updated-date">{{ t('concreteCalculator.terms.updated') }}: 2026-06-20</p>

    <p class="intro-text">{{ t('concreteCalculator.terms.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.terms.use_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.terms.use_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.terms.accuracy_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.terms.accuracy_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.terms.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.terms.ads_title') }}</h2>
      <p class="section-text">
        {{ t('concreteCalculator.terms.ads_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.terms.acceptance_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.terms.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
