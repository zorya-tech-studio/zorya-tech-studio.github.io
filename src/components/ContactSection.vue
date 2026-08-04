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

      <a
        href="https://www.youtube.com/@zorya-tech-studio"
        class="app-card contact-item"
        target="_blank"
        rel="noopener"
      >
        <span class="contact-item__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path
              d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.1 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.1ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"
            />
          </svg>
        </span>
        <span class="contact-item__text">
          <span class="contact-item__label">{{ t('contact.youtube_label') }}</span>
          <span class="contact-item__value">@zorya-tech-studio</span>
        </span>
      </a>

      <a
        href="https://play.google.com/store/apps/dev?id=5703238550116358118"
        class="app-card contact-item contact-item--featured"
        target="_blank"
        rel="noopener"
      >
        <span class="contact-item__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path
              d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
            />
          </svg>
        </span>
        <span class="contact-item__text">
          <span class="contact-item__label">{{ t('contact.play_label') }}</span>
          <span class="contact-item__value">{{ t('contact.play_value') }}</span>
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
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--sp-4);
  max-width: 720px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--sp-4);
  text-align: left;
  flex: 1 1 300px;
  max-width: 420px;
}

.contact-item--featured {
  border-color: color-mix(in srgb, var(--accent) 35%, var(--hairline));
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--accent) 8%, var(--surface-1)),
    var(--surface-1) 60%
  );
}

.contact-item--featured .contact-item__icon {
  background: color-mix(in srgb, var(--accent) 16%, var(--surface-2));
  color: var(--accent-hover);
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
