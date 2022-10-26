<template>
  <div>
    <!-- 组件库 -->
    <h3>markdown编辑器</h3>
    <p>{{text}}</p>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>

<script setup lang='ts'>
import {reactive, ref, toRefs} from 'vue'
let text = ref('')
</script>

<style lang='less' scoped> 
  
</style>