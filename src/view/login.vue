<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-button :type="isBox ? 'primary' :''" text @click="loginBox">登录</el-button>
        <el-button :type="isBox ? '' :'primary'" text @click="registerBox">注册</el-button>
      </div>
    </template>
    <div class="login" v-if="isBox">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" label-position="left" class="loginForm">
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item class="btn-primary">
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
      </el-form>
    </div>
    <div class="register" v-else>
      <el-form :model="registerForm" status-icon :rules="rules" ref="registerFormRef" label-position="left" class="loginForm">
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username" autocomplete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.resPassword" autocomplete="off" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item class="btn-primary">
        <el-button type="primary" @click="acceptForm()">注册</el-button>
      </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import { reactive, toRefs, ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { jwtLogin,registerUser } from '../untils/api/index'
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  }
})

const registerForm = reactive({
  username:'',
  password:'',
  resPassword:''
})
const isBox = ref(true)
let router = useRouter()
// 校验规则
let { ruleForm } = toRefs(state)
// 获取el-form的对象
let ruleFormRef = ref()
let registerFormRef = ref()
// 自定义校验密码
// const validatePassword = (rule:unknown,value:any,callback:any) =>{
//   if(value == ""){
//     callback(new Error('请输入密码'))
//   }else if(value.length<6){
//     callback(new Error('密码不少于6位'))
//   }
// }
// rules校验规则
const rules = reactive({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
})


// 登录box
const loginBox = ()=>{
  isBox.value = true
}
// 注册box
const registerBox = ()=>{
  isBox.value = false
}
// 登录
const submitForm = async () => {
  ruleFormRef.value.validate().then(() => {
    jwtLogin({
      username: ruleForm.value.username,
      password: ruleForm.value.password
    })
      .then((res) => {
        console.log(res);
        
        if (res.code == 2000) {
          localStorage.setItem('token', res.token)
          router.push('/home')
          ElMessage.success(res.msg)
        } else {
          ElMessage.error(res.msg)
        }

      })
  }).catch(() => {
    console.log('catch');

  })
}

// 注册账号
const acceptForm = ()=>{
  registerFormRef.value.validate().then(()=>{
    if(registerForm.password !=registerForm.resPassword){
      ElMessage.error("确认密码和密码不相同")
    }else{
      registerUser({
      username: registerForm.username,
      password: registerForm.password
    }).then(res=>{
      if(res.code === 2000){
        isBox.value = true
        ElMessage.success(res.msg)
        router.push('/')
      }else{
        ElMessage.error(res.msg)
      }
    })
    }
    
  })
  
}
</script>

<style lang='less' scoped>
.box-card {
  width: 400px;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  .el-card__header {
    .card-header {
      text-align: center;
    }
  }

  .loginForm {
    .btn-primary {
      .deep(el-form-item__content){
        justify-content: center;

        .el-button {
          width: 100%
        }
      }
    }

    .card-header {
      text-align: center;
    }
  }
}
</style>