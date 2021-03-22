<template>
        <div class="screen" id="couponScreen">
        <div class="screenContainer">
            
          <h1 @click="closeScreen('couponScreen')" class="right">X</h1>
          <h1 id="photoViewJobTitle">Discount Code Info</h1>

          <div class="flexColumn childrenMargin20Vert">

            <div class="dropdownRectangle">
              <input value="Paste Discount Code">
              <button onclick="copyToClipBoard(this)" id="copy-influencer-ig-code-btn" class="bg-white"><span class="sr-only">Button to copy instagram code to clipboard</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(207, 118, 98);">
                  <path id="Icon_awesome-link" data-name="Icon awesome-link" d="M15.31,8.69a7.121,7.121,0,0,1,.017,10.059l-.017.017-3.15,3.15A7.125,7.125,0,1,1,2.084,11.84L3.823,10.1a.749.749,0,0,1,1.279.5,8.637,8.637,0,0,0,.454,2.471.754.754,0,0,1-.177.779l-.613.613a3.375,3.375,0,1,0,4.742,4.8l3.15-3.15a3.374,3.374,0,0,0,0-4.773,3.511,3.511,0,0,0-.485-.4.752.752,0,0,1-.326-.591,1.867,1.867,0,0,1,.548-1.4l.987-.987a.753.753,0,0,1,.965-.081,7.148,7.148,0,0,1,.962.806Zm6.606-6.607a7.133,7.133,0,0,0-10.076,0L8.69,5.234l-.017.017a7.126,7.126,0,0,0,.979,10.865.753.753,0,0,0,.965-.081l.987-.987a1.867,1.867,0,0,0,.548-1.4.752.752,0,0,0-.326-.591,3.511,3.511,0,0,1-.485-.4,3.374,3.374,0,0,1,0-4.773l3.15-3.15a3.375,3.375,0,1,1,4.742,4.8l-.613.613a.754.754,0,0,0-.177.779A8.638,8.638,0,0,1,18.9,13.4a.749.749,0,0,0,1.279.5l1.739-1.739a7.133,7.133,0,0,0,0-10.076Z" transform="translate(0 0)"></path>
              </svg>
              </button>
              <p id="ig-code-copied" class="">Code copied to clipboard!</p>
            </div>
            
            <div class="dropdownRectangle">
              <input value="URL For Product">
              <button onclick="copyToClipBoard(this)" id="copy-influencer-ig-code-btn" class="bg-white"><span class="sr-only">Button to copy instagram code to clipboard</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(207, 118, 98);">
                  <path id="Icon_awesome-link" data-name="Icon awesome-link" d="M15.31,8.69a7.121,7.121,0,0,1,.017,10.059l-.017.017-3.15,3.15A7.125,7.125,0,1,1,2.084,11.84L3.823,10.1a.749.749,0,0,1,1.279.5,8.637,8.637,0,0,0,.454,2.471.754.754,0,0,1-.177.779l-.613.613a3.375,3.375,0,1,0,4.742,4.8l3.15-3.15a3.374,3.374,0,0,0,0-4.773,3.511,3.511,0,0,0-.485-.4.752.752,0,0,1-.326-.591,1.867,1.867,0,0,1,.548-1.4l.987-.987a.753.753,0,0,1,.965-.081,7.148,7.148,0,0,1,.962.806Zm6.606-6.607a7.133,7.133,0,0,0-10.076,0L8.69,5.234l-.017.017a7.126,7.126,0,0,0,.979,10.865.753.753,0,0,0,.965-.081l.987-.987a1.867,1.867,0,0,0,.548-1.4.752.752,0,0,0-.326-.591,3.511,3.511,0,0,1-.485-.4,3.374,3.374,0,0,1,0-4.773l3.15-3.15a3.375,3.375,0,1,1,4.742,4.8l-.613.613a.754.754,0,0,0-.177.779A8.638,8.638,0,0,1,18.9,13.4a.749.749,0,0,0,1.279.5l1.739-1.739a7.133,7.133,0,0,0,0-10.076Z" transform="translate(0 0)"></path>
              </svg>
              </button>
              <p id="ig-code-copied" class="">Code copied to clipboard!</p>
            </div>

            <div class="flexRow spaceBetween bidEnter full">
              <h1 class="orangeText font-la-nord-bold">BID</h1><div class="dropdownRectangle bidEnter">
                <p class="orangeText">$</p>
                <p>85.00</p>
              </div>
            </div>

            <div class="flexColumn">
              <label class="top-label d-block bg-custom-light border border-dark m-0 text-left labelDescription">Product Description</label>
              <textarea id="campaign-description" placeholder="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"></textarea>
            </div>

          </div>

        </div>
      </div>
</template>

<script>
import ScreenMixin from '@/mixins/screenMixin'

export default {
    mixins: [ScreenMixin]
}
</script>