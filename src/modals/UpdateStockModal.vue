<template>

<div class="black-background">
    <div class="white-background">
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">수량</span>
            <input type="text" class="form-control" placeholder="stock" aria-label="stock" v-model="$store.state.stock">
        </div>
        <button @click="updateStock" class="btn btn-primary">반영</button>
        <button @click="$store.commit('toggleUpdateStockModal')" class="btn btn-danger">닫기</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        updateStock(){
            axios.put('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/stock/abs',
            JSON.stringify({menu_stock:this.$store.state.stock,id:this.$store.state.menuId}),
            {
                headers: {
                    'Content-Type': `application/json`,
                },
            }).then(()=>{this.$store.commit('toggleUpdateStockModal')}).catch((error)=>{console.log(error);})
        }
    }
};
</script>

<style>

.black-background{
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 0px;
}

.white-background{
    background-color: white;
    padding: 20px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}
</style>
