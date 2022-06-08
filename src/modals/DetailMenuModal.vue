<template>

<div class="black-background">
    <div class="white-background">
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메뉴 id</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.id'
				readonly
			/>
		</div>
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메장 id</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.menu_store_id'
				readonly
			/>
		</div>
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메뉴 이름</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.menu_name'
				readonly
			/>
		</div>
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메뉴 가격</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.menu_price'
				readonly
			/>
		</div>
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메뉴 설명</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.menu_desc'
				readonly
			/>
		</div>
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메뉴 카테고리</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.menu_category'
				readonly
			/>
		</div>
        <div class="input-group mb-1 w-50 mx-auto">
			<span class="input-group-text">메뉴 재고</span>
			<input
				type="text"
				class="form-control"
				v-model='this.menu.menu_stock'
				readonly
			/>
		</div>

        <button @click="$store.commit('toggleDetailMenuModal')" class="btn btn-danger">닫기</button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			menu: {
				id: 0,
				menu_store_id: 0,
				menu_name: '',
				menu_price: 0,
				menu_desc: '',
				menu_category: '',
				menu_stock: 0,
			},
		};
	},
	created() {
		this.getDetailMenu(this.$store.state.menuId);
	},
	props: {},
	methods: {
		getDetailMenu(menuId) {
			console.log(this.$store.state.menuId);
			axios
				.get(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/details/${menuId}`)
				.then((response) => {
					this.menu = response.data.data[0];
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style>
.black-background {
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	padding: 20px;
	margin: 0px;
}

.white-background {
	background-color: white;
	margin-top: 100px;
	padding: 20px;
	margin-left: 10%;
	margin-right: 10%;
	border-radius: 10px;
}
</style>
