<template>
  <HomeLayout>
<about />
<section class="skills-area page-section scroll-to-page container" id="skills">
                    <div class="custom-container">
                        <div class="skills-content content-width">
                            <div class="section-header">
                        
                                <h1 class="scroll-animation" v-animate
            data-animation="fadeInUp animated"
            data-wow-duration="o.3s">My <span>Advantages</span></h1>
                            </div>
        
                            <div class="row skills text-center mt-3">
                                <div class="col-md-3 scroll-animation" v-animate
            data-animation="fadeInLeft animated"
            data-wow-duration="0.4s">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img src="https://wpriverthemes.com/HTML/drake/assets/images/figma.png" alt="Figma">
                                            <h1 class="percent">92%</h1>
                                        </div>
                                        <p class="name">Figma</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation"  v-animate
            data-animation="fadeInDown animated"
            data-wow-duration="0.6s">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img src="https://wpriverthemes.com/HTML/drake/assets/images/framer.png" alt="Framer">
                                            <h1 class="percent">85%</h1>
                                        </div>
                                        <p class="name">Framer</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation"  v-animate
            data-animation="fadeInUp animated"
            data-wow-duration="0.6s">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img src="https://wpriverthemes.com/HTML/drake/assets/images/webflow.png" alt="Webflow">
                                            <h1 class="percent">80%</h1>
                                        </div>
                                        <p class="name">Webflow</p>
                                    </div>
                                </div>

                                
                                <div class="col-md-3 scroll-animation"  v-animate
            data-animation="fadeInUp animated"
            data-wow-duration="0.6s">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img src="https://wpriverthemes.com/HTML/drake/assets/images/laravel.png" alt="Laravel/PHP">
                                            <h1 class="percent">90%</h1>
                                        </div>
                                        <p class="name">Laravel/PHP</p>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </section>
  </HomeLayout>
</template>

<script setup>

import HomeLayout from "./../Layouts/HomeLayout.vue";
import About from "./../components/about.vue";

</script>

<style >
  /* 13 - Skills */
.skills-area {
    padding-top: 90px;
    padding-bottom: 40px;
}
.skills .skill {
    margin-bottom: 50px;
}
.skills .skill .skill-inner {
    border: 2px solid #565656;
    border-radius: 85px;
    padding: 54px 0 48px 0;
    margin-bottom: 20px;
    transition: .3s;
}
.skills .skill:hover .skill-inner {
    border-color: var(--primary_color);
}
.skills .skill .skill-inner img {
    display: block;
    margin: auto auto 29px auto;
}
.skills .skill .skill-inner h1 {
    font-size: 30px;
    color: var(--primary_color);
    font-weight: 300;
    margin: 0;
}
.skills .skill p {
    font-size: 14px;
    color: #fff;
    margin: 0;
}



</style>