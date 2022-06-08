<template>

<div class="black-background">
    <div class="white-background">
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">가격</span>
            <input type="text" class="form-control" placeholder="stock" aria-label="stock" v-model="$store.state.price">
        </div>
        <button @click="updatePrice" class="btn btn-primary">반영</button>
        <button @click="$store.commit('toggleUpdatePriceModal')" class="btn btn-danger">닫기</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        updatePrice(){
            console.log(this.$store.state.price,this.$store.state.menuId);
            axios.put(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/${this.$store.state.storeId}/price`,
            JSON.stringify({
                    id:this.$store.state.menuId,
                    menu_price:this.$store.state.price,
                    menu_store_id:this.$store.state.storeId
                }),
            {
                headers: {
                    Authorization: this.$store.state.token,
                    'Content-Type': `application/json`,
                },
            }).then(()=>{this.$store.commit('toggleUpdatePriceModal')}).catch((error)=>{alert(error.response.data.message);})
        }
    }
};
</script>

<style>
.black-background {
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	padding: 20px;
	margin: 0px;
}

.white-background {
	background-color: white;
	margin-top: 100px;
	padding: 20px;
	margin-left: 10%;
	margin-right: 10%;
	border-radius: 10px;
}
</style>
