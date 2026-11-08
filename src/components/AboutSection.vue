<script setup>
import { useI18n } from 'vue-i18n'
import { apps } from '../data/apps.js'
import { watchFaces } from '../data/watchfaces.js'
const { t, availableLocales } = useI18n()

const stats = [
  { key: 'stat_apps', value: apps.length + watchFaces.length, plus: true },
  { key: 'stat_categories', value: new Set(apps.map((a) => a.category)).size },
  { key: 'stat_languages', value: availableLocales.length },
]
</script>

<template>
  <section id="about" class="section about">
    <p class="section-eyebrow">{{ t('about.eyebrow') }}</p>
    <h2 class="section-title">{{ t('about.title') }}</h2>
    <div class="about-text">
      <p>{{ t('about.p1') }}</p>
      <p>{{ t('about.p2') }}</p>
    </div>
    <dl class="about-stats">
      <div v-for="(s, i) in stats" :key="s.key" v-reveal="i" class="about-stat">
        <dt class="about-stat__label">{{ t(`about.${s.key}`) }}</dt>
        <dd class="about-stat__value">
          <span v-count-up="s.value" />
          <span v-if="s.plus" class="about-stat__plus">+</span>
        </dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.about-text {
  max-width: 660px;
  margin-top: var(--sp-5);
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

.about-text p {
  font-size: var(--fs-md);
  color: var(--text-muted);
  line-height: var(--lh-loose);
}
.about-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--sp-6) clamp(32px, 8vw, 88px);
  margin: var(--sp-7) 0 0;
}

.about-stat {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 4px;
}

.about-stat__value {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(36px, 6vw, 52px);
  font-weight: 500;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 24px rgba(242, 182, 90, 0.25);
}

.about-stat__plus {
  color: var(--accent-hover);
}

.about-stat__label {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}
</style>
