<template>
    <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm" @click='modifyContent()'>Modify</button>&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm" @click='deleteContent()'>Delete</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Back</button> 
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">종류</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext"  v-if="content.menu_category"  v-model="content.menu_category">
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">메뉴명</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" v-if="content.menu_name" v-model="content.menu_name">
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">가격</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" v-if="content.menu_price"  v-model="content.menu_price">
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">재고</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" v-if="content.menu_stock"  v-model="content.menu_stock">
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Last Modified</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" v-if="content.updatedAt"  v-bind:value="formatDate(content.updatedAt)">
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    name: 'storeDetail',
    data() {
        return {
            content: null
        }  
    },

    methods: {
        modifyContent(){
            this.$router.push({
                name: "storeEdit",
                query: {
                    id: this.content.id
                    , menu_category: this.content.menu_category
                    , menu_name: this.content.menu_name
                    , menu_price:this.content.menu_price 
                    , menu_stock:this.content.menu_stock 
                }
            });
        }, 
        //삭제하기
        deleteContent(){
            this.$axios.delete('/api 주소/' + this.$route.query.id)
            .then(res => {
                this.$router.push({
                    name: "store"
                });
            })
            .catch(function(error){
                console.log(error);
            });
        },
        toBack(){
             this.$router.push({
                name: "store"
            });
        },
        formatDate(str){
            return str.split('T')[0] + " " +str.split('T')[1];
        },
        //화면 진입시 데이터 조회 실행
        fetchData(){
            this.$axios.get('/api 주소/' + this.$route.query.id)
            .then(res => {
                console.log(res.data);
                //조회결과를 화면에 표시할 데이터영역에 담는다.
                this.content = res.data.data;
            })
            .catch(function(error){
                console.log(error);
            });
        }
    },
    created() {
        this.fetchData();
    } 
}
</script>