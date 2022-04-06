<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
<style >
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px #f2f2f2;
}
</style>