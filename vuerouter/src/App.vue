<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="'/user/' + id">User</router-link>|
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link
      :to="{
        path: '/file',
        query: {
          name: '刘慧平',
          sex: '女',
        },
      }"
      >Profile</router-link
    >
  </nav>
  <router-view />
</template>


<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      id: "刘慧平",
    };
  },
  methods: {
    homeClick() {
      this.$router.push("/HomeView");
    },
    aboutClick() {
      this.$router.push("/about");
    },
  },
};
</script>