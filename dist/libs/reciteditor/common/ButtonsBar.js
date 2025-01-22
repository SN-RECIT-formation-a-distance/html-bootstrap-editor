"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsBar = exports.BtnSetCssProp = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../RecitEditor");
var _ScreenCapture = require("../word-processor/ScreenCapture");
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
var ButtonsBar = exports.ButtonsBar = function (_Component) {
  function ButtonsBar(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ButtonsBar);
    _this = _callSuper(this, ButtonsBar, [props]);
    _this.onAddLink = _this.onAddLink.bind(_this);
    _this.onAddImage = _this.onAddImage.bind(_this);
    _this.onAddImageModal = _this.onAddImageModal.bind(_this);
    _this.onCloseInputLink = _this.onCloseInputLink.bind(_this);
    _this.onRemoveLink = _this.onRemoveLink.bind(_this);
    _this.applyNumerationTypeset = _this.applyNumerationTypeset.bind(_this);
    _this.applyIndentTypeset = _this.applyIndentTypeset.bind(_this);
    _this.onRemoveTypeset = _this.onRemoveTypeset.bind(_this);
    _this.state = {
      modalInputLink: false,
      modalInputImage: false
    };
    return _this;
  }
  (0, _inherits2["default"])(ButtonsBar, _Component);
  return (0, _createClass2["default"])(ButtonsBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var style = {
        backgroundColor: "#f7f7f7",
        border: "1px solid #dfdfdf",
        borderRadius: "4px"
      };
      var selection = this.props.selection;
      var history = this.props.history;
      var fontSizes = [{
        text: '12',
        value: '12px'
      }, {
        text: '14',
        value: '14px'
      }, {
        text: '16',
        value: '16px'
      }, {
        text: '18',
        value: '18px'
      }, {
        text: '20',
        value: '20px'
      }, {
        text: '25',
        value: '25px'
      }, {
        text: '30',
        value: '30px'
      }, {
        text: '35',
        value: '35px'
      }, {
        text: '40',
        value: '40px'
      }, {
        text: '50',
        value: '50px'
      }, {
        text: '60',
        value: '60px'
      }, {
        text: '70',
        value: '70px'
      }];
      var main = _react["default"].createElement("div", {
        style: {
          backgroundColor: style.backgroundColor,
          minHeight: 50,
          padding: ".5rem"
        }
      }, _react["default"].createElement(_reactBootstrap.ButtonToolbar, null, _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, this.props.options.layoutBuilder && _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onShowHtmlEditor
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileCode,
        title: _RecitEditor.i18n.get_string('returntohtmleditor')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onCodeSource
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCode,
        title: _RecitEditor.i18n.get_string('htmleditor')
      }))), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(DropdownSetCssProp, {
        selection: selection,
        cssProp: "font-size",
        defaultValue: "16px",
        dataProvider: fontSizes
      }), _react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "font-weight",
        defaultValue: "normal",
        value: "bold",
        icon: _freeSolidSvgIcons.faBold,
        title: _RecitEditor.i18n.get_string('bold')
      }), _react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "font-style",
        defaultValue: "normal",
        value: "italic",
        icon: _freeSolidSvgIcons.faItalic,
        title: _RecitEditor.i18n.get_string('italic')
      }), _react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "text-decoration",
        defaultValue: "normal",
        value: "underline",
        icon: _freeSolidSvgIcons.faUnderline,
        title: _RecitEditor.i18n.get_string('underline')
      }), _react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "text-decoration",
        defaultValue: "normal",
        value: "line-through",
        icon: _freeSolidSvgIcons.faStrikethrough,
        title: _RecitEditor.i18n.get_string('strikethrough')
      }), _react["default"].createElement(BtnUnsetCssProp, {
        selection: selection,
        cssProp: ["fontSize", "fontWeight", "fontStyle", "textDecoration"],
        icon: _freeSolidSvgIcons.faRemoveFormat,
        defaultValue: "",
        title: _RecitEditor.i18n.get_string('removeformat')
      })), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(BtnColorPicker, {
        selection: selection,
        cssProp: "backgroundColor",
        icon: _freeSolidSvgIcons.faFillDrip,
        defaultValue: "#FFFFFF",
        title: _RecitEditor.i18n.get_string('bgcolor')
      }), _react["default"].createElement(BtnUnsetCssProp, {
        selection: selection,
        cssProp: ["backgroundColor"],
        icon: _freeSolidSvgIcons.faRemoveFormat,
        defaultValue: "#FFFFFF",
        title: _RecitEditor.i18n.get_string('removebgcolor')
      }), _react["default"].createElement(BtnColorPicker, {
        selection: selection,
        cssProp: "color",
        icon: _freeSolidSvgIcons.faFont,
        defaultValue: "#000000",
        title: _RecitEditor.i18n.get_string('fontcolor')
      }), _react["default"].createElement(BtnUnsetCssProp, {
        selection: selection,
        cssProp: ["color"],
        icon: _freeSolidSvgIcons.faRemoveFormat,
        defaultValue: "#000000",
        title: _RecitEditor.i18n.get_string('removefontcolor')
      })), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyNumerationTypeset("ul");
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faListUl,
        title: _RecitEditor.i18n.get_string('list')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyNumerationTypeset("ol");
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faListOl,
        title: _RecitEditor.i18n.get_string('numberedlist')
      }))), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "left",
        icon: _freeSolidSvgIcons.faAlignLeft,
        title: _RecitEditor.i18n.get_string('alignleft')
      }), _react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "center",
        icon: _freeSolidSvgIcons.faAlignCenter,
        title: _RecitEditor.i18n.get_string('aligncenter')
      }), _react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "right",
        icon: _freeSolidSvgIcons.faAlignRight,
        title: _RecitEditor.i18n.get_string('alignright')
      }), _react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "justify",
        icon: _freeSolidSvgIcons.faAlignJustify,
        title: _RecitEditor.i18n.get_string('justify')
      })), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyIndentTypeset("outdent");
        },
        title: _RecitEditor.i18n.get_string('outdent')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faOutdent
      })), _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyIndentTypeset("indent");
        },
        title: _RecitEditor.i18n.get_string('indent')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faIndent
      }))), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onAddLink,
        title: _RecitEditor.i18n.get_string('link')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faLink
      })), _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onRemoveLink,
        title: _RecitEditor.i18n.get_string('removelink')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUnlink
      }))), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onUndo,
        disabled: history.undo.length === 0,
        title: _RecitEditor.i18n.get_string('undo')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUndo
      })), _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onRedo,
        disabled: history.redo.length === 0,
        title: _RecitEditor.i18n.get_string('redo')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRedo
      }))), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.flags.highlighter ? 'warning' : ButtonsBar.Layout.btnNormal,
        onClick: this.props.onHighlighter,
        title: _RecitEditor.i18n.get_string('highlighttool')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faHighlighter
      })), _react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.flags.mathFormula ? 'warning' : ButtonsBar.Layout.btnNormal,
        onClick: this.props.onMathFormula,
        title: _RecitEditor.i18n.get_string('math')
      }, _react["default"].createElement("i", null, _react["default"].createElement("b", null, "f(x)"))), _react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.flags.mathFormula ? 'warning' : ButtonsBar.Layout.btnNormal,
        id: "btn-addimg",
        onClick: function onClick() {
          return _this2.onAddImageModal(true);
        },
        title: _RecitEditor.i18n.get_string('addimage')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faImage
      })), _react["default"].createElement(_ScreenCapture.ScreenCapture, {
        onEndCapture: this.props.onScreenCapture
      }, function (_ref) {
        var onStartCapture = _ref.onStartCapture;
        return _react["default"].createElement(_reactBootstrap.Button, {
          variant: ButtonsBar.Layout.btnNormal,
          onClick: onStartCapture,
          title: _RecitEditor.i18n.get_string('screenshot')
        }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faCamera
        }));
      })), _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onRemoveTypeset,
        title: _RecitEditor.i18n.get_string('removeformat')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat
      })))), this.state.modalInputLink && _react["default"].createElement(InputLink, {
        selection: this.props.selection,
        onClose: this.onCloseInputLink
      }), this.state.modalInputImage && _react["default"].createElement(_reactBootstrap.Modal, {
        key: "2",
        show: this.state.modalInputImage,
        onHide: function onHide() {
          return _this2.onAddImageModal(false);
        }
      }, _react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, _react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('addimage'))), _react["default"].createElement(_reactBootstrap.Modal.Body, null, _react["default"].createElement(_RecitEditor.ImageSrc, {
        name: "Image",
        value: "",
        placeholder: _RecitEditor.i18n.get_string('imageurl'),
        size: "sm",
        onCommit: this.onAddImage
      }))));
      return main;
    }
  }, {
    key: "onAddImageModal",
    value: function onAddImageModal(toggle) {
      document.getElementById('btn-addimg').blur();
      this.setState({
        modalInputImage: toggle
      });
    }
  }, {
    key: "onAddImage",
    value: function onAddImage(event) {
      this.props.onAddImage(event.target.value);
      this.onAddImageModal(false);
    }
  }, {
    key: "applyNumerationTypeset",
    value: function applyNumerationTypeset(option) {
      var sel = this.props.selection;
      if (sel === null || !sel.isSelection) return;
      var newNode = document.createElement(option);
      var li = document.createElement("li");
      newNode.appendChild(li);
      li.appendChild(sel.range.extractContents());
      sel.range.insertNode(newNode);
    }
  }, {
    key: "applyIndentTypeset",
    value: function applyIndentTypeset(option) {
      var sel = this.props.selection;
      if (sel === null) {
        return;
      }
      if (sel.sel.isCollapsed) {
        return;
      }
      if (option === "indent") {
        var newNode = document.createElement("div");
        newNode.appendChild(sel.range.extractContents());
        newNode.style.paddingLeft = "30px";
        newNode.setAttribute("data-indent", "1");
        sel.range.insertNode(newNode);
      } else {
        if (sel.node.getAttribute("data-indent") === "1") {
          sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
          sel.node.remove();
        }
      }
    }
  }, {
    key: "onAddLink",
    value: function onAddLink() {
      var sel = this.props.selection;
      if (sel === null || sel.node === null || !sel.isSelection) {
        return;
      }
      this.setState({
        modalInputLink: true
      });
    }
  }, {
    key: "onCloseInputLink",
    value: function onCloseInputLink() {
      this.setState({
        modalInputLink: false
      });
    }
  }, {
    key: "onRemoveLink",
    value: function onRemoveLink() {
      var sel = this.props.selection;
      if (sel === null) {
        return;
      }
      if (sel.node instanceof HTMLAnchorElement) {
        sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
        sel.node.remove();
      }
    }
  }, {
    key: "onRemoveTypeset",
    value: function onRemoveTypeset() {
      var sel = this.props.selection;
      if (sel === null) {
        return;
      }
      if (sel.sel.isCollapsed) {
        return;
      }
      sel.node.style.textAlign = "";
      sel.node.style.backgroundColor = "";
      sel.node.style.color = "";
      sel.node.style.fontSize = '';
      sel.node.style.fontWeight = '';
      sel.node.style.textDecoration = '';
      if (!sel.isNodeRoot) {
        sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
        sel.node.remove();
      }
    }
  }]);
}(_react.Component);
ButtonsBar.defaultProps = {
  selection: null,
  history: null,
  flags: null,
  onUndo: null,
  onRedo: null,
  onHighlighter: null,
  onCodeSource: null,
  onMathFormula: null,
  onShowHtmlEditor: null,
  onScreenCapture: null,
  onAddImage: null,
  options: {}
};
ButtonsBar.Layout = {
  btnNormal: "light",
  btnToggled: "secondary"
};
var DropdownSetCssProp = function (_Component2) {
  function DropdownSetCssProp(props) {
    var _this3;
    (0, _classCallCheck2["default"])(this, DropdownSetCssProp);
    _this3 = _callSuper(this, DropdownSetCssProp, [props]);
    _this3.onClick = _this3.onClick.bind(_this3);
    return _this3;
  }
  (0, _inherits2["default"])(DropdownSetCssProp, _Component2);
  return (0, _createClass2["default"])(DropdownSetCssProp, [{
    key: "render",
    value: function render() {
      var _this4 = this;
      var value = this.getCurrentValue();
      var main = _react["default"].createElement(_reactBootstrap.DropdownButton, {
        variant: ButtonsBar.Layout.btnNormal,
        as: _reactBootstrap.ButtonGroup,
        title: value
      }, this.props.dataProvider.map(function (item, index) {
        return _react["default"].createElement(_reactBootstrap.Dropdown.Item, {
          key: index,
          onClick: function onClick(event) {
            return _this4.onClick(event, item);
          }
        }, item.text);
      }));
      return main;
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      var sel = this.props.selection;
      if (sel === null) {
        return this.props.defaultValue;
      }
      var currentValue = sel.node.style[this.props.cssProp] || "";
      currentValue = currentValue.length === 0 ? this.props.defaultValue : currentValue;
      return currentValue;
    }
  }, {
    key: "onClick",
    value: function onClick(event, item) {
      var sel = this.props.selection;
      if (sel === null) {
        return;
      }
      if (sel.sel.isCollapsed) {
        return;
      }
      var prop = this.props.cssProp;
      if (sel.isNodeRoot) {
        var newNode = document.createElement("span");
        newNode.appendChild(sel.range.extractContents());
        newNode.style[prop] = item.value;
        sel.range.insertNode(newNode);
      } else if (sel.subSelection) {
        var _newNode = document.createElement("span");
        _newNode.appendChild(sel.range.extractContents());
        _newNode.style[prop] = item.value;
        sel.range.insertNode(_newNode);
      } else {
        sel.node.style[prop] = item.value;
      }
    }
  }]);
}(_react.Component);
DropdownSetCssProp.defaultProps = {
  selection: null,
  icon: null,
  cssProp: "",
  defaultValue: "",
  dataProvider: "",
  title: ""
};
var BtnSetCssProp = exports.BtnSetCssProp = function (_Component3) {
  function BtnSetCssProp(props) {
    var _this5;
    (0, _classCallCheck2["default"])(this, BtnSetCssProp);
    _this5 = _callSuper(this, BtnSetCssProp, [props]);
    _this5.onClick = _this5.onClick.bind(_this5);
    return _this5;
  }
  (0, _inherits2["default"])(BtnSetCssProp, _Component3);
  return (0, _createClass2["default"])(BtnSetCssProp, [{
    key: "render",
    value: function render() {
      var variant = this.getCurrentValue() === this.props.value ? ButtonsBar.Layout.btnToggled : ButtonsBar.Layout.btnNormal;
      if (this.props.variant.length > 0) {
        variant = this.props.variant;
      }
      var main = _react["default"].createElement(_reactBootstrap.Button, {
        variant: variant,
        title: this.props.title,
        onClick: this.onClick
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.icon
      }), " ");
      return main;
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      var sel = this.props.selection || _RecitEditor.UtilsHTML.getCurrentSelection(null, null, this.props.window);
      if (sel === null) {
        return this.props.defaultValue;
      }
      if (this.props.tagName.length > 0) {
        var tag = sel.node.tagName;
        if (this.props.tagName.toUpperCase() == tag) {
          return this.props.value;
        }
      } else {
        var currentValue = sel.node.style[this.props.cssProp] || "";
        currentValue = currentValue.length === 0 ? this.props.defaultValue : currentValue;
        return currentValue;
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.getCurrentValue() === this.props.defaultValue ? this.props.value : this.props.defaultValue;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var sel = this.props.selection || _RecitEditor.UtilsHTML.getCurrentSelection(null, null, this.props.window);
      if (sel === null || !sel.isSelection) {
        return;
      }
      if (sel.sel.isCollapsed) {
        return;
      }
      var prop = this.props.cssProp;
      var selection = sel.sel;
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var clonedSelection = range.cloneContents();
        var dummydiv = document.createElement('div');
        dummydiv.appendChild(clonedSelection);
        var text = dummydiv.innerHTML;
        var parent = range.startContainer.parentNode;
        var offset = _RecitEditor.Utils.getCaretCharacterOffsetWithin(parent);
        if (this.props.tagName.length > 0 && this.props.tagName.toUpperCase() != parent.tagName) {
          var inner = document.createElement(this.props.tagName);
          inner.innerHTML = text;
          parent.innerHTML = _RecitEditor.Utils.replaceAt(parent.innerHTML, text, inner.outerHTML, offset);
        } else if (text == parent.innerHTML && !parent.style[prop]) {
          parent.style[prop] = this.getValue();
        } else if (range.startOffset > 0 && !parent.style[prop]) {
          var _inner = document.createElement("span");
          _inner.style[prop] = this.getValue();
          _inner.innerHTML = text;
          parent.innerHTML = _RecitEditor.Utils.replaceAt(parent.innerHTML, text, _inner.outerHTML, offset);
        } else if (parent.style && parent.style[prop] || this.props.tagName.toUpperCase() == parent.tagName) {
          parent.outerHTML = parent.innerHTML;
        }
      }
      if (sel.refreshSelection) {
        sel.refreshSelection();
      }
      if (this.props.onClick) {
        this.props.onClick(event, true);
      }
    }
  }]);
}(_react.Component);
BtnSetCssProp.defaultProps = {
  selection: null,
  window: null,
  icon: null,
  cssProp: "",
  defaultValue: "",
  tagName: "",
  value: "",
  onClick: null,
  title: "",
  variant: ""
};
var BtnColorPicker = function (_Component4) {
  function BtnColorPicker(props) {
    var _this6;
    (0, _classCallCheck2["default"])(this, BtnColorPicker);
    _this6 = _callSuper(this, BtnColorPicker, [props]);
    _this6.onChange = _this6.onChange.bind(_this6);
    _this6.onBlur = _this6.onBlur.bind(_this6);
    _this6.state = {
      value: _this6.props.defaultValue
    };
    return _this6;
  }
  (0, _inherits2["default"])(BtnColorPicker, _Component4);
  return (0, _createClass2["default"])(BtnColorPicker, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      if (this.props.selection !== null && this.props.selection.node !== null) {
        value = this.RGBToHex(this.props.selection.node.style[this.props.cssProp]);
      }
      var main = _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        title: this.props.title
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.icon
      }), " ", _react["default"].createElement("input", {
        type: "color",
        onChange: this.onChange,
        onBlur: this.onBlur,
        value: value
      }));
      return main;
    }
  }, {
    key: "RGBToHex",
    value: function RGBToHex(rgb) {
      rgb = rgb || "rgb(0,0,0)";
      var sep = rgb.indexOf(",") > -1 ? "," : " ";
      rgb = rgb.substr(4).split(")")[0].split(sep);
      for (var R in rgb) {
        var _r = rgb[R];
        if (_r.indexOf("%") > -1) rgb[R] = Math.round(_r.substr(0, _r.length - 1) / 100 * 255);
      }
      var r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
      if (r.length === 1) r = "0" + r;
      if (g.length === 1) g = "0" + g;
      if (b.length === 1) b = "0" + b;
      return "#" + r + g + b;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var sel = this.props.selection;
      if (sel === null) {
        return;
      }
      if (sel.sel.isCollapsed) {
        return;
      }
      var prop = this.props.cssProp;
      var color = this.state.value;
      if (sel.isNodeRoot) {
        var newNode = document.createElement("span");
        newNode.appendChild(sel.range.extractContents());
        sel.range.insertNode(newNode);
        newNode.style[prop] = color;
      } else if (sel.subSelection) {
        var _newNode2 = document.createElement("span");
        _newNode2.appendChild(sel.range.extractContents());
        sel.range.insertNode(_newNode2);
        _newNode2.style[prop] = color;
      } else {
        sel.node.style[prop] = color;
      }
      sel.refreshSelection();
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }]);
}(_react.Component);
BtnColorPicker.defaultProps = {
  selection: null,
  icon: null,
  cssProp: "",
  defaultValue: "",
  onClick: null,
  title: ""
};
var BtnUnsetCssProp = function (_Component5) {
  function BtnUnsetCssProp(props) {
    var _this7;
    (0, _classCallCheck2["default"])(this, BtnUnsetCssProp);
    _this7 = _callSuper(this, BtnUnsetCssProp, [props]);
    _this7.onClick = _this7.onClick.bind(_this7);
    return _this7;
  }
  (0, _inherits2["default"])(BtnUnsetCssProp, _Component5);
  return (0, _createClass2["default"])(BtnUnsetCssProp, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onClick,
        title: this.props.title
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.icon
      }));
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var sel = this.props.selection;
      if (sel === null) {
        return;
      }
      if (sel.isNodeRoot) {
        return;
      }
      var _iterator = _createForOfIteratorHelper(this.props.cssProp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;
          sel.node.style[prop] = this.props.defaultValue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }]);
}(_react.Component);
BtnUnsetCssProp.defaultProps = {
  selection: null,
  icon: null,
  cssProp: [],
  defaultValue: "",
  onClick: null,
  title: ""
};
var BtnAlignment = function (_Component6) {
  function BtnAlignment(props) {
    var _this8;
    (0, _classCallCheck2["default"])(this, BtnAlignment);
    _this8 = _callSuper(this, BtnAlignment, [props]);
    _this8.onClick = _this8.onClick.bind(_this8);
    return _this8;
  }
  (0, _inherits2["default"])(BtnAlignment, _Component6);
  return (0, _createClass2["default"])(BtnAlignment, [{
    key: "render",
    value: function render() {
      var sel = this.props.selection;
      var variant = ButtonsBar.Layout.btnNormal;
      if (sel !== null && sel.node !== null) {
        variant = sel.node.style.textAlign === this.props.cssProp ? ButtonsBar.Layout.btnToggled : ButtonsBar.Layout.btnNormal;
      }
      return _react["default"].createElement(_reactBootstrap.Button, {
        variant: variant,
        onClick: this.onClick,
        title: this.props.title
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.icon
      }));
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var sel = this.props.selection;
      var option = this.props.cssProp;
      if (sel === null) {
        return;
      }
      if (sel.isNodeRoot) {
        var newNode = document.createElement("p");
        newNode.appendChild(sel.range.extractContents());
        if (newNode.innerHTML.length > 0) {
          newNode.style.textAlign = option;
          sel.node.appendChild(newNode);
        }
      } else {
        if (sel.node instanceof HTMLDivElement || sel.node instanceof HTMLParagraphElement) {
          sel.node.style.textAlign = option;
        } else if (!sel.isParentNodeRoot) {
          sel.parentNode.style.textAlign = option;
        } else {
          var _newNode3 = document.createElement("p");
          _newNode3.style.textAlign = option;
          _newNode3.appendChild(sel.node);
          sel.parentNode.appendChild(_newNode3);
        }
      }
      sel.refreshSelection();
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }]);
}(_react.Component);
BtnAlignment.defaultProps = {
  selection: null,
  icon: null,
  cssProp: "",
  onClick: null,
  title: ""
};
var InputLink = function (_Component7) {
  function InputLink(props) {
    var _this9;
    (0, _classCallCheck2["default"])(this, InputLink);
    _this9 = _callSuper(this, InputLink, [props]);
    _this9.onSave = _this9.onSave.bind(_this9);
    _this9.onChange = _this9.onChange.bind(_this9);
    var url = props.selection.node instanceof HTMLAnchorElement ? props.selection.node.getAttribute("href") : "";
    var target = props.selection.node.getAttribute("target") === "_blank" ? true : false;
    _this9.state = {
      url: url,
      target: target,
      text: props.selection.sel.toString(),
      selection: props.selection
    };
    return _this9;
  }
  (0, _inherits2["default"])(InputLink, _Component7);
  return (0, _createClass2["default"])(InputLink, [{
    key: "render",
    value: function render() {
      var main = _react["default"].createElement(_reactBootstrap.Modal, {
        show: true,
        onHide: this.props.onClose
      }, _react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, _react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('createlink'))), _react["default"].createElement(_reactBootstrap.Modal.Body, null, _react["default"].createElement(_reactBootstrap.Form, null, _react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formURL"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('inputurl')), _react["default"].createElement(_reactBootstrap.Form.Control, {
        name: "url",
        type: "text",
        value: this.state.url,
        placeholder: "http://",
        onChange: this.onChange
      }), _react["default"].createElement(_reactBootstrap.Form.Text, {
        className: "text-muted"
      }, "".concat(_RecitEditor.i18n.get_string('texttoshow'), ": ").concat(this.state.text))), _react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formTarget"
      }, _react["default"].createElement(_reactBootstrap.Form.Check, {
        name: "target",
        type: "checkbox",
        checked: this.state.target,
        label: _RecitEditor.i18n.get_string('openinnewwindow'),
        onChange: this.onChange
      })))), _react["default"].createElement(_reactBootstrap.Modal.Footer, null, _react["default"].createElement(_reactBootstrap.Button, {
        variant: "primary",
        onClick: this.onSave
      }, _RecitEditor.i18n.get_string('createlink'))));
      return main;
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var sel = this.state.selection;
      var url = this.state.url;
      var target = this.state.target ? '_blank' : '';
      if (sel.node instanceof HTMLAnchorElement) {
        sel.node.href = url;
        sel.node.target = target;
      } else {
        var newNode = document.createElement("a");
        newNode.innerHTML = sel.range.extractContents().textContent;
        newNode.setAttribute("href", url);
        newNode.target = target;
        sel.range.insertNode(newNode);
      }
      this.props.onClose();
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var data = this.state;
      if (event.target.type === "checkbox") {
        data[event.target.name] = event.target.checked;
      } else {
        data[event.target.name] = event.target.value;
      }
      this.setState(data);
    }
  }]);
}(_react.Component);
InputLink.defaultProps = {
  selection: null,
  onClose: null
};