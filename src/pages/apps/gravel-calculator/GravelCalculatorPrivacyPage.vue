<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/gravel-calculator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('gravelCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('gravelCalculator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('gravelCalculator.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('gravelCalculator.name') }} — {{ t('gravelCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('gravelCalculator.privacy.updated') }}: 2026-06-26</p>

    <p class="intro-text">{{ t('gravelCalculator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('gravelCalculator.privacy.permissions_internet') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('gravelCalculator.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('gravelCalculator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('gravelCalculator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
