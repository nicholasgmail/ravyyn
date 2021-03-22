<template>
  <div
    class="hero signup-login border-top border-bottom border-dark position-relative"
  >
    <div
      class="container h-100 d-flex justify-content-center align-items-center"
    >
      <div
        id="complete-account-advertiser"
        class="signup-login-view text-center mb-5"
      >
        <h3 id="header" class="display-4 my-5">Forgot Password?</h3>
        <!-- <p id="errorMessage" class="errorMessage">Not a Valid Email Address</p> -->
        <validations :errors="errors" />
        <div class="content-wrap border-0 mx-auto">
          <p class="mb-5 px-18">Enter email to reset password</p>
          <form class="mb-5" @submit.prevent="onSubmit">
            <label for="forgot-pass-email" class="sr-only"
              >Your Email Address</label
            >
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="forgot-pass-email"
            />
            <input
              type="submit"
              value="Reset Password"
              id="send-reset-pw-link"
              class="btn btn-lg px-1 d-block"
            />
          </form>
          <div class="login-small font-poppins">
            <p class="font-poppins-light text-center">
              Back to
              <router-link
                to="/login"
                class="font-weight-bold text-dark"
                id="back-to-login"
                >Login</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Validations from './fields/Validations'
import ValidationMixin from '@/mixins/validationMixin'

export default {
  components: { Validations },
  mixins: [ValidationMixin],

  methods: {
    onSubmit(e) {
      const formData = Object.fromEntries(new FormData(e.target));
      if (this.validate(formData)) {
        this.resetPassword(formData);
      }
    },
    resetPassword(formData) {
      this.$store.dispatch('forgotPassword', formData.email )
        .then(res => {
          res.data.status 
            ? this.$router.push("/reset-password")
            : console.error(res.data);
        });
    }
  },
};
</script>