<template>
    <div style='margin:15%'>
        <h1>minikiosk</h1>
        <div style ="margin:10%">
            <div class="row">
                <input type="id" class="form-control w-75" id="exampleFormControlInput4" placeholder="매장 아이디를 입력하세요." v-model="menu_store_id" >
                <button type="button" class="btn btn-outline-info btn-sm w-25" @click='idStore()'> 메뉴 조회 </button>&nbsp;
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
        return {
            menu_store_id: null
        }  
    },
    methods: {
        //select 
        idStore(){
            this.$router.push({
                //StoreDetail.vue 화면 이동
                name: "store",
                query: {id : this.menu_store_id}
            });
        }
  }
}
</script>
<style>

</style>