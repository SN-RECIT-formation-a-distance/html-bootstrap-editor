"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSrc = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _RecitEditor = require("../RecitEditor");
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
var ImageSrc = exports.ImageSrc = function (_Component) {
  function ImageSrc(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImageSrc);
    _this = _callSuper(this, ImageSrc, [props]);
    _this.onUpload = _this.onUpload.bind(_this);
    _this.onUploadDone = _this.onUploadDone.bind(_this);
    if (_RecitEditor.IWrapper.isUploadImplemented()) {
      _this.Upload = new _RecitEditor.UploadFile();
    }
    return _this;
  }
  (0, _inherits2["default"])(ImageSrc, _Component);
  return (0, _createClass2["default"])(ImageSrc, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = _react["default"].createElement(_reactBootstrap.InputGroup, {
        className: "mb-3"
      }, _react["default"].createElement(_RecitEditor.InputText, {
        name: this.props.name,
        value: this.props.value,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange,
        onKeyDown: this.props.onKeyDown,
        autoFocus: this.props.autoFocus,
        autoSelect: this.props.autoSelect,
        onCommit: this.props.onCommit,
        disabled: this.props.disabled,
        size: this.props.size
      }), _react["default"].createElement(_reactBootstrap.InputGroup.Append, null, this.Upload && _react["default"].createElement(_RecitEditor.BtnUpload, {
        id: "file-upload",
        size: "btn-sm",
        accept: this.props.accept,
        onChange: this.onUpload
      }), _react["default"].createElement(_reactBootstrap.Button, {
        size: "sm",
        onClick: function onClick() {
          return _this2.randomizeImage();
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRandom
      }))));
      return main;
    }
  }, {
    key: "onUpload",
    value: function onUpload(event) {
      this.Upload.onSelectFileToUpload(event, this.onUploadDone);
    }
  }, {
    key: "randomizeImage",
    value: function randomizeImage() {
      this.onUploadDone('https://picsum.photos/1600/900');
    }
  }, {
    key: "onUploadDone",
    value: function onUploadDone(url) {
      var eventData = {
        target: {
          name: this.props.name,
          value: url
        }
      };
      if (this.props.onChange) {
        this.props.onChange(eventData);
      }
      if (this.props.onCommit) {
        this.props.onCommit(eventData);
      }
    }
  }]);
}(_react.Component);
ImageSrc.defaultProps = {
  name: "",
  value: '',
  placeholder: "",
  onChange: null,
  onKeyDown: null,
  autoFocus: false,
  autoSelect: false,
  onCommit: null,
  disabled: false,
  accept: "",
  size: ""
};