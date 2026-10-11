<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/pickleball-scorekeeper/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('pickleballScorekeeper.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('pickleballScorekeeper.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('pickleballScorekeeper.privacy.title') }}</h1>
      <div class="header-actions">
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('pickleballScorekeeper.name') }} — {{ t('pickleballScorekeeper.subtitle') }}
    </p>
    <p class="updated-date">{{ t('pickleballScorekeeper.privacy.updated') }}: 2026-10-11</p>
    <p class="intro-text">{{ t('pickleballScorekeeper.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.short_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.storage_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('pickleballScorekeeper.privacy.storage_history') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.storage_names') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.storage_settings') }}</li>
      </ul>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.storage_after') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.voice_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.voice_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.files_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.files_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.ads_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.ads_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('pickleballScorekeeper.privacy.ads_google_policy') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.ads_google_partners') }}</li>
      </ul>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.ads_consent') }}</p>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.ads_reset_id') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.not_title') }}</h2>
      <ul class="permissions-list">
        <li>{{ t('pickleballScorekeeper.privacy.not_accounts') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.not_server') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.not_analytics') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.not_notifications') }}</li>
        <li>{{ t('pickleballScorekeeper.privacy.not_selling') }}</li>
      </ul>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.children_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.rights_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.rights_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.independence_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.independence_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
