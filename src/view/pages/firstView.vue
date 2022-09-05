<template>
  <div class="top-select">
    <el-select class="m-2" placeholder="Select">
      <el-option />
    </el-select>
  </div>
  <div class="contianer">
    <el-card shadow="always" class="box-card left">
      <!--  -->
    </el-card>
    <el-card shadow="always" class="box-card center">
    </el-card>
    <el-card shadow="always" class="box-card right">
    </el-card>
  </div>
  <div></div>
</template>

<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'

</script>

<style lang='less' scoped>
  .top-select{
    padding: 10px;
  }
.contianer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  height: 90%;

  .box-card {
    width: 15rem;
    height: 100%;
    border-radius: 10px;
  }

  .left {
    background: blue;
  }

  .center {
    background: green;
  }

  .right {
    background: red;
  }
}
</style>