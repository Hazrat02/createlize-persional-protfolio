<script setup>
import CountUp from './CountUp.vue';
</script>

<template>
   <!-- Start About Area -->
    <div class="about section-padding">
      <div class="container-fluid">
        <div class="about__info">
          <div class="about__left">
            <div class="section-subtitle">
              <h4>About me</h4>
              <img src="https://andreagandolfo.it/images/arrow-line.png" alt="Arrow">
            </div>
            <div class="section-title">
              <h2 class="text-fill">Ciao sono Andrea.</h2><br/>
              <h2 class="text-fill">Sono un consulente Sales & Marketing con base a Padova, specializzato nello sviluppo di strategie commerciali e di marketing ad alto impatto.</h2>
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
              <span class="timer" ><CountUp :to="15" :from="0" :duration="1000" /></span>

              <span class="timer-right">+</span>
              <div class="about__project-wrapper">
                <div class="about__project">Project Completed</div>
              </div>
            </div>
            <div class="about__client-award">
              <div class="about__client-wrapper">
                <div class="about__client">
                  <span class="timer" ><CountUp :to="99" :from="0" :duration="1000" /></span>
                  <span class="timer-right">%</span>
                </div>
                <span>Satisfied clients</span>
              </div>
              <div class="about__award-wrapper">
                <div class="about__award">
                                    <span class="timer" ><CountUp :to="4" :from="0" :duration="1000" /></span>

                </div>
                <span>Awwwwards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End About Area -->
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
