<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/movogra/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('movogra.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('movogra.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('movogra.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('movogra.name') }} — {{ t('movogra.subtitle') }}</p>
    <p class="updated-date">{{ t('movogra.privacy.updated') }}: 2026-03-22</p>

    <p class="intro-text">{{ t('movogra.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('movogra.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('movogra.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('movogra.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('movogra.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('movogra.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('movogra.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('movogra.privacy.third_admob') }}
        </li>
        <li>
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener"
            >Firebase Analytics</a
          >
          — {{ t('movogra.privacy.third_firebase') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('movogra.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('movogra.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('movogra.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('movogra.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('movogra.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('movogra.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
