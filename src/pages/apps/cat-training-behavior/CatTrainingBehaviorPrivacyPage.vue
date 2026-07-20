<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/cat-training-behavior/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('catTraining.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('catTraining.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('catTraining.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('catTraining.name') }} — {{ t('catTraining.subtitle') }}</p>
    <p class="updated-date">{{ t('catTraining.privacy.updated') }}: 2026-06-25</p>

    <p class="intro-text">{{ t('catTraining.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('catTraining.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('catTraining.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
