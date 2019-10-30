import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const RouterFile = {
  baseRouter: "./base/baseRouter"
};
export default new Router({
  routes: (f => require(f + ""))(RouterFile["baseRouter"]).default
});
