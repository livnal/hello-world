/*
 * @Descripttion:
 * @version:
 * @Author: jiaolina
 * @Date: 2022-01-11 14:24:43
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-01-12 10:11:46
 */
import Home from "@/components/HelloWorld";
import User from "@/components/User";

const routes = [
  {
    path: "/home/:id",
    component: Home,
    props: (route) => {
      console.log("route", route);
      return { a: 1, b: 2, routeParams: { ...route.params } };
    },
  },
  {
    path: "/user/:id",
    component: User,
    props: { a: 1, b: 2 },
  },
];
export default routes;
