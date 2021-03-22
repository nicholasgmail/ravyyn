let header = '<div class="container">' +
        '<nav class="navbar navbar-expand-lg flex-lg-row flex-row-reverse px-0">' +
            '<div class="d-lg-none d-block"><img onclick="toggleNotifications()" src="assets/icons/Icon ionic-ios-notifications.png" alt="notification bell icon"></div>' +
            '<a class="navbar-brand text-dark" href="/">' +
              '<h1 class="text-uppercase display-5 m-0">' +
                'Ravyyn' +
              '</h1>' +
            '</a>' +
            '<button class="navbar-toggler p-0" type="button" data-target="#main-nav-mobile" aria-controls="main-nav-mobile" aria-expanded="false" aria-label="Toggle navigation">' +
              '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="navbar w-100" id="main-nav">' +
              '<ul class="navbar-nav w-100">' +
                '<li class="nav-item active">' +
                  '<a id="navDashboardButton" class="nav-link" href="http://stage.ravyyn.com/dashboard.html">Dashboard</a>' +
                '</li>' +
                '<li class="nav-item">' +
                  '<a id="navFindJobsButton" class="nav-link" href="http://stage.ravyyn.com/find-jobs.html">Find Jobs</a>' +
                '</li>' +
                '<li class="nav-item messages">' +
                  '<a id="navMessagesButton" class="nav-link" href="http://stage.ravyyn.com/messages-influencer.html">Messages <span class="number text-white">3</span></a>' +
                '</li>' +
                '<div class="ml-auto d-flex">' +
                  '<li class="nav-item d-flex">' +
                    '<button class="bg-transparent border-0 d-block"><img onclick="toggleNotifications()" src="./assets/icons/Icon ionic-ios-notifications.png" alt="notification bell"></button>' +
                  '</li>' +
                  '<li class="nav-item account has-dropdown">' +
                    '<button onclick="campaignDropdown(this)" class="nav-link bg-transparent border-0 text-uppercase accountLink">Account <img src="./assets/icons/chevron-down-sm.svg"></button>' +
                    '<div class="campaign-active-settings">' +
                '<p onclick="showScreen(' + "'accountSettingsScreen'" + ')">Account Settings</p>' +
                '<a onclick="showScreen(' + "'paypalSettingsScreen'" + ')">Paypal</a>' +
                '<a href="http://stage.ravyyn.com/">Sign Out</a>' +
              '</div>' +
                  '</li>' +
                '</div>' +
              '</ul>' +
            '</div>' +
            //Mobile Nav
            '<div class="w-100 d-flex" id="main-nav-mobile">' +
              '<button class="position-absolute" id="menu-close-btn">' +
                '<span class="sr-only">Menu close button</span>' +
              '</button>' +
              '<div class="navbar p-0 h-100">' +
                '<ul class="navbar-nav w-100 h-100">' +
                  '<div class="top-section bg-white border-bottom border-dark pb-3">' +
                    '<li class="nav-item active">' +
                      '<a class="nav-link" href="http://stage.ravyyn.com/dashboard-influencer.html">Dashboard</a>' +
                    '</li>' +
                    '<li class="nav-item active">' +
                      '<a class="nav-link" href="http://stage.ravyyn.com/find-jobs.html">Find Jobs</a>' +
                    '</li>' +
                    '<li class="nav-item messages">' +
                      '<a class="nav-link" href="http://stage.ravyyn.com/messages-influencer.html">Messages <span class="number text-white">3</span>' +
                      '</a>' +
                    '</li>' +
                  '</div>' +
                  '<div class="lower-section bg-custom-light h-100">' +
                    '<li class="nav-item">' +
                      '<div class="d-flex">' +
                        '<div class="avatar-wrap">' +
                          '<img class="profile-image" src="./assets/images/JaneDoe.png" alt="placeholder profile image">' +
                        '</div>' +
                          '<h3 class="text-primary font-la-nord ml-3 py-2" id="profile-name">Jane Doe</h3>' +
                      '</div>' +
                    '</li>' +
                    '<li class="nav-item ml-lg-auto" onclick="showScreen(' + "'accountSettingsScreen'" + ')">' +
                      '<a class="nav-link" href="#">Account Settings</a>' +
                    '</li>' +
                    '<li class="nav-item ml-lg-auto" onclick="showScreen(' + "'paypalSettingsScreen'" + ')">' +
                      '<a class="nav-link">Paypal</a>' +
                    '</li>' +
                    '<li class="nav-item ml-lg-auto">' +
                      '<a class="nav-link" onclick="showScreen(' + "'instagramLinkScreen'" + ')">Relink Instagram</a>' +
                    '</li>' +
                    '<li class="nav-item ml-lg-auto">' +
                      '<a class="nav-link" href="http://stage.ravyyn.com/">Sign Out</a>' +
                    '</li>' +
                  '</div>' +
                '</ul>' +
              '</div>' +
              '<div class="outside"></div>' +
            '</div>' +
            //END OF MOBILE NAV
        '</nav>' +

        //NOTIFICATIONS DROPDOWN
        '<div class="notificationsContainer" id="notificationsContainer">'+
          '<div class="notificationsContainerHeader">'+
            '<p class="left font-la-nord-bold">NOTIFICATIONS</p>'+
            '<p class="right orangeText" onclick="toggleNotifications()">X</p>'+
          '</div>'+
          '<div class="userChatHeader">'+
            //FIRST NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/images/aden.jpg" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">Jane Doe Applied</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>Applied for <span class="orangeText">Fitness Influencer Wanted for Protein Brand</span></p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            
            //SECOND NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/images/aden.jpg" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">Jane Doe Bid</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>Bid On <span class="orangeText">Fitness Influencer Wanted for Protein Brand</span></p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            //THIRD NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle displayNone"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/icons/notifcation0.png" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">Woo Hoo!</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p><span class="orangeText">Campaign Name</span> Has Reached A 6% Engagement</p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            //FOURTH NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/icons/notifcation1.png" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">Your Campaign Is <span class="greenText">Active</span></p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>Fitness Influencer Wanted For Protein Brand Is Active</p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            //FIFTH NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/icons/notifcation2.png" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">New Review</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>Check Out Your Review For <span class="orangeText">Campaign Name</span></p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            //SIXTH NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle displayNone"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/icons/notifcation3.png" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">Ravyyn Support</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>You Have Received A Message From Ravyyn Support Team</p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            //SEVENTH NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle displayNone"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/icons/notifcation4.png" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">No Budget</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>Campaigns With BUdgets Added Receive More Applicants</p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+

            //EIGTH NOTIFICATION
            '<div class="notificationContainer">'+
              '<div class="notificationOrangeCircle displayNone"></div>'+
              '<div class="profilePic">'+
                '<img src="./assets/icons/notifcation5.png" class="influencerPicture">'+
              '</div>'+
              '<div class="notificationInfo">'+
                '<div class="nameAndTime">'+
                  '<p class="notificationTitle">2 Hour Edit Window</p>'+
                '</div>'+
                '<div class="notificationShortMessage">'+
                  '<p>You Have 2 Hours To Edit Your Campaign Before It Goes Live</p>'+
                '</div>'+
              '</div>'+
              '<img onclick="campaignDropdownShow(this, ' + "'notification'" + ')" src="./assets/icons/ellipsis.svg" class="elipsis">'+
            '</div>'+



          '</div>'+
          '</div>'+
          //END OF NOTIFICATION DROPDOWN

          //CREDIT TAG
          '<div class="flexEnd"><p class="headerCreditNumber">Credit: <span>100</span></p></div>'+

        '</div>'+

      '</div>'
      ;


document.getElementById("top").innerHTML += header;


let pageTitle = document.title;

switch(pageTitle) {
  case "Ravyyn - Dashboard" : document.getElementById("navDashboardButton").classList.add("rustText");break;
  case "Ravyyn - Find Jobs" : document.getElementById("navFindJobsButton").classList.add("rustText");break;
  case "Ravyyn - Messages" : document.getElementById("navMessagesButton").classList.add("rustText");break;
  default : document.getElementById("navDashboardButton").classList.add("rustText");break;
}