<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { watchFaces } from '../data/watchfaces.js'

const FAQ_COUNT = 4
const TERMS_COUNT = 4
const EMAIL = 'zoryatechstudio@gmail.com'

const { t } = useI18n()
const route = useRoute()
const locale = computed(() => route.params.locale || 'en')
const homeUrl = computed(() => `/${locale.value}`)
const privacyUrl = computed(() => `/${locale.value}/privacy`)
</script>

<template>
  <section class="wf-page">
    <div class="wf-container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
        <span class="sep">/</span>
        <span aria-current="page">{{ t('watchfaces.title') }}</span>
      </nav>

      <p class="section-eyebrow">{{ t('watchfaces.eyebrow') }}</p>
      <h1 class="page-title">{{ t('watchfaces.title') }}</h1>
      <p class="page-subtitle">{{ t('watchfaces.subtitle') }}</p>

      <div v-if="watchFaces.length" class="card-grid">
        <article v-for="face in watchFaces" :key="face.slug" class="app-card wf-card">
          <img :src="face.image" :alt="face.name" class="wf-card__image" width="320" height="320" />
          <h2 class="app-card__title">{{ face.name }}</h2>
          <p class="app-card__desc">{{ face.desc[locale] || face.desc.en }}</p>
          <a :href="face.playUrl" class="wf-link" target="_blank" rel="noopener">{{
            t('watchfaces.play')
          }}</a>
        </article>
      </div>
      <div v-else class="wf-status">
        <h2 class="wf-heading">{{ t('watchfaces.status_title') }}</h2>
        <p>{{ t('watchfaces.status_text') }}</p>
      </div>

      <p class="wf-text wf-about">{{ t('watchfaces.about_text') }}</p>

      <section id="privacy" class="wf-section">
        <h2 class="wf-heading">{{ t('watchfaces.privacy_title') }}</h2>
        <p class="wf-text">{{ t('watchfaces.privacy_text') }}</p>
        <router-link :to="privacyUrl" class="wf-link">{{
          t('watchfaces.privacy_link')
        }}</router-link>
      </section>

      <section id="support" class="wf-section">
        <h2 class="wf-heading">{{ t('watchfaces.support_title') }}</h2>
        <p class="wf-text">{{ t('watchfaces.support_text') }}</p>
        <a :href="`mailto:${EMAIL}`" class="wf-link">{{ EMAIL }}</a>
        <h3 class="wf-subheading">{{ t('watchfaces.faq_title') }}</h3>
        <dl class="wf-faq">
          <template v-for="i in FAQ_COUNT" :key="i">
            <dt>{{ t(`watchfaces.faq.${i - 1}.q`) }}</dt>
            <dd>{{ t(`watchfaces.faq.${i - 1}.a`) }}</dd>
          </template>
        </dl>
      </section>

      <section id="terms" class="wf-section">
        <h2 class="wf-heading">{{ t('watchfaces.terms_title') }}</h2>
        <ul class="wf-list">
          <li v-for="i in TERMS_COUNT" :key="i">{{ t(`watchfaces.terms.${i - 1}`) }}</li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.wf-page {
  min-height: 100vh;
  padding: calc(var(--nav-h) + var(--sp-7)) var(--gutter) var(--sp-9);
}

.wf-container {
  max-width: var(--maxw);
  margin: 0 auto;
}

.page-title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--fs-3xl);
  letter-spacing: var(--ls-tight);
  line-height: var(--lh-tight);
  color: var(--text);
  margin-bottom: var(--sp-3);
}

.page-subtitle {
  color: var(--text-muted);
  font-size: var(--fs-md);
  margin-bottom: var(--sp-7);
}

.wf-status {
  background: var(--surface-1);
  border: 1px solid var(--hairline);
  border-left: 2px solid var(--accent);
  border-radius: var(--r-sm);
  padding: var(--sp-5);
  color: var(--text);
}

.wf-heading {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--fs-xl, 1.4rem);
  color: var(--text);
  margin-bottom: var(--sp-3);
}

.wf-subheading {
  font-family: var(--font-heading);
  font-weight: 500;
  color: var(--text);
  margin: var(--sp-5) 0 var(--sp-3);
}

.wf-text,
.wf-faq dd,
.wf-list {
  color: var(--text-muted);
}

.wf-about {
  margin-top: var(--sp-6);
  max-width: 720px;
}

.wf-section {
  margin-top: var(--sp-8, 64px);
  max-width: 720px;
}

.wf-faq dt {
  color: var(--text);
  font-weight: 500;
  margin-top: var(--sp-3);
}

.wf-faq dd {
  margin: var(--sp-1, 4px) 0 0;
}

.wf-list {
  padding-left: 1.2em;
}

.wf-list li + li {
  margin-top: var(--sp-2);
}

.wf-link {
  display: inline-block;
  margin-top: var(--sp-3);
  font-weight: 500;
  color: var(--accent);
}

.wf-link:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}

.wf-card__image {
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: var(--sp-4);
}
</style>
