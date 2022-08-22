<template>
  <div>
    <p>首页</p>
    <button @click="getMesssage">获取数据</button>
    <button @click="removeToken">注销</button>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {jwtGetMessage} from '../../untils/api/index'

const getMesssage = ()=>{
  jwtGetMessage().then(res=>{
    console.log(res);
    
  })
}

const removeToken = () =>{
  localStorage.removeItem('token')
  // location.reload()
}
</script>

<style lang='less' scoped>
  
</style>