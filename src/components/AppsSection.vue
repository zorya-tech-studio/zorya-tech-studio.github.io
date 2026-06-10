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
        <span class="app-badge app-badge--released">{{ t(app.statusKey) }}</span>
        <img :src="app.icon" :alt="t(app.nameKey)" class="app-icon" width="48" height="48" />
        <div class="app-info">
          <h3 class="app-name">{{ t(app.nameKey) }}</h3>
          <p class="app-desc">{{ t(app.descKey) }}</p>
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
  align-items: center;
  gap: 20px;
  padding: 24px;
  padding-right: 96px;
  background: var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: 12px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

.app-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent-dim);
}

.app-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: cover;
}

.app-info {
  flex: 1;
  min-width: 0;
}

.app-name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--text);
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.app-desc {
  color: var(--text-dim);
  font-size: 0.9rem;
  line-height: 1.5;
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
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 12px;
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
    gap: 12px;
    padding: 16px;
    padding-right: 16px;
    padding-top: 44px;
  }

  .app-badge {
    top: 14px;
    right: 14px;
  }
}
</style>
