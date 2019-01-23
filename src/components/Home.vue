<template>
  <div id="home">
  	<!--父组件Home.vue接收到子组件Header.vue传递过来的titleChanged事件 , 		
  	       并触发了updateTitle函数 -->
    <app-header v-bind:mytitle="title" 
    	    v-on:titleChanged="updateTitle($event)">
    </app-header>
    <!--父组件Home.vue向子组件Users.vue传引用以myusers为标签 -->
    <users v-bind:myusers="users"></users>
    <!--父组件Home.vue向子组件Foot.vue传数值或字符串以mytitle为标签    -->
    <app-footer v-bind:mytitle="title"></app-footer>
    <!--注意app-header/users/app-footer这三个标签排列的先后顺序   -->
  </div>
</template>

<script>
	
import Users from './Users'  //引用组件 ,网页中间内容显示
import Header from './Header'  //引用组件 ,网页顶部内容显示
import Footer from './Footer'  //引用组件 ,网页底部内容显示

export default {
  name: 'bbb',
  data () {
    return {
      users: [
      //下面自定义的内容不使用了,使用互联网上http://jsonplaceholder.typicode.com/users这网页的数据
      //先到这网页http://jsonplaceholder.typicode.com/users是否有"name"和"email"这两个数据
             //{name: 'Ryu', speciality: 'Vue Components', show: false},
             //{name: 'Crystal', speciality: 'HTML Wizardry', show: false},
             //{name: 'Hitoshi', speciality: 'Click Events', show: false},
             //{name: 'Tango', speciality: 'Conditionals', show: false},
             //{name: 'Kami', speciality: 'Webpack', show: false},
             //{name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            title:"传递的是一个值(类型可以是数值字符串布尔量)"
    }
  },
  components:{//注册组件
  	"users":Users,
  	"app-header":Header,
  	"app-footer":Footer
  },
  methods: {//updateTitle函数理发了title:"传递的是一个值(类型可以是数值字符串布尔量)"里的内容
      //header.vue和footer.vue里的mytitle数据将将被"子向父传值"代替
      updateTitle: function(newTitle){
        this.title = newTitle;
      }
  },
  created(){ //生命周期中的钩子函数,请求这个互联网页http://jsonplaceholder.typicode.com/users
    //先到这网页http://jsonplaceholder.typicode.com/users是否有"name"和"email"这两个数据
    this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {//请求成功
          // console.log(data);
          this.users = data.body;
        })
  }  
}
</script>

<style scoped>
  /*因为使用了style scoped所以这样式不跨域,只能在本.vue文件中适用*/ 
  h1{
    color: purple;
  }
</style>
