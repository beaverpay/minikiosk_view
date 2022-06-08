<template>
	<registManagerModal v-if="$store.state.showRegistManagerModal"></registManagerModal>
	<registStoreModal v-if="$store.state.showRegistStoreModal"></registStoreModal>
	<div class="row">
		<div class="col-6">
			<h1>매니저관리</h1>
			<button class="btn btn-success w-75" @click="$store.commit('toggleRegistManagerModal')">추가</button>
			<ul>
				<li class="row" v-for="(manager, index) in managerList" :key="index">
					<div class="col-4">{{ manager.user_store_id }}</div>
					<div class="col-4">{{ manager.user_role }}</div>
					<div class="col-4" v-if="manager.id !== 1">
						<button class="btn btn-danger" @click="deleteManager(manager.user_store_id)">삭제</button>
					</div>
				</li>
			</ul>
		</div>
		<div class="col-6">
			<h1>매장관리</h1>
			<button class="btn btn-success w-75" @click="$store.commit('toggleRegistStoreModal')">추가</button>
			<ul>
				<li v-for="(store,index) in storeList" :key="index" class="row">
					<div class="col-1">{{store.store_id}}</div>
					<div class="col-2">{{store.store_name}}</div>
					<div class="col-2">{{store.store_branch}}</div>
					<div class="col-4">{{store.store_tel}}</div>
					<div class="col-3">
						<button class="btn btn-danger" @click="deleteStore(store.store_id)">삭제</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import registManagerModal from '../modals/RegistManagerModal.vue';
import registStoreModal from '../modals/RegistStoreModal.vue';
export default {
	data() {
		return {
			managerList: [],
			storeList:[]
		};
	},
	mounted() {
		this.getManagerList();
		this.getStoreList();
	},

	watch:{
		managerList : function(){
			this.getManagerList();
		},
		storeList : function(){
			this.getStoreList();
		}
	},
	methods: {
		getManagerList() {
			axios
				.get(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/users`, {
					headers: {
						Authorization: this.$store.state.token,
						'Content-Type': `application/json`,
					},
				})
				.then((response) => {
					this.managerList = response.data.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		deleteManager(userStoreId) {
			axios
				.delete(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/users/${userStoreId}`, {
					headers: {
						Authorization: this.$store.state.token,
					},
				})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getStoreList(){
			axios.get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/store', {
					headers: {
						Authorization: this.$store.state.token,
						'Content-Type': `application/json`,
					},
				}).then((response)=>{this.storeList = response.data.data;}).catch((error)=>{console.log(error);})
		},
		deleteStore(storeId){
			axios
				.delete(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/store/${storeId}`, {
					headers: {
						Authorization: this.$store.state.token,
					},
				})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
	components: { registManagerModal, registStoreModal },
};
</script>

<style></style>
