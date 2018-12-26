<template>
  <section class="block-section">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="content"></slot>
    </main>
    <control-editor>
      <div slot="operate"></div>
    </control-editor>
  </section>
</template>
<script>
import ControlEditor from "./ControlEditor";
export default {
  name: "BlockControl",
  components: { ControlEditor },
  props: {},
  data() {
    return {
      model: {},

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
  mounted() {},
  methods: {
    onSigout() {
      localStorage.clear();
      // this.isSigined = false;
      this.$bus.$emit("user:afterSigoutSuccess");
    }
  }
};
</script>

