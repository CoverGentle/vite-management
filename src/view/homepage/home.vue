<template>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Aside from '../homeFrame/aside/aside.vue';
import Header from '../homeFrame/header/header.vue';

</script>

<style lang='less' scoped>
</style>