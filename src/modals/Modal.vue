<template>

<div class="black-background">
    <div class="white-background">
        <h1>모달입니다.</h1>
        <button @click="$store.commit('toggleModal')" class="btn btn-danger">닫기</button>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>

.black-background{
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 0px;
}

.white-background{
    background-color: white;
    margin-top: 20%;
    padding: 20px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}
</style>
