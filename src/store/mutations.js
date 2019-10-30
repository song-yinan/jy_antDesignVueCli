/**
 * 提交修改变量的js
 */

// import(引入)*(所有export属性)as(到)types(types变量)
// 变量统一放到mutation-types中
import * as types from "./mutation-types";
;

const mutations = {
  // 这是一个方法  [types.SET_USER]是方法名  state是状态树  userinfo是提交mutations时传的参数
  [types.SET_USERINFO](state, userinfo) {
    state.userinfo = userinfo;
  }
 
};

export default mutations;