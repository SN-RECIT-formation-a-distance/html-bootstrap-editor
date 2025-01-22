"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinValueMax = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _RecitEditor = require("../RecitEditor");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var MinValueMax = exports.MinValueMax = function (_Component) {
  function MinValueMax(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MinValueMax);
    _this = _callSuper(this, MinValueMax, [props]);
    _this.onCommit = _this.onCommit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onFocusOut = _this.onFocusOut.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.state = {
      values: Object.assign({}, _this.props.values),
      dataChanged: false
    };
    return _this;
  }
  (0, _inherits2["default"])(MinValueMax, _Component);
  return (0, _createClass2["default"])(MinValueMax, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.state.dataChanged) {
        if (this.props.values.min != this.state.values.min || this.props.values.value != this.state.values.value || this.props.values.max != this.state.values.max) {
          this.setState({
            values: Object.assign({}, this.props.values)
          });
        }
      }
    }
  }, {
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
        values: values,
        dataChanged: true
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
}(_react.Component);
MinValueMax.defaultProps = {
  values: {
    min: '',
    value: '',
    max: ''
  },
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