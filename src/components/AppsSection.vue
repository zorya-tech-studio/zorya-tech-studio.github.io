<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { apps } from '../data/apps.js'

const { t, locale } = useI18n()
const projectsUrl = computed(() => `/${locale.value}/projects`)

// Show only a curated subset on the homepage — the full catalogue lives on the Projects page.
const HOMEPAGE_APPS_LIMIT = 9
const featuredApps = computed(() => apps.slice(0, HOMEPAGE_APPS_LIMIT))
</script>

<template>
  <section id="apps" class="section apps">
    <div class="apps-head">
      <div>
        <p class="section-eyebrow">{{ t('apps.eyebrow') }}</p>
        <h2 class="section-title">{{ t('apps.title') }}</h2>
      </div>
      <router-link :to="projectsUrl" class="btn-outline apps-view-all">
        {{ t('apps.view_all') }}
        <svg
          class="arrow"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="9,6 15,12 9,18" />
        </svg>
      </router-link>
    </div>

    <div class="card-grid">
      <router-link
        v-for="app in featuredApps"
        :key="app.slug"
        :to="app.privacyRoute(locale)"
        class="app-card"
      >
        <div class="app-card__head">
          <img
            :src="app.icon"
            :alt="t(app.nameKey)"
            class="app-card__icon"
            width="52"
            height="52"
          />
          <div class="app-card__meta">
            <h3 class="app-card__title">{{ t(app.nameKey) }}</h3>
            <span class="badge-released">{{ t(app.statusKey) }}</span>
          </div>
        </div>
        <p class="app-card__desc">{{ t(app.descKey) }}</p>
        <div class="app-card__tags">
          <span v-for="tag in app.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </router-link>
    </div>

    <div class="apps-foot">
      <router-link :to="projectsUrl" class="btn-outline apps-view-all">
        {{ t('apps.view_all') }}
        <svg
          class="arrow"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="9,6 15,12 9,18" />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.apps-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--sp-4);
  flex-wrap: wrap;
  margin-bottom: var(--sp-7);
}

.apps-foot {
  display: flex;
  justify-content: center;
  margin-top: var(--sp-7);
}

.app-card__head {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-4);
  min-width: 0;
}

.app-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
}

.app-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
  margin-top: var(--sp-4);
}

@media (max-width: 480px) {
  .apps-view-all {
    width: 100%;
    justify-content: center;
  }
}
</style>
