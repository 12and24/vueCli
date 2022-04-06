<template>
  <main-tab></main-tab>
  <router-view />
</template>
<script>
import MainTab from "./components/mainTab.vue";
export default {
  name: "App",
  components: { MainTab },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
