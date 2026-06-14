<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/chromatic/privacy-policy`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/chromatic/offer`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="offer-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('chromatic.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('chromatic.offer.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('chromatic.offer.title') }}</h1>
      <div class="header-actions">
        <router-link :to="privacyUrl" class="header-link">{{ t('nav.view_privacy') }}</router-link>
        <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
          {{ otherLocaleLabel }}
        </router-link>
      </div>
    </div>

    <p class="app-label">{{ t('chromatic.name') }} — {{ t('chromatic.subtitle') }}</p>
    <p class="updated-date">{{ t('chromatic.offer.updated') }}: 2026-06-15</p>

    <p class="intro-text">{{ t('chromatic.offer.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.definitions_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.definitions_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.subject_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.subject_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.acceptance_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.acceptance_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.license_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.license_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.restrictions_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.restrictions_text') }}</p>
      <ul class="rules-list">
        <li>{{ t('chromatic.offer.restrictions_reverse') }}</li>
        <li>{{ t('chromatic.offer.restrictions_modify') }}</li>
        <li>{{ t('chromatic.offer.restrictions_distribute') }}</li>
        <li>{{ t('chromatic.offer.restrictions_circumvent') }}</li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.ads_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.ads_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.iap_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.iap_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.ip_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.ip_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.warranty_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.warranty_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.liability_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.liability_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.privacy_title') }}</h2>
      <p class="section-text">
        {{ t('chromatic.offer.privacy_text') }}
        <router-link :to="privacyUrl" class="inline-link">{{ t('nav.view_privacy') }}</router-link
        >.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.termination_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.termination_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.changes_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.law_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.law_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('chromatic.offer.contact_title') }}</h2>
      <p class="section-text">{{ t('chromatic.offer.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>

<style scoped>
.offer-page {
  min-height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 48px) 24px 100px;
  background: var(--bg);
  color: var(--text);
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.page-title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 2rem;
  color: var(--accent);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.header-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-ui);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent);
  border: 1px solid var(--accent-dim);
  border-radius: 6px;
  padding: 6px 14px;
  letter-spacing: 0.5px;
  transition:
    background 0.2s,
    border-color 0.2s;
}

.header-link:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.lang-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-ui);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  border: 1px solid var(--accent-dim);
  border-radius: 6px;
  padding: 6px 16px;
  letter-spacing: 1px;
  transition:
    background 0.2s,
    border-color 0.2s;
}

.lang-toggle:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.app-label {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.updated-date {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin-bottom: 40px;
}

.intro-text {
  color: var(--text);
  font-size: 1.05rem;
  line-height: 1.8;
  padding-bottom: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--accent-dim);
}

.policy-section {
  margin-bottom: 32px;
}

.section-heading {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--accent);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.section-text {
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 16px;
}

.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rules-list li {
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 12px;
  padding-left: 16px;
  border-left: 2px solid rgba(0, 240, 255, 0.15);
}

.inline-link {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.inline-link:hover {
  text-decoration: none;
}

.contact-email {
  display: inline-block;
  margin-top: 8px;
  color: var(--accent);
  font-weight: 500;
}

@media (max-width: 480px) {
  .offer-page {
    padding: calc(var(--nav-height) + 24px) 16px 60px;
  }

  .page-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
}
</style>
