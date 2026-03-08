import { createRouter, createWebHistory } from 'vue-router'
import i18n from './i18n/index.js'

const LOCALES = ['uk', 'en']

const SITE_NAME = 'Zorya Tech Studio'

const routes = [
  { path: '/:locale', name: 'home', component: () => import('./pages/HomePage.vue') },
  {
    path: '/:locale/privacy',
    name: 'privacy',
    component: () => import('./pages/PrivacyPage.vue'),
    meta: { titleKey: 'privacy.title' },
  },
  {
    path: '/:locale/projects',
    name: 'projects',
    component: () => import('./pages/ProjectsPage.vue'),
    meta: { titleKey: 'projects.title' },
  },
  { path: '/', redirect: () => `/${i18n.global.locale.value}` },
  { path: '/privacy', redirect: () => `/${i18n.global.locale.value}/privacy` },
  { path: '/projects', redirect: () => `/${i18n.global.locale.value}/projects` },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const locale = to.params.locale
  if (locale && LOCALES.includes(locale) && i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale
    localStorage.setItem('locale', locale)
  }
  if (to.params.locale && !LOCALES.includes(to.params.locale)) {
    return `/${i18n.global.locale.value}`
  }
})

router.afterEach((to) => {
  const titleKey = to.meta.titleKey
  if (titleKey) {
    document.title = `${i18n.global.t(titleKey)} — ${SITE_NAME}`
  } else {
    document.title = SITE_NAME
  }

  // Update html lang attribute to match current locale
  document.documentElement.lang = i18n.global.locale.value
})

export default router
