<template>
  <div
    :class="[
      'rowFlex campaignsExtraContainer',
      showCampaignInfluencers && 'campaignsFadeDown',
    ]"
    id="campaignsExtraContainer"
  >
    <img
      id="campaignsExtraExit"
      @click="onBackArrowClick"
      src="@/assets/icons/arrow-left.svg"
    />
    <div id="campaignsExtraTitle" class="rowFlex campaignDashboardSubheader">
      <p>Influencers</p>
    </div>
    <div class="rowFlex campaignNav" id="campaignExtraNav">
      <div class="searchDashboardContainer">
        <Search
          placeholder="Search Influencers"
          :width="40"
          @on-search="onSearch"
        />
      </div>
    </div>
    <div id="campaignsExtra" class="campaignsContainer">
      <CampaignInfluencer
        v-for="influencer in influencers"
        :influencer="influencer"
        :key="influencer.id"
        :campaign="selectedCampaign"
      />

      <!-- <div id="cloneStem" class='campaignContainer'>
            		<div class='campaign columnFlex'>
              			<div class='campaignPhotos' id='campaignPhotos'>
                			<img src="" id=""/>
              			</div>
              			<div class='campaignTitle mobileFlex'>
              				<p>{{campaign.title}}</p>
              			</div>
              			<div class='campaignInfo'>
                			<img src='@/assets/icons/clock.svg' class='campaignInfoClock' id="clockcampaignNumber"/>
                			<div class='rowFlex personIconRow'>
                  				<img onclick='campaignExtraShow(this)' src='@/assets/icons/personIcon.png' class='personIcon' />
                			</div>
                			<a href='http://stage.ravyyn.com/find-influencers.html'>
                				<img src='@/assets/icons/personIconPlus.png' class='personIconPlus' />
                			</a>
                			<img src='@/assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdown(this)'/>
                			<div class="campaign-active-settings">
                				<p onclick="showScreen('shippingAddressScreen')">Ship A Product</p>
                				<p>Send Message</p>
                				<p>Review</p>
                				<p>See Instagram Post</p>
                				<p>Report</p>
                			</div>
              			</div>
            		</div>
	            	<div class='campaignTitle'>
		            	<p>{{campaign.campaignName}}</p>
	            	</div>
          		</div>
	        </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Mutations from "@/store/mutation-types";
import Search from "@/components/base/Search/Search";
import SearchMixin from "@/components/base/Search/searchMixin";
import CampaignInfluencer from "@/components/campaign/CampaignInfluencer";

export default {
  components: {
    Search,
    CampaignInfluencer,
  },
  mixins: [SearchMixin],
  data() {
    return {
      influencersRaw: [],
    };
  },
  computed: {
    ...mapGetters(["showCampaignInfluencers", "selectedCampaign"]),
    influencers() {
      return this.influencersRaw.filter((x) =>
        (`${x.firstName} ${x.lastName}`).includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    ...mapMutations({
      onBackArrowClick: Mutations.HIDE_CAMPAIGN_INFLUENCERS,
    }),
  },
  watch: {
    showCampaignInfluencers(newVal, oldVal) {
      if (newVal) {
        this.$http
          .get(
            `/advertiser/campaign/${this.selectedCampaign.id}/influencers/hired`
          )
          .then((res) => {
            // console.log({ res });
            this.influencersRaw = res.data.influencers;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.campaignExtraNav {
  display: flex;
}
</style>
