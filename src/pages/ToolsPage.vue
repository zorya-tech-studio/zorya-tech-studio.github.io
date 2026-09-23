<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { desktopApps, extensions } from '../data/tools.js'

const groups = [
  { id: 'extensions', titleKey: 'tools.browser_title', items: extensions },
  { id: 'desktop', titleKey: 'tools.desktop_title', items: desktopApps },
]

const { t } = useI18n()
const route = useRoute()
const locale = computed(() => route.params.locale || 'en')
const homeUrl = computed(() => `/${locale.value}`)
</script>

<template>
  <section class="tools-page">
    <div class="tools-container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <router-link :to="homeUrl">{{ t('breadcrumb.home') }}</router-link>
        <span class="sep">/</span>
        <span aria-current="page">{{ t('tools.title') }}</span>
      </nav>

      <p class="section-eyebrow">{{ t('tools.eyebrow') }}</p>
      <h1 class="page-title">{{ t('tools.title') }}</h1>
      <p class="page-subtitle">{{ t('tools.subtitle') }}</p>

      <section
        v-for="group in groups"
        :key="group.id"
        :aria-labelledby="`tools-${group.id}-title`"
        class="tools-group"
      >
        <h2 :id="`tools-${group.id}-title`" class="group-title">
          {{ t(group.titleKey) }}
        </h2>

        <div class="card-grid">
          <article v-for="ext in group.items" :key="ext.slug" class="app-card extension-card">
            <div class="app-card__head">
              <img
                :src="ext.icon"
                :alt="t(ext.nameKey)"
                class="app-card__icon"
                width="52"
                height="52"
              />
              <div class="app-card__meta">
                <h3 class="app-card__title">{{ t(ext.nameKey) }}</h3>
                <span class="badge-released">{{ t(`app_status.${ext.status}`) }}</span>
              </div>
            </div>

            <p class="extension-card__subtitle">{{ t(ext.subtitleKey) }}</p>
            <p class="app-card__desc">{{ t(ext.descKey) }}</p>

            <div class="app-card__tags">
              <span v-for="tag in ext.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <div class="extension-card__links">
              <a
                v-if="ext.storeUrl"
                :href="ext.storeUrl"
                class="extension-card__link extension-card__link--primary"
                target="_blank"
                rel="noopener"
              >
                {{ t('tools.store') }}
              </a>
              <a
                v-if="ext.siteUrl"
                :href="ext.siteUrl"
                class="extension-card__link"
                target="_blank"
                rel="noopener"
              >
                {{ t('tools.website') }}
              </a>
              <router-link
                v-if="ext.privacyRoute"
                :to="ext.privacyRoute(locale)"
                class="extension-card__link"
              >
                {{ t('tools.privacy') }}
              </router-link>
            </div>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.tools-page {
  min-height: 100vh;
  padding: calc(var(--nav-h) + var(--sp-7)) var(--gutter) var(--sp-9);
}

.tools-container {
  max-width: var(--maxw);
  margin: 0 auto;
}

.page-title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--fs-3xl);
  letter-spacing: var(--ls-tight);
  line-height: var(--lh-tight);
  color: var(--text);
  margin-bottom: var(--sp-3);
}

.page-subtitle {
  color: var(--text-muted);
  font-size: var(--fs-md);
  margin-bottom: var(--sp-7);
}

.group-title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--fs-xl, 1.4rem);
  color: var(--text);
  margin-bottom: var(--sp-5);
}

.tools-group + .tools-group {
  margin-top: var(--sp-8, 64px);
}

.extension-card {
  display: flex;
  flex-direction: column;
}

.extension-card:hover {
  transform: none;
}

.app-card__head {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-4);
  min-width: 0;
}

.app-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
}

.extension-card__subtitle {
  color: var(--text);
  font-weight: 500;
  margin-bottom: var(--sp-2);
}

.app-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
  margin-top: auto;
  padding-top: var(--sp-4);
}

.extension-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2) var(--sp-4);
  margin-top: var(--sp-4);
  padding-top: var(--sp-4);
  border-top: 1px solid var(--hairline);
}

.extension-card__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
}

.extension-card__link:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}
</style>
