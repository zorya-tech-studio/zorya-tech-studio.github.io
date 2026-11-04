<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/survival-guide/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('survivalGuide.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('survivalGuide.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('survivalGuide.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('survivalGuide.name') }} — {{ t('survivalGuide.subtitle') }}</p>
    <p class="updated-date">{{ t('survivalGuide.privacy.updated') }}: 2026-11-04</p>
    <p class="intro-text">{{ t('survivalGuide.privacy.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.summary_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.summary_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.storage_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('survivalGuide.privacy.storage_b1') }}</li>
        <li>{{ t('survivalGuide.privacy.storage_b2') }}</li>
        <li>{{ t('survivalGuide.privacy.storage_b3') }}</li>
      </ul>
      <p class="section-text">{{ t('survivalGuide.privacy.storage_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.ads_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.crash_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.crash_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.notif_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.notif_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.perm_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.perm_p1') }}</p>
      <ul class="permissions-list">
        <li>{{ t('survivalGuide.privacy.perm_b1') }}</li>
        <li>{{ t('survivalGuide.privacy.perm_b2') }}</li>
        <li>{{ t('survivalGuide.privacy.perm_b3') }}</li>
        <li>{{ t('survivalGuide.privacy.perm_b4') }}</li>
      </ul>
      <p class="section-text">{{ t('survivalGuide.privacy.perm_p2') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.links_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.links_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.children_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('survivalGuide.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('survivalGuide.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
