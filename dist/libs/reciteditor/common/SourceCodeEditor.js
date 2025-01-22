"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceCodeEditor = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactCodemirror = _interopRequireDefault(require("@uiw/react-codemirror"));
var _view = require("@codemirror/view");
var _search = require("@codemirror/search");
var _lint = require("@codemirror/lint");
var _langHtml = require("@codemirror/lang-html");
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
var beautifyingHTML = require("pretty");
var SourceCodeEditor = exports.SourceCodeEditor = function (_Component) {
  function SourceCodeEditor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SourceCodeEditor);
    _this = _callSuper(this, SourceCodeEditor, [props]);
    _this.onChange = _this.onChange.bind(_this);
    _this.setCursor = _this.setCursor.bind(_this);
    _this.state = {
      data: ""
    };
    _this.codeMirror = _react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(SourceCodeEditor, _Component);
  return (0, _createClass2["default"])(SourceCodeEditor, [{
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
      var main = _react["default"].createElement("div", {
        style: this.props.style,
        className: "react-codemirror"
      }, _react["default"].createElement(_reactCodemirror["default"], {
        ref: this.codeMirror,
        value: this.state.data,
        theme: "dark",
        extensions: [(0, _langHtml.html)(), _view.EditorView.lineWrapping, (0, _lint.lintGutter)(), _langHtml.autoCloseTags, (0, _search.search)({
          caseSensitive: false
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
}(_react.Component);
SourceCodeEditor.defaultProps = {
  value: "",
  onChange: null,
  queryStr: "",
  style: null
};