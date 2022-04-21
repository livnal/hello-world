<template>
  <div class="hello">
    <!-- $route.params:{{ $route.params }} -->
    <div>a:{{ a }},b:{{ b }}</div>
    <!-- <button class="user-a" @click="$router.push({ name: 'uu' })">a</button> -->
    <button class="user-a" @click="$router.push('/user/a')">a</button>
    <button class="user-b" @click="$router.push('/user/b')">b</button>
    <div class="view">view:<router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    a: Number,
    b: Number,
  },
  mounted() {
    // this.$route.params.id = 12;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
