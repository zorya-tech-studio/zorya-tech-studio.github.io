<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="section">
    <h2 class="section-title">{{ t('about.title') }}</h2>
    <div class="about-text">
      <p>{{ t('about.p1') }}</p>
      <p>{{ t('about.p2') }}</p>
    </div>
  </section>
</template>

<style scoped>
.about-text {
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-text p {
  font-size: 1.05rem;
  color: var(--text);
  line-height: 1.8;
}
</style>
