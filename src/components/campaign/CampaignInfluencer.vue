<template>
  <div
    v-if="influencer && campaign"
    class="campaignContainer influencerCard"
    @click="showBorder = !showBorder"
  >
    <div :class="['campaign columnFlex', showBorder && 'borderBlackBold']">
      <div class="campaignPhotos">
        <img :src="influencer.profilePic" />
        <p class="left photoButton">&lt;</p>
        <p class="right photoButton">&gt;</p>
        <div class="photoButtonCount">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="campaignTitle mobileFlex">
        <p>{{infleuncerName}}</p>
        <p>{{campaign.campaignName}}</p>
        <div class="rowColumns boldRowColumns">
          <div>
            <p>{{campaign.budget}}</p>
            <p>Budget</p>
          </div>
          <div>
            <p>{{campaign.discountCodeUse | YesNo}}</p>
            <p>Code</p>
          </div>
          <div>
            <p>{{campaign.postToFeed | YesNo}}</p>
            <p>Post</p>
          </div>
          <div>
            <p>{{campaign.postToStory | YesNo}}</p>
            <p>Story</p>
          </div>
          <div>
            <p>{{campaign.addLinkToBio | YesNo}}</p>
            <p>Link In Bio</p>
          </div>
        </div>
      </div>
      <div class="campaignInfo">
        <p>{{infleuncerName}}</p>
        <img
          src="@/assets/icons/ellipsis.svg"
          class="campaignInfoElipsis"
          @click="e => e.target.nextElementSibling.classList.toggle('dropdownCampaignShow')"
        />
        <div class="campaign-active-settings">
          <p onclick="showScreen('shippingAddressScreen')">Ship A Product</p>
          <p>Send Message</p>
          <p onclick="showScreen('inviteJobScreen')">Move</p>
          <p onclick="showScreen('reviewScreen')">Review</p>
          <p>See Instagram Post</p>
          <p>Add to Favorites</p>
          <a onclick="showScreen('reportScreen')">Report</a>
        </div>
      </div>
    </div>
    <div class="campaignTitle">
      <div>
            <p>{{campaign.budget}}</p>
            <p>Budget</p>
          </div>
          <div>
            <p>{{campaign.discountCodeUse | YesNo}}</p>
            <p>Code</p>
          </div>
          <div>
            <p>{{campaign.postToFeed | YesNo}}</p>
            <p>Post</p>
          </div>
          <div>
            <p>{{campaign.postToStory | YesNo}}</p>
            <p>Story</p>
          </div>
          <div>
            <p>{{campaign.addLinkToBio | YesNo}}</p>
            <p>Link In Bio</p>
          </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        influencer: Object,
        campaign: Object
    },
    data() {
      return {
        showBorder: false
      }
    },
    computed: {
      infleuncerName() {
        return this.influencer.firstName + ' ' + this.influencer.lastName
      }
    },
    methods: {
        influencerClick(digit0, digit1, digit2, digit3, influencer, name, title){
            
            // dashNumberChange(digit0, digit1, digit2, digit3);
            // influencer.children[0].classList.toggle("borderBlackBold");

            // document.getElementById("dashboardSubtitleName").innerText = name + " - ";
            // document.getElementById("dashboardSubtitleTitle").innerText = title;

            // document.getElementById("dashboardSubtitleNameMobile").innerText = name + " - ";
            // document.getElementById("dashboardSubtitleTitleMobile").innerText = title;

        }
    }
}
</script>

<style lang="scss" scoped>
    .influencerCard {
      
        display: block;
        img {
          transform:unset;
        }
    }
</style>