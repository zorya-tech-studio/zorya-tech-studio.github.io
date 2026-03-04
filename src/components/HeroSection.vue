<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'

const { t } = useI18n()
const container = ref(null)
let renderer, scene, camera, particles, mouse, animationId, composer

// Custom glitch post-processing shader
const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uIntensity: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uIntensity;
    varying vec2 vUv;

    float random(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      float intensity = uIntensity;

      // Horizontal shift bands
      float band = step(0.98, random(vec2(floor(uv.y * 40.0), floor(uTime * 20.0))));
      uv.x += band * intensity * (random(vec2(uTime)) - 0.5) * 0.15;

      // Chromatic aberration
      float rShift = intensity * 0.012;
      float bShift = intensity * -0.012;

      vec4 cr = texture2D(tDiffuse, vec2(uv.x + rShift, uv.y));
      vec4 cg = texture2D(tDiffuse, uv);
      vec4 cb = texture2D(tDiffuse, vec2(uv.x + bShift, uv.y));

      // Scanline noise
      float scanNoise = random(vec2(uv.y * 100.0, uTime * 5.0)) * intensity * 0.08;

      gl_FragColor = vec4(cr.r, cg.g, cb.b, cg.a) + scanNoise;
    }
  `,
}

onMounted(() => {
  const el = container.value

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, el.offsetWidth / el.offsetHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(el.offsetWidth, el.offsetHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  el.appendChild(renderer.domElement)

  // Post-processing
  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const glitchPass = new ShaderPass(GlitchShader)
  composer.addPass(glitchPass)

  const count = 1500
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const basePositions = new Float32Array(count * 3)

  const cyan = new THREE.Color(0x00f0ff)
  const magenta = new THREE.Color(0xff2d6b)
  const white = new THREE.Color(0xffffff)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 14
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 8

    basePositions[i3] = positions[i3]
    basePositions[i3 + 1] = positions[i3 + 1]
    basePositions[i3 + 2] = positions[i3 + 2]

    const r = Math.random()
    const c = r < 0.7 ? cyan : r < 0.85 ? magenta : white
    colors[i3] = c.r
    colors[i3 + 1] = c.g
    colors[i3 + 2] = c.b

    sizes[i] = Math.random() * 3 + 1
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(-10, -10) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = color;
        vec3 pos = position;
        pos.y += sin(uTime * 0.3 + position.x * 2.0) * 0.05;
        pos.x += cos(uTime * 0.2 + position.y * 1.5) * 0.03;

        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        vec2 screenPos = mvPos.xy / -mvPos.z;
        float dist = distance(screenPos, uMouse);
        float influence = smoothstep(1.2, 0.0, dist);

        mvPos.xy += normalize(screenPos - uMouse + 0.001) * influence * 0.4;

        float twinkle = sin(uTime * 2.0 + position.x * 10.0 + position.y * 7.0) * 0.5 + 0.5;
        vAlpha = 0.3 + twinkle * 0.5 + influence * 0.5;

        gl_Position = projectionMatrix * mvPos;
        gl_PointSize = (size + influence * 4.0) * uPixelRatio * (2.0 / -mvPos.z);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        float glow = 1.0 - smoothstep(0.0, 0.5, d);
        gl_FragColor = vec4(vColor, vAlpha * glow);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  mouse = new THREE.Vector2(-10, -10)

  function onMouseMove(e) {
    const rect = el.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  function onMouseLeave() {
    mouse.x = -10
    mouse.y = -10
  }

  function onResize() {
    camera.aspect = el.offsetWidth / el.offsetHeight
    camera.updateProjectionMatrix()
    renderer.setSize(el.offsetWidth, el.offsetHeight)
    composer.setSize(el.offsetWidth, el.offsetHeight)
    material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2)
  }

  let glitchTimer = 0
  let sceneGlitchIntensity = 0

  function animate() {
    const time = performance.now() * 0.001

    material.uniforms.uTime.value = time
    material.uniforms.uMouse.value.set(mouse.x, mouse.y)

    // Periodic particle glitch burst
    glitchTimer -= 1
    if (glitchTimer <= 0) {
      glitchTimer = Math.random() * 200 + 100
      if (Math.random() < 0.4) {
        sceneGlitchIntensity = 1.0
        const pos = geometry.attributes.position.array
        for (let i = 0; i < 50; i++) {
          const idx = Math.floor(Math.random() * count) * 3
          pos[idx] += (Math.random() - 0.5) * 3
          pos[idx + 1] += (Math.random() - 0.5) * 3
        }
        geometry.attributes.position.needsUpdate = true
        setTimeout(() => {
          const pos = geometry.attributes.position.array
          for (let i = 0; i < count * 3; i++) {
            pos[i] += (basePositions[i] - pos[i]) * 0.5
          }
          geometry.attributes.position.needsUpdate = true
        }, 100)
      }
    }

    // Decay glitch intensity
    sceneGlitchIntensity *= 0.92
    glitchPass.uniforms.uTime.value = time
    glitchPass.uniforms.uIntensity.value = sceneGlitchIntensity

    particles.rotation.y = time * 0.02
    particles.rotation.x = Math.sin(time * 0.1) * 0.05

    composer.render()
    animationId = requestAnimationFrame(animate)
  }

  animate()
  el.addEventListener('mousemove', onMouseMove)
  el.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('resize', onResize)

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    el.removeEventListener('mousemove', onMouseMove)
    el.removeEventListener('mouseleave', onMouseLeave)
    window.removeEventListener('resize', onResize)
    composer.dispose()
    renderer.dispose()
    geometry.dispose()
    material.dispose()
  })
})
</script>

<template>
  <section id="hero" class="hero">
    <div ref="container" class="three-container" />
    <div class="hero-content">
      <div class="title-3d-wrapper">
        <h1 class="hero-title glitch" data-text="Zorya Tech Studio">
          Zorya Tech Studio
        </h1>
        <div class="title-reflection" aria-hidden="true">Zorya Tech Studio</div>
      </div>
      <p class="hero-tagline">{{ t('hero.tagline') }}</p>
    </div>
    <a href="#about" class="scroll-hint" aria-label="Scroll down">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6,9 12,15 18,9" />
      </svg>
    </a>
    <div class="scanlines" />
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

.three-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.three-container :deep(canvas) {
  display: block;
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 24px;
  pointer-events: none;
  perspective: 800px;
}

/* 3D title wrapper */
.title-3d-wrapper {
  transform-style: preserve-3d;
  animation: title-float 6s ease-in-out infinite;
  position: relative;
}

.hero-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  color: var(--accent);
  letter-spacing: 6px;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 16px;
  position: relative;
  transform-style: preserve-3d;
  text-shadow:
    0 0 20px var(--accent-glow),
    0 0 60px rgba(0, 240, 255, 0.15),
    0 0 100px rgba(0, 240, 255, 0.05),
    0 2px 0 rgba(0, 180, 200, 0.6),
    0 4px 0 rgba(0, 150, 170, 0.4),
    0 6px 0 rgba(0, 120, 140, 0.2),
    0 8px 15px rgba(0, 0, 0, 0.4);
  animation: glitch-main 4s infinite;
}

/* 3D reflection below title */
.title-reflection {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  letter-spacing: 6px;
  text-transform: uppercase;
  line-height: 1.2;
  color: var(--accent);
  transform: rotateX(180deg) translateY(10px) scaleY(0.4);
  transform-origin: top center;
  opacity: 0.15;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 80%);
  filter: blur(2px);
  pointer-events: none;
}

/* Main title glitch animation */
@keyframes glitch-main {
  0%, 80%, 100% {
    transform: translate3d(0, 0, 0) skewX(0);
    filter: none;
  }
  81% {
    transform: translate3d(-8px, -2px, 20px) skewX(-2deg);
    filter: hue-rotate(40deg);
  }
  82% {
    transform: translate3d(10px, 1px, -10px) skewX(1.5deg);
    filter: hue-rotate(-20deg) brightness(1.3);
  }
  83% {
    transform: translate3d(-4px, 3px, 15px) skewX(-0.5deg);
    filter: none;
  }
  84% {
    transform: translate3d(6px, -1px, -5px) skewX(2deg);
    filter: hue-rotate(60deg) saturate(1.5);
  }
  85% {
    transform: translate3d(0, 0, 0) skewX(0);
    filter: none;
  }
  91% {
    transform: translate3d(0, 0, 0) skewX(0);
  }
  92% {
    transform: translate3d(12px, -3px, 25px) skewX(-3deg);
    filter: hue-rotate(-30deg) brightness(1.5);
  }
  93% {
    transform: translate3d(-15px, 2px, -15px) skewX(2deg);
    filter: hue-rotate(50deg);
  }
  94% {
    transform: translate3d(5px, 0, 10px) skewX(-1deg);
    filter: none;
  }
  95% {
    transform: translate3d(0, 0, 0) skewX(0);
    filter: none;
  }
}

/* Glitch chromatic layers */
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
}

.glitch::before {
  color: var(--glitch);
  animation: glitch-top 2s infinite linear alternate-reverse;
  clip-path: inset(0 0 55% 0);
  text-shadow: -3px 0 var(--glitch), 3px 0 rgba(255, 45, 107, 0.5);
  z-index: -1;
}

.glitch::after {
  color: var(--accent);
  animation: glitch-bottom 1.8s infinite linear alternate-reverse;
  clip-path: inset(55% 0 0 0);
  text-shadow: 3px 0 rgba(0, 240, 255, 0.8), -3px 0 rgba(0, 240, 255, 0.4);
  z-index: -1;
}

@keyframes glitch-top {
  0%, 78%, 100% { transform: translate3d(0, 0, 0) skewX(0); opacity: 0.8; }
  80% { transform: translate3d(-10px, -2px, 0) skewX(-3deg); opacity: 1; }
  82% { transform: translate3d(8px, 0, 0) skewX(2deg); opacity: 0.6; }
  84% { transform: translate3d(-12px, 1px, 0) skewX(-1deg); opacity: 1; }
  86% { transform: translate3d(6px, -1px, 0); opacity: 0.9; }
  88% { transform: translate3d(-4px, 2px, 0) skewX(1.5deg); opacity: 0.7; }
  90% { transform: translate3d(14px, 0, 0) skewX(-2deg); opacity: 1; }
  92% { transform: translate3d(-6px, -1px, 0); opacity: 0.8; }
  94% { transform: translate3d(0, 0, 0) skewX(0); opacity: 0.8; }
}

@keyframes glitch-bottom {
  0%, 75%, 100% { transform: translate3d(0, 0, 0) skewX(0); opacity: 0.8; }
  77% { transform: translate3d(8px, 2px, 0) skewX(2deg); opacity: 1; }
  79% { transform: translate3d(-12px, -1px, 0) skewX(-3deg); opacity: 0.5; }
  81% { transform: translate3d(6px, 0, 0) skewX(1deg); opacity: 1; }
  83% { transform: translate3d(-8px, 3px, 0); opacity: 0.7; }
  85% { transform: translate3d(15px, -2px, 0) skewX(-2.5deg); opacity: 1; }
  87% { transform: translate3d(-5px, 1px, 0) skewX(1deg); opacity: 0.9; }
  89% { transform: translate3d(0, 0, 0) skewX(0); opacity: 0.8; }
}

/* 3D floating animation */
@keyframes title-float {
  0%, 100% {
    transform: rotateX(2deg) rotateY(0deg) translateZ(0);
  }
  25% {
    transform: rotateX(-1deg) rotateY(3deg) translateZ(10px);
  }
  50% {
    transform: rotateX(3deg) rotateY(-2deg) translateZ(5px);
  }
  75% {
    transform: rotateX(-2deg) rotateY(1deg) translateZ(15px);
  }
}

.hero-tagline {
  font-family: var(--font-ui);
  font-weight: 400;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-dim);
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: tagline-flicker 5s infinite;
}

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
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
  50% { transform: translateX(-50%) translateY(8px); opacity: 0.9; }
}

@keyframes tagline-flicker {
  0%, 90%, 94%, 98%, 100% { opacity: 1; }
  91% { opacity: 0.4; }
  93% { opacity: 0.8; transform: translateX(2px); }
  95% { opacity: 0.3; transform: translateX(-1px); }
  97% { opacity: 0.9; transform: translateX(1px); }
  99% { opacity: 0.6; transform: translateX(0); }
}
</style>
