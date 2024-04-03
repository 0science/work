<template>
  <div class="contain">
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
        <button>注册/登录</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/*导航栏*/
.contain {
  height: 100%;
  min-width: 100%;
}
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
</style>