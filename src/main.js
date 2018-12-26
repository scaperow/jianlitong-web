// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueBus from 'vue-bus'
import './style/site.scss';
import 'element-theme-chalk';

Vue.config.productionTip = false

Axios.defaults.baseURL = "http://localhost:8360"
Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.interceptors.request.use(config => {
  if (sessionStorage.token) {
    config.headers["Authorization"] = sessionStorage.token || '';
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
  if (response.data && response.data.error) {
    return Promise.reject({
      code: response.data.error,
      message: response.data.errorMessage,
      data: response.data.data
    });
  }

  if (response.data && response.data.data) {
    response.data = response.data.data;
  }

  return response;
}, function (error) {
  return Promise.reject(error);
});


Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
Vue.use(VueBus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  created() {
    this.$bus.$on('user:afterSiginSuccess', (event) => {
      sessionStorage.token = event.user.token;
      sessionStorage.user = JSON.stringify(event.user);
    });


    this.$bus.$on('user:afterSigoutSuccess', (event) => {
      sessionStorage.clear();
    });
  },
  template: '<App/>'
})
