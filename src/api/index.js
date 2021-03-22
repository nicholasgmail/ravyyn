import Vue from 'vue'
import axios from 'axios';
import { transformRequest, transformResponse } from '../utils'
import { startCase } from 'lodash-es'

// console.log('url', process.env.VUE_APP_API_URL)

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  transformRequest,
  transformResponse
});

const authData = localStorage.getItem('ravyynToken');
if (authData) {
  const { token } = JSON.parse(authData);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

api.interceptors.response.use(
  response => response,
  error => {
    // console.log(error.response);
    const vm = new Vue();
    const errors = error.response.data.errors;
    Object.entries(errors).forEach(([key, value]) => {
      const message = `${startCase(key)}: ${Array.isArray(value) ? value.join() : value}`;
      const options = {
        title: `${error.response.statusText} (${error.response.status})`,
        variant: 'danger',
        solid: true
      };

      vm.$bvToast.toast(message, options);
    });

    return Promise.reject(error)
  }
)

export {
    api
}