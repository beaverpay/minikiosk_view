<template>

	<div class="row p-0 m-0">
		<div class="col-6">
			<div class="row">
				<h1 class="col-6">메뉴관리</h1>
				<button class="btn btn-success col-6">추가</button>
			</div>
			<ul>
				<li v-for="(menu, index) in menuList" :key="index" class="row">
					<div class="col-3">{{ menu.menu_name }}</div>
					<div class="col-2"><button class="btn btn-danger" @click="subStock(menu)">-</button></div>
					<div class="col-2" @click="$store.commit('toggleModal')">{{menu.menu_stock}}</div>
					<div class="col-2"><button class="btn btn-primary" @click="addStock(menu)">+</button></div>
					<div class="col-3"><button class="btn btn-danger" @click="deleteMenu(menu)">삭제</button></div>
				</li>
			</ul>
		</div>
		<div class="col-6">
			<h1>주문관리</h1>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Manager',
	data() {
		return { menuList: [] };
	},
	mounted() {
		this.getStoreMenu();
	},
	updated(){
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
		deleteMenu(menu){
			axios.delete(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/${menu.id}`,{
				headers: {
					Authorization: this.$store.state.token
				}
			}).then((response)=>{
				response.statusText === 'OK' ? this.getStoreMenu() : this.$router.push('/NotFound')
			}).catch((error)=>{console.log(error);})
		},
		addStock(menu){
			axios.put('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/stock/rel',
			JSON.stringify({menu_stock:1,id:menu.id}),
			{
				headers: {
					'Content-Type': `application/json`,
				},
			}).then((response)=>{console.log(response);}).catch((error)=>{console.log(error);})
		},
		subStock(menu){
			axios.put('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/stock/rel',
			JSON.stringify({menu_stock:-1,id:menu.id}),
			{
				headers: {
					'Content-Type': `application/json`,
				},
			}).then((response)=>{console.log(response);}).catch((error)=>{console.log(error);})
		}
			
	},
	
};
</script>

<style></style>
