<template>
  <div class="container">
    <a href="#" class="title">Brendan Bax</a>
    <div class="menu pull-right">
      <router-link :to="{ path: 'sigin'}" v-if="isSigined === false">
        <a class="button" href="#">登录</a>
      </router-link>
      <router-link :to="{ path: 'register'}" v-if="isSigined === false">
        <a class="button" href="#">注册</a>
      </router-link>

      <router-link :to="{ path: 'mine'}" v-if="isSigined === true">
        <a class="button" hre="#">我的简历</a>
      </router-link>

      <a v-if="isSigined === true" class="button" href="#" @click="onSigout()">退出登录</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/variables.scss";

.container {
  width: 100%;
  height: 80px;
  position: fixed;
  animation: drop-in 0.3s 1s forwards;
  line-height: 80px;
  top: 0;
  background-color: $--color-primary;
  color: $--color-white;
  z-index: 999;

  .title {
    font-size: 26px;
    padding-left: 16px;
    font-weight: bold;
  }

  .menu {
    font-size: 14px;
    padding-right: 16px;
  }
}
</style>

<script>
import _ from "lodash";
export default {
  name: "HeaderComponent",
  data() {
    return {
      isSigined: false
    };
  },
  created() {
    try {
      this.isSigined = !_.isEmpty(JSON.parse(sessionStorage.user));
    } catch (e) {}
  },
  methods: {
    onSigout() {
      sessionStorage.clear();
      this.$bus.$emit("user:afterSigout");
      this.$route.push({
        path: "/"
      });
    }
  }
};
</script>

