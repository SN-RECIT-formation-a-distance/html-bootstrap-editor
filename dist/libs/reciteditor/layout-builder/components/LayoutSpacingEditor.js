"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutSpacingEditor = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _RecitEditor = require("../../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * Atto HTML editor
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * @package    atto_reciteditor
                                                                                                                                                                                                                                                                                                                                           * @copyright  2019 RECIT
                                                                                                                                                                                                                                                                                                                                           * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                                                                                                                                                                           */
var LayoutSpacingEditor = function (_Component) {
  (0, _inherits2["default"])(LayoutSpacingEditor, _Component);
  var _super = _createSuper(LayoutSpacingEditor);
  function LayoutSpacingEditor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, LayoutSpacingEditor);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onBlur = _this.onBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onBorderClick = _this.onBorderClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.colorRef = _react["default"].createRef();
    _this.borderRef = _react["default"].createRef();
    return _this;
  }
  (0, _createClass2["default"])(LayoutSpacingEditor, [{
    key: "render",
    value: function render() {
      var main = _react["default"].createElement("div", {
        className: "layoutspacing_layout-onion"
      }, _react["default"].createElement("div", {
        className: "layoutspacing_margin"
      }, _react["default"].createElement("label", null, _RecitEditor.i18n.get_string('margin')), _react["default"].createElement("input", {
        type: "text",
        name: "marginTop",
        className: "layoutspacing_top",
        placeholder: "-",
        value: this.props.values.marginTop,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "marginRight",
        className: "layoutspacing_right",
        placeholder: "-",
        value: this.props.values.marginRight,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "marginBottom",
        className: "layoutspacing_bottom",
        placeholder: "-",
        value: this.props.values.marginBottom,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "marginLeft",
        className: "layoutspacing_left",
        placeholder: "-",
        value: this.props.values.marginLeft,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("div", {
        className: "layoutspacing_border",
        style: {
          borderColor: this.props.values.borderColor,
          cursor: 'pointer'
        },
        onClick: this.onBorderClick,
        ref: this.borderRef
      }, _react["default"].createElement("label", null, _RecitEditor.i18n.get_string('border')), _react["default"].createElement("input", {
        type: "color",
        ref: this.colorRef,
        name: "borderColor",
        style: {
          visibility: 'hidden'
        },
        value: this.props.values.borderColor,
        onInput: this.onBlur,
        onChange: this.onChange
      }), _react["default"].createElement("input", {
        type: "text",
        name: "borderTopWidth",
        className: "layoutspacing_top",
        placeholder: "-",
        value: this.props.values.borderTopWidth,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "borderRightWidth",
        className: "layoutspacing_right",
        placeholder: "-",
        value: this.props.values.borderRightWidth,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "borderBottomWidth",
        className: "layoutspacing_bottom",
        placeholder: "-",
        value: this.props.values.borderBottomWidth,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "borderLeftWidth",
        className: "layoutspacing_left",
        placeholder: "-",
        value: this.props.values.borderLeftWidth,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("div", {
        className: "layoutspacing_padding"
      }, _react["default"].createElement("label", null, _RecitEditor.i18n.get_string('padding')), _react["default"].createElement("input", {
        type: "text",
        name: "paddingTop",
        className: "layoutspacing_top",
        placeholder: "-",
        value: this.props.values.paddingTop,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "paddingRight",
        className: "layoutspacing_right",
        placeholder: "-",
        value: this.props.values.paddingRight,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "paddingBottom",
        className: "layoutspacing_bottom",
        placeholder: "-",
        value: this.props.values.paddingBottom,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("input", {
        type: "text",
        name: "paddingLeft",
        className: "layoutspacing_left",
        placeholder: "-",
        value: this.props.values.paddingLeft,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }), _react["default"].createElement("div", {
        className: "layoutspacing_content"
      }, _react["default"].createElement("i", null))))));
      return main;
    }
  }, {
    key: "onBorderClick",
    value: function onBorderClick(event) {
      if (event.target != this.borderRef.current) return;
      this.colorRef.current.click();
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var values = this.props.values;
      values[event.target.name] = event.target.value;
      this.setState({
        values: values
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var eventData = {
        target: {
          value: {
            name: event.target.name,
            value: event.target.value
          }
        }
      };
      this.props.onChange(eventData);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      event.persist();
      switch (event.key) {
        case "Enter":
          this.onBlur(event);
          break;
        default:
      }
    }
  }]);
  return LayoutSpacingEditor;
}(_react.Component);
exports.LayoutSpacingEditor = LayoutSpacingEditor;
LayoutSpacingEditor.styleKeys = ['marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth', 'borderColor'];
LayoutSpacingEditor.defaultProps = {
  name: "",
  values: {},
  onChange: null
};