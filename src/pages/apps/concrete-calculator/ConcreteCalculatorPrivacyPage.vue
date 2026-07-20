<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/concrete-calculator/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('concreteCalculator.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('concreteCalculator.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('concreteCalculator.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">
      {{ t('concreteCalculator.name') }} — {{ t('concreteCalculator.subtitle') }}
    </p>
    <p class="updated-date">{{ t('concreteCalculator.privacy.updated') }}: 2026-06-20</p>

    <p class="intro-text">{{ t('concreteCalculator.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.permissions_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.permissions_text') }}</p>
      <ul class="permissions-list">
        <li>{{ t('concreteCalculator.privacy.permissions_internet') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('concreteCalculator.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('concreteCalculator.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('concreteCalculator.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
