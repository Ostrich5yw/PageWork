import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from "vue-axios"

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VueAxios, axios)

Vue.prototype.$axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')       //mount与el并没有实质区别，都是挂载到某一个div上


