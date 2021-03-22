
<template>
  <button class="btn-fb-lg position-relative" @click="onBtnClick">
    <img
      src="@/assets/icons/icon-awesome-facebook-f.svg"
      alt="Facebook icon"
      class="fb-icon position-absolute"
    />
    {{ signup ? "Sign up with Facebook" : "Login with Facebook" }}
  </button>
</template>
<script>
export default {
  name: "FBLogin",

  props: {
    signup: Boolean
  },

  methods: {
     onBtnClick() {
      window.FB.login(async response => {
        if (response.authResponse) {
          console.log({ response });

          let url;
          if (this.signup) {
            const type = this.$route.params.userType;
            const payload = {
              socialId: response.authResponse.userID,
              type: type
            }

            await this.$store.dispatch('setAccountType', payload);
            url = `/signup/${type}/complete-account`;
          }
          else {
            const payload = {
              socialId: response.authResponse.userID,
              accessToken: response.authResponse.accessToken
            };

            url = await this.$store.dispatch("socialLogin", payload);
          }
          
          this.$router.push(url);

        } else {
          alert('Error logging in with FB. Please try again later.');
          console.log("User cancelled FB login or did not fully authorize.");
        }
      });
    }
  },
  created() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: process.env.VUE_APP_FB_APPID,
        cookie: true, // This is important, it's not enabled by default
        autoLogAppEvents: true,
        xfbml: true,
        version: "v10.0"
      });

      // FB.getLoginStatus(response => {
      //     console.log({response})
      //     const payload = {
      //       accessToken: response.authResponse.accessToken,
      //       socialId: response.authResponse.userID
      //     };

      //     this.login(payload);
      // });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>