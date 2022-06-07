// Vue.prototype.$http = axios;
// Vue.prototype.$axios = axios;
// Vue.config.productionTip = false;

import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import axios from 'axios';
import router from './assets/router';
import store from './store';
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;

app.use(store).use(router).mount('#app');

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
