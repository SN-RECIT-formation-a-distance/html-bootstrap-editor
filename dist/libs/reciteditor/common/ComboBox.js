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
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } // This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var ComboBox = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ComboBox, _Component);
  var _super = _createSuper(ComboBox);
  function ComboBox(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ComboBox);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(ComboBox, [{
    key: "render",
    value: function render() {
      //  spread attributes <div {...this.props}>    
      var spreadAttr = {
        required: this.props.required,
        multiple: this.props.multiple,
        disabled: this.props.disabled,
        size: this.props.size
      };
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, (0, _extends2["default"])({
        as: "select"
      }, spreadAttr, {
        onChange: this.onChange,
        value: this.props.value,
        style: this.props.style,
        className: this.props.className
      }), /*#__PURE__*/_react["default"].createElement("option", {
        value: ""
      }, this.props.placeholder), this.props.options.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
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
      var selectedIndex = event.target.selectedIndex - 1; // -1 because of the placeholder (first option)
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
  return ComboBox;
}(_react.Component);
exports.ComboBox = ComboBox;
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