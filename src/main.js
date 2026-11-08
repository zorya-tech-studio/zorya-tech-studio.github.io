import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import i18n from './i18n/index.js'
import './style.css'
import { installMotion } from './motion.js'

const app = createApp(App)
app.use(router)
app.use(i18n)
installMotion(app, router)
app.mount('#app')

router.afterEach((to) => {
  if (typeof gtag === 'function') {
    gtag('config', 'G-3NDKKBEJTE', { page_path: to.fullPath })
  }
})
