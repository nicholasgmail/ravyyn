//GLOBAL JSON DATA


//GLOBAL VARS

var mobile = false;

var showScreenActive = false;




var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;



//ACITVATE MOBILE DETECTOR
if (window.screen.width < 780) {
  mobile = true;
} else {
  mobile = false;
}




//FUNCTIONS



function ageRangeSliderActivate() {
  //ACTIVATE AGE RANGE
  $(".influencer-age-range").ionRangeSlider({
    skin: "big",
    type: "double",
    grid: false,
    min: 18,
    max: 70,
    hide_min_max: true,
    from: 25,
    to: 60,
  });
}

function copyToClipBoard(buttonAnchor) {
  let copyText = buttonAnchor.previousElementSibling.select();

  document.execCommand("copy");

  buttonAnchor.nextElementSibling.classList.toggle("displayBlock");

  setTimeout( ()=>{
    buttonAnchor.nextElementSibling.classList.toggle("displayBlock");
  },  1000);
}

function dashNumberChange(start, second, third, end, integer) {
  //INPUTTING NEW NUMBERS INTO CORRESPONDING DASH NUMBERS
  let numStart = document.getElementById("dashNumStart");
  numStart.classList.remove(numStart.classList[1]);
  numStart.classList.add("dashboardStartInt" + start);

  let num1 = document.getElementById("dashNum1");
  num1.classList.remove(num1.classList[1]);
  num1.classList.add("dashboardMiddleInt" + second);

  let num2 = document.getElementById("dashNum2");
  num2.classList.remove(num2.classList[1]);
  num2.classList.add("dashboardMiddleInt" + third);

  
  let numEnd = document.getElementById("dashNumEnd");
  numEnd.classList.remove(numEnd.classList[1]);
  numEnd.classList.add("dashboardEndInt" + end);

  console.log(integer);

  console.log( document.querySelector(".dot") );

  //CHECK FOR DECIMAL
  if(integer !== true) {
    document.querySelector(".dot").style.animation="dotAnimation 1s linear forwards 1";
  } else {
    document.querySelector(".dot").style.animation="dotAnimationHide 1s linear forwards 1";
  }
}

function deleteViewApplicant(applicantLocation) {
  applicantLocation.parentElement.remove();
}

function deletUploadPhoto(photoSibling) {
  photoSibling.nextElementSibling.remove();
  photoSibling.remove();
}



function closeScreen(event) {

  if(event.target.classList.contains("screenShow") !== true) {
    return false
  } else {
    event.target.classList.toggle("screenShow");
    document.body.classList.toggle("bodyFreeze");
  }
}

function deleteNotification(notification){

    let notificationRoot = notification.parentElement.parentElement;

    notificationRoot.remove();

}



function dropdownMobileClose () {
    document.getElementById("mobileDropdownTitle").remove();
    document.getElementById("mobileDropdownCancel").remove();
    document.querySelector(".dropdownCampaignShowMobile").classList.toggle("dropdownCampaignShowMobile");
}


function enterBid(bid) {

  let isInt = Number.isInteger( parseInt(bid.data) );

  console.log(bid.data.slice(2, -1));

  if( (isInt === false) && (bid.data.slice(2, -1) !== ".") ){
    bid.target.value = bid.target.value.slice(0, -1);
    return false
  }

  if( bid.target.value.length === 3  ) {
    let bidLength = bid.target.value.length;
    let cents = bid.target.value.slice(1);
    console.log(cents);

    bid.target.value = bid.target.value.slice(0, 1) + (".") + cents;
    return false
  }

  if( (bid.target.value.length === 5 ) ) {
    let bidLength = bid.target.value.length;
    let cents = bid.target.value.slice(3);
    console.log(cents);

    bid.target.value = bid.target.value.replace(".", "");
    bid.target.value = bid.target.value.slice(0, 2 ) + (".") + cents;
    return false
  }

  if( (bid.target.value.length > 5 ) ) {
    let bidLength = bid.target.value.length;
    let cents = bid.target.value.slice(bidLength -2);
    console.log(cents);

    bid.target.value = bid.target.value.replace(".", "");
    bid.target.value = bid.target.value.slice(0, (bidLength - 3) ) + (".") + cents;
    return false
  }

}


function favoriteSave(heart, event) {
  event.stopImmediatePropagation();
  heart. classList.toggle("heartFavorite");
}


function highlightBlackBorder(border) {
  if(document.querySelector(".borderBlackBold") !== null) {
    document.querySelector(".borderBlackBold").classList.toggle("borderBlackBold");
  }

  border.classList.toggle("borderBlackBold");
}



function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



function newCampaignCouponSlide(toggleBase){
  let slidePrevSibling = toggleBase.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

  let prevButton = document.getElementById("campaign-influencer-settings").children[0];

  let campaignTitle = document.getElementsByClassName("uploadTitles")[0].innerText;

  if(mobile === true) {
    prevButton = document.getElementById("campaign-influencer-settings").children[2];
  }

  prevButton.onclick = function(event){
    document.getElementsByClassName("couponNode")[0].classList.toggle("displayBlock");
  };

  couponNode.classList.toggle("displayBlock");

  console.log(couponNode);

  insertAfter(slidePrevSibling, couponNode);

  document.getElementById("couponNodeTitle").innerText = campaignTitle;
}

function newCampaignCouponSlideCustomAd(toggleBase){
  let slidePrevSibling = toggleBase.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

  let prevButton = document.getElementById("campaign-influencer-settings-custom-ad").children[0];

  let campaignTitle = document.getElementsByClassName("uploadTitles")[0].innerText;

  if(mobile === true) {
    prevButton = document.getElementById("campaign-influencer-settings-custom-ad").children[2];
  }

  prevButton.onclick = function(event){
    document.getElementsByClassName("couponNodeCustomAd")[0].classList.toggle("displayBlock");
  };

  couponNodeCustomAd.classList.toggle("displayBlock");

  insertAfter(slidePrevSibling, couponNodeCustomAd);

  document.getElementById("couponNodeTitle").innerText = campaignTitle;
}


function reportCampaign(campaign){
  document.getElementById("clock0").classList.toggle("reportedCampaignClock");
  showScreen('reportScreen');
}


function removeFavorite(heart) {
  heart.parentElement.remove();
}



function showCheckbox(checkbox) {
  checkbox.nextElementSibling.classList.toggle("displayBlock");
  checkbox.nextElementSibling.classList.toggle("checklistActive");
  setTimeout( ()=> {sessionStorage.setItem("checkbox", "active");}, 100);
}



function showScreen(screenName, event) {

  if (event !== undefined) {
    event.stopImmediatePropagation();
  }



  let campaignTitle = sessionStorage.getItem("campaignTitle");

  console.log(campaignTitle);

  console.log(document.getElementsByClassName("projectTitle"));

  
    Array.from(document.getElementsByClassName("projectTitle")).forEach( (title) => {
      title.innerText = campaignTitle;
      console.log(title);
    });



  let screen = document.getElementById(screenName);
  
  if( (mobile === true) && (screenName !== "mobileScreen") && (screenName !== "createFolderScreen") && (screenName !== "moveFolderScreen") && (screenName !== "new-campaign-modal") && (screenName !== "inviteJobScreen") ) {
    document.getElementById(screenName).classList.toggle("screenShowMobile");
    if( (screenName !== "doneHiringScreen") && (screenName !== "shippingAddressScreen") && (screen.children[0].children[0].id !== "mobileScreenExit") ) {
      screen.children[0].insertAdjacentHTML('afterBegin','<div id="mobileScreenExit"><img onclick="showScreen(' + "'" + screenName  + "'" + ')" src="./assets/icons/chevron-down.svg" ><p class="projectTitle">' + campaignTitle + '</p></div>')
    }

    //IF DASHBOARD
    if (document.querySelector(".dashboardCampaignContainer") !== null) {
      document.querySelector(".dashboardCampaignContainer").classList.toggle("hide");
      document.querySelector(".dashboardMobileHeader").classList.toggle("hide");
      document.querySelector(".campaignDashboardSubheader").classList.toggle("hide");
      document.querySelector(".dashboardCampaigns").classList.toggle("hide");
    }


  } else {
    document.getElementById(screenName).classList.toggle("screenShow");
    document.body.classList.toggle("bodyFreeze");
  }


  if (screenName === "inviteJobScreen") {
    event.target.classList.add("greenBgWhiteTex");
  }



  //CHECK IF SCREEN VAR IS SET PROPERLY 
  if (showScreenActive === true) {
    showScreenActive = false;
  } else {
    //TRIGGER TO CLOSE ON BODY CLICK
    setTimeout( () => {
      showScreenActive = true;
    }, 50);
  }

}


function swipeRightStart(event) {
  console.log(event);
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}


function swipeRightEnd(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure(event.target);
};

function handleGesure(target) {
    var swiped = 'swiped: ';

    console.log(touchendX + "  " + touchendY);

    if (touchendX < touchstartX) {
        console.log(swiped + 'left!');
        swipeLeftDelete(target);
    }
    if (touchendX > touchstartX) {
        console.log(swiped + 'right!');
    }
    if (touchendY < touchstartY) {
        console.log(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        console.log(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        console.log('tap!');
    }
}


function swipeLeftDelete(swipeLocation) {
  while(swipeLocation.classList.contains("viewApplicantContainer") !== true ) {
    swipeLocation = swipeLocation.parentElement
  }

  swipeLocation.remove();
}



function toggleFilter(filter) {
  filter.children[1].classList.toggle("filterToggleActive");
  filter.children[1].children[0].classList.toggle("filterToggleCircleActive");
}






function loadPage(page, event) {
  event.stopImmediatePropagation();

  window.location.href = "http://stage.ravyyn.com/" + page + ".html"; 
}




function menuOptionsClear(menuOptions) {
  menuOptions.forEach( (nav) => {
    nav.classList.remove("viewJobNavSelected")
  })
}


function menuSettingsClear(menuSettings) {
        
        menuSettings.forEach( (menu) => {

          if( menu.classList.contains("menuSettings") === true) {
            menu.classList.add("displayNone");
            menu.classList.remove("displayFlex")
          }

        })

}



function menuSettingsChange(nav, settingsId) {

  let menuOptions = Array.from(nav.parentElement.children);

  menuOptionsClear(menuOptions)


  let menuSettings = Array.from(document.getElementById(settingsId).parentElement.children);

  menuSettingsClear(menuSettings);

  nav.classList.toggle("viewJobNavSelected");
  document.getElementById(settingsId).classList.remove("displayNone");
  document.getElementById(settingsId).classList.add("displayFlex");
        
}


function mobileViewJobClose(section) {
  section.parentElement.nextSibling.nextSibling.classList.toggle("hide");
}


function navSelectedMedium(navChoice) {
  document.querySelector("#mediumFont").id="";
  navChoice.id="mediumFont";

  //NEED TO SEPERATE THIS INTO SEPERATE FUNCTION CALL
  //FOR JUST FIND JOBS PAGE TOGGLE KEEP FONT CHANGE SEPERATE
  toggleJobType()
}

function toggleNotifications(){

  document.getElementById("notificationsContainer").classList.toggle("displayFlex");

  if (mobile === true) {
    document.querySelector(".main").classList.toggle("displayNone");
  }

  setTimeout(()=>{notificationMenuActive = true}, 50);
}


function turnGreen(target) {
  target.classList.toggle("green");
}

function turnGreenWhiteText(target) {
  target.classList.toggle("greenBgWhiteTex")
}




//NEW CAMPAIGN BUTTON
function newCampaignButton() {
  document.getElementById("newCampaign").src="http://stage.ravyyn.com/new-campaign.html";
  document.getElementById("newCampaign").style.display="initial";
  document.body.style.overflow="hidden";
}

function newCampaignButtonMobile() {
  document.getElementById("newCampaign").src="http://stage.ravyyn.com/new-campaign.html";
  document.getElementById("newCampaign").style.display="initial";
}




// NEW CAMPAIGN CREATE JS - SEPERATE EVENTUALLY

//CODE FOR MOBILE ADJUSTMENTS
if(window.screen.width < 750) {

  Array.from( document.getElementsByClassName("skip") ).forEach( (button)=> {
    button.parentElement.append(button);
  });

}



function togglePopOut(anchorElement){
  anchorElement.nextElementSibling.classList.toggle("displayFlex");
}



function call(method, specialFunction) {
  console.log("iuhiuhu");

  let methodClass = method.classList;

  //FOR SHOW VIEW APPLICANTS
  if( methodClass.contains("showViewApplicant") === true ){
    showScreen("viewApplicantsScreen");
  };

  //FOR SHOW CREATE FOLDER
  if( methodClass.contains("showCreateFolder") === true ){
    showScreen("createFolderScreen");
  };

  //FOR SHOW MOVE FOLDER
  if( methodClass.contains("showMoveFolder") === true ){
    showScreen("moveFolderScreen");
  };

  if (specialFunction === "findJobsApplied") {
    sessionStorage.setItem("findJobsApplied", "true");
    loadPage("find-jobs", event);
  }


}





//JQUERY IMPORTS FROM OLD BUILD

$(document).ready(function(){

    /*
    * Mobile Nav
    */ 
    var mobileMenuOverlay = $('.mobile-menu-overlay'),
        outsideMobileMenu = $('#main-nav-mobile .outside'),
        mobileOpenBtn = $('.navbar-toggler'),
        mobileNavCloseBtn = $('#menu-close-btn'),
        mobilemenuWrap = $('#main-nav-mobile')

    function closeMobileMenu() {
        mobilemenuWrap.removeClass('active')
        mobileMenuOverlay.removeClass('active')
    }
    function openMobileMenu() {
        mobilemenuWrap.addClass('active')
        mobileMenuOverlay.addClass('active')
    }

    // close on window resize 
    $(window).resize(function() {
        closeMobileMenu();
    })

    outsideMobileMenu.on('click',function() {
        closeMobileMenu();
    })

    $('.nav-link').on('click',function() {
        closeMobileMenu();
    })
    mobileOpenBtn.on('click', function() {
        openMobileMenu();
    })
    mobileNavCloseBtn.on('click', function() {
        closeMobileMenu();
    })

});
    

function activateSupportChat() {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5f453d731e7ade5df443d805/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
}






function phoneBuzz(){
  window.navigator.vibrate(200);
}