<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/crochet-row-counter/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('crochetRowCounter.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('crochetRowCounter.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('crochetRowCounter.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('crochetRowCounter.name') }} — {{ t('crochetRowCounter.subtitle') }}
    </p>
    <p class="updated-date">{{ t('crochetRowCounter.privacy.updated') }}: 2026-11-02</p>
    <p class="intro-text">{{ t('crochetRowCounter.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.summary_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.summary_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.storage_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('crochetRowCounter.privacy.storage_b1') }}</li>
        <li>{{ t('crochetRowCounter.privacy.storage_b2') }}</li>
        <li>{{ t('crochetRowCounter.privacy.storage_b3') }}</li>
        <li>{{ t('crochetRowCounter.privacy.storage_b4') }}</li>
      </ul>
      <p class="section-text">{{ t('crochetRowCounter.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.camera_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.camera_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.backup_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.backup_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.sysbackup_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.sysbackup_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.ads_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.third_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.choices_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.choices_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('crochetRowCounter.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('crochetRowCounter.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
