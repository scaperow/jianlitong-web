<template>
  <div class="control-editor" :class="{'isActive':isActive}">
    <div class="operate-small">
      <slot name="operate-small">
      </slot>
    </div>
    <div class="operate">
      <slot name="operate"></slot>
    </div>
  </div>
</template>
<style lang="scss" >
@import "../style/variables.scss";
.control-editor {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .operate {
    visibility: hidden;
    text-align: right;
    padding: 3px;

    .fa {
      pointer-events: all;
      border-radius: 24px;
      height: 24px;
      width: 24px;
      color: #fff;
      background: $--color-primary;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      cursor: pointer;
    }
  }

  .operate-small {
    visibility: hidden;
    text-align: right;

    .fa {
      pointer-events: all;
      border-radius: 24px;
      height: 24px;
      width: 24px;
      color: #fff;
      background: $--color-primary;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      cursor: pointer;
    }
  }

  &.isActive {
    border: dotted 2px $--color-primary;
    .operate {
      visibility: visible;
    }

    .operate-small {
      visibility: visible;
    }
  }
}
</style>
<script>
export default {
  name: "ControlEditor",
  props: {
    control: {},
    isKeeping: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  created() {},
  mounted($el) {
    this.$nextTick(() => {
      const parentElement = this.control || this.$el.parentElement;
      parentElement.style.position = "relative";
      parentElement.addEventListener("mouseenter", () => {
        //this.$el.className = "control-editor isActive";
        if (!this.isKeeping) {
          this.isActive = true;
        }
      });
      parentElement.addEventListener("mouseleave", () => {
        //this.$el.className = "control-editor";
        if (!this.isKeeping) {
          this.isActive = false;
        }
      });
    });
  }
};
</script>


