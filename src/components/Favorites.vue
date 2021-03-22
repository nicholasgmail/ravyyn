<template>
        <main class="main" id="favorites">

      <iframe id="newCampaign" src=""></iframe>

      <section class="findInfluencersSection" id="findInfluencersSection">

        <h1 class="center marginTop25">Favorites</h1>

        <div id="mobileInfluencerPick">
          <p id="closeInfluencerPickMobile" @click="closeInfluencerPickMobile()"></p>
          <p id="influencerPickNameMobile">Jane Doe</p>
        </div>

        <div id="screenShowFindInfluencer" class="screen" @click="closeScreen(event)">
          <div id="screenShowFindInfluencerContainer">
            <h1 class="" @click="showScreen('screenShowFindInfluencer')">X</h1>
            <div id="influencerPickImage" class="findInfluencerPickImage"></div>
            <div id="influencerPickProfile" class="findInfluencerPickProfile"></div>
            <div id="influencerPickAction" class="findInfluencerPickAction">
              
            </div>
          </div>
        </div>

        <div id="screenShowFindInfluencerInstagram" class="screen screenShowFindInfluencerInstagram">
          <div id="screenShowFindInfluencerContainer">
            <h1 class="" @click="closeInfluencerInstagramPick()">X</h1>

            <div class="findInfluencerInstagramHeader">

              <div class="profileInfoInstagramShow left">
                <div class="frame">
                  <img src="@/assets/images/aden.jpg" alt="profilePicSmall">
                </div>
                <p id="profileInfoInstagramShowName">Jane Doe</p>
              </div>

              <div  class="profileLinksInstagramShow right">
                <a href="https://www.instagram.com/ravyyn_/">Follow</a>
                <img src="@/assets/icons/ig-icon.svg" alt="instagramSmallIcon">
              </div>
              
            </div>

            <div class="findInfluencerInstagramView">
              <img src="@/assets/images/instagramAccounts/instagramAccount0.png">
            </div>
            
          </div>
        </div>

        <div class="findInfluencersFilterContainer">

          <div>

            <div class="findInfluencersFilterNav">
              <img src="@/assets/icons/search-small.svg">
              <input id="searchInfluencers" type="search" class="searchDashboard" placeholder="Search Favorites">
            </div>

            <div class="findInfluencersFilterNav" id="influencerSortBy" @click="campaignDropdownShow(this, 'sortByFindInfluencer')">
              <div id="sortBy" class="filter">Sort by</div>
              <img src="@/assets/icons/chevron-down-sm.svg">
              <img class="sortHighLow" src="@/assets/icons/arrow-up-down.jpg">
            </div>

          </div>

          <a href="#" @click="newCampaignButton()" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn">
            New Campaign
          </a>

        </div>

        <div class="filters" id="filters">
          <div>
            <div class="dropdownRectangle half">
              <select>
                <option disabled="" selected="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
              </select>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half" id="countryListDesktopFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle full">
              <select id="">
              <option disabled="" selected="">Minimum Follower Count</option>
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
            <div class="dropdownRectangle full">
              <select>
                <option disabled="" selected="">Engagement Rate</option>
                <option value="high">Low to High</option>
                <option value="low">High to Low</option>
              </select>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>

          <div>
            <div class="form-field w-100 border border-dark position-relative" id="age-range-field">
              <label for="influencer-age-range" class="position-absolute">Age Range</label>
              <div class="range-slide-wrap">
                <input type="text" class="influencer-age-range" name="age-range" value="" />                    
              </div>
            </div>
            <div  class="dropdownRectangle full" id="interestsListDesktopFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="dropdownRectangle half">
              <select>
                <option disabled="" selected="">Success Rating</option>
                <option value="high">Low to High</option>
                <option value="low">High to Low</option>
              </select>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <a href="#" class="btn">Apply</a>
          </div>

          <img id="backArrowFilter" class="backArrow" src="@/assets/icons/arrow-left.svg">
        </div>

        <div class="filtersMobile" id="filtersMobile">
            <div class="filterHalf">

              <div class="filter filterHalf" id="influencerSortBy">Gender</div>
              

              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="filterHalf">
              <div class="filter filterHalf" id="influencerSortBy">Country</div>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="filterFull" id="mobileMinimumFollowerCount">
              <div class="filter">Minimum Follower Count</div> 



              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div  class="filterFull">
              <div class="filter" id="influencerSortBy">Engagement Rate</div>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>

            <div class="form-field w-100 border border-dark position-relative" id="age-range-field">
              <div class="filter" id="influencerSortBy">Age Range</div>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="filterFull">
              <div class="filter" id="influencerSortBy">Target Audience</div>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
            <div class="filterHalf">
              <div class="filter" id="influencerSortBy">Success Rating</div>
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>

        </div>

        <div id="filtersMobileParameters">
          <p id="filterParameterName">Target Audience Interests</p>
          <div id="filterParameters">
            <p>Cars</p>
            <p>Fitness</p>
            <p>Food</p>
            <p>Sports</p>
            <p>Hunting</p>
            <p>Outdoors</p>
            <p>Photography</p>
          </div>
          <div class="filterParameterExit">
            <p class="rustText" id="clearMobileFilters">Clear Filters</p>
            <p class="rustText" id="mobileFilterClose">Done</p>
          </div>
        </div>

        <div class="findInfluencersContainer" id="findInfluencersContainer">
          <div class="screen" id="screenFindInfluencers" @click="closeScreen(event)"></div>

          <div id="cloneStem" class="cardFavorite">

            <div class="imageProfileCard">
              <img src="@/assets/images/aden.jpg">
            </div>

            <p @click="removeFavorite(this)" class="heart right">❤️</p>

            <div class="cardFavoriteBottomRow">
              <a class="buttonOrangeOutline left" @click="showScreen('inviteJobScreen', event)">Invite to Job</a>
              <img src="@/assets/icons/ellipsis.svg" class="elipsis right">
            </div>

          </div>

        </div>

      </section>

      <div id="articleSelection" class="articleSelection">
        <p id="articleSelectionCancel">X</p>
        <div class="articleSelectionIframeDiv">
          <iframe src="" id="articleSelectionIframe" class="articleSelectionIframe"></iframe>
        </div>
      </div>

      <!-- BEGIN MOBILE INITE TO JOB HTML -->

      <div class="screen" id="inviteJobScreen" @click="closeScreen(event)">
        <div class="screenContainer">
            
            <div class="flexRow inviteHeader">
              <p>Choose Campaign</p>
              <p @click="showScreen('inviteJobScreen')" class="right">Done</p>
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

      <!-- END MOBILE INITE TO JOB HTML -->

      <!-- BEGIN REVIEW VIEW HTML -->

      <div class="screen" id="reviewScreen" @click="closeScreen(event)">
        <div class="screenContainer">
          <h1 @click="showScreen('reviewScreen')" class="right">X</h1>
          <h1 id="photoViewJobTitle" >Reviews</h1>

            <div class="reveiwBodyContainer">

              <div class="flexColumn reviewsColumn">
                
                <div class="flexRow spaceBetween marginBottom25 reviewHeader">
                  <div class="flexRow reviewProfilePic">
                    <div class="profilePic">
                      <img src="@/assets/images/aden.jpg" class="influencerPicture">
                    </div>
                    <div class="flexColumn">
                      <p class="font-la-nord-bold">Jane Doe</p>
                      <p class="companyName">Company Name</p>
                      <p class="igHandle">@ighandle</p>

                      <div class="rowColumns boldRowColumns">
                        <div>
                            <p>12K</p>
                            <p>Spent</p>
                        </div>
                        <div>
                            <p>12</p>
                            <p>Projects</p>
                        </div>
                    </div>

                    </div>
                  </div>

                  <div class="rowColumns boldRowColumns hide">
                      <div>
                          <p>12K</p>
                          <p>Spent</p>
                      </div>
                      <div>
                          <p>12</p>
                          <p>Projects</p>
                      </div>
                  </div>

                  <div class="flexColumn">
                    <div class="influencerSuccess">
                  <p>75%</p>
                  <div class="successRate">
                    <span id="successRateBar"></span>
                  </div>
                  <p class="jobSuccess">Job Success</p>
                </div>
                  </div>

                </div>


                <div class="reviewMobileHeaderButtons">
                  <a href="#" class="buttonBeige">Invite To Job</a>

                  <a href="#" class="buttonOrange">View Profile</a>
                </div>


                <div class="containerReview">
                  
                  <div class="containerReviewImage">
                    <img src="@/assets/images/sushi.jpg">
                  </div>
                  
                  <div class="articleJobInfo">
                    <div class="flexRow full spaceBetween">
                      <p class="articleJobTitle">Jane Doe</p>

                      <div class="flexRow starRow">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png" class="fadedStar">
                      </div>
                    </div>

                    <div class="articleJobDate">
                      <div class="flexRow">
                        <p>COMPLETED</p>
                        <p>3/26/20</p>
                      </div>
                      <div class="flexRow">
                        <p>CAMPAIGN BUDGET</p>
                        <p>$50</p>
                      </div>
                    </div>
                    <div class="articleJobDescription">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>
                      <p class="articleJobDescriptionMore" @click="showMoreJobDescription(this)">more</p>
                    </div>
                  </div>

                  <div class="articleJobDescription">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>
                      <p class="articleJobDescriptionMore" @click="showMoreJobDescription(this)">more</p>
                    </div>

                </div>


                <div class="containerReview">
                  
                  <div class="containerReviewImage">
                    <img src="@/assets/images/girl-in-hammock.jpg">
                  </div>
                  
                  <div class="articleJobInfo">
                    <div class="flexRow full spaceBetween">
                      <p class="articleJobTitle">Jane Doe</p>

                      <div class="flexRow starRow">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png" class="fadedStar">
                      </div>
                    </div>

                    <div class="articleJobDate">
                      <div class="flexRow">
                        <p>COMPLETED</p>
                        <p>3/26/20</p>
                      </div>
                      <div class="flexRow">
                        <p>CAMPAIGN BUDGET</p>
                        <p>$50</p>
                      </div>
                    </div>
                  </div>

                </div>


                <div class="containerReview">
                  
                  <div class="containerReviewImage">
                    <img src="@/assets/images/girl-in-hammock.jpg">
                  </div>
                  
                  <div class="articleJobInfo">
                    <div class="flexRow full spaceBetween">
                      <p class="articleJobTitle">Jane Doe</p>

                      <div class="flexRow starRow">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png" class="fadedStar">
                      </div>
                    </div>

                    <div class="articleJobDate">
                      <div class="flexRow">
                        <p>COMPLETED</p>
                        <p>3/26/20</p>
                      </div>
                      <div class="flexRow">
                        <p>CAMPAIGN BUDGET</p>
                        <p>$50</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


              <div id="influencerPickAction" class="findInfluencerPickAction flexColumn"><div class="influencerSuccess" @click="showScreen('reviewScreen')">
                  <p>75%</p>
                  <div class="successRate">
                    <span id="successRateBar"></span>
                  </div>
                  <p class="jobSuccess">Job Success</p>
                </div>
                <a class="buttonOrange marginTop25">Invite to Job</a>

                <a href="#" class="buttonBeige">View Profile</a>

                <a href="#" class="buttonBeige">Message</a>

              </div>

            </div>

        </div>
      </div>

      <!-- END REVIEW VIEW HTML -->


    <!-- BEGIN ACCOUNT SETTINGS HTML -->

    <div class="screen" id="accountSettingsScreen" @click="closeScreen( event)">
      <div class="screenContainer">
        <h1 @click="showScreen('accountSettingsScreen')" class="right">X</h1>
        
        <div class="viewJobNav">
          <a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange(this, 'accountOverviewSettings')">Overview</a>
          <a class="viewJobNavA" @click="menuSettingsChange(this, 'accountShippingSettings')">Shipping</a>
        </div>

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected">Overview</a>
          <img @click="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
        </div>
        

        <div class="menuSettings" id="accountOverviewSettings">
          <div class="accountProfileImage">
            <img class="accountIcon" src="@/assets/icons/accountIcon.png">
            <img class="accountCamera" src="@/assets/icons/accountCamera.png">
          </div>

          <div class="dropdownRectangle">
            <div class="flexRow center">
              <input type="text" value="" placeholder="Phone Number" id="">
              <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span>
            </div>
          </div>
          <div class="dropdownRectangle" @click="toggleFilter(this)">
            <p>Recieve SMS Updates <span class="tool whats-this-icon" data-tip="Please add your handle here" tabindex="1"></span> </p>
            <div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
          </div>
          <div class="dropdownRectangle">
            <p>Time Zone</p>
            <img class="arrow" src="@/assets/icons/Icon map-location-arrow.svg">
          </div>
          <a class="orangeButton" @click="showScreen('accountSettingsScreen')">Save</a>
        </div>

        <!-- START VIEW JOB POST ADVERTISEMENT SETTINGS -->

        <div class="viewJobNavMobile">
          <a class="viewJobNavA viewJobNavSelected">Shipping</a>
          <img @click="mobileViewJobClose(this)" class="right" src="@/assets/icons/chevron-down.svg">
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
            <div class="dropdownRectangle half" id="countryListAccountSettingsFilters">
              <img src="@/assets/icons/chevron-down-sm.svg">
            </div>
          </div>
          <a class="orangeButton" @click="showScreen('accountSettingsScreen')">Save</a>
        </div>

        <div class="viewJobMobileSave">
          <a class="orangeButton" @click="showScreen('accountSettingsScreen')">Save</a>
        </div>

      </div>
    </div>

    <!-- END ACOUNT SETTINGS HTML -->

    <!-- BEGIN SCREEN MOBILE HTML -->

    <div class="screenMobile" id="mobileScreen">
    </div>

    <!-- END SCREEN MOBILE HTML -->
    
    </main>
</template>