import { J as isObjectLike_1, K as _baseGetTag, n as _objectSpread2 } from './helpers-4f4a4db8.js';
import { h } from 'vue';
import { k as childMixin, f as slotMixin, g as getDefault } from './index-dcbde536.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import { a as script$1, g as getPopoverTriggerEvents } from './CalendarDay.vue_vue&type=style&index=0&id=760aefde&lang-7f60cbfd.js';

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike_1(value) && _baseGetTag(value) == boolTag);
}

var isBoolean_1 = isBoolean;

var script = {
  name: 'CalendarPane',
  emits: ['update:page', 'weeknumberclick'],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    // Header
    var header = this.safeSlot('header', this.page) || // Default header
    h('div', {
      class: "vc-header align-".concat(this.titlePosition)
    }, [// Header title
    h('div', _objectSpread2({
      class: 'vc-title'
    }, this.navPopoverEvents), [this.safeSlot('header-title', this.page, this.page.title)])]); // Weekday cells

    var weekdayCells = this.weekdayLabels.map(function (wl, i) {
      return h('div', {
        key: i + 1,
        class: 'vc-weekday'
      }, [wl]);
    });
    var showWeeknumbersLeft = this.showWeeknumbers_.startsWith('left');
    var showWeeknumbersRight = this.showWeeknumbers_.startsWith('right');

    if (showWeeknumbersLeft) {
      weekdayCells.unshift(h('div', {
        class: 'vc-weekday'
      }));
    } else if (showWeeknumbersRight) {
      weekdayCells.push(h('div', {
        class: 'vc-weekday'
      }));
    } // Weeknumber cell


    var getWeeknumberCell = function getWeeknumberCell(weeknumber) {
      return h('div', {
        class: ['vc-weeknumber']
      }, [h('span', {
        class: ['vc-weeknumber-content', "is-".concat(_this.showWeeknumbers_)],
        onClick: function onClick(event) {
          _this.$emit('weeknumberclick', {
            weeknumber: weeknumber,
            days: _this.page.days.filter(function (d) {
              return d[_this.weeknumberKey] === weeknumber;
            }),
            event: event
          });
        }
      }, [weeknumber])]);
    }; // Day cells


    var dayCells = [];
    var daysInWeek = this.locale.daysInWeek;
    this.page.days.forEach(function (day, i) {
      var mod = i % daysInWeek; // Inset weeknumber cell on left side if needed

      if (showWeeknumbersLeft && mod === 0 || showWeeknumbersRight && mod === daysInWeek) {
        dayCells.push(getWeeknumberCell(day[_this.weeknumberKey]));
      }

      dayCells.push(h(script$1, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        day: day
      }), _this.$slots)); // Insert weeknumber cell on right side if needed

      if (showWeeknumbersRight && mod === daysInWeek - 1) {
        dayCells.push(getWeeknumberCell(day[_this.weeknumberKey]));
      }
    }); // Weeks

    var weeks = h('div', {
      class: {
        'vc-weeks': true,
        'vc-show-weeknumbers': this.showWeeknumbers_,
        'is-left': showWeeknumbersLeft,
        'is-right': showWeeknumbersRight
      }
    }, [weekdayCells, dayCells]);
    return h('div', {
      class: ['vc-pane', "row-from-end-".concat(this.rowFromEnd), "column-from-end-".concat(this.columnFromEnd)],
      ref: 'pane'
    }, [header, weeks]);
  },
  props: {
    page: Object,
    position: Number,
    row: Number,
    rowFromEnd: Number,
    column: Number,
    columnFromEnd: Number,
    titlePosition: String,
    navVisibility: {
      type: String,
      default: getDefault('navVisibility')
    },
    showWeeknumbers: [Boolean, String],
    showIsoWeeknumbers: [Boolean, String]
  },
  computed: {
    weeknumberKey: function weeknumberKey() {
      return this.showWeeknumbers ? 'weeknumber' : 'isoWeeknumber';
    },
    showWeeknumbers_: function showWeeknumbers_() {
      var showWeeknumbers = this.showWeeknumbers || this.showIsoWeeknumbers;
      if (showWeeknumbers == null) return '';

      if (isBoolean_1(showWeeknumbers)) {
        return showWeeknumbers ? 'left' : '';
      }

      if (showWeeknumbers.startsWith('right')) {
        return this.columnFromEnd > 1 ? 'right' : showWeeknumbers;
      }

      return this.column > 1 ? 'left' : showWeeknumbers;
    },
    navPlacement: function navPlacement() {
      switch (this.titlePosition) {
        case 'left':
          return 'bottom-start';

        case 'right':
          return 'bottom-end';

        default:
          return 'bottom';
      }
    },
    navPopoverEvents: function navPopoverEvents() {
      var sharedState = this.sharedState,
          navVisibility = this.navVisibility,
          navPlacement = this.navPlacement,
          page = this.page,
          position = this.position;
      return getPopoverTriggerEvents({
        id: sharedState.navPopoverId,
        visibility: navVisibility,
        placement: navPlacement,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom']
          }
        }],
        data: {
          page: page,
          position: position
        },
        isInteractive: true,
        isRenderFn: true
      });
    },
    weekdayLabels: function weekdayLabels() {
      var _this2 = this;

      return this.locale.getWeekdayDates().map(function (d) {
        return _this2.format(d, _this2.masks.weekdays);
      });
    }
  }
};

var css_248z = ".vc-pane {\r\n  min-width: 250px;\n}\n.vc-header {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 10px 16px 0px 16px;\n}\n.vc-header.align-left {\r\n    -webkit-justify-content: flex-start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\n}\n.vc-header.align-right {\r\n    -webkit-justify-content: flex-end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\n}\n.vc-title {\r\n  font-size: var(--text-lg);\r\n  color: var(--gray-800);\r\n  font-weight: var(--font-semibold);\r\n  line-height: 28px;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  white-space: nowrap;\n}\n.vc-title:hover {\r\n    opacity: 0.75;\n}\n.vc-weeknumber {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: relative;\n}\n.vc-weeknumber-content {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: var(--text-xs);\r\n  font-weight: var(--font-medium);\r\n  font-style: italic;\r\n  width: 28px;\r\n  height: 28px;\r\n  margin-top: 2px;\r\n  color: var(--gray-500);\r\n  -webkit-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\n}\n.vc-weeknumber-content.is-left-outside {\r\n    position: absolute;\r\n    left: var(--weeknumber-offset);\n}\n.vc-weeknumber-content.is-right-outside {\r\n    position: absolute;\r\n    right: var(--weeknumber-offset);\n}\n.vc-weeks {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  position: relative;\r\n  /* overflow: auto; */\r\n  -webkit-overflow-scrolling: touch;\r\n  padding: 6px;\r\n  min-width: 250px;\n}\n.vc-weeks.vc-show-weeknumbers {\r\n    grid-template-columns: auto repeat(7, 1fr);\n}\n.vc-weeks.vc-show-weeknumbers.is-right {\r\n      grid-template-columns: repeat(7, 1fr) auto;\n}\n.vc-weekday {\r\n  text-align: center;\r\n  color: var(--gray-500);\r\n  font-size: var(--text-sm);\r\n  font-weight: var(--font-bold);\r\n  line-height: 14px;\r\n  padding-top: 4px;\r\n  padding-bottom: 8px;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\n}\n.vc-weekdays {\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.vc-nav-popover-container {\r\n  color: var(--white);\r\n  font-size: var(--text-sm);\r\n  font-weight: var(--font-semibold);\r\n  background-color: var(--gray-800);\r\n  border: 1px solid;\r\n  border-color: var(--gray-700);\r\n  border-radius: var(--rounded-lg);\r\n  padding: 4px;\r\n  box-shadow: var(--shadow);\n}\n.vc-is-dark .vc-header {\r\n    color: var(--gray-200);\n}\n.vc-is-dark .vc-title {\r\n    color: var(--gray-100);\n}\n.vc-is-dark .vc-weekday {\r\n    color: var(--accent-200);\n}\n.vc-is-dark .vc-nav-popover-container {\r\n    color: var(--gray-800);\r\n    background-color: var(--white);\r\n    border-color: var(--gray-100);\n}\r\n";
styleInject(css_248z);

export { script as s };
