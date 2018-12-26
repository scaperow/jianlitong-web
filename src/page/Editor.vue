  <template>
  <div class="resume-editor">
    <nav>
      <div class="left">
        <a class="logo"></a>
      </div>
      <center>
        <a @click="changeModule()">切换模板</a>
        <a @click="setStyle()">风格设置</a>
        <a @click="exportResume()">导出简历</a>
        <a @click="importResume()">导入简历</a>
        <a @click="download()">下载</a>
        <a @click="share()">分享</a>
      </center>
      <div class="right">I'm right</div>
    </nav>
    <aside>
      <div class="aside-body">
        <div class="control-collection" v-show="selectRegionName ==='basics'">
          <div class="control">
            <el-input type="text" v-model="basicsModel.name" placeholder="姓名"></el-input>
          </div>
          <div class="control">
            <el-cascader   :options="options2"
  @active-item-change="handleItemChange"
  :props="props"></el-cascader>

          </div>
          <div class="control">
            <el-input type="text" placeholder="邮箱" v-model="basicsModel.email"></el-input>
          </div>
          <div class="control">
            <el-input type="text" placeholder="电话" v-model="basicsModel.phone"></el-input>
          </div>
          <div class="control">
            <el-input type="text" placeholder="籍贯"></el-input>
          </div>
          <div class="control">
            <el-input type="text" placeholder="住址"></el-input>
          </div>
          <div class="control">
            <medium-editor :text="myText" :options="options" custom-tag="div" @editorCreated="onEditorCreated" class="medium-editor-element" v-bind:class="{active:isSummaryFocus}"></medium-editor>
          </div>
        </div>

        <div class="control-collection" v-show="selectRegionName ==='work'">
          <div v-show="isNewWork" v-if="isNewWork">

            <div class="control">
              <el-input type="text" v-model="workModel.company" placeholder="公司名称"></el-input>
            </div>
            <div class="control">
              <el-date-picker v-model="workModel.startDate" placeholder="入职时间"></el-date-picker>
              <el-date-picker v-model="workModel.endDate" placeholder="离职时间"></el-date-picker>
            </div>
            <div class="control">
            </div>
            <div class="control">
              <el-input type="text" placeholder="职位"></el-input>
            </div>
            <div class="control">
              <el-input type="textarea" v-model="workModel.summary" placeholder="工作内容"></el-input>
            </div>
            <div class="control">
              <el-input type="textarea" v-model="workModel.summary" placeholder="我的成就"></el-input>
            </div>
            <div class="action">
              <button class="primary" @click="saveWork">保存</button>
              <button>取消</button>
            </div>
          </div>
          <div v-show="!isNewWork">
            <div class="action">
              <button class="primary" @click="createWork">新增</button>
            </div>
          </div>
        </div>

      </div>
      <main>
        <article></article>
        <!--
                                                              <div class="content">
                                                                <div class="resume">
                                                                  <section class="summary">
                                                                    <h2>ABOUT MYSELF</h2>
                                                                    <p style="margin-top:24px">
                                                                      Apply for Assistant or Administration job
                                                                      Proficient in MS Office Application (Word, Excel, PPT, Outlook)
                                                                      Good at multi tasking and working in fa st-paced environment
                                                                      Self-motivated, well-organized and detail-oriented
                                                                    </p>
                                                                    <div style="position:absolute; right:46px;top:46px">
                                                                      <avatar :model="model"></avatar>
                                                                    </div>
                                                                  </section>
                                                                  <div class="block-section detail"></div>
                                                                </div>
                                                              </div>
                                                                -->
        <div class="sub-nav">
          <span @click="selectRegion('basics')" :class="{'active':selectRegionName === 'basics'}">基本信息</span>
          <span @click="selectRegion('work')" :class="{'active':selectRegionName === 'work'}">工作经历</span>
          <span @click="selectRegion('publications')" :class="{'active':selectRegionName === 'publications'}">项目经验</span>
        </div>
      </main>
    </aside>
  </div>
</template>
<script>
import Draggable from "vuedraggable";
import HeaderComponent from "../components/HeaderComponent";
import Basic from "../components/BasicControl";
import Avatar from "../components/AvatarControl";
import Block from "../components/BlockControl";
import Handlebars from "handlebars/runtime";
import MediumEditor from "vue2-medium-editor";
import DatepickerLocal from "vue-datepicker-local";
import "../assets/medium-editor/medium-editor.css";
import "../assets/medium-editor/themes/beagle.css";

export default {
  name: "Editor",
  components: {
    HeaderComponent,
    Avatar,
    Block,
    Draggable,
    Basic,
    MediumEditor,
    DatepickerLocal
  },
  data() {
    return {
      isNewExperience: false,
      isNewWork: false,
      selectRegionName: 'basics',
      experienceModelNewly: null,
      workModel: {},
      basicsModel: { region: {} },
      isSummaryFocus: true,
      myText: "abc",
      options: {
        placeholder: {
          /* This example includes the default options for placeholder,
           if nothing is passed this is what it used */
          text: "自我评价",
          hideOnClick: true
        },
        toolbar: {
          /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
          allowMultiParagraphSelection: true,
          buttons: [
            "bold",
            "italic",
            "underline",
            "anchor",
            "h2",
            "h3",
            "quote",
            "orderedlist",
            "unorderedlist",
            "removeFormat"
          ],
          diffLeft: 0,
          diffTop: -10,
          firstButtonClass: "medium-editor-button-first",
          lastButtonClass: "medium-editor-button-last",
          relativeContainer: null,
          standardizeSelectionStart: false,
          static: false,
          /* options which only apply when static is true */
          align: "center",
          sticky: false,

          updateOnEmptySelection: false
        }
      },
      time: new Date(),
      viewModel: {
        education: {
          title: "学历",
          type: "string"
        },
        gender: {
          title: "性别",
          type: "string",
          enum: ["男", "女"]
        },
        jobState: {
          title: "工作状态",
          type: "string",
          enum: ["在职", "离职"]
        },
        needNewJob: {
          title: "是否要换工作",
          type: "string",
          format: "checkbox",
          enum: ["是", "否"]
        },
        tel: {
          title: "电话",
          type: "string"
        },
        birthday: {
          title: "出生年月"
        },
        mail: {
          title: "邮箱",
          type: "string"
        },
        introduction: {
          title: "自我介绍",
          type: "string",
          format: "textarea"
        },
        summary: {
          format: "textarea",
          title: "自我简介",
          type: "string"
        },
        nation: {
          type: "string",
          title: "民族"
        },
        politicsStatus: {
          type: "string",
          title: "政治面貌",
          format: "select"
        },
        careers: {
          type: "array",
          title: "工作经历",
          items: {
            type: "object",
            title: "经历",
            properties: {
              type: "object",
              title: "经历",
              company: {
                title: "公司名称",
                type: "string",
                order: 0
              },
              position: {
                title: "职位",
                type: "string",
                order: 1
              },
              performance: {
                title: "业绩",
                type: "string",
                format: "textarea",
                order: 2
              },
              department: {
                title: "部门",
                type: "string",
                order: 3
              },
              industry: {
                title: "行业",
                type: "string",
                order: 4
              },
              works: {
                title: "工作内容",
                type: "string",
                format: "textarea",
                order: 5
              },

              salary: {
                title: "薪资",
                type: "string"
              }
            }
          }
        },
        jobIntension: {
          type: "array",
          title: "求职意向",
          items: {
            type: "object",

            title: "意向",
            properties: {
              type: "object",
              title: "意向",
              position: {
                title: "期望职位",
                type: "string"
              },
              minSalary: {
                type: "number",
                title: "最低薪资要求(单位:千)"
              },
              maxSalary: {
                type: "number",
                title: "最高薪资要求(单位:千)"
              },
              location: {
                type: "string",
                title: "就职城市"
              },
              trade: {
                type: "string",
                title: "行业"
              }
            }
          }
        },
        experience: {
          type: "array",
          title: "项目经验",
          items: {
            type: "object",
            title: "经验",
            properties: {
              type: "object",
              title: "经验",
              name: {
                title: "项目名称",
                type: "string"
              },
              role: {
                title: "担任角色",
                type: "string"
              },
              external: {
                title: "附加内容",
                type: "array",
                items: {}
              },
              startTime: {
                title: "开始时间",
                type: "string"
              },
              finishTime: {
                title: "结束时间",
                type: "string"
              },
              description: {
                title: "描述",
                type: "string",
                format: "textarea"
              },
              url: {
                title: "链接",
                type: "string"
              },
              performance: {
                title: "业绩",
                type: "string",
                format: "textarea"
              }
            }
          }             
        }
      },
      model: {
        name: {
          title: "姓名",
          type: "string",
          value: "Ben"
        },
        education: {
          title: "学历",
          type: "string"
        },
        gender: {
          title: "性别",
          type: "string",
          enum: ["男", "女"]
        },
        jobState: {
          title: "工作状态",
          type: "string",
          enum: ["在职", "离职"]
        },
        needNewJob: {
          title: "是否要换工作",
          type: "string",
          format: "checkbox",
          enum: ["是", "否"]
        },
        tel: {
          title: "电话",
          type: "string"
        },
        mail: {
          title: "邮箱",
          type: "string"
        },
        introduction: {
          title: "自我介绍",
          type: "string",
          format: "textarea"
        },
        birthday: {
          value: "2018-10-11"
        },
        summary: {
          format: "textarea",
          title: "自我简介",
          type: "string"
        },
        nation: {
          type: "string",
          title: "民族"
        },
        politicsStatus: {
          type: "string",
          title: "政治面貌",
          format: "select"
        },
        careers: {
          type: "array",
          title: "工作经历",
          items: {
            type: "object",
            title: "经历",
            properties: {
              type: "object",
              title: "经历",
              company: {
                title: "公司名称",
                type: "string",
                order: 0
              },
              position: {
                title: "职位",
                type: "string",
                order: 1
              },
              performance: {
                title: "业绩",
                type: "string",
                format: "textarea",
                order: 2
              },
              department: {
                title: "部门",
                type: "string",
                order: 3
              },
              industry: {
                title: "行业",
                type: "string",
                order: 4
              },
              works: {
                title: "工作内容",
                type: "string",
                format: "textarea",
                order: 5
              },

              salary: {
                title: "薪资",
                type: "string"
              }
            }
          }
        },
        jobIntension: {
          type: "array",
          title: "求职意向",
          items: {
            type: "object",

            title: "意向",
            properties: {
              type: "object",
              title: "意向",
              position: {
                title: "期望职位",
                type: "string"
              },
              minSalary: {
                type: "number",
                title: "最低薪资要求(单位:千)"
              },
              maxSalary: {
                type: "number",
                title: "最高薪资要求(单位:千)"
              },
              location: {
                type: "string",
                title: "就职城市"
              },
              trade: {
                type: "string",
                title: "行业"
              }
            }
          }
        },
        experience: {
          type: "array",
          title: "项目经验",
          items: {
            type: "object",
            title: "经验",
            properties: {
              type: "object",
              title: "经验",
              name: {
                title: "项目名称",
                type: "string"
              },
              role: {
                title: "担任角色",
                type: "string"
              },
              external: {
                title: "附加内容",
                type: "array",
                items: {}
              },
              startTime: {
                title: "开始时间",
                type: "string"
              },
              finishTime: {
                title: "结束时间",
                type: "string"
              },
              description: {
                title: "描述",
                type: "string",
                format: "textarea"
              },
              url: {
                title: "链接",
                type: "string"
              },
              performance: {
                title: "业绩",
                type: "string",
                format: "textarea"
              }
            }
          }
        }
      },
      saveThrottle: null,
      grapesEditor: null,
      resumes: [],
      isSigined: false
    };
  },
  created() {
    //  if (localStorage.user) {
    //   this.isSigined = true;
    //}
  },
  mounted() { },
  methods: {
    saveExperience() {
      this.isNewExperience = false;
    },
    createNewExperience() {
      this.isNewExperience = true;
      this.experienceModelNewly = {};
    },
    saveWork() {
      this.isNewWork = false;
    },
    createWork() {
      this.isNewWork = true;
    },
    selectRegion(regionName) {
      this.selectRegionName = regionName;
    },
    onEditorCreated(editor) {
      editor.subscribe("blur", (event, editable) => {
        // Do some work
        this.isSummaryFocus = false;
      });

      editor.subscribe("focus", (event, editable) => {
        // Do some work
        this.isSummaryFocus = true;
      });
    },
    onSigout() {
      localStorage.clear();
      // this.isSigined = false;
      this.$bus.$emit("user:afterSigoutSuccess");
    },
    handlePairMoved($event, $data) { },
    onChangeBasic($event) {
      this.save($event);
    },
    save(model) {
      if (!this.saveThrottle) {
        this.saveThrottle = _.throttle(model => {
          console.log(model);
        }, 3000);
      }

      this.saveThrottle(model);
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


.sortable-ghost {
  box-shadow: 2px 2px 3px 2px $box-color;
}

.resume-editor {
  display: table;
  background: #ececec;
  height: 100vh;

  nav,
  aside,
  main {
    display: table-cell;
  }

  .sub-nav {
    position: fixed;
    padding-left: 24px;
    top: 80px;
    height: 40px;
    left: 0;

    span {
      background: #999;
      color: #fff;
      border-radius: 20px;
      width: auto;
      padding: 5px 10px;
      cursor: pointer;
      display: none;
      margin-bottom: 12px;
      transition: opacity 0.3s;

      &.active {
        background: #ff0000 !important;
        opacity: 0.8;
        display: block;
      }

      &:hover {
        background: #666;
      }
    }

    &:hover {
      height: auto;
      span {
        display: block;
        opacity: 1;
      }
    }
  }

  nav {
    position: fixed;
    text-align: center;
    top: 0;
    height: 60px;
    width: 100%;
    box-shadow: 2px 2px 6px -3px $border-color;
    background: #fff;
    line-height: 60px;
    min-width: 700px;

    div.left {
      text-align: left;
      float: left;
      padding-left: 32px;

      &::after {
        clear: both;
      }
      a.logo {
        background: url("../assets/logo/64x64.png");
        width: 64px;
        height: 64px;
        display: inline-block;
        padding: 0;
        margin: 0;
      }
    }

    center {
      display: inline-block;
    }

    div.right {
      float: right;
      padding-right: 32px;

      &::after {
        clear: both;
      }
    }

    a {
      color: #333;
      cursor: pointer;
    }
  }

  aside {
    width: 340px;
    min-width: 340px;
    background: #ececec;
    top: 60px;
    box-shadow: 2px 0 6px -3px $border-color;
    overflow-y: auto;
    padding: 120px 0;

    div.aside-body {
      margin: 0 auto;
      width: 320px;
      overflow: hidden;

      .control-collection {
        width: 100%;
        max-width: 340px;
        position: relative;
      }

      .control {
        position: relative;
        margin: 6px 0;
        overflow: hidden;
        &:first-of-type {
          margin-top: 0;
        }
        &:last-child {
          overflow: visible;
        }
        label {
          position: absolute;
          color: #333;
          background: #999;
          font-style: italic;
          right: 0;
          top: 5px;
          bottom: 5px;
          width: 80px;
          line-height: 30px;
          height: 30px;
          text-align: center;
          overflow: hidden;
          font-size: 13px;
          transition: width 0.3s;
          border-right: solid 1px #ececec;
        }

        textarea {
          height: 80px;
          min-height: 80px;
          max-height: 200px;
          min-width: 100%;
          max-width: 100%;


          &+label {
            line-height: 60px;
          }
        }
        el-input,
        textarea {
          display: block;
          padding: 6px;
          border: 0;
          min-height: 40px;
          height: 40px;
          width: 100%;
          transition: padding 0.3s;
          width: 100%;
          box-shadow: 2px 2px 6px -3px $border-color;
          &:focus {
            &+label {
              width: 0;
            }
          }
        }

        div.datepicker>el-input {
          width: 372px;
        }

        textarea {
          height: 120px;
        }

        .medium-editor-element {
          border: none;
          width: 100%;
          margin-bottom: 12px;
          box-shadow: 2px 2px 6px -3px $border-color;
          padding: 6px;
          background: #fff;
          height: 32px;
          overflow: hidden;
          line-height: 32px;
          transition: max-height 0.3s;
          transition: overflow 0.3s;
          max-height: 0;

          &.active {
            line-height: inherit;
            max-height: 300px;
            height: auto;
            overflow-y: auto;
          }
        }
      }

      .action {
        button {
          width: 100%;
          height: 38px;
          box-shadow: 2px 3px 6px -3px $border-color;
          background: #fff;
          outline: 0;
          border: 0;
          margin-bottom: 6px;
          color: #333;
          cursor: pointer;

          &.primary {
            background: $--color-primary;
            color: #fff;
            box-shadow: 0px 3px 3px 0 rgba($--color-primary, 0.5);
          }
        }

        margin-bottom:6px;
      }
    }
  }

  main {
    margin: 24px;
    width: 100vw;
    top: 0;
    background: #fff;
    box-shadow: 2px 2px 6px -3px $border-color;
    text-align: center;

    article {
      text-align: left;
      width: 100%;
      min-width: 480px;
      max-width: 840px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .content {
    margin: auto;
    background: #fff;
    max-width: 800px;

    .resume {
      height: 100%;
      background: #fff;
      text-align: left;

      .summary {
        position: relative;
        background: $first-color;
        color: #fff;
        padding: 58px 260px 58px 58px;
      }

      .block-section {
        margin-left: 58px;
        margin-right: 58px;
      }

      .detail {
        header {
          padding: 12px 0;
          padding-bottom: 3px;
          font-size: 14px;
          color: $first-color;
          border-bottom: dashed 1px $border-color;
        }

        main {
          padding: 12px 0;
          p {
            font-size: 13px;
            width: 45%;
            margin: 0;
            padding: 0;
            display: inline-block;
            line-height: 32px;
            &:last-of-type {
              clear: both;
            }
            label {
              color: $first-text-color;
              font-weight: bold;

              &::after {
                color: $first-color;
                font-weight: bold;
                content: "//";
                margin: 0 12px;
              }
            }

            span {
              color: $second-text-color;
            }
          }

          .line {
            font-size: 13px;
            width: 45%;
            margin: 0;
            padding: 0;
            display: inline-block;
            line-height: 32px;

            label {
              color: $second-text-color;
              &::after {
                color: $first-color;
                font-weight: bold;
                content: "//";
                margin: 0 12px;
              }
            }

            span {
              font-weight: bold;
              color: $first-text-color;
            }
          }
        }
      }
    }
  }

  .footer {
    position: fixed;
    width: 100%;
    bottom: 80px;

    .mutual {
      text-align: center;
    }
  }
}
</style>
