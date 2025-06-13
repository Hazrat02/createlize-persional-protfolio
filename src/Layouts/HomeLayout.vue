<template>
  <!-- <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a> -->
  <!-- preloader Start -->
  <!-- <div id="preloader" v-if="this.$isLoading()">
    <div id="status">
      <img
        style="border-radius: 100px"
        src="./../assets/frontend/images/banner/loader.gif"
        id="preloader_image"
        alt="loader"
      />
    </div>
  </div> -->
  <body>
    <AnimateBG />
    <PopupAd />

    <header class="header header-one">
      <div class="container-fluid">
        <div class="header__wrapper">
          <div class="header__social">
            <a
              v-animate
              data-animation="bounceInDown animated"
              data-wow-duration="1s"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              v-animate
              data-animation="bounceInDown animated"
              data-wow-duration="1.3s"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              v-animate
              data-animation="bounceInDown animated"
              data-wow-duration="1.6s"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              v-animate
              data-animation="bounceInDown animated"
              data-wow-duration="1.9s"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-telegram"></i>
            </a>
          </div>
          <!-- Start Logo -->
          <a class="logo" href="index.html">
            <img
              style="width: 200px"
              src="https://createlize.com/wp-content/uploads/2025/01/createlize-logo-2.png"
              alt="logo"
            />
          </a>
          <!-- End Logo -->
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Start Navbar -->
            <div class="navbar-collapse">
              <ul class="navbar-nav">
                <li class="menu-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="menu-item">
                  <a href="about.html">About Me</a>
                </li>
                <li class="menu-item">
                  <a href="portfolio.html">Projects</a>
                </li>
                <li class="menu-item">
                  <a href="services.html">Services</a>
                </li>
                <li class="menu-item">
                  <a href="blog.html">Blog</a>
                </li>
                <li class="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <!-- End Navbar -->
            <div class="header__btn">
              <a href="contact.html" class="btn">
                <span data-text="Let's Talk">Let's Talk!</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <slot />
    <!-- footer -->
    <footer class="footer">
      <span class="footer-shape-1 d-flex rounded-pill"></span>
      <span class="footer-shape-2 d-flex rounded-pill"></span>
      <span class="footer-shape-3 d-flex rounded-pill"></span>
      <span class="footer-shape-4 d-flex rounded-pill"></span>
      <div class="container">
        <div 
          class="d-flex overflow-hidden justify-content-between align-items-center schedule-info bg-white rounded-3 gap-3 flex-wrap"
        >
          <h3 style="color: black !important;"  v-animate
              data-animation="fadeInLeft animated"
              data-wow-duration="0.5s">
            Build your First Website with Createlize team
          </h3>
          <div
            class="d-flex align-items-center gap-2 flex-wrap"
            v-animate
              data-animation="fadeInRight animated"
              data-wow-duration="0.5s"
          >
     
            <a href="" class="btn btn-outline-one"
              >Schedule a Demo</a
            >
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <div class="footer-logo mb-3">
              <a
                ><img
                  src="https://createlize.com/wp-content/uploads/2025/01/createlize-logo-2.png"
                  alt="img"
              /></a>
              <p class="text-white">
                10 unique HTML Dashboards showcasing advanced layout features
                built with Latest Technology
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-6 footer-links">
            <ul class="mb-3">
              <li class="mb-3">
                <a href="javascript:void(0);">Regular License</a>
              </li>
              <li class="mb-3">
                <a href="javascript:void(0);">Extended License</a>
              </li>
              <li><a href="javascript:void(0);">Logs</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-3 col-6">
            <div class="d-flex align-items-center mb-3 fw-medium fs-14">
              <a href="" class="me-2 flex-shrink-0"
                ><img src="https://preadmin.dreamstechnologies.com/assets/img/icons/elite-author.svg" alt="img"
              /></a>
              <p class="fw-medium text-orange">Elite Author</p>
            </div>
            <div class="d-flex align-items-center mb-3 fw-medium fs-14">
              <a href="" class="me-2 flex-shrink-0"
                ><img src="https://preadmin.dreamstechnologies.com/assets/img/icons/trendsetter.svg" alt="img"
              /></a>
              <p class="fw-medium text-info">Trendsetter</p>
            </div>
            <div class="d-flex align-items-center mb-3">
              <a
                href=""
                class="me-2 flex-shrink-0 fw-medium fs-14"
                ><img src="https://preadmin.dreamstechnologies.com/assets/img/icons/author-level.svg" alt="img"
              /></a>
              <p class="fw-medium text-maroon">Author Level</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="copy-right">
                <p class="text-white fs-14">
                  &copy; 2025 Createlize, All Rights Reserved
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="social-icons">
                <a
                  href="https://www.facebook.com/dreamstechnologieslimited/"
                  class="avatar me-2 rounded-2 avatar-sm"
                  target="_blank"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
                <a
                  href="https://www.instagram.com/dreamstechnologieslimited/"
                  class="avatar me-2 rounded-2 avatar-sm"
                  target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
                <a
                  href="https://www.behance.net/dreamstechnologies"
                  class="avatar me-2 rounded-2 avatar-sm"
                  target="_blank"
                  ><i class="fa-brands fa-behance"></i
                ></a>
                <a
                  href="https://twitter.com/dreamstechltd"
                  class="avatar me-2 rounded-2 avatar-sm"
                  target="_blank"
                  ><i class="fa-brands fa-twitter"></i
                ></a>
                <a
                  href="https://pinterest.com/dreamguystech"
                  class="avatar me-2 rounded-2 avatar-sm"
                  target="_blank"
                  ><i class="fa-brands fa-pinterest-p"></i
                ></a>
                <a
                  href="https://www.linkedin.com/company/dreamstechnologies"
                  class="avatar rounded-2 avatar-sm"
                  target="_blank"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer -->
  </body>
</template>
<script>
import AnimateBG from "./../components/AnimateBG.vue";
import PopupAd from "./../components/Ads.vue"; // Adjust the path as needed
// import axios from "axios";
// import { isAuthenticated, logout } from "./../middleware/index";
// import { useAuthUserStore } from "./../stores/user";

export default {
  components: { AnimateBG, PopupAd },
  data() {
    // return {
    //   authUser: "",
    //   showSidebar: false,
    //   faqId: 1,
    // };
  },
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    sideShow() {
      if (this.showSidebar == true) {
        return "sidebar rotateInDownLeft ";
      } else {
        return "";
      }
    },
  },

  // async created() {
  //   if (isAuthenticated() == true) {
  //     // auth user data +++++++++++++++++++++++++++++

  //     const userStore = useAuthUserStore();
  //     const authUser = userStore.authUser;

  //     if (authUser) {
  //       this.authUser = authUser;
  //     } else {
  //       // userStore.reSetAuthUser();
  //       this.authUser = await userStore.reSetAuthUser();
  //     }
  //   } else {
  //     this.authUser = "";
  //   }
  // },

  // methods: {
  //   faq(id) {
  //     if (id === this.faqId) {
  //       this.faqId = 0;
  //     } else {
  //       this.faqId = id;
  //     }
  //   },
  //   sidebar() {
  //     if (this.showSidebar == true) {
  //       this.showSidebar = false;
  //     } else {
  //       this.showSidebar = true;
  //     }
  //   },
  //   async logout() {
  //     this.$setLoading(true);
  //     logout();
  //     await axios
  //       .post("api/auth/logout")
  //       .then((response) => {
  //         this.$setLoading(false);

  //         this.$toast.info(response.data.message);

  //         // Change the authenticated value to false

  //         this.$router.push("/login");
  //       })
  //       .catch((error) => {
  //         this.$setLoading(false);
  //         this.$toast.error(error.response.data.message);
  //       });
  //     this.$setLoading(false);
  //   },
  // },
};
</script>

