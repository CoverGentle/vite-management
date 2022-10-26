<template>
  <div class="header-container">
    <div class="header-left">
      <div class="icon" @click="handleIcon">
        <Expand v-if="isAll"  />
        <Fold v-else />
      </div>
    </div>
    <div class="header-right">
      <div class="change-language">
        <el-dropdown @command="handleCommand">
          <span class="language-box">
            <img :src="languageUrl" alt="" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh-cn">{{$t('language.zhcn')}}</el-dropdown-item>
              <el-dropdown-item command="en">{{$t('language.en')}}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="github-box" @click="jump">
        <img :src="githubUrl" alt="" />
        <p>GITHUB</p>
      </div>
      <div class="avater">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar size="small" :src="circleUrl" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="UserFilled">{{$t('button.userinfo')}}</el-dropdown-item>
              <el-dropdown-item :icon="Close" @click="removeUser">{{$t('button.logout')}}</el-dropdown-item>

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
import githubUrl from '@/assets/images/github.png'
import languageUrl from '@/assets/images/language.png'
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  UserFilled,
  Close,
  Fold,
  Expand
} from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
const emit = defineEmits<{
  (event: 'command', id: any): void
  (event: 'handleShowMore', id: any): void
}>()
const { t } = useI18n()
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})
const { circleUrl } = toRefs(state)
// 注销
const removeUser = () => {
  localStorage.removeItem('token')
  location.reload()
}

// 跳转
const jump = () => {
  window.open('https://github.com/CoverGentle/vite-management')
}

// 菜单栏伸缩
const isAll = ref(false)
const handleIcon = () => {
  isAll.value = !isAll.value
  
  emit("handleShowMore",isAll)
}

// 国际化
// const emit = defineEmits(['CommandClick'])

const handleCommand = (command: any) => {
  // ElMessage(`click on item ${command}`)
  emit("command", command)
}
</script>

<style lang='less' scoped>
.header-container {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #ccc;

  .header-left {
    .icon {
      width: 20px;
      height: 20px;
    }
  }

  .asideButton {
    // width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    padding: 0 24px;

    p {
      width: 100%;
    }
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;

    .change-language {
      .language-box {
        img {
          width: 20px;
          height: auto;
        }
      }
    }

    .github-box {
      width: 9rem;
      display: flex;
      justify-content: center;
      cursor: pointer;

      img {
        width: 25px;
        height: auto;
      }

      P {
        font-size: 14px;
        margin-left: 10px;
        line-height: 2;
        font-weight: 600;
      }
    }
  }
}
</style>