<template>
  <!-- <div>
    <p>首页</p>
    <button @click="getMesssage">获取数据</button>
    <button @click="removeToken">注销</button>
  </div> -->
  <!-- <div class="common-layout"> -->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  <!-- </div> -->
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { jwtGetMessage } from '../../untils/api/index'
import { ElMessage } from 'element-plus'

const getMesssage = () => {
  jwtGetMessage().then(res => {
    if (res.code === 200) {
      ElMessage({
        message: res.msg,
        type: 'success',
      })
    }else{
      ElMessage({
        message: res.msg,
        type: 'error',
      })
    }

  })
}

const removeToken = () => {
  localStorage.removeItem('token')
  // location.reload()
}
</script>

<style lang='less' scoped>
</style>