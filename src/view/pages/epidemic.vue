<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="城市" width="180" />
    <el-table-column prop="dead" label="累计死亡" width="180" />
    <el-table-column prop="nowConfirm" label="现有确诊" />
    <el-table-column prop="confirm" label="累计确诊" />
  </el-table>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref, toRefs} from 'vue'
import { getEpidemicInfo } from '../../untils/api/index'
onMounted(()=>{
  getEpidemicInfos()
})
const tableDatas = reactive<{
  tableData:{
    name:string, //姓名
    dead:string, //累计死亡
    nowConfirm:string //现有确诊
    confirm:string //累计确诊
  }[]
}>({
  tableData:[]
})
const {tableData} = toRefs(tableDatas)
const getEpidemicInfos = ()=>{
  getEpidemicInfo().then(res=>{
    const tableinfo: { name: string; dead: string; nowConfirm: string; confirm: string; }[]  = []
    let data = res.data.diseaseh5Shelf.areaTree[0].children
    console.log(data);
    
    data.map(item=>{
      tableinfo.push({
        name:item.name,
        dead:item.total.dead,
        nowConfirm:item.today.confirm,
        confirm:item.total.confirm
      })
    })
    tableData.value = tableinfo
    console.log(tableData,'tableData');
    
  })
}
</script>

<style lang='less' scoped> 
  
</style>