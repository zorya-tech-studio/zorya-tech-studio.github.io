<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/kpop-dance-lessons/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/kpop-dance-lessons/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('kpopDanceLessons.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('kpopDanceLessons.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('kpopDanceLessons.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('kpopDanceLessons.name') }} — {{ t('kpopDanceLessons.subtitle') }}</p>
    <p class="updated-date">{{ t('kpopDanceLessons.offer.updated') }}: 2026-07-31</p>

    <p class="intro-text">{{ t('kpopDanceLessons.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.license_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('kpopDanceLessons.offer.restrictions_reverse') }}</li>
        <li>{{ t('kpopDanceLessons.offer.restrictions_modify') }}</li>
        <li>{{ t('kpopDanceLessons.offer.restrictions_distribute') }}</li>
        <li>{{ t('kpopDanceLessons.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.independence_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.independence_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.health_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.health_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.price_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.price_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('kpopDanceLessons.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.law_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('kpopDanceLessons.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('kpopDanceLessons.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
