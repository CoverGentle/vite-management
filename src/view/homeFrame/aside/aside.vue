<template>
  <div class="aside-contianer">
    <div class="asideButton" @click="toggleCollapse">
      <p>|||</p>
    </div>
    <el-menu :collapse="isCollapse" default-active="/firstView" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="/firstView">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>{{ $t('menus.home') }}</span>
    </el-menu-item>
    <el-menu-item index="/userManagement">
      <el-icon><User /></el-icon>
      <span>{{ $t('menus.user') }}</span>
    </el-menu-item>
    <!-- <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item> -->
    <el-menu-item index="/setting">
      <el-icon>
        <setting />
      </el-icon>
      <span>{{$t('menus.setting')}}</span>
    </el-menu-item>
    <el-menu-item index="/weather">
      <el-icon>
        <MostlyCloudy />
      </el-icon>
      <span>{{$t('menus.weather')}}</span>
    </el-menu-item>
    <el-menu-item index="/epidemic">
      <el-icon>
        <MapLocation />
      </el-icon>
      <span>{{$t('menus.epidemic')}}</span>
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script setup lang='ts'>
import {
  Document,
  Menu as IconMenu,
  Location,
  MapLocation,
  MostlyCloudy,
  User,
  Setting,
} from '@element-plus/icons-vue'
import { reactive, ref, toRefs } from 'vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isCollapse = ref(false)
const emit =defineEmits<{  
  (event: 'changeWidth', id: boolean): void
 }>()
const toggleCollapse = ()=>{
  isCollapse.value = !isCollapse.value
  emit('changeWidth',isCollapse.value)
}
</script>

<style lang='less' scoped>
.aside-contianer{
  height: 100%;
  .asideButton{
    // width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    padding: 0 24px;
    p{
      width: 100%;
    }
  }
}
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
// }
</style>