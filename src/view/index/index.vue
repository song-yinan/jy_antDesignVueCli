<template>
  <div class="demoIndex">
    <Layout class="top">
      <Header class="header">antDesginVue框架</Header>
    </Layout>
    <Layout class="main">
     
    </Layout>
  
  </div>
</template>
<script>

import { Layout } from "ant-design-vue";

export default {
  name: "index",
  data() {
    return {
    };
  },
  components: {
    Layout
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  }
};
</script>
<style lang="less" >
.demoIndex {
  
}
</style>
