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

    <!-- 背景图 -->
    <div class="bg">
      <img src="../assets/imgs/personnel.png" alt="" />
    </div>

    <!-- 通知栏 -->
    <div class="notice">
      <el-row :gutter="0">
        <el-col :xs="8" :sm="8">
          <div class="grid-content">
            &nbsp;&nbsp;&nbsp;&nbsp;岗位急聘：xxx公司 - 紧急招聘 -
            算法工程师岗位
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
              <i class="bb"><b>找人才</b></i>
              <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content">
                  <img src="../assets/imgs/head1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <h4>张**</h4>
                  <p>男</p>
                  <p>专科</p>
                  <p>3年工作经验</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <p>专业：电气自动化</p>
                  <p>
                    从事行业：汽车制造<el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover"
                      content="内容xxxxxxxx">
                      <el-button class="el-button" slot="reference">查看详情</el-button>
                    </el-popover>
                  </p>
                  <p>求职岗位：自动化工程师</p>
                  <p>自我评价：技术熟练、适应能力强、有责任心</p>
                </div>
              </el-col>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content">
                  <img src="../assets/imgs/head1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <h4>李**</h4>
                  <p>男</p>
                  <p>本科</p>
                  <p>5年工作经验</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <p>专业：计算机科学与技术</p>
                  <p>
                    从事行业：智能机器人<el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover"
                      content="内容xxxxxxxx">
                      <el-button class="el-button" slot="reference">查看详情</el-button>
                    </el-popover>
                  </p>
                  <p>求职岗位：CV视觉工程师</p>
                  <p>自我评价：精通CV、丰富的实战经验，技术极客</p>
                </div>
              </el-col>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content">
                  <img src="../assets/imgs/head2.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <h4>王**</h4>
                  <p>女</p>
                  <p>专科</p>
                  <p>2年工作经验</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <p>专业：市场营销</p>
                  <p>
                    从事行业：通信<el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover"
                      content="内容xxxxxxxx">
                      <el-button class="el-button" slot="reference">查看详情</el-button>
                    </el-popover>
                  </p>
                  <p>求职岗位：销售</p>
                  <p>自我评价：市场洞察力强、销售业绩佳、沟通高效</p>
                </div>
              </el-col>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content">
            <div class="title">
              <i class="bb"><b>找人才</b></i>
              <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content">
                  <img src="../assets/imgs/company1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <h4>咸宁xx机器人有限公司</h4>
                  <p>招聘岗位：算法工程师</p>
                  <p>经验要求：3年以上</p>
                  <p>公司地址：咸宁咸安区</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover" content="内容xxxxxxxx">
                    <el-button class="el-button2" slot="reference">招聘中</el-button>
                  </el-popover>
                </div>
              </el-col>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content">
                  <img src="../assets/imgs/company1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <h4>咸宁xxr制造有限公司</h4>
                  <p>招聘岗位：运营经理</p>
                  <p>经验要求：3年以上</p>
                  <p>公司地址：咸宁咸安区</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover" content="内容xxxxxxxx">
                    <el-button class="el-button3" slot="reference">结束招聘</el-button>
                  </el-popover>
                </div>
              </el-col>
            </div>
            <div class="message">
              <el-col :span="6">
                <div class="grid-content">
                  <img src="../assets/imgs/company1.svg" alt="" />
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <h4>咸宁xx物联网有限公司</h4>
                  <p>招聘岗位：销售经理</p>
                  <p>经验要求：5年以上</p>
                  <p>公司地址：咸宁咸安区</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-popover placement="top-start" title="标题xxxx" width="100" trigger="hover" content="内容xxxxxxxx">
                    <el-button class="el-button2" slot="reference">招聘中</el-button>
                  </el-popover>
                </div>
              </el-col>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 主体 -->
    <main>
      <div class="big-title">
        <h1 class="bbb">人才增值服务</h1>
      </div>
      <div class="title">
        <i class="bb"><b>职业规划和评测</b></i>
        <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
      </div>
      <div class="bg">
        <img src="../assets/imgs/career.svg" alt="" />
      </div>
      <div class="content">
        <div class="little-title">
          <h4>
            使用评测工具进行能力评测，能够更准确地识别和开发人才，有针对性地做职业规划
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <div class="grid-content">
              <p>性格倾向评估</p>
              <p>职业兴趣和适配性评估</p>
              <p>行为风格和人际关系评估</p>
              <p>优势和天赋识别</p>
              <p>能力胜任模型评估</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p>
                MBTI(Myers-Briggs Type
                Indicator):评估个人的心理偏好，了解其性格类型和行为模式。
              </p>
              <p>
                霍兰德职业兴趣测试(Holland
                Code):探索个人的职业兴趣和潜在的职业适配性
              </p>
              <p>
                DISC
                Assessment:分析个人的行为风格，包括在工作环境中的态度和互动方式。
              </p>
              <p>
                盖洛普优势识别器(CliftonStrengths):识别和发展个人的核心优势和天赋
              </p>
              <p>
                能力胜任模型(Competency
                Models):定义和评估个人在特定职位或职业领域所需的关键能力和行为特征。包括技术技能、领导力、团队合作、解决问题能力等。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="5">
          <div class="grid-content"></div>
          <button>我要申请职业规划</button>
        </el-col>
        <el-col :span="3">
          <div class="grid-content"></div>
          <button>我要评测</button>
        </el-col>
      </el-row>
      <div class="title">
        <i class="bb"><b>实习实训培训指导</b></i>
        <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
      </div>
      <div class="bg">
        <img src="../assets/imgs/practice.svg" alt="" />
      </div>
      <div class="content">
        <div class="little-title">
          <h3>
            <b>看看受益者是怎么说的</b>
          </h3>
        </div>
        <div class="box">
          <div class="row">
            <span class="item">
              <i><strong>张**</strong>&nbsp;&nbsp;&nbsp;</i>
              <i><small>运营实习岗</small></i>
              <p>感谢老师指导，让我顺利通过实习面试</p>
            </span>
            <span class="item">
              <span class="item">
                <i><strong>李**</strong>&nbsp;&nbsp;&nbsp;</i>
                <i><small>自动化操作工程师</small></i>
                <p>感谢老师培训，让我技能得到提升</p>
              </span>
            </span>
          </div>
          <div class="row">
            <span class="item">
              <span class="item">
                <i><strong>何**</strong>&nbsp;&nbsp;&nbsp;</i>
                <i><small>嵌入式开发工程师</small></i>
                <p>感谢老师实训指导，让我顺利获得Offer</p>
              </span>
            </span>
          </div>
          <div class="row">
            <span class="item">
              <span class="item">
                <i><strong>肖**</strong>&nbsp;&nbsp;&nbsp;</i>
                <i><small>Java开发高级工程师</small></i>
                <p>感谢老师指导，让我顺利晋升高级岗</p>
              </span>
            </span>
            <span class="item">
              <span class="item">
                <i><strong>王**</strong>&nbsp;&nbsp;&nbsp;</i>
                <i><small>会计实习岗</small></i>
                <p>感谢老师指导，让我顺利通过实习面试</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="4">
          <div class="grid-content"></div>
          <button>我要申请实习指导</button>
        </el-col>
        <el-col :span="4">
          <div class="grid-content"></div>
          <button>我要申请实训指导</button>
        </el-col>
        <el-col :span="4">
          <div class="grid-content"></div>
          <button>我要申请培训指导</button>
        </el-col>
      </el-row>
      <div class="title">
        <i class="bb"><b>证书综合服务</b></i>
        <i><small><small>更多</small></small><i class="el-icon-d-arrow-right"></i></i>
      </div>
      <div class="content2">
        <div class="little-title">
          <h4>
            <b>证书样本</b>
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <div class="grid-content">
              <img src="../assets/imgs/certificate1.svg" alt="" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <img src="../assets/imgs/certificate2.svg" alt="" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <img src="../assets/imgs/certificate3.svg" alt="" />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <img src="../assets/imgs/certificate4.svg" alt="" />
            </div>
          </el-col>
        </el-row>
        <div class="little-title">
          <h4>
            <b>专业培训机构</b>
          </h4>
        </div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <div class="grid-content">
              <p>澳美清华教育（天洁校区）</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <p>逸典教育科技有限公司</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <p>咸宁志力教育培训有限公司</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <p>巨人课外教育学校</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="4">
          <div class="grid-content"></div>
          <button>我要申请考证</button>
        </el-col>
        <el-col :span="4">
          <div class="grid-content"></div>
          <button>我要申请培训</button>
        </el-col>
        <el-col :span="4">
          <div class="grid-content"></div>
          <button>我要查询证书</button>
        </el-col>
      </el-row>
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
            <div class="grid-content">
              <p>版权所有@咸宁职业技术学院</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
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
  data() {
    return {
      visible: false,
    };
  },
};
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

    img {
      height: 100px;
    }
  }

  .el-button {
    background-color: #c3def8;
    border-radius: 15px;
    color: #000;
    height: 40px;
    margin-left: 20px;
  }

  .el-button2 {
    background-color: #B2E2AA;
    border-radius: 15px;
    color: #000;
    height: 40px;
    margin-left: 20px;
  }

  .el-button3 {
    background-color: #D7D7D7;
    border-radius: 15px;
    color: #000;
    height: 40px;
    margin-left: 20px;
  }

  .grid-content p,
  h4 {
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

/* 主体 */
main {
  .big-title {
    margin-top: 100px;
    display: flex;
    justify-content: center;

    .bbb {
      color: #000;
      border-bottom: 4px solid #3a91fa;
    }
  }

  .content {
    background-color: #f2f2f2;

    .little-title {
      padding: 50px 0 50px 0;

      h4 {
        text-align: center;
      }

      h3 {
        text-align: center;
        color: #054693;
      }
    }
  }

  .box {
    display: flex;
    flex-wrap: nowrap;
  }

  .row {
    flex-basis: 100%;
    display: flex;

    .item p {
      margin: 20px 0 50px 0;
    }
  }

  .row:nth-child(1) {
    justify-content: space-around;
  }

  .row:nth-child(2) {
    justify-content: center;
  }

  .row:nth-child(3) {
    justify-content: center;
  }

  button {
    background-color: #054693;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin: 60px 0 100px 50px;
    min-height: 40px;
  }

  button:hover {
    background-color: #032b5d;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .content2 {
    .little-title {
      padding: 50px 0 50px 0;

      h4 {
        text-align: center;
      }

      h3 {
        text-align: center;
        color: #054693;
      }
    }

    .el-col img {
      width: 100%;
      height: auto;
      padding: 0 10px 0 10px;
    }

    .el-col p {
      font-size: 22px;
      display: flex;
      justify-content: center;
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
}</style>