<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const servicesUrl = computed(() => `/${locale.value}/services`)
const emailUrl = computed(() => {
  const subject = encodeURIComponent(t('services.email_subject'))
  return `mailto:zoryatechstudio@gmail.com?subject=${subject}`
})
</script>

<template>
  <section id="services" class="section services-promo">
    <div class="promo-panel">
      <div class="promo-copy">
        <p class="section-eyebrow">{{ t('services.home_eyebrow') }}</p>
        <h2 class="section-title">{{ t('services.home_title') }}</h2>
        <p class="promo-lead">{{ t('services.home_lead') }}</p>
        <div class="promo-actions">
          <router-link :to="servicesUrl" class="promo-primary">
            {{ t('services.home_cta') }}
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </router-link>
          <a :href="emailUrl" class="btn-outline">{{ t('services.home_email_cta') }}</a>
        </div>
      </div>

      <ul class="promo-types" :aria-label="t('services.home_types_label')">
        <li>
          <span class="type-icon" aria-hidden="true">01</span>
          <span>{{ t('services.home_types.mobile') }}</span>
        </li>
        <li>
          <span class="type-icon" aria-hidden="true">02</span>
          <span>{{ t('services.home_types.web') }}</span>
        </li>
        <li>
          <span class="type-icon" aria-hidden="true">03</span>
          <span>{{ t('services.home_types.software') }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services-promo {
  padding-top: clamp(56px, 8vw, 96px);
  padding-bottom: clamp(56px, 8vw, 96px);
}

.promo-panel {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  align-items: center;
  gap: var(--sp-8);
  padding: clamp(28px, 5vw, 56px);
  overflow: hidden;
  border: 1px solid var(--accent-faint);
  border-radius: var(--r-lg);
  background:
    radial-gradient(circle at 90% 0, rgba(242, 182, 90, 0.12), transparent 36%),
    linear-gradient(145deg, rgba(17, 21, 32, 0.96), rgba(10, 13, 20, 0.9));
}

.promo-panel::after {
  content: '';
  position: absolute;
  top: -55px;
  right: -55px;
  width: 170px;
  height: 170px;
  border: 1px solid rgba(143, 163, 216, 0.16);
  border-radius: 50%;
  pointer-events: none;
}

.promo-copy {
  position: relative;
  z-index: 1;
}

.promo-lead {
  max-width: 650px;
  margin: var(--sp-4) 0 0;
  color: var(--text-muted);
  font-size: var(--fs-md);
  line-height: var(--lh-normal);
}

.promo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  margin-top: var(--sp-6);
}

.promo-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 11px 20px;
  border: 1px solid var(--accent);
  border-radius: var(--r-pill);
  background: var(--accent);
  color: #16110a;
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 600;
}

.promo-primary:hover {
  color: #16110a;
  background: var(--accent-hover);
}

.promo-primary svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.promo-types {
  position: relative;
  z-index: 1;
  display: grid;
  gap: var(--sp-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.promo-types li {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  padding: var(--sp-4);
  border: 1px solid var(--hairline);
  border-radius: var(--r-md);
  background: rgba(24, 29, 42, 0.72);
  color: var(--text);
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 500;
}

.type-icon {
  color: var(--accent);
  font-size: var(--fs-xs);
  letter-spacing: 0.06em;
}

@media (max-width: 800px) {
  .promo-panel {
    grid-template-columns: 1fr;
    gap: var(--sp-6);
  }
}

@media (max-width: 520px) {
  .promo-actions {
    flex-direction: column;
  }

  .promo-primary,
  .promo-actions .btn-outline {
    justify-content: center;
  }
}
</style>
