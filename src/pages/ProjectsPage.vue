<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { apps } from '../data/apps.js'

const { t } = useI18n()
const route = useRoute()
const locale = computed(() => route.params.locale || 'en')
const homeUrl = computed(() => `/${locale.value}`)
</script>

<template>
  <section class="projects-page">
    <div class="projects-container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ t('projects.title') }}</span>
      </nav>
      <h1 class="page-title">{{ t('projects.title') }}</h1>
      <p class="page-subtitle">{{ t('projects.subtitle') }}</p>

      <p v-if="apps.length === 0" class="projects-empty">{{ t('projects.empty') }}</p>

      <div v-else class="projects-list">
        <router-link
          v-for="app in apps"
          :key="app.slug"
          :to="app.privacyRoute(locale)"
          class="project-card"
        >
          <div class="project-header">
            <img
              :src="app.icon"
              :alt="t(app.nameKey)"
              class="project-icon"
              width="56"
              height="56"
            />
            <div class="project-heading">
              <h2 class="project-name">{{ t(app.nameKey) }}</h2>
              <span class="project-status">{{ t(app.statusKey) }}</span>
            </div>
          </div>
          <p class="project-description">{{ t(app.descKey) }}</p>
          <div class="project-tags">
            <span v-for="tag in app.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: calc(var(--nav-height) + 48px) 24px 100px;
}

.projects-container {
  max-width: 980px;
  margin: 0 auto;
}

.page-title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 2.4rem;
  color: var(--accent);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.page-subtitle {
  color: var(--text-dim);
  font-size: 1.05rem;
  margin-bottom: 48px;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: 12px;
  padding: 28px;
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 24px var(--accent-dim);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.project-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  object-fit: cover;
}

.project-heading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
}

.project-name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--text);
}

.project-status {
  font-size: 0.8rem;
  font-weight: 600;
  color: #34d399;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(52, 211, 153, 0.12);
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
}

.project-description {
  color: var(--text-dim);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.projects-empty {
  color: var(--text-dim);
  font-size: 1.1rem;
  text-align: center;
  padding: 64px 0;
}

.tag {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-dim);
  border: 1px solid var(--surface-light);
  padding: 3px 10px;
  border-radius: 4px;
  letter-spacing: 0.3px;
}

@media (max-width: 480px) {
  .projects-page {
    padding: calc(var(--nav-height) + 24px) 16px 60px;
  }

  .page-title {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .project-card {
    padding: 20px;
  }
}
</style>
