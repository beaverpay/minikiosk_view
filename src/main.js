// Vue.prototype.$http = axios;
// Vue.prototype.$axios = axios;
// Vue.config.productionTip = false;

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './assets/router';

createApp(App).use(router).mount('#app');
