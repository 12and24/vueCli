<template>
  <h2>{{ $store.state.counter }}</h2>
</template>
<script>
export default {
  name: "HelloVuex",
  data() {
    return {
      message: "hello",
    };
  },
};
</script>