<template>
  <div class="line">
    <label @keydown="onKeydown" class="name" :contenteditable="$option.content.editabled" v-show="$option.title.display" @input="onChangeNameThorttle">{{model.title}}</label>
    <span @keydown="onKeydown" @input="onChangeValueThorttle" class="value" :data-placeholder="$option.title.display?('点击填写'):('点击填写'+model.title)" :contenteditable="$option.content.editabled">{{model.value}}</span>
    <control-editor ref="editor" :is-keeping="isControlKeeping">
      <div slot="operate-small">
        <i class="fa fa-remove " style="background:red" aria-hidden="true" @click="onClickRemove()" v-if="$option.removeable"></i>
        <i class="fa fa-arrows drag-button" style="cursor:move" aria-hidden="true"></i>
      </div>
    </control-editor>
  </div>
</template>
<style lang="scss">
@import "../style/variables.scss";
div.line {
  span.value {
    &:empty::before {
      content: attr(data-placeholder);
      color: $--color-text-placeholder;
      cursor: text;
    }
  }
}
</style>
<script>
import ControlEditor from "./ControlEditor";
import Draggable from "vuedraggable";
export default {
  name: "TextEditor",
  components: { ControlEditor, Draggable },
  props: {
    dragging: {
      type: Boolean,
      default: false
    },
    model: {
      type: Object,
      default: {
        title: "",
        content: ""
      }
    },
    option: {
      type: Object
    }
  },
  data() {
    return {
      $option: null,
      isControlKeeping: false,
      grapesEditor: null,
      resumes: [],
      isSigined: false,
      onChangeValueThorttle: null,
      onChangeNameThorttle: null
    };
  },
  watch: {
    isDragging: function(val) {
      if (val) {
        this.isControlKeeping = true;
      } else {
        this.isControlKeeping = false;
      }
    }
  },
  created() {
    this.$option = Object.assign(
      {
        content: {
          editabled: true
        },
        title: {
          editabled: true,
          display: true
        },
        removeable: true
      },
      this.option
    );
    this.onChangeValueThorttle = _.throttle(this.onChangeField, 3000, {
      leading: false
    });

    this.onChangeNameThorttle = _.throttle(this.onChangeName, 3000, {
      leading: false
    });
  },
  mounted() {},
  methods: {
    onClickRemove() {
      this.$emit("remove", {
        title: this.model.title,
        content: this.content
      });
    },
    onChangeField($event) {
      this.$emit("valueChange", {
        title: this.model.title,
        value: $event.target.innerText
      });

      this.$emit("change", {
        title: this.model.title,
        value: $event.target.innerText
      });
    },
    onChangeName($event) {
      this.$emit("nameChange", {
        title: $event.target.innerText,
        value: this.model.value
      });

      this.$emit("change", {
        title: $event.target.innerText,
        value: this.model.value
      });
    },
    onKeydown($event) {
      // Break enter key
      if (parseInt($event.keyCode) === 13) {
        $event.preventDefault();
        return false;
      }
    }
  }
};
</script>

