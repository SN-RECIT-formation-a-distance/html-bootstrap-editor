"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingMenu = exports.CanvasElement = exports.Canvas = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
var _TextEditor = require("../../common/TextEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Canvas = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Canvas, _Component);
  var _super = _createSuper(Canvas);
  function Canvas() {
    (0, _classCallCheck2["default"])(this, Canvas);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Canvas, [{
    key: "render",
    value: function render() {
      var style = {
        margin: "auto",
        display: "flex"
      };
      style = this.props.style;
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, this.props.children);
      return main;
    }
  }]);
  return Canvas;
}(_react.Component);
/**
 * This class attaches all required events for edition to all dom elements.
 * Example: For a dom element to be selectable, it needs to be wrapped with this class.
 */
exports.Canvas = Canvas;
Canvas.defaultProps = {
  children: null,
  style: null
};
var CanvasElement = /*#__PURE__*/function () {
  //Keep a list of instance to avoid recreating canvaselement if it was already instancied

  function CanvasElement(dom, onSelectCallback, onDropCallback, onEditNodeText) {
    (0, _classCallCheck2["default"])(this, CanvasElement);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    //this.onDragStart = this.onDragStart.bind(this);
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
    //this.dom.ondragstart = this.onDragStart;
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
  (0, _createClass2["default"])(CanvasElement, [{
    key: "onClickHandler",
    value: function onClickHandler(event) {
      event.preventDefault(); // Cancel the default action (in case of href)
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
        this.onEditNodeText(this.dom);
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      // it needs to stop propagation otherwise it will dispatch onFillInSlot in cascade. We want just assign a section to one single slot.
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
          //this.dom.appendChild(el);
          event.currentTarget.appendChild(el);
        } else {
          console.log(_RecitEditor.i18n.get_string('failedtodrop'), event.target);
        }
      }
      this.state.initDragging = false;
      this.state.onDragging = false;
      //let el = React.createElement(component.element, {});
      //ReactDOM.render(el, this.dom);

      this.onDropCallback(this.dom, el);
      return false;
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      event.preventDefault(); // Necessary to allow us to drop.
      if (!event.target.classList.contains('dropping-zone-hover') && event.target.classList.contains('dropping-zone')) {
        event.target.classList.add('dropping-zone-hover');
      }
      return false;
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(event) {
      // do not cascate the event towards the parents
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

      // wait 0.5 second to add the dropping zone
      window.setTimeout(function () {
        // if the user moved the mouse then we do not add the dropping zone
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
  return CanvasElement;
}();
exports.CanvasElement = CanvasElement;
CanvasElement.draggingItem = null;
CanvasElement.instanceList = [];
var FloatingMenu = /*#__PURE__*/function (_Component2) {
  (0, _inherits2["default"])(FloatingMenu, _Component2);
  var _super2 = _createSuper(FloatingMenu);
  function FloatingMenu(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FloatingMenu);
    _this = _super2.call(this, props);
    _this.state = {
      saveElement: false
    };
    return _this;
  }
  (0, _createClass2["default"])(FloatingMenu, [{
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
      var isEditable = true; //TextEditorModal.isTagEditable(this.props.selectedElement.tagName);
      var name = '';
      var help = null;
      var cl = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, this.props.selectedElement);
      if (cl) {
        name = cl.getDesc(this.props.selectedElement);
        help = cl.getHelpText(this.props.selectedElement);
      }

      // 32px = ButtonToolBar thickness
      style.top = Math.max(posCanvas.top + posEl.top - 32, 0);
      style.left = posCanvas.left + posEl.left;
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "floating-menu",
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonToolbar, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        size: "sm"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onDragStart: this.props.onDragElement,
        draggable: "true",
        style: {
          cursor: 'grab'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowsAlt,
        title: _RecitEditor.i18n.get_string('drag')
      }), " ", name), isEditable && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onEdit
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEdit,
        title: _RecitEditor.i18n.get_string('edit')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.setState({
            saveElement: true
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.props.onMoveNodeUp(null);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowUp,
        title: _RecitEditor.i18n.get_string('moveelementup')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.props.onMoveNodeDown(null);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowDown,
        title: _RecitEditor.i18n.get_string('moveelementdown')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onCloneNode
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faClone,
        title: _RecitEditor.i18n.get_string('clone')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.props.onDeleteElement(null);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTrashAlt,
        title: _RecitEditor.i18n.get_string('delete')
      })), help && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.OverlayTrigger, {
        overlay: /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Tooltip, null, help)
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faInfoCircle
      }), " ")))), this.state.saveElement && /*#__PURE__*/_react["default"].createElement(_RecitEditor.TemplateForm, {
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
    key: "onSaveTemplate",
    value: function onSaveTemplate(data) {
      this.props.onSaveElement(data.name, 'l', this.props.selectedElement);
      this.setState({
        saveElement: false
      });
    }
  }]);
  return FloatingMenu;
}(_react.Component);
exports.FloatingMenu = FloatingMenu;
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