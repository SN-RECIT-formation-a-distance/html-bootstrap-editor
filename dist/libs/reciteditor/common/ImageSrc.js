"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSrc = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _RecitEditor = require("../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ImageSrc = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ImageSrc, _Component);
  var _super = _createSuper(ImageSrc);
  function ImageSrc(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImageSrc);
    _this = _super.call(this, props);
    _this.onUpload = _this.onUpload.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onUploadDone = _this.onUploadDone.bind((0, _assertThisInitialized2["default"])(_this));
    if (_RecitEditor.IWrapper.isUploadImplemented()) {
      _this.Upload = new _RecitEditor.UploadFile();
    }
    return _this;
  }
  (0, _createClass2["default"])(ImageSrc, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.InputGroup, {
        className: "mb-3"
      }, /*#__PURE__*/_react["default"].createElement(_RecitEditor.InputText, {
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
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.InputGroup.Append, null, this.Upload && /*#__PURE__*/_react["default"].createElement(_RecitEditor.BtnUpload, {
        id: "file-upload",
        size: "btn-sm",
        accept: this.props.accept,
        onChange: this.onUpload
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        size: "sm",
        onClick: function onClick() {
          return _this2.randomizeImage();
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
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
      //if image is succesfully uploaded set image url
      //event.data.element.trigger('propertyChange', [url, that]);
      //update src input
      //$('input[type="text"]', event.data.element).val(url);
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
  return ImageSrc;
}(_react.Component);
exports.ImageSrc = ImageSrc;
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