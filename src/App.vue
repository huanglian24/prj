<!-- 1模板: html结构 -->
<template>
  <div id="app">
    <ul>
    	<!--这里用于导航,页面跳转,点Home则自动跳转到浏览器的根路径,点Hello则自动跳转到
    		浏览器的/helloworld路径
    	-->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">Hello</router-link></li>
    </ul>
    <router-view></router-view> <!--写入路由-->
  </div>
</template>

<!-- 2行为:处理逻辑 -->
<script>
export default {
  name: 'app',
  data(){
    return {
      
    }
  }
}
</script>

<!-- 3样式:解决样式 -->
<style scoped>
h1{
  color:purple;
}
</style>
