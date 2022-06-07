<template>
    <div style='margin:15%'>
    <h1>minikiosk</h1>
    <div style ="margin:10%">
    <div align="left">
        <label for="exampleFormControlInput4" class="form-label">매장 아이디를 입력하세요.</label>
        <input type="id" class="form-control" id="exampleFormControlInput4"  v-model="menu_store_id" >
        <div align="right">
        <button type="button" class="btn btn-outline-info btn-sm" @click='idStore()'> 메뉴 조회 </button>&nbsp;
        </div>
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