<template>
  <!-- 登录界面 -->
  <div class="login-container">
    <!-- 登录背景 -->
    <div class="login-left">
        <img src="../assets/imgs/login_img.png" alt="背景图" />
    </div> 
    <!-- 登录框 -->
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/imgs/login_logo.png" alt="头像" />
      </div>
      <!-- 标题 -->
      <div class="title">
        咸宁市产教融合服务平台
      </div>
      <!-- 登录表单 -->
      <el-form ref="form" class="login-form" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" show-password v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
      
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      //表单数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      //表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3,max: 10, message: '长度在3个到10个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5,max: 15, message: '长度在5个到15个字符之间', trigger: 'blur' }
        ]
      }
    
    }
  },
  methods: {  
      //登录
      login(){
      //判断登录校验
      console.log('发送登录请求')
      }
    },
}
</script>

<style lang="less" scoped>

  .login-container {
    background-color: aquamarine;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-left {
      margin-right: 100px;
    }

    .login-box {
      width: 400px;
      height: 350px;
      background-color: #fff;
      padding: 50px;
      border-radius: 6px;
      box-sizing: border-box;
      position: relative;

      .avatar-box {
        width: 120px;
        height: 120px;
        border:5px solid aquamarine;
        border-radius: 100%;
        text-align: center;
        line-height: 110px;
        position: absolute;
        top: -60px;
        right:140px;
        background-color: #fff;
      }

      .title{
        position:absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        color:#444;
      }

      .login-form{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding:0 20px;
        width: 80%;
        box-sizing: border-box;

        .login-btn{
          width: 100%;
        }
        
      }

    }
  }
</style>