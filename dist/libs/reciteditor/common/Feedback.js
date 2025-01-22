"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualFeedback = exports.FeedbackCtrl = void 0;
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var FeedbackCtrl = exports.FeedbackCtrl = function () {
  function FeedbackCtrl() {
    (0, _classCallCheck2["default"])(this, FeedbackCtrl);
    if (this.constructor.instance) {
      return this.constructor.instance;
    }
    this.constructor.instance = this;
    this.observers = [];
    this.msg = [];
  }
  return (0, _createClass2["default"])(FeedbackCtrl, [{
    key: "addObserver",
    value: function addObserver(id, update) {
      var found = false;
      var _iterator = _createForOfIteratorHelper(this.observers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.id === id) {
            found = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!found) {
        this.observers.push({
          id: id,
          update: update
        });
      }
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(id) {
      for (var i = 0; i < this.observers.length; i++) {
        if (this.observers[i].id === id) {
          this.observers.splice(i, 1);
        }
      }
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers() {
      var _iterator2 = _createForOfIteratorHelper(this.observers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var o = _step2.value;
          o.update();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "showInfo",
    value: function showInfo(title, msg, timeout) {
      this.msg.push({
        title: title,
        msg: msg,
        type: "info",
        timeout: timeout
      });
      this.notifyObservers();
    }
  }, {
    key: "showError",
    value: function showError(title, msg, timeout) {
      this.msg.push({
        title: title,
        msg: msg,
        type: "error",
        timeout: timeout
      });
      this.notifyObservers();
    }
  }, {
    key: "showWarning",
    value: function showWarning(title, msg, timeout) {
      this.msg.push({
        title: title,
        msg: msg,
        type: "warning",
        timeout: timeout
      });
      this.notifyObservers();
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      if (this.msg.splice(index, 1) !== null) {
        this.notifyObservers();
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!FeedbackCtrl.instance) {
        FeedbackCtrl.instance = new FeedbackCtrl();
      }
      return FeedbackCtrl.instance;
    }
  }]);
}();
FeedbackCtrl.instance = null;
var VisualFeedback = exports.VisualFeedback = function (_Component) {
  function VisualFeedback(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, VisualFeedback);
    _this = _callSuper(this, VisualFeedback, [props]);
    _this.onDismiss = _this.onDismiss.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(VisualFeedback, _Component);
  return (0, _createClass2["default"])(VisualFeedback, [{
    key: "render",
    value: function render() {
      var bsStyle = "";
      var icon = "";
      switch (this.props.type) {
        case 'error':
          bsStyle = "danger";
          icon = _freeSolidSvgIcons.faExclamationTriangle;
          break;
        case 'warning':
          bsStyle = "warning";
          icon = _freeSolidSvgIcons.faExclamationTriangle;
          break;
        case 'info':
          bsStyle = "info";
          icon = _freeSolidSvgIcons.faInfoCircle;
          break;
        default:
          bsStyle = "danger";
          icon = _freeSolidSvgIcons.faExclamationTriangle;
      }
      if (this.props.timeout) {
        setTimeout(this.onDismiss, this.props.timeout * 1000);
      }
      var main = _react["default"].createElement("div", {
        className: "VisualFeedback",
        "data-feedback-type": this.props.type
      }, _react["default"].createElement(_reactBootstrap.Alert, {
        variant: bsStyle,
        onClose: this.onDismiss,
        dismissible: true
      }, _react["default"].createElement(_reactBootstrap.Alert.Heading, null, this.props.title), _react["default"].createElement("p", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: icon
      }), ' ', this.props.msg)));
      return main;
    }
  }, {
    key: "onDismiss",
    value: function onDismiss() {
      FeedbackCtrl.instance.removeItem(this.props.id);
    }
  }]);
}(_react.Component);
VisualFeedback.defaultProps = {
  id: 0,
  title: "",
  msg: "",
  type: "",
  timeout: 0
};