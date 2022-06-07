<template>

<div class="black-background">
    <div class="white-background">
        <div>메뉴 id : {{this.menu.id}}</div>
        <div>매장 id : {{this.menu.menu_store_id}}</div>
        <div>메뉴 이름 : {{this.menu.menu_name}}</div>
        <div>메뉴 가격 : {{this.menu.menu_price}}</div>
        <div>메뉴 설명 : {{this.menu.menu_desc}}</div>
        <div>메뉴 카테고리 : {{this.menu.menu_category}}</div>
        <div>메뉴 재고 : {{this.menu.menu_stock}}</div>
        <button @click="$store.commit('toggleDetailMenuModal')" class="btn btn-danger">닫기</button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            menu : {
                id:0,
                menu_store_id:0,
                menu_name:'',
                menu_price:0,
                menu_desc:'',
                menu_category:'',
                menu_stock:0
            }
        }
    },
    created(){
        this.getDetailMenu(this.$store.state.menuId)
    },
    props:{
        id:Number
    },
    methods:{
        getDetailMenu(menuId){
			axios.get(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/details/${menuId}`)
				.then((response) => {
					this.menu = response.data.data[0];
				})
				.catch((error) => {
					console.log(error);
				});
		},
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
