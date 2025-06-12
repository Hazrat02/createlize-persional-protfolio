<template>
  <span ref="el">{{ displayValue }}</span>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  from: { type: Number, default: 0 },
  to: { type: Number, required: true },
  duration: { type: Number, default: 2000 }, // in ms
})

const displayValue = ref(props.from)
const el = ref(null)
let hasAnimated = false

const animateCount = () => {
  const start = performance.now()

  const update = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    displayValue.value = Math.floor(props.from + (props.to - props.from) * progress)

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      displayValue.value = props.to
    }
  }

  requestAnimationFrame(update)
}

const observeVisibility = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        animateCount()
        hasAnimated = true
        observer.disconnect()
      }
    },
    { threshold: 0.6 } // adjust visibility threshold
  )
  if (el.value) observer.observe(el.value)
}

onMounted(() => {
  observeVisibility()
})
</script>
