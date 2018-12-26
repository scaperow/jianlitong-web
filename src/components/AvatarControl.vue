<template>
  <div ref="container" class="control container" v-show="isShow">
    <img :class="[shape]" class="avatar " ref="image" :src="avatarUrl" />

    <div ref="avatarOperate" :class="[shape]" class="avatar-operate" @click="changeAvatar()">
      <el-button type="text">
        <i class="fa fa-camera" aria-hidden="true"></i>
        <label>切换照片</label>
      </el-button>
    </div>

    <control-editor :control="$refs.container" :keep-active="isKeepContainerActive">
      <div class="container-operate" slot="operate">
        <el-popover width="267" @hide="onPopoverHidden()" placement="bottom" title="头像风格" trigger="click">

          <div class="avatar-small-holder" :class="{active:shape==='round'}" @click="shape = 'round'"><img class="avatar round" :src="avatarUrl" /></div>
          <div class="avatar-small-holder" :class="{active:shape==='rectangle'}" @click="shape = 'rectangle'"><img class="avatar rectangle" :src="avatarUrl" /></div>
          <div class="avatar-small-holder" :class="{active:shape==='square'}" @click="shape = 'square'"><img class="avatar square" :src="avatarUrl" /></div>

          <i class="fa fa-cog" aria-hidden="true" @click="showPopover()"></i>

        </el-popover>

      </div>
    </control-editor>

    <image-cropper :url="uploadFileUrl" field="avatar" :params="params" :headers="headers" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" v-model="isUploadImage" :width="300" :height="300" img-format="png"></image-cropper>
  </div>
</template>
<style lang="scss" scoped>
@import "../style/variables.scss";

.avatar-small-holder {
  margin-top: 16px;
  height: 80px;
  line-height: 80px;
  width: 80px;
  text-align: center;
  background: #fff;
  margin-right: 9px;
  float: left;
  box-shadow: 0 0 1px #cecece;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background: #f3f3f3;
  }

  &.active {
    background: rgba($--color-primary, 0.5);
  }

  &:last-of-type {
    margin-right: 0;

    &::after {
      content: "";
      clear: both;
    }
  }
  .avatar {
    object-fit: cover;

    &.round {
      border-radius: 80px;
      width: 80px;
      height: 80px;
    }

    &.rectangle {
      width: 60px;
      height: 80px;
    }

    &.square {
      width: 70px;
      height: 70px;
      margin-top: 5px;
    }
  }
}
.container {
  width: 160px;
  height: 160px;
  position: relative;
  .avatar {
    object-fit: cover;
    &.round {
      border-radius: 80px;
      width: 160px;
      height: 160px;
    }
    &.rectangle {
      width: 140px;
      height: 160px;
    }
    &.square {
      width: 160px;
      height: 160px;
    }
  }
}

.container-operate {
  .fa {
  }
}

.avatar-operate {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba($--color-black, 0.3);
  opacity: 1;
  text-align: center;
  cursor: pointer;

  &.round {
    border-radius: 80px;
    width: 160px;
    height: 160px;
    line-height: 160px;
  }
  &.rectangle {
    width: 140px;
    height: 160px;
    line-height: 180px;
  }
  &.square {
    width: 160px;
    height: 160px;
    line-height: 160px;
  }
  label {
    color: $--color-white;
    display: block;
    font-size: 14px;
  }
  .fa {
    font-size: 52px;
    color: $--color-white;
  }
}
</style>
<script>
import ControlEditor from "./ControlEditor";
import ImageCropper from "./ImageCropper/ImageCropper";
export default {
  name: "AvatarControl",
  components: { ControlEditor, ImageCropper },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    model: {
      type: Object,
      required: true
    },
    shape: {
      type: String,
      default: "round"
    },
    keyName: String,
    defaultUrl: {
      type: String,
      default: "https://grapesjs.com/img/team1.jpg"
    }
  },
  data() {
    return {
      uploadFileUrl: "http://localhost:8360/file",
      params: {
        name: "avatar"
      },
      headers: {
        Authorization: sessionStorage.token
      },
      avatarUrl: null,
      isKeepContainerActive: false,
      isUploadImage: false
    };
  },
  created() {
    this.avatarUrl =
      (this.keyName && this.model[keyName]) ||
      this.model.avatar ||
      this.defaultUrl;
  },
  mounted() {
    this.$refs.avatarOperate.addEventListener("mouseenter", () => {
      this.$refs.avatarOperate.style.opacity = 1;
    });

    this.$refs.avatarOperate.addEventListener("mouseleave", () => {
      this.$refs.avatarOperate.style.opacity = 0;
    });
  },
  methods: {
    onPopoverHidden() {
      this.isKeepContainerActive = false;
    },
    showPopover() {
      this.isKeepContainerActive = true;
    },
    changeAvatar() {
      this.isUploadImage = true;
    },
    cropSuccess(imgDataUrl, field) {},
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      this.avatarUrl = jsonData.data.uri;

      (this.keyName &&
        this.model[keyName] &&
        (this.model[keyName] = jsonData.data.uri)) ||
        (this.model.avatar = jsonData.data.uri);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log(status);
    }
  }
};
</script>


