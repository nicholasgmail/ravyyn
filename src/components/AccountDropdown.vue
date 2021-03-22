<template>
     <nav class="navbar navbar-expand-lg flex-lg-row flex-row-reverse px-0"> 
            <div class="d-lg-none d-block"><img onclick="toggleNotifications()" src="@/assets/icons/Icon ionic-ios-notifications.png" alt="notification bell icon"></div> 
            <a class="navbar-brand text-dark" href="/"> 
              <h1 class="text-uppercase display-5 m-0"> 
                Ravyyn 
              </h1> 
            </a> 
            <button class="navbar-toggler p-0" type="button" data-target="#main-nav-mobile" aria-controls="main-nav-mobile" aria-expanded="false" aria-label="Toggle navigation"> 
              <span class="navbar-toggler-icon"></span> 
            </button> 
            <div class="navbar w-100" id="main-nav"> 
              <ul class="navbar-nav w-100"> 
                <li class="nav-item"> 
                  <a id="navDashboardButton" class="nav-link" href="http://stage.ravyyn.com/dashboard.html">Dashboard</a> 
                </li> 
                <li class="nav-item"> 
                  <a id="navFindInfluencersButton" class="nav-link" href="http://stage.ravyyn.com/find-influencers.html">Find Influencers</a> 
                </li> 
                <li class="nav-item messages"> 
                  <a id="navMessagesButton" class="nav-link" href="http://stage.ravyyn.com/messages-advertiser.html">Messages <span class="number text-white">3</span></a> 
                </li> 
                <div class="ml-auto d-flex"> 
                  <li class="nav-item d-flex"> 
                    <button class="bg-transparent border-0 d-block"><img onclick="toggleNotifications()" src="@/assets/icons/Icon ionic-ios-notifications.png" alt="notification bell"></button> 
                  </li> 
                  <li class="nav-item account has-dropdown"> 
                    <button onclick="campaignDropdown(this)" class="nav-link bg-transparent border-0 text-uppercase accountLink">Account <img src="@/assets/icons/chevron-down-sm.svg"></button> 
                    <div class="campaign-active-settings"> 
                <p onclick="showScreen('accountSettingsScreen')">Account Settings</p> 
                <a href="http://stage.ravyyn.com/favorites.html">Favorites</a> 
                <p onclick="showScreen('paypalSettingsScreen')">Paypal</p> 
                <a href="http://stage.ravyyn.com/instagram-connect.html">Relink Instagram</a> 
                <a href="http://stage.ravyyn.com/">Sign Out</a> 
              </div> 
                  </li> 
                </div> 
              </ul> 
            </div> 
            //Mobile Nav
            <div class="w-100 d-flex" id="main-nav-mobile"> 
              <button class="position-absolute" id="menu-close-btn"> 
                <span class="sr-only">Menu close button</span> 
              </button> 
              <div class="navbar p-0 h-100"> 
                <ul class="navbar-nav w-100 h-100"> 
                  <div class="top-section bg-white border-bottom border-dark pb-3"> 
                    <li class="nav-item active"> 
                      <a class="nav-link" onclick="newCampaignButton()">New Campaign</a> 
                    </li> 
                    <li class="nav-item active"> 
                      <a class="nav-link" href="http://stage.ravyyn.com/dashboard.html">Dashboard</a> 
                    </li> 
                    <li class="nav-item active"> 
                      <a class="nav-link" href="http://stage.ravyyn.com/find-influencers.html">Find Influencers</a> 
                    </li> 
                    <li class="nav-item messages"> 
                      <a class="nav-link" href="http://stage.ravyyn.com/messages-advertiser.html">Messages <span class="number text-white">3</span> 
                      </a> 
                    </li> 
                  </div> 
                  <div class="lower-section bg-custom-light h-100"> 
                    <li class="nav-item"> 
                      <div class="d-flex"> 
                        <div class="avatar-wrap"> 
                          <img class="profile-image" src="@/assets/images/JaneDoe.png" alt="placeholder profile image"> 
                        </div> 
                          <h3 class="text-primary font-la-nord ml-3 py-2" id="profile-name">Jane Doe</h3> 
                      </div> 
                    </li> 
                    <li class="nav-item ml-lg-auto" onclick="showScreen('accountSettingsScreen')"> 
                      <a class="nav-link" href="#">Account Settings</a> 
                    </li> 
                    <li class="nav-item ml-lg-auto" onclick="showScreen('accountSettingsScreen')"> 
                      <a class="nav-link" href="http://stage.ravyyn.com/favorites.html">Favorites</a> 
                    </li> 
                    <li class="nav-item ml-lg-auto"> 
                      <a class="nav-link" onclick="showScreen('paypalSettingsScreen')">Paypal</a> 
                    </li> 
                    <li class="nav-item ml-lg-auto"> 
                      <a class="nav-link" href="http://stage.ravyyn.com/instagram-connect.html">Relink Instagram</a> 
                    </li> 
                    <li class="nav-item ml-lg-auto"> 
                      <a class="nav-link" href="http://stage.ravyyn.com/">Sign Out</a> 
                    </li> 
                  </div> 
                </ul> 
              </div> 
              <div class="outside"></div> 
            </div> 
        </nav> 
</template>