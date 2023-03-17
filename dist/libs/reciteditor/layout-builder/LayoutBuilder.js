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
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../RecitEditor");
var _html2canvas = _interopRequireDefault(require("html2canvas"));
var _LayoutBuilder$defaul;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LayoutBuilder = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(LayoutBuilder, _Component);
  var _super = _createSuper(LayoutBuilder);
  function LayoutBuilder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, LayoutBuilder);
    _this = _super.call(this, props);
    _this.onNavbarSelect = _this.onNavbarSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSaveAndClose = _this.onSaveAndClose.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onWindowResize = _this.onWindowResize.bind((0, _assertThisInitialized2["default"])(_this));
    _this.windowResizeTo = _this.windowResizeTo.bind((0, _assertThisInitialized2["default"])(_this));
    window.addEventListener("resize", _this.onWindowResize);
    var device = window.screen.width <= LayoutBuilder.properties.maxScreenWidth ? 'lg' : 'xl';
    _this.state = {
      device: device,
      view: 'designer'
    };
    _this.mainViewRef = /*#__PURE__*/_react["default"].createRef();
    _this.historyManager = new _RecitEditor.HistoryManager();
    return _this;
  }
  (0, _createClass2["default"])(LayoutBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.windowResizeTo();
      window.moveTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "layout-builder"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar, {
        bg: "dark",
        variant: "dark",
        onSelect: this.onNavbarSelect,
        expand: "sm"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Brand, null, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "R\xC9CIT",
        src: _RecitEditor.Assets.RecitLogo,
        width: "30",
        height: "30",
        className: "d-inline-block align-top"
      }), ' ', _RecitEditor.i18n.get_string('pluginname')), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Collapse, {
        id: "basic-navbar-nav"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, null, this.props.options.wordProcessor && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "wordbuilder"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileWord,
        title: _RecitEditor.i18n.get_string('texteditor')
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
        className: "mr-auto"
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
        className: "mr-auto",
        activeKey: this.state.view
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "designer"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTh,
        title: _RecitEditor.i18n.get_string('canvas')
      }), " ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('canvas'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "preview"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEye,
        title: _RecitEditor.i18n.get_string('preview')
      }), " ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('preview'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "sourceCode"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCode,
        title: _RecitEditor.i18n.get_string('sourcecode')
      }), " ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('sourcecode'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "sourceCodeDesigner"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faColumns,
        title: _RecitEditor.i18n.get_string('sourcecodedesigner')
      }), " ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "d-mobile-none"
      }, _RecitEditor.i18n.get_string('canvas'), "-", _RecitEditor.i18n.get_string('sourcecode')))), (this.state.view == 'designer' || this.state.view == 'sourceCodeDesigner') && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "undo"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUndo,
        title: _RecitEditor.i18n.get_string('undo')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "redo"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRedo,
        title: _RecitEditor.i18n.get_string('redo')
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
        className: "separator"
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
        activeKey: this.state.device
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "xs"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faMobileAlt,
        title: _RecitEditor.i18n.get_string('smartphone')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "sm"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTabletAlt,
        title: _RecitEditor.i18n.get_string('verticaltablet')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "md"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTabletAlt,
        title: _RecitEditor.i18n.get_string('horizontaltablet'),
        style: {
          transform: 'rotate(90deg)'
        }
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "lg"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faLaptop,
        title: _RecitEditor.i18n.get_string('hdscreen')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
        eventKey: "xl"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faDesktop,
        title: _RecitEditor.i18n.get_string('fhdscreen')
      }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
        className: "separator"
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "success",
        size: "sm",
        onClick: this.onSaveAndClose
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      }), " ", _RecitEditor.i18n.get_string('save')))), /*#__PURE__*/_react["default"].createElement(MainView, {
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
        this.setState({
          view: eventKey
        });
      } else if (eventKey === 'undo') {
        this.historyManager.onUndo(this.mainViewRef.current.setData, this.mainViewRef.current.getData());
      } else if (eventKey === 'redo') {
        this.historyManager.onRedo(this.mainViewRef.current.setData, this.mainViewRef.current.getData());
      } else {
        // device
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
        //this.setState({view: 'preview'}, () => this.mainViewRef.current.screenshot(resolve));
      });
    }
  }, {
    key: "windowResizeTo",
    value: function windowResizeTo() {
      var device = this.getDeviceDimension();
      var width = device.width + LayoutBuilder.properties.leftPanel.width + 15 + (this.state.view === 'sourceCodeDesigner' ? 780 : 0);
      window.resizeTo(Math.min(width, screen.availWidth), screen.availHeight);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.forceUpdate();
    }
  }, {
    key: "onSaveAndClose",
    value: function onSaveAndClose() {
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
  return LayoutBuilder;
}(_react.Component);
exports.LayoutBuilder = LayoutBuilder;
LayoutBuilder.defaultProps = (_LayoutBuilder$defaul = {
  content: "",
  onSelectBuilder: null,
  onChange: null,
  onSaveAndClose: null
}, (0, _defineProperty2["default"])(_LayoutBuilder$defaul, "onChange", null), (0, _defineProperty2["default"])(_LayoutBuilder$defaul, "options", {}), _LayoutBuilder$defaul);
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
var MainView = /*#__PURE__*/function (_Component2) {
  (0, _inherits2["default"])(MainView, _Component2);
  var _super2 = _createSuper(MainView);
  function MainView(props) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MainView);
    _this3 = _super2.call(this, props);
    _this3.onSelectElement = _this3.onSelectElement.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onUnselectElement = _this3.onUnselectElement.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onDeleteElement = _this3.onDeleteElement.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onMoveNodeUp = _this3.onMoveNodeUp.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onMoveNodeDown = _this3.onMoveNodeDown.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onCloneNode = _this3.onCloneNode.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onAfterInsertNode = _this3.onAfterInsertNode.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onAfterReplaceNode = _this3.onAfterReplaceNode.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onAfterAssignProperty = _this3.onAfterAssignProperty.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onStartEditingNodeText = _this3.onStartEditingNodeText.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onFinishEditingNodeText = _this3.onFinishEditingNodeText.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onInsertTemplate = _this3.onInsertTemplate.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onSaveTemplate = _this3.onSaveTemplate.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onDragStart = _this3.onDragStart.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onDragEnd = _this3.onDragEnd.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onDrop = _this3.onDrop.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.getData = _this3.getData.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.setData = _this3.setData.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onKey = _this3.onKey.bind((0, _assertThisInitialized2["default"])(_this3));
    _this3.onPanelChange = _this3.onPanelChange.bind((0, _assertThisInitialized2["default"])(_this3));
    var designer = new _RecitEditor.DesignerState((0, _assertThisInitialized2["default"])(_this3), _this3.props.historyManager);
    var sourceCode = new _RecitEditor.SourceCodeState((0, _assertThisInitialized2["default"])(_this3));
    _this3.canvasState = {
      designer: designer,
      preview: new _RecitEditor.PreviewState((0, _assertThisInitialized2["default"])(_this3)),
      sourceCode: sourceCode,
      sourceCodeDesigner: new _RecitEditor.SourceCodeDesignerState((0, _assertThisInitialized2["default"])(_this3), designer, sourceCode)
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
  (0, _createClass2["default"])(MainView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setData(this.props.content);
      this.props.historyManager.addHistoryItem(this.props.content);
      this.loadTemplates();
      document.body.onkeyup = this.onKey;
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
      if (prevProps.view !== this.props.view) {
        var data = "";
        if (prevProps.view == 'sourceCodeDesigner') {
          data = this.canvasState.designer.getData(true);
        } else {
          data = this.canvasState[prevProps.view].getData();
        }
        this.setData(data);
        var view = this.props.view;
        this.setState({
          canvasState: view
        }, this.onPanelChange);
      }
      if (prevProps.device.name !== this.props.device.name || prevProps.view !== this.props.view) {
        this.onUnselectElement();
      }
      if (prevProps.content !== this.props.content) {
        this.setData(this.props.content);
      }
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
      //Wait to see if selectedElement gets destroyed
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
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "main"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "left-area",
        style: {
          height: "calc(100vh - ".concat(LayoutBuilder.properties.topNavBar.height, "px")
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        style: {
          height: '100%',
          backgroundColor: '#6c757d'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        "aria-label": "Buttons",
        style: {
          flexDirection: 'column'
        }
      }, /*#__PURE__*/_react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.components === 1,
        value: "components,1",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('templates'),
        glyph: _freeSolidSvgIcons.faCloud
      }), /*#__PURE__*/_react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.components === 3,
        value: "components,3",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('components'),
        glyph: _freeSolidSvgIcons.faPuzzlePiece
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          margin: '4px 0',
          height: '1px',
          backgroundColor: '#fff'
        }
      }), /*#__PURE__*/_react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.properties === 3,
        value: "properties,3",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('basic'),
        glyph: _freeSolidSvgIcons.faCubes
      }), /*#__PURE__*/_react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.properties === 1,
        value: "properties,1",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('bootstrap'),
        svg: _RecitEditor.Assets.faBootstrap
      }), /*#__PURE__*/_react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.properties === 2,
        value: "properties,2",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('htmlproprieties'),
        svg: _RecitEditor.Assets.faHtml
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          margin: '4px 0',
          height: '1px',
          backgroundColor: '#fff'
        }
      }), /*#__PURE__*/_react["default"].createElement(LeftPanelButton, {
        checked: this.state.panels.treeView === 1,
        value: "treeView,1",
        onClick: this.onPanelChange,
        title: _RecitEditor.i18n.get_string('tree'),
        glyph: _freeSolidSvgIcons.faSitemap
      }))), (this.state.panels.components | this.state.panels.properties | this.state.panels.treeView) >= 1 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel-list",
        style: {
          width: "".concat(LayoutBuilder.properties.leftPanel.panelList.width, "px")
        }
      }, this.state.panels.components === 1 && /*#__PURE__*/_react["default"].createElement(_RecitEditor.VisualComponentList, {
        onDragEnd: this.onDragEnd,
        onInsert: this.onInsertTemplate,
        onSaveTemplate: this.onSaveTemplate,
        tab: "tpl"
      }), this.state.panels.components === 3 && /*#__PURE__*/_react["default"].createElement(_RecitEditor.VisualComponentList, {
        onDragEnd: this.onDragEnd,
        onInsert: this.onInsertTemplate,
        onSaveTemplate: this.onSaveTemplate,
        tab: "comp"
      }), this.state.panels.properties === 1 && /*#__PURE__*/_react["default"].createElement(_RecitEditor.ComponentProperties, {
        onAfterInsertNode: this.onAfterInsertNode,
        onAfterAssignProperty: this.onAfterAssignProperty,
        onAfterReplaceNode: this.onAfterReplaceNode,
        onDeleteElement: this.onDeleteElement,
        element: this.state.selectedElement,
        tab: "bs"
      }), this.state.panels.properties === 2 && /*#__PURE__*/_react["default"].createElement(_RecitEditor.ComponentProperties, {
        onAfterInsertNode: this.onAfterInsertNode,
        onAfterAssignProperty: this.onAfterAssignProperty,
        onAfterReplaceNode: this.onAfterReplaceNode,
        onDeleteElement: this.onDeleteElement,
        element: this.state.selectedElement,
        tab: "html"
      }), this.state.panels.properties === 3 && /*#__PURE__*/_react["default"].createElement(_RecitEditor.ComponentProperties, {
        onAfterInsertNode: this.onAfterInsertNode,
        onAfterAssignProperty: this.onAfterAssignProperty,
        onAfterReplaceNode: this.onAfterReplaceNode,
        onDeleteElement: this.onDeleteElement,
        element: this.state.selectedElement,
        tab: "bm"
      }), this.state.panels.treeView === 1 && /*#__PURE__*/_react["default"].createElement(_RecitEditor.TreeView, {
        data: this.canvasState.designer.getBody(),
        onSelect: this.onSelectElement,
        selectedElement: this.state.selectedElement,
        view: this.props.view,
        onSaveElement: this.onSaveTemplate,
        onDeleteElement: this.onDeleteElement,
        onMoveNodeUp: this.onMoveNodeUp,
        onMoveNodeDown: this.onMoveNodeDown
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "center-area"
      }, /*#__PURE__*/_react["default"].createElement("div", {
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
    }
  }, {
    key: "onDrop",
    value: function onDrop(dom, newEl) {
      if (newEl) {
        var cl = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, newEl);
        if (cl && cl.modalCreation) {
          this.onSelectElement(newEl);
        } else {
          this.setState({
            selectedElement: null
          });
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
      // When sourceCodeDesigner view is open, we should refresh the code source after assigning a property
      /*if (this.props.view == 'sourceCodeDesigner'){
          let data = this.canvasState.designer.getData(false);
          this.canvasState.sourceCode.setData(data);
          this.canvasState.sourceCode.refresh();
      }*/
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
    value: function onStartEditingNodeText(el) {
      if (el instanceof HTMLElement) {
        this.canvasState[this.state.canvasState].onStartEditingNodeText(el);
        this.setState({
          selectedElement: el
        });
      } else {
        this.canvasState[this.state.canvasState].onStartEditingNodeText(this.state.selectedElement);
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
  return MainView;
}(_react.Component);
MainView.defaultProps = {
  content: "",
  device: null,
  view: "designer",
  historyManager: null
};
var LeftPanelButton = /*#__PURE__*/function (_Component3) {
  (0, _inherits2["default"])(LeftPanelButton, _Component3);
  var _super3 = _createSuper(LeftPanelButton);
  function LeftPanelButton() {
    (0, _classCallCheck2["default"])(this, LeftPanelButton);
    return _super3.apply(this, arguments);
  }
  (0, _createClass2["default"])(LeftPanelButton, [{
    key: "render",
    value: function render() {
      var _this4 = this;
      var fontSize = this.props.text ? '1rem' : '2rem';
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: this.props.checked ? 'success' : 'secondary',
        onClick: function onClick(e) {
          return _this4.props.onClick(_this4.props.value);
        },
        style: {
          fontSize: fontSize,
          flex: 'none',
          minHeight: '55px'
        },
        title: this.props.title
      }, this.props.glyph && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: this.props.glyph
      }), this.props.text && this.props.text, this.props.svg && /*#__PURE__*/_react["default"].createElement("i", null, this.props.svg));
      return main;
    }
  }]);
  return LeftPanelButton;
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