/**
 组件之间事件调用
 */
import { eventName } from "./busConfig";
const VueBus = Vue => {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args);
      },
      on(event, callback) {
        this.$on(event, callback);
      },
      off(event, callback) {
        this.$off(event, callback);
      }
    }
  });
  Bus.config = eventName;
  Vue.prototype.$bus = Bus;
};
export default VueBus;
