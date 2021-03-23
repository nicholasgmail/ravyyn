<template>
  <div
    id="create-campaign"
    class="userAdStart new-campaign-step content-wrap text-center mx-auto position-relative create-campaign displayBlock"
  >
    <!-- back btn mobile
              <button class="modal-back position-absolute bg-transparent border-0" onclick="newCampaignPreviousSlide(this)"><span class="sr-only">back to previous slide</span></button>
              -->

    <div class="step-wrap w-100 h-100 d-flex justify-content-center">
      <div class="wrap w-100">
        <h2 class="display-4 mb-5 mt-0 uploadTitles">
          {{ name ? name : "Campaign" }}
        </h2>
        <p class="marginBottom25">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <form class="mb-3">
          <label
            v-if="screen_fr"
            for="campaign-name"
            class="sr-only uploadTitles"
            id="campaignName"
            >Campaign Name</label
          >
          <input
            v-if="screen_fr"
            type="text"
            v-model="name"
            name="campaign-name"
            placeholder="Campaign Name*"
          />
          <div
            v-if="screen_fr"
            class="dropdownRectangle"
            style="margin-bottom: 20px; text-align: left"
          >
            <p>Include Product</p>
            <div class="float-right text-right">
              <b-form-checkbox
                v-model="product"
                name="check-button"
                size="lg"
                switch
              >
              </b-form-checkbox>
            </div>
          </div>
          <div
            v-if="screen_fr"
            class="dropdownRectangle"
            style="margin-bottom: 20px; text-align: left"
          >
            <p>Discount Code</p>
            <div class="float-right text-right">
              <b-form-checkbox
                v-model="discount"
                name="check-button"
                size="lg"
                switch
              ></b-form-checkbox>
            </div>
          </div>
          <!-- <div class="dropdownRectangle" onclick="toggleFilter(this)" style="margin-bottom: 20px;text-align: left;">
                      <p>Include Product</p>
                      <div class="dropDownToggle right"><span class="dropDownToggleCircle"></span></div>
                    </div> -->

          <!-- <div class="dropdownRectangle discountToggleUserAd" onclick="discountCodeStartUserAd(this)" style="margin-bottom: 20px;text-align: left;">
                      <p>Discount Code</p>
                      <div class="dropDownToggle right"><span class="dropDownToggleCircle"></span></div>
                    </div> -->
          <!-- 3st screen -->
          <create-campaign-screen-3 v-if="screen_discount_code" />
          <!-- end 3st Upload or Create modal -->
          <b-button
            id="new-campaign-details-submit"
            class="btn btn-lg"
            @click="next"
            >Post Job</b-button
          >
        </form>
        <ul class="slide-dots d-flex justify-content-between">
          <li class="dot-wrap">
            <span class="dot" v-bind:class="{ active: isActive }"></span>
          </li>
          <li class="dot-wrap">
            <span class="dot" v-bind:class="{ active: isActiveNext }"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      product: false,
      discount: false,
      isActive: true,
      isActiveNext: false,
      screen_fr: true,
      screen_discount_code: false,
    };
  },
  components: {
    CreateCampaignScreen3: () =>
      import("@/components/dashboard/modal/CreateCampaignScreen3"),
  },
  async mounted() {
    console.log(this.getName);
  },
  computed: { ...mapGetters(["getName"]) },
  watch: {
    discount: function () {
      if (this) {
        this.screen_fr = false;
        this.screen_discount_code = true;
        this.isActive = false;
        this.isActiveNext = true;
      }
      console.log(this.$store.state);
    },
    product: function () {
      console.dir(this.$store.state);
    },
    name: function () {
      this.updateName();
    },
  },
  methods: {
    ...mapActions(["addToStateName"]),
    quickApply() {},
    next() {},
    updateName() {
      this.addToStateName({'name': this.name});
      console.dir(this.getName);
    },
  },
};
</script>