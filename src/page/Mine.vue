<template>
  <div class="body">
    <header-component />

    <div class="content">
      <div class="title">
        我的简历
      </div>
      <el-card v-for="resume in resumes" :key="resume.id" shadow="hover">
        <header> {{resume.name}}</header>
        <main> {{resume.job}} - {{resume.city}}</main>
        <footer>
          <time class="time">{{ resume.modifyTime }}</time>
          <el-button icon="edit"></el-button>
        </footer>
      </el-card>

    </div>
    <div class="footer">
      <div class="mutual">
        <el-button type="primary" round @click="create()">制作简历</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
export default {
  name: "Mine",
  components: { HeaderComponent },
  data() {
    return {
      resumes: [],
      isSigined: false
    };
  },
  created() {
    //  if (localStorage.user) {
    //   this.isSigined = true;
    //}

    this.axios
      .get("resume", this.form)
      .then(res => {
        this.resumes = res.data;
      })
      .catch(error => {
        this.messageHandler = this.$message.error({
          message: error.message || "获取简历时发生了错误",
          duration: 0
        });
      });
  },
  methods: {
    onSigout() {
      localStorage.clear();
      // this.isSigined = false;
      this.$bus.$emit("user:afterSigoutSuccess");
    },
    create(){
      this.$router.push({
        path:'/editor'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/variables.scss";
.body {
  background: #fcfefe;
  height: 100vh;
  padding: 0;

  .content {
    margin-top: 80px;

    .title {
      font-size: 28px;
      color: $auxiliary-text-color;
      padding: 24px 16px 16px 16px;
    }

    .el-card {
      display: inline-block;
      min-width: 120px;
      min-height: 80px;
      max-width: 240px;
      max-height: 200px;
      margin-left: 12px;
      margin-top: 12px;
      &:first-of-type {
        margin-left: 12px;
      }

      header {
        font-size: 24px;
        font-weight: bold;
        color: $primary-text-color;
      }
      main {
        font-size: 14px;
        color: $summary-text-color;
        margin-top: 6px;
      }
      footer {
        margin-top: 9px;
        .time {
          font-size: 9px;
          color: $auxiliary-text-color;
        }
      }
    }
  }

  .footer {
    position: fixed;
    width: 100%;
    bottom:80px;

    .mutual {
      text-align: center;
    }
  }
}
</style>
