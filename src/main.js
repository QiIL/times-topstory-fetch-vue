// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

let newYorkApiKey = "4dfd6d88bc06460883571aef03350a5e";
let baseUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?";

Vue.component('new-view-component',{
  template: '<div>A custom component</div>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
