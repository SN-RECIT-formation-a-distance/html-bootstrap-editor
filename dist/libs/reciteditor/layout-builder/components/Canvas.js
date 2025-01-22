"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingMenu = exports.CanvasElement = exports.Canvas = void 0;
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
var _TextEditor = require("../../common/TextEditor");
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
var Canvas = exports.Canvas = function (_Component) {
  function Canvas() {
    (0, _classCallCheck2["default"])(this, Canvas);
    return _callSuper(this, Canvas, arguments);
  }
  (0, _inherits2["default"])(Canvas, _Component);
  return (0, _createClass2["default"])(Canvas, [{
    key: "render",
    value: function render() {
      var style = {
        margin: "auto",
        display: "flex"
      };
      style = this.props.style;
      var main = _react["default"].createElement("div", {
        style: style
      }, this.props.children);
      return main;
    }
  }]);
}(_react.Component);
Canvas.defaultProps = {
  children: null,
  style: null
};
var CanvasElement = exports.CanvasElement = function () {
  function CanvasElement(dom, onSelectCallback, onDropCallback, onEditNodeText) {
    (0, _classCallCheck2["default"])(this, CanvasElement);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDblClick = this.onDblClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onSelectCallback = onSelectCallback;
    this.onDropCallback = onDropCallback;
    this.onEditNodeText = onEditNodeText;
    this.dom = dom;
    this.dom.ondragover = this.onDragOver;
    this.dom.ondragenter = this.onDragEnter;
    this.dom.ondragleave = this.onDragLeave;
    this.dom.ondrop = this.onDrop;
    this.dom.onclick = this.onClickHandler;
    this.dom.onmouseover = this.onMouseOver;
    this.dom.onmouseout = this.onMouseOut;
    CanvasElement.instanceList.push(dom);
    this.state = {
      initDragging: false,
      onDragging: false,
      clickCounter: 0
    };
  }
  return (0, _createClass2["default"])(CanvasElement, [{
    key: "onClickHandler",
    value: function onClickHandler(event) {
      event.preventDefault();
      event.stopPropagation();
      this.state.clickCounter++;
      var that = this;
      if (event.detail === 1) {
        setTimeout(function () {
          if (that.state.clickCounter === 1) {
            that.onClick();
          }
          that.state.clickCounter = 0;
        }, 250);
      } else if (event.detail === 2) {
        this.onDblClick();
        this.state.clickCounter = 0;
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (!this.dom.hasAttribute("contenteditable")) {
        this.onSelectCallback(this.dom);
      }
    }
  }, {
    key: "onDblClick",
    value: function onDblClick() {
      if (!this.dom.hasAttribute("contenteditable")) {
        this.onEditNodeText(this.dom, true);
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      event.stopPropagation();
      var eventData = event.dataTransfer.getData("componentData");
      var el = null;
      if (eventData.length > 0) {
        var componentData = JSON.parse(eventData);
        el = _RecitEditor.HTMLElementData.getInstance().createElement(componentData);
        if (el) {
          CanvasElement.create(el, this.onSelectCallback, this.onDropCallback, this.onEditNodeText);
        }
      } else if (CanvasElement.draggingItem !== null) {
        el = CanvasElement.draggingItem;
        CanvasElement.draggingItem = null;
      }
      if (el !== null) {
        if (event.target.classList.contains('dropping-zone')) {
          try {
            event.target.replaceWith(el);
          } catch (err) {
            console.log(err);
          }
        } else if (event.currentTarget.tagName.toLowerCase() === "body") {
          event.currentTarget.appendChild(el);
        } else {
          console.log(_RecitEditor.i18n.get_string('failedtodrop'), event.target);
        }
      }
      this.state.initDragging = false;
      this.state.onDragging = false;
      this.onDropCallback(this.dom, el);
      return false;
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      event.preventDefault();
      if (!event.target.classList.contains('dropping-zone-hover') && event.target.classList.contains('dropping-zone')) {
        event.target.classList.add('dropping-zone-hover');
      }
      return false;
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.state.onDragging) {
        return;
      }
      this.state.initDragging = true;
      var that = this;
      var cleanUp = function cleanUp() {
        var body = that.dom;
        while (body.parentNode) {
          body = body.parentNode;
        }
        var items = body.querySelectorAll(".dropping-zone");
        items.forEach(function (item) {
          item.remove();
        });
      };
      window.setTimeout(function () {
        if (!that.state.initDragging) {
          return;
        }
        that.state.onDragging = true;
        cleanUp();
        var elClass = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, that.dom);
        if (elClass) {
          elClass.prepareDroppingZones(that.dom);
        }
      }, 1000);
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.target.classList.contains('dropping-zone-hover')) {
        event.target.classList.remove('dropping-zone-hover');
      }
      this.state.initDragging = false;
      this.state.onDragging = false;
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(event) {
      event.stopPropagation();
      event.preventDefault();
      this.dom.setAttribute("data-hovering", "1");
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(event) {
      this.dom.removeAttribute("data-hovering");
    }
  }], [{
    key: "isElementInstancied",
    value: function isElementInstancied(el) {
      var _iterator = _createForOfIteratorHelper(CanvasElement.instanceList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var instance = _step.value;
          if (Object.is(el, instance)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
  }, {
    key: "create",
    value: function create(el, onSelectElement, onDropElement, onEditNodeText) {
      var canvasElement = null;
      if (!CanvasElement.isElementInstancied(el)) {
        canvasElement = new CanvasElement(el, onSelectElement, onDropElement, onEditNodeText);
      }
      var _iterator2 = _createForOfIteratorHelper(el.childNodes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          CanvasElement.create(child, onSelectElement, onDropElement, onEditNodeText);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return canvasElement;
    }
  }]);
}();
CanvasElement.draggingItem = null;
CanvasElement.instanceList = [];
var FloatingMenu = exports.FloatingMenu = function (_Component2) {
  function FloatingMenu(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FloatingMenu);
    _this = _callSuper(this, FloatingMenu, [props]);
    _this.state = {
      saveElement: false,
      width: 0
    };
    return _this;
  }
  (0, _inherits2["default"])(FloatingMenu, _Component2);
  return (0, _createClass2["default"])(FloatingMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.posCanvas === null) {
        return null;
      }
      if (this.props.selectedElement === null) {
        return null;
      }
      if (this.props.device === null) {
        return null;
      }
      if (this.props.selectedElement.tagName === 'BODY') {
        return null;
      }
      if (this.props.selectedElement.getAttribute('contenteditable') === 'true') {
        return null;
      }
      var style = {
        display: 'block',
        top: 0,
        left: 0
      };
      var posCanvas = this.props.posCanvas;
      var posEl = _RecitEditor.UtilsHTML.getBoundingClientRect(this.props.selectedElement, this.props.device.scale);
      var isEditable = true;
      var name = '';
      var help = null;
      var cl = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, this.props.selectedElement);
      if (cl) {
        name = cl.getDesc(this.props.selectedElement);
        help = cl.getHelpText(this.props.selectedElement);
      }
      style.top = Math.max(posCanvas.top + posEl.top - 32, 0);
      style.left = posCanvas.left + posEl.left;
      if (style.left + this.state.width > window.innerWidth) {
        delete style.left;
        style.right = 0;
      }
      var main = _react["default"].createElement("div", {
        className: "floating-menu",
        ref: function ref(_ref) {
          return _this2.setRef(_ref);
        },
        style: style
      }, _react["default"].createElement(_reactBootstrap.ButtonToolbar, null, _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        size: "sm"
      }, _react["default"].createElement(_reactBootstrap.Button, {
        onDragStart: this.props.onDragElement,
        draggable: "true",
        style: {
          cursor: 'grab'
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowsAlt,
        title: _RecitEditor.i18n.get_string('drag')
      }), " ", name), isEditable && _react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onEdit
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEdit,
        title: _RecitEditor.i18n.get_string('edit')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.setState({
            saveElement: true
          });
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.props.onMoveNodeUp(null);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowUp,
        title: _RecitEditor.i18n.get_string('moveelementup')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.props.onMoveNodeDown(null);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowDown,
        title: _RecitEditor.i18n.get_string('moveelementdown')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onCloneNode
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClone,
        title: _RecitEditor.i18n.get_string('clone')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.props.onDeleteElement(null);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTrashAlt,
        title: _RecitEditor.i18n.get_string('delete')
      })), help && _react["default"].createElement(_reactBootstrap.OverlayTrigger, {
        overlay: _react["default"].createElement(_reactBootstrap.Tooltip, null, help)
      }, _react["default"].createElement(_reactBootstrap.Button, null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faInfoCircle
      }), " ")))), this.state.saveElement && _react["default"].createElement(_RecitEditor.TemplateForm, {
        onClose: function onClose() {
          return _this2.setState({
            saveElement: false
          });
        },
        onSave: this.onSaveTemplate.bind(this),
        title: _RecitEditor.i18n.get_string('createtemplate'),
        description: _RecitEditor.i18n.get_string('addcomponentdesc')
      }));
      return main;
    }
  }, {
    key: "setRef",
    value: function setRef(ref) {
      if (!ref) return;
      if (this.state.width != ref.clientWidth) {
        this.setState({
          width: ref.clientWidth
        });
      }
    }
  }, {
    key: "onSaveTemplate",
    value: function onSaveTemplate(data) {
      this.props.onSaveElement(data.name, 'l', this.props.selectedElement);
      this.setState({
        saveElement: false
      });
    }
  }]);
}(_react.Component);
FloatingMenu.defaultProps = {
  posCanvas: null,
  selectedElement: null,
  onDragElement: null,
  onEdit: null,
  onMoveNodeUp: null,
  onMoveNodeDown: null,
  onDeleteElement: null,
  onCloneNode: null,
  onSaveElement: null,
  device: null
};