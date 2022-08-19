<template>
  <el-card class="box-card">
    <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleFormRef"
    label-width="60px"
    label-position="left"
    class="loginForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input
        type="text"
        v-model="ruleForm.username"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()" >提交</el-button>
    </el-form-item>
  </el-form>
  </el-card>
</template>

<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import { reactive, toRefs, ref} from 'vue';
import { useRouter } from 'vue-router';
import {jwtLogin }from '../untils/api/index'
  const state = reactive({
    ruleForm:{
      username:'admin',
      password:'123456'
    }
  })
  let router = useRouter()
  // 校验规则
  let {ruleForm} = toRefs(state)
  // 获取el-form的对象
  let ruleFormRef = ref()
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
    username:[{required:true,message:'用户名不能为空',trigger:'blur'}],
    password:[{required:true,message:'密码不能为空',trigger:'blur'}]
  })
  // 方法
  const submitForm = async ()=>{
    ruleFormRef.value.validate().then(()=>{
      jwtLogin({
        username:ruleForm.value.username,
        password:ruleForm.value.password
      })
      .then((res)=>{
        if(res.code == 200){
          localStorage.setItem('token',res.token)
          router.push('/home')
        }else{
          console.log(res.msg);
          ElMessage.error(res.msg)
        }
        // localStorage.setItem()
        // console.log(res);
        
      })
      
      // console.log('then');
      
    }).catch(()=>{
      console.log('catch');
      
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
 }
</style>