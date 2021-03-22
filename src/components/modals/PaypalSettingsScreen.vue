<template>
        <div class="screen" id="paypalSettingsScreen">
      <div class="screenContainer">
        <h1 @click="closeScreen('paypalSettingsScreen')" class="right">X</h1>
        
        <div class="viewJobNav">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'paypalOverviewSettings')">Paypal</a>
          <a class="viewJobNavA" @click="menuSettingsChange($event.target, 'paypalHistorySettings')">Payment History
          </a>
        </div>

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'paypalOverviewSettings')">Paypal</a>
          <img @click="mobileViewJobClose($event.target)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>
        

        <div class="menuSettings" id="paypalOverviewSettings">
          <div class="accountProfileImage">
            <img src="@/assets/icons/paypal-logo.svg">
          </div>

          <p>Enter PayPal Email and receive payments directly to your PayPal account <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span></p>

          <div class="dropdownRectangle">
            <div class="flexRow center">
              <input type="text" value="" placeholder="Email" id="">
            </div>
          </div>
          <a class="orangeButton" @click="showScreen('paypalSettingsScreen')">Save</a>
        </div>

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'paypalHistorySettings')">Payment History</a>
          <img @click="mobileViewJobClose($event.target)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>

        <div class="menuSettings displayNone" id="paypalHistorySettings"> 
          <!-- paypal Payment History Settings -->
          <div class="flexColumn">
            <div class="paypalPaymentArticle">
              <div class="flexRow">
                <p class="font-la-nord-bold">FITNESS INFLUENCER FORPROTEIN SHAKER</p>
                <p>- CLIENT NAME</p>
              </div>
              <div class="flexRow">
                <p class="orangeText paymentAmount">$500</p>
                <p>MARCH 26, 2020</p>
              </div>
            </div>
            <div class="paypalPaymentArticle">
              <div class="flexRow">
                <p class="font-la-nord-bold">FITNESS INFLUENCER FORPROTEIN SHAKER</p>
                <p>- CLIENT NAME</p>
              </div>
              <div class="flexRow">
                <p class="orangeText paymentAmount">$500</p>
                <p>MARCH 26, 2020</p>
              </div>
            </div>
            <div class="paypalPaymentArticle">
              <div class="flexRow">
                <p class="font-la-nord-bold">FITNESS INFLUENCER FORPROTEIN SHAKER</p>
                <p>- CLIENT NAME</p>
              </div>
              <div class="flexRow">
                <p class="orangeText paymentAmount">$500</p>
                <p>MARCH 26, 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div class="viewJobMobileSave">
          <a class="orangeButton" @click="saveSettings">Save</a>
        </div>

      </div>
    </div>
</template>

<script>
import ScreenMixin from '@/mixins/screenMixin'

export default {
    mixins: [ScreenMixin],
    methods: {
        saveSettings() {
            this.closeScreen('paypalSettingsScreen')
        }
    }
}
</script>