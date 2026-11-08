<script setup>
// Privacy Policy + Terms of Use links shown on every app / watch face card.
import { computed } from 'vue'
import { TERMS_TEXT } from '../data/appTerms.js'
import { termsPath } from '../data/termsRoutes.js'

const props = defineProps({
  locale: { type: String, required: true },
  slug: { type: String, required: true },
  privacyTo: { type: String, required: true },
})

const text = computed(() => TERMS_TEXT[props.locale === 'uk' ? 'uk' : 'en'])
const termsTo = computed(() => `/${props.locale}/${termsPath(props.slug)}`)
</script>

<template>
  <nav class="app-legal" :aria-label="`${text.privacy}, ${text.title}`" @click.stop>
    <router-link :to="privacyTo" class="app-legal__link">{{ text.privacy }}</router-link>
    <span class="app-legal__sep" aria-hidden="true">·</span>
    <router-link :to="termsTo" class="app-legal__link">{{ text.title }}</router-link>
  </nav>
</template>

<style scoped>
.app-legal {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 0.5rem;
  margin-top: var(--sp-4);
  padding-top: 0.75rem;
  border-top: 1px solid var(--hairline);
  font-size: 0.85rem;
}
.app-legal__link {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}
.app-legal__link:hover,
.app-legal__link:focus-visible {
  color: var(--accent);
  text-decoration: underline;
}
.app-legal__sep {
  color: var(--text-faint);
}
</style>
