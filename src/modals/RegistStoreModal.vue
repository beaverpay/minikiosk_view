<template>
	<div class="black-background">
		<div class="white-background">
			<button @click="registMenu" class="btn btn-primary">반영</button>
			<button @click="$store.commit('toggleRegistStoreModal')" class="btn btn-danger">닫기</button>
		</div>
	</div>
</template>

<script>
export default {};
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
