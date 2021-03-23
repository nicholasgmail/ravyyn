import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status: '',
    token: JSON.parse(localStorage.getItem('ravyynToken'))?.token || '',
    passwordResetKey: null,
    accountTypeMissing: false,
    userId: null,
    selectedCampaign: null,
    showCampaignInfluencers: false,
    inpScreen: {
      name: 'hello',
      product: false,
      code: '',
    },
  },
  getters,
  mutations,
  actions
});


export default store;