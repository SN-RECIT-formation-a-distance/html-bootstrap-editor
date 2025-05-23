"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutBuilder = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
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
var _html2canvas = _interopRequireDefault(require("html2canvas"));
var _AccessibilityChecker = require("./components/AccessibilityChecker");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var LayoutBuilder = exports.LayoutBuilder = function (_Component) {
  function LayoutBuilder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, LayoutBuilder);
    _this = _callSuper(this, LayoutBuilder, [props]);
    _this.onNavbarSelect = _this.onNavbarSelect.bind(_this);
    _this.onSaveAndClose = _this.onSaveAndClose.bind(_this);
    _this.onWindowResize = _this.onWindowResize.bind(_this);
    _this.windowResizeTo = _this.windowResizeTo.bind(_this);
    window.addEventListener("resize", _this.onWindowResize);
    var device = window.screen.width <= LayoutBuilder.properties.maxScreenWidth ? 'lg' : 'xl';
    _this.state = {
      device: device,
      view: 'designer'
    };
    _this.mainViewRef = _react["default"].createRef();
    _this.historyManager = new _RecitEditor.HistoryManager();
    return _this;
  }
  (0, _inherits2["default"])(LayoutBuilder, _Component);
  return (0, _createClass2["default"])(LayoutBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.windowResizeTo();
      window.moveTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var main = _react["default"].createElement("div", {
        className: "layout-builder"
      }, _react["default"].createElement(_reactBootstrap.Navbar, {
        bg: "dark",
        variant: "dark",
        onSelect: this.onNavbarSelect,
        expand: "sm"
      }, _react["default"].createElement(_reactBootstrap.Navbar.Brand, null, _react["default"].createElement("img", {
        alt: "R\xC9CIT",
        src: _RecitEditor.Assets.RecitLogo,
        width: "30",
        height: "30",
        className: "d-inline-block align-top"
      }), ' ', _RecitEditor.i18n.get_string('pluginname')), _react["default"].createElement(_reactBootstrap.Navbar.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), _react["default"].createElement(_reactBootstrap.Navbar.Collapse, {
        id: "basic-navbar-nav"
      }, _react["default"].createElement(_reactBootstrap.Nav, null, this.props.options.wordProcessor && _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "wordbuilder"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileWord,
        title: _RecitEditor.i18n.get_string('texteditor')
      }))), _react["default"].createElement(_reactBootstrap.Nav, {
        className: "mr-auto"
      }), _react["default"].createElement(_reactBootstrap.Nav, {
        className: "mr-auto",
        activeKey: this.state.view
      }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "designer"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTh,
        title: _RecitEditor.i18n.get_string('canvas')
      }), " ", _react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('canvas'))), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "preview"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEye,
        title: _RecitEditor.i18n.get_string('preview')
      }), " ", _react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('preview'))), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "sourceCode"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCode,
        title: _RecitEditor.i18n.get_string('sourcecode')
      }), " ", _react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('sourcecode'))), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "sourceCodeDesigner"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faColumns,
        title: _RecitEditor.i18n.get_string('sourcecodedesigner')
      }), " ", _react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('canvas'), "-", _RecitEditor.i18n.get_string('sourcecode')))), (this.state.view == 'designer' || this.state.view == 'sourceCodeDesigner') && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.Nav, null, _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "undo"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUndo,
        title: _RecitEditor.i18n.get_string('undo')
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "redo"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRedo,
        title: _RecitEditor.i18n.get_string('redo')
      }))), _react["default"].createElement(_reactBootstrap.Nav, {
        className: "separator"
      })), _react["default"].createElement(_AccessibilityChecker.AccessibilityChecker, null), _react["default"].createElement(_reactBootstrap.Nav, {
        activeKey: this.state.device
      }, _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "xs"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faMobileAlt,
        title: _RecitEditor.i18n.get_string('smartphone')
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "sm"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTabletAlt,
        title: _RecitEditor.i18n.get_string('verticaltablet')
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "md"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTabletAlt,
        title: _RecitEditor.i18n.get_string('horizontaltablet'),
        style: {
          transform: 'rotate(90deg)'
        }
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "lg"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faLaptop,
        title: _RecitEditor.i18n.get_string('hdscreen')
      })), _react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "xl"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faDesktop,
        title: _RecitEditor.i18n.get_string('fhdscreen')
      }))), _react["default"].createElement(_reactBootstrap.Nav, {
        className: "separator"
      }), _react["default"].createElement(_reactBootstrap.Button, {
        variant: "success",
        size: "sm",
        onClick: this.onSaveAndClose
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      }), " ", _RecitEditor.i18n.get_string('save')))), _react["default"].createElement(MainView, {
        ref: this.mainViewRef,
        content: this.props.content,
        device: this.getDeviceDimension(),
        view: this.state.view,
        historyManager: this.historyManager
      }));
      return main;
    }
  }, {
    key: "onNavbarSelect",
    value: function onNavbarSelect(eventKey, event) {
      if (eventKey === 'wordbuilder') {
        this.props.onChange(this.mainViewRef.current.getData());
        this.props.onSelectBuilder('word');
      } else if (['designer', 'preview', 'sourceCode', 'sourceCodeDesigner'].includes(eventKey)) {
        _RecitEditor.Event.trigger('onBeforeViewChange', {
          view: eventKey
        });
        this.setState({
          view: eventKey
        });
      } else if (eventKey === 'undo') {
        this.historyManager.onUndo(this.mainViewRef.current.setData, this.mainViewRef.current.getData());
      } else if (eventKey === 'redo') {
        this.historyManager.onRedo(this.mainViewRef.current.setData, this.mainViewRef.current.getData());
      } else {
        this.setState({
          device: eventKey
        }, this.windowResizeTo);
      }
    }
  }, {
    key: "onScreenshot",
    value: function onScreenshot() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        _this2.mainViewRef.current.screenshot(resolve);
      });
    }
  }, {
    key: "windowResizeTo",
    value: function windowResizeTo() {
      var oldPos = localStorage.getItem('htmlbseditor.pos');
      if (oldPos) {
        oldPos = JSON.parse(oldPos);
        window.moveTo(oldPos.x, oldPos.y);
        window.resizeTo(oldPos.width, oldPos.height);
      }
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.forceUpdate();
      localStorage.setItem('htmlbseditor.pos', JSON.stringify({
        x: window.screenX,
        y: window.screenY,
        width: window.outerWidth,
        height: window.outerHeight
      }));
    }
  }, {
    key: "onSaveAndClose",
    value: function onSaveAndClose() {
      var _this$mainViewRef$cur;
      _RecitEditor.Event.trigger('onSaveAndClose', {
        view: this.state.view,
        body: (_this$mainViewRef$cur = this.mainViewRef.current) === null || _this$mainViewRef$cur === void 0 ? void 0 : _this$mainViewRef$cur.getBody()
      });
      var content = this.mainViewRef.current.getData();
      this.props.onSaveAndClose(content);
    }
  }, {
    key: "getDeviceDimension",
    value: function getDeviceDimension() {
      var device = null;
      function getScale(device) {
        return Math.min(1, (window.innerWidth - LayoutBuilder.properties.leftPanel.width) / device.width);
      }
      var deviceHeight = window.innerHeight - LayoutBuilder.properties.topNavBar.height;
      switch (this.state.device) {
        case 'xs':
          device = {
            name: 'xs',
            width: 375,
            height: deviceHeight,
            scale: 1
          };
          break;
        case 'sm':
          device = {
            name: 'sm',
            width: 768,
            height: deviceHeight,
            scale: 1
          };
          break;
        case 'md':
          device = {
            name: 'md',
            width: 1024,
            height: deviceHeight,
            scale: 1
          };
          break;
        case 'lg':
          device = {
            name: 'lg',
            width: 1366,
            height: deviceHeight,
            scale: 1
          };
          break;
        case 'xl':
        default:
          device = {
            name: 'xl',
            width: 1500,
            height: deviceHeight,
            scale: 1
          };
      }
      device.scale = getScale(device);
      if (device.scale < 1) {
        device.height = deviceHeight / device.scale;
      }
      return device;
    }
  }]);
}(_react.Component);
LayoutBuilder.defaultProps = (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
  content: "",
  onSelectBuilder: null,
  onChange: null,
  onSaveAndClose: null
}, "onChange", null), "options", {});
LayoutBuilder.properties = {
  topNavBar: {
    height: 56
  },
  leftPanel: {
    width: 446,
    panelList: {
      width: 380
    }
  },
  maxScreenWidth: 1920
};
var MainView = function (_Component2) {
  function MainView(props) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MainView);
    _this3 = _callSuper(this, MainView, [props]);
    _this3.onSelectElement = _this3.onSelectElement.bind(_this3);
    _this3.onUnselectElement = _this3.onUnselectElement.bind(_this3);
    _this3.onDeleteElement = _this3.onDeleteElement.bind(_this3);
    _this3.onMoveNodeUp = _this3.onMoveNodeUp.bind(_this3);
    _this3.onMoveNodeDown = _this3.onMoveNodeDown.bind(_this3);
    _this3.onCloneNode = _this3.onCloneNode.bind(_this3);
    _this3.onAfterInsertNode = _this3.onAfterInsertNode.bind(_this3);
    _this3.onAfterReplaceNode = _this3.onAfterReplaceNode.bind(_this3);
    _this3.onReplaceNode = _this3.onReplaceNode.bind(_this3);
    _this3.onAfterAssignProperty = _this3.onAfterAssignProperty.bind(_this3);
    _this3.onStartEditingNodeText = _this3.onStartEditingNodeText.bind(_this3);
    _this3.onFinishEditingNodeText = _this3.onFinishEditingNodeText.bind(_this3);
    _this3.onInsertTemplate = _this3.onInsertTemplate.bind(_this3);
    _this3.onSaveTemplate = _this3.onSaveTemplate.bind(_this3);
    _this3.onDragStart = _this3.onDragStart.bind(_this3);
    _this3.onDragEnd = _this3.onDragEnd.bind(_this3);
    _this3.onDrop = _this3.onDrop.bind(_this3);
    _this3.getBody = _this3.getBody.bind(_this3);
    _this3.getData = _this3.getData.bind(_this3);
    _this3.setData = _this3.setData.bind(_this3);
    _this3.onKey = _this3.onKey.bind(_this3);
    _this3.onPanelChange = _this3.onPanelChange.bind(_this3);
    var designer = new _RecitEditor.DesignerState(_this3, _this3.props.historyManager);
    var sourceCode = new _RecitEditor.SourceCodeState(_this3);
    _this3.canvasState = {
      designer: designer,
      preview: new _RecitEditor.PreviewState(_this3),
      sourceCode: sourceCode,
      sourceCodeDesigner: new _RecitEditor.SourceCodeDesignerState(_this3, designer, sourceCode)
    };
    _this3.state = {
      canvasState: 'designer',
      selectedElement: null,
      panels: {
        components: 1,
        properties: 0,
        treeView: 0
      }
    };
    return _this3;
  }
  (0, _inherits2["default"])(MainView, _Component2);
  return (0, _createClass2["default"])(MainView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setData(this.props.content);
      this.props.historyManager.addHistoryItem(this.props.content);
      this.loadTemplates();
      document.body.onkeyup = this.onKey;
      _RecitEditor.Event.trigger('onViewChange', {
        view: this.props.view,
        getBody: this.getBody
      });
    }
  }, {
    key: "loadTemplates",
    value: function loadTemplates() {
      var p = _RecitEditor.Templates.onLoad();
      var that = this;
      p.then(function (webApiResult) {
        if (!webApiResult.error) {
          that.forceUpdate();
        } else {
          alert("Error: ".concat(webApiResult.msg));
        }
      }, function (err, response) {
        console.log(err, response);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;
      if (prevProps.view !== this.props.view) {
        var data = "";
        if (prevProps.view == 'sourceCodeDesigner') {
          data = this.canvasState.designer.getData(true);
        } else {
          data = this.canvasState[prevProps.view].getData();
        }
        this.setData(data);
        this.setState({
          canvasState: this.props.view
        }, function () {
          _this4.onPanelChange();
          _RecitEditor.Event.trigger('onViewChange', {
            view: _this4.props.view,
            getBody: _this4.getBody
          });
        });
      }
      if (prevProps.device.name !== this.props.device.name || prevProps.view !== this.props.view) {
        this.onUnselectElement();
      }
      if (prevProps.content !== this.props.content) {
        this.setData(this.props.content);
      }
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this.canvasState[this.props.view].getBody();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.canvasState[this.props.view].getData(true);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      return this.canvasState[this.props.view].setData(data, this.state.selectedElement);
    }
  }, {
    key: "forceRefresh",
    value: function forceRefresh() {
      if (typeof this.state.selectedElement == 'undefined' || this.state.selectedElement.deleted) {
        this.setState({
          selectedElement: null
        });
      } else {
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var areaHeight = {
        height: "calc(100vh - ".concat(LayoutBuilder.properties.topNavBar.height, "px")
      };
      var main = _react["default"].createElement("div", {
        className: "main"
      }, _react["default"].createElement("div", {
        className: "left-area",
        style: areaHeight
      }, _react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        style: {
          height: '100%',
          backgroundColor: '#6c757d'
        }
      }, _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        "aria-label": "Buttons",
        style: {
          flexDirection: 'column'
        }
      }, _react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.components === 1,
        value: "components,1",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('templates'),
        glyph: _freeSolidSvgIcons.faCloud
      }), _react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.components === 3,
        value: "components,3",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('components'),
        glyph: _freeSolidSvgIcons.faPuzzlePiece
      }), _react["default"].createElement("div", {
        style: {
          margin: '4px 0',
          height: '1px',
          backgroundColor: '#fff'
        }
      }), _react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.properties === 3,
        value: "properties,3",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('basic'),
        glyph: _freeSolidSvgIcons.faCubes
      }), _react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.properties === 1,
        value: "properties,1",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('bootstrap'),
        svg: _RecitEditor.Assets.faBootstrap
      }), _react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.properties === 2,
        value: "properties,2",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('htmlproprieties'),
        svg: _RecitEditor.Assets.faHtml
      }), _react["default"].createElement("div", {
        style: {
          margin: '4px 0',
          height: '1px',
          backgroundColor: '#fff'
        }
      }), _react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.treeView === 1,
        value: "treeView,1",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('tree'),
        glyph: _freeSolidSvgIcons.faSitemap
      }))), (this.state.panels.components | this.state.panels.properties | this.state.panels.treeView) >= 1 && _react["default"].createElement("div", {
        className: "panel-list",
        style: {
          width: "".concat(LayoutBuilder.properties.leftPanel.panelList.width, "px")
        }
      }, this.state.panels.components === 1 && _react["default"].createElement(_RecitEditor.VisualComponentList, {
        onDragEnd: this.onDragEnd,
        onInsert: this.onInsertTemplate,
        onSaveTemplate: this.onSaveTemplate,
        tab: "tpl"
      }), this.state.panels.components === 3 && _react["default"].createElement(_RecitEditor.VisualComponentList, {
        onDragEnd: this.onDragEnd,
        onInsert: this.onInsertTemplate,
        onSaveTemplate: this.onSaveTemplate,
        tab: "comp"
      }), this.state.panels.properties === 1 && _react["default"].createElement(_RecitEditor.ComponentProperties, {
        onReplaceNode: this.onReplaceNode,
        onAfterInsertNode: this.onAfterInsertNode,
        onAfterAssignProperty: this.onAfterAssignProperty,
        onAfterReplaceNode: this.onAfterReplaceNode,
        onDeleteElement: this.onDeleteElement,
        element: this.state.selectedElement,
        tab: "bs"
      }), this.state.panels.properties === 2 && _react["default"].createElement(_RecitEditor.ComponentProperties, {
        onReplaceNode: this.onReplaceNode,
        onAfterInsertNode: this.onAfterInsertNode,
        onAfterAssignProperty: this.onAfterAssignProperty,
        onAfterReplaceNode: this.onAfterReplaceNode,
        onDeleteElement: this.onDeleteElement,
        element: this.state.selectedElement,
        tab: "html"
      }), this.state.panels.properties === 3 && _react["default"].createElement(_RecitEditor.ComponentProperties, {
        onReplaceNode: this.onReplaceNode,
        onAfterInsertNode: this.onAfterInsertNode,
        onAfterAssignProperty: this.onAfterAssignProperty,
        onAfterReplaceNode: this.onAfterReplaceNode,
        onDeleteElement: this.onDeleteElement,
        element: this.state.selectedElement,
        tab: "bm"
      }), this.state.panels.treeView === 1 && _react["default"].createElement(_RecitEditor.TreeView, {
        data: this.canvasState.designer.getBody(),
        onSelect: this.onSelectElement,
        selectedElement: this.state.selectedElement,
        view: this.props.view,
        onSaveElement: this.onSaveTemplate,
        onDeleteElement: this.onDeleteElement,
        onMoveNodeUp: this.onMoveNodeUp,
        onMoveNodeDown: this.onMoveNodeDown
      }))), _react["default"].createElement("div", {
        className: "center-area",
        style: areaHeight
      }, _react["default"].createElement("div", {
        className: "d-flex"
      }, this.canvasState.sourceCodeDesigner.render(this.props.view, this.state.selectedElement), this.canvasState.preview.render(this.props.view === 'preview', this.state.selectedElement))));
      return main;
    }
  }, {
    key: "onPanelChange",
    value: function onPanelChange(value) {
      value = value || null;
      var panels = this.state.panels;
      var selectedElement = this.state.selectedElement;
      if (value !== null) {
        var attr = value.split(',')[0];
        value = parseInt(value.split(',')[1]);
        panels[attr] = panels[attr] === value ? 0 : value;
      } else {
        panels = this.canvasState[this.state.canvasState].onPanelChange(panels);
      }
      if (panels.components === panels.properties && panels.properties === panels.treeView && panels.treeView === 0) {
        selectedElement = this.canvasState[this.state.canvasState].onSelectElement(this.state.selectedElement, this.state.selectedElement, _RecitEditor.JsNx.clone(panels)).el;
      }
      this.setState({
        panels: panels,
        selectedElement: selectedElement
      });
    }
  }, {
    key: "onContentChange",
    value: function onContentChange(data, origin) {
      this.canvasState[this.state.canvasState].onContentChange(data, origin);
      _RecitEditor.Event.trigger('onViewUpdate', {
        data: data,
        origin: origin
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(dom, newEl) {
      if (newEl) {
        var cl = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, newEl);
        if (cl && cl.modalCreation) {
          this.onSelectElement(newEl);
        } else {
          this.onUnselectElement();
        }
      }
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.canvasState[this.state.canvasState].onDragEnd();
    }
  }, {
    key: "onAfterAssignProperty",
    value: function onAfterAssignProperty() {
      _RecitEditor.Event.trigger('onViewUpdate', {
        data: this.getData(),
        origin: this.state.canvasState
      });
    }
  }, {
    key: "onUnselectElement",
    value: function onUnselectElement() {
      var result = this.canvasState[this.state.canvasState].onSelectElement(null, null, this.state.panels);
      this.setState({
        selectedElement: result.el,
        panels: result.panels
      });
    }
  }, {
    key: "onSelectElement",
    value: function onSelectElement(el) {
      var result = this.canvasState[this.state.canvasState].onSelectElement(el, this.state.selectedElement, this.state.panels);
      this.setState({
        selectedElement: result.el,
        panels: result.panels
      });
    }
  }, {
    key: "onDeleteElement",
    value: function onDeleteElement(el) {
      this.canvasState[this.state.canvasState].onDeleteElement(el || this.state.selectedElement);
      this.setState({
        selectedElement: null
      });
    }
  }, {
    key: "onMoveNodeUp",
    value: function onMoveNodeUp(el) {
      this.canvasState[this.state.canvasState].onMoveNodeUp(el || this.state.selectedElement);
      this.forceUpdate();
    }
  }, {
    key: "onKey",
    value: function onKey(e) {
      this.canvasState[this.state.canvasState].onKey(e, this.state.selectedElement);
    }
  }, {
    key: "onMoveNodeDown",
    value: function onMoveNodeDown(el) {
      this.canvasState[this.state.canvasState].onMoveNodeDown(el || this.state.selectedElement);
      this.forceUpdate();
    }
  }, {
    key: "onCloneNode",
    value: function onCloneNode() {
      this.canvasState[this.state.canvasState].onCloneNode(this.state.selectedElement);
      this.forceUpdate();
    }
  }, {
    key: "onAfterInsertNode",
    value: function onAfterInsertNode(elems) {
      this.canvasState[this.state.canvasState].onAfterInsertNode(elems);
      this.forceUpdate();
    }
  }, {
    key: "onAfterReplaceNode",
    value: function onAfterReplaceNode(elems) {
      this.canvasState[this.state.canvasState].onAfterInsertNode(elems);
      this.forceUpdate();
    }
  }, {
    key: "onReplaceNode",
    value: function onReplaceNode(fromEl, toEl) {
      this.canvasState[this.state.canvasState].onReplaceNode(fromEl, toEl);
      this.onUnselectElement();
      this.forceUpdate();
    }
  }, {
    key: "onInsertTemplate",
    value: function onInsertTemplate(position, item) {
      this.canvasState[this.state.canvasState].onInsertTemplate(position, item);
      this.forceUpdate();
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      event.stopPropagation();
      _RecitEditor.CanvasElement.draggingItem = this.state.selectedElement;
      event.dataTransfer.setDragImage(this.state.selectedElement, 0, 0);
    }
  }, {
    key: "onStartEditingNodeText",
    value: function onStartEditingNodeText(el, dbClick) {
      if (el instanceof HTMLElement) {
        this.canvasState[this.state.canvasState].onStartEditingNodeText(el, dbClick);
        this.setState({
          selectedElement: el
        });
      } else {
        this.canvasState[this.state.canvasState].onStartEditingNodeText(this.state.selectedElement, dbClick);
        this.forceUpdate();
      }
    }
  }, {
    key: "onFinishEditingNodeText",
    value: function onFinishEditingNodeText(html) {
      this.canvasState[this.state.canvasState].onFinishEditingNodeText(html);
      this.forceUpdate();
    }
  }, {
    key: "screenshot",
    value: function screenshot(resolve, ele) {
      var el = ele || this.canvasState[this.state.canvasState].getBody() || null;
      if (el === null) {
        return;
      }
      (0, _html2canvas["default"])(el, {
        useCORS: true
      }).then(function (canvas) {
        var data = canvas.toDataURL();
        var MAX_WIDTH = 600;
        var MAX_HEIGHT = 600;
        var fileType = "png";
        var p2 = _RecitEditor.Utils.resizeImageFromSize(data, MAX_WIDTH, MAX_HEIGHT, fileType);
        return p2.then(function (img) {
          resolve(img);
        });
      });
    }
  }, {
    key: "onSaveTemplate",
    value: function onSaveTemplate(name, type, ele) {
      var p = null;
      if (type === 'l') {
        var el = ele || this.canvasState.designer.getBody() || null;
        if (el === null) {
          return;
        }
        p = (0, _html2canvas["default"])(el, {
          useCORS: true
        }).then(function (canvas) {
          var data = canvas.toDataURL();
          var MAX_WIDTH = 600;
          var MAX_HEIGHT = 600;
          var fileType = "png";
          var p2 = _RecitEditor.Utils.resizeImageFromSize(data, MAX_WIDTH, MAX_HEIGHT, fileType);
          return p2.then(function (img) {
            return _RecitEditor.Templates.onSave(name, type, el.outerHTML, img);
          });
        });
      }
      var that = this;
      p.then(function (webApiResult) {
        if (!webApiResult.error) {
          _RecitEditor.$glVars.feedback.showInfo(_RecitEditor.i18n.get_string('pluginname'), _RecitEditor.i18n.get_string('msgsuccess'), 3);
          that.loadTemplates();
        } else {
          _RecitEditor.$glVars.feedback.showError(_RecitEditor.i18n.get_string('pluginname'), webApiResult.msg);
        }
      });
    }
  }]);
}(_react.Component);
MainView.defaultProps = {
  content: "",
  device: null,
  view: "designer",
  historyManager: null
};
var LeftPanelButton = function (_Component3) {
  function LeftPanelButton() {
    (0, _classCallCheck2["default"])(this, LeftPanelButton);
    return _callSuper(this, LeftPanelButton, arguments);
  }
  (0, _inherits2["default"])(LeftPanelButton, _Component3);
  return (0, _createClass2["default"])(LeftPanelButton, [{
    key: "render",
    value: function render() {
      var _this5 = this;
      var fontSize = this.props.text ? '1rem' : '2rem';
      var main = _react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.checked ? 'success' : 'secondary',
        onClick: function onClick(e) {
          return _this5.props.onClick(_this5.props.value);
        },
        style: {
          fontSize: fontSize,
          flex: 'none',
          minHeight: '55px'
        },
        title: this.props.title
      }, this.props.glyph && _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.glyph
      }), this.props.text && this.props.text, this.props.svg && _react["default"].createElement("i", null, this.props.svg));
      return main;
    }
  }]);
}(_react.Component);
LeftPanelButton.defaultProps = {
  checked: false,
  onClick: null,
  value: "",
  title: "",
  text: null,
  glyph: null,
  svg: null
};