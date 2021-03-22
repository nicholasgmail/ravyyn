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
        id="start-advertising-advertiser"
        class="signup-login-view text-center mb-5"
      >
        <h2 id="header" class="display-4 my-5">
          Start Advertising With <span class="text-uppercase">Ravyyn</span>
        </h2>
        <!-- <p id="errorMessage" class="errorMessage">Not a Valid Email Address</p> -->
        <validations :errors="errors" />
        <div class="content-wrap border-0 mx-auto">
          <FBLogin signup />
          <p class="my-3">or</p>
          <form @submit.prevent="onSubmit">
            <label for="email" class="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div class="field-wrap position-relative">
              <password-field />
            </div>
            <input
              type="submit"
              value="Create Account"
              id="advertiser-create-account-btn"
              class="btn btn-lg px-1 d-block"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PasswordField from "@/components/fields/PasswordField";
import Validations from '@/components/fields/Validations'
import ValidationMixin from '@/mixins/validationMixin'
import FBLogin from '@/components/FBLogin'


export default {
  name: "SignUp",

  components: { PasswordField, Validations, FBLogin },
  mixins: [ValidationMixin],

  methods: {
    onSubmit(e) {
      const type = this.$route.params.userType;
      const formData = Object.fromEntries(new FormData(e.target));
    
      if (this.validate(formData)){
          // this.$router.push(`/signup/${type}/complete-account`);
          this.$store
            .dispatch("register", { ...formData, type })
            .then((res) => {
              if (res.data.status) {
                this.$router.push(`/signup/${type}/complete-account`);
              }
            })
            .catch(console.err);
      }
    },
  },
};
</script>