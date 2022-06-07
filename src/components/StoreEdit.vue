<template>
    <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm" @click='confirmWrite()'>주문하기</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='cancelWrite()' >취소</button> 
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">메뉴번호</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" :disabled="this.editMode" v-model="menu_id" >
        </div>
        <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">수량</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model= "order_amount">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'storeEdit',
    data() {
        return {
            menu_id: null,
            order_amount: null
        }  
    },
    methods: {
        //취소버튼
        cancelWrite(){
             this.$router.push({
                name: "store"
            });
        },
        //데이터 저장
        confirmWrite(){
                //전송 데이터 셋팅
                axios.post('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/order', {
                    //메뉴번호
                    menu_id: this.menu_id,
                    //수량 
                    order_amount: this.order_amount
                }).then(res => {
                    console.log('주문 성공 로그');
                    console.log(res);
                    this.$router.push({
                        name: "store",
                        query: {id: this.$route.query.id}
                    });
                }).catch(function(error){
                    console.log('주문 실패 로그');
                    console.log(error);
                });
            
        }

    }, 
    created(){
        this.menu_id = this.$route.query.menu_id;
    }
}
</script>