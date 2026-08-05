<script setup>
import { useI18n } from 'vue-i18n'
import { openSourceProjects } from '../data/opensource.js'

const { t } = useI18n()
</script>

<template>
  <section id="open-source" class="open-source" aria-labelledby="open-source-title">
    <p class="section-eyebrow">{{ t('opensource.eyebrow') }}</p>
    <h2 id="open-source-title" class="section-title">{{ t('opensource.title') }}</h2>
    <p class="open-source__lead">{{ t('opensource.lead') }}</p>

    <div class="card-grid">
      <a
        v-for="project in openSourceProjects"
        :key="project.slug"
        :href="project.url"
        class="app-card repo-card"
        target="_blank"
        rel="noopener"
      >
        <div class="repo-card__head">
          <span class="repo-card__icon" aria-hidden="true">
            <svg v-if="project.icon === 'gauge'" viewBox="0 0 24 24">
              <path d="M4 17a8 8 0 1 1 16 0" />
              <path d="M12 17l4.2-4.6" />
              <circle cx="12" cy="17" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            <svg v-else viewBox="0 0 24 24">
              <path d="M4.5 5.5h15v9a2 2 0 0 1-2 2h-7.2L6 20v-3.5H4.5z" />
              <path d="M12 8v5M12 13l-2-2M12 13l2-2" />
            </svg>
          </span>
          <div class="repo-card__meta">
            <h3 class="app-card__title">{{ project.name }}</h3>
            <span class="repo-card__license">{{ project.license }}</span>
          </div>
        </div>

        <p class="app-card__desc">{{ t(project.descKey) }}</p>

        <div class="repo-card__foot">
          <div class="repo-card__tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <span class="repo-card__link">
            {{ t('opensource.link') }}
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.open-source {
  margin-top: var(--sp-9);
  padding-top: var(--sp-8);
  border-top: 1px solid var(--hairline);
}

.open-source__lead {
  max-width: 680px;
  margin: var(--sp-3) 0 var(--sp-7);
  color: var(--text-muted);
  font-size: var(--fs-md);
  line-height: var(--lh-normal);
}

.repo-card {
  display: flex;
  flex-direction: column;
}

.repo-card__head {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-4);
  min-width: 0;
}

.repo-card__icon {
  flex: 0 0 52px;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: var(--accent-faint);
  color: var(--accent);
}

.repo-card__icon svg {
  width: 26px;
  height: 26px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.repo-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
}

.repo-card__license {
  padding: 3px 9px;
  border: 1px solid var(--hairline);
  border-radius: var(--r-pill);
  background: var(--surface-2);
  color: var(--text-faint);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

/* Завжди два ряди — теги, потім посилання. В один ряд із wrap картки
   розходяться: де теги ширші, посилання зістрибує на власний рядок. */
.repo-card__foot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sp-4);
  margin-top: auto;
  padding-top: var(--sp-4);
}

.repo-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
}

.repo-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--accent);
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 500;
  white-space: nowrap;
}

.repo-card__link svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform var(--t-fast);
}

.repo-card:hover .repo-card__link svg {
  transform: translate(2px, -2px);
}

@media (max-width: 520px) {
  .open-source {
    margin-top: var(--sp-8);
  }
}
</style>
