<template>
  <div>
    <el-card shadow="hover" class="search-card">
      <div class="search-card-box">
        <el-input v-model="inputInfo" class="w-50 m-2" :placeholder="$t('button.input')" />
        <el-button type="primary" @click="searchCity" :icon="Search"> {{$t('button.search')}} </el-button>
      </div>
    </el-card>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" :label="$t('table.city')" width="180" />
      <el-table-column prop="dead" :label="$t('table.cumulativemotality')" width="180" />
      <el-table-column prop="nowConfirm" :label="$t('table.nowDefineite')" />
      <el-table-column prop="confirm" :label="$t('table.defineite')" />
    </el-table>
    <el-pagination @size-change="handleSizeChange" :hide-on-single-page="true" @current-change="handleCurrentChange"
      :current-page.sync="paginations.page_index" :page-sizes="paginations.page_sizes"
      :page-size="paginations.page_size" background :layout="paginations.layout" :total="paginations.listTatol" />
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { getEpidemicInfo } from '../../untils/api/index'
import {
  Search
} from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n";
onMounted(() => {
  getEpidemicInfos()
})


const { t } = useI18n();
const tableDatas = reactive<{
  tableData: {
    name: string, //姓名
    dead: string, //累计死亡
    nowConfirm: string //现有确诊
    confirm: string //累计确诊
  }[]
}>({
  tableData: []
})
// 所有数据
const showTableData = reactive<{
  allTableData: {
    name: string, //姓名
    dead: string, //累计死亡
    nowConfirm: string //现有确诊
    confirm: string //累计确诊
  }[]
}>({
  allTableData: []
})
let { tableData } = toRefs(tableDatas)
let { allTableData } = toRefs(showTableData)
const getEpidemicInfos = () => {
  getEpidemicInfo().then(res => {
    const tableinfo: { name: string; dead: string; nowConfirm: string; confirm: string; }[] = []
    let data = res.data.diseaseh5Shelf.areaTree[0].children
    data.map(item => {
      tableinfo.push({
        name: item.name,
        dead: item.total.dead,
        nowConfirm: item.today.confirm,
        confirm: item.total.confirm
      })
    })
    allTableData.value = tableinfo
    setPaginations()
  })
}

// 分页方法
let paginations = {
  page_index: 1,
  listTatol: 0,
  page_size: 10,
  page_sizes: [10, 20, 30, 40, 50],
  layout: "total, sizes, prev, pager, next, jumper", //翻页属性
}

// 分页初始化
const setPaginations = () => {
  paginations.listTatol = allTableData.value.length
  tableData.value = allTableData.value.filter((item, index) => {
    return index < paginations.page_size;
  })
}

const handleCurrentChange = (page: number) => {

  //获取当前页
  let index = paginations.page_size * (page - 1);
  //获取数据总数
  let nums = paginations.page_size * page;
  //容器
  let tables = [];
  for (let i = index; i < nums; i++) {
    if (allTableData.value[i]) {
      tables.push(allTableData.value[i]);
    }
    tableData.value = tables;
  }
  paginations.page_index = page

}

const handleSizeChange = (page_size: number) => {
  paginations.page_index = 1;
  paginations.page_size = page_size;
  tableData.value = allTableData.value.filter((item, index) => {
    return index < page_size;
  });

}


// 查询搜索
const inputInfo = ref('')
const searchCity = () => {
  console.log(inputInfo.value, 'inputInfo');

}

</script>

<style lang='less' scoped>
.el-table {
  margin-top: 1rem;
}

.el-pagination {
  justify-content: flex-end;
  margin-top: 10px;
}

.search-card {

  // width: 100%;
  // display: flex;
  .search-card-box {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;

    .el-input {
      width: 12rem;
      margin-right: 1rem;
    }
  }
}
</style>