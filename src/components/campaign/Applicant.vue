<template>
  <div
    class="viewApplicantContainer"
    id="viewApplicantClone"
    @click="viewApplicantPick(this)"
    ontouchstart="swipeRightStart(event)"
    ontouchend="swipeRightEnd(event)"
  >
    <div class="profilePic">
      <img :src="influencer.profilePic" class="influencerPicture" />
    </div>
    <div class="profileStats flexColumn">
      <div class="influencerIdentity flexRow">
        <div class="profilePic findInfluencerStory">
          <img :src="influencer.profilePic" class="influencerPicture" />
        </div>
        <div class="flexColumn">
          <div class="flexRow">
            <p class="name">{{ infleuncerName }}</p>
            <p>-</p>
            <p class="ighandle">
              @{{ influencer.instagramHandle }}
              <img
                v-if="influencer.isVerified"
                src="@/assets/icons/checkmarkBlue.png"
              />
            </p>
          </div>
          <div class="flexRow">
            <img class="locationPin" src="@/assets/icons/location-pin.svg" />
            <!-- <p class="location">{{influencer.location}}}</p> -->
            <p class="location">San Francisco, U.S.</p>
          </div>
        </div>
        <div class="topRatedApplicant">
          <div class="findInfluencerTopRated">
            <img v-if="!!influencer.topRated" src="@/assets/icons/star.png" />
            <p class="rustText">Top Rated</p>
          </div>
          <div class="influencerSuccess">
            <p>{{ influencer.jobSuccess }}%</p>
            <div class="successRate">
              <span id="successRateBar"></span>
            </div>
            <p>Job Success</p>
          </div>
        </div>
      </div>
      <div class="influencerBottomRow">
        <div>
          <p>{{ influencer.budget }}</p>
          <p>Budget</p>
        </div>
        <div>
          <p>{{ influencer.followedBy }}</p>
          <p>Followers</p>
        </div>
        <div>
          <p>{{ influencer.engagement }}%</p>
          <p>Engagement</p>
        </div>
        <div>
          <div>
            <img
              id="https://www.instagram.com/p/CG-j658BuTG/"
              src="@/assets/icons/intagram-black.png"
              alt="instagram"
              class="findInfluencerInstagram"
              @click="showInstagram(this, 'showInfluencerActive', event)"
            />
            <img src="@/assets/icons/tiktok.svg" alt="tikTok" />
          </div>
          <p>Platforms</p>
        </div>
        <div class="influencerSuccess">
          <p>{{ influencer.jobSuccess }}%</p>
          <div class="successRate">
            <span id="successRateBar"></span>
          </div>
          <p>Job Success</p>
        </div>
      </div>
    </div>
    <div class="profileButtons">
      <a href="http://stage.ravyyn.com/payment.html" class="btn">Hire</a>
      <a class="viewApplicantChosenEditOffer btn" href="#">Edit Offer</a>
      <a href="#" class="btn">Message</a>
    </div>
    <p class="delete" @click="deleteViewApplicant(this)">X</p>
  </div>
</template>

<script>
export default {
  props: {
    influencer: Object,
  },
  computed: {
    infleuncerName() {
      return this.influencer.firstName + " " + this.influencer.lastName;
    },
  },
};
</script>
