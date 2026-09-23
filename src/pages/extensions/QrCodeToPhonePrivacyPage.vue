<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const toolsUrl = computed(() => `/${locale.value}/tools`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/qr-code-to-phone/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))

const processed = [
  'tab',
  'menu',
  'text_tab',
  'wifi',
  'ip',
  'settings',
  'history',
  'scan',
  'counter',
]
const notDo = ['analytics', 'ads', 'accounts', 'pages', 'selling']
const permissions = ['activeTab', 'contextMenus', 'storage']
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <router-link :to="toolsUrl">{{ t('tools.title') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('qrCodeToPhone.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('qrCodeToPhone.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('qrCodeToPhone.name') }} — {{ t('qrCodeToPhone.subtitle') }}</p>
    <p class="updated-date">{{ t('qrCodeToPhone.privacy.updated') }}: 2026-09-23</p>

    <p class="intro-text">{{ t('qrCodeToPhone.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.short_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.short_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.processed_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.processed_text') }}</p>
      <ul class="permissions-list">
        <li v-for="k in processed" :key="k">{{ t(`qrCodeToPhone.privacy.processed_${k}`) }}</li>
      </ul>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.processed_note') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.notdo_title') }}</h2>
      <ul class="permissions-list">
        <li v-for="k in notDo" :key="k">{{ t(`qrCodeToPhone.privacy.notdo_${k}`) }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li v-for="k in permissions" :key="k">
          {{ t(`qrCodeToPhone.privacy.permissions_${k}`) }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.limited_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.limited_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('qrCodeToPhone.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('qrCodeToPhone.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
