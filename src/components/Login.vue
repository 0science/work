<template>
  <!-- 登录界面 -->
  <div class="contain">
    <!-- 导航栏 -->
    <header>
      <div class="logo">
        <span><img src="../assets/imgs/logo.png" alt="" /></span>
        <span
          ><router-link to="/index"
            ><strong>咸宁市产教融合服务平台</strong></router-link
          ></span
        >
      </div>
      <nav>
        <ul>
          <li><router-link to="/index" class="r-link">首页</router-link></li>
          <li>
            <router-link to="/introduce" class="r-link">人才供需</router-link>
          </li>
          <li>
            <router-link to="/other" class="r-link">校企共创</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">新闻动态</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">活动动态</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">数据中心</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">关于我们</router-link>
          </li>
        </ul>
      </nav>
      <div class="header-button">
        <button @click="goToLogin">注册/登录</button>
      </div>
    </header>
    <!-- 登录框 -->
    <div class="login-box">
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
/*导航栏*/
header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  height: 70px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 999;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 230px;
    height: 50px;
    flex: 1;
    img {
      width: 50px;
      height: 50px;
    }
    .router-link {
      text-decoration: none;
      color: rgb(255, 255, 255);
    }
    a {
      text-decoration: none;
      color: rgb(255, 255, 255);
    }
  }
  nav {
    flex: 2.5;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      margin: 5px auto;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    .r-link:hover {
      font-weight: bold;
      border-bottom: 2px solid #f9f9f9;
    }
  }
  .header-button {
    display: flex;
    flex: 0.5;
    button {
      background-color: #ffffff;
      border: none;
      color: #000;
      padding: 8px 15px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.3s ease 0s;
    }
    button:hover {
      background-color: #ffffff;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
}

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

</style>