import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import dayjs from 'dayjs';

Vue.use(VueRouter);

const Login = () => import(/* webpackChunkName: "Login" */ '@/components/Login');
const SignUp = () => import(/* webpackChunkName: "SignUp" */ '@/components/signUp/SignUp');
const AccountType = () => import(/* webpackChunkName: "AccountType" */ '@/components/signUp/AccountType');
const CompleteAccount = () => import(/* webpackChunkName: "CompleteAccount" */ '@/components/signUp/CompleteAccount');
const InfluencerSignUp = () => import(/* webpackChunkName: "InfluencerSignUp" */ '@/components/signUp/InfluencerSignUp');
const ForgotPassword = () => import(/* webpackChunkName: "ForgotPassword" */ '@/components/ForgotPassword');
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword" */ '@/components/ResetPassword');
const AdvertiserDashboard = () => import(/* webpackChunkName: "AdvertiserDashboard" */ '@/components/dashboard/advertiser/AdvertiserDashboard');
const FAQ = () => import(/* webpackChunkName: "FAQ" */ '@/components/faq/FAQ');
const ContactUs = () => import(/* webpackChunkName: "ContactUs" */ '@/components/ContactUs');
const Blog = () => import(/* webpackChunkName: "Blog" */ '@/components/Blog');
const FindJobs = () => import(/* webpackChunkName: "FindJobs" */ '@/components/influencer/FindJobs');
const InstagramConnect = () => import(/* webpackChunkName: "InstagramConnect" */ '@/components/InstagramConnect');

import Landing from '@/components/Landing'

const isDebugMode = true;

const router= new VueRouter({
  routes: [
    { path: '/', component: Landing },
    { path: '/dashboard/advertiser', component: AdvertiserDashboard, meta: { requiresAuth: !isDebugMode } },
    { path: '/login', component: Login, beforeEnter: (to, from, next) => {
      store.getters.isLoggedIn ? next('/') : next();
    }},
    { path: '/signup', component: AccountType },
    { path: '/signup/:userType', component: SignUp },
    { path: '/signup/:userType/complete-account', component: CompleteAccount },
    { 
      path: '/influencer-signup',
      component: InfluencerSignUp,
      meta: { requiresAuth: true },
      children: [
        {
          name: 'signup-code',
          path: 'code',
          component: () => import('@/components/signUp/InfluencerCode')
        },
        {
          name: 'advertiser-connect-paypal',
          path: 'paypal',
          component: () => import('@/components/signUp/InfluencerPaypal')
        },
        {
          name: 'signup-interests',
          path: 'interests',
          component: () => import('@/components/signUp/InfluencerInterests')
        }
      ]
    },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/reset-password', component: ResetPassword, beforeEnter: (to, from, next) => {
        // if password reset key not found redirect to ForgotPassword component
        store.getters.passwordResetKey ? next() : next('/forgot-password');
    }},
    { path: '/contact-us', component: ContactUs },
    { path: '/faq', component: FAQ },
    { path: '/blog', component: Blog },
    { path: '/find-jobs', component: FindJobs, meta: { requiresAuth: !isDebugMode } },
    { path: '/instagram-connect', component: InstagramConnect, meta: { requiresAuth: !isDebugMode } }
  ]  
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // check if logged in and token not expired yet
    if (store.getters.isLoggedIn) {
      const token = localStorage.getItem('ravyynToken');
      if(token) {
        const { expires } = JSON.parse(token);
        const now = dayjs();
        const isValid = dayjs(expires).isAfter(now);
        // if not expired continue the navigation
        if(isValid) {
          next()
          return
        }
      }
    }
    // try to get refresh token
    store.dispatch('refreshToken')
    .then(_ => next())
    .catch(_ => next('/login'))
    
  } else {
    next()
  }
})

export default router