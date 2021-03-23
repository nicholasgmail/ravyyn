import { api } from "../api";
import { getUserRedirectURL } from '@/utils'
import dayjs from "dayjs";
import Mutations from './mutation-types'

const onTokenError = (err, commit) => {
  commit("auth_error", err);
  localStorage.removeItem("ravyynToken");
  delete api.defaults.headers.common["Authorization"];
  return err;
}

const onTokenSuccess = (response, commit) => {
  console.log('onTokenSuccess', { response });
  let { token, expires, userId } = response.data;
  expires = dayjs().add(expires, 'second').format();
  console.log('expiresDate', expires);
  localStorage.setItem("ravyynToken", JSON.stringify({ token, expires }));
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  commit("auth_success", { token, userId });

  return response;
}

const login = ({ commit }, data) => {
  return new Promise((resolve) => {
    commit("auth_request");
    api
      .post("/user/login/email", data)
      .then(res => resolve(onTokenSuccess(res, commit)))
    // .catch(err => reject(onTokenError(err, commit)));
  });
}

const socialLogin = ({ commit }, data) => {
  return new Promise((resolve) => {
    commit("auth_request");
    api
      .post("/user/login/social", data)
      .then(res => {
        onTokenSuccess(res, commit);
        const { loginStatus, redirect: accountType } = res.data;
        const redirectUrl = accountType === "need_account_type"
          ? commit("accountTypeMissing", true) || "/signup"
          : getUserRedirectURL(loginStatus, accountType);

        resolve(redirectUrl);
      });
  });
}

const register = ({ commit }, data) => {
  return new Promise((resolve) => {
    commit("auth_request");
    api
      .post("/user/signup/email", data)
      .then(res => resolve(onTokenSuccess(res, commit)))
  });
}

const refreshToken = ({ commit }) => {
  return new Promise((resolve) => {
    commit("auth_request");
    api.get("/token/refresh")
      .then(res => resolve(onTokenSuccess(res, commit)))
  });
}

const logout = ({ commit }) => {
  return new Promise((resolve) => {
    if ('FB' in window) {
      FB.logout();
    }
    localStorage.removeItem("ravyynToken");
    delete api.defaults.headers.common["Authorization"];
    commit("logout");
    resolve();
  });
}

const forgotPassword = ({ commit }, email) => {
  return new Promise((resolve) => {
    api.post('/user/password/forgot', { email })
      .then(res => {
        commit('passwordResetKey', res.data.key);
        resolve(res);
      })
  });
}

const resetPassword = ({ commit }, data) => {
  return new Promise((resolve) => {
    api.post('/user/password/reset', data)
      .then(res => {
        commit('passwordResetKey', null);
        resolve(res);
      })
  });
}

const setAccountType = ({ commit }, data) => {
  return new Promise((resolve) => {
    api.put('/user/login/social/type', data)
      .then(res => {
        commit('accountTypeMissing', false);
        resolve(res);
      })
  });
}

const showCampaignInfluencers = ({ commit }, campaign) => {
  console.log('showCampaignInfluencers', campaign)
  commit(Mutations.SHOW_CAMPAIGN_INFLUENCERS, campaign);
}

const addToStateName = ({ commit }, data) => {
  let $name = data.name;
  commit('SET_NAME', $name)
}

export default {
  login,
  socialLogin,
  register,
  refreshToken,
  logout,
  forgotPassword,
  resetPassword,
  setAccountType,
  showCampaignInfluencers,
  addToStateName
};
