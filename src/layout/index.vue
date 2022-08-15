<template>
  <el-container class="layout">
    <el-aside class="asside" >
      <sidebar></sidebar>
    </el-aside>
    <el-container class="layout">
      <el-header class="header">
        <my-header></my-header>
      </el-header>
      <el-main class="main">
        <div class="main-content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import MyHeader from './header/index.vue'
import Sidebar from './sidebar/index.vue'
</script>
<style lang="scss">
.layout {
  height: 100%;
  .asside {
    width: 200px;
    color: #fff;
    background-color: rgb(48, 65, 86);
    overflow-x: hidden;
  }
  .header {
    color: #fff;
    background-color: #212938;
  }
  .main {
    background-color: #fff;
  }
}
</style>
