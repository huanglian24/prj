<template>
  <div id="app">
    <div class="container">
      <!-- 在页面的顶部中:每一个组件模块(注册/登录/主页/菜单/管理)都要显示这个 -->
      <app-header></app-header>
    </div>
    
    <div class="container">
    	<!-- 在页面的中部:因组件模块不同而显示不同的内容 -->
      <router-view></router-view>
    </div>
    
    <!-- 在页面的底部中:每一个组件模块(注册/登录/主页/菜单/管理)都要显示这个 :备案号和版权-->
    <div class="container">
      <!-- 在页面的顶部中:每一个组件模块(注册/登录/主页/菜单/管理)都要显示这个 -->
      <app-footer></app-footer>
    </div>    
  </div>
   
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components:{
    "app-header":Header,
    "app-footer":Footer,
  }
}
</script>

<style>

</style>
