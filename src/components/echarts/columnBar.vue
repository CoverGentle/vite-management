<template>
  <div id="main" style="height: 100%;width: 100%;">

  </div>
</template>

<script setup lang='ts'>
// import {reactive, ref, toRefs} from 'vue'
import * as echarts from 'echarts';
import { onMounted } from 'vue';

type EChartsOption = echarts.EChartsOption
onMounted(() => {
  initEchaarts()
})
const initEchaarts = () => {
  var chartDom = document.getElementById('main')!;
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  option && myChart.setOption(option);
}
</script>

<style lang='less' scoped>

</style>