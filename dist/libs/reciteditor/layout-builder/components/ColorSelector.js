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
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * Atto HTML editor
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * @package    atto_reciteditor
                                                                                                                                                                                                                                                                                                                                           * @copyright  2019 RECIT
                                                                                                                                                                                                                                                                                                                                           * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                                                                                                                                                                           */
var ColorSelector = function (_Component) {
  (0, _inherits2["default"])(ColorSelector, _Component);
  var _super = _createSuper(ColorSelector);
  function ColorSelector(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ColorSelector);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
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
  (0, _createClass2["default"])(ColorSelector, [{
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
  return ColorSelector;
}(_react.Component);
exports.ColorSelector = ColorSelector;
ColorSelector.defaultProps = {
  name: "",
  value: "",
  options: [],
  flags: {},
  onChange: null
};