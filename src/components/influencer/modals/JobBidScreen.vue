<template>
        <div class="screen" id="bidViewScreen" @click="closeScreen('bidViewScreen')">
        <div class="screenContainer">
          <h1 @click="closeScreen('bidViewScreen')" class="right">X</h1>
          <h1 id="photoViewJobTitle">Submit Your Bid</h1>
          <p class="orangeText font-la-nord-bold">JOB DETAILS</p>
          <p class="articleJobTitle">Fitness Influencer For Protein Shake</p>
          <div class="articleJobDate">
            <div class="flexRow">
                <p>Start Date</p>
                <p>3/26/20</p>
            </div>
            <div class="flexRow">
                <p>Start Time</p>
                <p>1PM</p>
            </div>
          </div>
          <div class="articleJobDescription">
                <p class="font-la-nord-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>
                <p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>
            </div>
            <div class="rowColumns boldRowColumns">
                <div>
                    <p>$100</p>
                    <p>Budget</p>
                </div>
                <div>
                    <p>No</p>
                    <p>Coupon</p>
                </div>
                <div>
                    <p>No</p>
                    <p>Post</p>
                </div>
                <div>
                    <p>Yes</p>
                    <p>Story</p>
                </div>
                <div>
                    <p>No</p>
                    <p>Link In Bio</p>
                </div>
                <div>
                    <p>No</p>
                    <p>Custom Post</p>
                </div>
            </div>

            <div class="flexRow">
              <h1 class="orangeText font-la-nord-bold">ENTER BID*</h1>
            </div>

            <div class="flexRow bidBudgetRow">
            	<p>Campaign</p>
            	<div class="dropdownRectangle bidEnter">
            		<p class="orangeText left">$</p>
            		<input oninput="enterBid(event, this.value)" class="font-la-nord-bold" type="text" name="" placeholder="0.00">
            	</div>
            </div>

            <div class="flexRow bidBudgetRow marginTop25">
              <p>Coupon</p>
              <div class="dropdownRectangle bidEnter">
                <p class="orangeText left">$</p>
                <input oninput="enterBid(event, this.value)" class="font-la-nord-bold" type="text" name="" placeholder="0.00">
              </div>
            </div>

            <p> <span class="orangeText">MESSAGE</span> (<span class="subText">OPTIONAL</span>)</p>

            <textarea placeholder=""></textarea>

            <a class="orangeButton" @click="sendBid">Send Bid</a>

        </div>
      </div>
</template>

<script>
import ScreenMixin from '@/mixins/screenMixin'

export default {
    mixins: [ScreenMixin],
    props: {
        job: Object
    },
    methods: {
        sendBid() {
            this.closeScreen('bidViewScreen');
        }
    }
}
</script>