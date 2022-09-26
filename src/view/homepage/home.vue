<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-header>
        <Header @command="updateLanguage"></Header>
      </el-header>
      <el-container>
        <el-aside :width="isShow ? '50px' : '200px'">
          <Aside @changeWidth='handleChange'></Aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup lang='ts'>
import Aside from '../homeFrame/aside/aside.vue';
import Header from '../homeFrame/header/header.vue';
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import i18n from '../../i18n/index'
import { useI18n } from "vue-i18n";
import { ref,computed } from "vue";
const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const { locale: localeLanguage } = useI18n();
const isShow = ref(false)
// 国际化
const updateLanguage = (val:any)=>{
  if(val === 'zh-cn'){
    language.value ='zh-cn'
    localeLanguage.value = 'zh-cn'
  }else{
    language.value ='en'
    localeLanguage.value = 'en'
  }
}

const handleChange = (val:boolean)=>{
  isShow.value = val
}


</script>

<style lang='less' scoped>
  .el-container{
    height: 100%;
    .el-header{
      --el-header-padding: 0 10px;
    }
    .el-main{
      --el-main-padding: 10px;
    }
  }
</style>