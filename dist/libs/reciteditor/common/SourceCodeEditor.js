"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceCodeEditor = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactCodemirror = _interopRequireDefault(require("@uiw/react-codemirror"));
var _view = require("@codemirror/view");
var _search = require("@codemirror/search");
var _lint = require("@codemirror/lint");
var _langHtml = require("@codemirror/lang-html");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var beautifyingHTML = require("pretty");
var SourceCodeEditor = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SourceCodeEditor, _Component);
  var _super = _createSuper(SourceCodeEditor);
  function SourceCodeEditor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SourceCodeEditor);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setCursor = _this.setCursor.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      data: ""
    };
    _this.codeMirror = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _createClass2["default"])(SourceCodeEditor, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      if (prevProps.value !== this.props.value && this.props.value.length > 0) {
        var data = beautifyingHTML(this.props.value, {
          ocd: true
        });
        this.setState({
          data: data
        }, function () {
          return _this2.setCursor(prevProps);
        });
      } else {
        this.setCursor(prevProps);
      }
    }
  }, {
    key: "setCursor",
    value: function setCursor(prevProps) {
      var _this3 = this;
      if (prevProps.queryStr !== this.props.queryStr && this.props.queryStr.length > 0 && this.codeMirror) {
        var pos = this.state.data.search("data-tag-id=\"".concat(this.props.queryStr, "\""));
        setTimeout(function () {
          _this3.codeMirror.current.editor.focus();
          try {
            _this3.codeMirror.current.view.dispatch({
              selection: {
                anchor: pos
              }
            });
            _this3.codeMirror.current.view.scrollPosIntoView(pos);
          } catch (e) {}
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        style: this.props.style,
        className: "react-codemirror"
      }, /*#__PURE__*/_react["default"].createElement(_reactCodemirror["default"], {
        ref: this.codeMirror,
        value: this.state.data,
        theme: "dark",
        extensions: [(0, _langHtml.html)(), _view.EditorView.lineWrapping, (0, _lint.lintGutter)(), _langHtml.htmlCompletion, _langHtml.autoCloseTags, (0, _search.searchConfig)({
          matchCase: false
        })],
        onChange: this.onChange
      }));
      return main;
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        data: value
      });
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }]);
  return SourceCodeEditor;
}(_react.Component);
exports.SourceCodeEditor = SourceCodeEditor;
SourceCodeEditor.defaultProps = {
  value: "",
  onChange: null,
  queryStr: "",
  style: null
};