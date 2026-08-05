<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { apps } from '../data/apps.js'
import OpenSourceSection from '../components/OpenSourceSection.vue'

const { t } = useI18n()
const route = useRoute()
const locale = computed(() => route.params.locale || 'en')
const homeUrl = computed(() => `/${locale.value}`)

const activeFilter = ref('all')

// Build the filter list dynamically from the categories actually present,
// keeping a stable display order. 'all' always comes first.
const CATEGORY_ORDER = [
  'games',
  'quiz',
  'tools',
  'calculators',
  'reference',
  'pets',
  'lifestyle',
  'esoteric',
]
const filters = computed(() => {
  const present = new Set(apps.map((app) => app.category))
  return ['all', ...CATEGORY_ORDER.filter((c) => present.has(c))]
})

// Number of apps per filter (the 'all' filter counts every app).
const countFor = (f) =>
  f === 'all' ? apps.length : apps.filter((app) => app.category === f).length

const filteredApps = computed(() =>
  activeFilter.value === 'all' ? apps : apps.filter((app) => app.category === activeFilter.value),
)
</script>

<template>
  <section class="projects-page">
    <div class="projects-container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
        <span class="sep">/</span>
        <span aria-current="page">{{ t('projects.title') }}</span>
      </nav>

      <p class="section-eyebrow">{{ t('apps.eyebrow') }}</p>
      <h1 class="page-title">{{ t('projects.title') }}</h1>
      <p class="page-subtitle">{{ t('projects.subtitle') }}</p>

      <p v-if="apps.length === 0" class="projects-empty">{{ t('projects.empty') }}</p>

      <div v-else class="projects-filters" role="tablist" aria-label="Filter projects">
        <button
          v-for="f in filters"
          :key="f"
          type="button"
          role="tab"
          :aria-selected="activeFilter === f"
          class="filter-tab"
          @click="activeFilter = f"
        >
          {{ t(`projects.filter.${f}`) }}
          <span class="count">{{ countFor(f) }}</span>
        </button>
      </div>

      <div v-if="apps.length > 0" class="card-grid">
        <router-link
          v-for="app in filteredApps"
          :key="app.slug"
          :to="app.privacyRoute(locale)"
          class="app-card project-card"
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
              <h2 class="app-card__title">{{ t(app.nameKey) }}</h2>
              <span class="badge-released">{{ t(`app_status.${app.status}`) }}</span>
            </div>
          </div>
          <p class="app-card__desc">{{ t(app.descKey) }}</p>
          <div class="app-card__tags">
            <span v-for="tag in app.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </router-link>
      </div>

      <OpenSourceSection />
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: calc(var(--nav-h) + var(--sp-7)) var(--gutter) var(--sp-9);
}

.projects-container {
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

.projects-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
  margin-bottom: var(--sp-7);
}

.project-card {
  display: flex;
  flex-direction: column;
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
  margin-top: auto;
  padding-top: var(--sp-4);
}

.projects-empty {
  color: var(--text-muted);
  font-size: var(--fs-md);
  text-align: center;
  padding: var(--sp-9) 0;
}
</style>
