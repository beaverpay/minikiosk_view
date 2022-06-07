<template>
	<h1>홈입니다.</h1>
	<Menu/>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
	name: 'Home',
	data(){
		return{}
	},
	components: {
		Menu	
	}
	// updated(){
	// 	this.$state.commit('storeToken','');
	// }
};
</script>

<style></style>
