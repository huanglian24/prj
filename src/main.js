// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'  //引入路由模块
import VueResource from 'vue-resource'  //引入http模块
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import Users from './components/Users'

Vue.config.productionTip = false
Vue.use(VueRouter)   //使用路由模块这中间件
Vue.use(VueResource)   //使用http模块这中间件

// 配置路由,这里只例举两个路由,一般一个路由对应一个子组件,这子组件必须在main.js中import引入
const router = new VueRouter({
	routes:[
		{path:"/",component:Home},//浏览器上的根路径被访问则由子组件Home.vue煊染
		//浏览器上的/helloworld路径被访问则由子组件HelloWorld.vue煊染
		{path:"/helloworld",component:HelloWorld}
	],
	//要有这个否则防碍观察浏览器的路径
	mode:"history"
})

// 全局注册组件
// Vue.component("users",Users);

/* 模块或参数实例化 */
new Vue({
  router,
  el: '#app',
  template: '<App/>', //这个是根组件,首先运行App.vue
  components: { App }
})
