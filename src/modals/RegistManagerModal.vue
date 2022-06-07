<template>
	<div class="black-background">
		<div class="white-background">
			<div class="input-group mb-3">
				<span class="input-group-text">매장 아이디</span>
				<input
					type="text"
					class="form-control"
					placeholder="매장 아이디"
					v-model="$store.state.Manager.user_store_id"
				/>
			</div>
			<div class="input-group mb-3">
				<span class="input-group-text">비밀번호</span>
				<input
					type="password"
					class="form-control"
					placeholder="비밀번호"
					v-model="$store.state.Manager.user_password"
				/>
			</div>
			<button @click="registManager" class="btn btn-primary">등록</button>
			<button @click="$store.commit('toggleRegistManagerModal')" class="btn btn-danger">닫기</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	methods: {
		registManager() {
			axios
				.post(
					'http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/users',
					JSON.stringify({
						user_store_id: this.$store.state.Manager.user_store_id,
						user_password: this.$store.state.Manager.user_password,
					}),
					{
						headers: {
							Authorization: this.$store.state.token,
							'Content-Type': `application/json`,
						},
					},
				)
				.then(() => {
					this.$store.commit('toggleRegistManagerModal');
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
