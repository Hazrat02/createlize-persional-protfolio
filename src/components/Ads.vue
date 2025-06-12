<template>
  <div v-if="isVisible" class="popup-overlay">
    <div
      class="popup-container"
      v-animate
      data-animation="flipInX animated"
      data-wow-duration="1s"
    >
      <!-- Close Button -->
      <button class="close-button" @click="closePopup">&times;</button>

      <!-- Ad Image -->
      <img
        src="./../assets/frontend/img/ads.png"
        alt="Ad"
        class="popup-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupAd",
  props: {
    initialVisibility: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: this.initialVisibility,
    };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
      this.$emit("close");
    },
  },
   mounted() {
    // Show popup after 10 seconds (10000 milliseconds)
    setTimeout(() => {
      this.isVisible = true;
    }, 10000);
  },
};
</script>

<style scoped>
/* Overlay for the popup */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.737);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Container for the popup content */
.popup-container {
  position: relative;
  width: 90%;
  max-width: 600px;
  background-color: transparent;
  border-radius: 10px;
  border-top-right-radius: 14px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
}

/* Ad Image */
.popup-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Close Button */
.close-button {
  position: absolute;
  top: 0px;
  right: 0px;
  background: white;
  color: black;
  border: none;
  border-radius: 50%;
  border-top-left-radius: 20%;
  font-size: 1.8rem;
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 10;
  line-height: 1;
}
</style>
