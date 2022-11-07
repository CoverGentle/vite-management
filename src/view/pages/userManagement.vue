<template>
  <div class="table-contianer">
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="50" />
        <el-table-column prop="username" label="账号" width="150" />
        <el-table-column prop="createdAt" label="创建时间" width="220" />
        <el-table-column prop="updatedAt" label="更新时间" width="220" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <Comfirm :isShow='isShow' @cancelClick="handleCancel" @confirmClick="handleConfirm" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { inject, onMounted, reactive, ref, toRefs } from 'vue'
import { getUserList, deleteUser } from '../../untils/api/index'
import Comfirm from '../../components/confirm/confirm.vue'
import { ElMessage, ElTable, ElTableColumn, ElButton } from 'element-plus';
const userData = reactive<
  {
    tableData: userInfoList[]
  }>({
    tableData: []
  })
const { tableData } = toRefs(userData)
onMounted(() => {
  getList()
})
// 请求接口 获取数据
const getList = async () => {
  const { userInfoList } = await getUserList()
  tableData.value = userInfoList
}

// 表格操作
// 编辑
const handleEdit = (index: number, row: userInfoList) => {
  console.log(index, row)
}

// 删除
const isShow = ref(false)
const userId = ref(0)

const handleDelete = (index: number, row: userInfoList) => {
  isShow.value = true
  console.log(row.id, 'row.id');
  userId.value = row.id,

    console.log(index, row)
}

// 对话框
const handleCancel = () => {
  isShow.value = false
}

// 确认删除
const reload = inject('reload')
const handleConfirm = async () => {
  const { code, msg } = await deleteUser({ id: userId.value })
  if (code === 2000) {
    isShow.value = false
    ElMessage({
      message: msg,
      type: 'success',
    })
    reload()
    // setTimeout(() => {
      
    // }, 300);
  }

}
</script>

<style lang='less' scoped>

</style>