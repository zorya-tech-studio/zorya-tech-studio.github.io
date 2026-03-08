<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const starsCanvas = ref(null)
const trailCanvas = ref(null)
let starsCtx, trailCtx
let animationId
let stars = []
let trail = []

const STAR_COUNT = 350
const TRAIL_LENGTH = 50

function createStar(canvasW, canvasH, fromTop = false) {
  // depth 0 = far background, 1 = close foreground
  const depth = Math.random()
  const d = 0.3 + depth * 0.7 // scale factor 0.3–1.0
  return {
    x: Math.random() * canvasW,
    y: fromTop ? -Math.random() * 40 : Math.random() * canvasH,
    depth,
    speed: (0.1 + depth * depth * 2.2) * (0.8 + Math.random() * 0.4),
    size: (0.2 + depth * depth * 3) * (0.7 + Math.random() * 0.6),
    opacity: (0.05 + depth * depth * 0.7) * (0.5 + Math.random() * 0.5),
    tailLen: (1 + depth * depth * 24) * (0.6 + Math.random() * 0.8),
    color: Math.random() < 0.7 ? 'cyan' : Math.random() < 0.67 ? 'white' : 'magenta',
    drift: (Math.random() - 0.5) * 0.1 * d,
    twinklePhase: Math.random() * Math.PI * 2,
  }
}

function initStars(w, h) {
  stars = []
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(createStar(w, h, false))
  }
  stars.sort((a, b) => a.depth - b.depth)
}

function drawStars(time) {
  const canvas = starsCanvas.value
  if (!canvas) return
  const w = canvas.width
  const h = canvas.height
  starsCtx.clearRect(0, 0, w, h)

  for (const s of stars) {
    // Twinkle
    const twinkle = 0.5 + 0.5 * Math.sin(time * 0.002 + s.twinklePhase)
    const alpha = s.opacity * (0.5 + twinkle * 0.5)

    // Color
    let r, g, b
    if (s.color === 'cyan') {
      r = 0
      g = 240
      b = 255
    } else if (s.color === 'magenta') {
      r = 255
      g = 45
      b = 107
    } else {
      r = 230
      g = 230
      b = 240
    }

    // Tail (gradient line going up from star)
    const grad = starsCtx.createLinearGradient(s.x, s.y, s.x, s.y - s.tailLen)
    grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`)
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
    starsCtx.beginPath()
    starsCtx.moveTo(s.x, s.y - s.tailLen)
    starsCtx.lineTo(s.x, s.y)
    starsCtx.strokeStyle = grad
    starsCtx.lineWidth = s.size * 0.6
    starsCtx.stroke()

    // Star dot with glow
    starsCtx.beginPath()
    starsCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
    starsCtx.fillStyle = `rgba(${r},${g},${b},${alpha})`
    starsCtx.shadowColor = `rgba(${r},${g},${b},${alpha * 0.8})`
    starsCtx.shadowBlur = s.size * 3
    starsCtx.fill()
    starsCtx.shadowBlur = 0

    // Move
    s.y += s.speed
    s.x += s.drift

    // Reset if off screen
    if (s.y > h + 20) {
      Object.assign(s, createStar(w, h, true))
    }
    if (s.x < -10) s.x = w + 10
    if (s.x > w + 10) s.x = -10
  }
}

function drawTrail() {
  const canvas = trailCanvas.value
  if (!canvas) {
    return
  }
  trailCtx.clearRect(0, 0, canvas.width, canvas.height)
  if (trail.length < 3) return

  // Draw segments with gradient: fade from transparent (tail) to bright (head)
  trailCtx.lineCap = 'round'
  trailCtx.lineJoin = 'round'

  for (let i = 1; i < trail.length - 1; i++) {
    const p0 = trail[i - 1]
    const p1 = trail[i]
    const p2 = trail[i + 1]

    const progress = i / (trail.length - 1) // 0=tail, 1=head
    const alpha = progress * progress * progress * 0.65
    const width = 0.3 + progress * progress * 2.5

    // Blend color from dim magenta (tail) → bright cyan (head)
    const r = Math.round(255 * (1 - progress) * 0.4)
    const g = Math.round(45 + 195 * progress)
    const b = Math.round(107 + 148 * progress)

    trailCtx.beginPath()
    trailCtx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2)
    trailCtx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2)
    trailCtx.strokeStyle = `rgba(${r},${g},${b},${alpha})`
    trailCtx.lineWidth = width
    trailCtx.stroke()
  }

  // Soft glow pass on the head portion
  const headLen = Math.max(3, Math.floor(trail.length * 0.3))
  const headStart = trail.length - headLen
  trailCtx.beginPath()
  trailCtx.moveTo(
    (trail[headStart].x + trail[headStart + 1].x) / 2,
    (trail[headStart].y + trail[headStart + 1].y) / 2,
  )
  for (let i = headStart + 1; i < trail.length - 1; i++) {
    const p1 = trail[i]
    const p2 = trail[i + 1]
    trailCtx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2)
  }
  trailCtx.strokeStyle = 'rgba(0, 240, 255, 0.15)'
  trailCtx.lineWidth = 6
  trailCtx.shadowColor = 'rgba(0, 240, 255, 0.25)'
  trailCtx.shadowBlur = 16
  trailCtx.stroke()
  trailCtx.shadowBlur = 0
}

function animate(time) {
  drawStars(time)

  // Continuously remove oldest point so trail always fades
  if (trail.length > 0) trail.shift()

  drawTrail()
  animationId = requestAnimationFrame(animate)
}

function onMouseMove(e) {
  const canvas = trailCanvas.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const x = (e.clientX - rect.left) * (canvas.width / rect.width)
  const y = (e.clientY - rect.top) * (canvas.height / rect.height)

  trail.push({ x, y })
  if (trail.length > TRAIL_LENGTH) trail.shift()
}

function resize() {
  const starsEl = starsCanvas.value
  const trailEl = trailCanvas.value
  if (!starsEl || !trailEl) return

  const parent = starsEl.parentElement
  const dpr = Math.min(window.devicePixelRatio, 2)
  const w = parent.offsetWidth
  const h = parent.offsetHeight

  starsEl.width = w * dpr
  starsEl.height = h * dpr
  starsEl.style.width = w + 'px'
  starsEl.style.height = h + 'px'
  starsCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

  trailEl.width = w * dpr
  trailEl.height = h * dpr
  trailEl.style.width = w + 'px'
  trailEl.style.height = h + 'px'
  trailCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

  initStars(w, h)
}

onMounted(() => {
  starsCtx = starsCanvas.value.getContext('2d')
  trailCtx = trailCanvas.value.getContext('2d')
  resize()
  animationId = requestAnimationFrame(animate)

  const hero = starsCanvas.value.parentElement
  hero.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', resize)

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    hero.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <section id="hero" class="hero">
    <canvas ref="starsCanvas" class="hero-canvas" aria-hidden="true" />
    <canvas ref="trailCanvas" class="hero-canvas trail-canvas" aria-hidden="true" />
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

.trail-canvas {
  z-index: 1;
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
</style>
