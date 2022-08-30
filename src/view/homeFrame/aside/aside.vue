<template>
  <div class="aside-contianer">
    <el-menu  default-active="/firstView" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="/firstView">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/userManagement">
      <el-icon><User /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <!-- <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item> -->
    <el-menu-item index="/setting">
      <el-icon>
        <setting />
      </el-icon>
      <span>系统设置</span>
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script setup lang='ts'>
import {
  Document,
  Menu as IconMenu,
  Location,
  User,
  Setting,
} from '@element-plus/icons-vue'
import { reactive, ref, toRefs } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang='less' scoped>
.aside-contianer{
  height: 100%;
}
</style>