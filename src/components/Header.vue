<template>
	<header>
		<h1><a href="/" class="logo"><img alt="Vue logo" src="../assets/logo.png" width="65"></a></h1>
		<div class="menuWrap">
			<ul class="menu">
				<li v-if="$store.state.token ? false : true"><a href="/login">로그인</a></li>
				<li v-else>
					<a class="me-3" href="/admin" v-if="$store.state.storeId === 1">관리자페이지</a>
					<a class="me-3" href="/manager" v-else>매니저페이지</a>
					<a href="#" @click="$store.dispatch('logout')">로그아웃</a>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; background-color:rgba(87, 142, 150, 0.6)}
header h1{position:absolute; top:30px; left:40px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:39px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:rgb(38, 76, 84); font-weight:bolder; font-size: 17px;}

</style>