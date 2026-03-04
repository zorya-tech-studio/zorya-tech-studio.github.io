import { createI18n } from 'vue-i18n'
import uk from './uk.json'
import en from './en.json'

function detectLocale() {
  const saved = localStorage.getItem('locale')
  if (saved && ['uk', 'en'].includes(saved)) return saved

  const browserLang = navigator.language || navigator.userLanguage || ''
  if (browserLang.startsWith('uk')) return 'uk'
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { uk, en },
})

export default i18n
