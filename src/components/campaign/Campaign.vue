<template>
  <div class="campaignContainer">
    <div class="campaign columnFlex">
      <div class="campaignPhotos" id="campaignPhotos" 
          @mouseover="imgHover = true"
          @mouseleave="imgHover = false">
        <img
          :class="{ filter: imgHover }"
          :src="campaignImg"
        />
        <div
          v-show="imgHover"
          class="imgHover flex-column center"
          @click="onImgClick"
        >
          <p>Remaining: {{ campaign.remaining }}</p>
          <p>Budget: {{ campaign.budget }}</p>
        </div>
      </div>
      <div class="campaignTitle mobileFlex">
        <p>{{ campaign.campaignName }}</p>
        <p>{{ campaigDateTime }}</p>
      </div>
      <div class="campaignInfo" v-click-outside="clickOutside">
        <img
          id="clock0"
          src="@/assets/icons/clock.svg"
          class="campaignInfoClock"
          @mouseover="clockInfoHover = true"
          @mouseleave="clockInfoHover = false"
        />
        <div class="rowFlex personIconRow">
          <img class="personIcon" src="@/assets/icons/personIcon.png" />{{
            campaign.influencersHired.length
          }}
        </div>
        <router-link to="/find-influencers">
          <img src="@/assets/icons/personIconPlus.png" class="personIconPlus" />
        </router-link>
        <img
          src="@/assets/icons/ellipsis.svg"
          class="campaignInfoElipsis"
          @click="dropdownCampaignShow = !dropdownCampaignShow"
        />
        <div
          :class="[
            'campaign-active-settings',
            dropdownCampaignShow && 'dropdownCampaignShow',
          ]"
        >
          <!-- <p @click="showScreen('viewJobScreen')">Campaign Settings</p> -->
          <p v-b-modal.campaignSettingsModal>Campaign Settings</p>
          <!-- <p @click="showScreen('viewApplicantsScreen')">Applicants</p> -->
          <p v-b-modal.applicantsModal>Applicants</p>

          <router-link to="/find-influencers">Keep Hiring</router-link>
          <!-- <p @click="showScreen('shippingAddressScreen')">Ship A Product</p> -->
          <p v-b-modal.shippingAddressModal>Ship A Product</p>

          <p>Discount Code</p>
          <p>Clone Job Post</p>
          <!-- <p @click="showScreen('moveFolderScreen')">Move To Folder</p> -->
          <p v-b-modal.moveFolderModal>Move to Folder</p>
        </div>
        <div class="clockInfo" v-show="clockInfoHover">
          <div class="clockTime">
            <div>
              <h1>{{ remaningEditWindow.hours() }}</h1>
              <p>Hours</p>
            </div>
            <div>
              <h1>{{ remaningEditWindow.minutes() }}</h1>
              <p>Minutes</p>
            </div>
            <div>
              <h1>{{ remaningEditWindow.seconds() }}</h1>
              <p>Seconds</p>
            </div>
          </div>
          <div class="clockEditWindow">
            <img src="@/assets/icons/clock.svg" />
            <p>2 Hour Edit Window</p>
          </div>
        </div>
      </div>
    </div>
    <div class="campaignTitle">
      <p>{{ campaign.campaignName }}</p>
      <p>{{ campaigDateTime }}</p>
    </div>

  <!-- MODALS -->

  <b-modal id="campaignSettingsModal" size="lg" scrollable hide-footer body-class="center p-0">
    <CampaignSettingsModal />
  </b-modal>
  
  <b-modal id="applicantsModal" :title="`${campaign.campaignName} Applicants`" size="xl" scrollable hide-footer body-class="center p-0">
    <ApplicantsModal :campaignId="campaign.id" />
  </b-modal>

  <b-modal id="shippingAddressModal" size="lg" scrollable hide-footer body-class="center p-0">
     <ShippingAddressModal />
  </b-modal>

  <b-modal id="moveFolderModal" title="Move to Folder" size="md" scrollable hide-footer body-class="center p-0">
     <MoveFolderModal />
  </b-modal>

  </div>
</template>

<script>
import CampaignSettingsModal from '@/components/campaign/modals/CampaignSettingsModal'
import ApplicantsModal from '@/components/campaign/modals/ApplicantsModal'
import ShippingAddressModal from '@/components/campaign/modals/ShippingAddressModal'
import MoveFolderModal from '@/components/campaign/modals/MoveFolderModal'

import ClickOutside from "vue-click-outside";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export default {
  components: {
    CampaignSettingsModal,
    ApplicantsModal,
    ShippingAddressModal,
    MoveFolderModal
  },
  directives: {
    ClickOutside,
  },
  props: {
    campaign: Object,
    media: Array,
  },
  data() {
    return {
      imgHover: false,
      clockInfoHover: false,
      dropdownCampaignShow: false,
    };
  },
  computed: {
    campaigDateTime() {
      const date = dayjs(this.campaign.startDate).format("M/DD/YY");
      const time = dayjs(
        this.campaign.startDate + "T" + this.campaign.startTime
      ).format("h:mm A");
      return `${date} - ${time}`;
    },
    campaignImg() {
      if (this.media.length) {
        return this.media[0].imageUrl;
      }
      return null;
    },
    remaningEditWindow() {
      const x = dayjs();
      const y = dayjs().add(1000, "s");
      const duration = dayjs.duration(y.diff(x));
      return duration;
    },
  },
  methods: {
    onImgClick(e) {
      this.$store.dispatch('showCampaignInfluencers', this.campaign);
    },
    clickOutside() {
        this.dropdownCampaignShow=false;
    }
  },
};
</script>

<style lang="scss" scoped>

.imgHover {
  display: flex;
  position: absolute;
  top: 0;
  color: white;
}
.filter {
  filter: brightness(50%);
}

.option {
  color: black;
  background: white;
  border: 2px solid black;
  border-bottom: none;
  padding: 10px 15px;
  margin: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
}
.option:last-child {
  border-bottom: 2px solid black;
}
.option:hover {
  color: black;
  background: #ececec;
}

@media only screen and (max-width: 730px) {
  .campaignInfo {
    justify-content: unset;
    position:unset;
    left: 0;
    align-items: center;
  }
}

</style>
