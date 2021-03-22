<template>
  <div
    class="hero signup-login influencer-signup-step border-top border-bottom border-dark position-relative"
  >
    <div
      class="container h-100 d-flex justify-content-center align-items-center position-relative"
    >
      <router-link
        to="/"
        class="signup-modal-close position-absolute bg-transparent border-0 font-orelo"
        id="login-popup-close"
        >X</router-link
      >

      <div
        :id="steps[currentStep]"
        class="signup-login-view slider-step text-center mb-5"
      >
        <router-link
          :to="{ name: steps[currentStep + 1]}"
          class="next-step-link"
          v-show="currentStep !== steps.length - 1"
        >
          <img
            src="../../assets/icons/arrow-right.svg"
            alt="arrow link to next step in the process"
          />
        </router-link>
        <router-link
          :to="{ name: steps[currentStep - 1]}"
          class="previous-step-link"
          v-show="currentStep !== 0"
        >
          <img
            src="../../assets/icons/arrow-left.svg"
            alt="arrow link to previous step in the process"
          />
        </router-link>

        <router-view></router-view>

        <ul class="slide-dots d-flex justify-content-between">
          <li v-for="(item, index) in steps" :key="index">
            <template v-if="index === currentStep">
              <span class="sr-only">Current Page</span>
              <span class="dot active"></span>
            </template>
            <template v-else>
              <router-link :to="{ name: item }">
                <span class="dot"></span>
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0,
      steps: ["signup-code", "advertiser-connect-paypal", "signup-interests"]
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.currentStep = this.steps.indexOf(this.$router.currentRoute.name);
      }
    }
  }

};
</script>