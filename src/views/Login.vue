<template>
  <div class="login">
    <Card class="logincard">
      <div class="innerbox">
        <el-row>
          <!-- 轮播图 -->
          <el-col :span="11" class="colforsrcoll">
            <el-carousel height="600px">
              <el-carousel-item v-for="item in imgsrc" :key="item">
                <el-image class="scrollimg" :src="item"></el-image>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <!-- 登录框 -->
          <el-col :span="13">
            <div class="loginbox">
              <el-image class="loginlogo" src="https://s1.ax1x.com/2020/03/20/8cItns.md.png" lazy></el-image>
              <el-form
                :model="logininfo"
                ref="logForm"
                label-width="70px"
                class="demo-ruleForm"
                size="large"
                :rules="loginRules"
              >
                <el-form-item label="用户名:" prop="username">
                  <el-input v-model="logininfo.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密  码:" prop="password">
                  <el-input v-model="logininfo.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <div class="rowforbtn">
                  <el-button class="loginbtn" type="success" @click="loginBtnClicked">登录</el-button>
                  <el-button type="primary" @click="regBtnClicked">注册</el-button>
                </div>
              </el-form>
              <div class="site-info">
                Copyright 2017-2020 山东安冷新材料科技有限公司
                鲁ICP备10087636号-6 ｜ 增值电信业务经营许可证：鲁B2-20130466 ｜ 本页为测试页
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/common/card";
export default {
  name: "login",
  data() {
    return {
      imgsrc: [
        "https://s1.ax1x.com/2020/03/27/GCNoRg.md.jpg",
        "https://s1.ax1x.com/2020/03/27/GCNHMj.md.jpg",
        "https://s1.ax1x.com/2020/03/27/GCNIJS.md.jpg",
        "https://s1.ax1x.com/2020/03/27/GCNTzQ.md.jpg",
        "https://s1.ax1x.com/2020/03/27/GCNhIf.md.jpg"
      ],
      logininfo: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    Card
  },
  methods: {
    // 登录按钮被按下
    loginBtnClicked() {
      this.$refs.logForm.validate(value => {
        if (!value) return;
        this.$message.success("安冷云测试网站开发中,敬请期待");
      });
    },
    regBtnClicked() {
      this.$notify({
        type: "success",
        title: "注册页面",
        message:
          ("i", { style: "color: teal" }, "安冷云测试网站开发中,敬请期待")
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  background-image: url("https://s1.ax1x.com/2020/03/27/GCCWE8.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
}
.logincard {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.innerbox {
  width: 1000px;
  height: 600px;
  background-color: #ccc;
}
.loginbox {
  text-align: center;
  .el-form {
    padding: 6%;
    font-size: 20px;
    .el-form-item {
      height: 3.5rem;
    }
  }
  .loginlogo {
    width: 30%;
    margin: 10%;
  }
  .el-button {
    width: 40%;
  }
  .loginbtn {
    margin-right: 7%;
  }
  .rowforbtn {
    margin-left: 12%;
  }
  .site-info {
    padding: 10%;
    font-size: 0.8rem;
    color: #999;
  }
}
</style>
