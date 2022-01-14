import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router, // 将VueRouter的实例对象配置到Vue实例化配置对象的router选项中
  render: (h) => h(App),
}).$mount("#app");
