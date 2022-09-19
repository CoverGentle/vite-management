<template>
  <div class="top-select">
    <el-select v-model="cityValue" class="m-2" @change="selectValue(cityValue)" placeholder="Select">
      <el-option 
      v-for="item in cityList" 
      :key="item.citynumber"
      :label="item.cityname"
      :value="item.citynumber"
      
      />
    </el-select>
  </div>
  <div class="contianer">
    <el-card shadow="always" class="box-card left">
      <!--  -->
    </el-card>
    <el-card shadow="always" class="box-card center">
    </el-card>
    <el-card shadow="always" class="box-card right">
    </el-card>
  </div>
  <div></div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import {getCityeList,getWeather} from '../../untils/api/index'
const cityValue = ref('上海')
const cityInfo = reactive<{
  cityList:City[]
}>({
  cityList:[]
})
const {cityList} = toRefs(cityInfo)
onMounted(()=>{
  getCityList(),
  selectValue('101020100')
})
// 
const getCityList = ()=>{
  getCityeList().then(res=>{
    console.log(res,'getCityList');
    if(res.code === 2000){
      cityList.value = res.data
    }
  })
}

// 获取城市天气信息
const data = reactive<{
  weatherList:WeatherInfos[]
}>({
  weatherList:[]
})
const weatherList = toRefs(data)


// select的change方法
const selectValue = (val:string)=>{
  console.log(val);
  getWeather({
    cityNum:val
  }).then(res=>{
    // let c = weatherList
    // weatherList = res.data.weatherInfo
    console.log(res.data.weatherInfo,'selectValue');
    
  })

}
</script>

<style lang='less' scoped>
  .top-select{
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
    width: 15rem;
    height: 100%;
    border-radius: 10px;
  }

  .left {
    background: blue;
  }

  .center {
    background: green;
  }

  .right {
    background: red;
  }
}
</style>