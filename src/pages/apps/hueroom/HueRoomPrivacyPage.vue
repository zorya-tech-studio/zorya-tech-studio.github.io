<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/hueroom/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('hueroom.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('hueroom.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('hueroom.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('hueroom.name') }} — {{ t('hueroom.subtitle') }}</p>
    <p class="updated-date">{{ t('hueroom.privacy.updated') }}: 2026-06-15</p>

    <p class="intro-text">{{ t('hueroom.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.photos_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.photos_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('hueroom.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('hueroom.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('hueroom.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
