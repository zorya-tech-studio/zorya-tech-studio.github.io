<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const homeUrl = computed(() => `/${route.params.locale || 'en'}`)
const emailUrl = computed(() => {
  const subject = encodeURIComponent(t('services.email_subject'))
  return `mailto:zoryatechstudio@gmail.com?subject=${subject}`
})

const services = [
  { key: 'mobile', icon: 'phone' },
  { key: 'web', icon: 'browser' },
  { key: 'desktop', icon: 'desktop' },
  { key: 'rust', icon: 'terminal' },
]
</script>

<template>
  <div class="services-page">
    <section class="services-hero">
      <div class="services-container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
          <span class="sep">/</span>
          <span aria-current="page">{{ t('services.title') }}</span>
        </nav>

        <div class="hero-layout">
          <div class="hero-copy">
            <p class="section-eyebrow">{{ t('services.eyebrow') }}</p>
            <h1>{{ t('services.title') }}</h1>
            <p class="hero-lead">{{ t('services.lead') }}</p>
            <a :href="emailUrl" class="primary-cta">
              {{ t('services.cta') }}
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <p class="email-note">
              {{ t('services.email_note') }}
              <a href="mailto:zoryatechstudio@gmail.com">zoryatechstudio@gmail.com</a>
            </p>
          </div>

          <div class="hero-orbit" aria-hidden="true">
            <div class="orbit orbit-outer" />
            <div class="orbit orbit-inner" />
            <svg class="orbit-star" viewBox="0 0 64 64">
              <path
                d="M32 3 C34.5 23 41 29.5 61 32 C41 34.5 34.5 41 32 61 C29.5 41 23 34.5 3 32 C23 29.5 29.5 23 32 3Z"
                fill="currentColor"
              />
            </svg>
            <span class="orbit-dot dot-one" />
            <span class="orbit-dot dot-two" />
          </div>
        </div>
      </div>
    </section>

    <section class="services-list" aria-labelledby="services-list-title">
      <div class="services-container">
        <p class="section-eyebrow">{{ t('services.types_eyebrow') }}</p>
        <h2 id="services-list-title">{{ t('services.types_title') }}</h2>
        <p class="section-lead">{{ t('services.types_lead') }}</p>

        <div class="service-grid">
          <article v-for="service in services" :key="service.key" class="service-card">
            <span class="service-icon" aria-hidden="true">
              <svg v-if="service.icon === 'phone'" viewBox="0 0 24 24">
                <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
                <path d="M10 5h4M11 18.5h2" />
              </svg>
              <svg v-else-if="service.icon === 'browser'" viewBox="0 0 24 24">
                <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
                <path d="M2.5 8.5h19M6 6.25h.01M9 6.25h.01" />
              </svg>
              <svg v-else-if="service.icon === 'desktop'" viewBox="0 0 24 24">
                <rect x="2.5" y="3.5" width="19" height="14" rx="2" />
                <path d="M8 21h8M12 17.5V21" />
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
                <path d="m7 9 3 3-3 3M12.5 15H17" />
              </svg>
            </span>
            <div>
              <h3>{{ t(`services.items.${service.key}.title`) }}</h3>
              <p>{{ t(`services.items.${service.key}.description`) }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="services-contact">
      <div class="contact-panel">
        <div>
          <p class="section-eyebrow">{{ t('services.contact_eyebrow') }}</p>
          <h2>{{ t('services.contact_title') }}</h2>
          <p>{{ t('services.contact_text') }}</p>
        </div>
        <a :href="emailUrl" class="primary-cta">{{ t('services.cta') }}</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page {
  min-height: 100vh;
  overflow: hidden;
}

.services-container,
.contact-panel {
  width: min(100% - (2 * var(--gutter)), var(--maxw));
  margin: 0 auto;
}

.services-hero {
  position: relative;
  padding: calc(var(--nav-h) + var(--sp-7)) 0 var(--sp-9);
  background: radial-gradient(circle at 80% 35%, rgba(143, 163, 216, 0.12), transparent 35%);
}

.services-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background-image: radial-gradient(circle, rgba(237, 239, 244, 0.8) 0.7px, transparent 0.8px);
  background-size: 52px 52px;
  mask-image: linear-gradient(to bottom, black, transparent 90%);
  pointer-events: none;
}

.hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  align-items: center;
  gap: var(--sp-8);
  min-height: 430px;
}

.hero-copy {
  max-width: 720px;
}

.hero-copy h1 {
  color: var(--text-strong);
  font-size: var(--fs-hero);
  line-height: 1.02;
  letter-spacing: var(--ls-tight);
}

.hero-lead {
  max-width: 650px;
  margin: var(--sp-5) 0 var(--sp-6);
  color: var(--text-body);
  font-size: var(--fs-md);
  line-height: var(--lh-normal);
}

.primary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-3);
  padding: 14px 22px;
  border: 1px solid var(--accent);
  border-radius: var(--r-sm);
  background: var(--accent);
  color: #16110a;
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 600;
  transition:
    transform var(--t-fast),
    background var(--t-fast);
}

.primary-cta:hover {
  color: #16110a;
  background: var(--accent-hover);
  transform: translateY(-2px);
}

.email-note {
  margin: var(--sp-4) 0 0;
  color: var(--text-faint);
  font-size: var(--fs-xs);
}

.email-note a {
  color: var(--text-muted);
}

.hero-orbit {
  position: relative;
  width: min(34vw, 390px);
  aspect-ratio: 1;
  justify-self: center;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(143, 163, 216, 0.22);
  border-radius: 50%;
}

.orbit-outer {
  inset: 4%;
}
.orbit-inner {
  inset: 24%;
  border-color: rgba(242, 182, 90, 0.25);
}

.orbit-star {
  position: absolute;
  inset: 36%;
  width: 28%;
  height: 28%;
  color: var(--accent);
  filter: drop-shadow(0 0 24px rgba(242, 182, 90, 0.35));
}

.orbit-dot {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent-2);
  box-shadow: 0 0 14px rgba(143, 163, 216, 0.65);
}

.dot-one {
  top: 15%;
  right: 18%;
}
.dot-two {
  bottom: 23%;
  left: 10%;
  width: 6px;
  height: 6px;
  background: var(--accent);
}

.services-list {
  padding: var(--sp-9) 0;
  border-top: 1px solid var(--hairline);
}

.services-list h2,
.services-contact h2 {
  font-size: var(--fs-2xl);
  color: var(--text-strong);
}

.section-lead {
  max-width: 680px;
  margin: var(--sp-4) 0 var(--sp-7);
  color: var(--text-muted);
  font-size: var(--fs-md);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--sp-4);
}

.service-card {
  display: flex;
  gap: var(--sp-5);
  padding: var(--sp-6);
  border: 1px solid var(--hairline);
  border-radius: var(--r-lg);
  background: linear-gradient(145deg, var(--surface-1), rgba(17, 21, 32, 0.55));
}

.service-icon {
  flex: 0 0 52px;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: var(--r-md);
  background: var(--accent-faint);
  color: var(--accent);
}

.service-icon svg {
  width: 25px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.service-card h3 {
  margin-bottom: var(--sp-3);
  color: var(--text);
  font-size: var(--fs-lg);
}

.service-card p {
  margin: 0;
  color: var(--text-muted);
  font-size: var(--fs-sm);
  line-height: var(--lh-normal);
}

.services-contact {
  padding: 0 0 var(--sp-9);
}

.contact-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-7);
  padding: var(--sp-7);
  border: 1px solid var(--accent-faint);
  border-radius: var(--r-lg);
  background:
    radial-gradient(circle at 100% 0, rgba(242, 182, 90, 0.1), transparent 38%), var(--surface-1);
}

.contact-panel p:not(.section-eyebrow) {
  max-width: 650px;
  margin: var(--sp-4) 0 0;
  color: var(--text-muted);
}

.contact-panel .primary-cta {
  flex-shrink: 0;
}

@media (max-width: 800px) {
  .hero-layout {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .hero-orbit {
    display: none;
  }
  .service-grid {
    grid-template-columns: 1fr;
  }
  .contact-panel {
    align-items: flex-start;
    flex-direction: column;
    padding: var(--sp-6);
  }
}

@media (max-width: 520px) {
  .services-hero {
    padding-bottom: var(--sp-8);
  }
  .services-list {
    padding: var(--sp-8) 0;
  }
  .service-card {
    flex-direction: column;
    padding: var(--sp-5);
  }
  .primary-cta {
    width: 100%;
  }
  .email-note a {
    display: block;
    margin-top: var(--sp-1);
  }
}
</style>
