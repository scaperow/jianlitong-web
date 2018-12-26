<template>
  <div class="line">
    <label @keydown="onKeydown" class="name" :contenteditable="allowEditField" v-show="showField" @input="onChangeNameThorttle">{{field.title}}</label>
    <span @keydown="onKeydown" @input="onChangeValueThorttle" class="value" :data-placeholder="showField?('点击填写'):('点击填写'+field.title)" :contenteditable="allowEditContent">{{field.value}}</span>
    <control-editor ref="editor" :is-keeping="isControlKeeping">
      <div slot="operate-small">
        <i class="fa fa-remove " style="background:red" aria-hidden="true" @click="onClickRemove()" v-if="allowRemove"></i>
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
  name: "PairControl",
  components: { ControlEditor, Draggable },
  props: {
    field: {
      type: Object
    },
    allowEditField: {
      type: Boolean,
      default: true
    },
    allowEditContent: {
      type: Boolean,
      default: true
    },
    showField: {
      type: Boolean,
      default: true
    },
    order: {
      type: Number,
      default: -1
    },
    isDragging: {
      type: Boolean,
      default: false
    },
    allowRemove: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      model: {},
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
        field: this.field,
        content: this.content
      });
    },
    onChangeField($event) {
      this.$emit("valueChange", {
        field: {
          title: this.field.title,
          value: $event.target.innerText
        }
      });

      this.$emit("change", {
        field: {
          title: this.field.title,
          value: $event.target.innerText
        }
      });
    },
    onChangeName($event) {
      this.$emit("nameChange", {
        field: {
          title: $event.target.innerText,
          value: this.field.value
        }
      });

      this.$emit("change", {
        field: {
          title: $event.target.innerText,
          value: this.field.value
        }
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

