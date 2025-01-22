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
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _RecitEditor = require("../RecitEditor");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var MultipleSelect = exports.MultipleSelect = function (_Component) {
  function MultipleSelect(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MultipleSelect);
    _this = _callSuper(this, MultipleSelect, [props]);
    _this.onDataChange = _this.onDataChange.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onDeleteItem = _this.onDeleteItem.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.state = {
      status: 0,
      searchStr: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(MultipleSelect, _Component);
  return (0, _createClass2["default"])(MultipleSelect, [{
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
}(_react.Component);
MultipleSelect.defaultProps = {
  onChange: null,
  values: [],
  name: "",
  placeholder: "",
  options: [],
  style: null,
  autoAdd: false
};