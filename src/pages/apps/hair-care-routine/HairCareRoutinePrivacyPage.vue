<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/hair-care-routine/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('hairCareRoutine.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('hairCareRoutine.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('hairCareRoutine.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('hairCareRoutine.name') }} — {{ t('hairCareRoutine.subtitle') }}</p>
    <p class="updated-date">{{ t('hairCareRoutine.privacy.updated') }}: 2026-08-02</p>

    <p class="intro-text">{{ t('hairCareRoutine.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('hairCareRoutine.privacy.permissions_internet') }}</li>
        <li>{{ t('hairCareRoutine.privacy.permissions_notifications') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hairCareRoutine.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('hairCareRoutine.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
