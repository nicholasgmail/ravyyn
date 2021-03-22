<template>
  <div>
    <div
      class="mobile-menu-overlay position-fixed"
      :class="{ active: mobileMenuActive }"
    ></div>
    <header class="bg-custom-light" id="top">
      <div class="container">
        <nav class="navbar navbar-expand-lg px-0">
          <a class="navbar-brand text-dark" href="/">
            <h1 class="text-uppercase display-5 m-0">Ravyyn</h1>
          </a>
          <button
            class="navbar-toggler p-0"
            @click="openMenu"
            type="button"
            data-target="#main-nav-mobile"
            aria-controls="main-nav-mobile"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar w-100" id="main-nav">
            <ul class="navbar-nav w-100">
              <li class="nav-item active">
                <a class="nav-link" href="#advertiser">Advertiser</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#influencer">Influencer</a>
              </li>
              <li v-if="!isLoggedIn" class="nav-item ml-auto">
                <router-link to="/login" class="nav-link">Log In</router-link>
              </li>
              <li v-if="!isLoggedIn" class="nav-item">
                <router-link
                  to="/signup"
                  class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn"
                >
                  Sign Up For Free!
                </router-link>
              </li>
              <li v-if="isLoggedIn" class="nav-item account has-dropdown">
                <button
                  @click="campaignDropdown($event.target)"
                  class="nav-link bg-transparent border-0 text-uppercase accountLink"
                >
                  Account<img src="@/assets/icons/chevron-down-sm.svg" />
                </button>
                <div class="campaign-active-settings">
                  <p @click="showScreen('accountSettingsScreen')">
                    Account Settings
                  </p>
                  <!-- <router-link to="/favorites">Favorites</router-link> -->
                  <p @click="showScreen('paypalSettingsScreen')">Paypal</p>
                  <router-link to="/instagram-connect"
                    >Relink Instagram</router-link
                  >
                  <p @click="logout">Sign Out</p>
                  <!-- <p @click="showScreen('accountSettingsScreen')">Account Settings</p> 
                  <a href="http://stage.ravyyn.com/favorites.html">Favorites</a> 
                  <p @click="showScreen('paypalSettingsScreen')">Paypal</p> 
                  <a href="http://stage.ravyyn.com/instagram-connect.html">Relink Instagram</a> 
                  <a @click="logout">Sign Out</a> -->
                </div>
              </li>
            </ul>
          </div>

          <!-- Mobile view -->
          <div
            class="w-100 d-flex"
            id="main-nav-mobile"
            :class="{ active: mobileMenuActive }"
          >
            <button
              class="position-absolute"
              id="menu-close-btn"
              @click="closeMenu"
            >
              <span class="sr-only">Menu close button</span>
            </button>
            <div class="navbar p-0 h-100">
              <ul class="navbar-nav w-100 h-100">
                <div
                  class="top-section bg-white border-bottom border-dark pb-3"
                >
                  <li class="nav-item active">
                    <a class="nav-link" href="#advertiser" @click="closeMenu"
                      >Advertisers</a
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link display-5 ls-3">
                      FAQ
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/contact-us"
                      class="nav-link display-5 ls-3"
                    >
                      Contact
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/blog"
                      class="nav-link text-capitalize display-5 ls-3"
                    >
                      Blog
                    </router-link>
                  </li>
                </div>
                <div class="lower-section bg-custom-light h-100">
                  <li v-if="!isLoggedIn" class="nav-item">
                    <router-link to="login" class="nav-link"
                      >Log In</router-link
                    >
                  </li>
                  <li v-if="!isLoggedIn" class="nav-item">
                    <router-link
                      to="signup"
                      class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn"
                    >
                      Sign Up For Free!
                    </router-link>
                  </li>
                </div>
              </ul>
            </div>
            <div @click="closeMenu" class="outside"></div>
          </div>
        </nav>
      </div>
    </header>
    <AccountSettingsScreen />
    <PaypalSettingsScreen />
  </div>
</template>

<script>
import ScreenMixin from '@/mixins/screenMixin'
import AccountSettingsScreen  from '@/components/modals/AccountSettingsScreen'
import PaypalSettingsScreen  from '@/components/modals/PaypalSettingsScreen'


export default {
  name: "Header",
  mixins: [ScreenMixin],
  components: {
    AccountSettingsScreen,
    PaypalSettingsScreen
  },

  data() {
    return {
      mobileMenuActive: false,
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    closeMenu() {
      this.mobileMenuActive = false;
    },
    openMenu() {
      this.mobileMenuActive = true;
    },
    campaignDropdown(button) {
      const mobile = false;
      const showScreenActive = false;
      let campaignDropdownActive = false;

      if (mobile === true && showScreenActive === false) {
        //MOBILE

        if (campaignDropdownActive === true) {
          campaignDropdownActive = false;
          document
            .querySelector(".dropdownCampaignShow")
            .classList.toggle("dropdownCampaignShowMobile");
        }

        button.nextElementSibling.insertAdjacentHTML(
          "afterBegin",
          '<p id="mobileDropdownTitle">Project Title</p>'
        );
        button.nextElementSibling.innerHTML +=
          "<p onclick='dropdownMobileClose()' id='mobileDropdownCancel'>Cancel</p>";

        button.nextElementSibling.classList.toggle(
          "dropdownCampaignShowMobile"
        );

        document.getElementById("mobileScreen").onclick = function () {
          setTimeout(function () {
            dropdownMobileClose();
          }, 50);
        };

        mobileDropdownActivate = false;

        showScreen("mobileScreen");
      } else {
        //DESKTOP

        //IF ACTIVATING A NORMAL DROPDOWN WITHIN A MOBILE SCREEN
        if (
          campaignDropdownActive === true &&
          showScreenActive === true &&
          mobile === true
        ) {
          mobileDropdownActivate = true;
          campaignDropdownActive = false;
        }

        //REGULAR DESKTOP DROPDOWN
        if (campaignDropdownActive === true) {
          campaignDropdownActive = false;
          document
            .querySelector(".dropdownCampaignShow")
            .classList.toggle("dropdownCampaignShow");
        }

        button.nextElementSibling.classList.toggle("dropdownCampaignShow");
        button.nextElementSibling.focus();
      }

      //TRIGGER TO CLOSE ON BODY CLICK
      setTimeout(() => {
        campaignDropdownActive = true;
      }, 50);
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },

  watch: {
    $route(to, from) {
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
.account {
  margin-left: auto;
}
</style>