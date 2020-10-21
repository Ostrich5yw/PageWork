import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import './static/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
// import VueAxios from "vue-axios"

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex);
// Vue.use(VueAxios, axios)

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')       //mount与el并没有实质区别，都是挂载到某一个div上


