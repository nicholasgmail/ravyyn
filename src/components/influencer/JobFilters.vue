<template>
  <div class="filters">
    <div>
      <div class="dropdownRectangle half">
        <v-select
          :options="filterOptions.budgetOptions"
          v-model="selected.budget"
          placeholder="Budget"
        />
      </div>
      <div class="dropdownRectangle half">
        <v-select
          :options="filterOptions.postToFeedOptions"
          v-model="selected.postToFeed"
          placeholder="Post To Feed"
        />
      </div>
      <div class="dropdownRectangle half">
        <v-select
          :options="filterOptions.codeOptions"
          v-model="selected.code"
          placeholder="Code"
        />
      </div>
      <div class="dropdownRectangle half">
        <v-select
          :options="filterOptions.adOptions"
          v-model="selected.ad"
          placeholder="Custom Ad"
        />
      </div>
      <div class="dropdownRectangle full">
        <v-select
          :options="filterOptions.locationRequiredOptions"
          v-model="selected.location"
          placeholder="Location Required"
        />
      </div>
    </div>

    <div>
      <div class="dropdownRectangle full">
        <v-select
          :options="filterOptions.receiveProductOptions"
          v-model="selected.receiveProduct"
          placeholder="Receive Product"
        />
      </div>
      <div class="dropdownRectangle full">
        <v-select
          :options="filterOptions.advertiserRatingOptions"
          v-model="selected.advertiserRating"
          placeholder="Advertiser Rating"
        />
      </div>
      <div class="dropdownRectangle full">
        <v-select
          :options="filterOptions.countryOptions"
          v-model="selected.countries"
          multiple
          placeholder="Countries"
        />
      </div>

      <a class="btn" @click="applyFilters">Apply</a>
      <a class="btn" @click="clearFilters">Clear</a>
      <!-- <a href="#" class="btn" style="margin-left: auto;">Clear</a> -->
    </div>

    <img
      id="backArrowFilter"
      class="backArrow"
      @click="applyFilters"
      src="@/assets/icons/arrow-left.svg"
    />

    <!-- MOBILE FILTERS -->

    <!-- <div class="filtersMobile" id="filtersMobile">
                
                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Budget</option>
                    <option value="50">$50</option>
                    <option value="100">$100</option>
                    <option value="150">$150</option>
                </select>
                <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Story Only</option>
                    <option value="Feed Only">Feed Only</option>
                    <option value="Both">Both</option>
                </select>
                <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div class="fitlersMobileSelect">
                    <select>
                    <option disabled="" selected="">Post to Feed</option>
                    <option value="Story Only">Story Only</option>
                    <option value="Feed Only">Feed Only</option>
                    <option value="Both">Both</option>
                </select>
                    <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Custom Ad</option>
                    <option value="Feed Only">Custom Ad</option>
                    <option value="Both">Ad Provided</option>
                    <option value="both">Both</option>
                </select>
                <img src="@/assets/icons/chevron-down-sm.svg" class="right">
                </div>

                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Location Required</option>
                    <option value="high">Location Required</option>
                    <option value="low">Location Not Required</option>
                    <option value="both">Both</option>
                </select>
                <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Receive Product</option>
                    <option value="high">With Product</option>
                    <option value="low">Without Product</option>
                    <option value="both">Both</option>
                </select>
                <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Advertiser Rating</option>
                    <option value="high">1 Star</option>
                    <option value="low">2 Star</option>
                    <option value="high">3 Star</option>
                    <option value="high">4 Star</option>
                    <option value="high">5 Star</option>
                </select>
                <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div>
                <div class="filter" id="">Country</div>
                <img src="@/assets/icons/chevron-down-sm.svg">
                </div>
                
                <div class="fitlersMobileSelect">
                <select>
                    <option disabled="" selected="">Coupon</option>
                    <option value="100">Yes</option>
                    <option value="150">No</option>
                </select>
                <img class="right" src="@/assets/icons/chevron-down-sm.svg">
                </div>

            </div>

            <div id="filtersMobileParameters">
            <p id="filterParameterName">Target Audience Interests</p>
            <div id="filterParameters">
                <p>Cars</p>
                <p>Fitness</p>
                <p>Food</p>
                <p>Sports</p>
                <p>Hunting</p>
                <p>Outdoors</p>
                <p>Photography</p>
            </div>
            <div class="filterParameterExit">
                <p class="rustText" id="clearMobileFilters">Clear Filters</p>
                <p class="rustText" id="mobileFilterClose">Done</p>
            </div>
            </div> -->
  </div>
</template>

<script>
import countries from "@/data/countries";
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      selected: {
        budget: null,
        postToFeed: null,
        code: null,
        ad: null,
        location: null,
        receiveProduct: null,
        advertiserRating: null,
        countries: null,
      },

      filterOptions: {
        budgetOptions: [
          { id: 1, label: "High to Low" },
          { id: 2, label: "Low to High" },
        ],
        postToFeedOptions: [
          { id: 1, label: "Story Only" },
          { id: 2, label: "Feed Only" },
          { id: 3, label: "Both" },
        ],
        codeOptions: [
          { id: 1, label: "Yes" },
          { id: 2, label: "No" },
          { id: 3, label: "Both" },
        ],
        adOptions: [
          { id: 1, label: "Custom Ad" },
          { id: 2, label: "Private Ad" },
          { id: 3, label: "Both" },
        ],
        locationRequiredOptions: [
          { id: 1, label: "Required" },
          { id: 2, label: "Not Required" },
        ],
        receiveProductOptions: [
          { id: 1, label: "With Product" },
          { id: 2, label: "Without Product" },
          { id: 3, label: "Both" },
        ],
        advertiserRatingOptions: [
          { id: 1, label: "1 Star and below" },
          { id: 2, label: "2 Star and below" },
          { id: 3, label: "3 Star and below" },
          { id: 4, label: "4 Star and below" },
          { id: 5, label: "5 Star and below" },
        ],
        countryOptions: countries,
      },
    };
  },
  methods: {
    applyFilters() {
      this.$emit("apply-filters", this.$data.selected);
    },
    clearFilters() {
      Object.keys(this.$data.selected).forEach((key) => {
        this.$data.selected[key] = null;
      });
      this.$emit("clear-filters");
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
}

.filters >>> .vs__dropdown-toggle {
  border: none;
}
.filters >>> .v-select {
    width: 100%;
}
.filters >>> .vs__actions > svg {
  margin-left: auto;
}

.filters >>> .vs__open-indicator {
  fill: black;
}
</style>