"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessibilityChecker = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
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
var AccessibilityChecker = exports.AccessibilityChecker = function (_Component) {
  function AccessibilityChecker(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AccessibilityChecker);
    _this = _callSuper(this, AccessibilityChecker, [props]);
    _this.onClick = _this.onClick.bind(_this);
    _this.onHover = _this.onHover.bind(_this);
    _this.state = {
      checked: false,
      isActive: false
    };
    _RecitEditor.Event.listen('onViewChange', function (args) {
      if (args.view == 'designer') {
        _this.getBody = args.getBody;
        _this.setState({
          isActive: true
        });
      }
    });
    _RecitEditor.Event.listen('onBeforeViewChange', function (args) {
      if (args.view != 'designer') {
        if (_this.state.checked) {
          _this.onDisable();
        }
        _this.setState({
          isActive: false,
          checked: false
        });
      }
    });
    _RecitEditor.Event.listen('onViewUpdate', function (args) {
      if (_this.state.checked) {
        _this.onDisable();
        _this.onEnable();
      }
    });
    _RecitEditor.Event.listen('onSaveAndClose', function (args) {
      if (_this.state.checked) {
        _this.onDisable();
      }
    });
    return _this;
  }
  (0, _inherits2["default"])(AccessibilityChecker, _Component);
  return (0, _createClass2["default"])(AccessibilityChecker, [{
    key: "render",
    value: function render() {
      if (!this.state.isActive) return null;
      var main = _react["default"].createElement(_reactBootstrap.Nav, {
        activeKey: this.state.checked ? 'acc' : ''
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: this.state.checked ? 'danger' : 'secondary',
        onClick: this.onClick
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUniversalAccess,
        title: 'accessibility'
      }), " ", _react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('accessibility'))));
      return main;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var state = !this.state.checked;
      if (state) {
        this.onEnable();
      } else {
        this.onDisable();
      }
      this.setState({
        checked: state
      });
    }
  }, {
    key: "onDisable",
    value: function onDisable() {
      var body = this.getBody();
      if (!body) return;
      var els = body.querySelectorAll('*[data-accessibility]');
      var _iterator = _createForOfIteratorHelper(els),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          i.removeAttribute('data-accessibility');
          i.removeEventListener("mouseover", this.onHover);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onEnable",
    value: function onEnable() {
      this.processBody();
    }
  }, {
    key: "processBody",
    value: function processBody() {
      var body = this.getBody();
      if (!body) return;
      var els = body.querySelectorAll('img:not([alt]),img[alt=""]:not([role])');
      var _iterator2 = _createForOfIteratorHelper(els),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          i.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('imgalterror'));
          i.addEventListener("mouseover", this.onHover);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      els = body.querySelectorAll('iframe:not([title]), iframe[title=""]');
      var _iterator3 = _createForOfIteratorHelper(els),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _i = _step3.value;
          _i.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('iframeerror'));
          _i.addEventListener("mouseover", this.onHover);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      els = body.querySelectorAll('h1,h2,h3,h4,h5,h6');
      var h3detected,
        h4detected,
        h5detected = false;
      var _iterator4 = _createForOfIteratorHelper(els),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _i2 = _step4.value;
          if (_i2.tagName == 'H1') {
            _i2.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('h1error'));
            _i2.addEventListener("mouseover", this.onHover);
          }
          if (_i2.tagName == 'H2') {
            _i2.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('h2error'));
            _i2.addEventListener("mouseover", this.onHover);
          }
          if (_i2.tagName == 'H3') {
            h3detected = true;
            h4detected = false;
            h5detected = false;
          }
          if (_i2.tagName == 'H4') {
            h4detected = true;
            h5detected = false;
            if (!h3detected) {
              _i2.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('h4error'));
              _i2.addEventListener("mouseover", this.onHover);
            }
          }
          if (_i2.tagName == 'H5') {
            h5detected = true;
            if (!h4detected) {
              _i2.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('h5error'));
              _i2.addEventListener("mouseover", this.onHover);
            }
          }
          if (_i2.tagName == 'H6') {
            if (!h5detected) {
              _i2.setAttribute('data-accessibility', _RecitEditor.i18n.get_string('h6error'));
              _i2.addEventListener("mouseover", this.onHover);
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "onHover",
    value: function onHover(event) {
      if (event.target.getAttribute("data-accessibility")) {
        this.createTooltip(event.target.getAttribute('data-accessibility'), event);
      }
    }
  }, {
    key: "createTooltip",
    value: function createTooltip(txt, event) {
      var body = this.getBody();
      var existingTooltip = body.querySelector("#tooltip");
      if (existingTooltip) {
        existingTooltip.remove();
      }
      var pos = event.target.getBoundingClientRect();
      var tooltip = document.createElement("div");
      tooltip.innerText = txt;
      tooltip.style.position = "absolute";
      tooltip.style.background = "#d34141";
      tooltip.style.color = "white";
      tooltip.style.padding = "5px 10px";
      tooltip.style.borderRadius = "5px";
      tooltip.style.fontSize = "14px";
      tooltip.style.pointerEvents = "none";
      tooltip.style.border = "none";
      tooltip.style.top = pos.y + pos.height + body.scrollTop + 2 + "px";
      tooltip.style.left = pos.x + "px";
      tooltip.setAttribute("id", "tooltip");
      body.appendChild(tooltip);
      event.target.addEventListener("mouseleave", function removeTooltip() {
        var existingTooltip = body.querySelector("#tooltip");
        if (existingTooltip) {
          existingTooltip.remove();
        }
        event.target.removeEventListener("mouseleave", removeTooltip);
      });
      return tooltip;
    }
  }]);
}(_react.Component);
AccessibilityChecker.defaultProps = {
  onChange: null
};