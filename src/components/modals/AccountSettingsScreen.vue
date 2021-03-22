<template>
        <div class="screen" id="accountSettingsScreen">
      <div class="screenContainer">
        <h1 @click="closeScreen('accountSettingsScreen')" class="right">X</h1>
        
        <div class="viewJobNav">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'accountOverviewSettings')">Overview</a>
          <a class="viewJobNavA" @click="menuSettingsChange($event.target, 'accountAppearanceSettings')">Appearance
          </a>
          <a class="viewJobNavA" @click="menuSettingsChange($event.target, 'accountSizingSettings')">Sizing
          </a>
          <a class="viewJobNavA" @click="menuSettingsChange($event.target, 'accountShippingSettings')">Shipping
          </a>
        </div>

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'accountOverviewSettings')">Overview</a>
          <img @click="mobileViewJobClose($event.target)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>
        

        <div class="menuSettings" id="accountOverviewSettings">

          <div class="dropdownRectangle" @click="toggleFilter($event.target)">
            <p>Recieve Products from Clients <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span> </p>
            <div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
          </div>
          <div class="dropdownRectangle">
            <div class="flexRow">
              <input type="text" value="" placeholder="Phone Number" id="" class="phoneNumberInput">
              <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span>
            </div>
          </div>
          <div class="dropdownRectangle" @click="toggleFilter($event.target)">
            <p>Recieve SMS Updates <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span> </p>
            <div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
          </div>
          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half dateOfBirthFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half">
              <p>Time Zone</p>
              <img class="arrow" src="@/assets/icons/Icon map-location-arrow.svg">
            </div>
          </div>
          <a class="orangeButton" @click="showScreen('accountSettingsScreen')">Save</a>
        </div>

        <!-- START ACCOUNT APPEARANCE SETTINGS -->

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'accountAppearanceSettings')">Appearance</a>
          <img @click="mobileViewJobClose($event.target)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>

        <div class="menuSettings displayNone" id="accountAppearanceSettings">

          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half">
              <select>
                <option disabled="" selected="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
              </select>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half hairColorFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>
          <div class="dropdownRectangle heightFilters">
            <img src="@/assets/icons/chevron-down-sm.svg">
          </div>
          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half bodyTypeFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half eyeColorFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>
          <div class="dropdownRectangle strongestVisualAssetFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
          </div>
          <a class="orangeButton" @click="showScreen('accountSettingsScreen')">Save</a>
        </div>

        <!-- START ACCOUNT SIZING SETTINGS -->

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'accountSizingSettings')">Sizing</a>
          <img @click="mobileViewJobClose($event.target)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>

        <div class="menuSettings displayNone" id="accountSizingSettings">

          <p class="accountSubheading">(Optional)</p>

          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half shoeSizeMaleFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half shirtSizeFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>
          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half waistMaleFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half hatSizeFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>
          <div class="dropdownRectangle waistFemaleFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
          </div>
          <a class="orangeButton" @click="showScreen('accountSettingsScreen')">Save</a>
        </div>

        <!-- START ACCOUNT SHIPPING SETTINGS -->

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event.target, 'accountShippingSettings')">Shipping</a>
          <img @click="mobileViewJobClose($event.target)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>

        <div class="menuSettings displayNone" id="accountShippingSettings"> 
          <!-- viewJobAdvertisementSettings -->
          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half">
              <input type="text" value="" placeholder="First Name" id="">
            </div>
            <div class="dropdownRectangle half">
              <input type="text" value="" placeholder="Last Name" id="">
            </div>
          </div>
          <div class="dropdownRectangle">
            <input type="text" value="" placeholder="Street Address" id="">
          </div>
            <div class="dropdownRectangle">
            <input type="text" value="" placeholder="APT / SUIT / OTHER" id="">
          </div>
          <div class="flexRow spaceBetween">
            <div class="dropdownRectangle half">
              <input type="text" value="" placeholder="City" id="">
            </div>
            <div class="dropdownRectangle half">
              <select><option disabled="" selected="">States</option>undefined<option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>
          <div class="flexRow spaceBetween marginBottom25">
            <div class="dropdownRectangle half">
              <input type="text" value="" placeholder="Zip Code" id="">
            </div>
            <div class="dropdownRectangle half countryListFilters">
              <img src="@/assets/icons/chevron-down-sm.svg" class="right">
            </div>
          </div>
          <a class="orangeButton" @click="saveSettings()">Save</a>
        </div>

        <div class="viewJobMobileSave">
          <a class="orangeButton" @click="saveSettings('accountSettingsScreen')">Save</a>
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
            $event.target.closeScreen('accountSettingsScreen')
        }
    }
}

</script>