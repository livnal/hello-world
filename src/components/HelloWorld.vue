<template>
  <div class="hello">
    <!-- {{ $route.params }} -->
    <div>a:{{ a }},b:{{ b }}</div>
    <div>routeParams:{{ routeParams }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    a: Number,
    b: Number,
    routeParams: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
