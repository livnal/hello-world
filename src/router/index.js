/*
 * @Descripttion:
 * @version:
 * @Author: jiaolina
 * @Date: 2022-01-11 14:05:56
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-01-11 14:30:07
 */
import Vue from "vue"; // 引入Vue
import VueRouter from "vue-router"; // 引入VueRouter
import staticRoutes from "./static-routes";

//Vue支持VueRouter
Vue.use(VueRouter);

let router = new VueRouter({
  routes: staticRoutes,
}); // 初始化VueRouter

export default router;
