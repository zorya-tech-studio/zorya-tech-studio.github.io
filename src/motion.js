// Motion layer: scroll-driven dawn, staggered reveals, card tilt, magnetic buttons, cursor glow, count-up and route view transitions.
// Everything respects prefers-reduced-motion and fine-pointer checks, and costs nothing when idle.
import { nextTick } from 'vue'

const canMatch = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
export const reducedMotion = () =>
  canMatch && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = () =>
  canMatch && window.matchMedia('(hover: hover) and (pointer: fine)').matches

// --- Scroll progress → --scroll-p (0..1) on <html>; drives the dawn tint and the reading bar ---
function initScrollProgress() {
  const root = document.documentElement
  let queued = false
  const update = () => {
    queued = false
    const max = root.scrollHeight - window.innerHeight
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    root.style.setProperty('--scroll-p', p.toFixed(4))
    root.classList.toggle('is-long-page', max > window.innerHeight * 1.5)
    root.classList.toggle('is-scrolled', window.scrollY > 40)
  }
  const schedule = () => {
    if (!queued) {
      queued = true
      requestAnimationFrame(update)
    }
  }
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  new window.ResizeObserver(schedule).observe(document.body)
  update()
}

// --- Cursor glow: one fixed element following the pointer ---
function initCursorGlow() {
  if (!finePointer() || reducedMotion()) return
  const glow = document.createElement('div')
  glow.className = 'cursor-glow'
  glow.setAttribute('aria-hidden', 'true')
  document.body.appendChild(glow)
  let x = 0
  let y = 0
  let queued = false
  window.addEventListener(
    'pointermove',
    (e) => {
      x = e.clientX
      y = e.clientY
      glow.classList.add('is-on')
      if (!queued) {
        queued = true
        requestAnimationFrame(() => {
          queued = false
          glow.style.transform = `translate3d(${x}px, ${y}px, 0)`
        })
      }
    },
    { passive: true },
  )
  document.documentElement.addEventListener('pointerleave', () => glow.classList.remove('is-on'))
}

// --- v-reveal: fade/slide in when scrolled into view, staggered by the --i style var ---
let revealObserver = null
function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
  }
  return revealObserver
}
const vReveal = {
  mounted(el, binding) {
    if (typeof binding.value === 'number') el.style.setProperty('--i', String(binding.value))
    el.classList.add('reveal')
    if (reducedMotion()) {
      el.classList.add('is-in')
      return
    }
    getRevealObserver().observe(el)
  },
  updated(el, binding) {
    if (typeof binding.value === 'number') el.style.setProperty('--i', String(binding.value))
  },
  unmounted(el) {
    revealObserver?.unobserve(el)
  },
}

// --- v-tilt: 3D tilt toward the pointer + gold edge light at the pointer position ---
const vTilt = {
  mounted(el) {
    if (!finePointer() || reducedMotion()) return
    el.classList.add('tilt')
    let queued = false
    let px = 0.5
    let py = 0.5
    const apply = () => {
      queued = false
      el.style.setProperty('--rx', `${((0.5 - py) * 7).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${((px - 0.5) * 9).toFixed(2)}deg`)
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
    }
    el._tiltMove = (e) => {
      const r = el.getBoundingClientRect()
      px = (e.clientX - r.left) / r.width
      py = (e.clientY - r.top) / r.height
      if (!queued) {
        queued = true
        requestAnimationFrame(apply)
      }
    }
    el._tiltLeave = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', el._tiltMove, { passive: true })
    el.addEventListener('pointerleave', el._tiltLeave)
  },
  unmounted(el) {
    if (el._tiltMove) el.removeEventListener('pointermove', el._tiltMove)
    if (el._tiltLeave) el.removeEventListener('pointerleave', el._tiltLeave)
  },
}

// --- v-magnetic: element drifts slightly toward the pointer ---
const vMagnetic = {
  mounted(el, binding) {
    if (!finePointer() || reducedMotion()) return
    const strength = typeof binding.value === 'number' ? binding.value : 0.25
    el.classList.add('magnetic')
    el._magMove = (e) => {
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * strength
      const dy = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.setProperty('--mag-x', `${dx.toFixed(1)}px`)
      el.style.setProperty('--mag-y', `${dy.toFixed(1)}px`)
    }
    el._magLeave = () => {
      el.style.setProperty('--mag-x', '0px')
      el.style.setProperty('--mag-y', '0px')
    }
    el.addEventListener('pointermove', el._magMove, { passive: true })
    el.addEventListener('pointerleave', el._magLeave)
  },
  unmounted(el) {
    if (el._magMove) el.removeEventListener('pointermove', el._magMove)
    if (el._magLeave) el.removeEventListener('pointerleave', el._magLeave)
  },
}

// --- v-count-up: animates a number from 0 to the bound value when it scrolls into view ---
function runCount(el, target) {
  if (reducedMotion()) {
    el.textContent = String(target)
    return
  }
  const duration = 1400
  const start = window.performance.now()
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = String(Math.round(target * eased))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
const vCountUp = {
  mounted(el, binding) {
    const target = Number(binding.value) || 0
    el.textContent = reducedMotion() ? String(target) : '0'
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          runCount(el, target)
        }
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    el._countIO = io
  },
  unmounted(el) {
    el._countIO?.disconnect()
  },
}

// --- v-icon-glow: samples the icon's average colour into --icon-glow on the closest card ---
function sampleIcon(img) {
  try {
    const c = document.createElement('canvas')
    c.width = c.height = 8
    const x = c.getContext('2d', { willReadFrequently: true })
    x.drawImage(img, 0, 0, 8, 8)
    const d = x.getImageData(0, 0, 8, 8).data
    let r = 0
    let g = 0
    let b = 0
    let n = 0
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 128) continue
      r += d[i]
      g += d[i + 1]
      b += d[i + 2]
      n++
    }
    if (!n) return
    const card = img.closest('.app-card') || img.parentElement
    card.style.setProperty(
      '--icon-glow',
      `rgba(${Math.round(r / n)}, ${Math.round(g / n)}, ${Math.round(b / n)}, 0.55)`,
    )
  } catch {
    /* cross-origin or decode failure: keep the default gold glow */
  }
}
const vIconGlow = {
  mounted(el) {
    if (el.complete && el.naturalWidth) sampleIcon(el)
    else el.addEventListener('load', () => sampleIcon(el), { once: true })
  },
}

// --- Route view transitions (cross-fade between pages where the browser supports it) ---
function initViewTransitions(router) {
  if (typeof document === 'undefined' || !document.startViewTransition) return
  let finish = null
  router.beforeResolve((to, from) => {
    if (!from.matched.length || to.path === from.path || reducedMotion()) return
    return new Promise((resolve) => {
      document.startViewTransition(
        () =>
          new Promise((done) => {
            finish = done
            resolve()
          }),
      )
    })
  })
  router.afterEach(async () => {
    if (!finish) return
    await nextTick()
    finish()
    finish = null
  })
}

export function installMotion(app, router) {
  app.directive('reveal', vReveal)
  app.directive('tilt', vTilt)
  app.directive('magnetic', vMagnetic)
  app.directive('count-up', vCountUp)
  app.directive('icon-glow', vIconGlow)
  if (typeof window === 'undefined') return
  initScrollProgress()
  initCursorGlow()
  initViewTransitions(router)
}
