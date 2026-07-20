<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/human-tetris/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('humanTetris.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('humanTetris.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('humanTetris.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('humanTetris.name') }} — {{ t('humanTetris.subtitle') }}</p>
    <p class="updated-date">{{ t('humanTetris.privacy.updated') }}: 2026-06-23</p>

    <p class="intro-text">{{ t('humanTetris.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.camera_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.camera_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('humanTetris.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.youtube_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.youtube_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
