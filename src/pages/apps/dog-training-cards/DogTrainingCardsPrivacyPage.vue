<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/dog-training-cards/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('dogTraining.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('dogTraining.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('dogTraining.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('dogTraining.name') }} — {{ t('dogTraining.subtitle') }}</p>
    <p class="updated-date">{{ t('dogTraining.privacy.updated') }}: 2026-06-22</p>

    <p class="intro-text">{{ t('dogTraining.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.third_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('dogTraining.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('dogTraining.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
