<template>
  <div class="top-select">
    <el-select v-model="cityValue" class="m-2" @change="selectValue(cityValue)" placeholder="Select">
      <el-option v-for="item in cityList" :key="item.citynumber" :label="item.cityname" :value="item.citynumber" />
    </el-select>
  </div>
  <div class="contianer">
    <div v-for="item in weatherList" class="box-card">
        <!-- <p>{{item.notice}}</p> -->
        <p>{{item.ymd}} {{item.week}}</p>
        <p>{{item.high}}</p>
        <p>{{item.low}}</p>
        <p>{{item.type}}</p>
        <p>{{item.fl}}</p>
        <!-- <p>日出：{{item.sunrise}}</p>
        <p>日落：{{item.sunset}}</p> -->
        
    </div>
  </div>
  <div></div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { getCityeList, getWeather } from '../../untils/api/index'
const cityValue = ref('上海')
const cityInfo = reactive<{
  cityList: City[]
}>({
  cityList: []
})
const { cityList } = toRefs(cityInfo)
onMounted(() => {
  getCityList(),
    selectValue('101020100')
})
// 
const getCityList = () => {
  getCityeList().then(res => {
    console.log(res, 'getCityList');
    if (res.code === 2000) {
      cityList.value = res.data
    }
  })
}

// 获取城市天气信息
const weather = reactive<{
  weatherList: WeatherInfos[]
}>({
  weatherList: []
})

const { weatherList } = toRefs(weather)


// select的change方法
const selectValue = (val: string) => {
  getWeather({ cityNum: val }).then(res => {
    if (res.code === 2000) {
      weatherList.value = res.data
    }
  })


}
</script>

<style lang='less' scoped>
.top-select {
  padding: 10px;
}

.contianer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  height: 90%;

  .box-card {
    width: 20rem;
    height: 100%;
    border-radius: 10px;
  }
}
</style>