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
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactQuill = _interopRequireWildcard(require("react-quill"));
require("react-quill/dist/quill.snow.css");
var _Utils = require("./Utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TextEditorModal = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TextEditorModal, _React$Component);
  var _super = _createSuper(TextEditorModal);
  function TextEditorModal(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TextEditorModal);
    _this = _super.call(this, props);
    _this.onDataChange = _this.onDataChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.editorRef = /*#__PURE__*/_react["default"].createRef();
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
  (0, _createClass2["default"])(TextEditorModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        show: true,
        onHide: this.props.onClose,
        size: "lg",
        backdrop: "static",
        keyboard: false
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement("div", {
        id: "cktoolbar"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-bold",
        title: _Utils.i18n.get_string('bold')
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-italic",
        title: _Utils.i18n.get_string('italic')
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-underline",
        title: _Utils.i18n.get_string('underline')
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-strike",
        title: _Utils.i18n.get_string('strikethrough')
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-link",
        title: _Utils.i18n.get_string('link')
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "ql-color",
        title: _Utils.i18n.get_string('fontcolor')
      }), /*#__PURE__*/_react["default"].createElement("select", {
        className: "ql-background",
        title: _Utils.i18n.get_string('bgcolor')
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-list",
        value: "ordered",
        title: _Utils.i18n.get_string('numberedlist')
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-list",
        value: "bullet",
        title: _Utils.i18n.get_string('list')
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-indent",
        value: "-1"
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-indent",
        value: "+1"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "ql-header",
        defaultValue: '',
        onChange: function onChange(e) {
          return e.persist();
        }
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: "2"
      }), /*#__PURE__*/_react["default"].createElement("option", {
        value: "3"
      }), /*#__PURE__*/_react["default"].createElement("option", {
        value: "4"
      }), /*#__PURE__*/_react["default"].createElement("option", {
        value: "5"
      }), /*#__PURE__*/_react["default"].createElement("option", null))), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ql-formats"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-clean",
        title: _Utils.i18n.get_string('removeformat')
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "ql-nonbreakingspace",
        title: _Utils.i18n.get_string('nonbreakingspace')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faParagraph
      })))), /*#__PURE__*/_react["default"].createElement(_reactQuill["default"], {
        style: {
          height: '250px'
        },
        theme: "snow",
        value: this.state.value,
        onChange: this.onDataChange,
        modules: this.modules,
        ref: this.editorRef
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "secondary",
        onClick: this.props.onClose
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTimes,
        title: _Utils.i18n.get_string('cancel')
      }), " ", _Utils.i18n.get_string('cancel')), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "success",
        onClick: function onClick() {
          return _this2.onSave();
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
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
      var els = el.querySelectorAll(this.getIconQuery());
      if (els.length > 0) {
        var _iterator = _createForOfIteratorHelper(els),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;
            i.innerHTML = i.getAttribute('class'); //keep class in inner as editor will remove class attribute, will be readded in postprocess
            i.classList.add('iconrecit');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return el.innerHTML;
    }
  }, {
    key: "postProcess",
    value: function postProcess(html) {
      var el = document.createElement('div');
      el.innerHTML = html;
      var els = el.querySelectorAll('i.iconrecit');
      if (els.length > 0) {
        var _iterator2 = _createForOfIteratorHelper(els),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var i = _step2.value;
            i.setAttribute('class', i.innerText);
            i.innerHTML = '';
            if (i.parentElement.tagName == 'EM') {
              i.parentElement.replaceWith(i);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return el.innerHTML;
    }
  }, {
    key: "getIconQuery",
    value: function getIconQuery() {
      var q = "";
      if (this.iconClass.length == 0) return 'i.fa';
      var _iterator3 = _createForOfIteratorHelper(this.iconClass),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var c = _step3.value;
          q = q + "i[class*=\"" + c.substring(1) + "\"],";
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return q.substring(0, q.length - 1);
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
      var html = this.state.value.replace(/<p(\s+[a-z0-9\-_\'\"=]+)*><\/p>/ig, ''); //Remove empty tags
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
      var settings = _Utils.IWrapper.getSettings();
      this.iconClass = [];
      if (settings.iconclass) {
        var config = settings.iconclass;
        config = config.split(',');
        var _iterator4 = _createForOfIteratorHelper(config),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var c = _step4.value;
            var data = c.split('=');
            this.iconClass.push(data[1]);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
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
      return TextEditorModal.allowedTags[tag.toLowerCase()] ? true : false;
    }
  }]);
  return TextEditorModal;
}(_react["default"].Component);
exports.TextEditorModal = TextEditorModal;
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
  'ul': {
    content: 'outerHTML'
  },
  'ol': {
    content: 'outerHTML'
  },
  //'a': {content: 'innerHTML', stripPTags: true},
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
var EditorModuleNonBreakingSpace = /*#__PURE__*/function () {
  function EditorModuleNonBreakingSpace() {
    (0, _classCallCheck2["default"])(this, EditorModuleNonBreakingSpace);
  }
  (0, _createClass2["default"])(EditorModuleNonBreakingSpace, null, [{
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
      var _iterator5 = _createForOfIteratorHelper(el.childNodes),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var t = _step5.value;
          if (t.innerHTML) {
            t.innerHTML = _Utils.UtilsString.replaceNonBreakingSpace(t.innerHTML);
          } else {
            t.data = _Utils.UtilsString.replaceNonBreakingSpace(t.textContent);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);
  return EditorModuleNonBreakingSpace;
}();
var Inline = _reactQuill.Quill["import"]('blots/inline');
var FaRule = /*#__PURE__*/function (_Inline) {
  (0, _inherits2["default"])(FaRule, _Inline);
  var _super2 = _createSuper(FaRule);
  function FaRule() {
    (0, _classCallCheck2["default"])(this, FaRule);
    return _super2.apply(this, arguments);
  }
  (0, _createClass2["default"])(FaRule, [{
    key: "optimize",
    value: function optimize(c) {}
  }], [{
    key: "create",
    value:
    /**
     * Converts the HTML tag to image blot
     * @param value
     */
    function create(value) {
      var node = (0, _get2["default"])((0, _getPrototypeOf2["default"])(FaRule), "create", this).call(this);
      Object.getOwnPropertyNames(value).forEach(function (attribute_name) {
        node.setAttribute(attribute_name, value[attribute_name]);
      });
      return node;
    }
  }]);
  return FaRule;
}(Inline);
exports.FaRule = FaRule;
FaRule.blotName = 'fa';
FaRule.tagName = 'i';
FaRule.className = 'iconrecit';
var Parchment = _reactQuill.Quill["import"]('parchment');
var Align = new Parchment.Attributor.Class('fa', 'iconrecit');
Parchment.register(Align);
_reactQuill.Quill.register(FaRule);