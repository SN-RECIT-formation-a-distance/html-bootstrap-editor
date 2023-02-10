"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputColor = void 0;
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
var _RecitEditor = require("../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var InputColor = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(InputColor, _Component);
  var _super = _createSuper(InputColor);
  function InputColor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, InputColor);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onReset = _this.onReset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onBlur = _this.onBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }
  (0, _createClass2["default"])(InputColor, [{
    key: "render",
    value: function render() {
      var value = _RecitEditor.Utils.RGBToHex(this.state.value);
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "inline-flex",
          width: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
        size: this.props.size,
        name: this.props.name,
        type: "color",
        value: value,
        onChange: this.onChange,
        onBlur: this.onBlur,
        disabled: this.props.disabled,
        style: {
          width: "80px"
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        className: "ml-1",
        size: "sm",
        variant: 'primary',
        onClick: this.onReset,
        title: _RecitEditor.i18n.get_string('deleteformat')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat
      })));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var eventData = {
        target: {
          name: this.props.name,
          value: event.target.value
        }
      };
      this.setState({
        value: event.target.value
      });
      if (this.props.onChange) {
        this.props.onChange(eventData);
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var eventData = {
        target: {
          name: this.props.name,
          value: this.state.value
        }
      };
      if (this.props.onBlur) {
        this.props.onBlur(eventData);
      }
    }
  }, {
    key: "onReset",
    value: function onReset() {
      var eventData = {
        target: {
          name: this.props.name,
          value: ''
        }
      };
      this.setState({
        value: ''
      });
      if (this.props.onChange) {
        this.props.onChange(eventData);
      }
      if (this.props.onBlur) {
        // Fire onBlur too as it's a button, it'll never get fired
        this.props.onBlur(eventData);
      }
    }
  }]);
  return InputColor;
}(_react.Component);
exports.InputColor = InputColor;
InputColor.defaultProps = {
  name: "",
  value: '#000000',
  onChange: null,
  disabled: false,
  size: ""
};