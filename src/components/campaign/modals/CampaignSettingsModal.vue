<template>
    	<div class="center screenContainer">
    		<!-- <h1 @click="showScreen('viewJobScreen')" class="right">X</h1> -->
    		
    		<div class="viewJobNav">
    			<a class="viewJobNavA viewJobNavSelected" @click="menuSettingsChange($event, 'viewJobOverviewSettings')">Overview</a>
    			<a class="viewJobNavA" @click="menuSettingsChange($event, 'viewJobAdvertisementSettings')">Advertisement Settings</a>
    			<a class="viewJobNavA" @click="menuSettingsChange($event, 'viewJobInfluencerSettings')">Influencer Settings</a>
    		</div>

    		<div class="viewJobNavMobile">
    			<a class="viewJobNavA viewJobNavSelected">Overview</a>
    			<img @click="mobileViewJobClose" class="right" src="@/assets/icons/chevron-down.svg">
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
    			<a class="orangeButton" @click="showScreen('viewJobScreen')">Save</a>
    		</div>

    		<!-- START VIEW JOB POST ADVERTISEMENT SETTINGS -->

    		<div class="viewJobNavMobile">
    			<a class="viewJobNavA viewJobNavSelected">Advertisement Settings</a>
    			<img @click="mobileViewJobClose" class="right" src="@/assets/icons/chevron-down.svg">
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
    			<div class="dropdownRectangle" @click="toggleFilter($event)">
    				<p>Post to Feed</p>
    				<div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
    			</div>
		      <div class="dropdownRectangle" @click="toggleFilter($event)">
    				<p>Share to Story</p>
    				<div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
    			</div>
    			<div class="dropdownRectangle" @click="toggleFilter($event)">
    				<p>Add Link to Bio</p>
    				<div class="dropDownToggle"><span class="dropDownToggleCircle"></span></div>
    			</div>
    			<a class="orangeButton" @click="showScreen('viewJobScreen')">Save</a>
    		</div>

    		<!-- START VIEW JOB POST INFLUENCER SETTINGS -->

    		<div class="viewJobNavMobile">
    			<a class="viewJobNavA viewJobNavSelected">Influencer Settings</a>
    			<img @click="mobileViewJobClose" class="right" src="@/assets/icons/chevron-down.svg">
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
    			<a class="orangeButton" @click="onSave()">Save</a>
    		</div>

    		<div class="viewJobMobileSave">
    			<a class="orangeButton" @click="onSave()">Save</a>
    		</div>

    	</div>

</template>

<script>
import ModalMixin from '@/mixins/modalMixin'

export default {
  mixins: [ModalMixin],
  methods: {
    onSave() {

    }
  }
}
</script>

