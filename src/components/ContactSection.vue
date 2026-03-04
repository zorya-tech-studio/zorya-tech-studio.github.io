<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const privacyUrl = computed(() => `/${locale.value}/privacy`)
</script>

<template>
  <section id="contact" class="section">
    <h2 class="section-title">{{ t('contact.title') }}</h2>
    <div class="contact-links">
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-item">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="22,4 12,13 2,4" />
        </svg>
        <span>zoryatechstudio@gmail.com</span>
      </a>
      <a href="https://github.com/zorya-tech-studio" target="_blank" rel="noopener" class="contact-item">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#00f0ff">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>github.com/zorya-tech-studio</span>
      </a>
    </div>
    <div class="contact-footer">
      <router-link :to="privacyUrl" class="privacy-link">{{ t('privacy.title') }}</router-link>
    </div>
  </section>
</template>

<style scoped>
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  font-size: 1rem;
  padding: 14px 24px;
  border: 1px solid var(--accent-dim);
  border-radius: 8px;
  transition: border-color 0.3s, box-shadow 0.3s, color 0.3s;
  min-width: 280px;
  justify-content: center;
}

.contact-item:hover {
  border-color: var(--accent);
  box-shadow: 0 0 16px var(--accent-dim), inset 0 0 16px rgba(0, 240, 255, 0.03);
  color: var(--accent);
  animation: glitch-flicker 2s infinite;
}

.contact-item span {
  font-family: var(--font-ui);
  font-weight: 500;
}

.contact-footer {
  text-align: center;
  margin-top: 48px;
}

.privacy-link {
  font-size: 0.85rem;
  color: var(--text-dim);
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.privacy-link:hover {
  color: var(--accent);
}

@media (max-width: 480px) {
  .contact-item {
    min-width: 0;
    width: 100%;
    font-size: 0.9rem;
    padding: 12px 16px;
  }
}
</style>
