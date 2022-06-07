<template>
	<div id="app">
		<!-- 간단한 로그인 로그아웃 기능 -->
		
		<form v-if="$store.state.token ? false : true">
			<input type="text" v-model="userStoreId" placeholder="매장ID" />
			<input type="password" v-model="userPassword" placeholder="비밀번호" />
			<input
				@click="$store.dispatch('login', { userStoreId: this.userStoreId, userPassword: this.userPassword })"
				type="button"
				class="btn btn-primary"
				value="로그인"
			/>
		</form>
		<form v-else>
			<div class="row p-0 m-0">
				<h1 class="col-6">storeId : {{$store.state.storeId}}</h1>
				<input @click="$store.dispatch('logout')" type="button" class="btn btn-primary col-6" value="로그아웃" />
			</div>
		</form>
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
}
</style>
