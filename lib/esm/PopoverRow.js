import { n as _objectSpread2 } from './helpers-4f4a4db8.js';
import { openBlock, createBlock, createVNode, createCommentVNode, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { k as childMixin } from './index-dcbde536.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var script = {
  name: 'PopoverRow',
  mixins: [childMixin],
  props: {
    attribute: Object
  },
  computed: {
    indicator: function indicator() {
      var _this$attribute = this.attribute,
          highlight = _this$attribute.highlight,
          dot = _this$attribute.dot,
          bar = _this$attribute.bar,
          popover = _this$attribute.popover;
      if (popover && popover.hideIndicator) return null;

      if (highlight) {
        var _highlight$start = highlight.start,
            color = _highlight$start.color,
            isDark = _highlight$start.isDark;
        return {
          style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
            color: color,
            isDark: !isDark
          })), {}, {
            width: '10px',
            height: '5px',
            borderRadius: '3px'
          })
        };
      }

      if (dot) {
        var _dot$start = dot.start,
            _color = _dot$start.color,
            _isDark = _dot$start.isDark;
        return {
          style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
            color: _color,
            isDark: !_isDark
          })), {}, {
            width: '5px',
            height: '5px',
            borderRadius: '50%'
          })
        };
      }

      if (bar) {
        var _bar$start = bar.start,
            _color2 = _bar$start.color,
            _isDark2 = _bar$start.isDark;
        return {
          style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
            color: _color2,
            isDark: !_isDark2
          })), {}, {
            width: '10px',
            height: '3px'
          })
        };
      }

      return null;
    }
  }
};

var _hoisted_1 = {
  class: "vc-day-popover-row"
};
var _hoisted_2 = {
  key: 0,
  class: "vc-day-popover-row-indicator"
};
var _hoisted_3 = {
  class: "vc-day-popover-row-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [$options.indicator ? (openBlock(), createBlock("div", _hoisted_2, [createVNode("span", {
    style: $options.indicator.style,
    class: $options.indicator.class
  }, null, 6)])) : createCommentVNode("", true), createVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default", {}, function () {
    return [createTextVNode(toDisplayString($props.attribute.popover ? $props.attribute.popover.label : 'No content provided'), 1
    /* TEXT */
    )];
  })])]);
}

var css_248z = ".vc-day-popover-row {\r\n  --day-content-transition-time: 0.13s ease-in;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  transition: all var(--day-content-transition-time);\n}\n.vc-day-popover-row:not(:first-child) {\r\n    margin-top: 3px;\n}\n.vc-day-popover-row-indicator {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-flex-grow: 0;\r\n      -ms-flex-positive: 0;\r\n          flex-grow: 0;\r\n  width: 15px;\r\n  margin-right: 3px;\n}\n.vc-day-popover-row-indicator span {\r\n    transition: all var(--day-content-transition-time);\n}\n.vc-day-popover-row-content {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-flex-wrap: none;\r\n      -ms-flex-wrap: none;\r\n          flex-wrap: none;\r\n  -webkit-flex-grow: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  width: -webkit-max-content;\r\n  width: max-content;\n}\r\n";
styleInject(css_248z);

script.render = render;

export default script;
