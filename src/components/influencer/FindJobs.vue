<template>
<body id="findJobs">
    <main  class="main">

        <section class="findInfluencersSection" id="findInfluencersSection">

            <!-- <div class="rowFlex campaignDashboardSubheader">
            <p id="activeCampaignTitle">Find Jobs</p>
            </div>

            <div class="rowFlex campaignNav">
            <div class="searchDashboardContainer">
                <input type="search" class="searchDashboard" placeholder="Search Jobs">
                <img src="@/assets/icons/search-small.svg">
            </div>
            <img class="mobileIcon" src="@/assets/icons/arrow-up-down.jpg" onclick="campaignDropdownShow(this, 'sortByFindJob')">
            <p class="campaignNavType campaignNavTypeSelected" onclick="jobTypeSelect(this)">ACTIVE</p>
            <p class="campaignNavType" onclick="jobTypeSelect(this)">APPLIED</p>
            </div>

            <div id="mobileInfluencerPick">
            </div>

            <div id="screenShowFindInfluencer" class="screen" onclick="closeScreen(event)">
            <div id="screenShowFindInfluencerContainer">
                <h1 class="" onclick="showScreen('screenShowFindInfluencer')">X</h1>
                <div id="influencerPickImage" class="findInfluencerPickImage"></div>
                <div id="influencerPickProfile" class="findInfluencerPickProfile"></div>
                <div id="influencerPickAction" class="findInfluencerPickAction">
                
                </div>
            </div>
            </div>

            <div id="screenShowFindInfluencerInstagram" class="screen screenShowFindInfluencerInstagram">
            <div id="screenShowFindInfluencerContainer">
                <h1 class="" onclick="closeInfluencerInstagramPick()">X</h1>

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
            </div> -->

            <div class="filterNavContainer">
            <div class="multiNavContainer">

                <div class="filterNav">
                <img class="filterQuestionMark" src="@/assets/icons/search-small.svg">
                <input id="searchJobs" type="search" class="filterInput" @blur="onSearchBlur" placeholder="Search Jobs">
                </div>

                <div class="filterNav" id="influencerFilters" @click="toggleFilters">
                    <p>Influencer Filters</p>
                    <img src="@/assets/icons/filter-icon-sm.svg">
                </div>

            </div>

            <!-- <div class="filterNav dropdownDiv" id="influencerSortBy" onclick="campaignDropdownShow(this, 'sortByFindJob')">
                <div id="sortBy" class="filter">Sort by</div>
                <img src="@/assets/icons/chevron-down-sm.svg">
            </div> -->

            <div class="filterNav dropdownDiv" id="influencerSortBy">
                <v-select :options="sortByOptions" :value="sortBy" @input="onSortBy" placeholder="Sort by" />
            </div>

            <img class="sortHighLow" src="@/assets/icons/arrow-up-down.jpg">
            </div>

            <div class="categorySelect">
                <p :class="{'medium-font': jobStatus === 'active' }" @click="switchCategory($event, 'active')">Active</p>
                <p :class="{'medium-font': jobStatus === 'applied' }" @click="switchCategory($event, 'applied')">Applied</p>
            </div>

            <JobFilters v-show="showFilters" @apply-filters="onApplyFilters" @clear-filters="onClearFilters"></JobFilters>

            <!-- MOBILE JOB VIEW ACTIVE -->

            <!-- <div class="findInfluencersContainer showMobileFlex" id="findJobsActiveContainerMobile">
            <div class="screen" id="screenFindInfluencers" onclick="closeScreen(event)"></div>

            <div id="cloneStemMobile" class="articleMobile">
                <div class="flexRow spaceBetween">
                    <div class="profilePic" >
                    <img onclick="showMobileJobPhoto()" src="@/assets/images/userPhotos/userPhoto1.jpg" class="influencerPicture">
                    <img src="@/assets/icons/gift.png" class="giftIcon" onclick="togglePopOut(this)">
                    <div class="popOut">
                        <p>Lorem ipsum productus alonsi fou toq es quo fehdi ipsol se il sentus sipmal</p>
                    </div>
                    </div>

                    <div class="influencerIdentity">
                        <p class="name boldFont">POST AD FOR MY PIZZA</p>
                        <div class="articleJobDate">
                        <div class="flexRow">
                            <p>Start Date</p>
                            <p>3/26/20</p>
                        </div>
                        <div class="flexRow">
                            <p>Start Time</p>
                            <p>1PM</p>
                        </div>
                        <div class="flexRow starRow" onclick="showScreen('reviewScreen')">
                            <img src="@/assets/icons/star.png">
                            <img src="@/assets/icons/star.png">
                            <img src="@/assets/icons/star.png">
                            <img src="@/assets/icons/star.png">
                            <img src="@/assets/icons/star.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="smallPics" onclick="showMobileJobPhoto()">
                        '<img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg">
                    </div>
                    <div class="articleJobDescription">
                    <p class="font-la-nord-semilight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>
                    <p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>
                    </div>
                    <div class="rowColumns">
                    <div>
                        <p>$100</p>
                        <p>Budget</p>
                    </div>
                    <div onclick="showScreen('couponScreen')">
                        <p>No</p>
                        <p>Code</p>
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
                    <a class="buttonOrange mobileArticleButton" onclick="turnGreenWhiteText(this)">Quick Apply</a>
                    <a class="buttonBeige mobileArticleButton" onclick="showMobileBid()">Bid On Job</a>
            </div>

            </div> -->

            <!-- MOBILE JOB VIEW APPLIED  -->

            <!-- <div class="findInfluencersContainer showMobileFlex displayNone" id="findJobsAppliedContainerMobile">
            <div class="screen" id="screenFindInfluencers" onclick="closeScreen(event)"></div>

            <div id="cloneStemAppliedMobile" class="articleMobile">
                <div class="flexRow spaceBetween">
                    <div class="profilePic" onclick="showMobileJobPhoto()">
                    <img src="@/assets/images/userPhotos/userPhoto1.jpg" class="influencerPicture">
                    </div>

                    <div class="influencerIdentity">
                        <p class="name boldFont">POST AD FOR MY PIZZA</p>
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
                    </div>
                </div>
                <div class="smallPics" onclick="showMobileJobPhoto()">
                        '<img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg"><img src="@/assets/images/userPhotos/userPhoto1.jpg">
                </div>
                    <div class="articleJobDescription">
                    <p class="font-la-nord-semilight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>
                    <p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>
                    </div>
                    <div class="rowColumns">
                    <div>
                        <p>$100</p>
                        <p>Budget</p>
                    </div>
                    <div onclick="showScreen('couponScreen')">
                        <p>No</p>
                        <p>Code</p>
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
                    <a class="buttonBeige mobileArticleButton greenBgWhiteTex">Unnaply</a>
            </div>

            </div> -->

            <!-- DESKTOP CONTAINER ACTIVE -->

            <Job v-for="jobId in jobs" :key="jobId" :jobId="jobId" @showScreen="showScreen" />

            <!-- DESKTOP CONTAINER APPLIED -->

            <!-- <div class="articlesContainer hide displayNone" id="findJobsApplyContainerDesktop">
            <div id="cloneStemDesktopApplied" class="articleJob">
                
                <div class="articleJobInfo">

                    <h1 class="contractTotal">$300</h1>
                    
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
                    <div onclick="showScreen('couponScreen')">
                        <p>No</p>
                        <p>Code</p>
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
                </div>

                <div class="articlePicRow">
                    <div class="bigPic">
                    <img src="@/assets/images/userPhotos/userPhoto1.jpg" onclick="showScreen('photoViewScreen')">
                    <div class="popOut">
                        <p>Lorem ipsum productus alonsi fou toq es quo fehdi ipsol se il sentus sipmal</p>
                    </div>
                    </div>
                </div>

                <div class="articleJobsButtons">
                    <div class="findInfluencerButtons">
                        <a class="buttonBeige greenBgWhiteTex">Unapply</a>
                    </div>
                    <div class="articleJobRatingInfo">
                    <div class="flexColumn">
                        <div class="flexRow starRow" onclick="showScreen('reviewScreen')">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        </div>
                        <p class="hoverHighlight">Reviews</p>
                    </div>
                    <div class="flexColumn">
                        <p class="orangeText">2K</p>
                        <p>Spent</p>
                    </div>
                    </div>
                </div>

            </div> 
            </div> -->

        </section>

    </main>
    <CouponCodeScreen />
    <ReviewsScreen />
    <JobBidScreen />
    <PhotoViewScreen />
</body>


</template>

<script>
import vSelect from 'vue-select'
import Job from './Job'
import JobFilters from './JobFilters'
import { CAMPAIGN_STATUS } from '@/constants'
import ScreenMixin from '@/mixins/screenMixin'
import CouponCodeScreen from './modals/CouponCodeScreen'
import ReviewsScreen from './modals/ReviewsScreen'
import JobBidScreen from './modals/JobBidScreen'
import PhotoViewScreen from './modals/PhotoViewScreen'

export default {
    mixins: [ScreenMixin],
    components: {
        vSelect,
        Job,
        JobFilters,
        CouponCodeScreen,
        ReviewsScreen,
        JobBidScreen,
        PhotoViewScreen
    },
    data() {
        return {
            showFilters: false,
            sortBy: null,
            sortByOptions: [
                { id: 1, label: 'BUDGET' },
                { id: 2, label: 'MOST RECENT' },
                { id: 3, label: 'REVIEW RATING' } 
            ],
            searchTerm: "",
            jobStatus: CAMPAIGN_STATUS.ACTIVE,
            allJobs: []
        }
    },
    computed: {
        jobs() {
            return [3];
            // return this.allJobs.filter(job => {
            //     return (
            //         job.status === this.jobStatus &&
            //         job.title.indexOf(searchTerm) > 0
            //     )
            // });
        }
    },
    methods: {
        toggleFilters() {
            this.showFilters = !this.showFilters
        },
        onApplyFilters(e) {
            console.log({e})
            this.toggleFilters();
        },
        onClearFilters(e) {
            console.log({e})
            this.toggleFilters();
        },
        onSearchBlur(e) {
            console.log({e});
            this.searchTerm = e.target.value;
        },
        onSortBy(e) {
            console.log({e});
        },
        switchCategory(e, status) {
            this.jobStatus = status;
        },
    }
}
</script>

<style scoped>
#influencerSortBy >>> .vs__dropdown-toggle {
  border: none;
}

#influencerSortBy >>> .vs__actions > svg {
  margin-left: auto;
}

#influencerSortBy >>> .vs__open-indicator {
  fill: black;
}

#influencerSortBy >>> .v-select {
    width: 100%;
}

.medium-font {
    font-family: 'LA Nord Medium';
}
</style>
