<template>
  <div class="sigin">
    <div class="content">
      <el-form ref="form" label-position="left" label-width="80px" class="box" :rules="formRules" :model="form">
        <div class="field">
          <h2>注册</h2>
        </div>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input :disabled="isWaitingCode" ref="mail" v-model="form.mail">
            <template slot="suffix">
              <el-button type="primary" size="mini" :disabled="isWaitingCode" @click="sendValidateCode()">{{isWaitingCode?`${waitingCodeTime}s`:"发送验证码"}}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="retryPassword">
          <el-input type="password" v-model="form.retryPassword"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="10">
            <router-link :to="{ path: 'sigin'}">
              <el-button type="text">已有账号？现在登录</el-button>
            </router-link>
          </el-col>
          <el-col :span="14" class="text-right">
            <el-button type="primary" round @click="submit()">注册</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/variables.scss";
.content {
  color:$--color-white;
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
import lodash from "lodash";
export default {
  name: "Register",
  created() {},
  methods: {
    sendValidateCode() {
      this.$refs.form.validateField("mail", errorMessage => {
        if (!errorMessage) {
          this.axios
            .post("/token", {
              mail: this.form.mail,
              type: 1
            })
            .then(response => {
              this.$message.success("验证码已发送，请查收");
              this.waitingCodeTime = 60;
              this.isWaitingCode = true;

              const timer = setInterval(() => {
                if (--this.waitingCodeTime <= 0) {
                  this.isWaitingCode = false;
                  clearInterval(timer);
                }
              }, 1000);
            })
            .catch(error => {
              this.$message.error(
                error.message || "获取验证码出现错误，请重试"
              );
            });
        }
      });
    },

    submit() {
      this.$refs.form.validate(isPass => {
        if (isPass) {
          this.axios
            .post("register", this.form)
            .then(res => {
              this.$message.success("注册成功，现在带你回到登录页");
              this.$router.push({ path: "/sigin" });
            })
            .catch(error => {
              this.$message.error(error.message || "注册时发生了错误，请重试");
            });
        }
      });
    }
  },
  data() {
    const validateName = _.debounce((rule, value, callback) => {
      this.axios
        .get("validate", {
          params: { form: "register_user", name: value }
        })
        .then(res => {
          callback();
        })
        .catch(error => {
          callback(_.first(error.data).message);
        });
    }, 500);

    const validateMail = _.debounce((rule, value, callback) => {
      this.axios
        .get("validate", {
          params: { form: "register_user", mail: value }
        })
        .then(res => {
          callback();
        })
        .catch(error => {
          callback(_.first(error.data).message);
        });
    }, 500);

    return {
      isWaitingCode: false,
      waitingCodeTime: 0,
      form: {
        name: "",
        code: ""
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
          },
          {
            trigger: "change",
            validator: validateName
          }
        ],
        mail: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "change"
          },
          {
            min: 3,
            max: 50,
            message: "长度在 6 到 50 个字符",
            trigger: "change"
          },
          {
            pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
            message: "格式不正确",
            trigger: "change"
          },
          {
            validator: validateMail,
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
        ],
        retryPassword: [
          {
            required: true,
            message: "请再次输入密码",
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
          },
          {
            validator: (rule, value, callback, source) => {
              if (value !== this.form.password) {
                callback(new Error("两次输入密码不一致"));
              } else {
                callback();
              }
            }
          }
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "change"
          },
          {
            pattern: /^\d+$/,
            message: "只能输入数字",
            trigger: "change"
          },
          {
            min: 6,
            max: 6,
            message: "请输入六位数字",
            trigger: "change"
          }
        ]
      }
    };
  }
};
</script>

