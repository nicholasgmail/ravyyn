//SESSION CHECK

let appliedSearch = sessionStorage.getItem("findJobsApplied");

if (appliedSearch === "true") {
  if (mobile === true) {toggleJobTypeMobile()}
    else {
      toggleJobType()
    }
}



/* IMPORTED VALUES */

var ageRangeList = document.getElementById("age-range-field") ;

var engagementRateList = '<p>Low to High</option>'+
  '<p>High to Low</p>';

var genderList = '<p>Male</p>'+
  '<p>Female</p>'+
  '<p>Both</option>';

var successRatingList = '<p>Low to High</option>'+
  '<p>High to Low</p>';



/* PAGE SPECIFIC LISTS */


var budgetList = '<select>'+
  '<option disabled="" selected="">Budget</option>'+
  '<option value="50">$50</option>'+
  '<option value="100">$100</option>'+
  '<option value="150">$150</option>'+
  '</select>';

var couponList = '<select>'+
  '<option disabled="" selected="">Coupon</option>'+
  '<option value="100">Yes</option>'+
  '<option value="150">No</option>'+
  '</select>';

var storyOnlyList = '<select>'+
  '<option disabled="" selected="">Story Only</option>'+
  '<option value="Feed Only">Feed Only</option>'+
  '<option value="Both">Both</option>'+
  '</select>';

var postToFeedList = '<select>'+
  '<option disabled="" selected="">Post to Feed</option>'+
  '<option value="Story Only">Story Only</option>'+
  '<option value="Feed Only">Feed Only</option>'+
  '<option value="Both">Both</option>'+
  '</select>';

var customAdList = '<select>'+
  '<option disabled="" selected="">Custom Ad</option>'+
  '<option value="Feed Only">Custom Ad</option>'+
  '<option value="Both">Ad Provided</option>'+
  '</select>';

var locationRequiredList = '<select>'+
  '<option disabled="" selected="">Location Required</option>'+
  '<option value="high">Location Required</option>'+
  '<option value="low">Location Not Required</option>'+
  '</select>';

var receiveProductList = '<select>'+
'<option disabled="" selected="">Receive Product</option>'+
'<option value="high">With Product</option>'+
'<option value="low">Without Product</option>'+
'</select>';

var advertisingRatingList = '<select>'+
  '<option disabled="" selected="">Advertiser Rating</option>'+
  '<option value="high">1 Star</option>'+
  '<option value="low">2 Star</option>'+
  '<option value="high">3 Star</option>'+
  '<option value="high">4 Star</option>'+
  '<option value="high">5 Star</option>'+
  '</select>';


//MOBILE FILTER ONCLICK
Array.from(document.getElementById("filtersMobile").children).forEach( (filter) => {
  filter.onclick = (event) => {

    console.log(event.target.tagName);

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
      case "Budget" : filterParameters.innerHTML = "";filterParameters.innerHTML = budgetList; break;
      case "Country" :  filterParameters.innerHTML = countryList();break;
      case "Coupon" :  filterParameters.innerHTML = couponList;break;
      case "Location Required"  : filterParameters.innerHTML = locationRequiredList; break;
      case "Post to Story"  : filterParameters.innerHTML = storyOnlyList; break;
      case "Post to Feed" : filterParameters.innerHTML = postToFeedList; break;
      case "Custom Ad" : filterParameters.innerHTML = customAdList; break;
      case "Receive Product" : filterParameters.innerHTML = receiveProductList; break;
      case "Advertiser Rating" : filterParameters.innerHTML = advertisingRatingList; break;
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
      //document.body.style.overflow = "hidden";
      //document.getElementById("screenFindInfluencers").classList.toggle("screenFindInfluencers");
    }

  }
})






      //CLOSE MOBILE FILTER
      document.getElementById("mobileFilterClose").onclick = () => {
          document.getElementById("filtersMobileParameters").style.display="none";
          //document.body.style.overflow = "initial";
          //document.getElementById("screenFindInfluencers").classList.toggle("screenFindInfluencers");

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
        document.getElementById("searchJobs").placeholder="Search";
      }




//CLONE CODE FOR MOBILE ARITCLES

if (mobile === true) {

  let influencerNumber = 0;

  //APPLYING CLONE TO ACTIVE JOBS

  for(influencerNumber; influencerNumber < 8; influencerNumber++){
    let clone = document.getElementById("cloneStemMobile").cloneNode(true);
    clone.id="";

    //APPLYING TOP RATED AND ACTIVE STORY TO FIRST TWO CLONES
    if (influencerNumber !== 2) {
      clone.children[1].remove();
    }

    document.getElementById("findJobsActiveContainerMobile").append(clone);
  }

  influencerNumber = 0;

  //APPLYING CLONE TO APPLIED JOBS

  for(influencerNumber; influencerNumber < 8; influencerNumber++){
    let clone = document.getElementById("cloneStemAppliedMobile").cloneNode(true);
    clone.id="";

    //APPLYING TOP RATED AND ACTIVE STORY TO FIRST TWO CLONES
    if (influencerNumber !== 2) {
      clone.children[1].remove();
    }

    document.getElementById("findJobsAppliedContainerMobile").append(clone);
  }



} else {
  //IF DESKTOP TRUE

  let influencerNumber = 0;

  //FIRST FOR ACTIVE

  for(influencerNumber; influencerNumber < 8; influencerNumber++){
    let clone = document.getElementById("cloneStemDesktopActive").cloneNode(true);
    clone.id="";

    //REMOVING EXTRA PHOTOS - CHANGE INTO IF DATA HAS THEN ADD
    if (influencerNumber === 2) {
      clone.children[1].innerHTML += '<div class="smallPics" onclick="showScreen(' + "'photoViewScreen'" + ')">' +
        '<img src="./assets/images/userPhotos/userPhoto1.jpg">' +
        '<img src="./assets/images/userPhotos/userPhoto1.jpg">' +
        '<img src="./assets/images/userPhotos/userPhoto1.jpg">' +
        '</div>';
    }

    if ( (influencerNumber === 0) || (influencerNumber === 1) ) {
      //clone.children[0].children[0].classList.add("findInfluencerStory");
    }

    //REMOVING COUPONS FOR SHOWING DIFF TYPES OF JOBS
    if (influencerNumber !== 1) {
      clone.children[0].children[4].children[1].children[0].innerText="NO";
      clone.children[0].children[4].children[1].children[0].onmouseover = function() {
        return false
      }
    }

    document.getElementById("findInfluencersContainerDesktop").append(clone);
  }

  influencerNumber = 0;

  //SECOND FOR APPLIED

  for(influencerNumber; influencerNumber < 8; influencerNumber++){
    let clone = document.getElementById("cloneStemDesktopApplied").cloneNode(true);
    clone.id="";

    //REMOVING EXTRA PHOTOS - CHANGE INTO IF DATA HAS THEN ADD
    if (influencerNumber === 1) {
      clone.children[1].innerHTML += '<div class="smallPics" onclick="showScreen(' + "'photoViewScreen'" + ')">' +
        '<img src="./assets/images/userPhotos/userPhoto1.jpg">' +
        '<img src="./assets/images/userPhotos/userPhoto1.jpg">' +
        '<img src="./assets/images/userPhotos/userPhoto1.jpg">' +
        '</div>';
    }

    if ( (influencerNumber === 0) || (influencerNumber === 1) ) {
      //clone.children[0].children[0].classList.add("findInfluencerStory");
    }

    document.getElementById("findJobsApplyContainerDesktop").append(clone);
  }

}



function showMobileJobPhoto() {
  document.getElementById("mobileInfluencerPick").classList.toggle("mobileInfluencerPickShow");

  //document.getElementById("influencerPickNameMobile").innerText = "Job Title";

  //DOCUMENT STYLE
  document.getElementById("findInfluencersSection").classList.toggle("findInfluencersSectionMobileInfluencerPick");

  document.getElementById("findInfluencersSection").style.height="690px";

  //CLONE INFLUENCER
  document.getElementById("mobileInfluencerPick").innerHTML =  '<p id="closeInfluencerPickMobile" onclick="closeInfluencerPickMobile()"> < </p>'+
    '<h1 class="mobilePickName">Job Title</h1>'+
    '<div class="screenContainer center">'+
    '<div class="articlePicRow">'+
      '<p class="left mobileArrowSelect"> < </p>'+
      '<p class="right mobileArrowSelect"> > </p>'+
          '<div class="bigPic">'+
            '<img src="./assets/images/userPhotos/userPhoto1.jpg">'+
          '</div>'+
          '<div class="smallPics">'+
            '<img src="./assets/images/userPhotos/userPhoto1.jpg">'+
            '<img src="./assets/images/userPhotos/userPhoto1.jpg">'+
            '<img src="./assets/images/userPhotos/userPhoto1.jpg">'+
            '<img src="./assets/images/userPhotos/userPhoto1.jpg">'+
          '</div>'+
          '</div>'+
          '<a class="buttonOrange">Quick Apply</a>'+
          '<a class="buttonBeige" onclick="replaceWithMobileBid()">Bid on Job</a>'+
        '</div>';
  
}

function replaceWithMobileBid() {
  
  document.getElementById("findInfluencersSection").style.height="1050px";

  //CLONE INFLUENCER
  document.getElementById("mobileInfluencerPick").innerHTML = '<p id="closeInfluencerPickMobile" onclick="closeInfluencerPickMobile()"> < </p>'+  
    '<div class="screenContainer bidMobile">'+
    '<h1 onclick="showScreen(' + "'bidViewScreen'" + ')" class="right">X</h1>'+
    '<h1 id="photoViewJobTitle" >Submit Your Bid</h1>'+
    '<p class="orangeText font-la-nord-bold marginBottom25">JOB DETAILS</p>'+
    '<p class="articleJobTitle">Fitness Influencer For Protein Shake</p>'+
    '<div class="articleJobDate">'+
    '<div class="flexRow">'+
    '<p>Start Date</p>'+
    '<p>3/26/20</p>'+
    '</div>'+
    '<div class="flexRow">'+
    '<p>Start Time</p>'+
    '<p>1PM</p>'+
    '</div>'+
    '</div>'+
    '<div class="rowColumns boldRowColumns spaceBetween">'+
    '<div>'+
    '<p>$100</p>'+
    '<p>Budget</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Post</p>'+
    '</div>'+
    '<div>'+
    '<p>Yes</p>'+
    '<p>Story</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Link In Bio</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Custom Post</p>'+
    '</div>'+
    '</div>'+
    '<div class="articleJobDescription">'+
    '<p class="font-la-nord-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>'+
    '<p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>'+
    '</div>'+
    '<div class="flexRow spaceBetween bidContainer marginBottom25">'+
    '<h1 class="orangeText font-la-nord-bold">ENTER BID*</h1>'+
    '<div class="dropdownRectangle bidEnter">'+
    '<p class="orangeText left">$</p>'+
    '<input class="font-la-nord-bold" type="text" name="" placeholder="0.00">'+
    '</div>'+
    '</div>'+
    '<p class="marginBottom25 marginTop25"> <span class="orangeText">MESSAGE</span> (OPTIONAL)</p>'+
    '<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, "></textarea>'+
    '<a class="orangeButton bidButton" onclick="closeInfluencerPickMobile()">Send Bid</a>'+
    '</div>';
  
}


function showMobileBid() {
  document.getElementById("mobileInfluencerPick").classList.toggle("mobileInfluencerPickShow");

  //document.getElementById("influencerPickNameMobile").innerText = "Job Title";

  //DOCUMENT STYLE
  document.getElementById("findInfluencersSection").classList.toggle("findInfluencersSectionMobileInfluencerPick");

  document.getElementById("findInfluencersSection").style.height="1050px";

  //CLONE INFLUENCER
  document.getElementById("mobileInfluencerPick").innerHTML = '<p id="closeInfluencerPickMobile" onclick="closeInfluencerPickMobile()"> < </p>'+  
    '<div class="screenContainer bidMobile">'+
    '<h1 onclick="showScreen(' + "'bidViewScreen'" + ')" class="right">X</h1>'+
    '<h1 id="photoViewJobTitle" >Submit Your Bid</h1>'+
    '<p class="orangeText font-la-nord-bold marginBottom25">JOB DETAILS</p>'+
    '<p class="articleJobTitle">Fitness Influencer For Protein Shake</p>'+
    '<div class="articleJobDate">'+
    '<div class="flexRow">'+
    '<p>Start Date</p>'+
    '<p>3/26/20</p>'+
    '</div>'+
    '<div class="flexRow">'+
    '<p>Start Time</p>'+
    '<p>1PM</p>'+
    '</div>'+
    '</div>'+
    '<div class="rowColumns boldRowColumns spaceBetween">'+
    '<div>'+
    '<p>$100</p>'+
    '<p>Budget</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Coupon</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Post</p>'+
    '</div>'+
    '<div>'+
    '<p>Yes</p>'+
    '<p>Story</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Link In Bio</p>'+
    '</div>'+
    '<div>'+
    '<p>No</p>'+
    '<p>Custom Post</p>'+
    '</div>'+
    '</div>'+
    '<div class="articleJobDescription">'+
    '<p class="font-la-nord-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>'+
    '<p class="articleJobDescriptionMore" onclick="showMoreJobDescription(this)">more</p>'+
    '</div>'+
    '<div class="flexRow full">'+
    '<h1 class="orangeText font-la-nord-bold">ENTER BID*</h1>'+
    '</div>'+
    '<div class="flexRow full bidBudgetRow bidContainer marginBottom25">'+
    '<p>Campaign</p>'+
    '<div class="dropdownRectangle bidEnter">'+
    '<p class="orangeText left">$</p>'+
    '<input class="font-la-nord-bold" type="text" name="" placeholder="0.00">'+
    '</div>'+
    '</div>'+
    '<div class="flexRow full bidBudgetRow bidContainer marginBottom25">'+
    '<p>Coupon</p>'+
    '<div class="dropdownRectangle bidEnter">'+
    '<p class="orangeText left">$</p>'+
    '<input class="font-la-nord-bold" type="text" name="" placeholder="0.00">'+
    '</div>'+
    '</div>'+
    '<p class="marginBottom25 marginTop25"> <span class="orangeText">MESSAGE</span> (OPTIONAL)</p>'+
    '<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, "></textarea>'+
    '<a class="orangeButton bidButton" onclick="closeInfluencerPickMobile()">Send Bid</a>'+
    '</div>';
  
}



//CLOSE MOBILE
function closeInfluencerPickMobile() {
  document.getElementById("mobileInfluencerPick").classList.toggle("mobileInfluencerPickShow");
  document.getElementById("findInfluencersSection").classList.toggle("findInfluencersSectionMobileInfluencerPick");
  document.getElementById("findInfluencersSection").style.height="initial";
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



function jobTypeSelect(jobType) {
  if (jobType.classList.contains("campaignNavTypeSelected") === true) { 
    return false
  } 
  else {
    Array.from(document.getElementsByClassName("campaignNavType") ).forEach((jobType) => {
      jobType.classList.remove("campaignNavTypeSelected");
    })

    jobType.classList.add("campaignNavTypeSelected");
  }

  //PUT CODE FOR SWITCHING CAMPAIGN TYPE HERE

  toggleJobTypeMobile()
}



function showMoreJobDescription(button) {
  button.parentElement.classList.toggle("noMaxHeight");
}


function toggleJobType() {
  document.getElementById("findInfluencersContainerDesktop").classList.toggle("displayNone");
  document.getElementById("findJobsApplyContainerDesktop").classList.toggle("displayNone");
}

function toggleJobTypeMobile() {
  document.getElementById("findJobsActiveContainerMobile").classList.toggle("displayNone");
  document.getElementById("findJobsAppliedContainerMobile").classList.toggle("displayNone");
}





function closeInfluencerInstagramPick() {
  showScreen("screenShowFindInfluencerInstagram")
}