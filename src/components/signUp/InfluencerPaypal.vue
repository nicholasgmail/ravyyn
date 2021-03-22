<template>
  <div>
    <img
      src="../../assets/icons/paypal-logo.svg"
      alt="instagram logo"
      class="d-block mx-auto my-5 pt-3"
    />
    <h4 id="header" class="font-la-nord px-18 text-primary mb-5">
      Connect Your PayPal Account
      <span class="get-paid text-dark d-block d-xs-inline mt-2">
        (Get Paid Within 3 Days)
      </span>
    </h4>
    <p id="errorMessage" class="errorMessage">Not a Valid Email Address</p>
    <div class="content-wrap border-0 mx-auto position-relative">
      <form class="mb-5" @submit.prevent="onSubmit">
        <label for="influencer-connect-paypal-email" class="sr-only"
          >Paypal email address</label
        >
        <input
          type="email"
          name="paypal_email"
          placeholder="PayPal email"
          id="influencer-connect-paypal-email"
          required
        />
        <input
          type="submit"
          value="Connect PayPal"
          id="influencer-connect-paypal"
          class="btn btn-lg px-1 d-block"
        />
      </form>
    </div>
    <p class="text-center mb-40"><router-link to="interests" class="skip-for-now fs-sm text-primary font-poppins">Skip For Now</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      onSubmit(e) {
          const data = Object.fromEntries(new FormData(e.target));
          this.$http.put('influencer/paypal_email', { ...data })
            .then(_ => {
              // const options = {
              //   title: 'PayPal',
              //   variant: 'success',
              //   solid: true
              // };
              // this.$bvToast.toast('PayPal email address updated!', options)
              this.$router.push('interests');
            })
      }
  }
};
</script>