<template>
    <div class="hero signup-login border-top border-bottom border-dark position-relative">

        <div class="container h-100 d-flex justify-content-center align-items-center position-relative">

          <router-link to="/" class="signup-modal-close position-absolute bg-transparent border-0 font-orelo" id="login-popup-close">X</router-link>
            
            <div :id="`complete-account-${userType}`" class="signup-login-view text-center mb-5">
                <h3 id="header" class="display-4 my-5">Complete Your Account</h3>
                <validations :errors="errors" />
                <!-- <p id="errorMessage" class="errorMessage">Not a Valid Name</p> -->
                <div class="content-wrap border-0 mx-auto">
                  <form @submit.prevent="onSubmit">
                    <div class="d-md-flex">
                      <label :for="`${userType}-first-name`" class="sr-only">First name</label>
                      <input type="text" name="firstName" placeholder="First Name" :id="`${userType}-first-name`" class="w-50" />
                      <label :for="`${userType}-last-name`" class="sr-only">Last name</label>
                      <input type="text" name="lastName" placeholder="Last Name" :id="`${userType}-last-name`" class="w-50" />
                    </div>

                    <div v-if="userType === 'influencer'" class="position-relative">
                      <span class="tool whats-this-icon position-absolute" data-tip="Please add your handle here" tabindex="1"></span>
                      <label :for="`signup-${userType}-ig-handle`" class="sr-only">Instagram username</label>
                      <input type="text" name="instagramHandle" placeholder="Instagram Handle" :id="`signup-${userType}-ig-handle`" />
                    </div>

                    <div v-if="userType === 'advertiser'">
                        <label for="signup-advertiser-company" class="sr-only">Company name</label>
                        <input type="text" name="companyName" placeholder="Company Name" id="signup-advertiser-company-name" />
                    </div>
                    
                    <input type="submit" class="btn btn-lg px-1 d-block" value="Login" />
                  </form>
                </div>
              </div>
        </div>
      </div>
</template>
<script>
import Validations from '../fields/Validations'
import ValidationMixin from '@/mixins/validationMixin'

export default {
    components: { Validations },
    mixins: [ValidationMixin],

    data () {
        return {
            userType: this.$route.params.userType
        }
    },
    methods: {
        onSubmit (e) {
            const formData = Object.fromEntries(new FormData(e.target));

            if (this.validate(formData)) {
                this.$http.put('/user/step2', formData)
                .then(res => {
                    const url = this.userType === 'advertiser' ? '/dashbboard' : '/influencer-signup/code'
                    this.$router.push(url);
                })
            }
        }
    }
}
</script>