// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from 'vue-router'

Vue.use(router)

Vue.prototype.$axios = axios

//设置axios请求的baseURL
// Axios.defaults.baseURL = ''

Vue.config.productionTip = false


// 发送request请求拦截器
axios.interceptors.request.use(function(config) {
	// if (config.method === "post") {
	// 	config.data = qs.stringify(config.data)
	// }
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});


// 响应数据的拦截器
axios.interceptors.response.use(function(response) {
	// Do something with response data
	return response;
}, function(error) {
	// Do something with response error
	return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
