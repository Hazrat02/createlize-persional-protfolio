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
            <div class="section-title" v-animate
            data-animation="fadeInUp animated"
            data-wow-duration="1s">
              <h2 class="text-fill">Hi, I'm Hazrat ali.</h2><br/>
              <h2 class="text-fill">A passionate Full Stack Web Developer with hands-on experience in both frontend and backend technologies.</h2>
            </div>
            <div class="about__icon-shape">
              <img src="https://andreagandolfo.it/images/shape-square.png" alt="Shape">
            </div>
            <div class="about__award-list">
              <h3>I specialize in:</h3>
              <ul>
                <li>Frontend - <span>(HTML, CSS, Bootstrap, tailwind, Vue.js, Own Package)</span></li>
                <li>Backend Development - <span>(PHP, Laravel)</span></li>
                <li>APIs & Database - <span>(REST API, MySQL)</span></li>
                <li>Dev Tools & Version Control - <span>(Git & GitHub, NPM, Composer, VS Code)</span></li>
              </ul>
            </div>
          </div>
          <div class="about__right">
            <p>With over 4 years of hands-on experience in building dynamic websites and web applications, I specialize in designing seamless digital experiences that are fast, functional, and user-friendly.</p>
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
