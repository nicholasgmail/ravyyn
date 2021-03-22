<template>
  <div
    class="hero signup-login border-top border-bottom border-dark position-relative"
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

      <div id="login" class="signup-login-view text-center mb-5">
        <h2 id="header" class="display-4 my-5 text-center">
          Log Into <span class="text-uppercase">Ravyyn</span>
        </h2>
        <!-- <p id="errorMessage" class="errorMessage">Not a Valid Email Address</p> -->
        <validations :errors="errors" />
        <div class="content-wrap border-0 mx-auto">
          <FBLogin />
          <p class="mb-3">or</p>
          <form @submit.prevent="onSubmit">
            <label for="email" class="sr-only">Your Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <div class="field-wrap position-relative">
              <password-field />
            </div>
            <input
              id="submit"
              type="submit"
              value="Login"
              class="btn btn-lg px-1 d-block mb-2"
            />
          </form>
          <div
            class="login-small font-poppins d-flex justify-content-between mt-3"
          >
            <p class="font-poppins-light">
              No Account?
              <router-link to="signup" class="font-weight-bold text-dark"
                >Sign up</router-link
              >
            </p>
            <p>
              <router-link
                to="forgot-password"
                class="text-dark underline font-weight-bold text-decoration-none"
                id="forgot-password-btn"
                >Forgot Password?</router-link
              >
            </p>
          </div>
          <p class="fs-v-sm font-poppins-light mt-3">
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
import PasswordField from '@/components/fields/PasswordField'
import Validations from '@/components/fields/Validations'
import FBLogin from '@/components/FBLogin'
import ValidationMixin from '@/mixins/validationMixin'
import { getUserRedirectURL } from '@/utils'

export default {
  name: "Login",
  
  components: {
    PasswordField,
    Validations,
    FBLogin
  },

  mixins: [ValidationMixin],

  methods: {
    onSubmit (e) {
      const formData = Object.fromEntries(new FormData(e.target));

      if(this.validate(formData))
        this.login(formData)
    },
    login (formData) {
      this.$store
        .dispatch("login", formData)
        .then(res => {
          const status = res.data.loginStatus;
          const userType = res.data.redirect;
          const url = getUserRedirectURL(status, userType);
          this.$router.push(url);
        })
    }
  }
};
</script>
