<template>
  <div class="users">
  	<h1>Users.vue is ok!!</h1> 
    <ul>
    	  <!--
    	       父组件Home.vue从这网页http://jsonplaceholder.typicode.com/users拿到
    	  "name"和  "email"这两个数据	,以myusers为标签向子组件User.vue传引用,子组件接收到
    	       这两个数据后煊染到网页
    	  -->
        <li v-for="user in myusers"">
          <h2>{{ user.name }}</h2>
          <h3>{{ user.email }}</h3>
        </li>
    </ul>
    <!--摁一下"删除一个用户"按钮,则调用deleteUser函数-->
    <button v-on:click="deleteUser">删除一个用户</button>
    
  </div>
</template>

<script>
export default {
  name: 'users',
  //props:["myusers"],
  /*子组件Users.vue接收到以myusers为标签 的父组件App.vue的引用*/
  props: {
      myusers: {
        type: Array,
        required: true
      }
  }, 
  data () {
    return {

    }
  },
  methods: {
      deleteUser: function(){
        this.myusers.pop();//出栈,相当于删除
      }
   }  
}
</script>


<style scoped>
  .users{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
  }
  ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
  }
  li{
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
  }
</style>
