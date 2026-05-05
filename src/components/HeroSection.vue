<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const heroEl = ref(null)
const canvasEl = ref(null)
let ctx
let animationId = null
let stars = []
let sprites = {}

// Tunables — kept low for steady 60fps on mid-tier hardware.
const STAR_COUNT = 140
const CURSOR_GLOW_RADIUS = 120 // px — within this distance, stars brighten + grow
const CURSOR_PUSH_RADIUS = 100 // px — within this distance, stars drift away
const CURSOR_PUSH_RADIUS_SQ = CURSOR_PUSH_RADIUS * CURSOR_PUSH_RADIUS
const CURSOR_GLOW_RADIUS_SQ = CURSOR_GLOW_RADIUS * CURSOR_GLOW_RADIUS

// Cursor state in CSS-pixel space, relative to the hero element.
let mouseX = -9999
let mouseY = -9999
let cursorActive = false

// Visibility / motion gates.
let isVisible = true
let prefersReducedMotion = false

// Resize debounce.
let resizeTimer = null

// ──────────────────────────────────────────────────────────────────────
// Sprite preparation: a 64×64 radial-gradient bitmap per color. Drawing
// a sprite via drawImage is ~10× cheaper than ctx.shadowBlur per star.
// ──────────────────────────────────────────────────────────────────────

function makeSprite(r, g, b) {
  const SIZE = 64
  const c = document.createElement('canvas')
  c.width = SIZE
  c.height = SIZE
  const cx = c.getContext('2d')
  const grad = cx.createRadialGradient(SIZE / 2, SIZE / 2, 0, SIZE / 2, SIZE / 2, SIZE / 2)
  grad.addColorStop(0, `rgba(${r},${g},${b},1)`)
  grad.addColorStop(0.25, `rgba(${r},${g},${b},0.55)`)
  grad.addColorStop(0.6, `rgba(${r},${g},${b},0.12)`)
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
  cx.fillStyle = grad
  cx.fillRect(0, 0, SIZE, SIZE)
  return c
}

function buildSprites() {
  sprites = {
    cyan: makeSprite(0, 240, 255),
    white: makeSprite(230, 230, 240),
    magenta: makeSprite(255, 80, 140),
  }
}

// ──────────────────────────────────────────────────────────────────────
// Star factory.
// ──────────────────────────────────────────────────────────────────────

function pickColor() {
  const r = Math.random()
  if (r < 0.75) return 'cyan'
  if (r < 0.95) return 'white'
  return 'magenta'
}

function createStar(w, h) {
  const depth = Math.random() // 0 = far, 1 = near
  const x = Math.random() * w
  const y = Math.random() * h
  return {
    homeX: x,
    homeY: y,
    x,
    y,
    vx: 0,
    vy: 0,
    baseSize: 0.6 + depth * depth * 1.8, // 0.6 – 2.4 px
    baseAlpha: 0.25 + depth * depth * 0.75, // 0.25 – 1.0
    color: pickColor(),
    twinkleOffset: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.0008 + Math.random() * 0.0014,
    // Random blink (~8% of stars get a "flare" trigger)
    canBlink: Math.random() < 0.08,
    blinkUntil: 0,
  }
}

function initStars(w, h) {
  stars = new Array(STAR_COUNT)
  for (let i = 0; i < STAR_COUNT; i++) {
    stars[i] = createStar(w, h)
  }
}

// ──────────────────────────────────────────────────────────────────────
// Frame loop.
// ──────────────────────────────────────────────────────────────────────

function draw(time) {
  const canvas = canvasEl.value
  if (!canvas) return
  const w = canvas.clientWidth
  const h = canvas.clientHeight

  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i]

    // Gentle spring back to home position.
    s.vx += (s.homeX - s.x) * 0.02
    s.vy += (s.homeY - s.y) * 0.02
    s.vx *= 0.85
    s.vy *= 0.85

    // Cursor proximity — only compute if cursor is over the hero.
    let glowBoost = 0
    if (cursorActive) {
      const dx = s.x - mouseX
      const dy = s.y - mouseY
      const distSq = dx * dx + dy * dy

      // Glow boost (alpha + size).
      if (distSq < CURSOR_GLOW_RADIUS_SQ) {
        const dist = Math.sqrt(distSq)
        glowBoost = 1 - dist / CURSOR_GLOW_RADIUS
      }

      // Repulsion (drift away).
      if (distSq < CURSOR_PUSH_RADIUS_SQ && distSq > 0.5) {
        const dist = Math.sqrt(distSq)
        const push = (1 - dist / CURSOR_PUSH_RADIUS) * 0.45
        s.vx += (dx / dist) * push
        s.vy += (dy / dist) * push
      }
    }

    s.x += s.vx
    s.y += s.vy

    // Twinkle (cheap sin per star).
    const twinkle = 0.55 + 0.45 * Math.sin(time * s.twinkleSpeed + s.twinkleOffset)

    // Random blink trigger.
    if (s.canBlink && time > s.blinkUntil && Math.random() < 0.0008) {
      s.blinkUntil = time + 200 // 200ms flare
    }
    const blink = time < s.blinkUntil ? 1.6 : 1

    // Final alpha + size.
    let alpha = s.baseAlpha * twinkle * blink + glowBoost * 0.8
    if (alpha > 1) alpha = 1
    const size = s.baseSize * (1 + glowBoost * 1.4) * (blink === 1.6 ? 1.3 : 1)

    // Draw sprite. Sprite is 64px; we scale to (size * 6) so the bright
    // core is roughly `size` and the soft halo extends a few px.
    const sprite = sprites[s.color]
    const drawSize = size * 6
    ctx.globalAlpha = alpha
    ctx.drawImage(sprite, s.x - drawSize / 2, s.y - drawSize / 2, drawSize, drawSize)
  }

  ctx.globalAlpha = 1
}

function animate(time) {
  if (!isVisible || prefersReducedMotion) {
    animationId = null
    return
  }
  draw(time)
  animationId = requestAnimationFrame(animate)
}

function startAnimation() {
  if (animationId !== null) return
  animationId = requestAnimationFrame(animate)
}

function stopAnimation() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

// ──────────────────────────────────────────────────────────────────────
// Cursor handling.
// ──────────────────────────────────────────────────────────────────────

function onPointerMove(e) {
  const canvas = canvasEl.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
  cursorActive = true
}

function onPointerLeave() {
  cursorActive = false
}

// ──────────────────────────────────────────────────────────────────────
// Sizing.
// ──────────────────────────────────────────────────────────────────────

function applySize() {
  const canvas = canvasEl.value
  const hero = heroEl.value
  if (!canvas || !hero) return
  // Cap DPR at 1.5 — visually identical, half the work on retina.
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  const w = hero.offsetWidth
  const h = hero.offsetHeight
  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(h * dpr)
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  initStars(w, h)
  // For reduced-motion users, render a single frame so the field is
  // still visible (just static).
  if (prefersReducedMotion) draw(0)
}

function onResize() {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(applySize, 150)
}

// ──────────────────────────────────────────────────────────────────────
// Visibility / reduced-motion.
// ──────────────────────────────────────────────────────────────────────

function onVisibilityChange() {
  if (document.hidden) {
    isVisible = false
    stopAnimation()
  } else {
    isVisible = true
    if (!prefersReducedMotion) startAnimation()
  }
}

let intersectionObserver = null
let reducedMotionMql = null

onMounted(() => {
  ctx = canvasEl.value.getContext('2d')
  buildSprites()

  reducedMotionMql = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion = reducedMotionMql.matches
  reducedMotionMql.addEventListener('change', (e) => {
    prefersReducedMotion = e.matches
    if (prefersReducedMotion) {
      stopAnimation()
      draw(0)
    } else if (isVisible) {
      startAnimation()
    }
  })

  applySize()

  // Pause when hero leaves viewport (e.g. user scrolled to About).
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        isVisible = true
        if (!prefersReducedMotion) startAnimation()
      } else {
        isVisible = false
        stopAnimation()
      }
    },
    { threshold: 0 },
  )
  intersectionObserver.observe(heroEl.value)

  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('resize', onResize, { passive: true })
  heroEl.value.addEventListener('pointermove', onPointerMove, { passive: true })
  heroEl.value.addEventListener('pointerleave', onPointerLeave, { passive: true })

  if (!prefersReducedMotion) startAnimation()
})

onUnmounted(() => {
  stopAnimation()
  if (intersectionObserver) intersectionObserver.disconnect()
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('resize', onResize)
  if (heroEl.value) {
    heroEl.value.removeEventListener('pointermove', onPointerMove)
    heroEl.value.removeEventListener('pointerleave', onPointerLeave)
  }
  if (resizeTimer) clearTimeout(resizeTimer)
})
</script>

<template>
  <section id="hero" ref="heroEl" class="hero">
    <canvas ref="canvasEl" class="hero-canvas" aria-hidden="true" />
    <div class="hero-content">
      <!-- Star logo -->
      <div class="logo-wrapper">
        <svg
          class="hero-logo"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <!-- Outer glow circle -->
          <circle cx="60" cy="60" r="56" stroke="rgba(0,240,255,0.08)" stroke-width="1" />
          <circle cx="60" cy="60" r="48" stroke="rgba(0,240,255,0.05)" stroke-width="0.5" />
          <!-- 8-pointed star -->
          <path
            d="
            M60 8 L66 46 L98 30 L74 54 L112 60 L74 66 L98 90 L66 74 L60 112 L54 74 L22 90 L46 66 L8 60 L46 54 L22 30 L54 46 Z
          "
            fill="url(#starGrad)"
            opacity="0.9"
          />
          <!-- Inner bright star -->
          <path
            d="
            M60 28 L64 52 L84 40 L72 56 L96 60 L72 64 L84 80 L64 68 L60 92 L56 68 L36 80 L48 64 L24 60 L48 56 L36 40 L56 52 Z
          "
            fill="url(#starInner)"
            opacity="0.6"
          />
          <!-- Center dot -->
          <circle cx="60" cy="60" r="4" fill="#00f0ff" opacity="0.9" />
          <circle cx="60" cy="60" r="2" fill="#ffffff" opacity="0.9" />
          <defs>
            <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#00f0ff" />
              <stop offset="70%" stop-color="#00a0cc" />
              <stop offset="100%" stop-color="#005577" stop-opacity="0.3" />
            </radialGradient>
            <radialGradient id="starInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="50%" stop-color="#00f0ff" />
              <stop offset="100%" stop-color="#00a0cc" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <h1 class="hero-title">Zorya Tech Studio</h1>
      <p class="hero-tagline">{{ t('hero.tagline') }}</p>
    </div>
    <a href="#about" class="scroll-hint" aria-label="Scroll down">
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6,9 12,15 18,9" />
      </svg>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 24px;
  pointer-events: none;
}

/* Logo */
.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.hero-logo {
  width: 90px;
  height: 90px;
  filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.35)) drop-shadow(0 0 40px rgba(0, 240, 255, 0.1));
  animation: logo-pulse 4s ease-in-out infinite;
}

@keyframes logo-pulse {
  0%,
  100% {
    filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.35))
      drop-shadow(0 0 40px rgba(0, 240, 255, 0.1));
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 24px rgba(0, 240, 255, 0.5))
      drop-shadow(0 0 60px rgba(0, 240, 255, 0.15));
    transform: scale(1.03);
  }
}

/* Title */
.hero-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(2.2rem, 7vw, 4.2rem);
  letter-spacing: 6px;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 16px;
  background: linear-gradient(
    90deg,
    #00f0ff 0%,
    #00c8ff 15%,
    #a855f7 35%,
    #ff2d6b 50%,
    #e8b84b 65%,
    #00f0ff 80%,
    #00c8ff 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: title-gradient 6s linear infinite;
  filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.25))
    drop-shadow(0 0 60px rgba(0, 240, 255, 0.08));
}

@keyframes title-gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.hero-tagline {
  font-family: var(--font-ui);
  font-weight: 400;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-dim);
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: var(--accent);
  opacity: 0.5;
  animation: scroll-bounce 2s ease-in-out infinite;
  pointer-events: auto;
  transition: opacity 0.2s;
}

.scroll-hint:hover {
  opacity: 1;
  color: var(--accent);
}

@keyframes scroll-bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateX(-50%) translateY(8px);
    opacity: 0.9;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-logo,
  .hero-title,
  .scroll-hint {
    animation: none;
  }
}
</style>
