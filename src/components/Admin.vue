<template>
	<div class="row">
		<div class="col-6">
			<h1>메뉴관리</h1>
			<ul>
				<li v-for="(menu, index) in menuList" :key="index" class="d-flex justify-content-between">
					<div>{{ menu.menu_name }}</div>
					<div><button class="btn btn-primary">재고관리</button></div>
					<div><button class="btn btn-danger">삭제</button></div>
				</li>
			</ul>
		</div>
		<div class="col-6">
			<h1>주문관리</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Admin',
	data() {
		return { menuList: [] };
	},
	mounted() {
		this.getStoreMenu();
	},
	methods: {
		getStoreMenu() {
			this.axios
				.get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/2')
				.then((response) => {
					this.menuList = response.data.data.result;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style></style>
