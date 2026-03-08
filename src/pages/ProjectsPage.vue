<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const homeUrl = computed(() => `/${route.params.locale || 'en'}`)
const projects = ref([])
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

      <p v-if="projects.length === 0" class="projects-empty">{{ t('projects.empty') }}</p>

      <div v-else class="projects-list">
        <article v-for="project in projects" :key="project.name" class="project-card">
          <div class="project-header">
            <h2 class="project-name">{{ project.name }}</h2>
            <span class="project-status">{{ project.status }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
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
  max-width: 720px;
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: 12px;
  padding: 28px;
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
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
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
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--accent-dim);
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
