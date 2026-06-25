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
    path: '/:locale/molemap/privacy-policy',
    name: 'molemap-privacy',
    component: () => import('./pages/apps/molemap/MoleMapPrivacyPage.vue'),
    meta: { titleKey: 'molemap.privacy.title', app: 'molemap' },
  },
  {
    path: '/:locale/molemap/terms',
    name: 'molemap-terms',
    component: () => import('./pages/apps/molemap/MoleMapTermsPage.vue'),
    meta: { titleKey: 'molemap.offer.title', app: 'molemap' },
  },
  {
    path: '/:locale/molemap/disclaimer',
    name: 'molemap-disclaimer',
    component: () => import('./pages/apps/molemap/MoleMapDisclaimerPage.vue'),
    meta: { titleKey: 'molemap.disclaimer.title', app: 'molemap' },
  },
  {
    path: '/:locale/markdown-reader/privacy-policy',
    name: 'markdown-reader-privacy',
    component: () => import('./pages/apps/markdown-reader/MarkdownReaderPrivacyPage.vue'),
    meta: { titleKey: 'markdownReader.privacy.title', app: 'markdown-reader' },
  },
  {
    path: '/:locale/markdown-reader/terms-of-use',
    name: 'markdown-reader-terms',
    component: () => import('./pages/apps/markdown-reader/MarkdownReaderTermsPage.vue'),
    meta: { titleKey: 'markdownReader.terms.title', app: 'markdown-reader' },
  },
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
    path: '/:locale/starguide/privacy-policy',
    name: 'starguide-privacy',
    component: () => import('./pages/apps/starguide/StarGuidePrivacyPage.vue'),
    meta: { titleKey: 'starguide.privacy.title', app: 'starguide' },
  },
  {
    path: '/:locale/starguide/offer',
    name: 'starguide-offer',
    component: () => import('./pages/apps/starguide/StarGuideOfferPage.vue'),
    meta: { titleKey: 'starguide.offer.title', app: 'starguide' },
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
    path: '/:locale/hueroom/privacy-policy',
    name: 'hueroom-privacy',
    component: () => import('./pages/apps/hueroom/HueRoomPrivacyPage.vue'),
    meta: { titleKey: 'hueroom.privacy.title', app: 'hueroom' },
  },
  {
    path: '/:locale/hueroom/offer',
    name: 'hueroom-offer',
    component: () => import('./pages/apps/hueroom/HueRoomOfferPage.vue'),
    meta: { titleKey: 'hueroom.offer.title', app: 'hueroom' },
  },
  {
    path: '/:locale/sudokulens/privacy-policy',
    name: 'sudokulens-privacy',
    component: () => import('./pages/apps/sudokulens/SudokuLensPrivacyPage.vue'),
    meta: { titleKey: 'sudokulens.privacy.title', app: 'sudokulens' },
  },
  {
    path: '/:locale/chromatic/privacy-policy',
    name: 'chromatic-privacy',
    component: () => import('./pages/apps/chromatic/ChromaticPrivacyPage.vue'),
    meta: { titleKey: 'chromatic.privacy.title', app: 'chromatic' },
  },
  {
    path: '/:locale/chromatic/offer',
    name: 'chromatic-offer',
    component: () => import('./pages/apps/chromatic/ChromaticOfferPage.vue'),
    meta: { titleKey: 'chromatic.offer.title', app: 'chromatic' },
  },
  {
    path: '/:locale/zodiac-compatibility/privacy-policy',
    name: 'zodiac-compatibility-privacy',
    component: () => import('./pages/apps/zodiac-compatibility/ZodiacCompatibilityPrivacyPage.vue'),
    meta: { titleKey: 'zodiacCompatibility.privacy.title', app: 'zodiac-compatibility' },
  },
  {
    path: '/:locale/zodiac-compatibility/terms',
    name: 'zodiac-compatibility-terms',
    component: () => import('./pages/apps/zodiac-compatibility/ZodiacCompatibilityTermsPage.vue'),
    meta: { titleKey: 'zodiacCompatibility.offer.title', app: 'zodiac-compatibility' },
  },
  {
    path: '/:locale/zodiac-compatibility/disclaimer',
    name: 'zodiac-compatibility-disclaimer',
    component: () =>
      import('./pages/apps/zodiac-compatibility/ZodiacCompatibilityDisclaimerPage.vue'),
    meta: { titleKey: 'zodiacCompatibility.disclaimer.title', app: 'zodiac-compatibility' },
  },
  {
    path: '/:locale/concrete-calculator/privacy-policy',
    name: 'concrete-calculator-privacy',
    component: () => import('./pages/apps/concrete-calculator/ConcreteCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'concreteCalculator.privacy.title', app: 'concrete-calculator' },
  },
  {
    path: '/:locale/concrete-calculator/terms-of-use',
    name: 'concrete-calculator-terms',
    component: () => import('./pages/apps/concrete-calculator/ConcreteCalculatorTermsPage.vue'),
    meta: { titleKey: 'concreteCalculator.terms.title', app: 'concrete-calculator' },
  },
  {
    path: '/:locale/block-brick-calculator/privacy-policy',
    name: 'block-brick-calculator-privacy',
    component: () =>
      import('./pages/apps/block-brick-calculator/BlockBrickCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'blockBrickCalculator.privacy.title', app: 'block-brick-calculator' },
  },
  {
    path: '/:locale/block-brick-calculator/terms-of-use',
    name: 'block-brick-calculator-terms',
    component: () =>
      import('./pages/apps/block-brick-calculator/BlockBrickCalculatorTermsPage.vue'),
    meta: { titleKey: 'blockBrickCalculator.terms.title', app: 'block-brick-calculator' },
  },
  {
    path: '/:locale/dog-training-cards/privacy-policy',
    name: 'dog-training-cards-privacy',
    component: () => import('./pages/apps/dog-training-cards/DogTrainingCardsPrivacyPage.vue'),
    meta: { titleKey: 'dogTraining.privacy.title', app: 'dog-training-cards' },
  },
  {
    path: '/:locale/dog-training-cards/offer',
    name: 'dog-training-cards-offer',
    component: () => import('./pages/apps/dog-training-cards/DogTrainingCardsOfferPage.vue'),
    meta: { titleKey: 'dogTraining.offer.title', app: 'dog-training-cards' },
  },
  {
    path: '/:locale/cat-training-behavior/privacy-policy',
    name: 'cat-training-behavior-privacy',
    component: () =>
      import('./pages/apps/cat-training-behavior/CatTrainingBehaviorPrivacyPage.vue'),
    meta: { titleKey: 'catTraining.privacy.title', app: 'cat-training-behavior' },
  },
  {
    path: '/:locale/cat-training-behavior/offer',
    name: 'cat-training-behavior-offer',
    component: () => import('./pages/apps/cat-training-behavior/CatTrainingBehaviorOfferPage.vue'),
    meta: { titleKey: 'catTraining.offer.title', app: 'cat-training-behavior' },
  },
  {
    path: '/:locale/human-tetris/privacy-policy',
    name: 'human-tetris-privacy',
    component: () => import('./pages/apps/human-tetris/HumanTetrisPrivacyPage.vue'),
    meta: { titleKey: 'humanTetris.privacy.title', app: 'human-tetris' },
  },
  {
    path: '/:locale/human-tetris/offer',
    name: 'human-tetris-offer',
    component: () => import('./pages/apps/human-tetris/HumanTetrisOfferPage.vue'),
    meta: { titleKey: 'humanTetris.offer.title', app: 'human-tetris' },
  },
  {
    path: '/markdown-reader/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/markdown-reader/privacy-policy`,
  },
  {
    path: '/markdown-reader/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/markdown-reader/terms-of-use`,
  },
  {
    path: '/molemap/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/molemap/privacy-policy`,
  },
  {
    path: '/molemap/terms',
    redirect: () => `/${i18n.global.locale.value}/molemap/terms`,
  },
  {
    path: '/molemap/disclaimer',
    redirect: () => `/${i18n.global.locale.value}/molemap/disclaimer`,
  },
  {
    path: '/concrete-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/concrete-calculator/privacy-policy`,
  },
  {
    path: '/concrete-calculator/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/concrete-calculator/terms-of-use`,
  },
  {
    path: '/block-brick-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/block-brick-calculator/privacy-policy`,
  },
  {
    path: '/block-brick-calculator/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/block-brick-calculator/terms-of-use`,
  },
  {
    path: '/dog-training-cards/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/dog-training-cards/privacy-policy`,
  },
  {
    path: '/dog-training-cards/offer',
    redirect: () => `/${i18n.global.locale.value}/dog-training-cards/offer`,
  },
  {
    path: '/cat-training-behavior/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/cat-training-behavior/privacy-policy`,
  },
  {
    path: '/cat-training-behavior/offer',
    redirect: () => `/${i18n.global.locale.value}/cat-training-behavior/offer`,
  },
  {
    path: '/human-tetris/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/human-tetris/privacy-policy`,
  },
  {
    path: '/human-tetris/offer',
    redirect: () => `/${i18n.global.locale.value}/human-tetris/offer`,
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
    path: '/starguide/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/starguide/privacy-policy`,
  },
  {
    path: '/starguide/offer',
    redirect: () => `/${i18n.global.locale.value}/starguide/offer`,
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
  {
    path: '/hueroom/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/hueroom/privacy-policy`,
  },
  {
    path: '/hueroom/offer',
    redirect: () => `/${i18n.global.locale.value}/hueroom/offer`,
  },
  {
    path: '/chromatic/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/chromatic/privacy-policy`,
  },
  {
    path: '/chromatic/offer',
    redirect: () => `/${i18n.global.locale.value}/chromatic/offer`,
  },
  {
    path: '/zodiac-compatibility/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/zodiac-compatibility/privacy-policy`,
  },
  {
    path: '/zodiac-compatibility/terms',
    redirect: () => `/${i18n.global.locale.value}/zodiac-compatibility/terms`,
  },
  {
    path: '/zodiac-compatibility/disclaimer',
    redirect: () => `/${i18n.global.locale.value}/zodiac-compatibility/disclaimer`,
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
