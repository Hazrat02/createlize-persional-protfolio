<template>
    <section>
                <!-- Start About Area -->
    <div class="about section-padding">
      <div class="container-fluid">
        <div class="about__info">
          <div class="about__left" >
            <div class="section-subtitle">
              <h4>About me</h4>
              <img src="https://andreagandolfo.it/images/arrow-line.png" alt="Arrow">
            </div>
            <div class="section-title">
              <h2 class="text-fill" >Hi, I'm Hazrat Ali.</h2><br/>
              <h4 class="text-fill" ref="textFill">I'm a passionate Full-Stack Web Developer with a strong focus on building responsive, dynamic, and user-centric web applications.</h4>
              <p class="text-fill" >I'm a passionate Full-Stack Web Developer with a strong focus on building responsive, dynamic, and user-centric web applications.</p>
            </div>
            <div class="about__icon-shape">
              <img src="https://andreagandolfo.it/images/shape-square.png" alt="Shape">
            </div>
            <div class="about__award-list">
              <h3>Awards & Recognition</h3>
              <ul>
                <li>Best Web Design Award 2023 - <span>(Digital Design Awards)</span></li>
                <li>Top UX Designer 2022 - <span>(Design Excellence Awards)</span></li>
                <li>Mobile Apps Design 2020 - <span>(Design Excellence Awards)</span></li>
              </ul>
            </div>
          </div>
          <div class="about__right">
            <p>Aiuto aziende e professionisti a crescere, distinguersi sul mercato e raggiungere i propri obiettivi attraverso soluzioni efficaci, personalizzate e orientati ai risultati.</p>
            <div class="about__timer">
              <span class="timer" data-from="1" data-to="145" data-speed="5000" data-refresh-interval="50">145</span>
              <span class="timer-right">+</span>
              <div class="about__project-wrapper">
                <div class="about__project">Progetti Completati</div>
              </div>
            </div>
            <div class="about__client-award">
              <div class="about__client-wrapper">
                <div class="about__client">
                  <span class="timer" data-from="1" data-to="99" data-speed="5000" data-refresh-interval="50">99</span>
                  <span class="timer-right">%</span>
                </div>
                <span>Satisfied clients</span>
              </div>
              <div class="about__award-wrapper">
                <div class="about__award">
                  <span class="timer" data-from="1" data-to="12" data-speed="5000" data-refresh-interval="50">12</span>
                </div>
                <span>Awwwwards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic-plugin-gsap'
onMounted(async () => {
  await nextTick()

  const controller = new ScrollMagic.Controller()

  const textFills = document.querySelectorAll('.text-fill')

  textFills.forEach((el) => {
    const originalText = el.textContent.trim()
    el.innerHTML = `<span>${originalText}</span>`

    const span = el.querySelector('span')

    gsap.set(span, {
      backgroundImage: 'linear-gradient(to right, #fff 50%, #000 50%)',
      backgroundSize: '200% 100%',
      backgroundPosition: '0% 0%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    })

    const tween = gsap.to(span, {
      backgroundPosition: '100% 0%',
      ease: 'none',
      duration: 1
    })

    const height = span.offsetHeight * 2

    new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 0.8,
      duration: height
    })
      .setTween(tween)
      .addTo(controller)
  })
})
</script>

<style scoped>
.text-fill span {
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
