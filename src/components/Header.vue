<template>
  <header v-on:click="changeTitle"> <!--这里显示的数据被点击时调用changeTitle函数-->                                    
     <!--父组件Home.vue向子组件Header.vue传数值或字符串以mytitle为标签  -->
     <h1>{{title1}} {{mytitle}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
    props: {
      mytitle: { //父组件Home.vue向子组件Header.vue传数值或字符串以mytitle为标签 
        type: String,
        required: true
      }
    },  
  data () {
    return {
      title1:"Header.vue网页顶部组件演示"
    }
  },
  methods:{
  	changeTitle:function(){
  		//注册一个事件,事件名是titleChanged:事件被被触发后,所传的数据是"子向父传值"
  		this.$emit("titleChanged","子向父传值")
  	}
  }
}
</script>


<style scoped>
   header{
   	 background: lightgreen;/*网页顶部背景色*/
   	 padding:10px;/*网页顶部字体大小*/
   }
   h1{
      color:#222;/*网页顶部字体颜色*/
      text-align:center;/*网页顶部字体中心对齐*/
   }   
</style>
