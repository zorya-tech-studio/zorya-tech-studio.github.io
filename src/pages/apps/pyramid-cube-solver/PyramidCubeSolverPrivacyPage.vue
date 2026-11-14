<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/pyramid-cube-solver/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('pyramidCubeSolver.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('pyramidCubeSolver.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('pyramidCubeSolver.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('pyramidCubeSolver.name') }} — {{ t('pyramidCubeSolver.subtitle') }}
    </p>
    <p class="updated-date">{{ t('pyramidCubeSolver.privacy.updated') }}: 2026-11-14</p>
    <p class="intro-text">{{ t('pyramidCubeSolver.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.summary_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('pyramidCubeSolver.privacy.summary_b1') }}</li>
        <li>{{ t('pyramidCubeSolver.privacy.summary_b2') }}</li>
        <li>{{ t('pyramidCubeSolver.privacy.summary_b3') }}</li>
        <li>{{ t('pyramidCubeSolver.privacy.summary_b4') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.storage_p1') }}</p>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.storage_p2') }}</p>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.storage_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.ads_p1') }}</p>
      <p class="section-text">
        {{ t('pyramidCubeSolver.privacy.ads_p2') }}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          >policies.google.com/technologies/ads</a
        >
      </p>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.ads_p3') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.notif_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.notif_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.nature_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.nature_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pyramidCubeSolver.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('pyramidCubeSolver.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
