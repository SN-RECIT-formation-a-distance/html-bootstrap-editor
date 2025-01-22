"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleButtons = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
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
var ToggleButtons = function (_Component) {
  (0, _inherits2["default"])(ToggleButtons, _Component);
  var _super = _createSuper(ToggleButtons);
  function ToggleButtons(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ToggleButtons);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(ToggleButtons, [{
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
  return ToggleButtons;
}(_react.Component);
exports.ToggleButtons = ToggleButtons;
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