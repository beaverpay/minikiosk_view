<template>

<div class="black-background">
    <div class="white-background">
        <div>{{this.menu.id}}</div>
        <div>{{this.menu.menu_store_id}}</div>
        <div>{{this.menu.menu_name}}</div>
        <div>{{this.menu.menu_price}}</div>
        <div>{{this.menu.menu_desc}}</div>
        <div>{{this.menu.menu_category}}</div>
        <div>{{this.menu.menu_stock}}</div>
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
    mounted(){
        getDetailMenu()
    },
    props:{
        
    },
    methods:{
        getDetailMenu(menuId){
			axios.get(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/details/${menuId}`)
				.then((response) => {
					console.log(response);
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
    margin-top: 20%;
    padding: 20px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}
</style>
