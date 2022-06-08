import { createStore } from 'vuex';
import axios from 'axios';
import router from './assets/router';
import createPersistedState from 'vuex-persistedstate';
//테스트
const store = createStore({
	state() {
		return {
			token: '',
			storeId: 0,
			stock: 0,
			menuId: '',
			Menu: { menu_name: '', menu_price: 0, menu_desc: '', menu_stock: 0, menu_category: '' },
			Manager: { user_store_id: 0, user_password: '' },
			Store: {store_id:null, store_name:'',store_branch:'',store_tel:''},
			showUpdateStockModal: false,
			showRegistMenuModal: false,
			showDetailMenuModal: false,
			showRegistManagerModal: false,
			showRegistStoreModal: false,
		};
	},
	mutations: {
		storeToken(state, token) {
			state.token = token;
		},
		storeId(state, storeId) {
			state.storeId = storeId;
		},
		changeStock(state, stock) {
			state.stock = stock;
		},
		storeMenuId(state, menuId) {
			state.menuId = menuId;
		},
		toggleUpdateStockModal(state) {
			state.showUpdateStockModal = !state.showUpdateStockModal;
		},
		toggleRegistMenuModal(state) {
			state.showRegistMenuModal = !state.showRegistMenuModal;
		},
		toggleDetailMenuModal(state) {
			state.showDetailMenuModal = !state.showDetailMenuModal;
		},
		toggleRegistManagerModal(state) {
			state.showRegistManagerModal = !state.showRegistManagerModal;
		},
		toggleRegistStoreModal(state) {
			state.showRegistStoreModal = !state.showRegistStoreModal;
		},
	},
	actions: {
		login(context, user) {
			axios
				.post(
					'http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/auth',
					JSON.stringify({
						user_store_id: Number(user.userStoreId),
						user_password: user.userPassword,
					}),
					{
						headers: {
							'Content-Type': `application/json`,
						},
					},
				)
				.then((response) => {
					context.commit('storeToken', response.data.data.accessToken);
					context.commit('storeId', response.data.data.storeId);
					response.data.data.storeId === 1 ? router.push('/admin') : router.push('/manager');
				})
				.catch((error) => {
					console.log(error);
				});
		},
		logout(context) {
			context.commit('storeToken', '');
			context.commit('storeId', 0);
			router.push('/');
		},
	},
	plugins: [createPersistedState()],
});

export default store;
