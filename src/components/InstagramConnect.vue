<template>
  <div
    class="hero signup-login influencer-signup-step border-top border-bottom border-dark position-relative"
  >
    <div
      class="container h-100 d-flex justify-content-center align-items-center position-relative"
    >
      <router-link
        to="/find-jobs"
        class="signup-modal-close position-absolute bg-transparent border-0 font-orelo"
        id="login-popup-close"
        >X</router-link
      >

      <div
        id="signup-code"
        class="signup-login-view slider-step text-center mb-5"
      >
        <InfluencerCode />
      </div>
    </div>
  </div>
</template>

<script>
import InfluencerCode from "@/components/signUp/InfluencerCode";

export default {
  components: {
    InfluencerCode,
  },
};
</script>