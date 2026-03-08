<script setup>
import { onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import AppsSection from '../components/AppsSection.vue'
import ContactSection from '../components/ContactSection.vue'

let observer

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
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <HeroSection />
  <div class="fade-section">
    <AboutSection />
  </div>
  <div class="fade-section">
    <AppsSection />
  </div>
  <div class="fade-section">
    <ContactSection />
  </div>
</template>
