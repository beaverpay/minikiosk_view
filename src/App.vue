<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
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
    margin-top: 100px;
    padding: 20px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}
</style>

