"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  $glVars: true,
  RecitEditor: true
};
exports.RecitEditor = exports.$glVars = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _WordProcessor = require("./word-processor/WordProcessor");
var _LayoutBuilder = require("./layout-builder/LayoutBuilder");
Object.keys(_LayoutBuilder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _LayoutBuilder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LayoutBuilder[key];
    }
  });
});
var _Options = require("../../Options");
require("./assets/css/components.scss");
require("bootstrap/dist/css/bootstrap.min.css");
var _Feedback = require("./common/Feedback");
var _Utils = require("./common/Utils");
Object.keys(_Utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Utils[key];
    }
  });
});
var _Assets = require("./assets/Assets");
Object.keys(_Assets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Assets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Assets[key];
    }
  });
});
var _ToggleButtons = require("./common/ToggleButtons");
Object.keys(_ToggleButtons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ToggleButtons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ToggleButtons[key];
    }
  });
});
var _InputNumber = require("./common/InputNumber");
Object.keys(_InputNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InputNumber[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputNumber[key];
    }
  });
});
var _InputText = require("./common/InputText");
Object.keys(_InputText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InputText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputText[key];
    }
  });
});
var _InputTextArea = require("./common/InputTextArea");
Object.keys(_InputTextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InputTextArea[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputTextArea[key];
    }
  });
});
var _ComboBox = require("./common/ComboBox");
Object.keys(_ComboBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ComboBox[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ComboBox[key];
    }
  });
});
var _InputColor = require("./common/InputColor");
Object.keys(_InputColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InputColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputColor[key];
    }
  });
});
var _ImageSrc = require("./common/ImageSrc");
Object.keys(_ImageSrc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ImageSrc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ImageSrc[key];
    }
  });
});
var _MultipleSelect = require("./common/MultipleSelect");
Object.keys(_MultipleSelect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MultipleSelect[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MultipleSelect[key];
    }
  });
});
var _MinValueMax = require("./common/MinValueMax");
Object.keys(_MinValueMax).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MinValueMax[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MinValueMax[key];
    }
  });
});
var _SourceCodeEditor = require("./common/SourceCodeEditor");
Object.keys(_SourceCodeEditor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SourceCodeEditor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SourceCodeEditor[key];
    }
  });
});
var _IconSelector = require("./common/IconSelector");
Object.keys(_IconSelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IconSelector[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IconSelector[key];
    }
  });
});
var _BtnUpload = require("./common/BtnUpload");
Object.keys(_BtnUpload).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _BtnUpload[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BtnUpload[key];
    }
  });
});
var _ButtonsBar = require("./common/ButtonsBar");
Object.keys(_ButtonsBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ButtonsBar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonsBar[key];
    }
  });
});
var _Iframe = require("./common/Iframe");
Object.keys(_Iframe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Iframe[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Iframe[key];
    }
  });
});
var _TableActions = require("./layout-builder/components/TableActions");
Object.keys(_TableActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableActions[key];
    }
  });
});
var _LayoutSpacingEditor = require("./layout-builder/components/LayoutSpacingEditor");
Object.keys(_LayoutSpacingEditor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _LayoutSpacingEditor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LayoutSpacingEditor[key];
    }
  });
});
var _LayoutSpacing = require("./layout-builder/components/LayoutSpacing");
Object.keys(_LayoutSpacing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _LayoutSpacing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LayoutSpacing[key];
    }
  });
});
var _ColorSelector = require("./layout-builder/components/ColorSelector");
Object.keys(_ColorSelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ColorSelector[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ColorSelector[key];
    }
  });
});
var _TreeView = require("./layout-builder/components/TreeView");
Object.keys(_TreeView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TreeView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TreeView[key];
    }
  });
});
var _Canvas = require("./layout-builder/components/Canvas");
Object.keys(_Canvas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Canvas[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Canvas[key];
    }
  });
});
var _CanvasState = require("./layout-builder/components/CanvasState");
Object.keys(_CanvasState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CanvasState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CanvasState[key];
    }
  });
});
var _ComponentsCollection = require("./layout-builder/ctrl/ComponentsCollection");
Object.keys(_ComponentsCollection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ComponentsCollection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ComponentsCollection[key];
    }
  });
});
var _Templates = require("./layout-builder/ctrl/Templates");
Object.keys(_Templates).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Templates[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Templates[key];
    }
  });
});
var _HistoryManager = require("./layout-builder/ctrl/HistoryManager");
Object.keys(_HistoryManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _HistoryManager[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HistoryManager[key];
    }
  });
});
var _HTMLElementData = require("./layout-builder/ctrl/HTMLElementData");
Object.keys(_HTMLElementData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _HTMLElementData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HTMLElementData[key];
    }
  });
});
var _HTMLElements = require("./layout-builder/ctrl/HTMLElements");
Object.keys(_HTMLElements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _HTMLElements[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HTMLElements[key];
    }
  });
});
var _HTMLProperties = require("./layout-builder/ctrl/HTMLProperties");
Object.keys(_HTMLProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _HTMLProperties[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HTMLProperties[key];
    }
  });
});
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
var $glVars = exports.$glVars = {
  feedback: new _Feedback.FeedbackCtrl(),
  cssRules: [],
  recitEditor: null
};
var RecitEditor = exports.RecitEditor = function (_Component) {
  function RecitEditor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RecitEditor);
    _this = _callSuper(this, RecitEditor, [props]);
    _this.onSelectBuilder = _this.onSelectBuilder.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onSaveAndClose = _this.onSaveAndClose.bind(_this);
    _this.state = {
      builder: props.builder
    };
    _Utils.IWrapper.wrapper = props.wrapper;
    _this.mainViewRef = _react["default"].createRef();
    $glVars.recitEditor = _this;
    var cssFiles = _Utils.IWrapper.getThemeCssRules().urlList.concat(_Utils.IWrapper.getAdditionalHTMLHead().css);
    _Utils.UtilsHTML.getStylesheetRules(cssFiles).then(function (rules) {
      $glVars.cssRules = rules;
    });
    return _this;
  }
  (0, _inherits2["default"])(RecitEditor, _Component);
  return (0, _createClass2["default"])(RecitEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.content = _Utils.IWrapper.getContent();
      window.document.title = _Options.Options.appTitle();
      $glVars.feedback.addObserver("App", function () {
        return _this2.onFeedback();
      });
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var main = _react["default"].createElement("div", {
        className: "htmlbootstrapeditor"
      }, this.state.builder === "word" ? _react["default"].createElement(_WordProcessor.WordProcessor, {
        content: this.content,
        onSelectBuilder: this.onSelectBuilder,
        onChange: this.onChange,
        options: this.props.options
      }) : _react["default"].createElement(_LayoutBuilder.LayoutBuilder, {
        ref: this.mainViewRef,
        content: this.content,
        onSelectBuilder: this.onSelectBuilder,
        onChange: this.onChange,
        onSaveAndClose: this.onSaveAndClose,
        options: this.props.options
      }), $glVars.feedback.msg.map(function (item, index) {
        return _react["default"].createElement(_Feedback.VisualFeedback, {
          key: index,
          id: index,
          msg: item.msg,
          type: item.type,
          title: item.title,
          timeout: item.timeout
        });
      }));
      return main;
    }
  }, {
    key: "onScreenshot",
    value: function onScreenshot() {
      return this.mainViewRef.current.onScreenshot();
    }
  }, {
    key: "onChange",
    value: function onChange(content, forceUpdate) {
      this.content = content;
      if (forceUpdate) {
        this.forceUpdate();
      }
    }
  }, {
    key: "onFeedback",
    value: function onFeedback() {
      this.forceUpdate();
    }
  }, {
    key: "onSelectBuilder",
    value: function onSelectBuilder(option) {
      this.setState({
        builder: option
      });
    }
  }, {
    key: "onSaveAndClose",
    value: function onSaveAndClose(content) {
      _Utils.IWrapper.setContent(content);
    }
  }]);
}(_react.Component);
RecitEditor.defaultProps = {
  name: "",
  builder: "layout",
  wrapper: null,
  options: {
    wordProcessor: false,
    layoutBuilder: true
  }
};