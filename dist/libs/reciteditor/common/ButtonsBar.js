"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsBar = exports.BtnSetCssProp = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../RecitEditor");
var _ScreenCapture = require("../word-processor/ScreenCapture");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var ButtonsBar = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ButtonsBar, _Component);
  var _super = _createSuper(ButtonsBar);
  function ButtonsBar(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ButtonsBar);
    _this = _super.call(this, props);
    _this.onAddLink = _this.onAddLink.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAddImage = _this.onAddImage.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAddImageModal = _this.onAddImageModal.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onCloseInputLink = _this.onCloseInputLink.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onRemoveLink = _this.onRemoveLink.bind((0, _assertThisInitialized2["default"])(_this));
    _this.applyNumerationTypeset = _this.applyNumerationTypeset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.applyIndentTypeset = _this.applyIndentTypeset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onRemoveTypeset = _this.onRemoveTypeset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      modalInputLink: false,
      modalInputImage: false
    };
    return _this;
  }
  (0, _createClass2["default"])(ButtonsBar, [{
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
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          backgroundColor: style.backgroundColor,
          minHeight: 50,
          padding: ".5rem"
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonToolbar, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, this.props.options.layoutBuilder && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onShowHtmlEditor
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileCode,
        title: _RecitEditor.i18n.get_string('returntohtmleditor')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onCodeSource
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCode,
        title: _RecitEditor.i18n.get_string('htmleditor')
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(DropdownSetCssProp, {
        selection: selection,
        cssProp: "font-size",
        defaultValue: "16px",
        dataProvider: fontSizes
      }), /*#__PURE__*/_react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "font-weight",
        defaultValue: "normal",
        value: "bold",
        icon: _freeSolidSvgIcons.faBold,
        title: _RecitEditor.i18n.get_string('bold')
      }), /*#__PURE__*/_react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "font-style",
        defaultValue: "normal",
        value: "italic",
        icon: _freeSolidSvgIcons.faItalic,
        title: _RecitEditor.i18n.get_string('italic')
      }), /*#__PURE__*/_react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "text-decoration",
        defaultValue: "normal",
        value: "underline",
        icon: _freeSolidSvgIcons.faUnderline,
        title: _RecitEditor.i18n.get_string('underline')
      }), /*#__PURE__*/_react["default"].createElement(BtnSetCssProp, {
        selection: selection,
        cssProp: "text-decoration",
        defaultValue: "normal",
        value: "line-through",
        icon: _freeSolidSvgIcons.faStrikethrough,
        title: _RecitEditor.i18n.get_string('strikethrough')
      }), /*#__PURE__*/_react["default"].createElement(BtnUnsetCssProp, {
        selection: selection,
        cssProp: ["fontSize", "fontWeight", "fontStyle", "textDecoration"],
        icon: _freeSolidSvgIcons.faRemoveFormat,
        defaultValue: "",
        title: _RecitEditor.i18n.get_string('removeformat')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(BtnColorPicker, {
        selection: selection,
        cssProp: "backgroundColor",
        icon: _freeSolidSvgIcons.faFillDrip,
        defaultValue: "#FFFFFF",
        title: _RecitEditor.i18n.get_string('bgcolor')
      }), /*#__PURE__*/_react["default"].createElement(BtnUnsetCssProp, {
        selection: selection,
        cssProp: ["backgroundColor"],
        icon: _freeSolidSvgIcons.faRemoveFormat,
        defaultValue: "#FFFFFF",
        title: _RecitEditor.i18n.get_string('removebgcolor')
      }), /*#__PURE__*/_react["default"].createElement(BtnColorPicker, {
        selection: selection,
        cssProp: "color",
        icon: _freeSolidSvgIcons.faFont,
        defaultValue: "#000000",
        title: _RecitEditor.i18n.get_string('fontcolor')
      }), /*#__PURE__*/_react["default"].createElement(BtnUnsetCssProp, {
        selection: selection,
        cssProp: ["color"],
        icon: _freeSolidSvgIcons.faRemoveFormat,
        defaultValue: "#000000",
        title: _RecitEditor.i18n.get_string('removefontcolor')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyNumerationTypeset("ul");
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faListUl,
        title: _RecitEditor.i18n.get_string('list')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyNumerationTypeset("ol");
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faListOl,
        title: _RecitEditor.i18n.get_string('numberedlist')
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "left",
        icon: _freeSolidSvgIcons.faAlignLeft,
        title: _RecitEditor.i18n.get_string('alignleft')
      }), /*#__PURE__*/_react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "center",
        icon: _freeSolidSvgIcons.faAlignCenter,
        title: _RecitEditor.i18n.get_string('aligncenter')
      }), /*#__PURE__*/_react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "right",
        icon: _freeSolidSvgIcons.faAlignRight,
        title: _RecitEditor.i18n.get_string('alignright')
      }), /*#__PURE__*/_react["default"].createElement(BtnAlignment, {
        selection: selection,
        cssProp: "justify",
        icon: _freeSolidSvgIcons.faAlignJustify,
        title: _RecitEditor.i18n.get_string('justify')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyIndentTypeset("outdent");
        },
        title: _RecitEditor.i18n.get_string('outdent')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faOutdent
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: function onClick() {
          return _this2.applyIndentTypeset("indent");
        },
        title: _RecitEditor.i18n.get_string('indent')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faIndent
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onAddLink,
        title: _RecitEditor.i18n.get_string('link')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faLink
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onRemoveLink,
        title: _RecitEditor.i18n.get_string('removelink')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUnlink
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onUndo,
        disabled: history.undo.length === 0,
        title: _RecitEditor.i18n.get_string('undo')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUndo
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.props.onRedo,
        disabled: history.redo.length === 0,
        title: _RecitEditor.i18n.get_string('redo')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRedo
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.flags.highlighter ? 'warning' : ButtonsBar.Layout.btnNormal,
        onClick: this.props.onHighlighter,
        title: _RecitEditor.i18n.get_string('highlighttool')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faHighlighter
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.flags.mathFormula ? 'warning' : ButtonsBar.Layout.btnNormal,
        onClick: this.props.onMathFormula,
        title: _RecitEditor.i18n.get_string('math')
      }, /*#__PURE__*/_react["default"].createElement("i", null, /*#__PURE__*/_react["default"].createElement("b", null, "f(x)"))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.flags.mathFormula ? 'warning' : ButtonsBar.Layout.btnNormal,
        id: "btn-addimg",
        onClick: function onClick() {
          return _this2.onAddImageModal(true);
        },
        title: _RecitEditor.i18n.get_string('addimage')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faImage
      })), /*#__PURE__*/_react["default"].createElement(_ScreenCapture.ScreenCapture, {
        onEndCapture: this.props.onScreenCapture
      }, function (_ref) {
        var onStartCapture = _ref.onStartCapture;
        return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
          variant: ButtonsBar.Layout.btnNormal,
          onClick: onStartCapture,
          title: _RecitEditor.i18n.get_string('screenshot')
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faCamera
        }));
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        className: "mr-2 mb-2",
        size: "sm",
        style: {
          border: style.border,
          borderRadius: style.borderRadius
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onRemoveTypeset,
        title: _RecitEditor.i18n.get_string('removeformat')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat
      })))), this.state.modalInputLink && /*#__PURE__*/_react["default"].createElement(InputLink, {
        selection: this.props.selection,
        onClose: this.onCloseInputLink
      }), this.state.modalInputImage && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        key: "2",
        show: this.state.modalInputImage,
        onHide: function onHide() {
          return _this2.onAddImageModal(false);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('addimage'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement(_RecitEditor.ImageSrc, {
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
      document.getElementById('btn-addimg').blur(); //Unselect the button as popup will reopen when pressing enter
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

      // if there is no text selected then it quits
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
        //let node = (sel.anchorNode instanceof Element ? sel.anchorNode :  sel.anchorNode.parentElement);
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

      // if there is no text selected then it quits
      if (sel.sel.isCollapsed) {
        return;
      }
      sel.node.style.textAlign = "";
      sel.node.style.backgroundColor = "";
      sel.node.style.color = "";
      sel.node.style.fontSize = '';
      sel.node.style.fontWeight = '';
      sel.node.style.textDecoration = '';

      // && (sel.sel.extentOffset - sel.sel.anchorOffset > 0)
      if (!sel.isNodeRoot) {
        sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
        sel.node.remove();
      }
    }
  }]);
  return ButtonsBar;
}(_react.Component);
exports.ButtonsBar = ButtonsBar;
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
var DropdownSetCssProp = /*#__PURE__*/function (_Component2) {
  (0, _inherits2["default"])(DropdownSetCssProp, _Component2);
  var _super2 = _createSuper(DropdownSetCssProp);
  function DropdownSetCssProp(props) {
    var _this3;
    (0, _classCallCheck2["default"])(this, DropdownSetCssProp);
    _this3 = _super2.call(this, props);
    _this3.onClick = _this3.onClick.bind((0, _assertThisInitialized2["default"])(_this3));
    return _this3;
  }
  (0, _createClass2["default"])(DropdownSetCssProp, [{
    key: "render",
    value: function render() {
      var _this4 = this;
      var value = this.getCurrentValue();
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.DropdownButton, {
        variant: ButtonsBar.Layout.btnNormal,
        as: _reactBootstrap.ButtonGroup,
        title: value
      }, this.props.dataProvider.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Dropdown.Item, {
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

      // if there is no text selected then it quits
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
        //sel.node.outerHTML = sel.node.innerHTML;
        sel.node.style[prop] = item.value;
      }
    }
  }]);
  return DropdownSetCssProp;
}(_react.Component);
DropdownSetCssProp.defaultProps = {
  selection: null,
  icon: null,
  cssProp: "",
  defaultValue: "",
  dataProvider: "",
  title: ""
};
var BtnSetCssProp = /*#__PURE__*/function (_Component3) {
  (0, _inherits2["default"])(BtnSetCssProp, _Component3);
  var _super3 = _createSuper(BtnSetCssProp);
  function BtnSetCssProp(props) {
    var _this5;
    (0, _classCallCheck2["default"])(this, BtnSetCssProp);
    _this5 = _super3.call(this, props);
    _this5.onClick = _this5.onClick.bind((0, _assertThisInitialized2["default"])(_this5));
    return _this5;
  }
  (0, _createClass2["default"])(BtnSetCssProp, [{
    key: "render",
    value: function render() {
      var variant = this.getCurrentValue() === this.props.value ? ButtonsBar.Layout.btnToggled : ButtonsBar.Layout.btnNormal;
      if (this.props.variant.length > 0) {
        variant = this.props.variant;
      }
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: variant,
        title: this.props.title,
        onClick: this.onClick
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
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

      // if there is no text selected then it quits
      if (sel.sel.isCollapsed) {
        return;
      }
      var prop = this.props.cssProp;
      var selection = sel.sel;
      if (selection.rangeCount) {
        var range = selection.getRangeAt(0);
        var clonedSelection = range.cloneContents();
        var dummydiv = document.createElement('div'); //We have to create a dummy div to get the selected document fragment, fragment doesnt have innerhtml prop
        dummydiv.appendChild(clonedSelection);
        var text = dummydiv.innerHTML;
        var parent = range.startContainer.parentNode;
        var offset = _RecitEditor.Utils.getCaretCharacterOffsetWithin(parent);
        if (this.props.tagName.length > 0 && this.props.tagName.toUpperCase() != parent.tagName) {
          //If the prop is a tag name
          var inner = document.createElement(this.props.tagName);
          inner.innerHTML = text;
          parent.innerHTML = _RecitEditor.Utils.replaceAt(parent.innerHTML, text, inner.outerHTML, offset);
        } else if (text == parent.innerHTML && !parent.style[prop]) {
          //If the text selectioned is the whole tag, set style on the tag rather than create a span
          parent.style[prop] = this.getValue();
        } else if (range.startOffset > 0 && !parent.style[prop]) {
          var _inner = document.createElement("span");
          _inner.style[prop] = this.getValue();
          _inner.innerHTML = text;
          parent.innerHTML = _RecitEditor.Utils.replaceAt(parent.innerHTML, text, _inner.outerHTML, offset);
        } else if (parent.style && parent.style[prop] || this.props.tagName.toUpperCase() == parent.tagName) {
          //Undo the style
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
  return BtnSetCssProp;
}(_react.Component);
exports.BtnSetCssProp = BtnSetCssProp;
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
var BtnColorPicker = /*#__PURE__*/function (_Component4) {
  (0, _inherits2["default"])(BtnColorPicker, _Component4);
  var _super4 = _createSuper(BtnColorPicker);
  function BtnColorPicker(props) {
    var _this6;
    (0, _classCallCheck2["default"])(this, BtnColorPicker);
    _this6 = _super4.call(this, props);
    _this6.onChange = _this6.onChange.bind((0, _assertThisInitialized2["default"])(_this6));
    _this6.onBlur = _this6.onBlur.bind((0, _assertThisInitialized2["default"])(_this6));
    _this6.state = {
      value: _this6.props.defaultValue
    };
    return _this6;
  }
  (0, _createClass2["default"])(BtnColorPicker, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      if (this.props.selection !== null && this.props.selection.node !== null) {
        value = this.RGBToHex(this.props.selection.node.style[this.props.cssProp]);
      }
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        title: this.props.title
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.icon
      }), " ", /*#__PURE__*/_react["default"].createElement("input", {
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

      // Choose correct separator
      var sep = rgb.indexOf(",") > -1 ? "," : " ";
      // Turn "rgb(r,g,b)" into [r,g,b]
      rgb = rgb.substr(4).split(")")[0].split(sep);

      // Convert %s to 0–255
      for (var R in rgb) {
        var _r = rgb[R];
        if (_r.indexOf("%") > -1) rgb[R] = Math.round(_r.substr(0, _r.length - 1) / 100 * 255);
        /* Example:
        75% -> 191
        75/100 = 0.75, * 255 = 191.25 -> 191
        */
      }

      var r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
      if (r.length === 1) r = "0" + r;
      if (g.length === 1) g = "0" + g;
      if (b.length === 1) b = "0" + b;

      /*
          Now we can supply values like either of these:
          rgb(255,25,2)
          rgb(255 25 2)
          rgb(50%,30%,10%)
          rgb(50% 30% 10%)
      */

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

      // if there is no text selected then it quits
      if (sel.sel.isCollapsed) {
        return;
      }
      var prop = this.props.cssProp;
      var color = this.state.value;
      if (sel.isNodeRoot) {
        var newNode = document.createElement("span");
        newNode.appendChild(sel.range.extractContents());
        //sel.node.appendChild(newNode);
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
  return BtnColorPicker;
}(_react.Component);
BtnColorPicker.defaultProps = {
  selection: null,
  icon: null,
  cssProp: "",
  defaultValue: "",
  onClick: null,
  title: ""
};
var BtnUnsetCssProp = /*#__PURE__*/function (_Component5) {
  (0, _inherits2["default"])(BtnUnsetCssProp, _Component5);
  var _super5 = _createSuper(BtnUnsetCssProp);
  function BtnUnsetCssProp(props) {
    var _this7;
    (0, _classCallCheck2["default"])(this, BtnUnsetCssProp);
    _this7 = _super5.call(this, props);
    _this7.onClick = _this7.onClick.bind((0, _assertThisInitialized2["default"])(_this7));
    return _this7;
  }
  (0, _createClass2["default"])(BtnUnsetCssProp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: ButtonsBar.Layout.btnNormal,
        onClick: this.onClick,
        title: this.props.title
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
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
  return BtnUnsetCssProp;
}(_react.Component);
/*class BtnSetCssClass extends Component{
    static defaultProps = {
        selection: null,
        icon: null,
        text: null,
        cssClass: "",
        onClick: null,
        title: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(){
        let sel = this.props.selection;
        let variant = "secondary";

        if((sel !== null) && (sel.node !== null)){
            variant = (sel.node.classList.contains(this.props.cssClass) ? "outline-secondary" : "secondary");
        }

        return <Button variant={variant} onClick={this.onClick} title={this.props.title}><FontAwesomeIcon icon={this.props.icon}/>{this.props.text}</Button>
    }

    onClick(event){
        let sel = this.props.selection;
        let option = this.props.cssClass;
        
        if(sel === null){ return; }
        
        if(sel.isNodeRoot){
            let newNode = document.createElement("span");
            newNode.classList.add(option);
            newNode.appendChild(sel.range.extractContents());
            sel.node.appendChild(newNode);
        }
        else{
            if(sel.node.classList.contains(option)){
                sel.node.classList.remove(option);
            }
            else{
                sel.node.classList.add(option);
            }
        }

        if(this.props.onClick){
            this.props.onClick(event);
        }
    }
}*/
BtnUnsetCssProp.defaultProps = {
  selection: null,
  icon: null,
  cssProp: [],
  defaultValue: "",
  onClick: null,
  title: ""
};
var BtnAlignment = /*#__PURE__*/function (_Component6) {
  (0, _inherits2["default"])(BtnAlignment, _Component6);
  var _super6 = _createSuper(BtnAlignment);
  function BtnAlignment(props) {
    var _this8;
    (0, _classCallCheck2["default"])(this, BtnAlignment);
    _this8 = _super6.call(this, props);
    _this8.onClick = _this8.onClick.bind((0, _assertThisInitialized2["default"])(_this8));
    return _this8;
  }
  (0, _createClass2["default"])(BtnAlignment, [{
    key: "render",
    value: function render() {
      var sel = this.props.selection;
      var variant = ButtonsBar.Layout.btnNormal;
      if (sel !== null && sel.node !== null) {
        variant = sel.node.style.textAlign === this.props.cssProp ? ButtonsBar.Layout.btnToggled : ButtonsBar.Layout.btnNormal;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: variant,
        onClick: this.onClick,
        title: this.props.title
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
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
          //newNode.appendChild(sel.range.extractContents());
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
  return BtnAlignment;
}(_react.Component);
BtnAlignment.defaultProps = {
  selection: null,
  icon: null,
  cssProp: "",
  onClick: null,
  title: ""
};
var InputLink = /*#__PURE__*/function (_Component7) {
  (0, _inherits2["default"])(InputLink, _Component7);
  var _super7 = _createSuper(InputLink);
  function InputLink(props) {
    var _this9;
    (0, _classCallCheck2["default"])(this, InputLink);
    _this9 = _super7.call(this, props);
    _this9.onSave = _this9.onSave.bind((0, _assertThisInitialized2["default"])(_this9));
    _this9.onChange = _this9.onChange.bind((0, _assertThisInitialized2["default"])(_this9));
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
  (0, _createClass2["default"])(InputLink, [{
    key: "render",
    value: function render() {
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        show: true,
        onHide: this.props.onClose
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('createlink'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formURL"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('inputurl')), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
        name: "url",
        type: "text",
        value: this.state.url,
        placeholder: "http://",
        onChange: this.onChange
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Text, {
        className: "text-muted"
      }, "".concat(_RecitEditor.i18n.get_string('texttoshow'), ": ").concat(this.state.text))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
        controlId: "formTarget"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Check, {
        name: "target",
        type: "checkbox",
        checked: this.state.target,
        label: _RecitEditor.i18n.get_string('openinnewwindow'),
        onChange: this.onChange
      })))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
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
  return InputLink;
}(_react.Component);
InputLink.defaultProps = {
  selection: null,
  onClose: null
};