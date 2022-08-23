<template>
  <el-row class="tac">
    <el-col :span="24">
    <!-- @open="handleOpen" @close="handleClose" router -->
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="/mainhome">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>elementUI</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/elCalendar">EL日历</el-menu-item>
            <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>vantUI</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="/calendar">日历</el-menu-item>
            <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">系统维护</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/setting">系统设置</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">造轮子</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/dome1">轮子1</el-menu-item>
            <el-menu-item index="/dome3">轮子2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="vantUI">
        <i class="el-icon-setting"></i>
        <span slot="title">vantUI</span>
        <el-menu-item-group>
          <template slot="title" index="/calendar">日历</template>
        </el-menu-item-group>
      </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang='ts'>

</script>

<style>
</style>