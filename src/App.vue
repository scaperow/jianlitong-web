<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right" // 默认动态路由变化为 slide-right
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style>
Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

/*路由切换动画*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s;
}
.slide-right-enter {
  opacity: 0;
}
.slide-right-leave-active {
  opacity: 10;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-active {
  opacity: 10;
}
</style>
