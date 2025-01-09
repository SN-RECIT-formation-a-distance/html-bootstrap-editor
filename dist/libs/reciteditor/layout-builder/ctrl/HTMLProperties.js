"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalGridProperty = exports.HTMLWidthProperty = exports.HTMLVideoSourceProperty = exports.HTMLVideoButtonProperty = exports.HTMLTargetProperty = exports.HTMLStyleProperty = exports.HTMLSourceProperty = exports.HTMLPropertiesData = exports.HTMLOuterHTMLProperty = exports.HTMLMarginBorderPaddingProperty = exports.HTMLImageBankProperty = exports.HTMLIdProperty = exports.HTMLHrefProperty = exports.HTMLHeightProperty = exports.HTMLFontSizeProperty = exports.HTMLFontFamilyProperty = exports.HTMLEmbedRatio = exports.HTMLEmbedProperty = exports.HTMLColorProperty = exports.HTMLCodeProperty = exports.HTMLClassProperty = exports.HTMLBackgroundProperty = exports.HTMLBackgroundCoverProperty = exports.HTMLAltProperty = exports.BsTextColorProperty = exports.BsTextAlignmentProperty = exports.BsTableStripedProperty = exports.BsTableCellActionProperty = exports.BsTableBorderProperty = exports.BsTableActionProperty = exports.BsTabProperty = exports.BsTabJustifyProperty = exports.BsShadowProperty = exports.BsPaddingProperty = exports.BsMarginProperty = exports.BsIconSizeProperty = exports.BsIconProperty = exports.BsHeadingProperty = exports.BsGridVerticalAlignProperty = exports.BsGridResponsiveProperty = exports.BsGridPaddingProperty = exports.BsFullHeightProperty = exports.BsBtnSizeProperty = exports.BsBtnOutlineProperty = exports.BsBtnBlockProperty = exports.BsBorderStyleProperty = exports.BsBorderRadiusProperty = exports.BsBorderProperty = exports.BsBorderColorProperty = exports.BsBackgroundProperty = exports.BsBackgroundImageProperty = exports.BsAddTabProperty = exports.BsAddAccordionProperty = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireDefault(require("react"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
var _HTMLElementData = require("./HTMLElementData");
var _reactBootstrap = require("react-bootstrap");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * Atto HTML editor
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * @package    atto_reciteditor
                                                                                                                                                                                                                                                                                                                                           * @copyright  2019 RECIT
                                                                                                                                                                                                                                                                                                                                           * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                                                                                                                                                                           */
var ColorSelectorInput = function () {
  function ColorSelectorInput(options, onChangeProp) {
    (0, _classCallCheck2["default"])(this, ColorSelectorInput);
    this.type = 'colorselector';
    this.options = options;
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(ColorSelectorInput, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return ColorSelectorInput;
}();
var MinMaxValueInput = function () {
  function MinMaxValueInput(minName, valueName, maxName) {
    (0, _classCallCheck2["default"])(this, MinMaxValueInput);
    this.type = 'minvaluemax';
    this.defaultValue = '';
    this.minName = minName;
    this.valueName = valueName;
    this.maxName = maxName;
  }
  (0, _createClass2["default"])(MinMaxValueInput, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      el.style[this.minName] = value['min'];
      el.style[this.valueName] = value['value'];
      el.style[this.maxName] = value['max'];
    }
  }]);
  return MinMaxValueInput;
}();
var TextInput = function () {
  function TextInput(onChangeProp) {
    (0, _classCallCheck2["default"])(this, TextInput);
    this.type = 'text';
    this.defaultValue = '';
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(TextInput, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return TextInput;
}();
var ComboBox = function () {
  function ComboBox(options, onChangeProp) {
    (0, _classCallCheck2["default"])(this, ComboBox);
    this.type = 'combobox';
    this.defaultValue = '';
    this.options = options;
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(ComboBox, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return ComboBox;
}();
var RadioButton = function () {
  function RadioButton(options, onChangeProp, defaultValue) {
    (0, _classCallCheck2["default"])(this, RadioButton);
    this.type = 'radio';
    this.toggleType = 'radio';
    this.options = options;
    this.defaultValue = defaultValue || [];
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(RadioButton, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return RadioButton;
}();
var CheckboxButton = function () {
  function CheckboxButton(options, onChangeProp, defaultValue) {
    (0, _classCallCheck2["default"])(this, CheckboxButton);
    this.type = 'radio';
    this.toggleType = 'checkbox';
    this.options = options;
    this.defaultValue = defaultValue || [];
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(CheckboxButton, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return CheckboxButton;
}();
var ColorPicker = function () {
  function ColorPicker(name) {
    (0, _classCallCheck2["default"])(this, ColorPicker);
    this.type = 'color';
    this.defaultValue = '';
    this.name = name;
  }
  (0, _createClass2["default"])(ColorPicker, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      el.style[this.name] = value;
    }
  }]);
  return ColorPicker;
}();
var IconPicker = function () {
  function IconPicker() {
    (0, _classCallCheck2["default"])(this, IconPicker);
    this.type = 'iconselector';
    this.text = _RecitEditor.i18n.get_string('selecticon');
  }
  (0, _createClass2["default"])(IconPicker, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      el.setAttribute('class', value);
    }
  }]);
  return IconPicker;
}();
var PixabayPicker = function () {
  function PixabayPicker(onChangeProp) {
    (0, _classCallCheck2["default"])(this, PixabayPicker);
    this.type = 'pixabay';
    this.text = "".concat(_RecitEditor.i18n.get_string('imagebank'), " Pixabay");
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(PixabayPicker, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return PixabayPicker;
}();
var GridBuilder = (0, _createClass2["default"])(function GridBuilder() {
  (0, _classCallCheck2["default"])(this, GridBuilder);
  this.type = 'gridbuilder';
  this.text = _RecitEditor.i18n.get_string('gridbuilder');
});
var ImageSrc = function () {
  function ImageSrc(onChangeProp, accept) {
    (0, _classCallCheck2["default"])(this, ImageSrc);
    this.type = 'ImageSrc';
    this.defaultValue = '';
    this.onChangeProp = onChangeProp || null;
    if (accept) {
      this.accept = accept;
    } else {
      this.accept = ".jpg,.png";
    }
  }
  (0, _createClass2["default"])(ImageSrc, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      if (this.onChangeProp) {
        this.onChangeProp(el, value, data);
      } else {
        el.src = value;
      }
    }
  }]);
  return ImageSrc;
}();
var TextArea = function () {
  function TextArea(onChangeProp) {
    (0, _classCallCheck2["default"])(this, TextArea);
    this.type = 'textarea';
    this.defaultValue = '';
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(TextArea, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      return this.onChangeProp(el, value, data);
    }
  }]);
  return TextArea;
}();
var LayoutSpacing = function () {
  function LayoutSpacing(options, onChangeProp) {
    (0, _classCallCheck2["default"])(this, LayoutSpacing);
    this.type = 'layoutspacing';
    this.defaultValue = '';
    this.options = options;
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(LayoutSpacing, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return LayoutSpacing;
}();
var MultiSelect = function () {
  function MultiSelect(options, onChangeProp) {
    (0, _classCallCheck2["default"])(this, MultiSelect);
    this.type = 'multipleselect';
    this.defaultValue = '';
    this.options = options;
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(MultiSelect, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return MultiSelect;
}();
var ButtonGroup = (0, _createClass2["default"])(function ButtonGroup(options) {
  (0, _classCallCheck2["default"])(this, ButtonGroup);
  this.type = 'buttongroup';
  this.options = options;
});
var LayoutSpacingEditor = function () {
  function LayoutSpacingEditor(onChangeProp) {
    (0, _classCallCheck2["default"])(this, LayoutSpacingEditor);
    this.type = 'layoutspacingeditor';
    this.onChangeProp = onChangeProp;
  }
  (0, _createClass2["default"])(LayoutSpacingEditor, [{
    key: "onChange",
    value: function onChange(el, value, data) {
      this.onChangeProp(el, value, data);
    }
  }]);
  return LayoutSpacingEditor;
}();
var HTMLProperty = function () {
  function HTMLProperty(name, text, input) {
    (0, _classCallCheck2["default"])(this, HTMLProperty);
    this.name = name || "";
    this.text = text || "";
    this.input = input || null;
  }
  (0, _createClass2["default"])(HTMLProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {};
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return "";
    }
  }]);
  return HTMLProperty;
}();
var HTMLWidthProperty = function (_HTMLProperty) {
  (0, _inherits2["default"])(HTMLWidthProperty, _HTMLProperty);
  var _super = _createSuper(HTMLWidthProperty);
  function HTMLWidthProperty() {
    (0, _classCallCheck2["default"])(this, HTMLWidthProperty);
    return _super.call(this, 'width', _RecitEditor.i18n.get_string('width'), new MinMaxValueInput('minWidth', 'width', 'maxWidth'));
  }
  (0, _createClass2["default"])(HTMLWidthProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return {
        min: el.style.minWidth,
        value: el.style.width,
        max: el.style.maxWidth
      };
    }
  }]);
  return HTMLWidthProperty;
}(HTMLProperty);
exports.HTMLWidthProperty = HTMLWidthProperty;
var HTMLHeightProperty = function (_HTMLProperty2) {
  (0, _inherits2["default"])(HTMLHeightProperty, _HTMLProperty2);
  var _super2 = _createSuper(HTMLHeightProperty);
  function HTMLHeightProperty() {
    (0, _classCallCheck2["default"])(this, HTMLHeightProperty);
    return _super2.call(this, 'height', _RecitEditor.i18n.get_string('height'), new MinMaxValueInput('minHeight', 'height', 'maxHeight'));
  }
  (0, _createClass2["default"])(HTMLHeightProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return {
        min: el.style.minHeight,
        value: el.style.height,
        max: el.style.maxHeight
      };
    }
  }]);
  return HTMLHeightProperty;
}(HTMLProperty);
exports.HTMLHeightProperty = HTMLHeightProperty;
var HTMLFontSizeProperty = function (_HTMLProperty3) {
  (0, _inherits2["default"])(HTMLFontSizeProperty, _HTMLProperty3);
  var _super3 = _createSuper(HTMLFontSizeProperty);
  function HTMLFontSizeProperty() {
    var _this;
    (0, _classCallCheck2["default"])(this, HTMLFontSizeProperty);
    _this = _super3.call(this, 'fontsize', _RecitEditor.i18n.get_string('fontsize'));
    _this.input = new TextInput(_this.onChange.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }
  (0, _createClass2["default"])(HTMLFontSizeProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.style.fontSize;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.style.fontSize = value;
    }
  }]);
  return HTMLFontSizeProperty;
}(HTMLProperty);
exports.HTMLFontSizeProperty = HTMLFontSizeProperty;
var HTMLStyleProperty = function (_HTMLProperty4) {
  (0, _inherits2["default"])(HTMLStyleProperty, _HTMLProperty4);
  var _super4 = _createSuper(HTMLStyleProperty);
  function HTMLStyleProperty() {
    var _this2;
    (0, _classCallCheck2["default"])(this, HTMLStyleProperty);
    _this2 = _super4.call(this, 'style', _RecitEditor.i18n.get_string('style'));
    _this2.input = new TextArea(_this2.onChange.bind((0, _assertThisInitialized2["default"])(_this2)));
    return _this2;
  }
  (0, _createClass2["default"])(HTMLStyleProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.getAttribute('style') || "";
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.setAttribute('style', value);
    }
  }]);
  return HTMLStyleProperty;
}(HTMLProperty);
exports.HTMLStyleProperty = HTMLStyleProperty;
var HTMLFontFamilyProperty = function (_HTMLProperty5) {
  (0, _inherits2["default"])(HTMLFontFamilyProperty, _HTMLProperty5);
  var _super5 = _createSuper(HTMLFontFamilyProperty);
  function HTMLFontFamilyProperty() {
    var _this3;
    (0, _classCallCheck2["default"])(this, HTMLFontFamilyProperty);
    _this3 = _super5.call(this, 'fontfamily', _RecitEditor.i18n.get_string('font'));
    _this3.options = _HTMLElementData.HTMLElementData.fontFamilyList;
    _this3.input = new ComboBox(_this3.options, _this3.onChange.bind((0, _assertThisInitialized2["default"])(_this3)));
    return _this3;
  }
  (0, _createClass2["default"])(HTMLFontFamilyProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var value = el.style.fontFamily.replaceAll('"', '');
      return value;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.style.fontFamily = value;
    }
  }]);
  return HTMLFontFamilyProperty;
}(HTMLProperty);
exports.HTMLFontFamilyProperty = HTMLFontFamilyProperty;
var HTMLColorProperty = function (_HTMLProperty6) {
  (0, _inherits2["default"])(HTMLColorProperty, _HTMLProperty6);
  var _super6 = _createSuper(HTMLColorProperty);
  function HTMLColorProperty() {
    (0, _classCallCheck2["default"])(this, HTMLColorProperty);
    return _super6.call(this, 'color', _RecitEditor.i18n.get_string('textcolor'), new ColorPicker('color'));
  }
  (0, _createClass2["default"])(HTMLColorProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.style.color ? el.style.color : '#000000';
    }
  }]);
  return HTMLColorProperty;
}(HTMLProperty);
exports.HTMLColorProperty = HTMLColorProperty;
var HTMLBackgroundProperty = function (_HTMLProperty7) {
  (0, _inherits2["default"])(HTMLBackgroundProperty, _HTMLProperty7);
  var _super7 = _createSuper(HTMLBackgroundProperty);
  function HTMLBackgroundProperty() {
    (0, _classCallCheck2["default"])(this, HTMLBackgroundProperty);
    return _super7.call(this, 'backgroundcolor', _RecitEditor.i18n.get_string('backgroundcolor'), new ColorPicker('backgroundColor'));
  }
  (0, _createClass2["default"])(HTMLBackgroundProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.style.backgroundColor ? el.style.backgroundColor : '#FFFFFF';
    }
  }]);
  return HTMLBackgroundProperty;
}(HTMLProperty);
exports.HTMLBackgroundProperty = HTMLBackgroundProperty;
var HTMLHrefProperty = function (_HTMLProperty8) {
  (0, _inherits2["default"])(HTMLHrefProperty, _HTMLProperty8);
  var _super8 = _createSuper(HTMLHrefProperty);
  function HTMLHrefProperty() {
    var _this4;
    (0, _classCallCheck2["default"])(this, HTMLHrefProperty);
    _this4 = _super8.call(this, 'href', _RecitEditor.i18n.get_string('href'));
    _this4.input = new TextInput(_this4.onChange.bind((0, _assertThisInitialized2["default"])(_this4)));
    return _this4;
  }
  (0, _createClass2["default"])(HTMLHrefProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.getAttribute('href');
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.setAttribute('href', value);
    }
  }]);
  return HTMLHrefProperty;
}(HTMLProperty);
exports.HTMLHrefProperty = HTMLHrefProperty;
var HTMLTargetProperty = function (_HTMLProperty9) {
  (0, _inherits2["default"])(HTMLTargetProperty, _HTMLProperty9);
  var _super9 = _createSuper(HTMLTargetProperty);
  function HTMLTargetProperty() {
    var _this5;
    (0, _classCallCheck2["default"])(this, HTMLTargetProperty);
    _this5 = _super9.call(this, 'target', _RecitEditor.i18n.get_string('linkaction'));
    _this5.options = [{
      text: _RecitEditor.i18n.get_string('samepage'),
      value: '_self'
    }, {
      text: _RecitEditor.i18n.get_string('newtab'),
      value: '_blank'
    }];
    _this5.input = new RadioButton(_this5.options, _this5.onChange.bind((0, _assertThisInitialized2["default"])(_this5)));
    return _this5;
  }
  (0, _createClass2["default"])(HTMLTargetProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return [el.getAttribute('target')];
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.setAttribute('target', value);
    }
  }]);
  return HTMLTargetProperty;
}(HTMLProperty);
exports.HTMLTargetProperty = HTMLTargetProperty;
var HTMLSourceProperty = function (_HTMLProperty10) {
  (0, _inherits2["default"])(HTMLSourceProperty, _HTMLProperty10);
  var _super10 = _createSuper(HTMLSourceProperty);
  function HTMLSourceProperty(accept) {
    (0, _classCallCheck2["default"])(this, HTMLSourceProperty);
    return _super10.call(this, 'src', _RecitEditor.i18n.get_string('source'), new ImageSrc(null, accept));
  }
  (0, _createClass2["default"])(HTMLSourceProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.src;
    }
  }]);
  return HTMLSourceProperty;
}(HTMLProperty);
exports.HTMLSourceProperty = HTMLSourceProperty;
var HTMLImageBankProperty = function (_HTMLProperty11) {
  (0, _inherits2["default"])(HTMLImageBankProperty, _HTMLProperty11);
  var _super11 = _createSuper(HTMLImageBankProperty);
  function HTMLImageBankProperty(isSrc) {
    var _this6;
    (0, _classCallCheck2["default"])(this, HTMLImageBankProperty);
    _this6 = _super11.call(this, 'src', '');
    _this6.input = new PixabayPicker(_this6.onChange.bind((0, _assertThisInitialized2["default"])(_this6)));
    _this6.isSrc = isSrc;
    return _this6;
  }
  (0, _createClass2["default"])(HTMLImageBankProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {
        autoAdd: false,
        showLabel: false
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      if (this.isSrc) {
        return el.src;
      } else {
        return el.style.backgroundImage;
      }
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (this.isSrc) {
        el.setAttribute('src', value);
      } else {
        el.style.backgroundImage = 'url(' + value + ')';
      }
    }
  }]);
  return HTMLImageBankProperty;
}(HTMLProperty);
exports.HTMLImageBankProperty = HTMLImageBankProperty;
var HTMLAltProperty = function (_HTMLProperty12) {
  (0, _inherits2["default"])(HTMLAltProperty, _HTMLProperty12);
  var _super12 = _createSuper(HTMLAltProperty);
  function HTMLAltProperty() {
    var _this7;
    (0, _classCallCheck2["default"])(this, HTMLAltProperty);
    _this7 = _super12.call(this, 'alt', _react["default"].createElement(_react["default"].Fragment, null, _RecitEditor.i18n.get_string('description'), " ", _react["default"].createElement("a", {
      target: "_blank",
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree/"
    }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faInfoCircle
    }), " ")));
    _this7.input = new TextInput(_this7.onChange.bind((0, _assertThisInitialized2["default"])(_this7)));
    return _this7;
  }
  (0, _createClass2["default"])(HTMLAltProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.alt;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.setAttribute("alt", value);
    }
  }]);
  return HTMLAltProperty;
}(HTMLProperty);
exports.HTMLAltProperty = HTMLAltProperty;
var HTMLOuterHTMLProperty = function (_HTMLProperty13) {
  (0, _inherits2["default"])(HTMLOuterHTMLProperty, _HTMLProperty13);
  var _super13 = _createSuper(HTMLOuterHTMLProperty);
  function HTMLOuterHTMLProperty() {
    var _this8;
    (0, _classCallCheck2["default"])(this, HTMLOuterHTMLProperty);
    _this8 = _super13.call(this, 'outerhtml', _RecitEditor.i18n.get_string('sourcecode'));
    _this8.input = new TextArea(_this8.onChange.bind((0, _assertThisInitialized2["default"])(_this8)));
    return _this8;
  }
  (0, _createClass2["default"])(HTMLOuterHTMLProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.outerHTML;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var el2 = document.createElement('div');
      el2.innerHTML = value;
      if (el2.children[0] && el2.children[0].tagName == 'IFRAME') {
        var _iterator = _createForOfIteratorHelper(el2.children[0].getAttributeNames()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;
            el.setAttribute(attr, el2.children[0].getAttribute(attr));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      el2.remove();
    }
  }]);
  return HTMLOuterHTMLProperty;
}(HTMLProperty);
exports.HTMLOuterHTMLProperty = HTMLOuterHTMLProperty;
var HTMLIdProperty = function (_HTMLProperty14) {
  (0, _inherits2["default"])(HTMLIdProperty, _HTMLProperty14);
  var _super14 = _createSuper(HTMLIdProperty);
  function HTMLIdProperty() {
    var _this9;
    (0, _classCallCheck2["default"])(this, HTMLIdProperty);
    _this9 = _super14.call(this, 'id', _RecitEditor.i18n.get_string('id'));
    _this9.input = new TextInput(_this9.onChange.bind((0, _assertThisInitialized2["default"])(_this9)));
    return _this9;
  }
  (0, _createClass2["default"])(HTMLIdProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.getAttribute("id") || "";
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.setAttribute("id", value);
    }
  }]);
  return HTMLIdProperty;
}(HTMLProperty);
exports.HTMLIdProperty = HTMLIdProperty;
var HTMLVideoButtonProperty = function (_HTMLProperty15) {
  (0, _inherits2["default"])(HTMLVideoButtonProperty, _HTMLProperty15);
  var _super15 = _createSuper(HTMLVideoButtonProperty);
  function HTMLVideoButtonProperty() {
    var _this10;
    (0, _classCallCheck2["default"])(this, HTMLVideoButtonProperty);
    _this10 = _super15.call(this, 'src', _RecitEditor.i18n.get_string('videourl'));
    _this10.input = new TextInput(_this10.onChange.bind((0, _assertThisInitialized2["default"])(_this10)));
    return _this10;
  }
  (0, _createClass2["default"])(HTMLVideoButtonProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.getAttribute('data-videourl') || '';
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      value = _RecitEditor.Utils.formatVideoURLEmbed(value);
      el.setAttribute('data-videourl', value);
    }
  }]);
  return HTMLVideoButtonProperty;
}(HTMLProperty);
exports.HTMLVideoButtonProperty = HTMLVideoButtonProperty;
var HTMLVideoSourceProperty = function (_HTMLProperty16) {
  (0, _inherits2["default"])(HTMLVideoSourceProperty, _HTMLProperty16);
  var _super16 = _createSuper(HTMLVideoSourceProperty);
  function HTMLVideoSourceProperty() {
    var _this11;
    (0, _classCallCheck2["default"])(this, HTMLVideoSourceProperty);
    _this11 = _super16.call(this, 'src', _RecitEditor.i18n.get_string('videourl'));
    _this11.input = new TextInput(_this11.onChange.bind((0, _assertThisInitialized2["default"])(_this11)));
    return _this11;
  }
  (0, _createClass2["default"])(HTMLVideoSourceProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var iframe = el;
      if (el.tagName == 'DIV') {
        iframe = el.querySelector('iframe');
      }
      return iframe.src;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var iframe = el;
      value = _RecitEditor.Utils.formatVideoURLEmbed(value);
      if (el.tagName === 'DIV') {
        iframe = el.querySelector('iframe');
      }
      iframe.src = value;
      return iframe.src;
    }
  }]);
  return HTMLVideoSourceProperty;
}(HTMLProperty);
exports.HTMLVideoSourceProperty = HTMLVideoSourceProperty;
var HTMLEmbedProperty = function (_HTMLProperty17) {
  (0, _inherits2["default"])(HTMLEmbedProperty, _HTMLProperty17);
  var _super17 = _createSuper(HTMLEmbedProperty);
  function HTMLEmbedProperty() {
    var _this12;
    (0, _classCallCheck2["default"])(this, HTMLEmbedProperty);
    _this12 = _super17.call(this, 'src', _RecitEditor.i18n.get_string('htmlcode'));
    _this12.input = new TextArea(_this12.onChange.bind((0, _assertThisInitialized2["default"])(_this12)));
    return _this12;
  }
  (0, _createClass2["default"])(HTMLEmbedProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.innerHTML;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      value = new DOMParser().parseFromString(value, "text/html").body.firstElementChild;
      if (!value.classList.contains('embed-responsive-item')) {
        value.classList.add('embed-responsive-item');
      }
      while (el.firstChild) {
        el.removeChild(el.lastChild);
      }
      el.appendChild(value);
    }
  }]);
  return HTMLEmbedProperty;
}(HTMLProperty);
exports.HTMLEmbedProperty = HTMLEmbedProperty;
var HTMLEmbedRatio = function (_HTMLProperty18) {
  (0, _inherits2["default"])(HTMLEmbedRatio, _HTMLProperty18);
  var _super18 = _createSuper(HTMLEmbedRatio);
  function HTMLEmbedRatio() {
    var _this13;
    (0, _classCallCheck2["default"])(this, HTMLEmbedRatio);
    _this13 = _super18.call(this, 'aspectratio', _RecitEditor.i18n.get_string('size'));
    _this13.options = [{
      text: "21by9",
      value: "embed-responsive-21by9"
    }, {
      text: "16by9",
      value: "embed-responsive-16by9"
    }, {
      text: "4by3",
      value: "embed-responsive-4by3"
    }, {
      text: "1by1",
      value: "embed-responsive-1by1"
    }];
    _this13.input = new ComboBox(_this13.options, _this13.onChange.bind((0, _assertThisInitialized2["default"])(_this13)));
    return _this13;
  }
  (0, _createClass2["default"])(HTMLEmbedRatio, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator2 = _createForOfIteratorHelper(data.input.options),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (classList.includes(item.value)) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator3 = _createForOfIteratorHelper(data.input.options),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          el.classList.remove(item.value);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return HTMLEmbedRatio;
}(HTMLProperty);
exports.HTMLEmbedRatio = HTMLEmbedRatio;
var HTMLCodeProperty = function (_HTMLProperty19) {
  (0, _inherits2["default"])(HTMLCodeProperty, _HTMLProperty19);
  var _super19 = _createSuper(HTMLCodeProperty);
  function HTMLCodeProperty() {
    var _this14;
    (0, _classCallCheck2["default"])(this, HTMLCodeProperty);
    _this14 = _super19.call(this, 'htmlcode', _RecitEditor.i18n.get_string('htmlcode'));
    _this14.input = new TextArea(_this14.onChange.bind((0, _assertThisInitialized2["default"])(_this14)));
    return _this14;
  }
  (0, _createClass2["default"])(HTMLCodeProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.outerHTML;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var newEl = new DOMParser().parseFromString(value, "text/html").body.firstElementChild;
      return newEl;
    }
  }]);
  return HTMLCodeProperty;
}(HTMLProperty);
exports.HTMLCodeProperty = HTMLCodeProperty;
var HTMLClassProperty = function (_HTMLProperty20) {
  (0, _inherits2["default"])(HTMLClassProperty, _HTMLProperty20);
  var _super20 = _createSuper(HTMLClassProperty);
  function HTMLClassProperty() {
    var _this15;
    (0, _classCallCheck2["default"])(this, HTMLClassProperty);
    _this15 = _super20.call(this, 'classlist', _RecitEditor.i18n.get_string('classlist'));
    _this15.input = new MultiSelect([], _this15.onChange.bind((0, _assertThisInitialized2["default"])(_this15)));
    return _this15;
  }
  (0, _createClass2["default"])(HTMLClassProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {
        autoAdd: true,
        showLabel: true
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      var list = [];
      var _iterator4 = _createForOfIteratorHelper(el.classList),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var c = _step4.value;
          list.push({
            value: c,
            text: c
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return list;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.className = value.join(' ');
    }
  }]);
  return HTMLClassProperty;
}(HTMLProperty);
exports.HTMLClassProperty = HTMLClassProperty;
var HTMLMarginBorderPaddingProperty = function (_HTMLProperty21) {
  (0, _inherits2["default"])(HTMLMarginBorderPaddingProperty, _HTMLProperty21);
  var _super21 = _createSuper(HTMLMarginBorderPaddingProperty);
  function HTMLMarginBorderPaddingProperty() {
    var _this16;
    (0, _classCallCheck2["default"])(this, HTMLMarginBorderPaddingProperty);
    _this16 = _super21.call(this, 'layoutspacing', _RecitEditor.i18n.get_string('spacing'));
    _this16.defaultValue = '';
    _this16.input = new LayoutSpacingEditor(_this16.onChange.bind((0, _assertThisInitialized2["default"])(_this16)));
    return _this16;
  }
  (0, _createClass2["default"])(HTMLMarginBorderPaddingProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {
        showLabel: false
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      var list = {};
      var _iterator5 = _createForOfIteratorHelper(_RecitEditor.LayoutSpacingEditor.styleKeys),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var c = _step5.value;
          if (el.style[c]) {
            list[c] = el.style[c];
          } else {
            list[c] = '';
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return list;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      el.style[value.name] = value.value;
    }
  }]);
  return HTMLMarginBorderPaddingProperty;
}(HTMLProperty);
exports.HTMLMarginBorderPaddingProperty = HTMLMarginBorderPaddingProperty;
var BsBackgroundProperty = function (_HTMLProperty22) {
  (0, _inherits2["default"])(BsBackgroundProperty, _HTMLProperty22);
  var _super22 = _createSuper(BsBackgroundProperty);
  function BsBackgroundProperty() {
    var _this17;
    (0, _classCallCheck2["default"])(this, BsBackgroundProperty);
    _this17 = _super22.call(this, 'bsBackground', _RecitEditor.i18n.get_string('backgroundcolor'));
    _this17.options = [{
      text: "",
      value: "primary"
    }, {
      text: "",
      value: "secondary"
    }, {
      text: "",
      value: "success"
    }, {
      text: "",
      value: "danger"
    }, {
      text: "",
      value: "warning"
    }, {
      text: "",
      value: "info"
    }, {
      text: "",
      value: "light"
    }, {
      text: "",
      value: "dark"
    }, {
      text: "",
      value: "white"
    }];
    _this17.input = new ColorSelectorInput(_this17.options, _this17.onChange.bind((0, _assertThisInitialized2["default"])(_this17)));
    return _this17;
  }
  (0, _createClass2["default"])(BsBackgroundProperty, [{
    key: "getFlags",
    value: function getFlags(el) {
      var elClass = _HTMLElementData.HTMLElementData.getInstance().getElementClass(null, el);
      var prefix = elClass ? "".concat(elClass.cssProp.prefix) : 'bg';
      return {
        fetchFromTheme: true,
        prefix: "".concat(prefix, "-")
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var elClass = _HTMLElementData.HTMLElementData.getInstance().getElementClass(null, el);
      var prefix = elClass ? "".concat(elClass.cssProp.prefix) : 'bg';
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator6 = _createForOfIteratorHelper(data.input.options),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;
          if (classList.includes("".concat(prefix, "-").concat(item.value))) {
            result = item.value;
            break;
          }
          if (classList.includes("".concat(prefix, "-outline-").concat(item.value))) {
            result = item.value.replace('outline-', '');
            break;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var elClass = _HTMLElementData.HTMLElementData.getInstance().getElementClass(null, el);
      var prefix = elClass ? "".concat(elClass.cssProp.prefix) : 'bg';
      var middlefix = '';
      var _iterator7 = _createForOfIteratorHelper(data.input.options),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var item = _step7.value;
          if (el.classList.contains("".concat(prefix, "-").concat(item.value))) {
            el.classList.remove("".concat(prefix, "-").concat(item.value));
          }
          if (el.classList.contains("".concat(prefix, "-outline-").concat(item.value))) {
            el.classList.remove("".concat(prefix, "-outline-").concat(item.value));
            middlefix = '-outline';
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      if (value.length > 0) {
        el.classList.add("".concat(prefix).concat(middlefix, "-").concat(value));
      }
    }
  }]);
  return BsBackgroundProperty;
}(HTMLProperty);
exports.BsBackgroundProperty = BsBackgroundProperty;
var BsBackgroundImageProperty = function (_HTMLProperty23) {
  (0, _inherits2["default"])(BsBackgroundImageProperty, _HTMLProperty23);
  var _super23 = _createSuper(BsBackgroundImageProperty);
  function BsBackgroundImageProperty() {
    var _this18;
    (0, _classCallCheck2["default"])(this, BsBackgroundImageProperty);
    _this18 = _super23.call(this, 'backgroundimage', _RecitEditor.i18n.get_string('backgroundimage'));
    _this18.input = new ImageSrc(_this18.onChange.bind((0, _assertThisInitialized2["default"])(_this18)));
    return _this18;
  }
  (0, _createClass2["default"])(BsBackgroundImageProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.style.backgroundImage ? el.style.backgroundImage : '';
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (value.length > 0) {
        if (value.includes('url(')) {
          el.style.backgroundImage = value;
        } else {
          el.style.backgroundImage = "url('".concat(value, "')");
        }
      } else {
        el.style.backgroundImage = "";
      }
    }
  }]);
  return BsBackgroundImageProperty;
}(HTMLProperty);
exports.BsBackgroundImageProperty = BsBackgroundImageProperty;
var HTMLBackgroundCoverProperty = function (_HTMLProperty24) {
  (0, _inherits2["default"])(HTMLBackgroundCoverProperty, _HTMLProperty24);
  var _super24 = _createSuper(HTMLBackgroundCoverProperty);
  function HTMLBackgroundCoverProperty() {
    var _this19;
    (0, _classCallCheck2["default"])(this, HTMLBackgroundCoverProperty);
    _this19 = _super24.call(this, 'backgroundcover', _react["default"].createElement(_react["default"].Fragment, null, _RecitEditor.i18n.get_string('backgroundcover'), " ", _react["default"].createElement(_reactBootstrap.OverlayTrigger, {
      overlay: _react["default"].createElement(_reactBootstrap.Tooltip, null, _RecitEditor.i18n.get_string('appliedasstyle'))
    }, _react["default"].createElement("a", {
      className: "color-primary"
    }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faInfoCircle
    }), " "))));
    _this19.options = [{
      text: _RecitEditor.i18n.get_string('yes'),
      value: "cover"
    }, {
      text: _RecitEditor.i18n.get_string('no'),
      value: ""
    }];
    _this19.input = new RadioButton(_this19.options, _this19.onChange.bind((0, _assertThisInitialized2["default"])(_this19)));
    return _this19;
  }
  (0, _createClass2["default"])(HTMLBackgroundCoverProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      if (el.style.backgroundSize == 'cover') {
        result = "cover";
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (value.length > 0) {
        el.style.backgroundSize = 'cover';
      } else {
        el.style.backgroundSize = '';
      }
    }
  }]);
  return HTMLBackgroundCoverProperty;
}(HTMLProperty);
exports.HTMLBackgroundCoverProperty = HTMLBackgroundCoverProperty;
var BsFullHeightProperty = function (_HTMLProperty25) {
  (0, _inherits2["default"])(BsFullHeightProperty, _HTMLProperty25);
  var _super25 = _createSuper(BsFullHeightProperty);
  function BsFullHeightProperty() {
    var _this20;
    (0, _classCallCheck2["default"])(this, BsFullHeightProperty);
    _this20 = _super25.call(this, 'fullheight', _RecitEditor.i18n.get_string('fullheight'));
    _this20.custom = {
      className: "h-100"
    };
    _this20.options = [{
      text: _RecitEditor.i18n.get_string('yes'),
      value: _this20.custom.className
    }, {
      text: _RecitEditor.i18n.get_string('no'),
      value: ""
    }];
    _this20.input = new RadioButton(_this20.options, _this20.onChange.bind((0, _assertThisInitialized2["default"])(_this20)));
    return _this20;
  }
  (0, _createClass2["default"])(BsFullHeightProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      if (el.classList.contains(this.custom.className)) {
        result = this.custom.className;
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (value.length > 0) {
        el.classList.add(this.custom.className);
      } else {
        el.classList.remove(this.custom.className);
      }
    }
  }]);
  return BsFullHeightProperty;
}(HTMLProperty);
exports.BsFullHeightProperty = BsFullHeightProperty;
var BsShadowProperty = function (_HTMLProperty26) {
  (0, _inherits2["default"])(BsShadowProperty, _HTMLProperty26);
  var _super26 = _createSuper(BsShadowProperty);
  function BsShadowProperty() {
    var _this21;
    (0, _classCallCheck2["default"])(this, BsShadowProperty);
    _this21 = _super26.call(this, 'shadow', _RecitEditor.i18n.get_string('shadow'));
    _this21.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat,
        title: _RecitEditor.i18n.get_string('removeformat')
      }),
      value: 'default'
    }, {
      text: _RecitEditor.i18n.get_string('none'),
      value: "shadow-none"
    }, {
      text: "SM",
      value: "shadow-sm"
    }, {
      text: "REG",
      value: "shadow"
    }, {
      text: "LG",
      value: "shadow-lg"
    }];
    _this21.input = new RadioButton(_this21.options, _this21.onChange.bind((0, _assertThisInitialized2["default"])(_this21)), ['default']);
    return _this21;
  }
  (0, _createClass2["default"])(BsShadowProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = data.input.defaultValue;
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator8 = _createForOfIteratorHelper(data.input.options),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var item = _step8.value;
          if (classList.includes(item.value)) {
            result = [item.value];
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator9 = _createForOfIteratorHelper(data.input.options),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;
          el.classList.remove(item.value);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (value.length > 0 && value !== data.input.defaultValue[0]) {
        el.classList.add(value);
      }
    }
  }]);
  return BsShadowProperty;
}(HTMLProperty);
exports.BsShadowProperty = BsShadowProperty;
var BsIconProperty = function (_HTMLProperty27) {
  (0, _inherits2["default"])(BsIconProperty, _HTMLProperty27);
  var _super27 = _createSuper(BsIconProperty);
  function BsIconProperty() {
    (0, _classCallCheck2["default"])(this, BsIconProperty);
    return _super27.call(this, 'icon', '', new IconPicker());
  }
  (0, _createClass2["default"])(BsIconProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {
        autoAdd: false,
        showLabel: false
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      return el.getAttribute('class');
    }
  }]);
  return BsIconProperty;
}(HTMLProperty);
exports.BsIconProperty = BsIconProperty;
var ModalGridProperty = function (_HTMLProperty28) {
  (0, _inherits2["default"])(ModalGridProperty, _HTMLProperty28);
  var _super28 = _createSuper(ModalGridProperty);
  function ModalGridProperty() {
    (0, _classCallCheck2["default"])(this, ModalGridProperty);
    return _super28.call(this, 'grid', _RecitEditor.i18n.get_string('grid'), new GridBuilder());
  }
  (0, _createClass2["default"])(ModalGridProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el;
    }
  }, {
    key: "getFlags",
    value: function getFlags() {
      return {
        showLabel: false
      };
    }
  }]);
  return ModalGridProperty;
}(HTMLProperty);
exports.ModalGridProperty = ModalGridProperty;
var BsIconSizeProperty = function (_HTMLProperty29) {
  (0, _inherits2["default"])(BsIconSizeProperty, _HTMLProperty29);
  var _super29 = _createSuper(BsIconSizeProperty);
  function BsIconSizeProperty() {
    var _this22;
    (0, _classCallCheck2["default"])(this, BsIconSizeProperty);
    _this22 = _super29.call(this, 'iconsize', _RecitEditor.i18n.get_string('iconsize'));
    _this22.options = [{
      text: "fa-lg",
      value: "fa-lg"
    }, {
      text: "fa-xs",
      value: "fa-xs"
    }, {
      text: "fa-sm",
      value: "fa-sm"
    }, {
      text: "fa-1x",
      value: "fa-1x"
    }, {
      text: "fa-2x",
      value: "fa-2x"
    }, {
      text: "fa-3x",
      value: "fa-3x"
    }, {
      text: "fa-4x",
      value: "fa-4x"
    }, {
      text: "fa-5x",
      value: "fa-5x"
    }, {
      text: "fa-fw",
      value: "fa-fw"
    }];
    _this22.input = new ComboBox(_this22.options, _this22.onChange.bind((0, _assertThisInitialized2["default"])(_this22)));
    return _this22;
  }
  (0, _createClass2["default"])(BsIconSizeProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator10 = _createForOfIteratorHelper(data.input.options),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var item = _step10.value;
          if (classList.includes(item.value)) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator11 = _createForOfIteratorHelper(data.input.options),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var item = _step11.value;
          el.classList.remove(item.value);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return BsIconSizeProperty;
}(HTMLProperty);
exports.BsIconSizeProperty = BsIconSizeProperty;
var BsMarginProperty = function (_HTMLProperty30) {
  (0, _inherits2["default"])(BsMarginProperty, _HTMLProperty30);
  var _super30 = _createSuper(BsMarginProperty);
  function BsMarginProperty() {
    var _this23;
    (0, _classCallCheck2["default"])(this, BsMarginProperty);
    _this23 = _super30.call(this, 'margin', _RecitEditor.i18n.get_string('margin'));
    var items = [0, 1, 2, 3, 4, 5];
    _this23.options = [{
      name: "mt",
      items: items
    }, {
      name: "mr",
      items: items
    }, {
      name: "mb",
      items: items
    }, {
      name: "ml",
      items: items
    }, {
      name: "m",
      items: items
    }];
    _this23.input = new LayoutSpacing(_this23.options, _this23.onChange.bind((0, _assertThisInitialized2["default"])(_this23)));
    return _this23;
  }
  (0, _createClass2["default"])(BsMarginProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = [];
      for (var i = 0; i <= 5; i++) {
        var _iterator12 = _createForOfIteratorHelper(data.input.options),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var item = _step12.value;
            var className = "".concat(item.name, "-").concat(i);
            if (el.classList.contains(className)) {
              result.push({
                name: item.name,
                value: i
              });
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      value.oldValue = value.oldValue.toString();
      value.newValue = value.newValue.toString();
      if (value.oldValue.length > 0) {
        el.classList.remove("".concat(value.name, "-").concat(value.oldValue));
      }
      if (value.newValue.length > 0) {
        el.classList.add("".concat(value.name, "-").concat(value.newValue));
      }
    }
  }]);
  return BsMarginProperty;
}(HTMLProperty);
exports.BsMarginProperty = BsMarginProperty;
var BsPaddingProperty = function (_HTMLProperty31) {
  (0, _inherits2["default"])(BsPaddingProperty, _HTMLProperty31);
  var _super31 = _createSuper(BsPaddingProperty);
  function BsPaddingProperty() {
    var _this24;
    (0, _classCallCheck2["default"])(this, BsPaddingProperty);
    _this24 = _super31.call(this, 'padding', _RecitEditor.i18n.get_string('padding'));
    var items = [0, 1, 2, 3, 4, 5];
    _this24.options = [{
      name: "pt",
      items: items
    }, {
      name: "pr",
      items: items
    }, {
      name: "pb",
      items: items
    }, {
      name: "pl",
      items: items
    }, {
      name: "p",
      items: items
    }];
    _this24.input = new LayoutSpacing(_this24.options, _this24.onChange.bind((0, _assertThisInitialized2["default"])(_this24)));
    return _this24;
  }
  (0, _createClass2["default"])(BsPaddingProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = [];
      for (var i = 0; i <= 5; i++) {
        var _iterator13 = _createForOfIteratorHelper(data.input.options),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var item = _step13.value;
            var className = "".concat(item.name, "-").concat(i);
            if (el.classList.contains(className)) {
              result.push({
                name: item.name,
                value: i
              });
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      value.oldValue = value.oldValue.toString();
      value.newValue = value.newValue.toString();
      if (value.oldValue.length > 0) {
        el.classList.remove("".concat(value.name, "-").concat(value.oldValue));
      }
      if (value.newValue.length > 0) {
        el.classList.add("".concat(value.name, "-").concat(value.newValue));
      }
    }
  }]);
  return BsPaddingProperty;
}(HTMLProperty);
exports.BsPaddingProperty = BsPaddingProperty;
var BsTabProperty = function (_HTMLProperty32) {
  (0, _inherits2["default"])(BsTabProperty, _HTMLProperty32);
  var _super32 = _createSuper(BsTabProperty);
  function BsTabProperty() {
    var _this25;
    (0, _classCallCheck2["default"])(this, BsTabProperty);
    _this25 = _super32.call(this, 'style', _RecitEditor.i18n.get_string('style'));
    _this25.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFolder,
        title: _RecitEditor.i18n.get_string('tab')
      }),
      value: 'nav-tabs'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEllipsisH,
        title: _RecitEditor.i18n.get_string('pill')
      }),
      value: 'nav-pills'
    }];
    _this25.input = new RadioButton(_this25.options, _this25.onChange.bind((0, _assertThisInitialized2["default"])(_this25)));
    return _this25;
  }
  (0, _createClass2["default"])(BsTabProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var tab = el;
      if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
      if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
      if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
      if (tab && tab.classList.contains('nav-pills')) return 'nav-pills';
      return '';
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var tab = el;
      if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
      if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
      if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
      if (tab) {
        tab.classList.remove('nav-pills');
        tab.classList.remove('nav-tabs');
        tab.classList.add(value);
      }
    }
  }]);
  return BsTabProperty;
}(HTMLProperty);
exports.BsTabProperty = BsTabProperty;
var BsTabJustifyProperty = function (_HTMLProperty33) {
  (0, _inherits2["default"])(BsTabJustifyProperty, _HTMLProperty33);
  var _super33 = _createSuper(BsTabJustifyProperty);
  function BsTabJustifyProperty() {
    var _this26;
    (0, _classCallCheck2["default"])(this, BsTabJustifyProperty);
    _this26 = _super33.call(this, 'justify', _RecitEditor.i18n.get_string('justify'));
    _this26.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignLeft,
        title: _RecitEditor.i18n.get_string('left')
      }),
      value: ''
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignCenter,
        title: _RecitEditor.i18n.get_string('center')
      }),
      value: 'justify-content-center'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignRight,
        title: _RecitEditor.i18n.get_string('right')
      }),
      value: 'justify-content-end'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignJustify,
        title: _RecitEditor.i18n.get_string('fullwidth')
      }),
      value: 'nav-fill'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEllipsisV,
        title: _RecitEditor.i18n.get_string('horizontal')
      }),
      value: 'flex-column'
    }];
    _this26.input = new RadioButton(_this26.options, _this26.onChange.bind((0, _assertThisInitialized2["default"])(_this26)));
    return _this26;
  }
  (0, _createClass2["default"])(BsTabJustifyProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var tab = el;
      if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
      if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
      if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
      var _iterator14 = _createForOfIteratorHelper(data.input.options),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var item = _step14.value;
          if (tab.classList.contains(item.value)) return item.value;
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      return '';
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var tab = el;
      if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
      if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
      if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
      if (tab) {
        if (tab.classList.length > 0) {
          var _iterator15 = _createForOfIteratorHelper(data.input.options),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var item = _step15.value;
              if (item.value.length > 0) tab.classList.remove(item.value);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
        tab.classList.add(value);
      }
    }
  }]);
  return BsTabJustifyProperty;
}(HTMLProperty);
exports.BsTabJustifyProperty = BsTabJustifyProperty;
var BsAddTabProperty = function (_HTMLProperty34) {
  (0, _inherits2["default"])(BsAddTabProperty, _HTMLProperty34);
  var _super34 = _createSuper(BsAddTabProperty);
  function BsAddTabProperty() {
    var _this27;
    (0, _classCallCheck2["default"])(this, BsAddTabProperty);
    _this27 = _super34.call(this, 'addtab', _RecitEditor.i18n.get_string('actions'));
    _this27.options = [{
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus,
        title: _RecitEditor.i18n.get_string('addtab')
      }), _RecitEditor.i18n.get_string('tab')),
      onClick: function onClick(el, value, data) {
        var tab = el;
        if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
        if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
        if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
        var items = tab.parentElement.querySelectorAll('.tab-pane');
        var _iterator16 = _createForOfIteratorHelper(items),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var it = _step16.value;
            it.classList.remove('active', 'show');
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        items = tab.parentElement.querySelectorAll('.nav-link');
        var _iterator17 = _createForOfIteratorHelper(items),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _it = _step17.value;
            _it.classList.remove('active', 'show');
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        var nav = document.createElement('li');
        nav.classList.add('nav-item');
        tab.appendChild(nav);
        var link = document.createElement('a');
        link.classList.add('nav-link', 'active', 'show');
        var tabid = _RecitEditor.Utils.getRandomId();
        var nbItems = items.length + 1;
        link.innerText = "Onglet ".concat(nbItems);
        tabid = "tab".concat(tabid);
        link.setAttribute('data-toggle', 'tab');
        link.setAttribute('role', 'tab');
        link.setAttribute('href', '#' + tabid);
        link.setAttribute('aria-controls', tabid);
        nav.appendChild(link);
        var content = tab.parentElement.querySelector('.tab-content');
        var div = document.createElement('div');
        div.classList.add('tab-pane', 'fade', 'mt-3', 'active', 'show');
        div.setAttribute('role', 'tabpanel');
        div.setAttribute('id', tabid);
        div.setAttribute('aria-labelledby', tabid);
        div.innerHTML = "<p>Contenu " + nbItems + "</p>";
        content.appendChild(div);
        return {
          action: 'insert',
          nodes: [nav, content]
        };
      }
    }];
    _this27.input = new ButtonGroup(_this27.options);
    return _this27;
  }
  (0, _createClass2["default"])(BsAddTabProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el;
    }
  }]);
  return BsAddTabProperty;
}(HTMLProperty);
exports.BsAddTabProperty = BsAddTabProperty;
var BsAddAccordionProperty = function (_HTMLProperty35) {
  (0, _inherits2["default"])(BsAddAccordionProperty, _HTMLProperty35);
  var _super35 = _createSuper(BsAddAccordionProperty);
  function BsAddAccordionProperty() {
    var _this28;
    (0, _classCallCheck2["default"])(this, BsAddAccordionProperty);
    _this28 = _super35.call(this, 'addaccordion', _RecitEditor.i18n.get_string('actions'));
    _this28.options = [{
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus,
        title: _RecitEditor.i18n.get_string('add')
      }), _RecitEditor.i18n.get_string('accordion')),
      onClick: function onClick(el, value, data) {
        var tab = el;
        if (el.classList.contains('btn')) tab = el.parentElement.parentElement.parentElement.parentElement;
        var items = tab.parentElement.querySelectorAll('.collapse');
        var _iterator18 = _createForOfIteratorHelper(items),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var it = _step18.value;
            it.classList.remove('active', 'show');
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
        var id = _RecitEditor.Utils.getRandomId();
        var nbItems = items.length + 1;
        var nav = document.createElement('div');
        nav.classList.add('card');
        tab.appendChild(nav);
        nav.innerHTML = "\n                    <div class=\"card-header\" id=\"heading".concat(id, "\">\n                      <h2 class=\"mb-0\">\n                        <a class=\"btn btn-link btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse").concat(id, "\" aria-expanded=\"false\" aria-controls=\"collapse").concat(id, "\">\n                          Item #").concat(nbItems, "\n                        </a>\n                      </h2>\n                    </div>\n                    <div id=\"collapse").concat(id, "\" class=\"collapse\" aria-labelledby=\"heading").concat(id, "\" data-parent=\"#").concat(tab.id, "\">\n                      <div class=\"card-body\">\n                        Item #").concat(nbItems, "\n                      </div>\n                    </div>");
        return {
          action: 'insert',
          nodes: [nav]
        };
      }
    }];
    _this28.input = new ButtonGroup(_this28.options);
    return _this28;
  }
  (0, _createClass2["default"])(BsAddAccordionProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el;
    }
  }]);
  return BsAddAccordionProperty;
}(HTMLProperty);
exports.BsAddAccordionProperty = BsAddAccordionProperty;
var BsBorderProperty = function (_HTMLProperty36) {
  (0, _inherits2["default"])(BsBorderProperty, _HTMLProperty36);
  var _super36 = _createSuper(BsBorderProperty);
  function BsBorderProperty() {
    var _this29;
    (0, _classCallCheck2["default"])(this, BsBorderProperty);
    _this29 = _super36.call(this, 'border', _react["default"].createElement(_react["default"].Fragment, null, _RecitEditor.i18n.get_string('border'), " ", _react["default"].createElement(_reactBootstrap.OverlayTrigger, {
      overlay: _react["default"].createElement(_reactBootstrap.Tooltip, null, _RecitEditor.i18n.get_string('appliedasstyle'))
    }, _react["default"].createElement("a", {
      className: "color-primary"
    }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faInfoCircle
    }), " "))));
    _this29.options = [{
      name: "-top",
      items: ['0px', '1px', '2px', '5px', '10px', '20px']
    }, {
      name: "-right",
      items: ['0px', '1px', '2px', '5px', '10px', '20px']
    }, {
      name: "-bottom",
      items: ['0px', '1px', '2px', '5px', '10px', '20px']
    }, {
      name: "-left",
      items: ['0px', '1px', '2px', '5px', '10px', '20px']
    }, {
      name: "",
      items: ['0px', '1px', '2px', '5px', '10px', '20px']
    }];
    _this29.input = new LayoutSpacing(_this29.options, _this29.onChange.bind((0, _assertThisInitialized2["default"])(_this29)));
    return _this29;
  }
  (0, _createClass2["default"])(BsBorderProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = [];
      for (var i = 0; i <= 5; i++) {
        var _iterator19 = _createForOfIteratorHelper(data.input.options),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var item = _step19.value;
            if (el.style['border' + item.name + '-width'] == item.items[i]) {
              result.push({
                name: item.name,
                value: item.items[i]
              });
            }
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      value.oldValue = value.oldValue.toString();
      value.newValue = value.newValue.toString();
      if (value.oldValue.length > 0) {
        el.style['border' + value.name + '-width'] = '';
        el.style['border' + value.name + '-style'] = '';
      }
      if (value.newValue.length > 0) {
        el.style['border' + value.name + '-width'] = value.newValue;
        if (!el.style['border-style']) {
          el.style['border' + value.name + '-style'] = 'solid';
        }
      }
    }
  }]);
  return BsBorderProperty;
}(HTMLProperty);
exports.BsBorderProperty = BsBorderProperty;
var BsHeadingProperty = function (_HTMLProperty37) {
  (0, _inherits2["default"])(BsHeadingProperty, _HTMLProperty37);
  var _super37 = _createSuper(BsHeadingProperty);
  function BsHeadingProperty() {
    var _this30;
    (0, _classCallCheck2["default"])(this, BsHeadingProperty);
    _this30 = _super37.call(this, 'headingprop', _RecitEditor.i18n.get_string('headingstyle'));
    _this30.options = [{
      text: 'h1',
      value: "h1"
    }, {
      text: 'h2',
      value: "h2"
    }, {
      text: 'h3',
      value: "h3"
    }, {
      text: 'h4',
      value: "h4"
    }, {
      text: 'h5',
      value: "h5"
    }, {
      text: 'h6',
      value: "h6"
    }];
    _this30.input = new RadioButton(_this30.options, _this30.onChange.bind((0, _assertThisInitialized2["default"])(_this30)));
    return _this30;
  }
  (0, _createClass2["default"])(BsHeadingProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator20 = _createForOfIteratorHelper(data.input.options),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var item = _step20.value;
          if (classList.includes("".concat(item.value))) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator21 = _createForOfIteratorHelper(data.input.options),
        _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var item = _step21.value;
          el.classList.remove("".concat(item.value));
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
      if (value.length > 0) {
        el.classList.add("".concat(value));
      }
    }
  }]);
  return BsHeadingProperty;
}(HTMLProperty);
exports.BsHeadingProperty = BsHeadingProperty;
var BsBorderColorProperty = function (_HTMLProperty38) {
  (0, _inherits2["default"])(BsBorderColorProperty, _HTMLProperty38);
  var _super38 = _createSuper(BsBorderColorProperty);
  function BsBorderColorProperty() {
    var _this31;
    (0, _classCallCheck2["default"])(this, BsBorderColorProperty);
    _this31 = _super38.call(this, 'bordercolor', _RecitEditor.i18n.get_string('bordercolor'));
    _this31.options = [{
      text: "",
      value: "primary"
    }, {
      text: "",
      value: "secondary"
    }, {
      text: "",
      value: "success"
    }, {
      text: "",
      value: "danger"
    }, {
      text: "",
      value: "warning"
    }, {
      text: "",
      value: "info"
    }, {
      text: "",
      value: "light"
    }, {
      text: "",
      value: "dark"
    }, {
      text: "",
      value: "white"
    }];
    _this31.input = new ColorSelectorInput(_this31.options, _this31.onChange.bind((0, _assertThisInitialized2["default"])(_this31)));
    return _this31;
  }
  (0, _createClass2["default"])(BsBorderColorProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {
        prefix: 'border-',
        fetchFromTheme: true
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator22 = _createForOfIteratorHelper(data.input.options),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var item = _step22.value;
          if (classList.includes("border-".concat(item.value))) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator23 = _createForOfIteratorHelper(data.input.options),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var item = _step23.value;
          el.classList.remove("border-".concat(item.value));
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      if (value.length > 0) {
        el.classList.add("border-".concat(value));
      }
    }
  }]);
  return BsBorderColorProperty;
}(HTMLProperty);
exports.BsBorderColorProperty = BsBorderColorProperty;
var BsBorderStyleProperty = function (_HTMLProperty39) {
  (0, _inherits2["default"])(BsBorderStyleProperty, _HTMLProperty39);
  var _super39 = _createSuper(BsBorderStyleProperty);
  function BsBorderStyleProperty() {
    var _this32;
    (0, _classCallCheck2["default"])(this, BsBorderStyleProperty);
    _this32 = _super39.call(this, 'borderstyle', _RecitEditor.i18n.get_string('borderstyle'));
    _this32.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: _freeSolidSvgIcons.faRemoveFormat,
        title: "Default"
      }),
      value: ''
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: _freeSolidSvgIcons.faSquare,
        title: "Solide"
      }),
      value: 'solid'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: _freeSolidSvgIcons.faRuler,
        title: "Barr\xE9"
      }),
      value: 'dashed'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: _freeSolidSvgIcons.faEllipsisH,
        title: "Pointill\xE9"
      }),
      value: 'dotted'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: _freeSolidSvgIcons.faGripLines,
        title: "Double"
      }),
      value: 'double'
    }];
    _this32.input = new RadioButton(_this32.options, _this32.onChange.bind((0, _assertThisInitialized2["default"])(_this32)));
    return _this32;
  }
  (0, _createClass2["default"])(BsBorderStyleProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return [el.style.borderStyle];
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      for (var _i = 0, _arr = ['top', 'bottom', 'left', 'right']; _i < _arr.length; _i++) {
        var c = _arr[_i];
        el.style['border-' + c + '-style'] = '';
      }
      el.style.borderStyle = value;
    }
  }]);
  return BsBorderStyleProperty;
}(HTMLProperty);
exports.BsBorderStyleProperty = BsBorderStyleProperty;
var BsBorderRadiusProperty = function (_HTMLProperty40) {
  (0, _inherits2["default"])(BsBorderRadiusProperty, _HTMLProperty40);
  var _super40 = _createSuper(BsBorderRadiusProperty);
  function BsBorderRadiusProperty() {
    var _this33;
    (0, _classCallCheck2["default"])(this, BsBorderRadiusProperty);
    _this33 = _super40.call(this, 'borderradius', _RecitEditor.i18n.get_string('borderradius'));
    _this33.options = [{
      text: "Rounded",
      value: "rounded"
    }, {
      text: "Rounded-Top",
      value: "rounded-top"
    }, {
      text: "Rounded-Right",
      value: "rounded-right"
    }, {
      text: "Rounded-Bottom",
      value: "rounded-bottom"
    }, {
      text: "Rounded-Left",
      value: "rounded-left"
    }, {
      text: "Rounded-Circle",
      value: "rounded-circle"
    }, {
      text: "Rounded-Pill",
      value: "rounded-pill"
    }, {
      text: "Rounded-0",
      value: "rounded-0"
    }];
    _this33.input = new ComboBox(_this33.options, _this33.onChange.bind((0, _assertThisInitialized2["default"])(_this33)));
    return _this33;
  }
  (0, _createClass2["default"])(BsBorderRadiusProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator24 = _createForOfIteratorHelper(data.input.options),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var item = _step24.value;
          if (classList.includes(item.value)) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator25 = _createForOfIteratorHelper(data.input.options),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var item = _step25.value;
          el.classList.remove(item.value);
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return BsBorderRadiusProperty;
}(HTMLProperty);
exports.BsBorderRadiusProperty = BsBorderRadiusProperty;
var BsTextColorProperty = function (_HTMLProperty41) {
  (0, _inherits2["default"])(BsTextColorProperty, _HTMLProperty41);
  var _super41 = _createSuper(BsTextColorProperty);
  function BsTextColorProperty() {
    var _this34;
    (0, _classCallCheck2["default"])(this, BsTextColorProperty);
    _this34 = _super41.call(this, 'color', _RecitEditor.i18n.get_string('textcolor'));
    _this34.options = [{
      text: "",
      value: "primary"
    }, {
      text: "",
      value: "secondary"
    }, {
      text: "",
      value: "success"
    }, {
      text: "",
      value: "danger"
    }, {
      text: "",
      value: "warning"
    }, {
      text: "",
      value: "info"
    }, {
      text: "",
      value: "light"
    }, {
      text: "",
      value: "dark"
    }, {
      text: "",
      value: "white"
    }];
    _this34.input = new ColorSelectorInput(_this34.options, _this34.onChange.bind((0, _assertThisInitialized2["default"])(_this34)));
    return _this34;
  }
  (0, _createClass2["default"])(BsTextColorProperty, [{
    key: "getFlags",
    value: function getFlags() {
      return {
        prefix: 'text-',
        fetchFromTheme: true
      };
    }
  }, {
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator26 = _createForOfIteratorHelper(data.input.options),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var item = _step26.value;
          if (classList.includes("text-".concat(item.value))) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator27 = _createForOfIteratorHelper(data.input.options),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var item = _step27.value;
          el.classList.remove("text-".concat(item.value));
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      if (value.length > 0) {
        el.classList.add("text-".concat(value));
      }
    }
  }]);
  return BsTextColorProperty;
}(HTMLProperty);
exports.BsTextColorProperty = BsTextColorProperty;
var BsTextAlignmentProperty = function (_HTMLProperty42) {
  (0, _inherits2["default"])(BsTextAlignmentProperty, _HTMLProperty42);
  var _super42 = _createSuper(BsTextAlignmentProperty);
  function BsTextAlignmentProperty() {
    var _this35;
    (0, _classCallCheck2["default"])(this, BsTextAlignmentProperty);
    _this35 = _super42.call(this, 'alignment', _RecitEditor.i18n.get_string('alignment'));
    _this35.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat,
        title: _RecitEditor.i18n.get_string('default')
      }),
      value: 'default'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignLeft,
        title: _RecitEditor.i18n.get_string('left')
      }),
      value: 'text-left'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignCenter,
        title: _RecitEditor.i18n.get_string('center')
      }),
      value: 'text-center'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignRight,
        title: _RecitEditor.i18n.get_string('right')
      }),
      value: 'text-right'
    }, {
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faAlignJustify,
        title: _RecitEditor.i18n.get_string('justify')
      }),
      value: 'text-justify'
    }];
    _this35.input = new RadioButton(_this35.options, _this35.onChange.bind((0, _assertThisInitialized2["default"])(_this35)), ['default']);
    return _this35;
  }
  (0, _createClass2["default"])(BsTextAlignmentProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var _iterator28 = _createForOfIteratorHelper(data.input.options),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var option = _step28.value;
          if (el.classList.contains(option.value)) {
            return [option.value];
          }
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
      return data.input.defaultValue;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (el.classList.length > 0) {
        var _iterator29 = _createForOfIteratorHelper(data.input.options),
          _step29;
        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var option = _step29.value;
            el.classList.remove(option.value);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
      if (data.input.defaultValue.join() === value) {
        return;
      }
      el.classList.add(value);
    }
  }]);
  return BsTextAlignmentProperty;
}(HTMLProperty);
exports.BsTextAlignmentProperty = BsTextAlignmentProperty;
var BsBtnBlockProperty = function (_HTMLProperty43) {
  (0, _inherits2["default"])(BsBtnBlockProperty, _HTMLProperty43);
  var _super43 = _createSuper(BsBtnBlockProperty);
  function BsBtnBlockProperty() {
    var _this36;
    (0, _classCallCheck2["default"])(this, BsBtnBlockProperty);
    _this36 = _super43.call(this, 'btnblock', _RecitEditor.i18n.get_string('buttonfullwidth'));
    _this36.options = [{
      text: _RecitEditor.i18n.get_string('yes'),
      value: "btn-block"
    }, {
      text: _RecitEditor.i18n.get_string('no'),
      value: ""
    }];
    _this36.input = new RadioButton(_this36.options, _this36.onChange.bind((0, _assertThisInitialized2["default"])(_this36)));
    return _this36;
  }
  (0, _createClass2["default"])(BsBtnBlockProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      if (el.classList.contains("btn-block")) {
        result = "btn-block";
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (el.classList.contains("btn-block")) {
        el.classList.remove("btn-block");
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return BsBtnBlockProperty;
}(HTMLProperty);
exports.BsBtnBlockProperty = BsBtnBlockProperty;
var BsGridResponsiveProperty = function (_HTMLProperty44) {
  (0, _inherits2["default"])(BsGridResponsiveProperty, _HTMLProperty44);
  var _super44 = _createSuper(BsGridResponsiveProperty);
  function BsGridResponsiveProperty() {
    var _this37;
    (0, _classCallCheck2["default"])(this, BsGridResponsiveProperty);
    _this37 = _super44.call(this, 'gridresponsive', _RecitEditor.i18n.get_string('reverserow'));
    _this37.options = [{
      text: _RecitEditor.i18n.get_string('yes'),
      value: "flex-md-row-reverse"
    }, {
      text: _RecitEditor.i18n.get_string('no'),
      value: ""
    }];
    _this37.input = new RadioButton(_this37.options, _this37.onChange.bind((0, _assertThisInitialized2["default"])(_this37)));
    return _this37;
  }
  (0, _createClass2["default"])(BsGridResponsiveProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      if (el.classList.contains("flex-md-row-reverse")) {
        result = "flex-md-row-reverse";
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (el.classList.contains("flex-md-row-reverse")) {
        el.classList.remove("flex-md-row-reverse");
      }
      if (el.classList.contains("flex-md-row")) {
        el.classList.remove("flex-md-row");
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return BsGridResponsiveProperty;
}(HTMLProperty);
exports.BsGridResponsiveProperty = BsGridResponsiveProperty;
var BsGridVerticalAlignProperty = function (_HTMLProperty45) {
  (0, _inherits2["default"])(BsGridVerticalAlignProperty, _HTMLProperty45);
  var _super45 = _createSuper(BsGridVerticalAlignProperty);
  function BsGridVerticalAlignProperty() {
    var _this38;
    (0, _classCallCheck2["default"])(this, BsGridVerticalAlignProperty);
    _this38 = _super45.call(this, 'gridalign', _RecitEditor.i18n.get_string('verticalalign'));
    _this38.options = [{
      text: _RecitEditor.i18n.get_string('yes'),
      value: "align-self-center"
    }, {
      text: _RecitEditor.i18n.get_string('no'),
      value: ""
    }];
    _this38.input = new RadioButton(_this38.options, _this38.onChange.bind((0, _assertThisInitialized2["default"])(_this38)));
    return _this38;
  }
  (0, _createClass2["default"])(BsGridVerticalAlignProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      if (el.classList.contains("align-self-center")) {
        result = "align-self-center";
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (el.classList.contains("align-self-center")) {
        el.classList.remove("align-self-center");
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return BsGridVerticalAlignProperty;
}(HTMLProperty);
exports.BsGridVerticalAlignProperty = BsGridVerticalAlignProperty;
var BsGridPaddingProperty = function (_HTMLProperty46) {
  (0, _inherits2["default"])(BsGridPaddingProperty, _HTMLProperty46);
  var _super46 = _createSuper(BsGridPaddingProperty);
  function BsGridPaddingProperty() {
    var _this39;
    (0, _classCallCheck2["default"])(this, BsGridPaddingProperty);
    _this39 = _super46.call(this, 'gridpadding', _RecitEditor.i18n.get_string('paddingtype'));
    _this39.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat
      }),
      value: "remove"
    }, {
      text: _RecitEditor.i18n.get_string('top'),
      value: "top"
    }, {
      text: _RecitEditor.i18n.get_string('bottom'),
      value: "bottom"
    }, {
      text: _RecitEditor.i18n.get_string('lateral'),
      value: "lateral"
    }];
    _this39.input = new CheckboxButton(_this39.options, _this39.onChange.bind((0, _assertThisInitialized2["default"])(_this39)));
    return _this39;
  }
  (0, _createClass2["default"])(BsGridPaddingProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = [];
      for (var v in BsGridPaddingProperty.classList) {
        var exists = true;
        var _iterator30 = _createForOfIteratorHelper(BsGridPaddingProperty.classList[v]),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var cl = _step30.value;
            if (!el.classList.contains(cl)) {
              exists = false;
            }
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
        if (exists) {
          result.push(v);
        }
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, values, data) {
      if (values.includes('remove')) {
        var _el$classList;
        var combinations = BsGridPaddingProperty.getPaddingClassList();
        (_el$classList = el.classList).remove.apply(_el$classList, (0, _toConsumableArray2["default"])(combinations));
        return;
      }
      for (var v in BsGridPaddingProperty.classList) {
        var _iterator31 = _createForOfIteratorHelper(BsGridPaddingProperty.classList[v]),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var cl = _step31.value;
            if (el.classList.contains(cl)) {
              el.classList.remove(cl);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
      }
      if (values.length > 0) {
        var _iterator32 = _createForOfIteratorHelper(values),
          _step32;
        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _v = _step32.value;
            var _iterator33 = _createForOfIteratorHelper(BsGridPaddingProperty.classList[_v]),
              _step33;
            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var _cl = _step33.value;
                el.classList.add(_cl);
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
      }
    }
  }], [{
    key: "getPaddingClassList",
    value: function getPaddingClassList() {
      var result = [];
      var _iterator34 = _createForOfIteratorHelper(BsGridPaddingProperty.classList['remove']),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var item = _step34.value;
          for (var i = 0; i < 6; i++) {
            result.push(item + i);
            result.push("".concat(item, "md-").concat(i));
            result.push("".concat(item, "lg-").concat(i));
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
      return result;
    }
  }]);
  return BsGridPaddingProperty;
}(HTMLProperty);
exports.BsGridPaddingProperty = BsGridPaddingProperty;
BsGridPaddingProperty.classList = {
  top: ['pt-3', 'pt-md-4', 'pt-lg-5'],
  bottom: ['pb-3', 'pb-md-4', 'pb-lg-5'],
  lateral: ['px-3', 'px-md-4', 'px-lg-5'],
  remove: ['p-', 'pb-', 'pt-', 'pl-', 'pr-', 'px-', 'py-']
};
var BsBtnOutlineProperty = function (_HTMLProperty47) {
  (0, _inherits2["default"])(BsBtnOutlineProperty, _HTMLProperty47);
  var _super47 = _createSuper(BsBtnOutlineProperty);
  function BsBtnOutlineProperty() {
    var _this40;
    (0, _classCallCheck2["default"])(this, BsBtnOutlineProperty);
    _this40 = _super47.call(this, 'btnoutline', _RecitEditor.i18n.get_string('btnoutline'));
    _this40.options = [{
      text: _RecitEditor.i18n.get_string('yes'),
      value: true
    }, {
      text: _RecitEditor.i18n.get_string('no'),
      value: false
    }];
    _this40.input = new RadioButton(_this40.options, _this40.onChange.bind((0, _assertThisInitialized2["default"])(_this40)));
    return _this40;
  }
  (0, _createClass2["default"])(BsBtnOutlineProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var _iterator35 = _createForOfIteratorHelper(el.classList),
        _step35;
      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var c = _step35.value;
          if (c.includes('btn-outline')) {
            return true;
          }
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
      return false;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (value == false) {
        var _iterator36 = _createForOfIteratorHelper(el.classList),
          _step36;
        try {
          for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
            var c = _step36.value;
            if (c.includes('btn-outline')) {
              var classN = c.replace('outline-', '');
              el.classList.remove(c);
              el.classList.add(classN);
            }
          }
        } catch (err) {
          _iterator36.e(err);
        } finally {
          _iterator36.f();
        }
      } else {
        var _iterator37 = _createForOfIteratorHelper(el.classList),
          _step37;
        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            var _c = _step37.value;
            if (_c.includes('btn-')) {
              var _classN = _c.replace('btn-', 'btn-outline-');
              el.classList.remove(_c);
              el.classList.add(_classN);
            }
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }
      }
    }
  }]);
  return BsBtnOutlineProperty;
}(HTMLProperty);
exports.BsBtnOutlineProperty = BsBtnOutlineProperty;
var BsBtnSizeProperty = function (_HTMLProperty48) {
  (0, _inherits2["default"])(BsBtnSizeProperty, _HTMLProperty48);
  var _super48 = _createSuper(BsBtnSizeProperty);
  function BsBtnSizeProperty() {
    var _this41;
    (0, _classCallCheck2["default"])(this, BsBtnSizeProperty);
    _this41 = _super48.call(this, 'btnsize', _RecitEditor.i18n.get_string('size'));
    _this41.options = [{
      text: _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faRemoveFormat
      }),
      value: ""
    }, {
      text: _RecitEditor.i18n.get_string('big'),
      value: "btn-lg"
    }, {
      text: _RecitEditor.i18n.get_string('small'),
      value: "btn-sm"
    }];
    _this41.input = new RadioButton(_this41.options, _this41.onChange.bind((0, _assertThisInitialized2["default"])(_this41)));
    return _this41;
  }
  (0, _createClass2["default"])(BsBtnSizeProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      var result = "";
      var classList = (0, _toConsumableArray2["default"])(el.classList);
      var _iterator38 = _createForOfIteratorHelper(data.input.options),
        _step38;
      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var item = _step38.value;
          if (classList.includes(item.value)) {
            result = item.value;
            break;
          }
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
      return result;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      var _iterator39 = _createForOfIteratorHelper(data.input.options),
        _step39;
      try {
        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
          var item = _step39.value;
          if (item.value.length > 0) {
            el.classList.remove(item.value);
          }
        }
      } catch (err) {
        _iterator39.e(err);
      } finally {
        _iterator39.f();
      }
      if (value.length > 0) {
        el.classList.add(value);
      }
    }
  }]);
  return BsBtnSizeProperty;
}(HTMLProperty);
exports.BsBtnSizeProperty = BsBtnSizeProperty;
var BsTableActionProperty = function (_HTMLProperty49) {
  (0, _inherits2["default"])(BsTableActionProperty, _HTMLProperty49);
  var _super49 = _createSuper(BsTableActionProperty);
  function BsTableActionProperty() {
    var _this42;
    (0, _classCallCheck2["default"])(this, BsTableActionProperty);
    _this42 = _super49.call(this, 'tableaction', _RecitEditor.i18n.get_string('actions'));
    _this42.options = [{
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus
      }), " Colonne"),
      onClick: function onClick(el) {
        var table = el;
        var result = _RecitEditor.UtilsHTML.tableAddCol(table);
        return {
          action: 'insert',
          nodes: result
        };
      }
    }, {
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus
      }), " Ligne"),
      onClick: function onClick(el) {
        var result = {
          action: '',
          nodes: null
        };
        var table = el;
        result.nodes = _RecitEditor.UtilsHTML.tableAddRow(table);
        if (result.nodes.length > 0) {
          result.action = 'insert';
        }
        return result;
      }
    }];
    _this42.input = new ButtonGroup(_this42.options);
    return _this42;
  }
  (0, _createClass2["default"])(BsTableActionProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el;
    }
  }]);
  return BsTableActionProperty;
}(HTMLProperty);
exports.BsTableActionProperty = BsTableActionProperty;
var BsTableBorderProperty = function (_HTMLProperty50) {
  (0, _inherits2["default"])(BsTableBorderProperty, _HTMLProperty50);
  var _super50 = _createSuper(BsTableBorderProperty);
  function BsTableBorderProperty() {
    var _this43;
    (0, _classCallCheck2["default"])(this, BsTableBorderProperty);
    _this43 = _super50.call(this, 'tableborder', _RecitEditor.i18n.get_string('border'));
    _this43.options = [{
      text: _RecitEditor.i18n.get_string('no'),
      value: 0
    }, {
      text: _RecitEditor.i18n.get_string('yes'),
      value: 1
    }];
    _this43.input = new RadioButton(_this43.options, _this43.onChange.bind((0, _assertThisInitialized2["default"])(_this43)));
    return _this43;
  }
  (0, _createClass2["default"])(BsTableBorderProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.border ? 1 : 0;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (value == 1) {
        el.border = true;
      } else {
        el.removeAttribute('border');
      }
    }
  }]);
  return BsTableBorderProperty;
}(HTMLProperty);
exports.BsTableBorderProperty = BsTableBorderProperty;
var BsTableStripedProperty = function (_HTMLProperty51) {
  (0, _inherits2["default"])(BsTableStripedProperty, _HTMLProperty51);
  var _super51 = _createSuper(BsTableStripedProperty);
  function BsTableStripedProperty() {
    var _this44;
    (0, _classCallCheck2["default"])(this, BsTableStripedProperty);
    _this44 = _super51.call(this, 'tablestriped', _RecitEditor.i18n.get_string('striped'));
    _this44.options = [{
      text: _RecitEditor.i18n.get_string('no'),
      value: 0
    }, {
      text: _RecitEditor.i18n.get_string('yes'),
      value: 1
    }];
    _this44.input = new RadioButton(_this44.options, _this44.onChange.bind((0, _assertThisInitialized2["default"])(_this44)));
    return _this44;
  }
  (0, _createClass2["default"])(BsTableStripedProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el.classList.contains('table-striped') ? 1 : 0;
    }
  }, {
    key: "onChange",
    value: function onChange(el, value, data) {
      if (value == 1) {
        el.classList.add('table-striped');
      } else {
        el.classList.remove('table-striped');
      }
    }
  }]);
  return BsTableStripedProperty;
}(HTMLProperty);
exports.BsTableStripedProperty = BsTableStripedProperty;
var BsTableCellActionProperty = function (_HTMLProperty52) {
  (0, _inherits2["default"])(BsTableCellActionProperty, _HTMLProperty52);
  var _super52 = _createSuper(BsTableCellActionProperty);
  function BsTableCellActionProperty() {
    var _this45;
    (0, _classCallCheck2["default"])(this, BsTableCellActionProperty);
    _this45 = _super52.call(this, 'tablecellaction', _RecitEditor.i18n.get_string('actions'));
    _this45.options = [{
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faMinus
      }), " ", _RecitEditor.i18n.get_string('line')),
      onClick: function onClick(el) {
        var table = el.parentElement.parentElement;
        var _iterator40 = _createForOfIteratorHelper(table.rows),
          _step40;
        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            var row = _step40.value;
            try {
              el.deleted = true;
              row.deleteCell(el.cellIndex);
            } catch (ex) {
              console.log(ex);
            }
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
        return {
          action: 'delete',
          nodes: null
        };
      }
    }, {
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus
      }), " ", _RecitEditor.i18n.get_string('line')),
      onClick: function onClick(el) {
        var result = {
          action: '',
          nodes: null
        };
        var table = _RecitEditor.UtilsHTML.getTableFromCell(el);
        if (table === null) {
          return result;
        }
        result.nodes = _RecitEditor.UtilsHTML.tableAddRow(table);
        if (result.nodes.length > 0) {
          result.action = 'insert';
        }
        return result;
      }
    }, {
      text: _react["default"].createElement("span", null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus
      }), " ", _RecitEditor.i18n.get_string('column')),
      onClick: function onClick(el) {
        var table = _RecitEditor.UtilsHTML.getTableFromCell(el);
        var result = _RecitEditor.UtilsHTML.tableAddCol(table);
        return {
          action: 'insert',
          nodes: result
        };
      }
    }];
    _this45.input = new ButtonGroup(_this45.options);
    return _this45;
  }
  (0, _createClass2["default"])(BsTableCellActionProperty, [{
    key: "getValue",
    value: function getValue(el, data) {
      return el;
    }
  }]);
  return BsTableCellActionProperty;
}(HTMLProperty);
exports.BsTableCellActionProperty = BsTableCellActionProperty;
var HTMLPropertiesData = (0, _createClass2["default"])(function HTMLPropertiesData() {
  (0, _classCallCheck2["default"])(this, HTMLPropertiesData);
});
exports.HTMLPropertiesData = HTMLPropertiesData;
HTMLPropertiesData.propsAssignmentFacade = {
  general: {
    min: ['bs-general'],
    all: ['bs-general', 'htmlattributes']
  },
  text: {
    min: ['bs-text'],
    all: ['bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'font', 'layout', 'background', 'htmlattributes']
  },
  image: {
    min: ['source', 'alt'],
    all: ['source', 'alt', 'bs-general', 'bs-spacing', 'bs-border', 'layout', 'htmlattributes']
  },
  video: {
    min: ['videosource'],
    all: ['bs-general', 'bs-spacing', 'bs-border', 'videosource', 'layout', 'background', 'htmlattributes']
  },
  icon: {
    min: ['icon'],
    all: ['icon', 'appearance', 'htmlcode', 'htmlattributes', 'bs-background', 'bs-general', 'bs-spacing', 'bs-border']
  },
  link: {
    min: ['link', 'bs-button'],
    all: ['bs-general', 'bs-button', 'bs-spacing', 'bs-border', 'font', 'layout', 'link', 'htmlattributes']
  },
  buttons: {
    min: ['link', 'bs-button'],
    all: ['bs-general', 'bs-button', 'bs-spacing', 'bs-border', 'font', 'layout', 'link', 'htmlattributes']
  },
  containers: {
    min: ['bs-background', 'bs-border'],
    all: ['bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
  },
  accordion: {
    min: ['accordion'],
    all: ['accordion', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
  }
};