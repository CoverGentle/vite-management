<template>
  <div class="header-container">
    <div class="logo-box">
      <h3>logo</h3>
    </div>
    <div class="header-right">
      <div class="github-box" @click="jump">
        <img :src="githubUrl" alt="">
        <p>GITHUB</p>
      </div>
      <div class="avater">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="small" :src="circleUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="UserFilled">个人信息</el-dropdown-item>
            <el-dropdown-item :icon="Close" @click="removeUser">注销</el-dropdown-item>
            
            <!-- <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
            <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
            <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    </div>
    
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import githubUrl from '../../../assets/images/github.png'
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  UserFilled,
  Close,
  Plus,
} from '@element-plus/icons-vue'
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})
const { circleUrl } = toRefs(state)

const removeUser = ()=>{
  localStorage.removeItem('token')
  location.reload()
}

const jump =()=>{
  window.open('https://github.com/CoverGentle/vite-management')
}
</script>

<style lang='less' scoped>
 .header-container {
   height: 59px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   border-bottom: 1px solid #ccc;
   .logo-box{
    width: var(--el-aside-width,180px);
    height: 59px;
    line-height: 100%;
    h3{
      height: 100%;
      line-height: 59px;
    }
   }
   .header-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    .github-box{
      width: 9rem;
      display: flex;
      justify-content: center;
      img{
        width: 25px;
        height: auto;
      }
      P{
        font-size: 14px;
        margin-left: 10px;
        line-height: 2;
        font-weight: 600;
      }
    }
   }
 }
</style>