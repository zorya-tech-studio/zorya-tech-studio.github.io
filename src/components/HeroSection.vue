<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const heroEl = ref(null)
const canvasEl = ref(null)
const contentEl = ref(null)
let ctx
let animationId = null
let stars = []
let sprites = {}
let constellations = []

// Tunables — kept low for steady 60fps on mid-tier hardware.
const STAR_COUNT = 140
const CURSOR_GLOW_RADIUS = 90 // px — within this distance, stars brighten + grow
const CURSOR_PUSH_RADIUS = 90 // px — within this distance, stars drift away
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
    // "Night → Dawn": warm starlight + occasional golden dawn-star.
    white: makeSprite(233, 238, 247),
    gold: makeSprite(242, 182, 90),
  }
}

// ──────────────────────────────────────────────────────────────────────
// Star factory.
// ──────────────────────────────────────────────────────────────────────

function pickColor() {
  // ~86% warm white starlight, ~14% golden dawn-stars.
  return Math.random() < 0.86 ? 'white' : 'gold'
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
// Constellations. A handful of recognisable star patterns, drawn as
// brighter node-stars linked by faint accent lines. Coordinates are in a
// normalised 0–1 local box; each placement scales + offsets them onto the
// hero, biased to the sides so the central title stays clear.
// ──────────────────────────────────────────────────────────────────────

const CONSTELLATION_SHAPES = [
  {
    name: { uk: 'Велика Ведмедиця', en: 'Ursa Major' },
    // Ursa Major — the Big Dipper / «Великий Віз».
    nodes: [
      [0.02, 0.34],
      [0.24, 0.28],
      [0.45, 0.34],
      [0.63, 0.46],
      [0.66, 0.68],
      [0.87, 0.74],
      [0.98, 0.5],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
    ],
  },
  {
    name: { uk: 'Кассіопея', en: 'Cassiopeia' },
    // Cassiopeia — the "W".
    nodes: [
      [0.02, 0.3],
      [0.27, 0.7],
      [0.5, 0.32],
      [0.74, 0.72],
      [0.98, 0.28],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    name: { uk: 'Оріон', en: 'Orion' },
    // Orion — belt + shoulders/feet.
    nodes: [
      [0.18, 0.05],
      [0.82, 0.14],
      [0.42, 0.45],
      [0.5, 0.5],
      [0.58, 0.55],
      [0.1, 0.95],
      [0.9, 0.88],
    ],
    links: [
      [0, 2],
      [1, 4],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
    ],
  },
  {
    name: { uk: 'Лебідь', en: 'Cygnus' },
    // Cygnus — the Northern Cross.
    nodes: [
      [0.5, 0.02],
      [0.5, 0.4],
      [0.5, 0.72],
      [0.5, 0.98],
      [0.16, 0.5],
      [0.84, 0.56],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 1],
      [1, 5],
    ],
  },
  {
    name: { uk: 'Ліра', en: 'Lyra' },
    // Lyra — small parallelogram + top star.
    nodes: [
      [0.5, 0.04],
      [0.28, 0.42],
      [0.72, 0.5],
      [0.36, 0.82],
      [0.8, 0.9],
    ],
    links: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 4],
    ],
  },
  {
    name: { uk: 'Лев', en: 'Leo' },
    // Leo — the "sickle" + triangle.
    nodes: [
      [0.06, 0.28],
      [0.2, 0.12],
      [0.36, 0.2],
      [0.34, 0.44],
      [0.62, 0.52],
      [0.94, 0.44],
      [0.7, 0.82],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [5, 6],
    ],
  },
  {
    name: { uk: 'Трикутник', en: 'Triangulum' },
    // Triangulum — a simple triangle.
    nodes: [
      [0.5, 0.06],
      [0.05, 0.9],
      [0.95, 0.82],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
]

// Reveal-animation timing (ms). Constellations cascade in on load: each one
// starts a beat after the previous, its node-stars pop in one by one, and the
// linking lines then draw themselves between the lit nodes.
const CON_REVEAL_STAGGER = 320 // between successive constellations
const NODE_REVEAL_STAGGER = 90 // between node-stars within one constellation
const NODE_REVEAL_DUR = 520 // a single node's fade/scale-in
const LINK_REVEAL_DUR = 420 // a single link's draw-in

const easeOut = (p) => 1 - (1 - p) * (1 - p) * (1 - p)

function buildConstellations(w, h) {
  constellations = []
  // Skip on very small viewports — the field alone reads better there.
  if (w < 560) return

  // Keep constellations out of the central title band.
  const bandTop = h * 0.32
  const bandBottom = h * 0.68
  const bandLeft = w * 0.24
  const bandRight = w * 0.76

  // Shuffle all shapes, then take as many as fit the viewport.
  const order = CONSTELLATION_SHAPES.map((_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  const count = w < 900 ? 4 : Math.min(order.length, 7)
  const picks = order.slice(0, count)

  // Gap kept between constellation bounding boxes (and the title band).
  const pad = Math.min(w, h) * 0.05
  const placed = [] // {x0, y0, x1, y1} boxes already occupied

  const overlaps = (a, b) =>
    a.x0 < b.x1 + pad && a.x1 + pad > b.x0 && a.y0 < b.y1 + pad && a.y1 + pad > b.y0

  const band = { x0: bandLeft, y0: bandTop, x1: bandRight, y1: bandBottom }

  for (let k = 0; k < picks.length; k++) {
    const shape = CONSTELLATION_SHAPES[picks[k]]
    const scale = Math.min(w, h) * (0.13 + Math.random() * 0.1)

    let box = null
    for (let tries = 0; tries < 40; tries++) {
      const ox = Math.random() * (w - scale)
      const oy = Math.random() * (h - scale * 0.9)
      const candidate = { x0: ox, y0: oy, x1: ox + scale, y1: oy + scale * 0.9 }
      if (overlaps(candidate, band)) continue
      let clash = false
      for (let p = 0; p < placed.length; p++) {
        if (overlaps(candidate, placed[p])) {
          clash = true
          break
        }
      }
      if (!clash) {
        box = candidate
        break
      }
    }
    // Couldn't find a free spot — skip this one rather than overlap.
    if (!box) continue
    placed.push(box)

    // Cascade this constellation in after the ones already placed.
    const conDelay = constellations.length * CON_REVEAL_STAGGER

    const nodes = shape.nodes.map(([nx, ny], i) => ({
      x: box.x0 + nx * scale,
      y: box.y0 + ny * scale,
      twinkleOffset: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.0006 + Math.random() * 0.0009,
      revealDelay: conDelay + i * NODE_REVEAL_STAGGER,
    }))

    // A link starts drawing just after its later endpoint has lit up.
    const links = shape.links.map(([a, b]) => ({
      a,
      b,
      revealDelay: Math.max(nodes[a].revealDelay, nodes[b].revealDelay) + NODE_REVEAL_DUR * 0.4,
    }))

    constellations.push({
      name: shape.name,
      nodes,
      links,
      color: Math.random() < 0.5 ? 'white' : 'gold',
      box,
      appearStart: null, // stamped on the first frame this one is drawn
    })
  }
}

function drawConstellations(time) {
  for (let c = 0; c < constellations.length; c++) {
    const con = constellations[c]
    const nodes = con.nodes
    const b = con.box

    // Stamp the reveal clock on the first frame this one is drawn. For
    // reduced-motion users the whole reveal is collapsed to "already done".
    if (con.appearStart === null) con.appearStart = prefersReducedMotion ? -1e9 : time
    const elapsed = time - con.appearStart

    // Is the cursor hovering this constellation's box?
    const hover =
      cursorActive && mouseX >= b.x0 && mouseX <= b.x1 && mouseY >= b.y0 && mouseY <= b.y1

    // Ease the highlight in/out for a soft feel.
    con.hoverT = (con.hoverT || 0) + ((hover ? 1 : 0) - (con.hoverT || 0)) * 0.12
    const hi = con.hoverT

    // Faint linking lines, gently pulsing as one; brighter on hover. Each
    // link grows from its first node toward its second as it reveals.
    const linePulse = 0.5 + 0.5 * Math.sin(time * 0.0006 + c * 1.7)
    const baseLineAlpha = 0.05 + linePulse * 0.09 + hi * 0.4
    ctx.lineWidth = 1 + hi * 0.6
    for (let l = 0; l < con.links.length; l++) {
      const link = con.links[l]
      const lp = easeOut(Math.min(1, Math.max(0, (elapsed - link.revealDelay) / LINK_REVEAL_DUR)))
      if (lp <= 0) continue
      const a = nodes[link.a]
      const bb = nodes[link.b]
      ctx.strokeStyle =
        con.color === 'gold'
          ? `rgba(242, 182, 90, ${baseLineAlpha * lp})`
          : `rgba(160, 214, 255, ${baseLineAlpha * lp})`
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(a.x + (bb.x - a.x) * lp, a.y + (bb.y - a.y) * lp)
      ctx.stroke()
    }

    // Node stars — brighter, own twinkle; grow slightly on hover. Each pops
    // in (fade + scale) on its staggered reveal beat.
    const sprite = sprites[con.color]
    for (let n = 0; n < nodes.length; n++) {
      const nd = nodes[n]
      const np = easeOut(Math.min(1, Math.max(0, (elapsed - nd.revealDelay) / NODE_REVEAL_DUR)))
      if (np <= 0) continue
      const twinkle = 0.6 + 0.4 * Math.sin(time * nd.twinkleSpeed + nd.twinkleOffset)
      const drawSize = 2.6 * 6 * (1 + hi * 0.35) * (0.3 + 0.7 * np)
      ctx.globalAlpha = Math.min(1, (0.55 + twinkle * 0.45 + hi * 0.3) * np)
      ctx.drawImage(sprite, nd.x - drawSize / 2, nd.y - drawSize / 2, drawSize, drawSize)
    }

    // Name label — fades in on hover, centred above the box.
    if (hi > 0.02) {
      const label = con.name[locale.value] || con.name.en
      ctx.globalAlpha = Math.min(1, hi)
      ctx.font = '600 14px "Space Grotesk", system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'alphabetic'
      const lx = (b.x0 + b.x1) / 2
      const ly = b.y0 - 8
      ctx.fillStyle = 'rgba(7, 9, 14, 0.6)'
      const tw = ctx.measureText(label).width
      ctx.fillRect(lx - tw / 2 - 8, ly - 16, tw + 16, 22)
      ctx.fillStyle = con.color === 'gold' ? 'rgba(242, 200, 130, 1)' : 'rgba(200, 232, 255, 1)'
      ctx.fillText(label, lx, ly)
    }
  }
  ctx.globalAlpha = 1
  ctx.textAlign = 'left'
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

  drawConstellations(time)

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
        const push = (1 - dist / CURSOR_PUSH_RADIUS) * 0.25
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
  buildConstellations(w, h)
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

// ──────────────────────────────────────────────────────────────────────
// Parallax + fade of hero content on scroll (starfield stays behind → depth).
// ──────────────────────────────────────────────────────────────────────
let parallaxTicking = false

function applyParallax() {
  parallaxTicking = false
  const el = contentEl.value
  if (!el) return
  const y = window.scrollY
  if (y > window.innerHeight) return // hero already off-screen
  const opacity = Math.max(0, 1 - y / 480)
  el.style.transform = `translateY(${y * 0.35}px)`
  el.style.opacity = String(opacity)
}

function onParallaxScroll() {
  if (parallaxTicking || prefersReducedMotion) return
  parallaxTicking = true
  requestAnimationFrame(applyParallax)
}

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
  window.addEventListener('scroll', onParallaxScroll, { passive: true })

  if (!prefersReducedMotion) startAnimation()
})

onUnmounted(() => {
  stopAnimation()
  if (intersectionObserver) intersectionObserver.disconnect()
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onParallaxScroll)
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
    <div ref="contentEl" class="hero-content">
      <!-- Dawn-star logo -->
      <div class="logo-wrapper">
        <svg class="hero-logo" viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M32 3 C 34.5 23, 41 29.5, 61 32 C 41 34.5, 34.5 41, 32 61 C 29.5 41, 23 34.5, 3 32 C 23 29.5, 29.5 23, 32 3 Z"
            fill="currentColor"
          />
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
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Тепла смуга світанку біля «горизонту» знизу */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    120% 80% at 50% 118%,
    rgba(242, 182, 90, 0.16) 0%,
    rgba(143, 163, 216, 0.06) 30%,
    transparent 62%
  );
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
  padding: 0 var(--gutter);
  pointer-events: none;
  animation: zFadeUp 900ms var(--ease) both;
}

/* Logo */
.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: var(--sp-6);
}

.hero-logo {
  width: 58px;
  height: 58px;
  color: var(--accent);
  filter: drop-shadow(0 0 20px rgba(242, 182, 90, 0.6));
  animation: zStarPulse 5.5s var(--ease) infinite;
}

@keyframes zStarPulse {
  0%,
  100% {
    opacity: 0.55;
  }
  50% {
    opacity: 1;
  }
}

/* Title */
.hero-title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--fs-hero);
  letter-spacing: var(--ls-tight);
  line-height: var(--lh-tight);
  color: var(--text);
  margin-bottom: var(--sp-4);
}

.hero-tagline {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--fs-md);
  color: var(--text-muted);
  max-width: 540px;
  margin: 0 auto;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: var(--sp-6);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: var(--text-faint);
  animation: zBounce 2.4s var(--ease) infinite;
  pointer-events: auto;
  transition: color var(--t-fast);
}

.scroll-hint:hover {
  color: var(--accent);
}

@keyframes zFadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes zBounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(7px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-logo,
  .hero-title,
  .hero-content,
  .scroll-hint {
    animation: none;
  }
}
</style>
