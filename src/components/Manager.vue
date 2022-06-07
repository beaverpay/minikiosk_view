<template>
	<updateStockModal v-if="$store.state.showUpdateStockModal"></updateStockModal>
	<registMenuModal v-if="$store.state.showRegistMenuModal"></registMenuModal>
	<detailMenuModal v-if="$store.state.showDetailMenuModal"></detailMenuModal>
	<div class="row p-0 m-0">
		<h1>메뉴관리</h1>
		<button class="btn btn-success w-100" @click="$store.commit('toggleRegistMenuModal')">추가</button>
		<ul>
			<li v-for="(menu, index) in menuList" :key="index" class="row">
				<div
					class="col-4"
					@click="
						$store.commit('toggleDetailMenuModal');
						$store.commit('storeMenuId', menu.id);
					"
				>
					{{ menu.menu_name }}
				</div>
				<div class="col-1"><button class="btn btn-danger" @click="subStock(menu)">-</button></div>
				<div
					class="col-1"
					@click="
						$store.commit('toggleUpdateStockModal');
						$store.commit('changeStock', menu.menu_stock);
						$store.commit('storeMenuId', menu.id);
					"
				>
					{{ menu.menu_stock }}
				</div>
				<div class="col-1"><button class="btn btn-primary" @click="addStock(menu)">+</button></div>
				<div class="col-3">{{ menu.menu_price }}원</div>
				<div class="col-2"><button class="btn btn-danger" @click="deleteMenu(menu)">삭제</button></div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
import updateStockModal from '../modals/UpdateStockModal.vue';
import registMenuModal from '../modals/RegistMenuModal.vue';
import detailMenuModal from '../modals/DetailMenuModal.vue';

export default {
	name: 'Manager',
	data() {
		return {
			menuList: [],
		};
	},
	mounted() {
		this.getStoreMenu();
	},
	updated() {
		this.getStoreMenu();
	},
	methods: {
		getStoreMenu() {
			axios
				.get(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/${this.$store.state.storeId}`)
				.then((response) => {
					this.menuList = response.data.data.result;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		deleteMenu(menu) {
			axios
				.delete(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/${menu.id}`, {
					headers: {
						Authorization: this.$store.state.token,
					},
				})
				.then((response) => {
					response.statusText === 'OK' ? this.getStoreMenu() : this.$router.push('/NotFound');
				})
				.catch((error) => {
					console.log(error);
				});
		},
		addStock(menu) {
			axios
				.put(
					'http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/stock/rel',
					JSON.stringify({ menu_stock: 1, id: menu.id }),
					{
						headers: {
							'Content-Type': `application/json`,
						},
					},
				)
				.then(() => {})
				.catch((error) => {
					console.log(error);
				});
		},
		subStock(menu) {
			axios
				.put(
					'http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/stock/rel',
					JSON.stringify({ menu_stock: -1, id: menu.id }),
					{
						headers: {
							'Content-Type': `application/json`,
						},
					},
				)
				.then(() => {})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	components: { updateStockModal, registMenuModal, detailMenuModal },
};
</script>

<style></style>
