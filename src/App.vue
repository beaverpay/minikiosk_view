<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'OrderList',
	data: function () {
		return {
			orderList: [],
		};
	},
	created: function () {
		this.getList();
	},
	methods: {
		getList: function () {
			// axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
			axios
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
