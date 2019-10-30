<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <router-view class="router-style" />
    </div>
  </a-locale-provider>
</template>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "app",
  data() {
    return {
      zh_CN
    };
  }
};
</script>
<style lang="less" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
  // text-align: center;
  // color: #fff;
}
// 修改css样式
.ant-tooltip {
  z-index: 1 !important;
}
</style>
