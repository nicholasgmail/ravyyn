<template>
  <header class="bg-custom-light" id="top">
    <div class="container">
      <nav class="navbar navbar-expand-lg flex-lg-row flex-row-reverse px-0">
        <div class="d-lg-none d-block">
          <img src="@/assets/icons/Icon-ionic-ios-notifications.png" alt="notification bell icon">
        </div>
        <router-link class="navbar-brand text-dark" to="/">
          <h1 class="text-uppercase display-5 m-0">
            Ravyyn
          </h1>
        </router-link>

        <button
          @click="mobileMenuOpen"
          class="navbar-toggler p-0"
          type="button"
          data-target="#main-nav-mobile"
          aria-controls="main-nav-mobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar w-100"
          id="main-nav"
        >
          <ul class="navbar-nav w-100">
            <li class="nav-item">
              <router-link id="navDashboardButton" class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link id="navFindInfluencersButton" class="nav-link" to="/find-influencers">Find Influencers</router-link>
            </li>
            <li class="nav-item messages">
              <router-link id="navMessagesButton" class="nav-link" to="/messages-advertiser">Messages <span class="number text-white">3</span></router-link>
            </li>
            <div class="ml-auto d-flex">
              <li class="nav-item d-flex">
                <button
                  @click="notificationsPopUpToggle"
                  class="bg-transparent border-0 d-block"
                >
                  <img src="@/assets/icons/Icon-ionic-ios-notifications.png" alt="notification bell">
                </button>
              </li>

              <r-drop-down
                tag="li"
                class="nav-item account has-dropdown"
              >
                <template #header="{ toggle }">
                  <button
                    @click="toggle"
                    class="nav-link bg-transparent border-0 text-uppercase accountLink"
                  >
                    Account <img src="@/assets/icons/chevron-down-sm.svg">
                  </button>
                </template>

                <p>Account Settings</p>
                <router-link to="/favorites">Favorites</router-link>
                <p>Paypal</p>
                <router-link to="/instagram-connect">Relink Instagram</router-link>
                <router-link to="/">Sign Out</router-link>
              </r-drop-down>
            </div>
          </ul>
        </div>

        <div
          :class="mobileMenuClasses"
          class="w-100 d-flex"
          id="main-nav-mobile"
        >
          <button
            @click="mobileMenuClose"
            class="position-absolute"
            id="menu-close-btn"
          >
            <span class="sr-only">Menu close button</span>
          </button>
          <div class="navbar p-0 h-100">
            <ul class="navbar-nav w-100 h-100">
              <div class="top-section bg-white border-bottom border-dark pb-3">
                <li class="nav-item active">
                  <a class="nav-link">New Campaign</a>
                </li>
                <li class="nav-item active">
                  <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item active">
                  <router-link class="nav-link" to="/find-influencers">Dashboard</router-link>
                </li>
                <li class="nav-item messages">
                  <router-link class="nav-link" to="/messages-advertiser">Messages <span class="number text-white">3</span></router-link>
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
                <li class="nav-item ml-lg-auto">
                  <a class="nav-link" href="#">Account Settings</a>
                </li>
                <li class="nav-item ml-lg-auto">
                  <router-link class="nav-link" to="/favorites">Favorites</router-link>
                </li>
                <li class="nav-item ml-lg-auto">
                  <a class="nav-link">Paypal</a>
                </li>
                <li class="nav-item ml-lg-auto">
                  <router-link class="nav-link" to="/instagram-connect">Relink Instagram</router-link>
                </li>
                <li class="nav-item ml-lg-auto">
                  <router-link class="nav-link" to="/">Sign Out</router-link>
                </li>
              </div>
            </ul>
          </div>
          <div
            @click="mobileMenuClose"
            class="outside"
          ></div>
        </div>
      </nav>

      <r-pop-up
        ref="notificationsPopUp"
        open-class="displayFlex"
        class="notificationsContainer"
        id="notificationsContainer"
      >
        <template #default="{ close }">
          <div class="notificationsContainerHeader">
            <p class="left font-la-nord-bold">NOTIFICATIONS</p>
            <p
              @click="close"
              class="right orangeText"
            >X</p>
          </div>

          <div class="userChatHeader">
            <r-drop-down
              v-for="notification of notifications"
              :key="notification.id"
              class="notificationContainer"
            >
              <template #header="{ toggle }">
                <div
                  :class="getNotificationClasses(notification.read)"
                  class="notificationOrangeCircle"
                ></div>

                <div class="profilePic">
                  <img
                    :src="notification.image"
                    class="influencerPicture"
                  >
                </div>

                <div class="notificationInfo">
                  <div class="nameAndTime">
                    <p
                      v-html="notification.title"
                      class="notificationTitle"
                    ></p>
                  </div>

                  <div class="notificationShortMessage">
                    <p
                      v-html="notification.message"
                    ></p>
                  </div>
                </div>

                <img
                  @click="toggle"
                  src="@/assets/icons/ellipsis.svg"
                  class="elipsis"
                >
              </template>

              <p
                @click="notificationRead(notification.id)"
              >Read</p>
              <p
                @click="notificationRemove(notification.id)"
              >Delete</p>
              <p>Report an issue</p>
            </r-drop-down>
          </div>
        </template>
      </r-pop-up>
    </div>
  </header>
</template>

<script>
import RDropDown from '@/components/base/RDropDown/RDropDown'
import RPopUp from '@/components/base/RPopUp/RPopUp'

export default {
  name: 'Header',
  data() {
    return {
      mobileMenuIsOpen: false,
      notifications: [
        {
          id: 1,
          read: false,
          image: require('@/assets/images/aden.jpg'),
          title: 'Jane Doe Applied',
          message: 'Applied for <span class="orangeText">Fitness Influencer Wanted for Protein Brand</span>'
        },
        {
          id: 2,
          read: false,
          image: require('@/assets/images/aden.jpg'),
          title: 'Jane Doe Bid',
          message: 'Bid On <span class="orangeText">Fitness Influencer Wanted for Protein Brand</span>'
        },
        {
          id: 3,
          read: true,
          image: require('@/assets/icons/notifcation0.png'),
          title: 'Woo Hoo!',
          message: '<span class="orangeText">Campaign Name</span> Has Reached A 6% Engagement'
        },
        {
          id: 4,
          read: false,
          image: require('@/assets/icons/notifcation1.png'),
          title: 'Your Campaign Is <span class="greenText">Active</span>',
          message: 'Fitness Influencer Wanted For Protein Brand Is Active'
        },
        {
          id: 5,
          read: false,
          image: require('@/assets/icons/notifcation2.png'),
          title: 'New Review',
          message: 'Check Out Your Review For <span class="orangeText">Campaign Name</span>'
        },
        {
          id: 6,
          read: true,
          image: require('@/assets/icons/notifcation3.png'),
          title: 'Ravyyn Support',
          message: 'You Have Received A Message From Ravyyn Support Team'
        },
        {
          id: 7,
          read: true,
          image: require('@/assets/icons/notifcation4.png'),
          title: 'No Budget',
          message: 'Campaigns With BUdgets Added Receive More Applicants'
        },
        {
          id: 8,
          read: true,
          image: require('@/assets/icons/notifcation5.png'),
          title: '2 Hour Edit Window',
          message: 'You Have 2 Hours To Edit Your Campaign Before It Goes Live'
        }
      ]
    }
  },
  methods: {
    mobileMenuOpen() {
      this.mobileMenuIsOpen = true
    },
    mobileMenuClose() {
      this.mobileMenuIsOpen = false
    },
    notificationsPopUpToggle() {
      const notificationsPopUp = this.$refs.notificationsPopUp

      notificationsPopUp.outsideAction('toggle')
    },
    getNotificationIndexById(id) {
      const notifications = this.notifications
      const notificationIndex = notifications.findIndex(notification => notification.id === id)

      return notificationIndex
    },
    notificationRead(id) {
      const notifications = this.notifications
      const notificationIndex = this.getNotificationIndexById(id)
      const notification = notifications[notificationIndex]

      notification.read = true
    },
    notificationRemove(id) {
      const notifications = this.notifications
      const notificationIndex = this.getNotificationIndexById(id)

      notifications.splice(notificationIndex, 1)
    },
    getNotificationClasses(read) {
      return {
        displayNone: read
      }
    }
  },
  computed: {
    mobileMenuClasses() {
      return {
        active: this.mobileMenuIsOpen
      }
    }
  },
  components: {
    RDropDown,
    RPopUp
  }
}
</script>