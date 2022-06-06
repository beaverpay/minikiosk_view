// Vue.prototype.$http = axios;
// Vue.prototype.$axios = axios;
// Vue.config.productionTip = false;

import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './assets/router';

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;

app.use(router).mount('#app');
