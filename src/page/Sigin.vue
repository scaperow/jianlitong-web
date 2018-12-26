<template>
  <div class="sigin" >
    <div class="content"  v-loading="isSigning">
       <el-form ref="form"  label-position="left"  label-width="80px" class="box" :rules="formRules" :model="form">
        <div class="field">
          <h3>登录</h3>
        </div>
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
         <el-row>
         <el-col :span="10">
            <router-link :to="{ path: 'register'}">
              <el-button type="text">没有账号？现在注册新用户</el-button>
            </router-link>
          </el-col>
         <el-col :span="14" class="text-right">
            <el-button type="primary" round class="btn-sigin-in" @click="submit()">登录</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/variables.scss";

.content {
  width: 70%;
  max-width: 340px;
  height: 100%;
  position: relative;
  transition: height 0.25s;
  border-radius: 16px;
  background: #fff8;
  padding: 26px;
}

.sigin {
  background: $--color-primary;
  width: 100%;

  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "Sign",
  created() {},
  data() {
    return {
      messageHandler: null,
      isSigning: false,
      form: {
        name: "",
        password: ""
      },
      formRules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "change"
          },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "change"
          },
          {
            pattern: /^[a-zA-Z0-9_-\u4E00-\u9FA5]+$/,
            message: "只能输入数字，字母，下划线，减号",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change"
          },
          {
            min: 3,
            max: 25,
            message: "长度在 6 到 25 个字符",
            trigger: "change"
          },
          {
            pattern: /^[a-zA-Z0-9_-\u4E00-\u9FA5]+$/,
            message: "只能输入数字，字母，下划线，减号",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$bus.emit("user:beforeSign");
      this.$refs.form.validate(isPass => {
        if (isPass) {
          if (this.messageHandler) {
            this.messageHandler.close();
          }

          this.isSigning = true;
          this.axios
            .post("sigin", this.form)
            .then(res => {
              this.$bus.emit("user:afterSiginSuccess", { user: res.data });
              this.$router.push({
                path: "/"
              });
              this.isSigning = false;
            })
            .catch(error => {
              this.messageHandler = this.$message.error({
                message: error.message || "登录时发生了错误，请重试",
                duration: 0
              });

              this.isSigning = false;
            });
        }
      });
    }
  }
};
</script>

