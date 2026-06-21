<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { apps } from '../data/apps.js'

const { t, locale } = useI18n()
const projectsUrl = computed(() => `/${locale.value}/projects`)
</script>

<template>
  <section id="apps" class="section">
    <h2 class="section-title">{{ t('apps.title') }}</h2>
    <div class="apps-grid">
      <router-link
        v-for="app in apps"
        :key="app.slug"
        :to="app.privacyRoute(locale)"
        class="app-card"
      >
        <div class="app-card__head">
          <img :src="app.icon" :alt="t(app.nameKey)" class="app-icon" width="52" height="52" />
          <div class="app-head-text">
            <h3 class="app-name">{{ t(app.nameKey) }}</h3>
            <span class="app-badge app-badge--released">{{ t(app.statusKey) }}</span>
          </div>
        </div>
        <p class="app-desc">{{ t(app.descKey) }}</p>
        <div class="app-tags">
          <span v-for="tag in app.tags" :key="tag" class="app-tag">{{ tag }}</span>
        </div>
      </router-link>
    </div>
    <div class="apps-cta">
      <router-link :to="projectsUrl" class="apps-view-all">
        {{ t('apps.view_all') }}
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9,6 15,12 9,18" />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.apps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 880px;
  margin: 0 auto;
}

.app-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  padding: 22px;
  background: var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: 14px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s,
    transform 0.3s;
  text-decoration: none;
  color: inherit;
}

.app-card:hover {
  border-color: var(--accent);
  box-shadow: 0 6px 24px var(--accent-dim);
  transform: translateY(-3px);
}

.app-card__head {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.app-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
}

.app-head-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
}

.app-name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.12rem;
  color: var(--text);
  letter-spacing: 0.5px;
  line-height: 1.25;
}

.app-desc {
  flex: 1;
  color: var(--text-dim);
  font-size: 0.9rem;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.app-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.app-tag {
  font-family: var(--font-ui);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--text-dim);
  padding: 3px 10px;
  border: 1px solid var(--accent-dim);
  border-radius: 20px;
  white-space: nowrap;
}

.apps-cta {
  text-align: center;
  margin-top: 32px;
}

.apps-view-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 10px 24px;
  font-family: var(--font-ui);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  border: 1px solid var(--accent-dim);
  border-radius: 6px;
  text-align: center;
  transition:
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
}

.apps-view-all:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
  box-shadow: 0 0 16px var(--accent-dim);
  color: var(--accent);
}

.app-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.66rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 20px;
  white-space: nowrap;
}

.app-badge--released {
  color: #34d399;
  background: rgba(52, 211, 153, 0.12);
}

@media (max-width: 640px) {
  .apps-grid {
    grid-template-columns: 1fr;
    max-width: 520px;
  }
}

@media (max-width: 480px) {
  .app-card {
    padding: 16px;
  }
}
</style>
