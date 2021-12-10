import { openBlock, createBlock, Transition, withCtx, renderSlot } from 'vue';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var script = {
  name: 'CustomTransition',
  emits: ['before-enter', 'before-transition', 'after-enter', 'after-transition'],
  props: {
    name: String,
    appear: Boolean
  },
  computed: {
    name_: function name_() {
      return "vc-".concat(this.name || 'none');
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      this.$emit('before-enter', el);
      this.$emit('before-transition', el);
    },
    afterEnter: function afterEnter(el) {
      this.$emit('after-enter', el);
      this.$emit('after-transition', el);
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: $options.name_,
    appear: $props.appear,
    onBeforeEnter: $options.beforeEnter,
    onAfterEnter: $options.afterEnter
  }, {
    default: withCtx(function () {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
}

var css_248z = ".vc-none-enter-active,\r\n.vc-none-leave-active {\r\n  transition-duration: 0s;\n}\n.vc-fade-enter-active,\r\n.vc-fade-leave-active,\r\n.vc-slide-left-enter-active,\r\n.vc-slide-left-leave-active,\r\n.vc-slide-right-enter-active,\r\n.vc-slide-right-leave-active,\r\n.vc-slide-up-enter-active,\r\n.vc-slide-up-leave-active,\r\n.vc-slide-down-enter-active,\r\n.vc-slide-down-leave-active,\r\n.vc-slide-fade-enter-active,\r\n.vc-slide-fade-leave-active {\r\n  transition: opacity var(--slide-duration) var(--slide-timing),\r\n    -webkit-transform var(--slide-duration) var(--slide-timing);\r\n  transition: transform var(--slide-duration) var(--slide-timing),\r\n    opacity var(--slide-duration) var(--slide-timing);\r\n  transition: transform var(--slide-duration) var(--slide-timing),\r\n    opacity var(--slide-duration) var(--slide-timing),\r\n    -webkit-transform var(--slide-duration) var(--slide-timing);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  pointer-events: none;\n}\n.vc-none-leave-active,\r\n.vc-fade-leave-active,\r\n.vc-slide-left-leave-active,\r\n.vc-slide-right-leave-active,\r\n.vc-slide-up-leave-active,\r\n.vc-slide-down-leave-active {\r\n  position: absolute !important;\r\n  width: 100%;\n}\n.vc-none-enter-from,\r\n.vc-none-leave-to,\r\n.vc-fade-enter-from,\r\n.vc-fade-leave-to,\r\n.vc-slide-left-enter-from,\r\n.vc-slide-left-leave-to,\r\n.vc-slide-right-enter-from,\r\n.vc-slide-right-leave-to,\r\n.vc-slide-up-enter-from,\r\n.vc-slide-up-leave-to,\r\n.vc-slide-down-enter-from,\r\n.vc-slide-down-leave-to,\r\n.vc-slide-fade-enter-from,\r\n.vc-slide-fade-leave-to {\r\n  opacity: 0;\n}\n.vc-slide-left-enter-from,\r\n.vc-slide-right-leave-to,\r\n.vc-slide-fade-enter-from.direction-left,\r\n.vc-slide-fade-leave-to.direction-left {\r\n  -webkit-transform: translateX(var(--slide-translate));\r\n          transform: translateX(var(--slide-translate));\n}\n.vc-slide-right-enter-from,\r\n.vc-slide-left-leave-to,\r\n.vc-slide-fade-enter-from.direction-right,\r\n.vc-slide-fade-leave-to.direction-right {\r\n  -webkit-transform: translateX(calc(-1 * var(--slide-translate)));\r\n          transform: translateX(calc(-1 * var(--slide-translate)));\n}\n.vc-slide-up-enter-from,\r\n.vc-slide-down-leave-to,\r\n.vc-slide-fade-enter-from.direction-top,\r\n.vc-slide-fade-leave-to.direction-top {\r\n  -webkit-transform: translateY(var(--slide-translate));\r\n          transform: translateY(var(--slide-translate));\n}\n.vc-slide-down-enter-from,\r\n.vc-slide-up-leave-to,\r\n.vc-slide-fade-enter-from.direction-bottom,\r\n.vc-slide-fade-leave-to.direction-bottom {\r\n  -webkit-transform: translateY(calc(-1 * var(--slide-translate)));\r\n          transform: translateY(calc(-1 * var(--slide-translate)));\n}\r\n";
styleInject(css_248z);

script.render = render;

export default script;
