<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/cube-solver-3d/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/cube-solver-3d/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('cubeSolver3d.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('cubeSolver3d.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('cubeSolver3d.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('cubeSolver3d.name') }} — {{ t('cubeSolver3d.subtitle') }}</p>
    <p class="updated-date">{{ t('cubeSolver3d.terms.updated') }}: 2026-10-30</p>
    <p class="intro-text">{{ t('cubeSolver3d.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.app_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.app_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.age_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.age_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.data_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.data_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.content_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.content_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.adsterms_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.adsterms_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.liability_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.changes_p1') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('cubeSolver3d.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('cubeSolver3d.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
