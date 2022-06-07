<template>

<div class="black-background">
    <div class="white-background">
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">이름</span>
            <input type="text" class="form-control" placeholder="상품 이름" aria-label="stock" v-model="$store.state.Menu.menu_name">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">가격</span>
            <input type="text" class="form-control" placeholder="상품 가격" aria-label="stock" v-model="$store.state.Menu.menu_price">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">설명</span>
            <input type="text" class="form-control" placeholder="상품 설명" aria-label="stock" v-model="$store.state.Menu.menu_desc">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">재고</span>
            <input type="text" class="form-control" placeholder="상품 재고" aria-label="stock" v-model="$store.state.Menu.menu_stock">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="stock">카테고리</span>
            <input type="text" class="form-control dropdown-selected" placeholder="상품 카테고리" aria-label="Text input with dropdown button" v-model="$store.state.Menu.menu_category">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">상품 카테고리</button>
            <ul class="dropdown-menu dropdown-menu-end" id="drop">
                <li><a class="dropdown-item" href="#">커피</a></li>
                <li><a class="dropdown-item" href="#">디저트</a></li>
                <li><a class="dropdown-item" href="#">빵</a></li>
                <li><a class="dropdown-item" href="#">식사</a></li>
            </ul>
        </div>

        <button @click="registMenu" class="btn btn-primary">반영</button>
        <button @click="$store.commit('toggleRegistMenuModal')" class="btn btn-danger">닫기</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
    mounted(){
        $('.dropdown-item').click((e)=>{
            $('.dropdown-selected').val(e.target.text)
            this.$store.state.Menu.menu_category = e.target.text
        })
    },
    methods:{
        registMenu(){
            axios.post(`http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/${this.$store.state.storeId}`,
            JSON.stringify(
                {
                    menu_name:this.$store.state.Menu.menu_name,
                    menu_price:this.$store.state.Menu.menu_price,
                    menu_desc:this.$store.state.Menu.menu_desc,
                    menu_stock:this.$store.state.Menu.menu_stock,
                    menu_category:this.$store.state.Menu.menu_category
                }),
            {
                headers: {
                    Authorization: this.$store.state.token,
                    'Content-Type': `application/json`,
                },
            }).then(()=>{this.$store.commit('toggleRegistMenuModal')}).catch((error)=>{console.log(error);})
        },
    }
};
</script>

<style>

.black-background{
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: -20%;
    left: 0px;
    width: 100%;
    height: 150%;
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
