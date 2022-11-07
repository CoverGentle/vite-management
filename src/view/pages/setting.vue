<template>
  <div>
    <h1>设置</h1>
    <h1>{{x}}</h1>
    <h1>{{y}}</h1>
  </div>
</template>

<script setup lang='ts'>
import {reactive, ref, toRefs} from 'vue'
import useMouse from '../../hooks/useMouse';
const {x,y} = useMouse()

</script>

<style lang='less' scoped> 
  
</style>