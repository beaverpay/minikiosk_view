<template>
  <div id="app">
    <Header />
		<i class="bi bi-arrow-bar-down fs-1"></i>
		<i class="bi bi-arrow-bar-up fs-1"></i>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import $ from 'jquery';
export default {
    name: 'App',
    data() {
        return {
            userStoreId: '',
            userPassword: '',
            orderList: [],
        };
    },
    created: function () {
        // this.getList();
    },
    mounted(){
        $('.bi-arrow-bar-down').on('click',()=>{
            $('Header').slideDown()
            $('.bi-arrow-bar-down').css('display', 'none')
            $('.bi-arrow-bar-up').css('display', 'block')
        })

        $('.bi-arrow-bar-up').on('click',()=>{
            $('Header').slideUp()
            $('.bi-arrow-bar-down').css('display', 'block')
            $('.bi-arrow-bar-up').css('display', 'none')
        })
    },
    methods: {
        getList: function () {
            // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
            this.axios
                .get('http://ec2-3-36-49-133.ap-northeast-2.compute.amazonaws.com/order/orders')
                .then((response) => {
                    console.log('### response: ' + JSON.stringify(response));
                    this.OrderList = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
  components: {
    Header
  }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
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
    margin-top: 100px;
    padding: 20px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}

Header{
	display:none;
}

.bi{
  display: block;
}

.bi:hover{
	cursor: pointer;
	animation-name: shake;
	animation-duration: 1s;
}

.bi-arrow-bar-up{
	display: none;
}

@keyframes shake {
	0% { transform: rotate(0deg)}
	25% { transform: rotate(-8deg)}
	50% { transform: rotate(8deg)}
	75% { transform: rotate(-8deg)}
	100% { transform: rotate(0deg)}
} 
</style>
