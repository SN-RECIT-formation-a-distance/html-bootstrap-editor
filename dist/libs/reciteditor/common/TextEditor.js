"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextEditorModal = exports.FaRule = void 0;
var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactQuill = _interopRequireWildcard(require("react-quill"));
require("react-quill/dist/quill.snow.css");
var _Utils = require("./Utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _superPropGet(t, o, e, r) { var p = (0, _get2["default"])((0, _getPrototypeOf2["default"])(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var TextEditorModal = exports.TextEditorModal = function (_React$Component) {
  function TextEditorModal(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TextEditorModal);
    _this = _callSuper(this, TextEditorModal, [props]);
    _this.onDataChange = _this.onDataChange.bind(_this);
    _this.editorRef = _react["default"].createRef();
    var tag = TextEditorModal.allowedTags[props.element.tagName.toLowerCase()];
    if (!tag) console.error('Text editor received unknown tag');
    _this.initModules();
    var html = props.element[tag.content];
    html = _this.preProcess(html);
    _this.state = {
      value: html,
      tag: tag
    };
    return _this;
  }
  (0, _inherits2["default"])(TextEditorModal, _React$Component);
  return (0, _createClass2["default"])(TextEditorModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = _react["default"].createElement(_reactBootstrap.Modal, {
        show: true,
        onHide: this.props.onClose,
        size: "lg",
        backdrop: "static",
        keyboard: false
      }, _react["default"].createElement(_reactBootstrap.Modal.Body, null, _react["default"].createElement("div", {
        id: "cktoolbar"
      }, _react["default"].createElement("span", {
        className: "ql-formats"
      }, _react["default"].createElement("button", {
        className: "ql-bold",
        title: _Utils.i18n.get_string('bold')
      }), _react["default"].createElement("button", {
        className: "ql-italic",
        title: _Utils.i18n.get_string('italic')
      }), _react["default"].createElement("button", {
        className: "ql-underline",
        title: _Utils.i18n.get_string('underline')
      }), _react["default"].createElement("button", {
        className: "ql-strike",
        title: _Utils.i18n.get_string('strikethrough')
      })), _react["default"].createElement("span", {
        className: "ql-formats"
      }, _react["default"].createElement("button", {
        className: "ql-link",
        title: _Utils.i18n.get_string('link')
      })), _react["default"].createElement("span", {
        className: "ql-formats"
      }, _react["default"].createElement("select", {
        className: "ql-color",
        title: _Utils.i18n.get_string('fontcolor')
      }), _react["default"].createElement("select", {
        className: "ql-background",
        title: _Utils.i18n.get_string('bgcolor')
      })), _react["default"].createElement("span", {
        className: "ql-formats"
      }, _react["default"].createElement("button", {
        className: "ql-list",
        value: "ordered",
        title: _Utils.i18n.get_string('numberedlist')
      }), _react["default"].createElement("button", {
        className: "ql-list",
        value: "bullet",
        title: _Utils.i18n.get_string('list')
      })), _react["default"].createElement("span", {
        className: "ql-formats"
      }, _react["default"].createElement("select", {
        className: "ql-header",
        defaultValue: '',
        onChange: function onChange(e) {
          return e.persist();
        }
      }, _react["default"].createElement("option", {
        value: "2"
      }), _react["default"].createElement("option", {
        value: "3"
      }), _react["default"].createElement("option", {
        value: "4"
      }), _react["default"].createElement("option", {
        value: "5"
      }), _react["default"].createElement("option", null))), _react["default"].createElement("span", {
        className: "ql-formats"
      }, _react["default"].createElement("button", {
        className: "ql-clean",
        title: _Utils.i18n.get_string('removeformat')
      }), _react["default"].createElement("button", {
        className: "ql-nonbreakingspace",
        title: _Utils.i18n.get_string('nonbreakingspace')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faParagraph
      })))), _react["default"].createElement(_reactQuill["default"], {
        style: {
          height: '250px'
        },
        theme: "snow",
        value: this.state.value,
        onChange: this.onDataChange,
        modules: this.modules,
        ref: this.editorRef
      })), _react["default"].createElement(_reactBootstrap.Modal.Footer, null, _react["default"].createElement(_reactBootstrap.Button, {
        variant: "secondary",
        onClick: this.props.onClose
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTimes,
        title: _Utils.i18n.get_string('cancel')
      }), " ", _Utils.i18n.get_string('cancel')), _react["default"].createElement(_reactBootstrap.Button, {
        variant: "success",
        onClick: function onClick() {
          return _this2.onSave();
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _Utils.i18n.get_string('save')
      }), " ", _Utils.i18n.get_string('save'))));
      return main;
    }
  }, {
    key: "preProcess",
    value: function preProcess(html) {
      var el = document.createElement('div');
      el.innerHTML = html;
      return el.innerHTML;
    }
  }, {
    key: "postProcess",
    value: function postProcess(html) {
      var el = document.createElement('div');
      el.innerHTML = html;
      return el.innerHTML;
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(val) {
      this.setState({
        value: val
      });
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var html = this.state.value.replace(/<p(\s+[a-z0-9\-_\'\"=]+)*><\/p>/ig, '');
      if (this.state.tag.stripPTags) {
        html = html.replace(/(<p[^>]*>|<\/p>)/g, '');
      }
      html = this.postProcess(html);
      var el = this.props.element;
      if (this.state.tag.content == 'outerHTML') {
        var _this$props$element;
        el = this.props.element.parentElement;
        var dummydiv = document.createElement('div');
        dummydiv.innerHTML = html;
        (_this$props$element = this.props.element).replaceWith.apply(_this$props$element, (0, _toConsumableArray2["default"])(dummydiv.children));
      } else {
        el.innerHTML = html;
      }
      this.props.onSave(el);
    }
  }, {
    key: "initModules",
    value: function initModules() {
      var that = this;
      this.modules = {
        toolbar: {
          container: '#cktoolbar',
          handlers: {
            "nonbreakingspace": function nonbreakingspace(value) {
              var val = EditorModuleNonBreakingSpace.process(that.state.value);
              that.setState({
                value: val
              });
            }
          }
        }
      };
    }
  }], [{
    key: "isTagEditable",
    value: function isTagEditable(tag) {
      var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var dbClick = arguments.length > 2 ? arguments[2] : undefined;
      if (html !== null) {
        var els = html.querySelectorAll("i[class]");
        if (els.length > 0) {
          return false;
        }
      }
      var tags = TextEditorModal.allowedTags[tag.toLowerCase()];
      if (dbClick && tags && tags.dbClick) {
        return true;
      } else if (tags && !dbClick && !tags.dbClick) {
        return true;
      }
      return false;
    }
  }]);
}(_react["default"].Component);
TextEditorModal.defaultProps = {
  onClose: null,
  onSave: null,
  element: null
};
TextEditorModal.allowedTags = {
  'p': {
    content: 'outerHTML'
  },
  'h1': {
    content: 'outerHTML'
  },
  'h2': {
    content: 'outerHTML'
  },
  'h3': {
    content: 'outerHTML'
  },
  'h4': {
    content: 'outerHTML'
  },
  'h5': {
    content: 'outerHTML'
  },
  'h6': {
    content: 'outerHTML'
  },
  'td': {
    content: 'innerHTML',
    stripPTags: true
  },
  'th': {
    content: 'innerHTML',
    stripPTags: true
  },
  'button': {
    content: 'innerHTML',
    stripPTags: true,
    dbClick: true
  },
  'ul': {
    content: 'outerHTML'
  },
  'ol': {
    content: 'outerHTML'
  },
  'em': {
    content: 'outerHTML'
  },
  'pre': {
    content: 'outerHTML'
  },
  'q': {
    content: 'outerHTML'
  },
  'figcaption': {
    content: 'innerHTML',
    stripPTags: true
  }
};
var EditorModuleNonBreakingSpace = function () {
  function EditorModuleNonBreakingSpace() {
    (0, _classCallCheck2["default"])(this, EditorModuleNonBreakingSpace);
  }
  return (0, _createClass2["default"])(EditorModuleNonBreakingSpace, null, [{
    key: "process",
    value: function process(text) {
      var el = document.createElement('div');
      el.innerHTML = text;
      EditorModuleNonBreakingSpace.replaceNonBreakingSpace(el);
      return el.innerHTML;
    }
  }, {
    key: "replaceNonBreakingSpace",
    value: function replaceNonBreakingSpace(el) {
      var _iterator = _createForOfIteratorHelper(el.childNodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var t = _step.value;
          if (t.innerHTML) {
            t.innerHTML = _Utils.UtilsString.replaceNonBreakingSpace(t.innerHTML);
          } else {
            t.data = _Utils.UtilsString.replaceNonBreakingSpace(t.textContent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
}();
var Inline = _reactQuill.Quill["import"]('blots/inline');
var FaRule = exports.FaRule = function (_Inline) {
  function FaRule() {
    (0, _classCallCheck2["default"])(this, FaRule);
    return _callSuper(this, FaRule, arguments);
  }
  (0, _inherits2["default"])(FaRule, _Inline);
  return (0, _createClass2["default"])(FaRule, [{
    key: "optimize",
    value: function optimize(c) {}
  }], [{
    key: "create",
    value: function create(value) {
      var node = _superPropGet(FaRule, "create", this, 2)([]);
      Object.getOwnPropertyNames(value).forEach(function (attribute_name) {
        node.setAttribute(attribute_name, value[attribute_name]);
      });
      return node;
    }
  }]);
}(Inline);
FaRule.blotName = 'fa';
FaRule.tagName = 'i';
FaRule.className = 'iconrecit';
var Parchment = _reactQuill.Quill["import"]('parchment');
var Align = new Parchment.Attributor.Class('fa', 'iconrecit');
Parchment.register(Align);
_reactQuill.Quill.register(FaRule);
var IndentAttributor = function (_Parchment$Attributor) {
  function IndentAttributor(name, style, params) {
    var _this3;
    (0, _classCallCheck2["default"])(this, IndentAttributor);
    _this3 = _callSuper(this, IndentAttributor, [name, style, params]);
    _this3.multiplier = 2;
    return _this3;
  }
  (0, _inherits2["default"])(IndentAttributor, _Parchment$Attributor);
  return (0, _createClass2["default"])(IndentAttributor, [{
    key: "add",
    value: function add(node, value) {
      return _superPropGet(IndentAttributor, "add", this, 3)([node, "".concat(value * this.multiplier, "rem")]);
    }
  }, {
    key: "value",
    value: function value(node) {
      return parseFloat(_superPropGet(IndentAttributor, "value", this, 3)([node])) / this.multiplier || undefined;
    }
  }]);
}(Parchment.Attributor.Style);
var levels = [1, 2, 3, 4, 5];
var multiplier = 2;
var indentStyle = new IndentAttributor('indent', 'margin-left', {
  scope: Parchment.Scope.BLOCK,
  whitelist: levels.map(function (value) {
    return "".concat(value * multiplier, "rem");
  })
});
_reactQuill.Quill.register(indentStyle);