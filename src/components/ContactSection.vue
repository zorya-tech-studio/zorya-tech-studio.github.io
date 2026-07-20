<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const privacyUrl = computed(() => `/${locale.value}/privacy`)
</script>

<template>
  <section id="contact" class="section contact">
    <div class="contact-intro">
      <p class="section-eyebrow">{{ t('contact.eyebrow') }}</p>
      <h2 class="section-title">{{ t('contact.title') }}</h2>
      <p class="contact-lead">{{ t('contact.lead') }}</p>
    </div>

    <div class="contact-grid">
      <a href="mailto:zoryatechstudio@gmail.com" class="app-card contact-item">
        <span class="contact-item__icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,4 12,13 2,4" />
          </svg>
        </span>
        <span class="contact-item__text">
          <span class="contact-item__label">{{ t('contact.email_label') }}</span>
          <span class="contact-item__value">zoryatechstudio@gmail.com</span>
        </span>
      </a>
    </div>

    <footer class="contact-footer">
      <svg class="footer-star" viewBox="0 0 64 64" width="14" height="14" aria-hidden="true">
        <path
          d="M32 3 C 34.5 23, 41 29.5, 61 32 C 41 34.5, 34.5 41, 32 61 C 29.5 41, 23 34.5, 3 32 C 23 29.5, 29.5 23, 32 3 Z"
          fill="currentColor"
        />
      </svg>
      <router-link :to="privacyUrl" class="privacy-link">{{ t('privacy.title') }}</router-link>
      <p class="copyright">&copy; {{ new Date().getFullYear() }} Zorya Tech Studio</p>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
}

.contact-intro {
  max-width: 620px;
  margin: 0 auto var(--sp-7);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-lead {
  margin-top: var(--sp-4);
  color: var(--text-muted);
  font-size: var(--fs-md);
  line-height: var(--lh-normal);
}

.contact-grid {
  display: flex;
  justify-content: center;
  max-width: 720px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  text-align: left;
  width: 100%;
  max-width: 420px;
}

.contact-item__icon {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: var(--r-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-2);
  color: var(--accent);
}

.contact-item__text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.contact-item__label {
  font-size: var(--fs-xs);
  color: var(--text-faint);
}

.contact-item__value {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-3);
  margin-top: var(--sp-8);
}

.footer-star {
  color: var(--text-faint);
}

.privacy-link {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

.privacy-link:hover {
  color: var(--accent);
}

.copyright {
  font-size: var(--fs-xs);
  color: var(--text-faint);
}
</style>
