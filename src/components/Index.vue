<template>
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

    <!-- 轮播图 -->
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel
        trigger="click"
        class="custom-carousel"
        interval="2000"
        height="710px"
      >
        <el-carousel-item v-for="item in 5" :key="item"> </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 通知栏 -->
    <div class="notice">
      <el-row :gutter="0">
        <el-col :xs="20" :sm="14"
          ><div class="grid-content bg-purple">
            &nbsp;&nbsp;&nbsp;&nbsp;国家发展改革委等部门联合印发《职业教育产教融合赋能提升行动实施方案（2023-2025年）》
          </div></el-col
        >
        <el-col :xs="2" :sm="8"
          ><div class="grid-content bg-purple-light">2024-3-14</div></el-col
        >
        <el-col :xs="2" :sm="2"
          ><div class="grid-content bg-purple">全部<i class=""></i></div
        ></el-col>
      </el-row>
    </div>

    <!-- 主体 -->
    <main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <img src="../assets/imgs/main1.svg" alt="" /></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple-light">
            <h2><strong>人才供需服务</strong></h2>
              <h3>人才供需及匹配服务</h3>
              <li>• 企业招聘信息发布</li>
              <li>• 人才求职信息发布</li>
              <li>• 人才供需信息智能匹配</li>
              <h3>人才增值服务</h3>
              <li>• 职业规划和评测</li>
              <li>• 实训培训指导</li>
              <li>• 证书综合服务</li></div
        ></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <img src="../assets/imgs/main1.svg" alt="" /></div
        ></el-col>
      </el-row>
      <!-- <div class="box-left">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="10"
            ><div class="grid-content bg-purple">
              <img src="../assets/imgs/main1.svg" alt="" /></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <h2>人才供需服务</h2>
              <h3>人才供需及匹配服务</h3>
              <li>• 企业招聘信息发布</li>
              <li>• 人才求职信息发布</li>
              <li>• 人才供需信息智能匹配</li>
              <h3>人才增值服务</h3>
              <li>• 职业规划和评测</li>
              <li>• 实训培训指导</li>
              <li>• 证书综合服务</li>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="box-right">
        <el-row class="row-bg">
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <h2>技术服务</h2>
              <h3>最新技术速递服务</h3>
              <li>• 让新技术服务有更快触达目标用户</li>
              <li>• 让新技术服务快速落地</li>
              <li>• 让新技术服务有更快触达目标用户</li>
              <li>• 让新技术服务快速落地</li>
              </div
          ></el-col>
          <el-col :span="10"
            ><div class="grid-content bg-purple">
              <img src="../assets/imgs/main2.svg" alt="" />
              
            </div></el-col
          >
        </el-row>
      </div> -->
    </main>

    <!-- <div class="main">
      <div class="box1">
        <div class="box1-left">
          <img src="../assets/imgs/main1.svg" alt="" />
        </div>
        <div class="box1-right">
          <h2>人才供需服务</h2>
          <h3>人才供需及匹配服务</h3>
          <li>• 企业招聘信息发布</li>
          <li>• 人才求职信息发布</li>
          <li>• 人才供需信息智能匹配</li>
          <h3>人才增值服务</h3>
          <li>• 职业规划和评测</li>
          <li>• 实训培训指导</li>
          <li>• 证书综合服务</li>
        </div>
      </div>
      <div class="box2">
        <div class="box2-left">
          <h2>技术服务</h2>
          <h3>最新技术速递服务</h3>
          <li>• 让新技术服务有更快触达目标用户</li>
          <li>• 让新技术服务快速落地</li>
          <li>• 让技术商业化的效率大大提升</li>
          <h3>技术难题求解发布服务</h3>
          <li>• 自由发布技术难题求解</li>
          <li>• 配套技术咨询和匹配服务</li>
          <li>• 通过项目撮合实现技术成果高效转化</li>
          <p>通过技术服务支持和创新服务，<br />推动技术创新和产业升级</p>
        </div>
        <div class="box2-right">
          <img src="../assets/imgs/main2.svg" alt="" />
        </div>
      </div>
      <div class="box1">
        <div class="box1-left">
          <img src="../assets/imgs/main3.svg" alt="" />
        </div>
        <div class="box1-right">
          <h2>校企共创</h2>
          <h3>信息动态发布</h3>
          <li>• 学校动态发布</li>
          <li>• 企业动态发布</li>
          <li>• 双方信息互通</li>
          <h3>校企合作共建</h3>
          <li>• 合作项目展示</li>
          <li>• 共建课程展示</li>
          <li>• 产学协同实践展示</li>
          <p>协同学校、企业共同推进</p>
        </div>
      </div>
      <div class="box2">
        <div class="box2-left">
          <h2>活动动态</h2>
          <h3>各类活动动态展示</h3>
          <li>• 企业招聘信息发布</li>
          <li>• 产教融合活动举办动态</li>
          <li>• 竞赛赛事举办动态</li>
          <h3>园区产教动态</h3>
          <li>• 园区支持建设产教融合示范区，推动产教深度合作</li>
          <li>• 园区与企业共建实训基地，提升人才培养与技术应用</li>
          <li>• 园区政策激励，促进校企合作，加速区域产业升级</li>
        </div>
        <div class="box2-right">
          <img src="../assets/imgs/main4.svg" alt="" />
        </div>
      </div>
      <div class="box1">
        <div class="box1-left">
          <img src="../assets/imgs/main5.png" alt="" />
        </div>
        <div class="box1-right">
          <h2>新闻动态</h2>
          <h3>政策动态发布</h3>
          <li>• 新政出台，优化企业发展环境</li>
          <li>• 税收优惠，降低企业运营成本</li>
          <li>• 资金扶持，助力产业技术创新</li>
          <h3>政策解读与分析</h3>
          <li>• 对重要政策进行解读和分析</li>
          <h3>创业创新</h3>
          <li>• 创新大赛，激发创业活力</li>
          <li>• 园区孵化，提供创业指导支持</li>
          <li>• 研发支持，增强企业核心竞争力</li>
        </div>
      </div>
      <div class="box2">
        <div class="box2-left">
          <h2>数据中心</h2>
          <h3>五库数据中心</h3>
          <li>• 专家库：专家入库、管理、服务</li>
          <li>• 人才库：人才招募、培训、评价、跟踪</li>
          <li>• 证书库：证书统一管理</li>
          <li>• 政策库：政策信息收集、分类整理、解读分析</li>
          <li>• 成果库：成果展示、成果推广、成果评价</li>
          <li>• 项目库：项目展示、对接、跟踪</li>
          <h3>提供人才、企业数据分析报告</h3>
          <li>• 职业规划和评测</li>
          <li>• 提供人才画像，人才数据分析</li>
          <li>• 提供企业招聘、技术数据分析</li>
        </div>
        <div class="box2-right">
          <img src="../assets/imgs/main6.png" alt="" />
        </div>
      </div>
    </div> -->
    <!-- 介绍 -->
    <!-- <div class="item">
      <div class="item-title">
        <h2>入驻院校</h2>
      </div>
      <div class="item-content1">
        <div class="content1-left">
          <img src="../assets/imgs/college1.png" alt="" />
        </div>
        <div class="content1-center">
          <img src="../assets/imgs/college2.png" alt="" />
        </div>
        <div class="content1-right">
          <img src="../assets/imgs/college3.png" alt="" />
        </div>
      </div>
      <div class="item-title">
        <h2>入驻企业</h2>
      </div>
      <div class="item-content2">
        <div class="content2-left">
          <img src="../assets/imgs/company1.png" alt="" />
        </div>
        <div class="content2-center">
          <img src="../assets/imgs/company2.png" alt="" />
        </div>
        <div class="content2-right">
          <img src="../assets/imgs/company3.png" alt="" />
        </div>
      </div>
      <div class="item-title">
        <h2>入驻培训机构</h2>
      </div>
      <div class="item-content3">
        <p>澳美清华教育（天洁校区）</p>
        <p>逸典教育科技有限公司</p>
        <p>咸宁志力教育培训有限公司</p>
        <p>巨人课外教育学校</p>
      </div>
      <div class="item-title">
        <h2>政府机构</h2>
      </div>
      <div class="item-content4">
        <div class="content4-box">
          <img src="../assets/imgs/government1.png" alt="" />
          <img src="../assets/imgs/government2.png" alt="" />
        </div>
        <div class="content4-box">
          <img src="../assets/imgs/government3.png" alt="" />
          <img src="../assets/imgs/government4.png" alt="" />
        </div>
        <div class="content4-box">
          <img src="../assets/imgs/government5.png" alt="" />
        </div>
      </div>
    </div> -->
    <!-- 底部 -->
    <!-- <footer>
      <div class="footer-nav">
        <div class="part1">
          <div class="logo">
            <img
              src="https://axure-file.lanhuapp.com/md5__d37937cb9ff4f375858447b54d9296ea.png"
              alt=""
            />
          </div>
          <div class="name">
            <a href="#"><strong>咸宁市产教融合服务平台</strong></a>
          </div>
          <p><b>主办：咸宁职业技术学院</b></p>
        </div>
        <div class="part2">
          <div class="part2-title">
            <p><b>友情链接</b></p>
          </div>
          <div class="part2-content">
            <div class="content-left">
              <li><a href="#">咸宁市人民政府</a></li>
              <li><a href="#">咸宁市经信局</a></li>
              <li><a href="#">咸宁市教育局</a></li>
            </div>
            <div class="content-right">
              <li><a href="#">咸宁市人社局</a></li>
              <li><a href="#">咸宁市科技局</a></li>
            </div>
          </div>
        </div>
        <div class="part3">
          <img src="../assets/imgs/QRcode.png" alt="" />
          <p>扫码关注公众号</p>
        </div>
        <div class="part4">
          <div class="part2-title">
            <p><b>联系我们</b></p>
          </div>
          <div class="part4-content">
            <li>
              <img src="../assets/imgs/icon-phone.png" alt="" />
              <p>0715-8255518</p>
            </li>
            <li>
              <img src="../assets/imgs/icon-message.png" alt="" />
              <p>test@test.com</p>
            </li>
            <li>
              <img src="../assets/imgs/icon-location.png" alt="" />
              <p>湖北省咸宁市咸宁大道118号</p>
            </li>
          </div>
        </div>
      </div>
      <div class="footer-info">
        <p>版权所有@咸宁职业技术学院</p>
        <p>公安部备案号：4212020123456、鄂ICP备2024123456号</p>
      </div>
    </footer> -->
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less"  scoped>
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

@media (max-width: 768px) {
  nav {
    display: none;
  }
  .header-button {
    display: flex;
    justify-content: space-around;
  }
  .custom-carousel {
    height: 200px;
  }
}

/*轮播图*/
.el-carousel__item:nth-child(5n) {
  background-image: url(../assets/imgs/1.png);
  background-size: cover;
  background-position: center;
}
.el-carousel__item:nth-child(5n + 1) {
  background-image: url(../assets/imgs/2.png);
  background-size: cover;
  background-position: center;
}
.el-carousel__item:nth-child(5n + 2) {
  background-image: url(../assets/imgs/3.png);
  background-size: cover;
  background-position: center;
}
.el-carousel__item:nth-child(5n + 3) {
  background-image: url(../assets/imgs/1.png);
  background-size: cover;
  background-position: center;
}
.el-carousel__item:nth-child(5n + 4) {
  background-image: url(../assets/imgs/2.png);
  background-size: cover;
  background-position: center;
}
/*通知栏*/
.notice {
  .el-col {
    margin: 50px 0 100px 0;
    padding: 8px 0 0 0;
    border-top: 1px solid #3a91fa;
    border-bottom: 1px solid #3a91fa;
    background-color: #e8f0fd;
    .grid-content {
      min-height: 36px;
    }
  }
}
/*主体 */
main {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
// main {
//   .el-row {
//     margin-bottom: 20px;
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
//   .el-col {
//     border-radius: 4px;
//   }
//   .bg-purple-dark {
//     background: #99a9bf;
//   }
//   .bg-purple {
//     background: #d3dce6;
//   }
//   .bg-purple-light {
//     background: #e5e9f2;
//   }
//   .grid-content {
//     border-radius: 4px;
//     min-height: 36px;
//   }
//   .row-bg {
//     padding: 10px 0;
//     display: flex;
//     justify-content: center;
//     flex-wrap: nowrap;
//     background-color: #f9fafc;
//   }
// }

// .main {
//   width: 100%;
//   height: 3600px;
// }
// .box1 {
//   width: 100%;
//   height: 600px;
//   margin: 10px auto;
//   float: left;
//   .box1-left {
//     width: 700px;
//     height: 600px;
//     float: left;
//     // background-color: #ff6146;
//     img {
//       padding-left: 100px;
//       padding-top: 50px;
//     }
//   }
//   .box1-right {
//     width: 500px;
//     height: 600px;
//     float: left;
//     // background-color: #3A91FA;
//     h2 {
//       padding-top: 40px;
//     }
//     h3 {
//       padding-top: 20px;
//     }
//     li {
//       font-size: 17px;
//     }
//     p {
//       margin-top: 30px;
//       font-size: 18px;
//       color: #7b7b7b;
//     }
//   }
// }
// .box2-right {
//   width: 700px;
//   height: 600px;
//   float: left;
//   // background-color: #ff6146;
//   img {
//     // padding-left:100px ;
//     padding-top: 50px;
//     margin-left: 50px;
//   }
// }
// .box2-left {
//   width: 500px;
//   height: 600px;
//   float: left;
//   // background-color: #3A91FA;
//   h2 {
//     padding-top: 40px;
//     margin-left: 130px;
//   }
//   h3 {
//     padding-top: 20px;
//     margin-left: 130px;
//   }
//   li {
//     font-size: 17px;
//     margin-left: 130px;
//   }
//   p {
//     margin-top: 30px;
//     margin-left: 130px;
//     font-size: 18px;
//     color: #7b7b7b;
//   }
// }
// .item {
//   width: 100%;
//   height: 1400px;
//   .item-title {
//     text-align: center;
//     margin-top: 120px;
//     margin-bottom: 80px;
//   }
// }

// .item-content1 {
//   width: 100%;
//   height: 150px;
//   img {
//     float: left;
//     height: 150px;
//     width: auto;
//     margin-left: 190px;
//   }
// }

// .item-content2 {
//   width: 100%;
//   height: 80px;
//   img {
//     float: left;
//     height: 80px;
//     width: auto;
//     margin-left: 60px;
//   }
// }

// .item-content3 {
//   width: 100%;
//   height: 30px;
//   p {
//     margin-left: 90px;
//     margin-top: 0;
//     float: left;
//     font-size: 18px;
//   }
// }

// .item-content4 {
//   width: 100%;
//   height: 300px;
//   .content4-box {
//     width: 800px;
//     height: 60px;
//     margin-bottom: 40px;
//     margin-left: 20%;
//   }
//   img {
//     float: left;
//     height: 60px;
//     width: auto;
//     margin-right: 30px;
//   }
// }

// .footer {
//   width: 100%;
//   height: 200px;
// }

// .footer-nav {
//   display: flex;
//   width: 100%;
//   height: 200px;
//   background-color: #2d3c63;
//   .part1 {
//     width: 350px;
//     height: 200px;
//     // background-color: #d60caa;
//     border-right: 2px solid;
//     border-image: linear-gradient(
//         180deg,
//         rgba(255, 255, 255, 0) 0%,
//         #7787a9 50%,
//         rgba(255, 255, 255, 0) 99%
//       )
//       2 2 2 2;
//   }
//   .part1 p {
//     font-size: 18px;
//     color: #fff;
//     margin-left: 60px;
//     margin-top: 40px;
//   }
//   .part2 {
//     width: 350px;
//     height: 200px;
//     // background-color: #42b8ef;
//     border-right: 2px solid;
//     border-image: linear-gradient(
//         180deg,
//         rgba(255, 255, 255, 0) 0%,
//         #7787a9 50%,
//         rgba(255, 255, 255, 0) 99%
//       )
//       2 2 2 2;
//   }
//   .part2-title {
//     margin-top: 40px;
//     margin-left: 50px;
//     color: #fff;
//   }
//   .part2-content {
//     width: 300px;
//     margin-left: 50px;
//     display: flex;
//   }
//   .content-left {
//     width: 115px;
//     // background-color: #dbec27;
//   }
//   li {
//     margin-top: 10px;
//   }
//   .content-right {
//     width: 100px;
//     margin-left: 40px;
//     // background-color: #d60c0c;
//   }
//   .part3 {
//     width: 200px;
//     height: 200px;
//     // background-color: #dbec27;
//     border-right: 2px solid;
//     border-image: linear-gradient(
//         180deg,
//         rgba(255, 255, 255, 0) 0%,
//         #7787a9 50%,
//         rgba(255, 255, 255, 0) 99%
//       )
//       2 2 2 2;
//     img {
//       width: 100px;
//       height: auto;
//       margin-left: 50px;
//       margin-top: 40px;
//     }
//     p {
//       font-size: 14px;
//       color: #7b7b7b;
//       margin-left: 50px;
//     }
//   }
//   .part4 {
//     width: 300px;
//     height: 200px;
//     // background-color: #d60c0c;
//     img {
//       width: 15px;
//       height: auto;
//       float: left;
//       margin-right: 10px;
//       margin-left: 20px;
//     }
//     li {
//       color: #fff;
//       font-size: 12px;
//       margin-left: 20px;
//     }
//   }
//   .logo {
//     margin-left: 50px;
//     margin-right: 10px;
//     margin-top: 45px;
//     width: 50px;
//     height: 50px;
//     float: left;
//     img {
//       width: 50px;
//       height: 50px;
//     }
//   }
//   .name {
//     height: 25px;
//     width: 300px;
//     margin-top: 60px;
//   }
// }
// .footer-info {
//   width: 100%;
//   height: 50px;
//   background-color: #21325e;
//   p {
//     margin-left: 250px;
//     margin-right: -120px;
//     margin-top: 13px;
//     float: left;
//     font-size: 14px;
//     color: #fff;
//   }
// }
</style>