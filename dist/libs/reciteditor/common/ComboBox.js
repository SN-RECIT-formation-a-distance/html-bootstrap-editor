"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboBox = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
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
var ComboBox = exports.ComboBox = function (_Component) {
  function ComboBox(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ComboBox);
    _this = _callSuper(this, ComboBox, [props]);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ComboBox, _Component);
  return (0, _createClass2["default"])(ComboBox, [{
    key: "render",
    value: function render() {
      var spreadAttr = {
        required: this.props.required,
        multiple: this.props.multiple,
        disabled: this.props.disabled,
        size: this.props.size
      };
      var main = _react["default"].createElement(_reactBootstrap.Form.Control, (0, _extends2["default"])({
        as: "select"
      }, spreadAttr, {
        onChange: this.onChange,
        value: this.props.value,
        style: this.props.style,
        className: this.props.className
      }), _react["default"].createElement("option", {
        value: ""
      }, this.props.placeholder), this.props.options.map(function (item, index) {
        return _react["default"].createElement("option", {
          key: index,
          value: item.value
        }, item.text);
      }));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var value = event.target.value || "";
      var selectedIndex = event.target.selectedIndex - 1;
      var text = "";
      var data = null;
      if (selectedIndex >= 0 && selectedIndex < this.props.options.length) {
        data = this.props.options[selectedIndex].data;
        text = this.props.options[selectedIndex].text;
      }
      this.props.onChange({
        target: {
          name: this.props.name,
          value: value,
          text: text,
          data: data,
          index: selectedIndex
        }
      });
    }
  }]);
}(_react.Component);
ComboBox.defaultProps = {
  onChange: null,
  value: "",
  name: "",
  disabled: false,
  multiple: false,
  required: false,
  size: 1,
  placeholder: "",
  options: [],
  style: null,
  selectedIndex: -1,
  className: ""
};