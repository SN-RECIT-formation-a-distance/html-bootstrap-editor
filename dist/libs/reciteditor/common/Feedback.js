"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualFeedback = exports.FeedbackCtrl = void 0;
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var FeedbackCtrl = function () {
  function FeedbackCtrl() {
    (0, _classCallCheck2["default"])(this, FeedbackCtrl);
    if (this.constructor.instance) {
      return this.constructor.instance;
    }
    this.constructor.instance = this;
    this.observers = [];
    this.msg = [];
  }
  (0, _createClass2["default"])(FeedbackCtrl, [{
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
  return FeedbackCtrl;
}();
exports.FeedbackCtrl = FeedbackCtrl;
FeedbackCtrl.instance = null;
var VisualFeedback = function (_Component) {
  (0, _inherits2["default"])(VisualFeedback, _Component);
  var _super = _createSuper(VisualFeedback);
  function VisualFeedback(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, VisualFeedback);
    _this = _super.call(this, props);
    _this.onDismiss = _this.onDismiss.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(VisualFeedback, [{
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
  return VisualFeedback;
}(_react.Component);
exports.VisualFeedback = VisualFeedback;
VisualFeedback.defaultProps = {
  id: 0,
  title: "",
  msg: "",
  type: "",
  timeout: 0
};