<template>
  <div>
  	<!--row mb-5 和col-4 是bootstrap的关键字  -->
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 (二级菜单)-->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      
      <!-- col-8 是bootstrap的关键字  -->
      <div class="col-8">
        <!-- 导航所对应的内容 (二级菜单所对应的内容)-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
