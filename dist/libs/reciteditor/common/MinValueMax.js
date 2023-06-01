"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinValueMax = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _RecitEditor = require("../RecitEditor");
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
var MinValueMax = function (_Component) {
  (0, _inherits2["default"])(MinValueMax, _Component);
  var _super = _createSuper(MinValueMax);
  function MinValueMax(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MinValueMax);
    _this = _super.call(this, props);
    _this.onCommit = _this.onCommit.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFocusOut = _this.onFocusOut.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      values: {}
    };
    if (_this.props.values) {
      for (var _i = 0, _arr = ['min', 'value', 'max']; _i < _arr.length; _i++) {
        var k = _arr[_i];
        if (_this.props.values[k]) {
          _this.state.values[k] = _this.props.values[k];
        } else {
          _this.state.values[k] = '';
        }
      }
    }
    return _this;
  }
  (0, _createClass2["default"])(MinValueMax, [{
    key: "render",
    value: function render() {
      var main = _react["default"].createElement(_reactBootstrap.Container, null, _react["default"].createElement(_reactBootstrap.Row, null, _react["default"].createElement(_reactBootstrap.Col, null, _RecitEditor.i18n.get_string('min'), _react["default"].createElement("br", null), _react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: this.props.autoFocus,
        className: "InputMinValueMax",
        name: "min",
        type: "text",
        value: this.state.values['min'],
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        onBlur: this.onFocusOut,
        onKeyDown: this.onKeyDown,
        disabled: this.props.disabled,
        size: this.props.size
      })), _react["default"].createElement(_reactBootstrap.Col, null, _RecitEditor.i18n.get_string('value'), _react["default"].createElement("br", null), _react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: this.props.autoFocus,
        className: "InputMinValueMax",
        name: "value",
        type: "text",
        value: this.state.values['value'],
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        onBlur: this.onFocusOut,
        onKeyDown: this.onKeyDown,
        disabled: this.props.disabled,
        size: this.props.size
      })), _react["default"].createElement(_reactBootstrap.Col, null, _RecitEditor.i18n.get_string('max'), _react["default"].createElement("br", null), _react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: this.props.autoFocus,
        className: "InputMinValueMax",
        name: "max",
        type: "text",
        value: this.state.values['max'],
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        onBlur: this.onFocusOut,
        onKeyDown: this.onKeyDown,
        disabled: this.props.disabled,
        size: this.props.size
      }))));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var values = this.state.values;
      values[event.target.name] = event.target.value;
      this.setState({
        values: values
      });
    }
  }, {
    key: "onCommit",
    value: function onCommit(callback) {
      var _this2 = this;
      callback = callback || null;
      var values = this.state.values;
      var eventData = {
        target: {
          name: this.props.valueName,
          value: values
        }
      };
      this.setState({
        dataChanged: false
      }, function () {
        if (_this2.props.onChange) _this2.props.onChange(eventData);
        if (_this2.props.onCommit) _this2.props.onCommit(eventData);
        if (callback !== null) {
          callback();
        }
        ;
      });
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut(event) {
      this.onCommit();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var that = this;
      event.persist();
      var callback = function callback() {
        if (that.props.onKeyDown !== null) {
          that.props.onKeyDown(event);
        }
      };
      switch (event.key) {
        case "Enter":
          this.onCommit(callback);
          break;
        default:
      }
    }
  }]);
  return MinValueMax;
}(_react.Component);
exports.MinValueMax = MinValueMax;
MinValueMax.defaultProps = {
  values: {},
  valueName: 'Value',
  placeholder: "",
  onChange: null,
  onKeyDown: null,
  autoFocus: false,
  autoSelect: false,
  onCommit: null,
  disabled: false,
  size: ""
};