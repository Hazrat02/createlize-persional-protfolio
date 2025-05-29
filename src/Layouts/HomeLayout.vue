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
  <header class="header header-one">
        <div class="container-fluid">
          <div class="header__wrapper">
            <div class="header__social">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://andreagandolfo.it/images/header/facebook.svg" alt="Facebook">
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://andreagandolfo.it/images/header/twitter.svg" alt="Twitter">
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://andreagandolfo.it/images/header/instagram.svg" alt="Instagram">
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://andreagandolfo.it/images/header/dribbble.svg" alt="Dribbble">
              </a>
            </div>
            <!-- Start Logo -->
            <a class="logo" href="index.html">
              <img src="https://andreagandolfo.it/images/logo/logo.svg" alt="logo">
            </a>
            <!-- End Logo -->
            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
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
</template>
<script>
// import axios from "axios";
// import { isAuthenticated, logout } from "./../middleware/index";
// import { useAuthUserStore } from "./../stores/user";

export default {
  components: {},
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

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }
  },

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

<style>
.active {
  color: rgb(43, 169, 188) !important;
}
</style>