var ageRangeList = document.getElementById("age-range-field") ;

var engagementRateList = '<p>Low to High</option>'+
  '<p>High to Low</p>';

var genderList = '<p>Male</p>'+
  '<p>Female</p>'+
  '<p>Both</option>';

var successRatingList = '<p>Low to High</option>'+
  '<p>High to Low</p>';


//MOBILE FILTER ONCLICK
Array.from(document.getElementById("filtersMobile").children).forEach( (filter) => {
  filter.onclick = (event) => {

    if (event.target.tagName === "SELECT") {
      return false
    }
    
    //REMOVE SELECT CLASS FROM OTHER FILTERS
    Array.from(document.getElementById("filtersMobile").children).forEach( (filter) => {
      filter.classList.remove("filterChoose")
    });

    //SHOW MOBILE SELECT
    console.log(event.target.nextElementSibling);


    let parent = event.target.parentElement;

    if (event.target.children.length > 0) {
      parent = event.target;
    } else {
      parent = event.target.parentElement;
    }

    //LOOK AT FOR ASSIGNING ORANGE BG
    parent.classList.toggle("filterChoose");

    document.getElementById("filterParameterName").innerText = parent.children[0].innerText;

    //GRAB AND PUT FILTER VALUES HERE
    let parameter = document.getElementById("filterParameterName").innerText;
    let filterParameters = document.getElementById("filterParameters");

    switch(parameter) {
      case "Age Range" : filterParameters.innerHTML = "";filterParameters.appendChild(ageRangeList); break;
      case "Country" :  filterParameters.innerHTML = countryList();break;
      case "Gender"  : filterParameters.innerHTML = gender; break;
      case "Minimum Follower Count" : filterParameters.innerHTML = minimumFollowerCount; break;
      case "Engagement Rate" : filterParameters.innerHTML = engagementRateList; break;
      case "Target Audience" : filterParameters.innerHTML = interestsList(); break;
      case "Success Rating" : filterParameters.innerHTML = successRatingList; break;
      default : break;
    }


    //ONCLICK FOR PARAMETER CHOOSING
    Array.from(document.getElementById("filterParameters").children).forEach( (filter) => {
      
      if(filter.tagName === "P"){
        filter.onclick = (event) => {
          event.target.classList.toggle("filterChoose");
        }
      }

    })

    //STYLE BODY && ELEMENTS IF NOT OPEN
    if(document.getElementById("filtersMobileParameters").style.display !== "flex") {
      document.getElementById("filtersMobileParameters").style.display="flex";
      document.body.style.overflow = "hidden";
      document.getElementById("screenFindInfluencers").classList.toggle("screenFindInfluencers");
    }

  }
})






      //CLOSE MOBILE FILTER
      document.getElementById("mobileFilterClose").onclick = () => {
          document.getElementById("filtersMobileParameters").style.display="none";
          document.body.style.overflow = "initial";
          document.getElementById("screenFindInfluencers").classList.toggle("screenFindInfluencers");

          //CLEAR SELECTED FILTER
          Array.from(document.getElementById("filtersMobile").children).forEach( (filter) => {
            filter.classList.remove("filterChoose")
          })

          //CLEAR SELECTED PARAMS
          Array.from(document.getElementById("filterParameters").children).forEach( (filter) => {
            filter.classList.remove("filterChoose")
          })
      }

      //CLEAR MOBILE FILTER
      document.getElementById("clearMobileFilters").onclick = () => {

          Array.from(document.getElementById("filterParameters").children).forEach( (filter) => {
            filter.classList.remove("filterChoose")
          })
      }




      //ONCLICK SORT BY BUTTON TOGGLES DROPDOWN FILTER MENU
      function showFilters() {
        document.getElementById("filters").classList.toggle("filtersShow");
      }

      document.getElementById("backArrowFilter").onclick = () => {
        document.getElementById("filters").classList.toggle("filtersShow");
      }


      //CODE FOR SEARCH INFLUENCER PLACEHOLDER
      if(window.screen.width < 780) {
        document.getElementById("searchInfluencers").placeholder="Search";
      }


      let influencerNumber = 0;

      for(influencerNumber; influencerNumber < 8; influencerNumber++){
        let clone = document.getElementById("cloneStem").cloneNode(true);
        clone.id="";

        //APPLYING TOP RATED AND ACTIVE STORY TO FIRST TWO CLONES
        if (influencerNumber === 0) {
          clone.innerHTML += "<div class='findInfluencerTopRated'><img src='./assets/icons/star.png'/> <p class='rustText'>Top Rated</p> </div>"
        }

        if ( (influencerNumber === 0) || (influencerNumber === 1) ) {
          clone.children[0].children[0].classList.add("findInfluencerStory");
        }

        document.getElementById("findInfluencersContainer").append(clone);
      }




      //ON INFLUENCER ARTICLE CLICK
      Array.from(document.getElementsByClassName("influencerArticle")).forEach( (influencer) => {
        
        influencer.onclick = (influencer) => {

          console.log(influencer.target)

          //ACTIVATES REVIEW SHOW WHEN CLICKED
          //NEED TO STRUCTURE BETTER IN ACTUALL APP
          if ( (influencer.target.classList[0] === "influencerSuccess") || (influencer.target.classList[0] === "successRate") || (influencer.target.parentElement.classList[0] === "influencerSuccess") ) {
            return false;
          }

          //ACTIVATES INSTAGRAM SHOW WHEN CLICKED
          //NEED TO STRUCTURE BETTER IN ACTUALL APP
          if ( influencer.target.classList[0] === "findInfluencerInstagram") {
            return false;
          }

          //ACTIVATES ADD TO FAVORITES WHEN CLICKED
          //NEED TO STRUCTURE BETTER IN ACTUALL APP
          if ( influencer.target.classList[0] === "right") {
            return false;
          }

          //ACTIVATES GO TO MESSAGES PAGE WHEN CLICKED
          //NEED TO STRUCTURE BETTER IN ACTUALL APP
          if ( influencer.target.href === "http://stage.ravyyn.com/messages-influencer.html") {
            loadPage("messages-influencer", event);
            return false;
          }

          //RETURN TO THIS LATER FOR SORTING OUT WHEN PICTURE CLICKED WHAT HAPPENS

          if ( (influencer.target.classList.length < 1) && (influencer.target.parentElement.classList.contains("influencerBottomPics") === false) ) {
            return false;
          }
          

          //RESUMES SHOW INFLUENCER FUNCTION IF NOT INSTAGRAM BUTTON CLICK
          else {

            //CLEARS SHOW INSTAGRAM IF SHOW INSTAGRAM ACTIVE
            if( document.getElementsByClassName("screenShowFindInfluencerInstagram")[0].style.display === "flex" ) {
              closeInfluencerInstagramPick()
            }

            let clone;


              //IF PHOTO FROM BOTTOM PHOTO LAYER CLICKED
            if (influencer.target.parentElement.classList.contains("influencerBottomPics") === true) {
              influencer = influencer.target.parentElement.parentElement;
              clone = influencer.cloneNode(true);
              console.log(influencer);
            } else {
              clone = influencer.target.cloneNode(true)
            }


            //IF MOBILE OR DESKTOP
            if (window.screen.width < 780) {
              //MOBILE APPEND

              document.getElementById("mobileInfluencerPick").classList.toggle("mobileInfluencerPickShow");


              if(document.getElementById("mobileInfluencerPick").children.length > 2) {
                document.getElementById("mobileInfluencerPick").children[2].remove();
              }

              let buttonMessage = '<a href="http://stage.ravyyn.com/messages-influencer.html" id="messageInfluencer" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn">Message</a>';

              let influencerBio = "<p class='influencerBio'>Find uxcepteur sint occacacte non prodient, sut in qui officia deserunt mollit anim id est eopksio laborum. Find unexcacd non prodient, sut in qui officia sut</p>";

              let name = clone.children[0].children[2].children[0].innerText;

              //REMOVE NAME
              clone.children[0].children[2].children[0].remove();

              document.getElementById("influencerPickNameMobile").innerText = name;

              //ADD MESSAGE BUTON AND BIO
              clone.children[2].insertAdjacentHTML("afterEnd", influencerBio);
              clone.innerHTML += buttonMessage

              //DOCUMENT STYLE
              document.getElementById("findInfluencersSection").classList.toggle("findInfluencersSectionMobileInfluencerPick");

              //CLONE INFLUENCER
              document.getElementById("mobileInfluencerPick").append(clone);

            } else {

              //DESKTOP APPEND

              //ACCTIVATE SHOWSCREEN
              //ADDED DELAY SO GLOBAL CLICKOUT DOESN"T AUTO TRIGGER
              setTimeout( ()=> {
                showScreen("screenShowFindInfluencer");
              }, 50);

              //CLEAR CONTAINERS
              document.getElementById("influencerPickImage").innerHTML = "";

              document.getElementById("influencerPickProfile").innerHTML = "";

              document.getElementById("influencerPickProfile").innerHTML = "";

              document.getElementById("influencerPickAction").innerHTML = "";
              
              let profileImage = clone.children[0].children[0];

              let profileImages = clone.children[3];

              let profileAbout = clone.children[1].children[0];

              let profileStats = clone.children[2];

              let profileSuccess = clone.children[0].children[1];

              let profileTopRated = clone.children[5];



              //ADD FAKE TO SHOW SCROLL FUNCTION
              for (let z=0;z< 16;z++) {
                let imageClone = profileImages.children[z +1].cloneNode(true);
                profileImages.append(imageClone);
              }


              //APEND CLONE TO SCREEN
              document.getElementById("influencerPickImage").append(profileImage);

              document.getElementById("influencerPickProfile").append(profileAbout);

              document.getElementById("influencerPickProfile").append(profileStats);

              //CHECK FOR TOPRATED
              if(profileTopRated !== undefined) {
                document.getElementById("influencerPickAction").append(profileTopRated);
              }

              document.getElementById("influencerPickAction").append(profileSuccess);

              //ADD BOILER PLATE + IMAGES
              let buttonJob = '<a href="#" id="inviteToJob" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn" onclick="showScreen(' + "'inviteJobScreen'" + ', event)">Invite to Job</a>';
              let buttonMessage = '<a href="http://stage.ravyyn.com/messages-influencer.html" id="messageInfluencer" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn">Message</a>';

              document.getElementById("influencerPickAction").innerHTML += buttonJob;

              document.getElementById("influencerPickAction").innerHTML +=buttonMessage;

              let influencerBio = "Find uxcepteur sint occacacte non prodient, sut in qui officia deserunt mollit anim id est eopksio laborum. Find unexcacd non prodient, sut in qui officia sut";

              document.getElementById("influencerPickProfile").append(influencerBio);
              document.getElementById("influencerPickProfile").append(profileImages);

            }

          }//END OF ELSE STATEMENT IF NOT INSTAGRAM CLICK

        }
      })


//CLOSE FIND INFLUENCER PICK MOBILE
function closeInfluencerPickMobile() {
  document.getElementById("mobileInfluencerPick").classList.toggle("mobileInfluencerPickShow");
  document.getElementById("findInfluencersSection").classList.toggle("findInfluencersSectionMobileInfluencerPick");
}

      
//INSTAGRAM CLICK AND SHOW
function showInstagram(instagram, event) {
        
  //PREVENTS FROM RUNNING TWICE / NEED MORE ELEGEANT SOLUTION
  if (event === undefined) {
    return false
  }

  event.stopImmediatePropagation();

  let instagramUrl = instagram.id;


  //CHECK IF INFLUENCER PICK ACTIVE && CLOSES IT
  //DIFFERENTIATE BETWEEN MOBILE AND LARGER SCREENS
  if(window.screen.width < 780) {
    //closeInfluencerPickMobile()
  } 
        //IF LARGER THAN MOBILE
        else {

          //THIS CHECKKS IF SHOW INFLUENCER PICK IS ACTIVE
          //WILL NEED TO MAKE MORE ROBUST IF OTHER SCREENS
          //COME INTO PLAY
          if( document.querySelector(".screenShow") !== null ) {
            setTimeout( ()=> {
              showScreen("screenShowFindInfluencer");
            }, 50);
          }

        }


        //ACTIVATE SHOW SCREEN
        //ADDED TIMEOUT SO GLOBAL CLICK OUT DOSENT AUTO CLOSE
        setTimeout( ()=> {
          showScreen("screenShowFindInfluencerInstagram");
        }, 50);
}

function showMoreJobDescription(textAnchor) {
  textAnchor.parentElement.classList.toggle("noMaxHeight");
}



function closeInfluencerInstagramPick() {
  showScreen("screenShowFindInfluencerInstagram")
}