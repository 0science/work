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
            <router-link to="/index" class="r-link">校企共创</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">活动动态</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">新闻动态</router-link>
          </li>
          <li>
            <router-link to="/index" class="r-link">数据中心</router-link>
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
      <el-carousel trigger="click" class="custom-carousel" :interval="2000" height="710px">
        <el-carousel-item v-for="item in 5" :key="item"> </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 通知栏 -->
    <div class="notice">
      <el-row :gutter="0">
        <el-col :xs="20" :sm="14">
          <div class="grid-content bg-purple">
            &nbsp;&nbsp;&nbsp;&nbsp;国家发展改革委等部门联合印发《职业教育产教融合赋能提升行动实施方案（2023-2025年）》
          </div>
        </el-col>
        <el-col :xs="2" :sm="8">
          <div class="grid-content bg-purple-light">2024-3-14</div>
        </el-col>
        <el-col :xs="2" :sm="2">
          <div class="grid-content bg-purple">全部<i class=""></i></div>
        </el-col>
      </el-row>
    </div>

    <!-- 主体 -->
    <main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="16">
          <div class="grid-content-p">
            <img src="../assets/imgs/main1.svg" alt="" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content-b">
            <h2><strong>人才供需服务</strong></h2>
            <h3>人才供需及匹配服务</h3>
            <li>• 企业招聘信息发布</li>
            <li>• 人才求职信息发布</li>
            <li>• 人才供需信息智能匹配</li>
            <h3>人才增值服务</h3>
            <li>• 职业规划和评测</li>
            <li>• 实训培训指导</li>
            <li>• 证书综合服务</li>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8">
          <div class="grid-content-b">
            <h2><strong>技术服务</strong></h2>
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
        </el-col>
        <el-col :span="8">
          <div class="grid-content-p">
            <img src="../assets/imgs/main2.svg" alt="" />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="16">
          <div class="grid-content-p">
            <img src="../assets/imgs/main3.svg" alt="" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content-b">
            <h2><strong>校企共创</strong></h2>
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
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8">
          <div class="grid-content-b">
            <h2><strong>活动动态</strong></h2>
            <h3>各类活动动态展示</h3>
          <li>• 企业招聘信息发布</li>
          <li>• 产教融合活动举办动态</li>
          <li>• 竞赛赛事举办动态</li>
          <h3>园区产教动态</h3>
          <li>• 园区支持建设产教融合示范区，推动产教深度合作</li>
          <li>• 园区与企业共建实训基地，提升人才培养与技术应用</li>
          <li>• 园区政策激励，促进校企合作，加速区域产业升级</li>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content-p">
            <img src="../assets/imgs/main4.svg" alt="" />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="16">
          <div class="grid-content-p">
            <img src="../assets/imgs/main5.png" alt="" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content-b">
            <h2><strong>新闻动态</strong></h2>
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
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8">
          <div class="grid-content-b">
            <h2><strong>数据中心</strong></h2>
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
        </el-col>
        <el-col :span="8">
          <div class="grid-content-p">
            <img src="../assets/imgs/main6.png" alt="" />
          </div>
        </el-col>
      </el-row>
      <div class="content2">
        <div class="little-title">
          <h4>
            <b>入驻院校</b>
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div class="grid-content-p">
              <img src="../assets/imgs/college1.png" alt="" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content-p">
              <img src="../assets/imgs/college2.png" alt="" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content-p">
              <img src="../assets/imgs/college3.png" alt="" />
            </div>
          </el-col>
        </el-row>
        <div class="little-title">
          <h4>
            <b>入驻企业</b>
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="12">
            <div class="grid-content-p">
              <img src="../assets/imgs/company1.png" alt="" />
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content-b">
              <img src="../assets/imgs/company2.png" alt="" />
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content-p">
              <img src="../assets/imgs/company3.png" alt="" />
            </div>
          </el-col>
        </el-row>
        <div class="little-title">
          <h4>
            <b>入驻培训机构</b>
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <p>澳美清华教育（天洁校区）</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <p>逸典教育科技有限公司</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <p>咸宁志力教育培训有限公司</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <p>巨人课外教育学校</p>
            </div>
          </el-col>
        </el-row>
        <div class="little-title">
          <h4>
            <b>政府机构</b>
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="14">
            <div class="link">
              <li><img src="../assets/imgs/government1.png" alt="" /></li>
              <li><img src="../assets/imgs/government2.png" alt="" /></li>
              <li><img src="../assets/imgs/government3.png" alt="" /></li>
              <li><img src="../assets/imgs/government4.png" alt="" /></li>
              <li><img src="../assets/imgs/government5.png" alt="" /></li>
            </div>
          </el-col>
        </el-row>
      </div>
    </main>

    <!-- 底部 -->
    <footer>
      <div class="footer-nav">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="8">
            <div class="grid-content-p">
              <div class="logo">
                <span><img src="../assets/imgs/logo.png" alt="" /></span>
                <span><router-link to="/index"><strong>咸宁市产教融合服务平台</strong></router-link></span>
              </div>
              <span>&nbsp;</span>
              <div class="unit"><strong>主办：咸宁职业技术学院</strong></div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content-b">
              <div class="unit"><strong>友情链接</strong></div>
              <div class="link">
                <li><a href="">咸宁市人民政府</a></li>
                <li><a href="">咸宁市人社局</a></li>
                <li><a href="">咸宁市经信局</a></li>
                <li><a href="">咸宁市科技局</a></li>
                <li><a href="">咸宁市教育局</a></li>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content-p">
              <div class="QR">
                <img src="../assets/imgs/QRcode.png" alt="" />
              </div>
              <div class="tip">
                <p>扫码关注公众号</p>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content-b">
              <div class="unit"><strong>联系我们</strong></div>
              <div class="contact">
                <p>
                  <i><img src="../assets/imgs/icon-phone.png" alt="" />&nbsp;&nbsp;</i>0715-8255518
                </p>
                <p>
                  <i><img src="../assets/imgs/icon-message.png" alt="" />&nbsp;&nbsp;</i>test@test.com
                </p>
                <p>
                  <i><img src="../assets/imgs/icon-location.png" alt="" />&nbsp;&nbsp;</i>湖北省咸宁市咸宁大道118号
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="footer-info">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <p>版权所有@咸宁职业技术学院</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <p>公安部备案号：4212020123456、鄂ICP备2024123456号</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </footer>
    
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
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 30PX;
    }
  }

  .grid-content-p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-content-b {
    h2 {
      margin: 30px auto;
    }

    h3 {
      margin: 25px auto;
    }

    li {
      margin: 10px auto;
    }

    p {
      margin: 20px auto 0 auto;
      font-size: 18px;
      color: #7b7b7b;
    }
  }

  .content2 {
    .little-title {
      padding: 10px 0 50px 0;

      h4 {
        text-align: center;
      }

      h3 {
        text-align: center;
        color: #054693;
      }
    }

    .grid-content-b img {
      max-height: 90px;
    }

    .grid-content-p img {
      max-height: 150px;
      padding: 0 10px 0 10px;
    }

    .el-col p {
      font-size: 22px;
      display: flex;
      justify-content: center;
    }

    .link {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      img {
        height: 70px;
      }

      li {
        margin-bottom: 10px;
      }
    }
  }
}

/*底部 */
footer {
  width: 100%;
  height: auto;

  .footer-nav {
    .row-bg {
      padding: 10px 0 0 0;
      background-color: #2d3c63;

      .grid-content-p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 230px;
        flex: 1;

        img {
          max-width: 50px;
        }

        .router-link {
          text-decoration: none;
          color: rgb(255, 255, 255);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
        }
      }

      a {
        text-decoration: none;
        color: rgb(255, 255, 255);
      }

      .unit {
        color: #fff;
        margin-bottom: 5px;
      }

      .link {
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: space-between;
      }

      .QR {
        img {
          max-width: 80px;
          height: 80px;
        }
      }

      .tip {
        font-size: 14px;
        color: #7b7b7b;
      }

      .contact {
        p {
          color: #fff;
          margin: 0;
          padding: 0;
        }

        img {
          max-width: 20px;
        }
      }
    }

    .el-col {
      border-radius: 4px;
    }

    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
  }

  .footer-info {
    .row-bg {
      background-color: #21325e;
      color: #fff;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
      }
    }
  }
}
</style>