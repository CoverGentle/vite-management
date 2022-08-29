<template>
  <div class="table-contianer">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="username" label="账号" width="180" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {getUserList} from '../../untils/api/index'
const userData = reactive<
  {
    tableData: userInfoList[]
  }>({
  tableData: []
})
const {tableData} = toRefs(userData)
onMounted(()=>{
  getList()
})
// 请求接口 获取数据
const getList = async ()=>{
 const {userInfoList} = await getUserList()
 tableData.value  = userInfoList
}

// 表格操作
// 编辑
const handleEdit = (index: number, row: userInfoList) => {
  console.log(index, row)
}

// 删除
const handleDelete = (index: number, row: userInfoList) => {
  console.log(index, row)
}
</script>

<style lang='less' scoped> 
  
</style>