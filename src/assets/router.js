import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import NotFound from '../components/NotFound.vue';
import Admin from '../components/Admin.vue';
import Manager from '../components/Manager.vue';
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/manager',
		component: Manager,
	},
	{
		path: '/admin',
		component: Admin,
	},
	{
		path: '/:anything(.*)*',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
