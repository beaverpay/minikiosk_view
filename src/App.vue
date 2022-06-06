<template>
	<div id="app">
		<form>
			<input type="text" v-model="userStoreId" placeholder="매장ID" />
			<input type="password" v-model="userPassword" placeholder="비밀번호" />
			<input @click="login" type="button" class="btn btn-primary" value="로그인" />
		</form>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'OrderList',
	data() {
		return {
			userStoreId: '',
			userPassword: '',
			orderList: [],
		};
	},
	created: function () {
		// this.getList();
	},
	methods: {
		getList: function () {
			// axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
			this.axios
				.get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/order/orders')
				.then((response) => {
					console.log('### response: ' + JSON.stringify(response));
					this.OrderList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		login() {
			this.axios
				.post(
					'http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/auth',
					JSON.stringify({
						user_store_id: Number(this.userStoreId),
						user_password: this.userPassword,
					}),
					{
						headers: {
							'Content-Type': `application/json`,
						},
					},
				)
				.then((response) => {
					console.log(response);
					console.log(response.data.data.accessToken);
					console.log(response.status);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	components: {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
