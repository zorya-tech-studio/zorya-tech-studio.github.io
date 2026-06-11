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
  // App-specific routes
  {
    path: '/:locale/taro/privacy-policy',
    name: 'taro-privacy',
    component: () => import('./pages/apps/taro/TaroPrivacyPage.vue'),
    meta: { titleKey: 'taro.privacy.title', app: 'taro' },
  },
  {
    path: '/:locale/taro/offer',
    name: 'taro-offer',
    component: () => import('./pages/apps/taro/TaroOfferPage.vue'),
    meta: { titleKey: 'taro.offer.title', app: 'taro' },
  },
  {
    path: '/:locale/senso/privacy-policy',
    name: 'senso-privacy',
    component: () => import('./pages/apps/senso/SensoPrivacyPage.vue'),
    meta: { titleKey: 'senso.privacy.title', app: 'senso' },
  },
  {
    path: '/:locale/movogra/privacy-policy',
    name: 'movogra-privacy',
    component: () => import('./pages/apps/movogra/MovograPrivacyPage.vue'),
    meta: { titleKey: 'movogra.privacy.title', app: 'movogra' },
  },
  {
    path: '/:locale/ytaudit/privacy-policy',
    name: 'ytaudit-privacy',
    component: () => import('./pages/apps/ytaudit/YtAuditPrivacyPage.vue'),
    meta: { titleKey: 'ytaudit.privacy.title', app: 'ytaudit' },
  },
  {
    path: '/:locale/ytaudit/terms-of-use',
    name: 'ytaudit-terms',
    component: () => import('./pages/apps/ytaudit/YtAuditOfferPage.vue'),
    meta: { titleKey: 'ytaudit.offer.title', app: 'ytaudit' },
  },
  {
    path: '/:locale/proverb/privacy-policy',
    name: 'proverb-privacy',
    component: () => import('./pages/apps/proverb/ProverbPrivacyPage.vue'),
    meta: { titleKey: 'proverb.privacy.title', app: 'proverb' },
  },
  {
    path: '/:locale/alias/privacy-policy',
    name: 'alias-privacy',
    component: () => import('./pages/apps/alias/AliasPrivacyPage.vue'),
    meta: { titleKey: 'alias.privacy.title', app: 'alias' },
  },
  {
    path: '/:locale/alias/offer',
    name: 'alias-offer',
    component: () => import('./pages/apps/alias/AliasOfferPage.vue'),
    meta: { titleKey: 'alias.offer.title', app: 'alias' },
  },
  {
    path: '/:locale/auto-obd2/privacy-policy',
    name: 'auto-obd2-privacy',
    component: () => import('./pages/apps/auto-obd2/AutoObd2PrivacyPage.vue'),
    meta: { titleKey: 'autoObd2.privacy.title', app: 'auto-obd2' },
  },
  {
    path: '/:locale/auto-obd2/offer',
    name: 'auto-obd2-offer',
    component: () => import('./pages/apps/auto-obd2/AutoObd2OfferPage.vue'),
    meta: { titleKey: 'autoObd2.offer.title', app: 'auto-obd2' },
  },
  {
    path: '/:locale/sudokulens/privacy-policy',
    name: 'sudokulens-privacy',
    component: () => import('./pages/apps/sudokulens/SudokuLensPrivacyPage.vue'),
    meta: { titleKey: 'sudokulens.privacy.title', app: 'sudokulens' },
  },
  { path: '/', redirect: () => `/${i18n.global.locale.value}` },
  { path: '/privacy', redirect: () => `/${i18n.global.locale.value}/privacy` },
  { path: '/projects', redirect: () => `/${i18n.global.locale.value}/projects` },
  {
    path: '/taro/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/taro/privacy-policy`,
  },
  {
    path: '/taro/offer',
    redirect: () => `/${i18n.global.locale.value}/taro/offer`,
  },
  {
    path: '/senso/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/senso/privacy-policy`,
  },
  {
    path: '/movogra/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/movogra/privacy-policy`,
  },
  {
    path: '/ytaudit/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/ytaudit/privacy-policy`,
  },
  {
    path: '/ytaudit/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/ytaudit/terms-of-use`,
  },
  {
    path: '/proverb/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/proverb/privacy-policy`,
  },
  {
    path: '/alias/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/alias/privacy-policy`,
  },
  {
    path: '/alias/offer',
    redirect: () => `/${i18n.global.locale.value}/alias/offer`,
  },
  {
    path: '/auto-obd2/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/auto-obd2/privacy-policy`,
  },
  {
    path: '/auto-obd2/offer',
    redirect: () => `/${i18n.global.locale.value}/auto-obd2/offer`,
  },
  {
    path: '/sudokulens/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/sudokulens/privacy-policy`,
  },
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

  // Update canonical URL to match current page
  const canonical = document.getElementById('canonical')
  if (canonical) {
    canonical.href = `https://zorya-tech-studio.github.io${to.path}`
  }
})

export default router
