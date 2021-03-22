<template>
    
      <div class="screen" id="reviewScreen">
        <div class="screenContainer">
          <h1 @click="closeScreen('reviewScreen')" class="right">X</h1>
          <p id="closeInfluencerPickMobile" onclick="showScreen('reviewScreen')"></p>
          <h1 id="photoViewJobTitle">Reviews</h1>

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
                    <div class="flexRow starRow">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png">
                        <img src="@/assets/icons/star.png" class="fadedStar">
                    </div>
                    <p>Job Success</p>
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
                      <p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>
                    </div>
                  </div>

                  <div class="articleJobDescription">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>
                      <p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>
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


              <div class="articleJobsButtons">
                <div class="articleJobRatingInfo">
                  <div class="flexColumn">
                    <div class="flexRow starRow">
                      <img src="@/assets/icons/star.png">
                      <img src="@/assets/icons/star.png">
                      <img src="@/assets/icons/star.png">
                      <img src="@/assets/icons/star.png">
                      <img src="@/assets/icons/star.png" class="fadedStar">
                    </div>
                    <p>Job Success</p>
                  </div>
                </div>
                <div class="findInfluencerButtons">
                    <a class="buttonOrange marginBottom25 marginTop25" @click="quickApply">Quick Apply</a>
                    <a class="buttonBeige" @click="showScreen('bidViewScreen')">Bid On Job</a>
                </div>
              </div>

            </div>

        </div>
      </div>
</template>

<script>
import ScreenMixin from '@/mixins/screenMixin'

export default {
    mixins: [ScreenMixin],
    methods: {
        quickApply() {
            
        }
    }
}
</script>