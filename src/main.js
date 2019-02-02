import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';

Vue.use(VueRouter)

const routes = [
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin},
  /*下面的"联系我们"菜单项的下面还有下一级菜单*/
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About, children:[
    /*点击"关于我们"菜单项时默认进入"联系我们",进入"联系我们"时默认显示"联系人" */
    {path:'/about/contact',name:"contactLink",redirect:'/personname',component:Contact,children:[
      {path:'/phone',name:"phoneNumber",component:Phone},
      {path:'/personname',name:"personName",component:PersonName}
    ]},
    {path:'/history',name:"historyLink",component:History},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
  ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'}
]

const router = new VueRouter({
  routes,
  mode:'history'  /* 为了在路由中不出现#号*/
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
