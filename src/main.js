// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//require the vu resource library
var VueResource = require('vue-resource');
//tell vue to use vue resource
Vue.use(VueResource);
Vue.http.options.root = '/root';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
