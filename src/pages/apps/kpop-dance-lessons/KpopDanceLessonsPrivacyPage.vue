<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/kpop-dance-lessons/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('kpopDanceLessons.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('kpopDanceLessons.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('kpopDanceLessons.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('kpopDanceLessons.name') }} — {{ t('kpopDanceLessons.subtitle') }}</p>
    <p class="updated-date">{{ t('kpopDanceLessons.privacy.updated') }}: 2026-07-31</p>

    <p class="intro-text">{{ t('kpopDanceLessons.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('kpopDanceLessons.privacy.permissions_internet') }}</li>
        <li>{{ t('kpopDanceLessons.privacy.permissions_notifications') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
