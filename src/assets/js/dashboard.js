
//GLOBAL VARS
var campaignExtraInfluencers = [];

function clear(target) {
   document.querySelector("." + target).classList.toggle(target);
}



//CREATE NEW FOLDER ENTER & EXIT CODE
function createNewFolder() {

  let campaignTitle = document.getElementById("createNewFolderName").value;
  let campaignNumber = document.getElementById("campaigns").children.length + 1;

  document.getElementById("campaigns").innerHTML = 
    "<div class='campaignContainer newFolder'>" +
          "<div class='campaign columnFlex'>" +
            "<div onclick='campaignExtraShow(this)' class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
              '<img/>' +
          "</div>" +
          "<div class='campaignTitle mobileFlex'>" + 
            "<p>" + campaignTitle + "</p>"  + 
            "<p>Date Created</p>" + 
          "</div>" +
          "<div class='campaignInfo'>" +
          //"<img src='./assets/icons/clock.svg' class='campaignInfoClock rustClock' id='clock" + campaignNumber + "' />" +
          "<div class='rowFlex personIconRow'>" + 
            "<img onclick='campaignExtraShow(this)' src='./assets/icons/personIcon.png' class='personIcon' />" + 0 +
          "</div>" +
          "<a href='http://stage.ravyyn.com/find-influencers.html'><img src='./assets/icons/personIconPlus.png' class='personIconPlus' /></a>" +
          "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdownShow(this, " + '"folderNew"' + ")' />" +
          //CAMPAIGN DROPDOWN
          //'<div class="campaign-active-settings"><p>View Job Post</p><p onclick="showScreen(' + "'viewApplicantsScreen'" + ', event)">Applicants</p><p>Clone Job Post</p><p onclick="deleteCampaign(this)">Remove Folder</p></div>' +
          //CLOCK HOVER DROPDOWN
          //"<div class='clockInfo'><div class='clockTime'><div><h1>1</h1><p>Hours</p></div><div><h1>03</h1><p>Minutes</p></div><div><h1>46</h1><p>Seconds</p></div></div><div class='clockEditWindow'><img src='./assets/icons/clock.svg'> <p>2 Hour Edit Window Edit</p></div></div>" +
        "</div>" +
      "</div>" +
      "<div class='campaignTitle'>" + 
      "<p>" + campaignTitle + "</p>"  + 
      "<p>Date Created</p>" + 
      "</div>" +
    "</div>"
    + document.getElementById("campaigns").innerHTML;
  ;

  //CLOSE  SCREEN
  document.getElementById("createFolderScreen").classList.toggle("screenShow");
  document.body.classList.toggle("bodyFreeze");

}


function moveToFolder() {
  let selectedCampaign = document.getElementById( sessionStorage.getItem("selectedCampaign") ) ;
  selectedCampaign.remove();

  let folder = sessionStorage.getItem("selectedFolder");

  if (folder === "Maui Beverage Campaign") {
    document.getElementById("clock0").style.filter="none";
  }

  showScreen('moveFolderScreen');

  //RESET FOLDER CHOICE
  sessionStorage.setItem("selectedFolder", "");
  document.getElementById("folderChoice").innerText= "Choose Folder";
  document.getElementById("folderChoice").placeholder = "Choose Folder";

}


function moveToFolderName(folder) {

  sessionStorage.setItem("selectedFolder", folder);

  if(folder.length > 16) {
    folder = folder.slice(0, 13);
    folder += "...";
  }

  document.getElementById("folderChoice").innerText= folder;
  document.getElementById("folderChoice").placeholder = folder;

}


function deleteCampaign(campaign){

  if (mobile === true) {
    let selectedCampaign = document.getElementById( sessionStorage.getItem("selectedCampaign") ) ;
    selectedCampaign.remove();
  } else {  

    let campaignRoot = campaign.parentElement.parentElement.parentElement.parentElement;

    campaignRoot.remove();
  }

}

function dropdownMobileClose(){
  document.querySelector(".dropdownCampaignShowMobile").classList.toggle("dropdownCampaignShowMobile");
  showScreen("mobileScreen");
}





//WHEN SINGLE INFLUENCER SELECTED
function campaignExtraSelected(influencer) {
  influencer.id="selectedInfluencer";

  Array.from( document.getElementsByClassName("influencerCard") ).forEach((card)=>{
    if(card.id!=="selectedInfluencer") {
      card.style.display="none";
    }
  });

  document.getElementById("campaignsExtraTitle").innerText="Selected Influencers";
  document.getElementById("mobileHeader").innerText="Selected Influencers";
  document.getElementById("campaignExtraNav").style.display="none";

  document.getElementById("campaignsExtraExit").onclick = ()=> {
    campaignExtraSelectedExit();
  }

}

//WHEN SELECT INFLUENCER EXITED
function campaignExtraSelectedExit() {

  Array.from( document.getElementsByClassName("influencerCard") ).forEach((card)=>{
    card.style.display="block";
  });

  document.getElementById("campaignsExtraTitle").innerText="Influencers";
  document.getElementById("mobileHeader").innerText="Influencers";
  document.getElementById("campaignExtraNav").style.display="flex";

  document.getElementById("campaignsExtraExit").onclick = ()=> {
    let container = document.getElementById("campaignsExtraContainer");

    if(container.classList.contains("campaignsFadeDownLarge")){
      container.classList.toggle("campaignsFadeDownLarge")
    } else {
      container.classList.toggle("campaignsFadeDown")
    };

    showCampaignFolders();
  }

}


//ON CAMPAIGN CLICK CREATE CAMPAIGN EXTRAS       
function campaignExtraShow(campaignDataIcon) {

  let campaignData = campaignDataIcon;
  let campaign = campaignDataIcon.parentElement.parentElement;
  let campaignNumber = 0;

  if (campaignDataIcon.classList.contains("personIcon") !== true){
  campaignData = campaignDataIcon;
  }

  console.log(campaignDataIcon.classList);

  //CANCEL FUNCTION CALL IF TRYING TO SHOW MORE PHOTOS
  if (campaignDataIcon.classList.contains("campaignPhotosExtra") === true){
  return false
  }
  

  let campaignTitle = campaignData.nextSibling.children[0].innerText;

  let dataId = parseInt(campaignData.id.split("s")[1]);
  let influencers = campaignExtraInfluencers[dataId].influencerData;

  //CLEAR CAMPAIGNS EXTRA CONTENT
  document.getElementById("campaignsExtra").innerHTML ="";

  //ADD CAMPAIGN TITLE
  document.getElementById("campaignsExtraTitle").innerText ="Influencers";
  document.getElementById("dashboardSubtitleNameMobile").innerText ="Influencers";

            influencers.forEach( (influencer)=>{
                let budget = influencer.budget;
                let bioLink = influencer.bioLink;
                let code = influencer.code;
                let post = influencer.post;
                let name = influencer.name;
                let stats = influencer.stats;
                let story = influencer.story;
                let src = influencer.image;
                let title = influencer.title;

                console.log(stats);

                document.getElementById("campaignsExtra").innerHTML += 
                  "<div class='campaignContainer influencerCard' onclick='influencerClick(" + '"' + stats[0] + '", "' + stats[1] + '", "' + stats[2] + '", "' + stats[3] + '"' + ', this,"'+ name + '", "'+ title + '"' + ")'>" +
                    "<div class='campaign columnFlex'>" +
                      "<div class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
                        '<img src="' + src + '" />' +
                        '<p class="left photoButton"> < </p>' +
                        '<p class="right photoButton"> > </p>' +
                        '<div class="photoButtonCount"><span></span><span></span><span></span></div>' +
                      "</div>" +
                      "<div class='campaignTitle mobileFlex'>" + 
                      "<p>" + name + "</p>" + 
                      "<p>" + campaignTitle + "</p>" +
                      "</div>" +
                      "<div class='campaignInfo'>" +
                        "<p>" + name + "</p>"  +
                        "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdown(this, event)' />" +
                        '<div class="campaign-active-settings"><p onclick="showScreen(' + "'shippingAddressScreen'" + ')">Ship A Product</p><p>Send Message</p><p onclick="showScreen(' + "'inviteJobScreen'" + ')">Move</p><p onclick="showScreen(' + "'reviewScreen'" + ')">Review</p><p>See Instagram Post</p><p>Add to Favorites</p><a onclick="showScreen(' + "'reportScreen'" + ')">Report</a></div>' +
                      "</div>" +
                    "</div>" +
                    "<div class='campaignTitle'>" + 
                    "<div><p> $" + budget + "<p><p>Budget</p></div>"  + 
                    "<div><p>" + code + "<p>Code</p></div>" +
                    "<div><p>" + post + "<p>Post</p></div>" +
                    "<div><p>" + story + "<p>Story</p></div>" +
                    "<div><p>" + bioLink + "<p>Link in Bio</p></div>" + 
                    "</div>" +
                  "</div>"
                ;

                campaignNumber+=1;
            })

            //TRIGGER CAMPAIGN SECTION FADE DOWN
            let container = document.getElementById("campaignsExtraContainer");

            if(influencers.length > 4 ) {
                
                if(container.classList.contains("campaignsFadeDown")){
                    container.classList.toggle("campaignsFadeDown")
                }
                document.getElementById("campaignsExtraContainer").classList.toggle("campaignsFadeDownLarge");
                //CODE FOR EXIT BUTTON EXTRA CAMPAGIN INFO
                document.getElementById("campaignsExtraExit").onclick = ()=> {
                    container.classList.toggle("campaignsFadeDownLarge");
                    showCampaignFolders();
                }

                //MOBILE VERSION
                document.getElementById("campaignsExtraExit").onclick = ()=> {
                    container.classList.toggle("campaignsFadeDownLarge");
                    showCampaignFolders();
                }

            } else {
                
                if(container.classList.contains("campaignsFadeDownLarge")){
                    container.classList.toggle("campaignsFadeDownLarge")
                }
                document.getElementById("campaignsExtraContainer").classList.toggle("campaignsFadeDown");
                //CODE FOR EXIT BUTTON EXTRA CAMPAGIN INFO
                document.getElementById("campaignsExtraExit").onclick = ()=> {
                    container.classList.toggle("campaignsFadeDown");
                    showCampaignFolders();
                }

                //MOBILE VERSION
                document.getElementById("campaignsExtraExit").onclick = ()=> {
                    container.classList.toggle("campaignsFadeDown");
                    showCampaignFolders();
                }

            }


            //CLEAR OTHER FOLDERS AND CHANGE TITLE INFO
            let campaignsFolder = campaign.parentElement;

            //RESET SELECTED CAMPAIGN AND DASHBOARD SUBTITLE
            if(document.querySelector("#selectedCampaign")!==null){
            	document.querySelector("#selectedCampaign").id="";
            }

            document.getElementById("dashboardSubtitleName").innerText = "ALL CAMPAIGNS";
  			document.getElementById("dashboardSubtitleTitle").innerText = "";

            campaign.id="selectedCampaign"
            document.getElementById("activeCampaignTitle").innerText=campaignTitle;

            hideCampaignFolders(campaignsFolder);
}


function hideCampaignFolders(campaignsFolder) {
  
  //CLEAR OTHER FOLDERS
  for (let z = 0; z < campaignsFolder.children.length; z++) {
    if(campaignsFolder.children[z].id !== "selectedCampaign") {
      campaignsFolder.children[z].classList.toggle("displayNone");
    }
  }

}

function showCampaignFolders() {
  
  //SHOW ALL FOLDERS
  console.log("red");

  let campaignsFolder = document.getElementById("campaigns");

  for (let z = 0; z < campaignsFolder.children.length; z++) {

    if(campaignsFolder.children[z].id === "selectedCampaign") {
      campaignsFolder.children[z].id === "";
    } else {
      campaignsFolder.children[z].classList.toggle("displayNone");
    }
  
  }

  document.getElementById("activeCampaignTitle").innerText="CAMPAIGNS";

  //REMOVE SELECTED CAMPAIGN FROM PREVIOUS CAMPAIGN
  document.querySelector("#selectedCampaign").id="";

  document.getElementById("dashboardSubtitleName").innerText = "ALL CAMPAIGNS";

  document.getElementById("dashboardSubtitleTitle").innerText = "";
  

}




      function loadCampaignCompleted() {
        //LOAD CAMPAIGNS
        let campaigns = [
            {
              images: ["./assets/images/userPhotos/userPhoto2.jpg"],
              names : ["Kyle Smith"],
              time: "green",
              influencers: 2,
              influencerData: [
                {stats:["Dollar", "8", "3", "8"], code:"no", image:"./assets/images/influencers/influencer0.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "5", "0"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            }
          ]

          let campaignNumber = 0;

          //CLEAR CAMPAGIN VIEW
          document.getElementById("campaigns").innerHTML ="";

          for (campaignNumber; campaignNumber < campaigns.length; campaignNumber++) {
            let campaign =  campaigns[campaignNumber];
            
            //CAMPAIGN COMPLETED CLONE
            document.getElementById("campaigns").innerHTML += 
              "<div class='campaignContainer campaignCompleted' id='" + campaignNumber + "' >" +
                "<div class='campaign columnFlex'>" +
                  "<div class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
                    '<img src="' + campaign.images[0] + '" + id="' + campaign.names[0] + '" />' +
                  "</div>" +
                  "<div class='campaignTitle mobileFlex'>" + 
                  "<p>" + campaign.title + "</p>"  + 
                  "<p>" + campaign.subtitle + "</p>" + 
                  "</div>" +
                  "<div class='campaignInfo'>" +
                    "<div class='rowFlex personIconRow left'>" +
                      "<img src='./assets/icons/personIcon.png' class='personIcon' />" + campaign.influencers +
                    "</div>" +
                    "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis right' onclick='campaignDropdown(this, event)' />" +
                    '<div class="campaign-active-settings"><p onclick="showScreen(' + "'viewJobScreen'" + ')">Campaign Settings</p><p onclick="showScreen(' + "'viewApplicantsScreen' " + ', event)">View Job Applicants</p><p>Clone Job Post</p><p onclick="deleteCampaign(this)">Delete</p></div>' +
                  "</div>" +
                "</div>" +
                "<div class='campaignTitle'>" + 
                "<p>" + campaign.title + "</p>"  + 
                "<p>" + campaign.subtitle + "</p>" + 
                "</div>" +
              "</div>"
            ;


            //CHECK FOR MULTIPLE PHOTOS
            
            //IF MORE THAN 1 PHOTO
            if(campaign.images.length > 1 && campaign.images.length < 5) {
              
              document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra");
              document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
              '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
              '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
              '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
              '<img src="' + campaign.images[3] + '"  + id="' + campaign.names[3] + '" />'
              ;
            }

            //MORE THAN 4 PHOTOS
            if(campaign.images.length > 4) {
                let extraPhotos = (campaign.images.length - 3);

                document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra")
                document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
                '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
                '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
                '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
                '<div class="campaignExtraPhotos"> + ' + extraPhotos + '</div>'
                ;

                //LOOP FOR EXTRA OF PHOTOS
                for (var extraphoto = 3; extraphoto < campaign.images.length; extraphoto++) {
                  document.getElementById("campaignPhotos" + campaignNumber).innerHTML += '<img src="' + campaign.images[extraphoto] + '"  + id="' + campaign.images[extraphoto] + '" class="displayNone" />';
                }


            }  
          };
      }







      function loadCampaignDrafts() {
        //LOAD CAMPAIGNS
        let campaigns = [
            {
              images: ["./assets/images/userPhotos/userPhoto1.jpg"],
              names : ["Tim Green"],
              time: "green",
              influencers: 4,
              influencerData: [
                {stats:["Dollar", "8", "1", "2"], code:"no", image:"./assets/images/influencers/influencer0.jpg", name:"Tim Green", budget:100, story:"yes", bioLink:"no", post: "No", title:"Project Title"},
                {stats:["Dollar", "4", "9", "4"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:80, story:"no", bioLink:"no", post: "No", title:"Project Title"},
                {stats:["Dollar", "8", "0", "0"], code:"yes", image:"./assets/images/influencers/influencer2.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "3", "3"], code:"no", image:"./assets/images/influencers/influencer3.jpg", name:"Robin Woods", budget:30, story:"no", bioLink:"yes", post: "No", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            },
            {
              images: ["./assets/images/userPhotos/userPhoto2.jpg"],
              names : ["Kyle Smith"],
              time: "green",
              influencers: 2,
              influencerData: [
                {stats:["Dollar", "8", "3", "8"], code:"no", image:"./assets/images/influencers/influencer0.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "5", "0"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            }
          ]

          let campaignNumber = 0;

          //CLEAR CAMPAGIN VIEW
          document.getElementById("campaigns").innerHTML ="";

          for (campaignNumber; campaignNumber < campaigns.length; campaignNumber++) {
            let campaign =  campaigns[campaignNumber];
            

            // CAMPAGIN DRAFT CLONE
            document.getElementById("campaigns").innerHTML += 
              "<div class='campaignContainer campaignDraft' id='" + campaignNumber + "' >" +
                "<div class='campaign columnFlex'>" +
                  "<div class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
                    '<img src="' + campaign.images[0] + '" + id="' + campaign.names[0] + '" />' +
                  "</div>" +
                  "<div class='campaignTitle mobileFlex'>" + 
                  "<p>" + campaign.title + "</p>"  + 
                  "<p>" + campaign.subtitle + "</p>" + 
                  "</div>" +
                  "<div class='campaignInfo'>" +
                    "<div class='rowFlex personIconRow left'>" +
                      '<img onclick="showScreen(' + "'viewApplicantsScreen'"  + ', event)" src="./assets/icons/personIcon.png" class="personIcon" />' + campaign.influencers +
                    "</div>" +
                    "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis right' onclick='campaignDropdown(this, event)' />" +
                    '<div class="campaign-active-settings"><p onclick="showScreen(' + "'doneHiringScreen'" + ')">Complete Job Post</p><p onclick="showScreen(' + "'viewJobScreen'" + ')">Campaign Settings</p><p onclick="deleteCampaign(this)">Delete</p></div>' +
                  "</div>" +
                "</div>" +
                "<div class='campaignTitle'>" + 
                "<p>" + campaign.title + "</p>"  + 
                "<p>" + campaign.subtitle + "</p>" + 
                "</div>" +
              "</div>"
            ;

            //CHECK FOR MULTIPLE PHOTOS
            
            //IF MORE THAN 1 PHOTO
            if(campaign.images.length > 1 && campaign.images.length < 5) {
              
              document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra");
              document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
              '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
              '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
              '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
              '<img src="' + campaign.images[3] + '"  + id="' + campaign.names[3] + '" />'
              ;
            }

            //MORE THAN 4 PHOTOS
            if(campaign.images.length > 4) {
                let extraPhotos = (campaign.images.length - 3);

                //RAR
                //ADD ALL EXTRA PHOTOS PAST 3 TO CAMPAIGNEXTRAPHOTOS ID WITH SPACE SO CA NBE EXTRACTED
                document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra")
                document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
                '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
                '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
                '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
                '<div class="campaignExtraPhotos"> + ' + extraPhotos + '</div>'
                ;

                //LOOP FOR EXTRA OF PHOTOS
                for (var extraphoto = 3; extraphoto < campaign.images.length; extraphoto++) {
                  document.getElementById("campaignPhotos" + campaignNumber).innerHTML += '<img src="' + campaign.images[extraphoto] + '"  + id="' + campaign.images[extraphoto] + '" class="displayNone" />';
                }
            }  
          };
      }




      //LOAD ACTIVE CAMPAIGNS
      function loadCampaignPending() {
      
          let campaigns = [
            {
              images: ["./assets/images/userPhotos/userPhoto2.jpg"],
              names : ["Kyle Smith"],
              time: "rust",
              influencers: 2,
              influencerData: [
                {stats:["Dollar", "5", "1", "0"], code:"yes", image:"./assets/images/influencers/influencer0.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "9", "5"], code:"no", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "pending"
            }
          ]

          let campaignNumber = 0;

          //CLEAR CAMPAGIN VIEW
          document.getElementById("campaigns").innerHTML ="";

  for (campaignNumber; campaignNumber < campaigns.length; campaignNumber++) {
    let campaign =  campaigns[campaignNumber];
            
    campaignExtraInfluencers.push(campaign);


    if (campaign.type === "pending") {
      document.getElementById("campaigns").innerHTML += 
        "<div class='campaignContainer pendingCampaign' id='" + campaignNumber + "' >" +
          "<div class='campaign columnFlex'>" +
            "<div onclick='campaignExtraShow(this)' class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
              '<img src="' + campaign.images[0] + '" + id="' + campaign.names[0] + '" />' +
            "</div>" +
            "<div class='campaignTitle mobileFlex'>" + 
              "<p>" + campaign.title + "</p>"  + 
              "<p>" + campaign.subtitle + "</p>" + 
            "</div>" +
            "<div class='campaignInfo'>" +
              "<img src='./assets/icons/clock.svg' class='campaignInfoClock' id='clock" + campaignNumber + "' />" +
              "<div class='rowFlex personIconRow'>" + 
                "<img onclick='campaignExtraShow(this)' src='./assets/icons/personIcon.png' class='personIcon' />" + campaign.influencers +
              "</div>" +
              "<a href='http://stage.ravyyn.com/find-influencers.html'><img src='./assets/icons/personIconPlus.png' class='personIconPlus' /></a>" +
                "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdownShow(this, " + '"pending"' + ")' />" +
                //CLOCK HOVER DROPDOWN
              "<div class='clockInfo'><div class='clockTime'><div><h1>1</h1><p>Hours</p></div><div><h1>03</h1><p>Minutes</p></div><div><h1>46</h1><p>Seconds</p></div></div><div class='clockEditWindow'><img src='./assets/icons/clock.svg'> <p>2 Hour Edit Window Edit</p></div></div>" +
            "</div>" +
          "</div>" +
          "<div class='campaignTitle'>" + 
            "<p>" + campaign.title + "</p>"  + 
            "<p>" + campaign.subtitle + "</p>" + 
          "</div>" +
        "</div>"
      ;
    }

            //CHECK FOR CLOCK COLOR
            if(campaign.time === "rust") {
                let clock = document.getElementById("clock" + campaignNumber);
              clock.style.filter="hue-rotate(-97deg) brightness(0.85)";

              //CODE FOR RUST CLOCK HOVER
              clock.parentElement.children[4].innerHTML="<p>Pending / Awaiting Applicants</p>";

              //CODE FOR PERSON ICON PRESS VIEW APPLICANT
              //clock.parentElement.children[1].children[0].classList.add("showViewApplicant")

            }

            //CHECK FOR MULTIPLE PHOTOS         
            //IF MORE THAN 1 PHOTO = FOLDER
            if(campaign.images.length > 1 && campaign.images.length < 5) {
              
              document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra");
              document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
              '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
              '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
              '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
              '<img src="' + campaign.images[3] + '"  + id="' + campaign.names[3] + '" />'
              ;
            }

            //MORE THAN 4 PHOTOS = FOLDER
            if(campaign.images.length > 4) {
                let extraPhotos = (campaign.images.length - 3);

                //RAR
                //ADD ALL EXTRA PHOTOS PAST 3 TO CAMPAIGNEXTRAPHOTOS ID WITH SPACE SO CA NBE EXTRACTED
                document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra")
                document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
                '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
                '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
                '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
                '<div class="campaignExtraPhotos"> + ' + extraPhotos + '</div>'
                ;

                //LOOP FOR EXTRA OF PHOTOS
                for (var extraphoto = 3; extraphoto < campaign.images.length; extraphoto++) {
                  document.getElementById("campaignPhotos" + campaignNumber).innerHTML += '<img src="' + campaign.images[extraphoto] + '"  + id="' + campaign.images[extraphoto] + '" class="displayNone" />';
                }
            }


            if(campaign.time === "none") {
              document.getElementById("clock" + campaignNumber).style.display="none";
            }
          
          }
      }








      //LOAD ACTIVE CAMPAIGNS
      function loadCampaignActive() {
      
          let campaigns = [
            {
              images: ["./assets/images/userPhotos/userPhoto1.jpg"],
              names : ["Jane Doe", "Kyle Smith", "Jane Doe", "Kyle Smith"],
              time: "green",
              influencers: 4,
              influencerData: [
                {stats:["Dollar", "1", "1", "Percent"], code:"yes", image:"./assets/images/influencers/influencer0.jpg", name:"Tim Green", budget:100, story:"yes", bioLink:"no", post: "No", title:"Project Title"},
                {stats:["Dollar", "7", "9", "0"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:80, story:"no", bioLink:"no", post: "No", title:"Project Title"},
                {stats:["Dollar", "2", "8", "7"], code:"no", image:"./assets/images/influencers/influencer2.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "4", "1"], code:"no", image:"./assets/images/influencers/influencer3.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "No", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            },
            /*
            {
              images: ["./assets/images/userPhotos/userPhoto3.jpg", "./assets/images/userPhotos/userPhoto4.jpg", "./assets/images/userPhotos/userPhoto5.jpg", "./assets/images/userPhotos/userPhoto6.jpg"],
              names : ["Tim Green", "Jane Doe", "Kyle Smith", "Jane Doe"],
              time: "green",
              influencers: 4,
              influencerData: [
                {stats:["Dollar", "1", "1", "5"], code:"yes", image:"./assets/images/influencers/influencer0.jpg", name:"Jane Doe", budget:80, story:"no", bioLink:"no", post: "No", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "5", "2", "0"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "No", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "3", "4", "2"], code:"yes", image:"./assets/images/influencers/influencer2.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "1", "1", "6"], code:"no", image:"./assets/images/influencers/influencer3.jpg", name:"Robin Woods", budget:30, story:"no", bioLink:"yes", post: "No", title:"Maui Beverage Campaign"}],
              subtitle: "5 Projects",
              title:"Maui Beverage Campaign",
              type: "activeInFolder"
            },
            */
            {
              images: ["./assets/images/userPhotos/userPhoto2.jpg"],
              names : ["Jane Doe", "Kyle Smith"],
              time: "green",
              influencers: 2,
              influencerData: [
                {stats:["Dollar", "5", "1", "0"], code:"no", image:"./assets/images/influencers/influencer0.jpg", name:"Tim Green", budget:100, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "2", "7", "3"], code:"no", image:"./assets/images/influencers/influencer1.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "No", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            },
            /*
            {
              images: ["./assets/images/userPhotos/userPhoto7.jpg", "./assets/images/userPhotos/userPhoto7.jpg", "./assets/images/userPhotos/userPhoto7.jpg", "./assets/images/userPhotos/userPhoto7.jpg", "./assets/images/userPhotos/userPhoto7.jpg",],
              names : ["Tim Green", "Jane Doe", "Kyle Smith", "Jane Doe", "Kyle Smith"],
              time: "green",
              influencers: 5,
              influencerData: [
                {stats:["Dollar", "5", "1", "0"], code:"yes", image:"./assets/images/influencers/influencer0.jpg", name:"Tim Green", budget:100, story:"yes", bioLink:"no", post: "Yes", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "7", "1", "6"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:80, story:"no", bioLink:"no", post: "Yes", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "5", "2", "4"], code:"no", image:"./assets/images/influencers/influencer2.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "8", "1", "2"], code:"yes", image:"./assets/images/influencers/influencer3.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "No", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "9", "2", "8"], code:"yes", image:"./assets/images/influencers/influencer4.jpg", name:"Robin Woods", budget:30, story:"no", bioLink:"yes", post: "No", title:"Maui Beverage Campaign"}],
              subtitle: "5 Projects",
              title:"Maui Beverage Campaign",
              type: "activeInFolder"
            },
            */
            {
              images: ["./assets/images/userPhotos/userPhoto1.jpg"],
              names : ["Tim Green"],
              time: "green",
              influencers: 4,
              influencerData: [
                {stats:["Dollar", "8", "1", "2"], code:"no", image:"./assets/images/influencers/influencer0.jpg", name:"Tim Green", budget:100, story:"yes", bioLink:"no", post: "No", title:"Project Title"},
                {stats:["Dollar", "4", "9", "4"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:80, story:"no", bioLink:"no", post: "No", title:"Project Title"},
                {stats:["Dollar", "8", "0", "0"], code:"yes", image:"./assets/images/influencers/influencer2.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "3", "3"], code:"no", image:"./assets/images/influencers/influencer3.jpg", name:"Robin Woods", budget:30, story:"no", bioLink:"yes", post: "No", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            },
            /*
            {
              images: ["./assets/images/userPhotos/userPhoto3.jpg", "./assets/images/userPhotos/userPhoto4.jpg", "./assets/images/userPhotos/userPhoto5.jpg", "./assets/images/userPhotos/userPhoto6.jpg"],
              names : ["Tim Green", "Jane Doe", "Jane Doe", "Kyle Smith"],
              time: "green",
              influencers: 4,
              influencerData: [
                {stats:["Dollar", "7", "1", "1"], code:"yes", image:"./assets/images/influencers/influencer0.jpg", name:"Tim Green", budget:100, story:"yes", bioLink:"no", post: "No", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "9", "9", "6"], code:"no", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:80, story:"no", bioLink:"no", post: "No", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "3", "2", "8"], code:"no", image:"./assets/images/influencers/influencer2.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Maui Beverage Campaign"},
                {stats:["Dollar", "6", "6", "5"], code:"no", image:"./assets/images/influencers/influencer3.jpg", name:"Robin Woods", budget:30, story:"no", bioLink:"yes", post: "No", title:"Maui Beverage Campaign"}],
              subtitle: "5 Projects",
              title:"Maui Beverage Campaign",
              type: "activeInFolder"
            },
            */
            {
              images: ["./assets/images/userPhotos/userPhoto2.jpg"],
              names : ["Kyle Smith"],
              time: "green",
              influencers: 2,
              influencerData: [
                {stats:["Dollar", "8", "3", "8"], code:"no", image:"./assets/images/influencers/influencer0.jpg", name:"Kyle Smith", budget:150, story:"yes", bioLink:"yes", post: "Yes", title:"Project Title"},
                {stats:["Dollar", "3", "5", "0"], code:"yes", image:"./assets/images/influencers/influencer1.jpg", name:"Jane Doe", budget:200, story:"yes", bioLink:"no", post: "Yes", title:"Project Title"}],
              subtitle: "3/26/20 - 1pm",
              title:"Project Title",
              type: "activeNoFolder"
            }
          ]

          let campaignNumber = 0;

          //CLEAR CAMPAGIN VIEW
          document.getElementById("campaigns").innerHTML ="";

  for (campaignNumber; campaignNumber < campaigns.length; campaignNumber++) {
    let campaign =  campaigns[campaignNumber];
            
    campaignExtraInfluencers.push(campaign);


    if (campaign.type === "activeInFolder") {
      document.getElementById("campaigns").innerHTML += 
        "<div class='campaignContainer activeInFolderCampaign' id='" + campaignNumber + "' >" +
          "<div class='campaign columnFlex'>" +
            "<div onclick='campaignExtraShow(this)' class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
              '<img src="' + campaign.images[0] + '" + id="' + campaign.names[0] + '" />' +
            "</div>" +
            "<div class='campaignTitle mobileFlex'>" + 
              "<p>" + campaign.title + "</p>"  + 
              "<p>" + campaign.subtitle + "</p>" + 
            "</div>" +
            "<div class='campaignInfo'>" +
              "<img src='./assets/icons/clock.svg' class='campaignInfoClock' id='clock" + campaignNumber + "' />" +
              "<div class='rowFlex personIconRow'>" + 
                "<img onclick='campaignExtraShow(this)' src='./assets/icons/personIcon.png' class='personIcon' />" + campaign.influencers +
              "</div>" +
              "<a href='http://stage.ravyyn.com/find-influencers.html'><img src='./assets/icons/personIconPlus.png' class='personIconPlus' /></a>" +
                "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdownShow(this, " + '"activeInFolder"' + ")' />" +
                //CLOCK HOVER DROPDOWN
              "<div class='clockInfo'><div class='clockTime'><div><h1>1</h1><p>Hours</p></div><div><h1>03</h1><p>Minutes</p></div><div><h1>46</h1><p>Seconds</p></div></div><div class='clockEditWindow'><img src='./assets/icons/clock.svg'> <p>2 Hour Edit Window Edit</p></div></div>" +
            "</div>" +
          "</div>" +
          "<div class='campaignTitle'>" + 
            "<p>" + campaign.title + "</p>"  + 
            "<p>" + campaign.subtitle + "</p>" + 
          "</div>" +
        "</div>"
      ;
    }

    if (campaign.type === "activeNoFolder") {
      document.getElementById("campaigns").innerHTML += 
        "<div class='campaignContainer activeNoFolderCampaign' id='" + campaignNumber + "' >" +
          "<div class='campaign columnFlex'>" +
            "<div onclick='campaignExtraShow(this)' class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
              '<div class="campaignImageInfo"><p>Remaining: 100</p><p>Budget: 500</p></div>'+
              '<img src="' + campaign.images[0] + '" + id="' + campaign.names[0] + '" />' +
            "</div>" +
            "<div class='campaignTitle mobileFlex'>" + 
              "<p>" + campaign.title + "</p>"  + 
              "<p>" + campaign.subtitle + "</p>" + 
            "</div>" +
            "<div class='campaignInfo'>" +
              "<img src='./assets/icons/clock.svg' class='campaignInfoClock' id='clock" + campaignNumber + "' />" +
              "<div class='rowFlex personIconRow'>" + 
                "<img onclick='campaignExtraShow(this)' src='./assets/icons/personIcon.png' class='personIcon' />" + campaign.influencers +
              "</div>" +
              "<a href='http://stage.ravyyn.com/find-influencers.html'><img src='./assets/icons/personIconPlus.png' class='personIconPlus' /></a>" +
                "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdownShow(this, " + '"activeNoFolder"' + ")' />" +
                //CLOCK HOVER DROPDOWN
              "<div class='clockInfo'><div class='clockTime'><div><h1>1</h1><p>Hours</p></div><div><h1>03</h1><p>Minutes</p></div><div><h1>46</h1><p>Seconds</p></div></div><div class='clockEditWindow'><img src='./assets/icons/clock.svg'> <p>2 Hour Edit Window Edit</p></div></div>" +
            "</div>" +
          "</div>" +
          "<div class='campaignTitle'>" + 
            "<p>" + campaign.title + "</p>"  + 
            "<p>" + campaign.subtitle + "</p>" + 
          "</div>" +
        "</div>"
      ;
    }


    if (campaign.type === "pending") {
      document.getElementById("campaigns").innerHTML += 
        "<div class='campaignContainer pendingCampaign' id='" + campaignNumber + "' >" +
          "<div class='campaign columnFlex'>" +
            "<div onclick='campaignExtraShow(this)' class='campaignPhotos' id='campaignPhotos" + campaignNumber + "'>" +
              '<img src="' + campaign.images[0] + '" + id="' + campaign.names[0] + '" />' +
            "</div>" +
            "<div class='campaignTitle mobileFlex'>" + 
              "<p>" + campaign.title + "</p>"  + 
              "<p>" + campaign.subtitle + "</p>" + 
            "</div>" +
            "<div class='campaignInfo'>" +
              "<img src='./assets/icons/clock.svg' class='campaignInfoClock' id='clock" + campaignNumber + "' />" +
              "<div class='rowFlex personIconRow'>" + 
                "<img onclick='campaignExtraShow(this)' src='./assets/icons/personIcon.png' class='personIcon' />" + campaign.influencers +
              "</div>" +
              "<a href='http://stage.ravyyn.com/find-influencers.html'><img src='./assets/icons/personIconPlus.png' class='personIconPlus' /></a>" +
                "<img src='./assets/icons/ellipsis.svg' class='campaignInfoElipsis' onclick='campaignDropdownShow(this, " + '"pending"' + ")' />" +
                //CLOCK HOVER DROPDOWN
              "<div class='clockInfo'><div class='clockTime'><div><h1>1</h1><p>Hours</p></div><div><h1>03</h1><p>Minutes</p></div><div><h1>46</h1><p>Seconds</p></div></div><div class='clockEditWindow'><img src='./assets/icons/clock.svg'> <p>2 Hour Edit Window Edit</p></div></div>" +
            "</div>" +
          "</div>" +
          "<div class='campaignTitle'>" + 
            "<p>" + campaign.title + "</p>"  + 
            "<p>" + campaign.subtitle + "</p>" + 
          "</div>" +
        "</div>"
      ;
    }




            //CHECK FOR CLOCK COLOR
            if(campaign.time === "rust") {
                let clock = document.getElementById("clock" + campaignNumber);
              clock.style.filter="hue-rotate(-97deg) brightness(0.85)";

              //CODE FOR RUST CLOCK HOVER
              clock.parentElement.children[4].innerHTML="<p>Pending / Awaiting Applicants</p>";

              //CODE FOR PERSON ICON PRESS VIEW APPLICANT
              //clock.parentElement.children[1].children[0].classList.add("showViewApplicant")

            }

            //CHECK FOR MULTIPLE PHOTOS         
            //IF MORE THAN 1 PHOTO = FOLDER
            if(campaign.images.length > 1 && campaign.images.length < 5) {
              
              document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra");
              document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
              '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
              '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
              '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
              '<img src="' + campaign.images[3] + '"  + id="' + campaign.names[3] + '" />'
              ;
            }

            //MORE THAN 4 PHOTOS = FOLDER
            if(campaign.images.length > 4) {
                let extraPhotos = (campaign.images.length - 3);

                //RAR
                //ADD ALL EXTRA PHOTOS PAST 3 TO CAMPAIGNEXTRAPHOTOS ID WITH SPACE SO CA NBE EXTRACTED
                document.getElementById("campaignPhotos" + campaignNumber).classList.add("campaignPhotosExtra")
                document.getElementById("campaignPhotos" + campaignNumber).innerHTML = 
	            '<span>'+
	                '<img src="' + campaign.images[0] + '"  + id="' + campaign.names[0] + '" />' +
	                '<img src="' + campaign.images[1] + '"  + id="' + campaign.names[1] + '" />' +
	                '<img src="' + campaign.images[2] + '"  + id="' + campaign.names[2] + '" />' +
	                '<div class="campaignExtraPhotos" onclick="showAllCampaignPhotos(this)"> + ' + extraPhotos + '</div>' +
                '</span>';

                let extraPhotoAmount = campaign.images.length -3;
                let extraPhotoFolders = extraPhotoAmount / 4;

                var extraphoto = 3;
                var i = 0;

                for (i; i < extraPhotoFolders; i++) {

                	document.getElementById("campaignPhotos" + campaignNumber).innerHTML += '<span id="extraPhotoFolders' + i + '" class="extraPhotoFolders"></span>';

                	let extraPhotoFolderLimit = extraphoto + 3;

	            	//LOOP FOR EXTRA OF PHOTOS
	                for (extraphoto; extraphoto < extraPhotoFolderLimit; extraphoto++) {

	                	if(campaign.images[extraphoto] === undefined) {
	                		break;
	                	}

	                  document.getElementById("extraPhotoFolders" + i).innerHTML += 
	                   '<img src="' + campaign.images[extraphoto] +'"  + id="' + campaign.images[extraphoto] + '" />';

	                }

                }
            }


            if(campaign.time === "none") {
              document.getElementById("clock" + campaignNumber).style.display="none";
            }
          
          }
      }


      //INITIAL LOAD OF ACTIVE CAMPAIGNS
      loadCampaignActive();


      //CAMPAIGN TYPE SELECT
      Array.from(document.getElementsByClassName("campaignNavType") ).forEach((dataType) => {
        
        dataType.onclick = () => {
          if (dataType.classList.contains("campaignNavTypeSelected") === true) { return false
          } else {
            Array.from(document.getElementsByClassName("campaignNavType") ).forEach((dataType) => {
              dataType.classList.remove("campaignNavTypeSelected");
            } )

            dataType.classList.add("campaignNavTypeSelected");
          }

          //PUT CODE FOR SWITCHING CAMPAIGN TYPE HERE

            if(dataType.innerText ==="PENDING") {
                loadCampaignPending()
            }

            if(dataType.innerText ==="COMPLETED") {
                loadCampaignCompleted()
            }

            if(dataType.innerText ==="DRAFTS") {
                loadCampaignDrafts()
            }

            if(dataType.innerText ==="TODAY") {
                loadCampaignActive()
            }

        }
      })

      

      //DAHBOARD DATA TYPE SELECT
      Array.from(document.getElementsByClassName("dashboardDataType") ).forEach((dataType) => {
        
        dataType.onclick = (data) => {
            let dataNumber = dataType.children[0].innerText;
            let dataRibbon = document.getElementById("dataRibbon");
            let lastClass = dataRibbon.classList.item(dataRibbon.classList.length -1);

            document.getElementById("dashboardSelectedStat").innerText = dataNumber;

            if(dataRibbon.classList.length > 1){
              dataRibbon.classList.remove(lastClass);
            }

            if(mobile === true) {
              
              clear("dashboardDataTypesSelected");

              if ( data.target.parentElement.classList.contains("dashboardDataTypesMobile") === true) {
                return false;
              } else {
                data.target.parentElement.classList.toggle("dashboardDataTypesSelected");
              }

              switch(dataNumber) {
                  case "ENGAGEMENT RATE" : dashNumberChange("9", "7", "8", "Percent"); return false; break;
                  case "CPE" : dataRibbon.classList.add("dashboardDataTypeRibbonSelected1"); document.getElementById("dashboardSelectedStat").innerText="COST PER ENGAGEMENT"; dashNumberChange("Dollar", "3", "4", "7");break;
                  case "CTR" : dataRibbon.classList.add("dashboardDataTypeRibbonSelected2"); document.getElementById("dashboardSelectedStat").innerText="CLICK THROUGH RATE"; dashNumberChange("8", "5", "2", "Percent");break;
                  case "CLICKS" : dataRibbon.classList.add("dashboardDataTypeRibbonSelected3"); dashNumberChange("9", "7", "8", "5", true);break;
                  case "STORY VIEWS" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedStoryViews"); dashNumberChange("5", "3", "0", "0", true);break;
                  case "TOTAL SAVES" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedTotalSaves"); dashNumberChange("3", "7", "0", "0", true);break;
                  case "TOTAL LIKES" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedTotalLikes"); dashNumberChange("4", "0", "0", "0", true);break;
                  case "TOTAL COMMENTS" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedTotalComments"); dashNumberChange("6", "1", "0", "0", true);break;
                  default : return false;break;
              }

            } else {
              
              switch(dataNumber) {
                  case "ENGAGEMENT RATE" : dashNumberChange("9", "7", "8", "Percent"); return false; break;
                  case "CPE" : dataRibbon.classList.add("dashboardDataTypeRibbonSelected1"); document.getElementById("dashboardSelectedStat").innerText="COST PER ENGAGEMENT"; dashNumberChange("Dollar", "3", "4", "7");break;
                  case "CTR" : dataRibbon.classList.add("dashboardDataTypeRibbonSelected2"); document.getElementById("dashboardSelectedStat").innerText="CLICK THROUGH RATE"; dashNumberChange("8", "5", "2", "Percent");break;
                  case "CLICKS" : dataRibbon.classList.add("dashboardDataTypeRibbonSelected3"); dashNumberChange("9", "7", "8", "5", true);break;
                  case "STORY VIEWS" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedStoryViews"); dashNumberChange("5", "3", "0", "0", true);break;
                  case "TOTAL SAVES" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedTotalSaves"); dashNumberChange("3", "7", "0", "0", true);break;
                  case "TOTAL LIKES" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedTotalLikes"); dashNumberChange("4", "0", "0", "0", true);break;
                  case "TOTAL COMMENTS" : dataRibbon.classList.add("dashboardDataTypeRibbonSelectedTotalComments"); dashNumberChange("6", "0", "0", "0", true);break;
                  default : return false;break;
              }
            }
        }
      })








      // NEW CAMPAING CREATE JS - SEPERATE EVENTUALLY

      //CODE FOR MOBILE ADJUSTMENTS
      if(window.screen.width < 750) {

          Array.from( document.getElementsByClassName("skip") ).forEach( (button)=> {
              button.parentElement.append(button);
          });

      }


      //CODE FOR CAMPAIGN DATE TEXT REPLACEMENT
      document.getElementById("campaign-start-date").onchange = (date) => {
        document.getElementById("startDateText").innerText = date.target.value; 
      }

      document.getElementById("campaign-start-date-custom").onchange = (date) => {
        document.getElementById("startDateTextCustom").innerText = date.target.value; 
      }

      //CODE FOR CAMPAIGN NAME REPLACEMENT & NEXT BUTTON
      document.getElementById("new-campaign-details-submit").onclick = (e) => {
        let campaignName = document.getElementById("campaign-name");

        let uploadTitles = Array.from(document.getElementsByClassName("uploadTitles"));

        uploadTitles.forEach((title)=> {
          title.innerText = campaignName.value;
        } )
      }

      document.getElementById("campaignNameNext").onclick = (e) => {
        let campaignName = document.getElementById("campaign-name");

        let uploadTitles = Array.from(document.getElementsByClassName("uploadTitles"));

        uploadTitles.forEach((title)=> {
          title.innerText = campaignName.value;
        } )
      }

      //CODE FOR CUSTOM CAMPAIGN NAME REPLACEMENT && NEXT BUTTON
      document.getElementById("new-campaign-custom-details-submit").onclick = (e) => {
        let campaignName = document.getElementById("campaign-custom-name");

        let uploadTitles = Array.from(document.getElementsByClassName("uploadTitles"));

        uploadTitles.forEach((title)=> {
          title.innerText = campaignName.value;
        } )
      }

      document.getElementById("campaignNameCustomNext").onclick = (e) => {
        let campaignName = document.getElementById("campaign-custom-name");

        let uploadTitles = Array.from(document.getElementsByClassName("uploadTitles"));

        uploadTitles.forEach((title)=> {
          title.innerText = campaignName.value;
        } )
      }


      // CODE FOR NEW CAMPAIGN EXIT
      document.getElementById("login-popup-close").onclick = ()=> {
        document.getElementById("new-campaign-modal").classList.toggle("show")
      }



      /*

      //CODE FOR UPLOAD PHOTOS ERROR MESSAGE
      document.getElementById("submit").onclick = (e) => {
        e.preventDefault()
        let loginField = document.getElementById("login-pass");

        if(loginField.value.length < 1) {
          console.log(loginField.classList.contains("inputError"));
          if ( loginField.classList.contains("inputError") !== true ) {
            loginField.classList.toggle("inputError");
          }
          loginField.placeholder="This Field is Required";
        }
      }

      */


function influencerClick(digit0, digit1, digit2, digit3, influencer, name, title){

	if(document.querySelector(".borderBlackBold") !== null) {
		document.querySelector(".borderBlackBold").classList.toggle("borderBlackBold");
	}
	
	dashNumberChange(digit0, digit1, digit2, digit3);
	influencer.children[0].classList.toggle("borderBlackBold");

	document.getElementById("dashboardSubtitleName").innerText = name + " - ";
	document.getElementById("dashboardSubtitleTitle").innerText = title;

  document.getElementById("dashboardSubtitleNameMobile").innerText = name + " - ";
  document.getElementById("dashboardSubtitleTitleMobile").innerText = title;

}






function showAllCampaignPhotos(photoFolder) {
	photoFolder.parentElement.parentElement.classList.toggle("campaignPhotosExtraShowAll");
}



function viewApplicantPick(applicant) {

  if (mobile === false) {
    return
  } else {

    let clone = applicant.cloneNode(true);

    clone.onclick = function () {
      return false;
    }

    document.getElementById("viewApplicantChosen").append(clone);

    showScreen("viewApplicantsScreen");  

    showScreen("viewApplicantChosenScreen");

    document.getElementById("viewApplicantChosenScreen").children[0].children[0].classList.toggle("hide");
  }

}

function viewApplicantPickClose() {

  if (mobile === false) {
    return
  } else {
  
    showScreen("viewApplicantsScreen");  

    showScreen("viewApplicantChosenScreen");

    document.getElementById("viewApplicantChosenScreen").children[0].children[0].classList.toggle("hide");

    document.getElementById("viewApplicantChosen").innerHTML = "";

  }

}








//MOBILE ONLCIK CALL FOR CLOCK ICONS
Array.from(document.getElementsByClassName("campaignInfoClock") ).forEach( (clock) =>{
  clock.onclick = () =>{
    //event.nextSiblingElement.style.display="flex";
    console.log("event");
  }
});