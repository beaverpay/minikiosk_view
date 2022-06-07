<template>
	<div class="row">
		<div class="col-6">
			<h1>메뉴관리</h1>
			<ul>
				<li v-for="(menu, index) in menuList" :key="index" class="row">
					<div class="col-4">{{ menu.menu_name }}</div>
					<div class="col-4"><button class="btn btn-primary">재고관리</button></div>
					<div class="col-4"><button class="btn btn-danger" @click="deleteMenu(menu)">삭제</button></div>
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
		}
	},
};
</script>

<style></style>
