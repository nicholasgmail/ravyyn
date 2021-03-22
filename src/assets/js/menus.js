//GLOBAL JSON DATA


//GLOBAL VARS

var campaignDropdownActive = false;

var notificationMenuActive = false;

var mobileDropdownActivate = false;

var mobileScreen = document.getElementById("mobileScreen");

//BODY ONCLICK FUNCTION TO HANDLE CLOSING DROPDOWN MENU OR 
//NOTIFICATION SYSTEM
document.body.onclick = function(e){

  e.stopImmediatePropagation();

  let checklistActive = sessionStorage.getItem("checkbox");

  //CONDITION FOR DROPDOWN MENU CLOSE
  if ( (campaignDropdownActive === true) && (document.querySelector(".dropdownCampaignShow") !== null) ) {
    document.querySelector(".dropdownCampaignShow").classList.toggle("dropdownCampaignShow");
    campaignDropdownActive = false;
  }

  //CONDITION FOR NOTIFICATION MENU CLOSE
  if ( (notificationMenuActive === true) && (document.getElementById("notificationsContainer").classList.contains("displayFlex") === true) ) {
    document.getElementById("notificationsContainer").classList.toggle("displayFlex");
    notificationMenuActive = false;
  }


  if ( (checklistActive === "active") && (e.target.parentElement.classList.contains("checkbox") === false) && (e.target.classList.contains("checkbox") === false) ) {
    document.querySelector(".checklistActive").classList.toggle("displayBlock");
    document.querySelector(".checklistActive").classList.toggle("checklistActive");
    sessionStorage.setItem("checkbox", "");
  }

};



//DROP DOWN MENUS

var menuBase = document.createElement("div");

menuBase.classList.add("campaign-active-settings");


var dropdownActiveInFolder = '<p onclick="showScreen(' + "'viewJobScreen'" + ')" >Campaign Settings</p>'+
  '<p onclick="showScreen(' + "'viewApplicantsScreen'" + ')">Applicants</p>'+
  '<a href="http://stage.ravyyn.com/find-influencers.html">Keep Hiring</a>'+
  '<p onclick="showScreen(' + "'shippingAddressScreen'" + ')" >Ship A Product</p>'+
  '<p>Discount Code</p>'+
  '<p>Clone Job Post</p>'+
  '<p onclick="deleteCampaign(this)">Remove From Folder</p>';

var dropdownActiveNoFolder = '<p onclick="showScreen(' + "'viewJobScreen'" + ')" >Campaign Settings</p>'+
  '<p onclick="showScreen(' + "'viewApplicantsScreen'" + ')">Applicants</p>'+
  '<a href="http://stage.ravyyn.com/find-influencers.html">Keep Hiring</a>'+
  '<p onclick="showScreen(' + "'shippingAddressScreen'" + ')" >Ship A Product</p>'+
  '<p>Discount Code</p>'+
  '<p>Clone Job Post</p>'+
  '<p onclick="showScreen(' + "'moveFolderScreen'" + ')" >Move To Folder</p>';

var dropdownCompleted = '<p onclick="showScreen(' + "'viewJobScreen'" + ')">Campaign Settings</p>'+
  '<p onclick="showScreen(' + "'viewApplicantsScreen'" + ')">Applicants</p>'+
  '<p>Clone Job Post</p>'+
  '<p onclick="deleteCampaign(this)" >Delete</p>';

var dropdownDrafts = '<p onclick="showScreen(' + "'doneHiringScreen'" + ')">Complete Job Post</p>'+
  '<p onclick="showScreen(' + "'viewJobScreen'" + ')">Campaign Settings</p>'+
  '<p onclick="deleteCampaign(this)">Delete</p>';

 var dropdownPending = '<p onclick="showScreen(' + "'viewJobScreen'" + ')">Campaign Settings</p>'+
  '<p onclick="showScreen(' + "'viewApplicantsScreen'" + ')">Applicants</p>'+
  '<p>Discount Code</p>'+
  '<p onclick="deleteCampaign(this)">Delete</p>';

var dropdownFolder = '<p>View Folder</p>'+
  '<p>Delete Folder</p>';

var dropdownFolderNew = '<p onclick="deleteCampaign(this)" >Delete Folder</p>';

var dropdownInfluencer = '<p onclick="showScreen(' + "'shippingAddressScreen'" + ')" >Ship A Product</p>'+
  '<p>Send Message</p>'+
  '<p onclick="showScreen(' + "'reviewScreen'" + ')">Review</p>'+
  '<p>See Instagram Post</p>'+
  '<a onclick="showScreen(' + "'reportScreen'" + ')">Report</a>';

  var dropdownInfluencerDashboard = '<p onclick="showScreen(' + "'instagramLinkScreen'" + ')">Paste Links</p>'+
  '<a href="http://stage.ravyyn.com/messages-influencer.html">Message</a>'+
  '<p onclick="showScreen(' + "'viewJobScreen'" + ')">View Job Post</p>'+
  '<a onclick="showScreen(' + "'reportScreen'" + ')">Report</a>';

var dropdownInfluencerCompletedDashboard = '<a href="http://stage.ravyyn.com/messages-influencer.html">Message</a>'+
  '<p onclick="showScreen(' + "'reviewScreen'" + ')">Review</p>'+
  '<a onclick="showScreen(' + "'reportScreen'" + ')">Report</a>';

  var dropdownInfluencerPendingDashboard = '<p onclick="showScreen(' + "'viewJobScreen'" + ')">View Job Post</p>'+
  '<a href="http://stage.ravyyn.com/messages-influencer.html">Message Advertiser</a>'+
  '<a onclick="showScreen(' + "'reportScreen'" + ')">Report</a>'+
  '<p>Unaply</p>';

var dropdownMessageHeader = '<p onclick="showScreen(' + "'muteScreen'" +')">Mute</p>'+
  '<p onclick="showScreen(' + "'blockScreen'" +')">Block</p>'+
  '<a onclick="showScreen(' + "'reportScreen'" + ')">Report</a>'+
  '<p onclick="clearChatBody()">Delete</p>';

var dropdownMessageHeaderAdvertiser = '<p onclick="showScreen(' + "'muteScreen'" +')">Mute</p>'+
  '<p>Add to Favorites</p>'+
  '<p onclick="showScreen(' + "'blockScreen'" +')">Block</p>'+
  '<a onclick="showScreen(' + "'reportScreen'" + ')">Report</a>'+
  '<p onclick="clearChatBody()">Delete</p>';

var dropdownMoveToFolder = '<p onclick="moveToFolderName(' + "'Maui Beverage Campaign'" + ')" >Maui Beverage Folder</p>'+
  '<p onclick="moveToFolderName(' + "'Project Title'" + ')" >Project Title</p>';

var dropdownNotification = '<p>Read</p>' +
  '<p onclick="deleteNotification(this)" >Delete</p>'+
  '<p onclick="activateSupportChat()"> Report An Issue</p>';

var dropdownSortByAdvertiser = '<p onclick="sortBy(' + "'Date Completed'" + ')" >Date Completed</p>'+
  '<p onclick="sortBy(' + "'Date Created'" + ')">Date Created</p>'+
  '<p onclick="sortBy(' + "'Budget'" + ')">Budget</p>'+
  '<p onclick="sortBy(' + "'Engagement Rate'" + ')">Enagement Rate</p>'+
  '<p onclick="sortBy(' + "'# Of Influencers'" + ')"># Of Influencers</p>';

var dropdownSortByInfluencer = '<p>Budget</p>'+
  '<p>Engagement Rate</p>'+
  '<p>Date Completed</p>';

  var dropdownSortByFindInfluencer = '<p onclick="sortBy(' + "'Engagement Rate %'" + ')" >Engagement Rate %</p>'+
  '<p onclick="sortBy(' + "'Job Success %'" + ')" >Job Success %</p>'+
  '<p onclick="sortBy(' + "'Follower Count'" + ')" >Follower Count</p>'+
  '<p onclick="sortBy(' + "'Top Rated'" + ')" >Top Rated</p>';

  var dropdownSortByFindJob = '<p>Budget</p>'+
  '<p>Most Recent</p>'+
  '<p>Review Rating</p>';



//FUNCTIONS


function campaignDropdownShow(location, menuType, click) {

  if (click !== undefined) {
    click.stopImmediatePropagation()
  }

  let campaignTitle = location.parentElement.parentElement.children[1].children[0];
  let selectedCampaign = location.parentElement.parentElement.parentElement.id;

  if(campaignTitle !== undefined){
    sessionStorage.setItem("campaignTitle", location.parentElement.parentElement.children[1].children[0].innerText);
  }
  if(selectedCampaign !== undefined){
    sessionStorage.setItem("selectedCampaign", location.parentElement.parentElement.parentElement.id);
  }

  let menu = menuBase;

  switch(menuType) {
    case "activeInFolder": menu.innerHTML = dropdownActiveInFolder; break;
    case "activeNoFolder": menu.innerHTML = dropdownActiveNoFolder; break;
    case "completed": menu.innerHTML = dropdownCompleted; break;
    case "drafts": menu.innerHTML = dropdownDrafts; break;
    case "dashboardInfluencer": menu.innerHTML = dropdownInfluencerDashboard; break;
    case "dashboardInfluencerCompleted": menu.innerHTML = dropdownInfluencerCompletedDashboard; break;
    case "dashboardInfluencerPending": menu.innerHTML = dropdownInfluencerPendingDashboard; break;
    case "pending": menu.innerHTML = dropdownPending; break;
    case "folder": menu.innerHTML = dropdownFolder; break;
    case "folderNew": menu.innerHTML = dropdownFolderNew; break;
    case "influencer": menu.innerHTML = dropdownInfluencer; break;
    case "messageChatHeader": menu.innerHTML = dropdownMessageHeader; break;
    case "moveToFolder": menu.innerHTML = dropdownMoveToFolder; break;
    case "notification": menu.innerHTML = dropdownNotification; break;
    case "messageChatHeaderAdvertiser": menu.innerHTML = dropdownMessageHeaderAdvertiser; break;
    case "sortByAdvertiser": menu.innerHTML = dropdownSortByAdvertiser; break;
    case "sortByFindInfluencer": menu.innerHTML = dropdownSortByFindInfluencer; break;
    case "sortByInfluencer": menu.innerHTML = dropdownSortByInfluencer; break;
    case "sortByFindJob": menu.innerHTML = dropdownSortByFindJob; break;
    default : break; 
  }


  if (mobile === true) {
    //MOBILE

    mobileDropdown(location, menu);

  } else {
    //DESKTOP
    
    desktopDropdown(location, menu);
  }

  //TRIGGER TO CLOSE ON BODY CLICK
  setTimeout( () => {
    campaignDropdownActive = true;
  }, 50);
    
}


function dropdownMobileClose () {

    document.querySelector(".dropdownCampaignShowMobile").classList.toggle("dropdownCampaignShowMobile");

    mobileScreen.innerHTML = "";

    showScreen("mobileScreen");

}



function desktopDropdown(location, menu) {
  if (campaignDropdownActive === true) {
      campaignDropdownActive = false;
      document.querySelector(".dropdownCampaignShow").classList.toggle("dropdownCampaignShow");
    }

    console.log(location);

    menu.classList.toggle("dropdownCampaignShow");

    if(location.tagName === "DIV") {
      location.appendChild(menu);
    } else {
      insertAfter(location, menu);
    }

}



function mobileDropdown(location, menu) {

  let title = location.parentElement.previousElementSibling.children[0];

  if (title === undefined) {
    //THIS IS FOR THE MESSAGES MOBILE MENU NEED TO RETOOL LATER
    menu.insertAdjacentHTML('afterBegin','<p id="mobileDropdownTitle">' + "Jane Doe" + '</p>');
  } else {
    title = title.innerText;
    menu.insertAdjacentHTML('afterBegin','<p id="mobileDropdownTitle">' + title + '</p>');
  }

  menu.innerHTML += "<p onclick='dropdownMobileClose()' id='mobileDropdownCancel'>Cancel</p>";

  document.getElementById("mobileScreen").appendChild(menu);

  menu.classList.toggle("dropdownCampaignShowMobile");

  document.getElementById("mobileScreen").onclick = function () {
    setTimeout(function () {dropdownMobileClose()}, 50 ) ;
  };

  showScreen("mobileScreen");
}


function sortBy(filter) {
  document.getElementById("sortBy").innerText= filter;
  document.getElementById("sortBy").placeholder = filter;
}














//OLD CAMPAIGN DROPDOWN FUNCTION STILL USED ON SOME ELEMENTS
//NEED TO REPLACE ANY ELEMENTS STILL USING THIS WITH UPDATED
//FUNCTION ABOVE


function campaignDropdown(button) {

  if ( (mobile === true) && (showScreenActive === false) ) {
    //MOBILE

    if (campaignDropdownActive === true) {
      campaignDropdownActive = false;
      document.querySelector(".dropdownCampaignShow").classList.toggle("dropdownCampaignShowMobile");
    }

    button.nextElementSibling.insertAdjacentHTML('afterBegin','<p id="mobileDropdownTitle">Project Title</p>')
    button.nextElementSibling.innerHTML += "<p onclick='dropdownMobileClose()' id='mobileDropdownCancel'>Cancel</p>";

    button.nextElementSibling.classList.toggle("dropdownCampaignShowMobile");

    document.getElementById("mobileScreen").onclick = function () {
      setTimeout(function () {dropdownMobileClose()}, 50 ) ;
    };

    mobileDropdownActivate = false;

    showScreen("mobileScreen");

  } else {
    //DESKTOP

    //IF ACTIVATING A NORMAL DROPDOWN WITHIN A MOBILE SCREEN
    if( (campaignDropdownActive === true) && (showScreenActive === true) && (mobile === true) ) {
      mobileDropdownActivate = true;
      campaignDropdownActive = false;
    }

    //REGULAR DESKTOP DROPDOWN
    if ( campaignDropdownActive === true ) {
      campaignDropdownActive = false;
      document.querySelector(".dropdownCampaignShow").classList.toggle("dropdownCampaignShow");
    }

    button.nextElementSibling.classList.toggle("dropdownCampaignShow");
    button.nextElementSibling.focus();
  }


  //TRIGGER TO CLOSE ON BODY CLICK
  setTimeout( () => {
    campaignDropdownActive = true;
  }, 50);
    
}