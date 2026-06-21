<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const locale = computed(() => route.params.locale || 'uk')
const homeUrl = computed(() => `/${locale.value}`)
const otherLocale = computed(() => (locale.value === 'uk' ? 'en' : 'uk'))
const otherLocaleUrl = computed(() => `/${otherLocale.value}/human-tetris/privacy-policy`)
const otherLocaleLabel = computed(() => (locale.value === 'uk' ? 'EN' : 'UK'))
</script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span>{{ t('humanTetris.name') }}</span>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ t('humanTetris.privacy.title') }}</span>
    </nav>

    <div class="page-header">
      <h1 class="page-title">{{ t('humanTetris.privacy.title') }}</h1>
      <router-link :to="otherLocaleUrl" class="lang-toggle" :aria-label="t('nav.switch_lang')">
        {{ otherLocaleLabel }}
      </router-link>
    </div>

    <p class="app-label">{{ t('humanTetris.name') }} — {{ t('humanTetris.subtitle') }}</p>
    <p class="updated-date">{{ t('humanTetris.privacy.updated') }}: 2026-06-22</p>

    <p class="intro-text">{{ t('humanTetris.privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.collect_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.collect_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.camera_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.camera_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.storage_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.storage_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.third_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — {{ t('humanTetris.privacy.third_admob') }}
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.notifications_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.notifications_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.children_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.children_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.changes_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ t('humanTetris.privacy.contact_title') }}</h2>
      <p class="section-text">{{ t('humanTetris.privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
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

.third-party-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.third-party-list li {
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 6px;
}

.third-party-list a {
  color: var(--accent);
}

.contact-email {
  display: inline-block;
  margin-top: 8px;
  color: var(--accent);
  font-weight: 500;
}

@media (max-width: 480px) {
  .privacy-page {
    padding: calc(var(--nav-height) + 24px) 16px 60px;
  }

  .page-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
}
</style>
