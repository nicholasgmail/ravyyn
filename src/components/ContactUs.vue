<template>
  <main role="main">
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
          id="complete-account-advertiser"
          class="signup-login-view text-center mb-5"
        >
          <!-- complete account advertiser -->
          <h3 id="header" class="display-4 my-5">Contact</h3>
          <!-- <p id="errorMessage" class="errorMessage">Not a Valid Name</p> -->
          <validations :errors="errors" />
          <div class="content-wrap border-0 mx-auto">
            <form @submit.prevent="onSubmit">
              <div class="d-md-flex">
                <label for="contact-first-name" class="sr-only"
                  >First Name</label
                >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  id="contact-first-name"
                  class="w-50"
                />
                <label for="contact-last-name" class="sr-only">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  id="contact-last-name"
                  class="w-50"
                />
              </div>
              <div class="position-relative">
                <label for="contact-email" class="sr-only">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="contact-email"
                />
              </div>
              <label for="contact-message" class="sr-only">Message</label>
              <textarea
                name="message"
                id="contact-message"
                placeholder="Message"
              ></textarea>

              <input
                type="submit"
                value="Send"
                id="submit"
                class="btn btn-lg px-1 d-block"
              />
              <!-- <a id="submit" href="/index.html" class="btn btn-lg px-1 d-block">Send</a> -->
            </form>
          </div>
        </div>
        <!-- end complete account advertiser -->
      </div>
    </div>
  </main>
</template>

<script>
import ValidationMixin from "@/mixins/validationMixin";
import Validations from "@/components/fields/Validations";

export default {
  components: {
    Validations,
  },
  mixins: [ValidationMixin],

  methods: {
    async onSubmit(e) {
      const formData = Object.fromEntries(new FormData(e.target));

      if (this.validate(formData)) {
        await this.$http.post("/contact/add", formData);
        const options = {
          title: "Contact Us",
          variant: "success",
          solid: true,
        };
        this.$bvToast.toast("Message sent!", options);
        e.target.reset();
      }
    },
  },
};
</script>