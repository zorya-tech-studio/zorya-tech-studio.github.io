<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const projectsUrl = computed(() => `/${locale.value}/projects`)
</script>

<template>
  <section id="apps" class="section">
    <h2 class="section-title">{{ t('apps.title') }}</h2>
    <div class="apps-grid">
      <div class="app-card">
        <div class="app-icon">
          <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
            <rect x="4" y="4" width="40" height="40" rx="10" stroke="currentColor" stroke-width="1.5" />
            <text x="24" y="30" text-anchor="middle" fill="currentColor" font-size="20">?</text>
          </svg>
        </div>
        <div class="app-info">
          <h3 class="app-name">{{ t('apps.secret_app') }}</h3>
          <p class="app-desc">{{ t('apps.secret_app_desc') }}</p>
        </div>
        <span class="app-badge">{{ t('apps.coming_soon') }}</span>
      </div>
    </div>
    <div class="apps-cta">
      <router-link :to="projectsUrl" class="apps-view-all">
      {{ t('apps.view_all') }}
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9,6 15,12 9,18" />
      </svg>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.apps-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 520px;
  margin: 0 auto;
}

.app-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--accent-dim);
  border-radius: 12px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.app-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent-dim);
}

.app-icon {
  flex-shrink: 0;
  color: var(--accent);
  opacity: 0.6;
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
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.apps-view-all:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
  box-shadow: 0 0 16px var(--accent-dim);
  color: var(--accent);
}

.app-badge {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--accent-dim);
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
}
</style>
