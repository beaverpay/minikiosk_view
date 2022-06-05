import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.prototype.$http = axios;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
