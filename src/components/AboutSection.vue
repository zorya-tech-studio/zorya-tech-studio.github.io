<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="section about">
    <p class="section-eyebrow">{{ t('about.eyebrow') }}</p>
    <h2 class="section-title">{{ t('about.title') }}</h2>
    <div class="about-text">
      <p>{{ t('about.p1') }}</p>
      <p>{{ t('about.p2') }}</p>
    </div>
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
</style>
