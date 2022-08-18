<template>
  <div>
    {{msg}}
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {getData} from '../../untils/api/index'
onMounted(()=>{
  getEggData()
})
let msg:any = ref()
const getEggData = ()=>{
  getData().then(res=>{
    console.log(res);
    msg = res
  })
}

</script>

<style lang='less' scoped> 
  
</style>