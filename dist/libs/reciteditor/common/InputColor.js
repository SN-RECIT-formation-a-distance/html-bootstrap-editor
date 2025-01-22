"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputColor = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
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
var InputColor = exports.InputColor = function (_Component) {
  function InputColor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, InputColor);
    _this = _callSuper(this, InputColor, [props]);
    _this.onChange = _this.onChange.bind(_this);
    _this.onReset = _this.onReset.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }
  (0, _inherits2["default"])(InputColor, _Component);
  return (0, _createClass2["default"])(InputColor, [{
    key: "render",
    value: function render() {
      var value = _RecitEditor.Utils.RGBToHex(this.state.value);
      var main = _react["default"].createElement("div", {
        style: {
          display: "inline-flex",
          width: '100%'
        }
      }, _react["default"].createElement(_reactBootstrap.Form.Control, {
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
      }), _react["default"].createElement(_reactBootstrap.Button, {
        className: "ml-1",
        size: "sm",
        variant: 'primary',
        onClick: this.onReset,
        title: _RecitEditor.i18n.get_string('deleteformat')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
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
        this.props.onBlur(eventData);
      }
    }
  }]);
}(_react.Component);
InputColor.defaultProps = {
  name: "",
  value: '#000000',
  onChange: null,
  disabled: false,
  size: ""
};