<template>
  <div
    class="hero signup-login start-advertising border-top border-bottom border-dark position-relative"
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
        id="sign-up-choose"
        class="signup-login-view content-wrap text-center mx-auto"
      >
        <h2 class="display-4 my-5">Sign Up With Ravyyn</h2>
        <p class="mb-4 pt-5">Choose Your Account Type</p>
        <div class="toolBox">
          <span
            class="tool whats-this-icon position-absolute"
            data-tip="Please add your handle here"
            tabindex="1"
          ></span>
        </div>
        <div
          class="w-100 d-md-flex justify-content-between flex-md-row flex-column mb-4 mb-md-5"
        >
          <button @click="checkAccountType('advertiser')" class="btn btn-lg px-1 d-block">
            Advertiser
          </button>
          <p class="m-0 d-flex align-items-center my-1 my-md-0">
            <span class="d-md-inline d-block text-center w-100">or</span>
          </p>
          <button @click="checkAccountType('influencer')" class="btn btn-lg px-1 d-block">
            Influencer
          </button>
        </div>
        <div class="sign-up-small">
          <p class="mb-3 mb-md-4 pt-4 have-account">
            Have an account?
            <router-link
              to="/login"
              class="font-la-nord-bold text-dark"
              id="has-account-btn"
              >Login</router-link
            >
          </p>
          <p class="fs-v-sm font-poppins-light">
            By using <span class="text-uppercase">Ravyyn</span> you agree to our
            <a href="#" class="text-dark underline font-weight-semibold"
              >Terms</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  computed: {
    accountTypeMissing() {
      return this.$store.getters.accountTypeMissing;
    },
    socialId() {
      return this.$store.getters.userId.toString();
    }
  },

  methods: {
    async checkAccountType(type) {

      const url = this.accountTypeMissing 
        ? await this.$store.dispatch('setAccountType', { socialId: this.socialId, type }) && `/signup/${type}/complete-account`
        : `/signup/${type}`

      this.$router.push(url);
    }
  }
}
</script>