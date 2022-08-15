import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/layout/Index.vue"
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    meta: {
      title: "首页",
      icon: "House",
      hidden: false,
      roles: [],
    },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: {
          title: "首页",
          icon: "House",
          hidden: true,
          roles: [],
        },
      },
    ],
  },
  
  {
    path: "/system",
    component: Layout,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Medal",
      hidden: false,
      roles: [],
    },
    children: [
      {
        path: "/system/department",
        component: () => import("@/views/system/department/index.vue"),
        name: "department",
        meta: {
          title: "机构管理",
          icon: "MostlyCloudy",
          hidden: false,
          roles: [],
        },
      },
      {
        path: "/userList",
        component: () => import("@/views/system/user/index.vue"),
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "MostlyCloudy",
          roles: ["sys:user"],
          hidden: false,
        },
      },
      {
        path: "/roleList",
        component: () => import("@/views/system/role/index.vue"),
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "MostlyCloudy",
          roles: ["sys:role"],
          hidden: false,
        },
      },
      {
        path: "/menuList",
        component: () => import("@/views/system/menu/index.vue"),
        name: "menuList",
        meta: {
          title: "权限管理",
          icon: "MostlyCloudy",
          roles: ["sys:menu"],
          hidden: false,
        },
      },
    ],
  },
  {
    path: "/goods",
    component: Layout,
    name: "goods",
    meta: {
      title: "商品管理",
      icon: "MostlyCloudy",
      roles: ["sys:goods"],
      hidden: false,
    },
    children: [
      {
        path: "/goodCategory",
        component: () =>
          import("@/views/goods/goodsCategory/index.vue"),
        name: "goodCategory",
        meta: {
          title: "商品分类",
          icon: "MostlyCloudy",
          roles: ["sys:goodsCategory"],
          hidden: false,
        },
      },
    ],
  },
  {
    path: "/systenConfig",
    component: Layout,
    name: "systenConfig",
    meta: {
      title: "系统工具",
      icon: "MostlyCloudy",
      roles: ["sys:systenConfig"],
      hidden: false,
    },
    children: [
      {
        path: "/document",
        component: () => import("@/views/system/config/index.vue"),
        name: "http://42.193.158.170:8089/swagger-ui/index.html",
        meta: {
          title: "接口文档",
          icon: "MostlyCloudy",
          roles: ["sys:document"],
          hidden: false,
        },
      },
    ],
  },
]
//创建
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
