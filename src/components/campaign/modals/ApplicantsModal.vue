<template>
    	<div class="screenContainer viewApplicantsScreenContainer">
    		<!-- <h1> <span class="projectTitle">Project Title</span> Applicants</h1> -->

    		<div class="flexColumn">

                <Applicant v-for="influencer in influencers" :key="influencer.id" :influencer="influencer" />

    			<!-- <div class="viewApplicantContainer" id="viewApplicantClone" @click="viewApplicantPick(this)" ontouchstart="swipeRightStart(event)" ontouchend="swipeRightEnd(event)">
    				<div class="profilePic">
	                  <img src="@/assets/images/aden.jpg" class="influencerPicture">
	                </div>
	                <div class="profileStats flexColumn">
    				<div class="influencerIdentity flexRow">
    					<div class="profilePic findInfluencerStory">
		                  <img src="@/assets/images/aden.jpg" class="influencerPicture">
		                </div>
    					<div class="flexColumn">
	    					<div class="flexRow">
	    						<p class="name">Jane Doe</p>
	    						<p> - </p>
		                  		<p class="ighandle">@ighandle <img src="@/assets/icons/checkmarkBlue.png"></p>
		                  	</div>
		                  	<div class="flexRow">
			                    <img class="locationPin" src="@/assets/icons/location-pin.svg">
			                    <p class="location">San Francisco, U.S.</p>
		                    </div>
	                	</div>
		                <div class="influencerSuccess">
			                <p>90%</p>
			                <div class="successRate">
			                	<span id="successRateBar"></span>
			                </div>
			                <p>Job Success</p>
			            </div>
	                </div>
	                <div class="influencerBottomRow">
		                <div>
		                  <p>$100</p>
		                  <p>Budget</p>
		                </div>
		                <div>
		                  <p>60K</p>
		                  <p>Followers</p>
		                </div>
		                <div>
		                  <p>29%</p>
		                  <p>Engagement</p>
		                </div>
		                <div>
		                  <div>
		                    <img id="https://www.instagram.com/p/CG-j658BuTG/" src="@/assets/icons/intagram-black.png" alt="instagram" class="findInfluencerInstagram" @click="showInstagram(this, 'showInfluencerActive', event)">
		                    <img src="@/assets/icons/tiktok.svg" alt="tikTok">
		                  </div>
		                  <p>Platforms</p>
		                </div>
		                <div class="influencerSuccess">
			                <p>90%</p>
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

    			<div class="viewApplicantContainer" @click="viewApplicantPick(this)" ontouchstart="swipeRightStart(event)" ontouchend="swipeRightEnd(event)">
    				<div class="profilePic">
	                  <img src="@/assets/images/aden.jpg" class="influencerPicture">
	                </div>
	                <div class="profileStats flexColumn">
    				<div class="influencerIdentity flexRow">
    					<div class="profilePic findInfluencerStory">
		                  <img src="@/assets/images/aden.jpg" class="influencerPicture">
		                </div>
    					<div class="flexColumn">
	    					<div class="flexRow">
	    						<p class="name">Jane Doe</p>
	    						<p> - </p>
		                  		<p class="ighandle">@ighandle <img src="@/assets/icons/checkmarkBlue.png"></p>
		                  	</div>
		                  	<div class="flexRow">
			                    <img class="locationPin" src="@/assets/icons/location-pin.svg">
			                    <p class="location">San Francisco, U.S.</p>
		                    </div>
	                	</div>
                    <div class="topRatedApplicant">
                      <div class="findInfluencerTopRated"><img src="@/assets/icons/star.png"> <p class="rustText">Top Rated</p> </div>
  		                <div class="influencerSuccess">
  			                <p>90%</p>
  			                <div class="successRate">
  			                	<span id="successRateBar"></span>
  			                </div>
  			                <p>Job Success</p>
  			              </div>
                    </div>
	                </div>
	                <div class="influencerBottomRow">
		                <div>
		                  <p>$100</p>
		                  <p>Budget</p>
		                </div>
		                <div>
		                  <p>60K</p>
		                  <p>Followers</p>
		                </div>
		                <div>
		                  <p>29%</p>
		                  <p>Engagement</p>
		                </div>
		                <div>
		                  <div>
		                    <img id="https://www.instagram.com/p/CG-j658BuTG/" src="@/assets/icons/intagram-black.png" alt="instagram" class="findInfluencerInstagram" @click="showInstagram(this, 'showInfluencerActive', event)">
		                    <img src="@/assets/icons/tiktok.svg" alt="tikTok">
		                  </div>
		                  <p>Platforms</p>
		                </div>
		                <div class="influencerSuccess">
			                <p>90%</p>
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

    			<div class="profileDescription">
    				<p>Lorem Ipsum budgetur sond quancti et tu so leir det et hume el gun ipso saltium to fou undus secpti crun</p>
    			</div>

    			<div class="viewApplicantContainer" @click="viewApplicantPick(this)" ontouchstart="swipeRightStart(event)" ontouchend="swipeRightEnd(event)">
    				<div class="profilePic">
	                  <img src="@/assets/images/aden.jpg" class="influencerPicture">
	                </div>
	                <div class="profileStats flexColumn">
    				<div class="influencerIdentity flexRow">
    					<div class="profilePic">
			                <img src="@/assets/images/aden.jpg" class="influencerPicture">
			            </div>
    					<div class="flexColumn">
	    					<div class="flexRow">
	    						<p class="name">Jane Doe</p>
	    						<p> - </p>
		                  		<p class="ighandle">@ighandle</p>
		                  	</div>
		                  	<div class="flexRow">
			                    <img class="locationPin" src="@/assets/icons/location-pin.svg">
			                    <p class="location">San Francisco, U.S.</p>
		                    </div>
	                	</div>
		                <div class="influencerSuccess">
			                <p>90%</p>
			                <div class="successRate">
			                	<span id="successRateBar"></span>
			                </div>
			                <p>Job Success</p>
			            </div>
	                </div>
	                <div class="influencerBottomRow">
		                <div>
		                  <p>$100</p>
		                  <p>Budget</p>
		                </div>
		                <div>
		                  <p>60K</p>
		                  <p>Followers</p>
		                </div>
		                <div>
		                  <p>29%</p>
		                  <p>Engagement</p>
		                </div>
		                <div>
		                  <div>
		                    <img id="https://www.instagram.com/p/CG-j658BuTG/" src="@/assets/icons/intagram-black.png" alt="instagram" class="findInfluencerInstagram" @click="showInstagram(this, 'showInfluencerActive', event)">
		                    <img src="@/assets/icons/tiktok.svg" alt="tikTok">
		                  </div>
		                  <p>Platforms</p>
		                </div>
		                <div class="influencerSuccess">
			                <p>90%</p>
			                <div class="successRate">
			                	<span id="successRateBar"></span>
			                </div>
			                <p>Job Success</p>
			            </div>
		            </div>
		            </div>
	    			<div class="profileButtons">
	    				<router-link to="http://stage.ravyyn.com/payment.html" class="btn">Hire</router-link>
	    				<a class="viewApplicantChosenEditOffer btn" href="#">Edit Offer</a>
	    				<a href="#" class="btn">Message</a>
	    			</div>
	    			<p class="delete" @click="deleteViewApplicant(this)">X</p>
    			</div> -->
    		</div>

    	</div>
</template>

<script>
import ModalMixin from "@/mixins/modalMixin";
import Applicant from "@/components/campaign/Applicant"

export default {
    mixins: [ModalMixin],
    components: {
        Applicant
    },
    props: {
        campaignId: Number,
    },
    data() {
        return {
            influencers: []
        }
    },
    beforeMount() {
        this.$http.get(`/advertiser/campaign/${this.campaignId}/influencers/applied`).then(res => {
            // console.log({res})
            this.influencers = res.data.influencers;
        })
    }
}
</script>