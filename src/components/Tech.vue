<template>
  <div class="contain">
    <!-- 导航栏 -->
    <header>
      <div class="logo">
        <span><img src="../assets/imgs/logo.png" alt="" /></span>
        <span><router-link to="/index"><strong>咸宁市产教融合服务平台</strong></router-link></span>
      </div>
      <nav>
        <ul>
          <li><router-link to="/index" class="r-link">首页</router-link></li>
          <li>
            <router-link to="/introduce" class="r-link">人才供需</router-link>
          </li>
          <li>
            <router-link to="/tech" class="r-link">技术服务</router-link>
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

    <!-- 背景图 -->
    <div class="bg">
      <img src="../assets/imgs/p3-bg.jpg" alt="" />
    </div>

    <!-- 通知栏 -->
    <div class="notice">
      <el-row :gutter="0">
        <el-col :xs="8" :sm="8">
          <div class="grid-content">
            &nbsp;&nbsp;&nbsp;&nbsp;最新技术：xxx研究院新研发成功xx技术，未来可应在xx场景
          </div>
        </el-col>
        <el-col :xs="14" :sm="14">
          <div class="grid-content">2024-3-14</div>
        </el-col>
        <el-col :xs="2" :sm="2">
          <div class="grid-content">
            全部<i class="el-icon-d-arrow-right"></i></div>
        </el-col>
      </el-row>
    </div>

    <!-- 展示栏 -->
    <div class="show">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="10">
          <div class="grid-content">
            <div class="title">
              <i class="bb"><strong>新技术速递</strong></i>
              <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
            </div>
            <div class="message">
              <el-col :span="8">
                <div class="grid-content-i ">
                  <img src="../assets/imgs/p3-show1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content ">
                  <p>专业：电气自动化</p>
                  <p>从事行业：汽车制造</p>
                  <p>求职岗位：自动化工程师</p>
                  <p>自我评价：技术熟练、适应能力强、有责任心</p>
                  <el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover" content="内容xxxxxxxx">
                    <el-button class="el-button" slot="reference">查看详情</el-button>
                  </el-popover>
                </div>
              </el-col>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content">
            <div class="title">
              <i class="bb"><strong>技术难题求解</strong></i>
              <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content ">
                  <img src="../assets/imgs/company1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <h3>咸宁xx机器人有限公司</h3>
                  <p>招聘岗位：算法工程师</p>
                  <p>经验要求：3年以上</p>
                  <p>公司地址：咸宁咸安区</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content ">
                  <el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover" content="内容xxxxxxxx">
                    <el-button class="el-button" slot="reference">查看详情</el-button>
                  </el-popover>
                </div>
              </el-col>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
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

/*背景图*/
.bg {
  img {
    width: 100%;
    height: auto;
  }
}

/*通知栏*/
.notice {
  .el-col {
    margin: 50px 0 100px auto;
    padding: 8px 0 0 0;
    border-top: 1px solid #3a91fa;
    border-bottom: 1px solid #3a91fa;
    background-color: #e8f0fd;

    .grid-content {
      min-height: 36px;
    }
  }
}

/*展示栏*/
.show {
  text-align: center;

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content-i {
    min-height: 36px;
    font-size: 0;

    img {
      display: block;
      float: left;
    }
  }

  .grid-content {
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
  }

  .message {
    display: flex;
    height: 220px;
    border-radius: 10px;
    border: 1px solid #cecece;
    align-items: center;
    margin-top: 15px;
  }

  .el-button {
    background-color: #c3def8;
    border-radius: 15px;
    color: #000;
    height: 40px;
    margin-left: 20px;
  }

  .grid-content p,
  h3 {
    display: flex;
    align-items: start;
    justify-content: start;
  }
}

.title {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #99a9bf;

  i.bb {
    border-bottom: 4px solid #3a91fa;
  }

  i {
    font-size: 22px;
    margin-right: 10px;
  }
}
</style>