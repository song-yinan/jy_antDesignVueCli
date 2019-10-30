/**
 * 整合文件
 */

import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import state from "./state";
// // 每次通过mutation去修改state的时候，会打日志
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

// 在调用webpack编译的时候，如果是npm run dev时NODE_ENV是dev，
// 如果是npm run build时NODE_ENV是production
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state,
  // vuex的严格模式，state的修改是否来源于mutations，否会报警告
  strict: debug
  // plugins: debug ? [createLogger()] : []
});
