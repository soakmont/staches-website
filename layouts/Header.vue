<template>
  <!-- Start Navbar Area -->
  <header id="header" :class="['headroom', { 'is-sticky': isSticky }]">
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <NuxtLink class="navbar-brand" to="/">
            <img
              src="~/assets/img/staches-logo.png"
              alt="StachesNFT Logo"
              class="staches-logo"
            />
          </NuxtLink>
          <b-collapse
            class="collapse"
            id="navbarSupportedContent"
            is-nav
          ></b-collapse>
          <div class="others-option">
            <Web3Wallet/>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>

<script>

import Web3Wallet from "~/components/Web3Wallet";
export default {
  name: "Header",
  data() {
    return {
      isSticky: false,
    };
  },
  components: {
      Web3Wallet
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      // eslint-disable-next-line no-console
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>

<style>
.staches-logo {
  width: 145px;
  margin: 10px 0px;
}

@media all and (max-width: 500px) {
  .others-option .btn {
    padding: 12px 24px;
  }
}
</style>
