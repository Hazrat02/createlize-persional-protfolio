<script setup>
import { onMounted, nextTick } from 'vue'
import ScrollMagic from 'scrollmagic'
import { gsap, Linear } from 'gsap'

// Patch ScrollMagic for GSAP 3
import '@/utils/animate.gsap' // <- Make sure this exists and is working

onMounted(async () => {
  await nextTick()

  const controller = new ScrollMagic.Controller()
  const textFill = document.querySelector('.text-fill')

  if (!textFill) return

  const lines = textFill.innerHTML.trim().split('<br>')
  textFill.innerHTML = ''

  lines.forEach((line) => {
    const span = document.createElement('span')
    span.className = 'text-line'
    span.textContent = line.trim()
    textFill.appendChild(span)
  })

  const allSpans = document.querySelectorAll('.text-fill .text-line')

  allSpans.forEach((span, index) => {
    const spanHeight = span.offsetHeight * 2

    gsap.set(span, {
      backgroundImage: 'linear-gradient(90deg, #fff 50%, #888 50%)',
      backgroundSize: '0% 100%',
      backgroundRepeat: 'no-repeat',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'block',
    })

    const tween = gsap.to(span, {
      backgroundSize: '200% 100%',
      ease: Linear.easeNone,
      duration: 1,
      delay: index * 0.6, // This makes them animate one by one
    })

    const scene = new ScrollMagic.Scene({
      triggerElement: span,
      triggerHook: 0.8,
      duration: spanHeight,
    })
      .setTween(tween)
      .addTo(controller)
  })
})
</script>

<template>
  <section class="about-section">
    <div class="text-fill">
      Hi, I'm Hazrat Ali.<br>
      I'm a passionate Full-Stack Web Developer.<br>
      I love building responsive and dynamic apps.
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 100px;
  background: #111;
  color: #fff;
  font-size: 1.5rem;
  line-height: 2;
}
.text-line {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}
</style>
