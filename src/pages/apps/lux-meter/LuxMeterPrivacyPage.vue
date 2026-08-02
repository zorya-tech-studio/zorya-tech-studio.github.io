<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/lux-meter/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('luxMeter.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('luxMeter.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('luxMeter.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('luxMeter.name') }} — {{ t('luxMeter.subtitle') }}</p>
    <p class="updated-date">{{ t('luxMeter.privacy.updated') }}: 2026-08-02</p>

    <p class="intro-text">{{ t('luxMeter.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.sensor_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.sensor_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.camera_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.camera_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('luxMeter.privacy.permissions_internet') }}</li>
        <li>{{ t('luxMeter.privacy.permissions_camera') }}</li>
        <li>{{ t('luxMeter.privacy.permissions_adid') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('luxMeter.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('luxMeter.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
