<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const termsUrl = computed(() => `/${locale.value}/health-calculator/terms-of-use`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/health-calculator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('healthCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('healthCalculator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('healthCalculator.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="termsUrl" class="header-link">{{ t('nav.view_offer') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('healthCalculator.name') }} — {{ t('healthCalculator.subtitle') }}</p>
    <p class="updated-date">{{ t('healthCalculator.privacy.updated') }}: 2026-08-13</p>

    <p class="intro-text">{{ t('healthCalculator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.measurements_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.measurements_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.measurements_account') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.settings_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.settings_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.settings_storage') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.ads_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.ads_collected') }}</p>
      <ul class="third-party-list">
        <li>
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener"
            >Google — {{ t('healthCalculator.privacy.ads_link_partner') }}</a
          >
        </li>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
            >Google Privacy Policy</a
          >
        </li>
      </ul>
      <p class="section-text">{{ t('healthCalculator.privacy.ads_no_health') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.choices_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.choices_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.choices_adid') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.choices_rewarded') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('healthCalculator.privacy.not_health_platforms') }}</li>
        <li>{{ t('healthCalculator.privacy.not_sensors') }}</li>
        <li>{{ t('healthCalculator.privacy.not_tracking') }}</li>
        <li>{{ t('healthCalculator.privacy.not_selling') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('healthCalculator.privacy.permissions_internet') }}</li>
        <li>{{ t('healthCalculator.privacy.permissions_ad_id') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.rights_basis') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.rights_text') }}</p>
      <p class="section-text">{{ t('healthCalculator.privacy.rights_complaint') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.security_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.security_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('healthCalculator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('healthCalculator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
