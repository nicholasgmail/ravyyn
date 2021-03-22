<template>
  <main class="main">      

    <div class="border-top columnFlex dashboardCampaignContainer">

      <div class="rowFlex justifyEnd dashboardNewCampaignBtnContainer">
        <a href="#" onclick="newCampaignButton()" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn">
          New Campaign
        </a>
      </div>
      
      <div class="rowFlex dashboardSubtitle">
        <p><span class="font-la-nord-bold" id="dashboardSubtitleName">ALL CAMPAIGNS</span><span id="dashboardSubtitleTitle"></span></p>
      </div>
      <div class="mobileFlex dashboardMobileHeader">
        <p><span class="font-la-nord-bold" id="dashboardSubtitleNameMobile">ALL CAMPAIGNS</span><span id="dashboardSubtitleTitleMobile"></span></p>
        <a href="#" id="newCampaignButtonMobile" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn" onclick="newCampaignButtonMobile()">
          New Campaign
        </a>
      </div>
      <div class="rowFlex dashboardDataTypesMobile">
        <div class="dashboardDataTypesSelected dashboardDataType">
          <p>ENGAGEMENT RATE</p>
        </div>
        <div class="dashboardDataType">
          <p>CPE</p>
        </div>
        <div class="dashboardDataType">
          <p>CTR</p>
        </div>
        <div class="dashboardDataType">
          <p>CLICKS</p>
        </div>
        <div class="dashboardDataType">
          <p>STORY VIEWS</p>
        </div>
        <div class="dashboardDataType">
          <p>TOTAL SAVES</p>
        </div>
        <div class="dashboardDataType">
          <p>TOTAL LIKES</p>
          </div>
        <div class="dashboardDataType">
          <p>TOTAL COMMENTS</p>
        </div>
      </div>

      <div class="columnFlex dashboardDataContainer">
        <div class="dashboardDataTypesContainer">
          <div class="rowFlex dashboardDataTypes">

            <span
              :class="statsRibbonClasses"
              class="dashboardDataTypeRibbon"
              id="dataRibbon"
            ></span>

            <div
              v-for="(stat, index) of stats"
              :key="index"
              @click="setStatSelected(index)"
              class="dashboardDataType"
            >
              <p>{{stat.title}}</p>
            </div>

          </div>
          <p class="right"></p>
        </div>

        <div class="columnFlex dashboardData">
          <p id="dashboardSelectedStat">
            {{statSelected.title}}
          </p>

          <div class="animation-wrap position-relative animation-card">

          <div class="animated-numbers-wrap orelo d-flex justify-content-center">
                
                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNumStart"
                      class="position"
                      :class="[
                        `dashboardStartInt${statSelected.value[0] === '$' ? 'Dollar' : statSelected.value[0]}`
                      ]"
                    >
                      <span class="blank">_</span>
                      <span>$</span>
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span class="blank">_</span>
                    </div>
                </div>

                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNum1"
                      class="position"
                      :class="[
                        `dashboardMiddleInt${statSelected.value[1] === '$' ? 'Dollar' : statSelected.value[1]}`
                      ]"
                    >    
                        <span class="blank">_</span>    
                        <span>0</span>    
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span class="blank">_</span>
                    </div>
                </div>

                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNum2"
                      class="position"
                      :class="[
                        `dashboardMiddleInt${statSelected.value[2] === '.' ? (statSelected.value[3] === '$' ? 'Dollar' : statSelected.value[3]) : (statSelected.value[2] === '$' ? 'Dollar' : statSelected.value[2])}`
                      ]"
                    >            
                      <span class="blank">_</span>    
                      <span>0</span>    
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span class="blank">_</span>
                    </div>

                    <span
                      class="position-absolute dot"
                      :style="{
                        animation: statSelected.value[2] === '.' ? '1s linear 0s 1 normal forwards running dotAnimation' : '1s linear 0s 1 normal forwards running dotAnimationHide'
                      }"
                    >.</span>
                </div>

                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNumEnd"
                      class="position"
                      :class="[
                        `dashboardEndInt${statSelected.value[2] === '.' ? (statSelected.value[4] === '$' ? 'Dollar' : statSelected.value[4] === '%' ? 'Percent' : statSelected.value[4]) : (statSelected.value[3] === '$' ? 'Dollar' : statSelected.value[3] === '%' ? 'Percent' : statSelected.value[3])}`
                      ]"
                    >            
                      <span class="blank">_</span> 
                      <span>%</span>   
                      <span>0</span>    
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span class="blank">_</span>
                    </div>
                </div>
    
                </div>

            </div>

        </div>
      </div>
    </div>


    <section class="border-bottom dashboardCampaigns columnFlex">

      <div class="rowFlex campaignsExtraContainer" id="campaignsExtraContainer" >
        <img id="campaignsExtraExit" src="@/assets/icons/arrow-left.svg">
        <div id="campaignsExtraTitle" class="rowFlex campaignDashboardSubheader">
          <p>Influencer</p>
        </div>
        <div class="rowFlex campaignNav" id="campaignExtraNav">
        <div class="searchDashboardContainer">
          <input type="search" class="searchDashboard" placeholder="Search Influencers">
          <img src="@/assets/icons/search-small.svg">
        </div>
      </div>
        <div id="campaignsExtra" class="campaignsContainer">

          <div id="cloneStem" class='campaignContainer'>
              <div class='campaign columnFlex'>
                  <div class='campaignPhotos' id='campaignPhotos'>
                    <img src="" id=""/>
                  </div>
                  <div class='campaignTitle mobileFlex'>
                    <p>campaign.title</p>
                    <p>campaign.subtitle</p>
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
                <p>campaign.title</p>
                <p>campaign.subtitle</p> 
              </div>
            </div>
        </div>

      </div>

      

      <div class="rowFlex campaignDashboardSubheader">
        <p id="activeCampaignTitle">CAMPAIGNS</p>
      </div>
      <div class="flexColumn campaignNav">
        <div class="flexRow spaceBetween">
          <img class="sortHighLow" src="@/assets/icons/arrow-up-down.jpg">
          <div class="searchDashboardContainer">
          <input type="search" class="searchDashboard" placeholder="Search Campaigns">
          <img src="@/assets/icons/search-small.svg">
          </div>
          <img class="mobileIcon dashboardMobileSortIcon" src="@/assets/icons/arrow-up-down.jpg" onclick="showScreen('inviteJobScreen')">
          <img src="@/assets/icons/folderUpload.png" onclick="showScreen('createFolderScreen')" class="folderUploadIcon keepRightDesktop">

          <r-drop-down
            class="dropdownDashboardContainer"
          >
            <template #header="{ toggle }">
              <div
                @click="toggle"
              >
                <input
                  id="sortBy"
                  name="date-completed"
                  placeholder="Sort By"
                  class="dropdownDashboard"
                  style="pointer-events: none;"
                >
                <img src="@/assets/icons/chevron-down-sm.svg">
              </div>
            </template>

            <p>Date Completed</p>
            <p>Date Created</p>
            <p>Budget</p>
            <p>Enagement Rate</p>
            <p># Of Influencers</p>
          </r-drop-down>

        </div>

        <div class="flexRow dashboardMenu">

          <p
            v-for="(tab, index) of tabs"
            :key="index"
            @click="setTabSelected(index)"
            :class="getTabsButtonClasses(index)"
            class="campaignNavType"
          >{{tab.title}}</p>

        </div>
      </div>
      <div class="rowFlex campaignsContainer" id="campaigns">

        <div class="campaignContainer activeNoFolderCampaign">
          <div class="campaign columnFlex">

            <div class="campaignPhotos" id="campaignPhotos0">
              <div class="campaignImageInfo">
                <p>Remaining: 100</p>
                <p>Budget: 500</p>
              </div>

              <img src="@/assets/images/userPhotos/userPhoto1.jpg" alt="">
            </div>

            <div class="campaignTitle mobileFlex">
              <p>Project Title</p>
              <p>3/26/20 - 1pm</p>
            </div>

            <div class="campaignInfo">
              
            </div>

          </div>
        </div>

      </div>

    </section>

    <iframe id="newCampaign" src=""></iframe>

  <!-- BEGIN ACCOUNT SETTINGS HTML -->

  <div class="screen" id="accountSettingsScreen" onclick="closeScreen( event)">
    <div class="screenContainer">
      <h1 onclick="showScreen('accountSettingsScreen')" class="right">X</h1>
      
      <div class="viewJobNav">
        <a class="viewJobNavA viewJobNavSelected" onclick="menuSettingsChange(this, 'accountOverviewSettings')">Overview</a>
        <a class="viewJobNavA" onclick="menuSettingsChange(this, 'accountShippingSettings')">Shipping</a>
      </div>

      <div class="viewJobNavMobile">
        <a onclick="menuSettingsChange(this, 'accountOverviewSettings')" class="viewJobNavA viewJobNavSelected">Overview</a>
        <img onclick="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
      </div>
      

      <div class="menuSettings" id="accountOverviewSettings">
        <div class="accountProfileImage">
          <img class="accountIcon" src="@/assets/icons/accountIcon.png">
          <img class="accountCamera" src="@/assets/icons/accountCamera.png">
        </div>

        <div class="dropdownRectangle">
          <div class="flexRow">
            <input type="text" value="" placeholder="Phone Number" id="" class="phoneNumberInput">
            <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span>
          </div>
        </div>
        <div class="dropdownRectangle" onclick="toggleFilter(this)">
          <p>Recieve SMS Updates <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span> </p>
          <div class="dropDownToggle right"><span class="dropDownToggleCircle"></span></div>
        </div>
        <div class="dropdownRectangle">
          <p>Time Zone</p>
          <img class="right" src="@/assets/icons/Icon map-location-arrow.svg">
        </div>
        <a class="orangeButton" onclick="showScreen('accountSettingsScreen')">Save</a>
      </div>

      <!-- START VIEW JOB POST ADVERTISEMENT SETTINGS -->

      <div class="viewJobNavMobile">
        <a onclick="menuSettingsChange(this, 'accountShippingSettings')" class="viewJobNavA viewJobNavSelected">Shipping</a>
        <img onclick="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
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
        <a class="orangeButton" onclick="showScreen('accountSettingsScreen')">Save</a>
      </div>

      <div class="viewJobMobileSave">
        <a class="orangeButton" onclick="showScreen('accountSettingsScreen')">Save</a>
      </div>

    </div>
  </div>

  <!-- END ACOUNT SETTINGS HTML -->



  <!-- BEGIN CREATE NEW FOLDER HTML -->

  <div class="screen" id="createFolderScreen" onclick="closeScreen(event)">
    <div class="creatFolderContainer">
      <div class="creatFolderContainerTitle">
        <p>Create Folder</p>
        <p id="createNewFolderClose" onclick="showScreen('createFolderScreen')">X</p>
      </div>
      <div class="creatFolderContainerContent">
        <input id="createNewFolderName" type="text" name="createNewFolder" placeholder="Folder Name">
        <a onclick="createNewFolder()" class="createButton">Create Folder</a>
      </div>
    </div>
  </div>

  <!-- END CREATE NEW FOLDER HTML -->

  <!-- BEGIN MOVE FOLDER HTML -->

  <div class="screen" id="moveFolderScreen" onclick="closeScreen(event)">
    <div class="creatFolderContainer">
      <div class="creatFolderContainerTitle">
        <p>Move to Folder</p>
        <p onclick="showScreen('moveFolderScreen')">X</p>
      </div>
      <div class="creatFolderContainerContent">
        <div class="moveFolderContainer dropdownDiv" onclick="campaignDropdownShow(this, 'moveToFolder')">
            <input name="date-completed" placeholder="Choose Folder" class="dropdownDashboard" style="pointer-events: none;" id="folderChoice">
            <img src="@/assets/icons/chevron-down-sm.svg">
        </div>
        <a href="#" onclick="moveToFolder()" class="createButton">Move to Folder</a>
      </div>
    </div>
  </div>

  <!-- END CREATE NEW FOLDER HTML -->





  <!-- BEGIN VIEW JOB SETTINGS HTML -->

  <div class="screen" id="viewJobScreen" onclick="closeScreen(event)">
    <div class="screenContainer">
      <h1 onclick="showScreen('viewJobScreen')" class="right">X</h1>
      
      <div class="viewJobNav">
        <a class="viewJobNavA viewJobNavSelected" onclick="menuSettingsChange(this, 'viewJobOverviewSettings')">Overview</a>
        <a class="viewJobNavA" onclick="menuSettingsChange(this, 'viewJobAdvertisementSettings')">Advertisement Settings</a>
        <a class="viewJobNavA" onclick="menuSettingsChange(this, 'viewJobInfluencerSettings')">Influencer Settings</a>
      </div>

      <div class="viewJobNavMobile">
        <a class="viewJobNavA viewJobNavSelected">Overview</a>
        <img onclick="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
      </div>
      

      <div class="menuSettings" id="viewJobOverviewSettings">
        <div class="dropdownRectangle">
          <input class="full" type="text" name="" placeholder="Fitness Influencer For Protein Shake" id="viewJobPostTitle" >
        </div>
        <div class="dropdownRectangle">

          <input type="date" id="campaign-start-date-custom" name="campaign-start-date-custom" placeholder="Start Date*" class="m-0">
          <img src="@/assets/icons/chevron-down-sm.svg">
        </div>
        <div class="dropdownRectangle">
          <select name="timePick">
                          <!--<option disabled selected>Gender</option> -->
                          <option value="12AM">12:00 AM</option>
                          <option value="12AM">1:00 AM</option>
                          <option value="12AM">2:00 AM</option>
                          <option value="12AM">3:00 AM</option>
                          <option value="12AM">4:00 AM</option>
                          <option value="12AM">5:00 AM</option>
                          <option value="12AM">6:00 AM</option>
                          <option value="12AM">7:00 AM</option>
                          <option value="12AM">8:00 AM</option>
                          <option value="12AM">9:00 AM</option>
                          <option value="12AM">10:00 AM</option>
                          <option value="12AM">11:00 AM</option>
                          <option value="12AM">12:00 PM</option>
                          <option value="12AM">1:00 PM</option>
                          <option value="12AM">2:00 PM</option>
                          <option value="12AM">3:00 PM</option>
                          <option value="12AM">4:00 PM</option>
                          <option value="12AM">5:00 PM</option>
                          <option value="12AM">6:00 PM</option>
                          <option value="12AM">7:00 PM</option>
                          <option value="12AM">8:00 PM</option>
                          <option value="12AM">9:00 PM</option>
                          <option value="12AM">10:00 PM</option>
                          <option value="12AM">11:00 PM</option>
          </select>
          <img src="@/assets/icons/chevron-down-sm.svg">
        </div>
        <div class="viewJobPostDescription">
          <p> Description*</p>
          <textarea placeholder="Write a brief description of...nien, num valerotum na nipto es crutioam eh santi du treis on aductum to Regatto teh Thor eliium doos roto el relly ictum"></textarea>
        </div>
        <img src="@/assets/images/userPhotos/userPhoto7.jpg" alt="viewJobMainSlide">
        <div class="viewJobPostExtraSlides">
          <img src="@/assets/images/userPhotos/userPhoto7.jpg" alt="viewJobExtraSlide0">
          <img src="@/assets/images/userPhotos/userPhoto7.jpg" alt="viewJobExtraSlide1">
          <img src="@/assets/images/userPhotos/userPhoto7.jpg" alt="viewJobExtraSlide2">
        </div>
        <a class="orangeButton" onclick="showScreen('viewJobScreen')">Save</a>
      </div>

      <!-- START VIEW JOB POST ADVERTISEMENT SETTINGS -->

      <div class="viewJobNavMobile">
        <a class="viewJobNavA viewJobNavSelected">Advertisement Settings</a>
        <img onclick="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
      </div>

      <div class="menuSettings" id="viewJobAdvertisementSettings">
        <div class="flexRow">
          <div class="dropdownRectangle half">
            <input type="text" value="" placeholder="Zip Code" id="">
          </div>
          <div class="dropdownRectangle">
            <input type="text" value="" placeholder="Tag Location" id="">
            <img src="@/assets/icons/location-pin-lg.svg">
          </div>
        </div>
        <div class="dropdownRectangle" onclick="toggleFilter(this)">
          <p>Post to Feed</p>
          <div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
        </div>
        <div class="dropdownRectangle" onclick="toggleFilter(this)">
          <p>Share to Story</p>
          <div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
        </div>
        <div class="dropdownRectangle" onclick="toggleFilter(this)">
          <p>Add Link to Bio</p>
          <div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
        </div>
        <a class="orangeButton" onclick="showScreen('viewJobScreen')">Save</a>
      </div>

      <!-- START VIEW JOB POST INFLUENCER SETTINGS -->

      <div class="viewJobNavMobile">
        <a class="viewJobNavA viewJobNavSelected">Influencer Settings</a>
        <img onclick="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
      </div>

      <div class="menuSettings" id="viewJobInfluencerSettings">
        <div class="flexRow">
          <div class="dropdownRectangle half">
            <select >
              <option disabled="" selected="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both</option>
            </select>
            <img src="@/assets/icons/chevron-down-sm.svg">
          </div>
          <div class="dropdownRectangle half countryListFilters">
            <img src="@/assets/icons/chevron-down-sm.svg" class="right">
          </div>
        </div>
        <div class="form-field w-100 border border-dark position-relative" id="age-range-field">
              <label for="influencer-age-range" class="position-absolute">Age Range</label>
              <div class="range-slide-wrap">
                <input type="text" class="influencer-age-range" name="age-range" value="" />                    
              </div>
          </div>
          <div class="dropdownRectangle">
          <select id="">
            <option disabled selected>Minimum Follower Count</option>
                        <option value="1000">1 - 1,000</option>
                        <option value="2500">1,000 - 2,500</option>
                        <option value="5000">5,000 - 10,000</option>
                        <option value="10000">10,000 - 20,0000</option>
                        <option value="15000">15,000 - 20,000</option>
                        <option value="20000">20,000 - 25,000</option>
                        <option value="25000">25,000 - 30,000</option>
                        <option value="30000">30,000 - 35,000</option>
                        <option value="35000">35,000 - 40,000</option>
                        <option value="40000">40,000 - 45,000</option>
                        <option value="45000">45,000 - 50,000</option>
                        <option value="50000">50,000 - 55,000</option>
                        <option value="55000">55,000 - 60,000</option>
                        <option value="60000">60,000 - 65,000</option>
                        <option value="65000">56,000 - 70,000</option>
                        <option value="70000">70,000 - 75,000</option>
                        <option value="75000">75,000 - 80,000</option>
                        <option value="80000">80,000 - 85,000</option>
                        <option value="85000">85,000 - 90,000</option>
                        <option value="90000">90,000 - 95,000</option>
                        <option value="95000">95,000 - 100,000</option>
                        <option value="100000">100,000 - 105,000</option>
                        <option value="105000">105,000 - 110,000</option>
                        <option value="110000">110,000 - 115,000</option>
                        <option value="115000">115,000 - 120,000</option>
                        <option value="120000">120,000 - 125,000</option>
                        <option value="125000">125,000 - 130,000</option>
                        <option value="130000">130,000 - 135,000</option>
                        <option value="135000">135,000 - 140,000</option>
                        <option value="140000">140,000 - 145,000</option>
                        <option value="145000">145,000 - 150,000</option>
                        <option value="150000">150,000 - 155,000</option>
                        <option value="155000">155,000 - 160,000</option>
                        <option value="160000">160,000 - 165,000</option>
                        <option value="165000">165,000 - 170,000</option>
                        <option value="170000">170,000 - 175,000</option>
                        <option value="175000">175,000 - 180,000</option>
                        <option value="180000">180,000 - 185,000</option>
                        <option value="185000">185,000 - 190,000</option>
                        <option value="190000">190,000 - 195,000</option>
                        <option value="200000">195,000 - 200,000</option>
                        <option value="200000">200,000 - 205,000</option>


                        <option value="205000">205,000 - 210,000</option>
                        <option value="210000">210,000 - 215,000</option>
                        <option value="215000">215,000 - 220,000</option>
                        <option value="220000">220,000 - 225,000</option>
                        <option value="225000">225,000 - 230,000</option>
                        <option value="230000">230,000 - 235,000</option>
                        <option value="235000">235,000 - 240,000</option>
                        <option value="240000">240,000 - 245,000</option>
                        <option value="245000">245,000 - 250,000</option>
                        <option value="250000">250,000 - 255,000</option>
                        <option value="255000">255,000 - 260,000</option>
                        <option value="260000">260,000 - 265,000</option>
                        <option value="265000">265,000 - 270,000</option>
                        <option value="270000">270,000 - 275,000</option>
                        <option value="275000">275,000 - 280,000</option>
                        <option value="280000">280,000 - 285,000</option>
                        <option value="285000">285,000 - 290,000</option>
                        <option value="290000">290,000 - 295,000</option>
                        <option value="295000">295,000 - 300,000</option>



                        <option value="300000">300,000 - 305,000</option>
                        <option value="305000">305,000 - 310,000</option>
                        <option value="310000">310,000 - 315,000</option>
                        <option value="315000">315,000 - 320,000</option>
                        <option value="320000">320,000 - 325,000</option>
                        <option value="325000">325,000 - 330,000</option>
                        <option value="330000">330,000 - 335,000</option>
                        <option value="335000">335,000 - 340,000</option>
                        <option value="340000">340,000 - 345,000</option>
                        <option value="345000">345,000 - 350,000</option>
                        <option value="350000">350,000 - 355,000</option>
                        <option value="355000">355,000 - 360,000</option>
                        <option value="360000">360,000 - 365,000</option>
                        <option value="365000">365,000 - 370,000</option>
                        <option value="370000">370,000 - 375,000</option>
                        <option value="375000">375,000 - 380,000</option>
                        <option value="380000">380,000 - 385,000</option>
                        <option value="385000">385,000 - 390,000</option>
                        <option value="390000">390,000 - 395,000</option>
                        <option value="395000">395,000 - 300,000</option>
                        <option value="400000">400,000 - 405,000</option>
                        
                        <option value="400000">400,000 - 405,000</option>
                        <option value="405000">405,000 - 410,000</option>
                        <option value="410000">410,000 - 415,000</option>
                        <option value="415000">415,000 - 420,000</option>
                        <option value="420000">420,000 - 425,000</option>
                        <option value="425000">425,000 - 430,000</option>
                        <option value="430000">430,000 - 435,000</option>
                        <option value="435000">435,000 - 440,000</option>
                        <option value="440000">440,000 - 445,000</option>
                        <option value="445000">445,000 - 450,000</option>
                        <option value="450000">450,000 - 455,000</option>
                        <option value="455000">455,000 - 460,000</option>
                        <option value="460000">460,000 - 465,000</option>
                        <option value="465000">465,000 - 470,000</option>
                        <option value="470000">470,000 - 475,000</option>
                        <option value="475000">475,000 - 480,000</option>
                        <option value="480000">480,000 - 485,000</option>
                        <option value="485000">485,000 - 490,000</option>
                        <option value="490000">490,000 - 495,000</option>
                        <option value="495000">495,000 - 500,000</option>
                        <option value="500000">500,000 - 505,000</option>

                        <option value="500000">500,000 - 505,000</option>
                        <option value="505000">505,000 - 510,000</option>
                        <option value="510000">510,000 - 515,000</option>
                        <option value="515000">515,000 - 520,000</option>
                        <option value="520000">520,000 - 525,000</option>
                        <option value="525000">525,000 - 530,000</option>
                        <option value="530000">530,000 - 535,000</option>
                        <option value="535000">535,000 - 540,000</option>
                        <option value="540000">540,000 - 545,000</option>
                        <option value="545000">545,000 - 550,000</option>
                        <option value="550000">550,000 - 555,000</option>
                        <option value="555000">555,000 - 560,000</option>
                        <option value="560000">560,000 - 565,000</option>
                        <option value="565000">565,000 - 570,000</option>
                        <option value="570000">570,000 - 575,000</option>
                        <option value="575000">575,000 - 580,000</option>
                        <option value="580000">580,000 - 585,000</option>
                        <option value="585000">585,000 - 590,000</option>
                        <option value="590000">590,000 - 595,000</option>
                        <option value="595000">595,000 - 500,000</option>
                        <option value="500000">500,000 - 505,000</option>

                        <option value="600000">600,000 - 605,000</option>
                        <option value="605000">605,000 - 610,000</option>
                        <option value="610000">610,000 - 615,000</option>
                        <option value="615000">615,000 - 620,000</option>
                        <option value="620000">620,000 - 625,000</option>
                        <option value="625000">625,000 - 630,000</option>
                        <option value="630000">630,000 - 635,000</option>
                        <option value="635000">635,000 - 640,000</option>
                        <option value="640000">640,000 - 645,000</option>
                        <option value="645000">645,000 - 650,000</option>
                        <option value="650000">650,000 - 655,000</option>
                        <option value="655000">655,000 - 660,000</option>
                        <option value="660000">660,000 - 665,000</option>
                        <option value="665000">665,000 - 670,000</option>
                        <option value="670000">670,000 - 675,000</option>
                        <option value="675000">675,000 - 680,000</option>
                        <option value="680000">680,000 - 685,000</option>
                        <option value="685000">685,000 - 690,000</option>
                        <option value="690000">690,000 - 695,000</option>
                        <option value="695000">695,000 - 600,000</option>
                        <option value="600000">600,000 - 605,000</option>
                      
                        <option value="700000">700,000 - 705,000</option>
                        <option value="705000">705,000 - 710,000</option>
                        <option value="710000">710,000 - 715,000</option>
                        <option value="715000">715,000 - 720,000</option>
                        <option value="720000">720,000 - 725,000</option>
                        <option value="725000">725,000 - 730,000</option>
                        <option value="730000">730,000 - 735,000</option>
                        <option value="735000">735,000 - 740,000</option>
                        <option value="740000">740,000 - 745,000</option>
                        <option value="745000">745,000 - 750,000</option>
                        <option value="750000">750,000 - 755,000</option>
                        <option value="755000">755,000 - 760,000</option>
                        <option value="760000">760,000 - 765,000</option>
                        <option value="765000">765,000 - 770,000</option>
                        <option value="770000">770,000 - 775,000</option>
                        <option value="775000">775,000 - 780,000</option>
                        <option value="780000">780,000 - 785,000</option>
                        <option value="785000">785,000 - 790,000</option>
                        <option value="790000">790,000 - 795,000</option>
                        <option value="795000">795,000 - 700,000</option>
                        <option value="700000">700,000 - 705,000</option>

                        <option value="800000">800,000 - 805,000</option>
                        <option value="805000">805,000 - 810,000</option>
                        <option value="810000">810,000 - 815,000</option>
                        <option value="815000">815,000 - 820,000</option>
                        <option value="820000">820,000 - 825,000</option>
                        <option value="825000">825,000 - 830,000</option>
                        <option value="830000">830,000 - 835,000</option>
                        <option value="835000">835,000 - 840,000</option>
                        <option value="840000">840,000 - 845,000</option>
                        <option value="845000">845,000 - 850,000</option>
                        <option value="850000">850,000 - 855,000</option>
                        <option value="855000">855,000 - 860,000</option>
                        <option value="860000">860,000 - 865,000</option>
                        <option value="865000">865,000 - 870,000</option>
                        <option value="870000">870,000 - 875,000</option>
                        <option value="875000">875,000 - 880,000</option>
                        <option value="880000">880,000 - 885,000</option>
                        <option value="885000">885,000 - 890,000</option>
                        <option value="890000">890,000 - 895,000</option>
                        <option value="895000">895,000 - 800,000</option>
                        <option value="800000">800,000 - 805,000</option>

                        <option value="900000">900,000 - 905,000</option>
                        <option value="905000">905,000 - 910,000</option>
                        <option value="910000">910,000 - 915,000</option>
                        <option value="915000">915,000 - 920,000</option>
                        <option value="920000">920,000 - 925,000</option>
                        <option value="925000">925,000 - 930,000</option>
                        <option value="930000">930,000 - 935,000</option>
                        <option value="935000">935,000 - 940,000</option>
                        <option value="940000">940,000 - 945,000</option>
                        <option value="945000">945,000 - 950,000</option>
                        <option value="950000">950,000 - 955,000</option>
                        <option value="955000">955,000 - 960,000</option>
                        <option value="960000">960,000 - 965,000</option>
                        <option value="965000">965,000 - 970,000</option>
                        <option value="970000">970,000 - 975,000</option>
                        <option value="975000">975,000 - 980,000</option>
                        <option value="980000">980,000 - 985,000</option>
                        <option value="985000">985,000 - 990,000</option>
                        <option value="990000">990,000 - 995,000</option>
                        <option value="995000">995,000 - 1,000,000</option>


                        <option value="1000000">1,000,000 - 1,500,000</option>
                        <option value="1500000">1,500,000 - 2,000,000</option>

                        <option value="2000000">2,000,000 - 2,500,000</option>
                        <option value="2500000">2,500,000 - 3,000,000</option>

                        <option value="3000000">3,000,000 - 3,500,000</option>
                        <option value="3500000">3,500,000 - 4,000,000</option>

                        <option value="4000000">4,000,000 - 4,500,000</option>
                        <option value="4500000">4,500,000 - 5,000,000</option>

                        <option value="5000000">5,000,000 - 5,500,000</option>
                        <option value="5500000">5,500,000 - 6,000,000</option>

                        <option value="6000000">6,000,000 - 6,500,000</option>
                        <option value="6500000">6,500,000 - 7,000,000</option>

                        <option value="4700000">7,000,000 - 7,500,000</option>
                        <option value="7500000">7,500,000 - 8,000,000</option>

                        <option value="8000000">8,000,000 - 8,500,000</option>
                        <option value="8500000">8,500,000 - 9,000,000</option>

                        <option value="9000000">9,000,000 - 9,500,000</option>
                        <option value="9500000">9,500,000 - 10,000,000</option>


          </select>
          <img src="@/assets/icons/chevron-down-sm.svg">
        </div>
        <div class="dropdownRectangle">
          <div class="field-wrap interests-dropdown position-relative">
            <div class="button active">Target Audience Interests</div>
                <ul class="dropdown">
                          <li class="checkbox">
                            <label for="animals">Animals</label>
                            <input type="checkbox" id="animals" name="animals" value="animals">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="art">Art</label>
                            <input type="checkbox" id="art" name="art" value="art">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="beauty">Beauty</label>
                            <input type="checkbox" id="beauty" name="beauty" value="beauty">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="books">Books</label>
                            <input type="checkbox" id="books" name="books" value="books">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="business">Business</label>
                            <input type="checkbox" id="business" name="business" value="business">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="causes">Causes</label>
                            <input type="checkbox" id="causes" name="causes" value="Causes">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="comedy">Comedy</label>
                            <input type="checkbox" id="comedy" name="comedy" value="comedy">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="dance">Dance</label>
                            <input type="checkbox" id="dance" name="dance" value="dance">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="diy">DIY</label>
                            <input type="checkbox" id="diy" name="diy" value="diy">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="education">Education</label>
                            <input type="checkbox" id="education" name="education" value="education">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="entertainment">Entertainment</label>
                            <input type="checkbox" id="entertainment" name="entertainment" value="entertainment">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="family">Family</label>
                            <input type="checkbox" id="family" name="family" value="family">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="fashion">Fashion</label>
                            <input type="checkbox" id="fashion" name="fashion" value="fashion">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="film">Film</label>
                            <input type="checkbox" id="film" name="film" value="film">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="fitness">Fitness</label>
                            <input type="checkbox" id="fitness" name="fitness" value="fitness">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="food">Food</label>
                            <input type="checkbox" id="food" name="food" value="food">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="music">Music</label>
                            <input type="checkbox" id="music" name="music" value="music">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="news">News</label>
                            <input type="checkbox" id="news" name="news" value="news">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="photography">Photography</label>
                            <input type="checkbox" id="photography" name="photography" value="photography">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="politics">Politics</label>
                            <input type="checkbox" id="politics" name="politics" value="politics">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="radio">Radio</label>
                            <input type="checkbox" id="radio" name="radio" value="radio">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="science">Science</label>
                            <input type="checkbox" id="science" name="science" value="science">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="sport">Sport</label>
                            <input type="checkbox" id="sport" name="sport" value="sport">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="style">Style</label>
                            <input type="checkbox" id="style" name="style" value="style">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="tech">Tech</label>
                            <input type="checkbox" id="tech" name="tech" value="tech">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="travel">Travel</label>
                            <input type="checkbox" id="travel" name="travel" value="travel">
                            <span class="checkmark"></span>
                          </li>
                          <li class="checkbox">
                            <label for="tv">TV</label>
                            <input type="checkbox" id="tv" name="tv" value="tv">
                            <span class="checkmark"></span>
                          </li>
            </ul>
          </div>
          <img src="@/assets/icons/chevron-down-sm.svg">
        </div>
        <a class="orangeButton" onclick="showScreen('viewJobScreen')">Save</a>
      </div>

      <div class="viewJobMobileSave">
        <a class="orangeButton" onclick="showScreen('viewJobScreen')">Save</a>
      </div>

    </div>
  </div>

  <!-- END VIEW JOB HTML -->

  <!-- BEGIN CAMPAIGN SELECT HTML -->

    <div class="screen" id="inviteJobScreen" onclick="closeScreen(event)">
      <div class="screenContainer">
          
          <div class="flexRow inviteHeader">
            <p>Choose Campaign</p>
            <p onclick="showScreen('inviteJobScreen')" class="right">Done</p>
          </div>

          <div class="inviteToJobChoices flexColumn">
            <p>Mountain View</p>
            <p>SunnyVale</p>
            <p>Gatorade Campaign 2020</p>
            <p>Santa Clara</p>
            <p>San Jose</p>
          </div>
          <div class="gradient"></div>
      </div>
    </div>

    <!-- END CAMPAIGN SELECT HTML -->

  <!-- BEGIN PAYPAL SETTINGS HTML -->

  <div class="screen" id="paypalSettingsScreen" onclick="closeScreen( event)">
    <div class="screenContainer">
      <h1 onclick="showScreen('paypalSettingsScreen')" class="right">X</h1>
      
      <div class="viewJobNav">
        <a class="viewJobNavA full viewJobNavSelected">Payment History
        </a>
      </div>

      <div class="viewJobNavMobile">

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected" onclick="menuSettingsChange(this, 'paypalHistorySettings')">Payment History</a>
          <img onclick="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>
    </div>

      <div class="menuSettings" id="paypalHistorySettings"> 
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
        <a class="orangeButton" onclick="showScreen('paypalSettingsScreen')">Save</a>
      </div>

    </div>
  </div>

  <!-- END PAYPAL SETTINGS HTML -->
  

  <!-- BEGIN VIEW JOB APPLICANTS HTML -->

  <div class="screen" id="viewApplicantsScreen" onclick="closeScreen(event)">
    <div class="screenContainer viewApplicantsScreenContainer">
      <h1 onclick="showScreen('viewApplicantsScreen')" class="right">X</h1>
      <h1> <span class="projectTitle">Project Title</span> Applicants</h1>

      <div class="flexColumn">

        <div class="viewApplicantContainer" id="viewApplicantClone" onclick="viewApplicantPick(this)" ontouchstart="swipeRightStart(event)" ontouchend="swipeRightEnd(event)">
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
                      <img id="https://www.instagram.com/p/CG-j658BuTG/" src="@/assets/icons/intagram-black.png" alt="instagram" class="findInfluencerInstagram" onclick="showInstagram(this, 'showInfluencerActive', event)">
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
          <p class="delete" onclick="deleteViewApplicant(this)">X</p>
        </div>



        <div class="viewApplicantContainer" onclick="viewApplicantPick(this)" ontouchstart="swipeRightStart(event)" ontouchend="swipeRightEnd(event)">
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
                      <img id="https://www.instagram.com/p/CG-j658BuTG/" src="@/assets/icons/intagram-black.png" alt="instagram" class="findInfluencerInstagram" onclick="showInstagram(this, 'showInfluencerActive', event)">
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
          <p class="delete" onclick="deleteViewApplicant(this)">X</p>
        </div>


        <div class="profileDescription">
          <p>Lorem Ipsum budgetur sond quancti et tu so leir det et hume el gun ipso saltium to fou undus secpti crun</p>
        </div>




        <div class="viewApplicantContainer" onclick="viewApplicantPick(this)" ontouchstart="swipeRightStart(event)" ontouchend="swipeRightEnd(event)">
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
                      <img id="https://www.instagram.com/p/CG-j658BuTG/" src="@/assets/icons/intagram-black.png" alt="instagram" class="findInfluencerInstagram" onclick="showInstagram(this, 'showInfluencerActive', event)">
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
          <p class="delete" onclick="deleteViewApplicant(this)">X</p>
        </div>



      </div>
      


    </div>
  </div>

  <!-- END VIEW JOB APPLICANTS HTML -->


  <!-- BEGIN VIEW JOB APPLICANTS PICK HTML -->

  <div class="screen" id="viewApplicantChosenScreen" onclick="closeScreen(event)">
    <div class="screenContainer viewApplicantsScreenContainer">
      <img id="viewApplicantChosenExit" onclick="viewApplicantPickClose()" src="@/assets/icons/chevron-down.svg">
      <p id="viewApplicantChosenName"> Jane Doe</p>

      <div class="flexColumn" id="viewApplicantChosen"></div>

    </div>
  </div>

  <!-- END VIEW JOB APPLICANTS HTML -->


  <!-- BEGIN REVIEW VIEW HTML -->

    <div class="screen" id="reviewScreen" onclick="closeScreen(event)">
      <div class="screenContainer">
        <h1 onclick="showScreen('reviewScreen')" class="right">X</h1>
        <p id="closeInfluencerPickMobile" onclick="showScreen('reviewScreen')"></p>
        <h1 id="photoViewJobTitle" >Reviews</h1>

          <div class="dashboardReviewsColumn">

            <p class="centerText"><span class="orangeText">John Doe</span> - Blue gatorade Campaign</p>

            <div class="dropdownRectangle"> 
              <p>Easy to Work With</p>
                <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span>
                <div class="flexRow starRow right">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png" class="fadedStar">
                </div>
              </div>

              <div class="dropdownRectangle"> 
                <p>Communication</p>
                <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span>
                <div class="flexRow starRow right">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png">
                  <img src="@/assets/icons/star.png" class="fadedStar">
                </div>
              </div>

              <div class="flexColumn textareaContainer">
                <label class="top-label d-block bg-custom-light border border-dark m-0 text-left">Write a review (optional)</label>
                <textarea class="textAreaBig" placeholder="Write a brief description of... Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet apus recto dolor sit amet"></textarea>
              </div>

            <a class="buttonOrange" onclick="showScreen('reviewScreen')">Submit Review
            </a>

          </div>
      </div>

    </div>

    <!-- END REVIEW VIEW HTML -->


    <!-- BEGIN REPORT VIEW HTML -->

    <div class="screen" id="reportScreen" onclick="closeScreen(event)">
      <div class="screenContainer">
        <h1 onclick="showScreen('reportScreen')" class="right">X</h1>
        
        <h1>Report</h1>
          <form>

          <div class="field-wrap country-dropdown position-relative listDropdown">
                    <div onclick="showCheckbox(this)" class="button">Topic Selection</div>
                    <ul class="dropdown">
                      
                      <li class="checkbox">
                        <label for="Making me feel uncomfortable / rude / inappropriate language">Making me feel uncomfortable / rude / inappropriate language</label>
                        <input type="checkbox" id="Making me feel uncomfortable / rude / inappropriate language" name="Making me feel uncomfortable / rude / inappropriate language" value="Making me feel uncomfortable / rude / inappropriate language">
                        <span class="checkmark"></span>
                      </li>

                      <li class="checkbox">
                        <label for="Trying to work off of Ravyyn">Trying to work off of Ravyyn</label>
                        <input type="checkbox" id="Trying to work off of Ravyyn" name="Trying to work off of Ravyyn" value="Trying to work off of Ravyyn">
                        <span class="checkmark"></span>
                      </li>

                      <li class="checkbox">
                        <label for="Profile feels like spam">Profile feels like spam</label>
                        <input type="checkbox" id="Profile feels like spam" name="Profile feels like spam" value="Profile feels like spam">
                        <span class="checkmark"></span>
                      </li>

                      <li class="checkbox">
                        <label for="Inappropriate content">Inappropriate content</label>
                        <input type="checkbox" id="Inappropriate content" name="Inappropriate content" value="Inappropriate content">
                        <span class="checkmark"></span>
                      </li>

                      <li class="checkbox">
                        <label for="It’s something else">It’s something else</label>
                        <input type="checkbox" id="It’s something else" name="It’s something else" value="It’s something else">
                        <span class="checkmark"></span>
                      </li>

                    </ul>
                  </div>
                  
                  <p class="leftText"> <span class="orangeText">Brief Description</span> (optional)</p>
                  <textarea placeholder=""></textarea>

                  <a id="submit" onclick="showScreen('reportScreen')" class="btn btn-lg px-1 d-block">Send</a>
                  
                </form>

        </div>
    </div>

    <!-- END REPORT VIEW HTML -->

    

  <!-- BEGIN SHIPPING ADDRESS HTML -->

<div class="screen" id="shippingAddressScreen" onclick="closeScreen(event)">
  <div class="screenContainer">
      <h1 onclick="showScreen('shippingAddressScreen')" class="right">X</h1>
      <img id="viewApplicantChosenExit" onclick="showScreen('shippingAddressScreen')" src="@/assets/icons/chevron-down.svg">
      <h1>Shipping Address</h1>
      <div class="shippingAddressContainer flexColumn">
        <div class="flexRow">
          <div class="dropdownRectangle half">
            <p>John</p>
          </div>
          <div class="dropdownRectangle half">
            <p>Doe</p>
          </div>
        </div>
        <div class="dropdownRectangle">
          <p>599 White Park Blvd</p>
        </div>
          <div class="dropdownRectangle">
          <p>#333</p>
        </div>
        <div class="flexRow">
          <div class="dropdownRectangle half">
            <p>Boise</p>
          </div>
          <div class="dropdownRectangle half">
            <p>ID</p>
          </div>
        </div>
        <div class="flexRow">
          <div class="dropdownRectangle half">
            <p>83703</p>
          </div>
          <div class="dropdownRectangle half">
            <p>U.S.</p>
          </div>
        </div>
      </div>
  </div>
</div>

<!-- END SHIPPING ADDRESS HTML -->


<!-- BEGIN DONE HIRING HTML -->

<div class="screen" id="doneHiringScreen" onclick="closeScreen(event)">
  <div class="screenContainer">
      <h1 onclick="showScreen('doneHiringScreen')" class="right">X</h1>
      <h1>Congratulations</h1>
      <p class="rustText">Your campaign has begun</p>
      <div class="doneHiringChoices flexColumn">
        <div class="flexRow">
          <p>Are You Done Hiring For This Job?</p>
        </div>
        <div class="flexRow">
          <h1 onclick="loadPage('find-influencers', event)">Yes</h1>
          <h1 onclick="showScreen('doneHiringScreen')">No</h1>
        </div>
      </div>
      <p>You can always re-hire more influencers for this campaign later</p>
  </div>
</div>

<!-- END SHIPPING ADDRESS HTML -->

<!-- BEGIN SCREEN MOBILE HTML -->

<div class="screenMobile" id="mobileScreen">
</div>

<!-- END SCREEN MOBILE HTML -->


<!-- BEGIN MOBILE SORT BY HTML -->

    <div class="screen" id="inviteJobScreen" onclick="closeScreen(event)">
      <div class="screenContainer">
          
          <div class="flexRow inviteHeader">
            <p>Sort By</p>
            <p onclick="showScreen('inviteJobScreen')" class="right">Done</p>
          </div>

          <div class="inviteToJobChoices flexColumn">
            <p>Date Completed</p>
            <p>Date Created</p>
            <p>Budget</p>
            <p>Engagement Rate</p>
            <p># Of Influencers</p>
          </div>
          <div class="gradient"></div>
      </div>
    </div>

    <!-- END MOBILE SORT BY HTML -->


  </main>
</template>

<script>
import '@/assets/css/general.css'
import '@/assets/css/dashboard-animation.css'
import '@/assets/css/ion.rangeSlider.css'

import RDropDown from '@/components/base/RDropDown/RDropDown'

export default {
  name: 'Dashboard',
  data() {
    return {
      statSelectedIndex: 1,
      stats: [
        {
          title: 'ENGAGEMENT RATE',
          value: '97.8%'
        },
        {
          title: 'CPE',
          value: '$3.47'
        },
        {
          title: 'CTR',
          value: '85.2%'
        },
        {
          title: 'CLICKS',
          value: '9785'
        },
        {
          title: 'STORY VIEWS',
          value: '5300'
        },
        {
          title: 'TOTAL SAVES',
          value: '3700'
        },
        {
          title: 'TOTAL LIKES',
          value: '4000'
        },
        {
          title: 'TOTAL COMMENTS',
          value: '6000'
        }
      ],
      tabSelectedIndex: 0,
      tabs: [
        {
          title: 'TODAY'
        },
        {
          title: 'PENDING'
        },
        {
          title: 'DRAFTS'
        },
        {
          title: 'COMPLETED'
        }
      ]
    }
  },
  computed: {
    statsRibbonClasses() {
      const statSelectedIndex = this.statSelectedIndex

      return {
        [`dashboardDataTypeRibbonSelected${statSelectedIndex}`]: statSelectedIndex > 0
      }
    },
    statSelected() {
      const stats = this.stats
      const statSelectedIndex = this.statSelectedIndex
      const statSelected = stats[statSelectedIndex]

      return statSelected
    },
    tabSelected() {
      const tabs = this.tabs
      const tabSelectedIndex = this.tabSelectedIndex
      const tabSelected = tabs[tabSelectedIndex]

      return tabSelected
    }
  },
  methods: {
    setStatSelected(index) {
      this.statSelectedIndex = index
    },
    setTabSelected(index) {
      this.tabSelectedIndex = index
    },
    getTabsButtonClasses(index) {
      const tabSelectedIndex = this.tabSelectedIndex

      return {
        campaignNavTypeSelected: tabSelectedIndex === index
      }
    }
  },
  components: {
    RDropDown
  }
}
</script>