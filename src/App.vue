<template>
  <div id="app">
    <!-- <router-link to="/home" tag="span">主页</router-link>
    <router-link to="/user">用户</router-link> -->
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0 auto;
}
</style>
