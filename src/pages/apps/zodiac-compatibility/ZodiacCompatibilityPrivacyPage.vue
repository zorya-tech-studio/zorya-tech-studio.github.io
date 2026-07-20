<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/zodiac-compatibility/terms`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/zodiac-compatibility/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('zodiacCompatibility.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('zodiacCompatibility.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('zodiacCompatibility.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('zodiacCompatibility.name') }} — {{ t('zodiacCompatibility.subtitle') }}
    </p>
    <p class="updated-date">{{ t('zodiacCompatibility.privacy.updated') }}: 2026-06-12</p>

    <p class="intro-text">{{ t('zodiacCompatibility.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('zodiacCompatibility.privacy.permissions_internet') }}</li>
        <li>{{ t('zodiacCompatibility.privacy.permissions_ad_id') }}</li>
        <li>{{ t('zodiacCompatibility.privacy.permissions_consent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('zodiacCompatibility.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('zodiacCompatibility.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('zodiacCompatibility.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
