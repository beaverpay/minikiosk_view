<template>
	<div id="app">
		<!-- 간단한 로그인 로그아웃 기능 -->
		
		<div v-if="$store.state.token ? false : true" class="loginForm d-flex flex-column justify-content-center">
			<input class="w-75 mx-auto my-1" type="text" v-model="userStoreId" placeholder="매장ID" />
			<input class="w-75 mx-auto my-1" type="password" v-model="userPassword" placeholder="비밀번호" />
			<input
				@click="$store.dispatch('login', { userStoreId: this.userStoreId, userPassword: this.userPassword })"
				type="button"
				class="btn btn-primary w-75 mx-auto my-1"
				value="로그인"
			/>
		</div>
		<router-view></router-view>
		
</div>	
</template>
<script>

export default {
	name: 'App',
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
	},
	components: {
		
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.loginForm{
	border: 1px solid grey;
	border-radius: 10px;
	box-shadow: 5px 5px 5px 5px #aaa;
	width: 50%;
	height: 200px;
	margin: auto;
	margin-top: 5%
}
</style>
