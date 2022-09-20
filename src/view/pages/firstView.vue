<template>
  <div class="contianer">
    <div class="contianer-top">
      <el-card shadow="always" v-for="item in 4" class="card-box">
        {{item}}
      </el-card>
    </div>
    <div class="contianer-down">
      <div class="contianer-down-left"> 
        <el-card shadow="always" class="card-box">
          <ColumnBar/>
        </el-card>
      </div>
      <div class="contianer-down-right">
        <el-card shadow="always" class="card-box">
          <Pie/>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import ColumnBar from '../../components/echarts/columnBar.vue'
import Pie from '../../components/echarts/pie.vue';
</script>

<style lang='less' scoped>
.contianer {
  width: 100%;
  height: 100%;

  .contianer-top {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card-box {
      width: 22%;
      height: 70%;
      padding: 5px;
      border-radius: 8px;
    }
  }

  .contianer-down {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contianer-down-left{
      width: 49%;
      height: 100%;
      display: block;
      .card-box{
        height: 100%;
      }
    }
    .contianer-down-right{
      width: 49%;
      height: 100%;
      display: block;
      .card-box{
        height: 100%;
      }
    }
  }
}
</style>