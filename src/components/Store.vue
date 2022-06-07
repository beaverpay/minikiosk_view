<template>
    <div>
        <div align="right" style="margin:10px">
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model= "menu_name">       
<button type="button" class="btn btn-outline-info btn-sm" @click='nameSch()'>메뉴명 조회 </button>&nbsp;
<button type="button" class="btn btn-outline-info btn-sm" @click='categorySch()'>카테고리 조회 </button>&nbsp;
<!--<button type="button" class="btn btn-outline-info btn-sm" @click='writeContent(this.$route.query.id)'>주문</button>&nbsp; -->
        </div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">종류</th>
            <th scope="col">메뉴명</th>
            <th scope="col">메뉴설명</th>
            <th scope="col">가격</th>
            <th scope="col">재고</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in contents" v-bind:key="item.id" @click='writeContent($route.query.id, item.id)'>
                <th scope="row">{{item.id}}</th>
                <td >{{item.menu_category}}</td>
                <td>{{item.menu_name}}</td>
                <td>{{item.menu_desc}}</td>
                <td>{{item.menu_price}}</td>
                <td>{{item.menu_stock}}</td>
                <!-- <td>{{ formatDate(item.updatedAt)}}</td> -->
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Store',
    data() {
        return {
            menu_store_id : null,
            menu_name : null,
            contents: null
        }     
    },
    methods: {
/*
        toDetail(contentId){
            this.$router.push({
                //StoreDetail.vue 화면 이동
                name: "storeDetail",
                query: {id : contentId}
            });
        },
*/
        /** 
         * @desc write Menu,
         * @param menu_store_id
         * @param menu_id 
        */  
        writeContent(menu_store_id,menu_id){
            this.$router.push({
                //StoreEdit.vue 화면 이동
                name: "storeEdit",
                query: {id : menu_store_id, menu_id : menu_id}
            });
        },
        formatDate(str){
            return str.split('T')[0];
        },
        nameSch(){
            let schTxt = encodeURI(this.menu_name,"UTF-8");
            console.log('encoding');
            console.log(schTxt);
            //this.$axios.get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/'+this.menu_store_id)
            axios.get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/'+this.$route.query.id+'/name/'+schTxt)
            .then(res => {
                console.log('매장 sch 성공 로그');
                console.log(res);
                console.log(res.data.data);
                //조회결과를 화면에 표시할 데이터영역에 담는다.
                this.contents = res.data.data;
            })
            .catch(function(error){
                console.log('전체호출 에러 로그');
                console.log(error);
            });
        },
        categorySch(){
            let schTxt = encodeURI(this.menu_name,"UTF-8");
            console.log('encoding');
            console.log(schTxt);
            axios.get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/'+this.$route.query.id+'/category/'+schTxt)
            .then(res => {
                console.log('매장 sch 성공 로그');
                console.log(res);
                console.log(res.data.data);
                //조회결과를 화면에 표시할 데이터영역에 담는다.
                this.contents = res.data.data;
            })
            .catch(function(error){
                console.log('전체호출 에러 로그');
                console.log(error);
            });
        },
        //화면 진입시 데이터 조회 실행
        fetchData(){
            
            console.log('this.$route.query.id');
            console.log(this.$route.query.id);

            axios
                .get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/menu/'+ this.$route.query.id)
                .then(res => {
                    console.log('매장 전체호출 성공 로그');
                    console.log(res.data.data.result);
                    //조회결과를 화면에 표시할 데이터영역에 담는다.
                    this.contents = res.data.data.result;
                })
                .catch(function(error){
                    console.log('전체호출 에러 로그');
                    console.log(error);
                });
        }
    },
    created() {
        this.fetchData();
    }

}
</script>