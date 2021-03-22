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
        <h3 id="header" class="display-4 my-5">Reset Password</h3>
        <!-- <p id="errorMessage" class="errorMessage">Not a Valid Password</p> -->
        <validations :errors="errors" />
        <div class="content-wrap border-0 mx-auto">
          <p class="px-18 m-0">Please Choose Your New Password</p>
          <span class="d-block fs-small mb-4">8 min characters</span>
          <form class="mb-5" @submit.prevent="onSubmit">
            <div class="field-wrap position-relative">
              <password-field name="newPassword" label="New Password" placeholder="New Password" />
            </div>
            <div class="field-wrap position-relative">
              <password-field name="newPasswordConfirm" label="Confirm New Password" placeholder="Confirm Password" />
            </div>
            <input
              id="save-new-password"
              class="btn btn-lg px-1 d-block"
              type="submit"
              value="Save New Password"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Validations from './fields/Validations'
import ValidationMixin from '@/mixins/validationMixin'
import PasswordField from './fields/PasswordField.vue';

export default {
  components: { Validations, PasswordField },
  mixins: [ValidationMixin],

  methods: {
    onSubmit(e) {
      const formData = Object.fromEntries(new FormData(e.target))
      const key = this.$store.getters.passwordResetKey;
      const password = formData.newPassword;

      if (formData.newPassword !== formData.newPasswordConfirm) {
        this.errors.push("Password mismatch.")
      }

      if (this.validate(formData)) {
        this.$store.dispatch('resetPassword', { password, key })
          .then(_ => this.$router.push("/login"))
      }
    }
  },
};
</script>