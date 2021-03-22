<template>
  <main class="main">      

    <div class="border-top columnFlex dashboardCampaignContainer">

      <div class="rowFlex justifyEnd dashboardNewCampaignBtnContainer">
        <button v-b-modal.newCampaignModal class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn">
          New Campaign
        </button>
      </div>
      
      <div class="rowFlex dashboardSubtitle">
        <p><span class="font-la-nord-bold" id="dashboardSubtitleName">ALL CAMPAIGNS</span><span id="dashboardSubtitleTitle"></span></p>
      </div>
      <div class="mobileFlex dashboardMobileHeader">
        <p><span class="font-la-nord-bold" id="dashboardSubtitleNameMobile">ALL CAMPAIGNS</span><span id="dashboardSubtitleTitleMobile"></span></p>
        <a href="#" id="newCampaignButtonMobile" class="signup-btn nav-link btn text-white d-lg-block d-inline-block mb-lg-0 mb-3 sign-up-btn" v-b-modal.newCampaignModal>
          New Campaign
        </a>
      </div>
      <div class="rowFlex dashboardDataTypesMobile">
        <div class="dashboardDataTypesSelected dashboardDataType">
          <p>ENGAGEMENT RATE</p>
        </div>
        <div class="dashboardDataType">
          <p>CPE</p>
        </div>
        <div class="dashboardDataType">
          <p>CTR</p>
        </div>
        <div class="dashboardDataType">
          <p>CLICKS</p>
        </div>
        <div class="dashboardDataType">
          <p>STORY VIEWS</p>
        </div>
        <div class="dashboardDataType">
          <p>TOTAL SAVES</p>
        </div>
        <div class="dashboardDataType">
          <p>TOTAL LIKES</p>
          </div>
        <div class="dashboardDataType">
          <p>TOTAL COMMENTS</p>
        </div>
      </div>

      <div class="columnFlex dashboardDataContainer">
        <div class="dashboardDataTypesContainer">
          <div class="rowFlex dashboardDataTypes">

            <span
              :class="statsRibbonClasses"
              class="dashboardDataTypeRibbon"
              id="dataRibbon"
            ></span>

            <div
              v-for="(stat, index) of stats"
              :key="index"
              @click="setStatSelected(index)"
              class="dashboardDataType"
            >
              <p>{{stat.title}}</p>
            </div>

          </div>
          <p class="right"></p>
        </div>

        <div class="columnFlex dashboardData">
          <p id="dashboardSelectedStat">
            {{statSelected.title}}
          </p>

          <div class="animation-wrap position-relative animation-card">

          <div class="animated-numbers-wrap orelo d-flex justify-content-center">
                
                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNumStart"
                      class="position"
                      :class="[
                        `dashboardStartInt${statSelected.value[0] === '$' ? 'Dollar' : statSelected.value[0]}`
                      ]"
                    >
                      <span class="blank">_</span>
                      <span>$</span>
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span class="blank">_</span>
                    </div>
                </div>

                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNum1"
                      class="position"
                      :class="[
                        `dashboardMiddleInt${statSelected.value[1] === '$' ? 'Dollar' : statSelected.value[1]}`
                      ]"
                    >    
                        <span class="blank">_</span>    
                        <span>0</span>    
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span class="blank">_</span>
                    </div>
                </div>

                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNum2"
                      class="position"
                      :class="[
                        `dashboardMiddleInt${statSelected.value[2] === '.' ? (statSelected.value[3] === '$' ? 'Dollar' : statSelected.value[3]) : (statSelected.value[2] === '$' ? 'Dollar' : statSelected.value[2])}`
                      ]"
                    >            
                      <span class="blank">_</span>    
                      <span>0</span>    
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span class="blank">_</span>
                    </div>

                    <span
                      class="position-absolute dot"
                      :style="{
                        animation: statSelected.value[2] === '.' ? '1s linear 0s 1 normal forwards running dotAnimation' : '1s linear 0s 1 normal forwards running dotAnimationHide'
                      }"
                    >.</span>
                </div>

                <div class="column font-orelo text-primary d-flex flex-column">
                    <div
                      id="dashNumEnd"
                      class="position"
                      :class="[
                        `dashboardEndInt${statSelected.value[2] === '.' ? (statSelected.value[4] === '$' ? 'Dollar' : statSelected.value[4] === '%' ? 'Percent' : statSelected.value[4]) : (statSelected.value[3] === '$' ? 'Dollar' : statSelected.value[3] === '%' ? 'Percent' : statSelected.value[3])}`
                      ]"
                    >            
                      <span class="blank">_</span> 
                      <span>%</span>   
                      <span>0</span>    
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span class="blank">_</span>
                    </div>
                </div>
    
                </div>

            </div>

        </div>
      </div>
    </div>

    <Campaigns />

    <!-- MODALS -->

    <b-modal id="newCampaignModal" title="New Campaign" size="lg" scrollable hide-footer body-class="center p-0">
      <!-- <NewCampaignModal /> -->
      Hello      
    </b-modal>

    <!-- <iframe id="newCampaign" src=""></iframe> -->

  </main>
</template>

<script>
import '@/assets/css/general.css'
import '@/assets/css/dashboard-animation.css'
import '@/assets/css/ion.rangeSlider.css'

import Campaigns from '@/components/campaign/Campaigns'

const filter = {
  today: item => item.date === new Date(),
  pending: item => item.status === 'pending',
  drafts: item => item.status === 'draft',
  completed: item => item.status === 'completed'
}

export default {
  name: 'Dashboard',
    components: {
        Campaigns,
    // RDropDown
  },
  data() {
    return {
      statSelectedIndex: 1,
      stats: [
        {
          title: 'ENGAGEMENT RATE',
          value: '97.8%'
        },
        {
          title: 'CPE',
          value: '$3.47'
        },
        {
          title: 'CTR',
          value: '85.2%'
        },
        {
          title: 'CLICKS',
          value: '9785'
        },
        {
          title: 'STORY VIEWS',
          value: '5300'
        },
        {
          title: 'TOTAL SAVES',
          value: '3700'
        },
        {
          title: 'TOTAL LIKES',
          value: '4000'
        },
        {
          title: 'TOTAL COMMENTS',
          value: '6000'
        }
      ],
      tabSelectedIndex: 0,
      tabs: [
        {
          title: 'today'
        },
        {
          title: 'pending'
        },
        {
          title: 'drafts'
        },
        {
          title: 'completed'
        }
      ],
      campaings: [
        {
          id: 1,
          peoples: 4,
          status: 'pending',
          date: '3/26/20 - 1pm'
        }
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.campaings.filter(filter[this.tabSelected.title])
    },
    statsRibbonClasses() {
      const statSelectedIndex = this.statSelectedIndex

      return {
        [`dashboardDataTypeRibbonSelected${statSelectedIndex}`]: statSelectedIndex > 0
      }
    },
    statSelected() {
      const stats = this.stats
      const statSelectedIndex = this.statSelectedIndex
      const statSelected = stats[statSelectedIndex]

      return statSelected
    },
    tabSelected() {
      const tabs = this.tabs
      const tabSelectedIndex = this.tabSelectedIndex
      const tabSelected = tabs[tabSelectedIndex]

      return tabSelected
    }
  },
  methods: {
    newCampaignButton(e) {

    },
    setStatSelected(index) {
      this.statSelectedIndex = index
    },
    setTabSelected(index) {
      this.tabSelectedIndex = index
    },
    getTabsButtonClasses(index) {
      const tabSelectedIndex = this.tabSelectedIndex

      return {
        campaignNavTypeSelected: tabSelectedIndex === index
      }
    }
  }
}
</script>

<style scoped>
.dashboardCampaignContainer {
  background: #e4d7ce;
}
</style>