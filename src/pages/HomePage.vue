<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import AppsSection from '../components/AppsSection.vue'
import ContactSection from '../components/ContactSection.vue'

let observer

// ──────────────────────────────────────────────────────────────────────
// Космічний пил за курсором. Легкий canvas на весь екран (pointer-events
// none); частинки спавняться лише коли курсор над космічним полем (нижче
// банера), дрейфують і згасають. Loop крутиться тільки поки є частинки.
// ──────────────────────────────────────────────────────────────────────
const dustEl = ref(null)
const fieldEl = ref(null)

let dustCtx
let dustSprites = {}
let particles = []
let dustAnimId = null
let dustReduced = false
let dustHidden = false
let lastSpawnX = null
let lastSpawnY = null
const MAX_PARTICLES = 220
// Hotspot стрілки — у верхньому-лівому куті; зсуваємо появу пилу до
// візуального центру курсора (вниз-вправо), щоб огортало, а не тягнулось з кінчика.
const CURSOR_OFFSET_X = 7
const CURSOR_OFFSET_Y = 11

function makeDustSprite(r, g, b) {
  const SIZE = 32
  const c = document.createElement('canvas')
  c.width = SIZE
  c.height = SIZE
  const cx = c.getContext('2d')
  const grad = cx.createRadialGradient(SIZE / 2, SIZE / 2, 0, SIZE / 2, SIZE / 2, SIZE / 2)
  // Щільне яскраве ядро з дуже коротким згасанням — читається як дрібна
  // порошинка, а не м'яка світла бульбашка.
  grad.addColorStop(0, `rgba(${r},${g},${b},1)`)
  grad.addColorStop(0.12, `rgba(${r},${g},${b},0.85)`)
  grad.addColorStop(0.35, `rgba(${r},${g},${b},0.18)`)
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
  cx.fillStyle = grad
  cx.fillRect(0, 0, SIZE, SIZE)
  return c
}

function pickDustColor() {
  // Стримано: переважно білий пил, зрідка ледь блакитний.
  return Math.random() < 0.8 ? 'white' : 'blue'
}

function spawnDust(x, y, driftX = 0, driftY = 0) {
  if (particles.length >= MAX_PARTICLES) return
  particles.push({
    x: x + (Math.random() - 0.5) * 11,
    y: y + (Math.random() - 0.5) * 11,
    // Базовий поштовх — назад (проти руху курсора) + трохи розсіювання.
    vx: driftX + (Math.random() - 0.5) * 0.3,
    vy: driftY + (Math.random() - 0.5) * 0.3,
    ttl: 1,
    fade: 0.008 + Math.random() * 0.01,
    size: 0.35 + Math.random() * 0.85,
    color: pickDustColor(),
  })
}

function drawDust() {
  const canvas = dustEl.value
  if (!canvas) return
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  dustCtx.clearRect(0, 0, w, h)

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    p.x += p.vx
    p.y += p.vy
    p.vx *= 0.97
    p.vy *= 0.97
    p.ttl -= p.fade
    if (p.ttl <= 0) {
      particles.splice(i, 1)
      continue
    }
    const sprite = dustSprites[p.color]
    const drawSize = p.size * 7 * (0.6 + p.ttl * 0.4)
    dustCtx.globalAlpha = Math.min(1, p.ttl) * 0.7
    dustCtx.drawImage(sprite, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize)
  }
  dustCtx.globalAlpha = 1
}

function dustFrame() {
  drawDust()
  dustAnimId = particles.length && !dustHidden ? requestAnimationFrame(dustFrame) : null
}

function ensureDustLoop() {
  if (dustAnimId === null && !dustReduced && !dustHidden) {
    dustAnimId = requestAnimationFrame(dustFrame)
  }
}

// Курсор рухається над полем → сиплемо пил уздовж пройденого відрізка.
function onFieldPointerMove(e) {
  if (dustReduced) return
  // Над клікабельними об'єктами пилу немає — не заважаємо взаємодії.
  if (e.target.closest && e.target.closest('a, button, [role="button"]')) {
    lastSpawnX = null
    lastSpawnY = null
    return
  }
  const x = e.clientX + CURSOR_OFFSET_X
  const y = e.clientY + CURSOR_OFFSET_Y
  if (lastSpawnX !== null) {
    const dx = x - lastSpawnX
    const dy = y - lastSpawnY
    const dist = Math.hypot(dx, dy)
    if (dist > 0.01) {
      // Напрямок руху → пил кладемо ПОЗАДУ курсора й штовхаємо назад.
      const ux = dx / dist
      const uy = dy / dist
      const TRAIL_BACK = 16 // px за курсором
      const driftX = -ux * 0.5
      const driftY = -uy * 0.5
      const steps = Math.min(6, Math.floor(dist / 8))
      for (let s = 1; s <= steps; s++) {
        const px = lastSpawnX + (dx * s) / steps - ux * TRAIL_BACK
        const py = lastSpawnY + (dy * s) / steps - uy * TRAIL_BACK
        spawnDust(px, py, driftX, driftY)
      }
      spawnDust(x - ux * TRAIL_BACK, y - uy * TRAIL_BACK, driftX, driftY)
    }
  }
  lastSpawnX = x
  lastSpawnY = y
  ensureDustLoop()
}

function onFieldPointerLeave() {
  lastSpawnX = null
  lastSpawnY = null
}

function sizeDustCanvas() {
  const canvas = dustEl.value
  if (!canvas) return
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(h * dpr)
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  dustCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

let dustResizeTimer = null
function onDustResize() {
  if (dustResizeTimer) clearTimeout(dustResizeTimer)
  dustResizeTimer = setTimeout(sizeDustCanvas, 150)
}

function onDustVisibility() {
  dustHidden = document.hidden
  if (!dustHidden) ensureDustLoop()
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.15 },
  )

  document.querySelectorAll('.fade-section').forEach((el) => {
    observer.observe(el)
  })

  // — Космічний пил —
  dustReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  dustCtx = dustEl.value.getContext('2d')
  dustSprites = {
    white: makeDustSprite(233, 238, 247),
    blue: makeDustSprite(180, 200, 240),
  }
  sizeDustCanvas()
  fieldEl.value.addEventListener('pointermove', onFieldPointerMove, { passive: true })
  fieldEl.value.addEventListener('pointerleave', onFieldPointerLeave, { passive: true })
  window.addEventListener('resize', onDustResize, { passive: true })
  document.addEventListener('visibilitychange', onDustVisibility)
})

onUnmounted(() => {
  observer?.disconnect()
  if (dustAnimId !== null) cancelAnimationFrame(dustAnimId)
  window.removeEventListener('resize', onDustResize)
  document.removeEventListener('visibilitychange', onDustVisibility)
  if (fieldEl.value) {
    fieldEl.value.removeEventListener('pointermove', onFieldPointerMove)
    fieldEl.value.removeEventListener('pointerleave', onFieldPointerLeave)
  }
  if (dustResizeTimer) clearTimeout(dustResizeTimer)
})
</script>

<template>
  <HeroSection />
  <!-- Пил за курсором — фіксований оверлей на весь екран, не перехоплює кліки. -->
  <canvas ref="dustEl" class="cosmic-dust" aria-hidden="true" />
  <!-- Космічний переливний градієнт під усім контентом нижче банера. -->
  <div ref="fieldEl" class="cosmic-field">
    <div class="fade-section">
      <AboutSection />
    </div>
    <div class="fade-section">
      <AppsSection />
    </div>
    <div class="fade-section">
      <ContactSection />
    </div>
  </div>
</template>

<style scoped>
/* Пил за курсором — фіксований оверлей поверх контенту, не інтерактивний. */
.cosmic-dust {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

/* Космічне поле: усе, що нижче банера. Два анімовані шари під контентом
   (текст лишається зверху, z-index: -1):
   ::before — дрейф кольорових туманностей;
   ::after  — переливний відблиск, що повільно проходить по екрану. */
.cosmic-field {
  position: relative;
  z-index: 0;
  isolation: isolate; /* власний стек-контекст → блендинг не «тече» на банер */
}

.cosmic-field::before,
.cosmic-field::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

/* Туманності — кілька кольорових плям бренду, що повільно дрейфують.
   Щільне яскраве ядро → м'який спад, щоб читались як світні хмари. */
.cosmic-field::before {
  background:
    radial-gradient(
      36% 44% at 24% 22%,
      rgba(143, 163, 216, 0.34) 0%,
      rgba(143, 163, 216, 0.16) 32%,
      transparent 66%
    ),
    radial-gradient(
      40% 50% at 78% 30%,
      rgba(242, 182, 90, 0.28) 0%,
      rgba(242, 182, 90, 0.13) 34%,
      transparent 68%
    ),
    radial-gradient(
      46% 54% at 58% 72%,
      rgba(180, 120, 255, 0.3) 0%,
      rgba(180, 120, 255, 0.14) 34%,
      transparent 68%
    ),
    radial-gradient(
      34% 44% at 18% 82%,
      rgba(95, 190, 142, 0.22) 0%,
      rgba(95, 190, 142, 0.1) 34%,
      transparent 68%
    );
  background-size: 170% 170%;
  animation: cosmicDrift 30s ease-in-out infinite alternate;
}

/* Переливний відблиск — вузька світла смуга, що повільно проходить діагоналлю. */
.cosmic-field::after {
  background: linear-gradient(
    115deg,
    transparent 34%,
    rgba(143, 163, 216, 0.07) 46%,
    rgba(242, 182, 90, 0.06) 54%,
    transparent 66%
  );
  background-size: 320% 320%;
  mix-blend-mode: screen;
  animation: cosmicSheen 18s ease-in-out infinite alternate;
}

@keyframes cosmicDrift {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 100%;
  }
}

@keyframes cosmicSheen {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 100% 0%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cosmic-field::before,
  .cosmic-field::after {
    animation: none;
  }
}
</style>
