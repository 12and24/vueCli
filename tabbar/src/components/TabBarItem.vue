<template>
  <div class="tabbaritem" @click="itemClick">
    <div>
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style>
.tabbaritem {
  flex: 1;
  text-align: center;
}
.tabbaritem img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
</style>