import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import NotFound from '../components/NotFound.vue';
import Admin from '../components/Admin.vue';
import Manager from '../components/Manager.vue';
import Store from '../components/Store.vue';
import StoreEdit from '../components/StoreEdit.vue';

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
	{
		path: '/store',
		name: 'store',
		component: Store,
	},
	{
		path: '/storeEdit',
		name: 'storeEdit',
		component: StoreEdit,

	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
