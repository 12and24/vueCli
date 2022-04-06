<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="../assets/img/shouye.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/shouye_1.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="../assets/img/fenlei.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/fenlei-1.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="../assets/img/gouwuche.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/gouwuche_1.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon
        ><img src="../assets/img/mine.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/mine_1.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem";
export default {
  name: "mianTab",
  components: { TabBar, TabBarItem },
};
</script>
