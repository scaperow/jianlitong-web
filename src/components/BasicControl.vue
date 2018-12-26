<template>

  <section class="detail" :class="{'unactive':$blockModel.isUnactive}">
    <header :style="{display:$blockModel.isHideTitle?'none':'block'}">
      基本信息
    </header>
    <main>
      <draggable @start="onStartDrag()" @end="handlePairMoved" :option="{group:'detail',handle: '.drag-button',animation: 300,ghostClass: 'sortable-ghost'}">
        <!--
        <div>

          <pair @change="onChangeField($event,field)" :is-dragging="isDragging" :field='$model[field]' @remove="onRemoveField(field)"></pair>
        </div>
        -->
        <component @change="onChangeField($event,model,field)" v-for="(field,index) in fields" :key="index" :is="editors[field].componentName" :option="editors[field].option" :model="$model[field]"></component>
      </draggable>
    </main>
    <control-editor ref="editor">
      <div slot="operate" class="operate">
        <el-popover placement="bottom-start" title="模块设置" width="200" trigger="click" @hide="onSettingClose()">
          <div>
            <div>
              <el-switch v-model="$blockModel.isShowTitle" active-text="隐藏模块" inactive-text="显示模块">
              </el-switch>
            </div>
            <div>
              <el-switch v-model="$blockModel.isShowTitle" active-text="隐藏标题" inactive-text="显示标题">
              </el-switch>
            </div>
            <div>
              <el-button size="mini" type="primary" @click="onClickReverField()">恢复隐藏字段</el-button>
            </div>
            <div>
            </div>
            <div></div>
            <div></div>
          </div>
          <i class="fa fa-cog" slot="reference" aria-hidden="true" @click="onClickSetting()"></i>
        </el-popover>
        <i class="fa fa-plus " aria-hidden="true" @click="onCreateField()"></i>

      </div>
    </control-editor>
  </section>
</template>
<script>
import * as _ from "lodash";
import Draggable from "vuedraggable";
import ControlEditor from "./ControlEditor";
import Pair from "../components/PairControl";
import TextEditor from "../components/TextEditor";
import SelectEditor from "../components/SelectEditor";
import DateEditor from "../components/DateEditor";
import RadioEditor from "../components/RadioEditor";
export default {
  name: "Editor",
  props: {
    fields: {
      type: Array,
      default: () => {
        return [
          "name",
          "gendar",
          "jobState",
          "needNewJob",
          "tel",
          "birthday",
          "mail",
          "introduction",
          "summary",
          "nation",
          "politicsStatus"
        ];
      }
    },
    model: {
      type: Object,
      default: () => {
        return {};
      }
    },
    viewModel: {
      type: Object,
      default: () => {
        return {};
      }
    },
    blockModel: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    Pair,
    Draggable,
    ControlEditor,
    TextEditor,
    SelectEditor,
    DateEditor,
    RadioEditor
  },
  data() {
    return {
      $model: this.model,
      $viewModel: this.viewModel,
      $blockModel: this.blockModel,
      isDragging: false,
      editors: {}
    };
  },
  created() {
    this.$model = Object.assign({}, this.model);
    this.$viewModel = Object.assign({}, this.viewModel);
    this.$blockModel = Object.assign({}, this.blockModel);

    let isModelChanged = false;
    let isViewModelChange = false;

    _.each(this.fields, field => {
      if (_.isEmpty(this.$viewModel[field])) {
        this.$viewModel[field] = {};
        isModelChanged = true;
      }

      if (_.isEmpty(this.$model[field])) {
        this.$model[field] = {};
        isViewModelChange = true;
      }
    });

    /*
    "name",
    "gendar",
    "jobState",
    "needNewJob",
    "tel",
    "mail",
    "introduction",
    "summary",
    "nation",
    "politicsStatus"
    */

    _.each(this.fields, field => {
      var editor = {
        componentName: "TextEditor"
      };

      switch (field) {
        case "jobState":
          editor = {
            componentName: "SelectEditor",
            option: {
              selection: [
                {
                  title: "在职",
                  value: 1
                },
                {
                  title: "离职",
                  value: 2
                }
              ]
            }
          };
          break;

        case "needNewJob":
          editor = {
            componentName: "RadioEditor",
            option: {
              selection: [
                {
                  title: "是",
                  value: 1
                },
                {
                  title: "否",
                  value: 2
                }
              ]
            }
          };
          break;

        case "birthday":
          editor = {
            componentName: "DateEditor"
          };
          break;

        case "introduction":
        case "summary":
          editor = {
            componentName: "HtmlEditor"
          };
          break;

        case "nation":
          break;

        case "politicsStatus":
          editor = {
            componentName: "SelectEditor",
            option: {
              selection: [
                {
                  title: "无",
                  value: 0
                },
                {
                  title: "团员",
                  value: 1
                },
                {
                  title: "党员",
                  value: 2
                }
              ]
            }
          };
          break;

        default:
          break;
      }

      this.editors[field] = editor;
    });

    if (isModelChanged) {
      this.$emit("modelChange", this.$model);
    }

    if (isViewModelChange) {
      this.$emit("viewChange", this.$viewModel);
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handlePairMoved($event, $data) {
      this.isDragging = false;
    },
    onClickSetting() {
      this.$refs.editor.keepActive = true;
    },
    onSettingClose() {
      this.$refs.editor.keepActive = false;
    },
    onClickReverField() {},
    onRemoveField(fieldName) {
      this.$nextTick(() => {
        this.$viewModel[fieldName].isUnactive = true;
      });
      this.$emit("viewChange", this.$viewModel);
    },
    onStartDrag() {
      this.isDragging = true;
    },
    onChangeField($event, model, fieldName) {
      this.$model[fieldName].title = $event.title;
      this.$model[fieldName].value = $event.value;
      this.$emit("change", this.$model);
    },
    onCreateField() {
      let fieldValue = null;
      var fieldName = null;
      var index = 0;
      do {
        fieldName = `custom${index === 0 ? "" : index}`;
        if (
          _.has(this.$model, fieldName) &&
          !_.isEmpty(this.$model[fieldName])
        ) {
          fieldValue = this.$model[fieldName].value;
        }

        index++;

        if (_.isEmpty(fieldValue)) {
          break;
        }
      } while (_.isEmpty(fieldValue));

      this.$model[fieldName] = {
        title: "自定义",
        value: "自定义内容"
      };
      this.fields.push(fieldName);
    },
    getComponent(fieldName) {
      let componentName = "string";

      switch (fieldName) {
        case "":
          break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../style/variables.scss";
$first-color: #9dc3e6;
$border-color: #c3c3c3;
$first-text-color: #333;
$second-text-color: #999;
$box-color: $border-color;

section.detail {
  &.unactive {
    display: none;
  }
}
</style>
