import { openBlock, createBlock, createVNode, mergeProps, Fragment, renderList, toDisplayString } from 'vue';

var script = {
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    options: Array,
    modelValue: null
  }
};

var _hoisted_1 = {
  class: "vc-select"
};

var _hoisted_2 = /*#__PURE__*/createVNode("div", {
  class: "vc-select-arrow"
}, [/*#__PURE__*/createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/createVNode("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("select", mergeProps(_ctx.$attrs, {
    value: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }), [(openBlock(true), createBlock(Fragment, null, renderList($props.options, function (option) {
    return openBlock(), createBlock("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, toDisplayString(option.label), 9, ["value", "disabled"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16, ["value"]), _hoisted_2]);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".vc-select {\r\n  position: relative;\r\n}\r\n  .vc-select select {\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    display: block;\r\n    -webkit-appearance: none;\r\n            appearance: none;\r\n    width: 52px;\r\n    height: 30px;\r\n    font-size: var(--text-base);\r\n    font-weight: var(--font-medium);\r\n    text-align: left;\r\n    background-color: var(--gray-200);\r\n    border: 2px solid;\r\n    border-color: var(--gray-200);\r\n    color: var(--gray-900);\r\n    padding: 0 20px 0 8px;\r\n    border-radius: var(--rounded);\r\n    line-height: var(--leading-tight);\r\n    text-indent: 0px;\r\n    cursor: pointer;\r\n    -moz-padding-start: 3px;\r\n  }\r\n  .vc-select select:hover {\r\n      color: var(--gray-600);\r\n    }\r\n  .vc-select select:focus {\r\n      outline: 0;\r\n      border-color: var(--accent-400);\r\n      background-color: var(--white);\r\n    }\r\n  .vc-select-arrow {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  padding: 0 4px 0 0;\r\n  color: var(--gray-500);\r\n}\r\n  .vc-select-arrow svg {\r\n    width: 16px;\r\n    height: 16px;\r\n    fill: currentColor;\r\n  }\r\n  .vc-is-dark select {\r\n    background: var(--gray-700);\r\n    color: var(--gray-100);\r\n    border-color: var(--gray-700);\r\n  }\r\n  .vc-is-dark select:hover {\r\n      color: var(--gray-400);\r\n    }\r\n  .vc-is-dark select:focus {\r\n      border-color: var(--accent-500);\r\n      background-color: var(--gray-800);\r\n    }\r\n";
styleInject(css_248z);

script.render = render;

export default script;
