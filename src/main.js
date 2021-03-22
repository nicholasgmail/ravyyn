import Vue from 'vue'
import App from './App.vue'
import { api } from './api'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, ToastPlugin } from 'bootstrap-vue'

import General from '@/components/faq/General'
import Advertiser from '@/components/faq/Advertiser'
import Influencer from '@/components/faq/Influencer'

Vue.component('general-faq', General)
Vue.component('advertiser-faq', Advertiser)
Vue.component('influencer-faq', Influencer)


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/style.css'
import './assets/css/general.css'

// vSelect css
import '../node_modules/vue-select/dist/vue-select.css';

import './assets/css/custom.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ToastPlugin)

Vue.prototype.$http = api;
Vue.config.productionTip = false;

Vue.filter('YesNo', function (value) {
  return value === 1 ? "YES" : "NO"
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
