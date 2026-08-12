<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/minesweeper/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('minesweeper.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('minesweeper.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('minesweeper.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('minesweeper.name') }} — {{ t('minesweeper.subtitle') }}</p>
    <p class="updated-date">{{ t('minesweeper.privacy.updated') }}: 2026-08-12</p>

    <p class="intro-text">{{ t('minesweeper.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.play_games_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.play_games_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
        </li>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
            >Google Play Games Services</a
          >
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('minesweeper.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('minesweeper.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
