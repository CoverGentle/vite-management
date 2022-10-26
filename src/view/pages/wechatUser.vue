<template>
  <div>
    微信用户
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="nickname" label="昵称" width="180" />
      <el-table-column label="性别" width="220">
        <template #default="scope">
          <span>{{ scope.row.sex == "0" ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { getwxUserListInfo } from '../../untils/api/index'

onMounted(() => {
  getUserListInfo()
})

const tableDatainfo = reactive<{
  tableData: wxUser[]
}>(
  {
    tableData: []
  }
)
const { tableData } = toRefs(tableDatainfo)
const getUserListInfo = async () => {
  const { data } = await getwxUserListInfo()
  console.log(data, 'wxUser');
  tableData.value = data


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