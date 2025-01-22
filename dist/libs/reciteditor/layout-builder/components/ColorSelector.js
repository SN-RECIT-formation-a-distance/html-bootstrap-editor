"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorSelector = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var ColorSelector = exports.ColorSelector = function (_Component) {
  function ColorSelector(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ColorSelector);
    _this = _callSuper(this, ColorSelector, [props]);
    _this.onChange = _this.onChange.bind(_this);
    _this.options = _this.props.options;
    if (_this.props.flags && _this.props.flags.fetchFromTheme) {
      var cssRules = _RecitEditor.$glVars.cssRules;
      var _iterator = _createForOfIteratorHelper(cssRules),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          for (var i in _this.options) {
            var css = '.' + _this.props.flags.prefix + _this.options[i].value;
            if (c.selectorText === css) {
              if (_this.props.flags.prefix === 'text-') {
                _this.options[i].style = {
                  backgroundColor: c.style.color,
                  borderColor: c.style.color
                };
              } else {
                _this.options[i].style = {
                  backgroundColor: c.style['background-color'],
                  borderColor: c.style['background-color']
                };
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return _this;
  }
  (0, _inherits2["default"])(ColorSelector, _Component);
  return (0, _createClass2["default"])(ColorSelector, [{
    key: "render",
    value: function render() {
      var that = this;
      var main = _react["default"].createElement("div", {
        className: "color-selector"
      }, this.options.map(function (item, index) {
        var result = null;
        var props = {
          key: index,
          onClick: function onClick() {
            return that.onChange(item.value);
          },
          size: 'sm',
          title: item.text,
          className: 'm-1',
          style: item.style
        };
        var child = that.props.value === item.value && _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faCheck
        });
        if (item.value === "white") {
          result = _react["default"].createElement(_reactBootstrap.Button, (0, _extends2["default"])({}, props, {
            variant: "light",
            className: "bg-white"
          }), child);
        } else {
          result = _react["default"].createElement(_reactBootstrap.Button, (0, _extends2["default"])({}, props, {
            variant: item.value
          }), child);
        }
        return result;
      }));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(variant) {
      var event = {
        target: {
          name: this.props.name,
          value: this.props.value === variant ? "" : variant
        }
      };
      this.props.onChange(event);
    }
  }]);
}(_react.Component);
ColorSelector.defaultProps = {
  name: "",
  value: "",
  options: [],
  flags: {},
  onChange: null
};