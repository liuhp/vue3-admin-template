<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#304156"
    router
  >
    <menu-item :menuList="state.menus"></menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import MenuItem from "./menu-item.vue"
import { ref, reactive, onMounted } from "vue"
import { routes } from '@/router/index'

const  state =reactive({
  menus : [],
})
onMounted(() => {
  state.menus = handleRoutes(routes)
  console.log('menus', state.menus)
})

const setObjProperties = (target, source) => {
  Object.entries(source).forEach(([key, value]) => {
    if (value || typeof value !== 'undefined') {
      target[key] = value;
    }
  });
}

const handleRoutes = (routes) => {
  // 递归处理路由
  const routers = [];
  for (let i = 0; i < routes.length; i++) {
    const {
     redirect, path,
      meta, children = []
    } = routes[i];
    const { hidden } = meta
    if (hidden) break; // 隐藏的菜单
    // copy route
    const metaCopy = { ...meta };
    const router = { path, meta: metaCopy };
    // 复制属性
    setObjProperties(router, {
      redirect
    });
    // todo 权限判断
    
    // 子菜单
    const subChildren = children.filter((item) => !item.hidden);
    if (subChildren && subChildren.length) {
      if (!meta.showByOneChildren && subChildren.length === 1) {
        metaCopy.type = 'menu';
      } else {
        metaCopy.type = 'submenu';
      }
      router.children = handleRoutes(subChildren);
    } else {
      metaCopy.type = 'menu';
    }
    routers.push(router);
  }
  return routers;
}

//控制菜单展开和关闭
const isCollapse = ref(false)
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
ul{
  margin: 0;
}
::v-deep .el-sub-menu .el-sub-menu__title {
  color: #f4f4f5 !important;
}
/* .el-submenu .is-active .el-submenu__title {
border-bottom-color: #1890ff;
} */
::v-deep .el-menu .el-menu-item {
  color: #bfcbd9;
}
/* 菜单点中文字的颜色 */
::v-deep .el-menu-item.is-active {
  color: #409eff !important;
}
/* 当前打开菜单的所有子菜单颜色 */
::v-deep .is-opened .el-menu-item {
  background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */
::v-deep .el-menu-item:hover {
  background-color: #001528 !important;
}
</style>
