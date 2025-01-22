"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleButtons = void 0;
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
var ToggleButtons = exports.ToggleButtons = function (_Component) {
  function ToggleButtons(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ToggleButtons);
    _this = _callSuper(this, ToggleButtons, [props]);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ToggleButtons, _Component);
  return (0, _createClass2["default"])(ToggleButtons, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = _react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        style: this.props.style,
        className: this.props.className,
        "data-read-only": this.props.disabled ? 1 : 0
      }, _react["default"].createElement(_reactBootstrap.ToggleButtonGroup, {
        size: this.props.bsSize,
        type: this.props.type,
        name: this.props.name,
        value: this.props.value,
        defaultValue: this.props.defaultValue,
        onChange: this.onChange
      }, this.props.options.map(function (item, index) {
        var element = _react["default"].createElement(_reactBootstrap.ToggleButton, {
          key: index,
          variant: "outline-primary",
          value: item.value,
          disabled: _this2.props.disabled
        }, item.glyph, item.text);
        return element;
      }), _react["default"].createElement("span", {
        className: "text-muted ml-3"
      }, this.props.label)));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(eventKey) {
      this.props.onChange({
        target: {
          value: eventKey,
          name: this.props.name
        }
      });
    }
  }]);
}(_react.Component);
ToggleButtons.defaultProps = {
  name: "",
  defaultValue: [],
  value: "",
  onChange: null,
  type: "checkbox",
  options: [],
  bsSize: "",
  style: null,
  label: '',
  className: '',
  disabled: false
};