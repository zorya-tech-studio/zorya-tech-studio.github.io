<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/pickleball-scorekeeper/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/pickleball-scorekeeper/terms-of-use`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="terms-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('pickleballScorekeeper.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('pickleballScorekeeper.terms.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('pickleballScorekeeper.terms.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">
      {{ t('pickleballScorekeeper.name') }} — {{ t('pickleballScorekeeper.subtitle') }}
    </p>
    <p class="updated-date">{{ t('pickleballScorekeeper.terms.updated') }}: 2026-10-11</p>
    <p class="intro-text">{{ t('pickleballScorekeeper.terms.intro') }}</p>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.license_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.license_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.rules_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.rules_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.scoring_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.scoring_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.ads_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.ads_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.warranty_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.warranty_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.liability_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.liability_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.independence_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.independence_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('pickleballScorekeeper.terms.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.changes_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.changes_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.law_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.law_text') }}</p>
    </div>
    <div class="policy-section">
      <h2 class="section-heading">{{ t('pickleballScorekeeper.terms.contact_title') }}</h2>
      <p class="section-text">{{ t('pickleballScorekeeper.terms.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
