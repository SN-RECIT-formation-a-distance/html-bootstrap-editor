"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputText = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
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
var InputText = exports.InputText = function (_Component) {
  function InputText(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, InputText);
    _this = _callSuper(this, InputText, [props]);
    _this.onCommit = _this.onCommit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onFocusOut = _this.onFocusOut.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.state = {
      value: "",
      dataChanged: false
    };
    if (_this.props.value) {
      _this.state.value = _this.props.value;
    }
    _this.inputRef = _react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(InputText, _Component);
  return (0, _createClass2["default"])(InputText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoSelect) {
        this.inputRef.current.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var main = _react["default"].createElement(_reactBootstrap.FormControl, {
        ref: this.inputRef,
        autoFocus: this.props.autoFocus,
        className: "InputText",
        name: this.props.name,
        type: "text",
        value: this.state.value,
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        onBlur: this.onFocusOut,
        onKeyDown: this.onKeyDown,
        disabled: this.props.disabled,
        size: this.props.size
      });
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        value: event.target.value.toString(),
        dataChanged: true
      });
    }
  }, {
    key: "onCommit",
    value: function onCommit(callback) {
      var _this2 = this;
      callback = callback || null;
      var value = this.state.value;
      var eventData = {
        target: {
          name: this.props.name,
          value: value
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
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.dataChanged) {
        return null;
      }
      var nextValue = nextProps.value === null ? "" : nextProps.value;
      if (nextValue !== prevState.value) {
        return {
          value: nextValue,
          dataChanged: false
        };
      }
      return null;
    }
  }]);
}(_react.Component);
InputText.defaultProps = {
  name: "",
  value: '',
  placeholder: "",
  onChange: null,
  onKeyDown: null,
  autoFocus: false,
  autoSelect: false,
  onCommit: null,
  disabled: false,
  size: ""
};