<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/kings-corner/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('kingsCorner.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('kingsCorner.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('kingsCorner.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('kingsCorner.name') }} — {{ t('kingsCorner.subtitle') }}</p>
    <p class="updated-date">{{ t('kingsCorner.privacy.updated') }}: 2026-10-23</p>
    <p class="intro-text">{{ t('kingsCorner.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s1_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s1_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s2_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s2_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('kingsCorner.privacy.s2_l1') }}</li>
        <li>{{ t('kingsCorner.privacy.s2_l2') }}</li>
        <li>{{ t('kingsCorner.privacy.s2_l3') }}</li>
      </ul>
      <p class="section-text">{{ t('kingsCorner.privacy.s2_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s3_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s3_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s4_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s4_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s5_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s5_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('kingsCorner.privacy.s5_l1') }}</li>
        <li>{{ t('kingsCorner.privacy.s5_l2') }}</li>
        <li>{{ t('kingsCorner.privacy.s5_l3') }}</li>
      </ul>
      <p class="section-text">{{ t('kingsCorner.privacy.s5_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s6_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s6_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s7_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('kingsCorner.privacy.s7_l1') }}</li>
        <li>{{ t('kingsCorner.privacy.s7_l2') }}</li>
        <li>{{ t('kingsCorner.privacy.s7_l3') }}</li>
        <li>{{ t('kingsCorner.privacy.s7_l4') }}</li>
        <li>{{ t('kingsCorner.privacy.s7_l5') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s8_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s8_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s9_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s9_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s10_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s10_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s11_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s11_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('kingsCorner.privacy.s12_title') }}</h2>
      <p class="section-text">{{ t('kingsCorner.privacy.s12_p1') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
