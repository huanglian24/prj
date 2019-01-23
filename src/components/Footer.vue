<template>
  <footer>
     <!--父组件Home.vue向子组件Foot.vue传数值或字符串以mytitle为标签    -->
     <p>{{copyright}} {{mytitle}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
    props: {
      mytitle: { //父组件Home.vue向子组件Foot.vue传数值或字符串以mytitle为标签 
        type: String,
        required: true
      }
    },    
  data () {
    return {
      copyright:"桂ICP备 18012001号-1"
    }
  }
}
</script>


<style scoped>
   footer{
   	 background: #800080;/*网页底部背景色*/
   	 padding:6px;/*网页底部字体大小*/
   }
   p{
      color: #90EE90;/*网页底部字体颜色*/
      text-align:center;/*网页底部字体中心对齐*/ 
   }   
</style>