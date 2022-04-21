/*
 * @Descripttion:
 * @version:
 * @Author: jiaolina
 * @Date: 2022-01-11 14:24:43
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-01-21 16:38:17
 */
import Home from "@/components/HelloWorld";
import User from "@/components/user";
import A from "@/components/user/A";
import B from "@/components/user/B";

const routes = [
  {
    name: "home",
    path: "/home",
    components: {
      default: Home,
      a: A,
      b: B, //跟roter-view标签的name属性值有关系，name为b的话则渲染B组件
    },
    props: (route) => {
      console.log("route", route);
      return { a: 1, b: 2, routeParams: { ...route.params } };
    },
  },
  {
    name: "uu",
    path: "/user",
    component: User,
    props: { a: 1, b: 2 },
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: "/user/a",
        // redirect: { name: "home" },//redirect:'/home',
        //redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象 }

        // alias: "/b", // 路由别名设置

        component: A,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: "/user/b",
        component: B,
      },
    ],
  },
];
export default routes;
