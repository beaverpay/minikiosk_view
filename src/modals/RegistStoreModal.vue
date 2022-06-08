<template>
	<div class="black-background">
		<div class="white-background">
			<div class="input-group mb-3">
				<span class="input-group-text">매장 이름</span>
				<input
					type="text"
					class="form-control"
					placeholder="매장 이름"
					v-model="$store.state.Store.store_name"
				/>
			</div>
			<div class="input-group mb-3">
				<span class="input-group-text">매장 지점</span>
				<input
					type="text"
					class="form-control"
					placeholder="매장 지점"
					v-model="$store.state.Store.store_branch"
				/>
			</div>
			<div class="input-group mb-3">
				<span class="input-group-text">매장 전화번호</span>
				<input
					type="text"
					class="form-control"
					placeholder="매장 전화번호"
					v-model="$store.state.Store.store_tel"
				/>
			</div>
			<button @click="registStore" class="btn btn-primary">반영</button>
			<button @click="$store.commit('toggleRegistStoreModal')" class="btn btn-danger">닫기</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	methods:{
		registStore(){
			axios.post(
					'http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/store',
					JSON.stringify({
						store_name: this.$store.state.Store.store_name,
						store_branch: this.$store.state.Store.store_branch,
						store_tel:this.$store.state.Store.store_tel,
					}),
					{
						headers: {
							Authorization: this.$store.state.token,
							'Content-Type': `application/json`,
						},
					},
				).then((response)=>{
					response.statusText === 'Created' ? this.$store.commit('toggleRegistStoreModal') : null;
				}).catch((error)=>{console.log(error);})
		}
	}
};
</script>

<style>
.black-background {
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: -20%;
	left: 0px;
	width: 100%;
	height: 150%;
	padding: 20px;
	margin: 0px;
}

.white-background {
	background-color: white;
	margin-top: 20%;
	padding: 20px;
	margin-left: 10%;
	margin-right: 10%;
	border-radius: 10px;
}
</style>
