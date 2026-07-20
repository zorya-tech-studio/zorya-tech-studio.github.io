<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/block-brick-calculator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('blockBrickCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('blockBrickCalculator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('blockBrickCalculator.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">
      {{ t('blockBrickCalculator.name') }} — {{ t('blockBrickCalculator.subtitle') }}
    </p>
    <p class="updated-date">{{ t('blockBrickCalculator.privacy.updated') }}: 2026-06-22</p>

    <p class="intro-text">{{ t('blockBrickCalculator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('blockBrickCalculator.privacy.permissions_internet') }}</li>
        <li>{{ t('blockBrickCalculator.privacy.permissions_notifications') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('blockBrickCalculator.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('blockBrickCalculator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('blockBrickCalculator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
