<template>
  <hello-vuex></hello-vuex>
  <button @click="add()">+</button>
  <button @click="sub()">-</button>
  <h2>{{ $store.state.counter }}</h2>
  <h2>{{ $store.getters.powerCounter }}</h2>
  <h2>{{ $store.getters.more20stu }}</h2>
  <h2>{{ $store.getters.more20stuLength }}</h2>
  <h2>{{ $store.getters.moreAge(20) }}</h2>
  <button @click="change(5)">+5</button>
  <button @click="pushStu()">增加学生</button>
  <button @click="updataInfo()">action</button>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("increment");
      console.log(this.$store.state.counter);
    },
    sub() {
      this.$store.commit("decrement");
      console.log(this.$store.state.counter);
    },
    change(count) {
      this.$store.commit("changCounter", count);
      console.log(this.$store.state.counter);
    },
    pushStu() {
      const stu = { name: "pingpingping", age: 42 };
      this.$store.commit("pushStu", stu);
      console.log(this.$store.state.student);
    },
    updataInfo() {
      this.$store.dispatch("aupdataInfo", "我是携带的信息").then((res) => {
        console.log("里面完成了提交");
      });
    },
  },
};
</script>