<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/kalimba-tuner/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/kalimba-tuner/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('kalimbaTuner.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('kalimbaTuner.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('kalimbaTuner.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('kalimbaTuner.name') }} — {{ t('kalimbaTuner.subtitle') }}</p>
    <p class="updated-date">{{ t('kalimbaTuner.terms.updated') }}: 2026-10-28</p>
    <p class="intro-text">{{ t('kalimbaTuner.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s1_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s1_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s2_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s2_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s3_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s3_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s4_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s4_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s5_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s5_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s6_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s6_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s7_title') }}</h2>
      <p class="section-text">
        {{ t('kalimbaTuner.terms.s7_p1') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s8_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s8_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s9_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s9_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kalimbaTuner.terms.s10_title') }}</h2>
      <p class="section-text">{{ t('kalimbaTuner.terms.s10_p1') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
