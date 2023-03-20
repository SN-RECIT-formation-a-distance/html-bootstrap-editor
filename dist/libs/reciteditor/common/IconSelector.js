"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSelector = void 0;
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var IconSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(IconSelector, _Component);
  var _super = _createSuper(IconSelector);
  function IconSelector(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, IconSelector);
    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSearch = _this.onSearch.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleShow = _this.handleShow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClose = _this.handleClose.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      modal: false,
      search: '',
      collapsed: {}
    };
    _this.config = {};
    var settings = _RecitEditor.IWrapper.getSettings();
    if (settings.iconclass) {
      var config = settings.iconclass;
      config = config.split(',');
      var _iterator = _createForOfIteratorHelper(config),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          var data = c.split('=');
          _this.config[data[0]] = data[1];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    _this.cssFiles = _RecitEditor.IWrapper.getThemeCssRules().url;
    _this.cssRules = _RecitEditor.$glVars.cssRules;
    _this.buildIconList();
    _this.icons = {};
    return _this;
  }
  (0, _createClass2["default"])(IconSelector, [{
    key: "buildIconList",
    value: function buildIconList() {
      this.icons = {};
      for (var name in this.config) {
        this.icons[name] = [];
      }
      var _iterator2 = _createForOfIteratorHelper(this.cssRules),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var c = _step2.value;
          if (c.cssText.includes('content:') && c.selectorText && !c.selectorText.includes(',')) {
            for (var _name in this.config) {
              var csscl = this.config[_name].replace('.', '');
              if (c.selectorText.startsWith('.' + csscl)) {
                var css = c.selectorText.replace('::before', '');
                css = css.replace(':before', '').substr(1);
                var cssclass = css;
                if (csscl == 'fa-') cssclass = 'fa ' + css;
                this.icons[_name].push({
                  name: css.replace(csscl, ''),
                  css: cssclass
                });
              }
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.getIconTable();
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        key: "1",
        name: this.props.name,
        size: "sm",
        variant: "primary",
        onClick: this.handleShow,
        disabled: this.props.disabled
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faIcons
      }), " ".concat(this.props.text));
      var modal = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        key: "2",
        dialogClassName: "iconselectormodal",
        show: this.state.modal,
        onHide: this.handleClose
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('selecticon'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "InputText mb-3",
        type: "text",
        value: this.state.search,
        onChange: this.onSearch,
        placeholder: _RecitEditor.i18n.get_string('search')
      }), /*#__PURE__*/_react["default"].createElement(_RecitEditor.IFrame, {
        style: {
          width: '100%',
          height: '70vh',
          border: '0'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: '#fff'
        }
      }, this.cssFiles.map(function (file, k) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: k,
          rel: "stylesheet",
          href: file
        });
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          backgroundColor: '#fff'
        }
      }, items)))));
      return [modal, main];
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        modal: false
      });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        modal: true
      });
    }
  }, {
    key: "onSearch",
    value: function onSearch(event) {
      this.setState({
        search: event.target.value
      });
    }
  }, {
    key: "getIconTable",
    value: function getIconTable() {
      var _this2 = this;
      var icons = this.getIconList(this.state.search);
      var items = [];
      var key = 0;
      var _loop = function _loop(cat) {
        if (icons[cat].length > 0) {
          var catText = cat;
          items.push( /*#__PURE__*/_react["default"].createElement("a", {
            href: "#",
            onClick: function onClick(e) {
              return _this2.onCollapse(e, cat);
            },
            key: key,
            className: "h3"
          }, _this2.state.collapsed[cat] ? /*#__PURE__*/_react["default"].createElement("i", {
            className: "fa fa-angle-right"
          }) : /*#__PURE__*/_react["default"].createElement("i", {
            className: "fa fa-angle-down"
          }), " ", /*#__PURE__*/_react["default"].createElement("span", null, catText)));
          key++;
          var content = [];
          if (!_this2.state.collapsed[cat]) {
            var _iterator3 = _createForOfIteratorHelper(icons[cat]),
              _step3;
            try {
              var _loop2 = function _loop2() {
                var val = _step3.value;
                content.push( /*#__PURE__*/_react["default"].createElement("div", {
                  key: key,
                  style: {
                    width: '70px',
                    height: '62px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontSize: '10px',
                    margin: '20px',
                    marginBottom: '30px'
                  },
                  onClick: function onClick() {
                    return _this2.onChange(val.css);
                  }
                }, /*#__PURE__*/_react["default"].createElement("i", {
                  className: val.css,
                  style: {
                    fontSize: '40px'
                  }
                }), /*#__PURE__*/_react["default"].createElement("br", null), val.name));
                key++;
              };
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          items.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: key,
            className: "d-flex flex-wrap mb-3"
          }, content));
          key++;
        }
      };
      for (var cat in icons) {
        _loop(cat);
      }
      return items;
    }
  }, {
    key: "onCollapse",
    value: function onCollapse(e, cat) {
      e.preventDefault();
      var collapse = this.state.collapsed;
      collapse[cat] = !collapse[cat];
      this.setState({
        collapsed: collapse
      });
    }
  }, {
    key: "onChange",
    value: function onChange(val) {
      var eventData = {
        target: {
          value: val
        }
      };
      this.props.onChange(eventData);
      this.handleClose();
    }
  }, {
    key: "getIconList",
    value: function getIconList(search) {
      var iconList = [];
      for (var cat in this.icons) {
        iconList[cat] = [];
        var _iterator4 = _createForOfIteratorHelper(this.icons[cat]),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var val = _step4.value;
            if (!search || val.css.includes(search)) {
              iconList[cat].push({
                name: val.name,
                css: val.css
              });
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      return iconList;
    }
  }]);
  return IconSelector;
}(_react.Component);
exports.IconSelector = IconSelector;
IconSelector.defaultProps = {
  name: '',
  text: '',
  value: '',
  lib: 'fa',
  disabled: false
};