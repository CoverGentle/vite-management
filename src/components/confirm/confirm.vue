<template>
  <el-dialog v-model="isShow" title="警告" width="30%">
    <span>是否删除</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// 采用ts专有声明，有默认值
interface Props {
  isShow?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
})

const cancelClick = () => {
  emit('cancelClick', false)
}

const confirmClick = () => {
  emit('confirmClick', false)
}

const emit = defineEmits<{
  (event: 'cancelClick', id: boolean): void
  (event: 'confirmClick', id: boolean): void
}>()



</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>