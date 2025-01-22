"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleSelect = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _RecitEditor = require("../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var MultipleSelect = function (_Component) {
  (0, _inherits2["default"])(MultipleSelect, _Component);
  var _super = _createSuper(MultipleSelect);
  function MultipleSelect(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MultipleSelect);
    _this = _super.call(this, props);
    _this.onDataChange = _this.onDataChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFocus = _this.onFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onBlur = _this.onBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDeleteItem = _this.onDeleteItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      status: 0,
      searchStr: ""
    };
    return _this;
  }
  (0, _createClass2["default"])(MultipleSelect, [{
    key: "render",
    value: function render() {
      var dataProvider = (0, _toConsumableArray2["default"])(this.props.options);
      if (dataProvider.length == 0) {
        dataProvider = (0, _toConsumableArray2["default"])(this.props.values);
      }
      if (this.props.autoAdd) {
        if (this.state.searchStr.length > 0 && !dataProvider.includes(this.state.searchStr)) {
          dataProvider.push({
            value: this.state.searchStr,
            text: this.state.searchStr
          });
        }
      }
      var that = this;
      var main = _react["default"].createElement("div", {
        className: "multiple-select",
        style: this.props.style
      }, _react["default"].createElement("ul", {
        className: "choices"
      }, that.props.values.map(function (value, index) {
        var row = null;
        var item = _RecitEditor.JsNx.getItem(dataProvider, 'value', value.value, null);
        if (item !== null) {
          row = _react["default"].createElement("li", {
            key: index,
            className: "item"
          }, _react["default"].createElement("span", null, item.text, _react["default"].createElement("span", {
            className: "btn-delete",
            onClick: function onClick() {
              return that.onDeleteItem(index);
            },
            dangerouslySetInnerHTML: {
              __html: ' &#10006;'
            }
          })));
        }
        return row;
      }), _react["default"].createElement("li", {
        className: "search"
      }, _react["default"].createElement("input", {
        placeholder: this.props.placeholder,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        value: this.state.searchStr,
        onKeyDown: this.onKeyDown
      }))), _react["default"].createElement("div", {
        className: "dropdown-container",
        "data-status": this.state.status
      }, _react["default"].createElement("ul", {
        className: "dropdown-list"
      }, dataProvider.map(function (item, index) {
        var selected = that.props.values.includes(item.value) ? 1 : 0;
        var row = _react["default"].createElement("li", {
          key: index,
          "data-index": index,
          "data-selected": selected,
          onClick: function onClick() {
            return that.onSelectItem(item.value);
          }
        }, item.text);
        return row;
      }))));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        searchStr: event.target.value
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      this.setState({
        status: 1
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var that = this;
      setTimeout(function () {
        that.setState({
          status: 0,
          searchStr: ""
        });
      }, 300);
    }
  }, {
    key: "onSelectItem",
    value: function onSelectItem(val) {
      var values = this.props.values || [];
      var item = _RecitEditor.JsNx.getItem(values, 'value', val, null);
      if (item) return;
      values.push({
        value: val,
        text: val
      });
      this.onDataChange();
    }
  }, {
    key: "onDeleteItem",
    value: function onDeleteItem(index) {
      var values = this.props.values || [];
      values.splice(index, 1);
      this.onDataChange();
    }
  }, {
    key: "onDataChange",
    value: function onDataChange() {
      var values = [];
      var _iterator = _createForOfIteratorHelper(this.props.values),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          values.push(c.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var event = {
        target: {
          name: this.props.name,
          value: values
        }
      };
      this.props.onChange(event);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter') {
        this.onSelectItem(event.target.value);
        this.setState({
          searchStr: ""
        });
      }
    }
  }]);
  return MultipleSelect;
}(_react.Component);
exports.MultipleSelect = MultipleSelect;
MultipleSelect.defaultProps = {
  onChange: null,
  values: [],
  name: "",
  placeholder: "",
  options: [],
  style: null,
  autoAdd: false
};