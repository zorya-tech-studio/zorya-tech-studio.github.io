<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/resistor-color-code/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('resistorColorCode.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('resistorColorCode.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('resistorColorCode.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">
      {{ t('resistorColorCode.name') }} — {{ t('resistorColorCode.subtitle') }}
    </p>
    <p class="updated-date">{{ t('resistorColorCode.privacy.updated') }}: 2026-07-29</p>

    <p class="intro-text">{{ t('resistorColorCode.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('resistorColorCode.privacy.permissions_internet') }}</li>
        <li>{{ t('resistorColorCode.privacy.permissions_camera') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('resistorColorCode.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('resistorColorCode.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('resistorColorCode.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
