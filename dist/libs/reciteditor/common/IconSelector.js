"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSelector = void 0;
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var IconSelector = exports.IconSelector = function (_Component) {
  function IconSelector(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, IconSelector);
    _this = _callSuper(this, IconSelector, [props]);
    _this.onChange = _this.onChange.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.state = {
      modal: false,
      search: '',
      collapsed: {},
      dataProvider: IconSelector.IconsLibraries,
      tab: '0'
    };
    _this.settings = {
      cssFiles: _RecitEditor.IWrapper.getThemeCssRules().urlList.concat(_RecitEditor.IWrapper.getAdditionalHTMLHead().css),
      enabledIconLibraries: _RecitEditor.IWrapper.getSettings().iconclass
    };
    return _this;
  }
  (0, _inherits2["default"])(IconSelector, _Component);
  return (0, _createClass2["default"])(IconSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "buildIconList",
    value: function buildIconList() {
      var regex = new RegExp(/(\.fa\-)+[\.\w\-\,]+/, "g");
      var css = "";
      var match = css.match(regex);
      var _iterator = _createForOfIteratorHelper(match),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          console.log("{name: \"".concat(item, "\", cssRule: \"").concat(item, "\"},"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "buildFontAwesome6IconList",
    value: function buildFontAwesome6IconList() {
      var regex = new RegExp(/(\.fa\-)+[\.\w\-\,]+{\-\-[a-z0-9":\\-]+}*/, "g");
      var match = _RecitEditor.$glVars.cssFilesContent.match(regex);
      var _iterator2 = _createForOfIteratorHelper(match),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          item = item.match(/(fa\-)+[\w\-]+/g);
          if (item.length === 0) {
            continue;
          }
          item = item[0];
          console.log("{name: \"".concat(item, "\", cssRule: \"fa-solid ").concat(item, "\"},"));
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
      var _this2 = this;
      var that = this;
      var tabs = _react["default"].createElement(_reactBootstrap.Tabs, {
        activeKey: this.state.tab,
        id: "iconLibsTab",
        onSelect: function onSelect(tab) {
          _this2.setState({
            tab: tab
          });
        }
      }, this.settings.enabledIconLibraries.map(function (enabledLib, index1) {
        var item1 = null;
        var _iterator3 = _createForOfIteratorHelper(that.state.dataProvider),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var lib = _step3.value;
            if (lib.id === enabledLib) {
              item1 = lib;
              break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        if (item1 === null) {
          return null;
        }
        var tab = _react["default"].createElement(_reactBootstrap.Tab, {
          style: {
            maxHeight: 'calc(100% - 45px)',
            width: "100%",
            scrollbarWidth: "thin",
            overflowY: "auto"
          },
          key: index1,
          eventKey: index1.toString(),
          title: item1.name
        }, _react["default"].createElement("div", {
          className: "d-flex flex-wrap"
        }, item1.iconList.map(function (item2, index2) {
          if (_this2.state.search.length > 0) {
            if (item2.name.search(_this2.state.search) === -1) {
              return null;
            }
          }
          var icon = _react["default"].createElement("div", {
            key: index2,
            className: "icon-tile",
            onClick: function onClick() {
              return _this2.onChange(item2.cssRule);
            }
          }, _react["default"].createElement("i", {
            className: item2.cssRule
          }), item2.name);
          return icon;
        })));
        return tab;
      }));
      var main = _react["default"].createElement(_reactBootstrap.Button, {
        key: "1",
        name: this.props.name,
        size: "sm",
        variant: "primary",
        onClick: this.handleShow,
        disabled: this.props.disabled
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faIcons
      }), " ".concat(this.props.text));
      var modal = _react["default"].createElement(_reactBootstrap.Modal, {
        key: "2",
        dialogClassName: "iconselectormodal",
        show: this.state.modal,
        onHide: this.handleClose
      }, _react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, _react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('selecticon'))), _react["default"].createElement(_reactBootstrap.Modal.Body, null, _react["default"].createElement(_reactBootstrap.FormControl, {
        className: "InputText mb-3",
        type: "text",
        value: this.state.search,
        onChange: this.onSearch,
        placeholder: _RecitEditor.i18n.get_string('search')
      }), _react["default"].createElement(_RecitEditor.IFrame, {
        style: {
          border: '0',
          width: "100%",
          height: "60vh"
        },
        head: this.settings.cssFiles
      }, _react["default"].createElement("style", null, "body{background-color: #FFF!important;} \n                            .icon-tile{width: 60px; text-align: center; cursor: pointer; font-size: 10px; margin: 1rem; }\n                            .icon-tile i{font-size: 40px; margin-bottom: 1rem; display: block;}"), tabs)));
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
  }]);
}(_react.Component);
IconSelector.defaultProps = {
  name: '',
  text: '',
  value: '',
  onChange: null
};
IconSelector.IconsLibraries = [{
  id: 'fontawesome4',
  name: 'Font Awesome 4',
  iconList: [{
    name: "glass",
    cssRule: "fa fa-glass"
  }, {
    name: "music",
    cssRule: "fa fa-music"
  }, {
    name: "search",
    cssRule: "fa fa-search"
  }, {
    name: "envelope-o",
    cssRule: "fa fa-envelope-o"
  }, {
    name: "heart",
    cssRule: "fa fa-heart"
  }, {
    name: "star",
    cssRule: "fa fa-star"
  }, {
    name: "star-o",
    cssRule: "fa fa-star-o"
  }, {
    name: "user",
    cssRule: "fa fa-user"
  }, {
    name: "film",
    cssRule: "fa fa-film"
  }, {
    name: "th-large",
    cssRule: "fa fa-th-large"
  }, {
    name: "th",
    cssRule: "fa fa-th"
  }, {
    name: "th-list",
    cssRule: "fa fa-th-list"
  }, {
    name: "check",
    cssRule: "fa fa-check"
  }, {
    name: "remove",
    cssRule: "fa fa-remove"
  }, {
    name: "close",
    cssRule: "fa fa-close"
  }, {
    name: "times",
    cssRule: "fa fa-times"
  }, {
    name: "search-plus",
    cssRule: "fa fa-search-plus"
  }, {
    name: "search-minus",
    cssRule: "fa fa-search-minus"
  }, {
    name: "power-off",
    cssRule: "fa fa-power-off"
  }, {
    name: "signal",
    cssRule: "fa fa-signal"
  }, {
    name: "gear",
    cssRule: "fa fa-gear"
  }, {
    name: "cog",
    cssRule: "fa fa-cog"
  }, {
    name: "trash-o",
    cssRule: "fa fa-trash-o"
  }, {
    name: "home",
    cssRule: "fa fa-home"
  }, {
    name: "file-o",
    cssRule: "fa fa-file-o"
  }, {
    name: "clock-o",
    cssRule: "fa fa-clock-o"
  }, {
    name: "road",
    cssRule: "fa fa-road"
  }, {
    name: "download",
    cssRule: "fa fa-download"
  }, {
    name: "arrow-circle-o-down",
    cssRule: "fa fa-arrow-circle-o-down"
  }, {
    name: "arrow-circle-o-up",
    cssRule: "fa fa-arrow-circle-o-up"
  }, {
    name: "inbox",
    cssRule: "fa fa-inbox"
  }, {
    name: "play-circle-o",
    cssRule: "fa fa-play-circle-o"
  }, {
    name: "rotate-right",
    cssRule: "fa fa-rotate-right"
  }, {
    name: "repeat",
    cssRule: "fa fa-repeat"
  }, {
    name: "refresh",
    cssRule: "fa fa-refresh"
  }, {
    name: "list-alt",
    cssRule: "fa fa-list-alt"
  }, {
    name: "lock",
    cssRule: "fa fa-lock"
  }, {
    name: "flag",
    cssRule: "fa fa-flag"
  }, {
    name: "headphones",
    cssRule: "fa fa-headphones"
  }, {
    name: "volume-off",
    cssRule: "fa fa-volume-off"
  }, {
    name: "volume-down",
    cssRule: "fa fa-volume-down"
  }, {
    name: "volume-up",
    cssRule: "fa fa-volume-up"
  }, {
    name: "qrcode",
    cssRule: "fa fa-qrcode"
  }, {
    name: "barcode",
    cssRule: "fa fa-barcode"
  }, {
    name: "tag",
    cssRule: "fa fa-tag"
  }, {
    name: "tags",
    cssRule: "fa fa-tags"
  }, {
    name: "book",
    cssRule: "fa fa-book"
  }, {
    name: "bookmark",
    cssRule: "fa fa-bookmark"
  }, {
    name: "print",
    cssRule: "fa fa-print"
  }, {
    name: "camera",
    cssRule: "fa fa-camera"
  }, {
    name: "font",
    cssRule: "fa fa-font"
  }, {
    name: "bold",
    cssRule: "fa fa-bold"
  }, {
    name: "italic",
    cssRule: "fa fa-italic"
  }, {
    name: "text-height",
    cssRule: "fa fa-text-height"
  }, {
    name: "text-width",
    cssRule: "fa fa-text-width"
  }, {
    name: "align-left",
    cssRule: "fa fa-align-left"
  }, {
    name: "align-center",
    cssRule: "fa fa-align-center"
  }, {
    name: "align-right",
    cssRule: "fa fa-align-right"
  }, {
    name: "align-justify",
    cssRule: "fa fa-align-justify"
  }, {
    name: "list",
    cssRule: "fa fa-list"
  }, {
    name: "dedent",
    cssRule: "fa fa-dedent"
  }, {
    name: "outdent",
    cssRule: "fa fa-outdent"
  }, {
    name: "indent",
    cssRule: "fa fa-indent"
  }, {
    name: "video-camera",
    cssRule: "fa fa-video-camera"
  }, {
    name: "photo",
    cssRule: "fa fa-photo"
  }, {
    name: "image",
    cssRule: "fa fa-image"
  }, {
    name: "picture-o",
    cssRule: "fa fa-picture-o"
  }, {
    name: "pencil",
    cssRule: "fa fa-pencil"
  }, {
    name: "map-marker",
    cssRule: "fa fa-map-marker"
  }, {
    name: "adjust",
    cssRule: "fa fa-adjust"
  }, {
    name: "tint",
    cssRule: "fa fa-tint"
  }, {
    name: "edit",
    cssRule: "fa fa-edit"
  }, {
    name: "pencil-square-o",
    cssRule: "fa fa-pencil-square-o"
  }, {
    name: "share-square-o",
    cssRule: "fa fa-share-square-o"
  }, {
    name: "check-square-o",
    cssRule: "fa fa-check-square-o"
  }, {
    name: "arrows",
    cssRule: "fa fa-arrows"
  }, {
    name: "step-backward",
    cssRule: "fa fa-step-backward"
  }, {
    name: "fast-backward",
    cssRule: "fa fa-fast-backward"
  }, {
    name: "backward",
    cssRule: "fa fa-backward"
  }, {
    name: "play",
    cssRule: "fa fa-play"
  }, {
    name: "pause",
    cssRule: "fa fa-pause"
  }, {
    name: "stop",
    cssRule: "fa fa-stop"
  }, {
    name: "forward",
    cssRule: "fa fa-forward"
  }, {
    name: "fast-forward",
    cssRule: "fa fa-fast-forward"
  }, {
    name: "step-forward",
    cssRule: "fa fa-step-forward"
  }, {
    name: "eject",
    cssRule: "fa fa-eject"
  }, {
    name: "chevron-left",
    cssRule: "fa fa-chevron-left"
  }, {
    name: "chevron-right",
    cssRule: "fa fa-chevron-right"
  }, {
    name: "plus-circle",
    cssRule: "fa fa-plus-circle"
  }, {
    name: "minus-circle",
    cssRule: "fa fa-minus-circle"
  }, {
    name: "times-circle",
    cssRule: "fa fa-times-circle"
  }, {
    name: "check-circle",
    cssRule: "fa fa-check-circle"
  }, {
    name: "question-circle",
    cssRule: "fa fa-question-circle"
  }, {
    name: "info-circle",
    cssRule: "fa fa-info-circle"
  }, {
    name: "crosshairs",
    cssRule: "fa fa-crosshairs"
  }, {
    name: "times-circle-o",
    cssRule: "fa fa-times-circle-o"
  }, {
    name: "check-circle-o",
    cssRule: "fa fa-check-circle-o"
  }, {
    name: "ban",
    cssRule: "fa fa-ban"
  }, {
    name: "arrow-left",
    cssRule: "fa fa-arrow-left"
  }, {
    name: "arrow-right",
    cssRule: "fa fa-arrow-right"
  }, {
    name: "arrow-up",
    cssRule: "fa fa-arrow-up"
  }, {
    name: "arrow-down",
    cssRule: "fa fa-arrow-down"
  }, {
    name: "mail-forward",
    cssRule: "fa fa-mail-forward"
  }, {
    name: "share",
    cssRule: "fa fa-share"
  }, {
    name: "expand",
    cssRule: "fa fa-expand"
  }, {
    name: "compress",
    cssRule: "fa fa-compress"
  }, {
    name: "plus",
    cssRule: "fa fa-plus"
  }, {
    name: "minus",
    cssRule: "fa fa-minus"
  }, {
    name: "asterisk",
    cssRule: "fa fa-asterisk"
  }, {
    name: "exclamation-circle",
    cssRule: "fa fa-exclamation-circle"
  }, {
    name: "gift",
    cssRule: "fa fa-gift"
  }, {
    name: "leaf",
    cssRule: "fa fa-leaf"
  }, {
    name: "fire",
    cssRule: "fa fa-fire"
  }, {
    name: "eye",
    cssRule: "fa fa-eye"
  }, {
    name: "eye-slash",
    cssRule: "fa fa-eye-slash"
  }, {
    name: "warning",
    cssRule: "fa fa-warning"
  }, {
    name: "exclamation-triangle",
    cssRule: "fa fa-exclamation-triangle"
  }, {
    name: "plane",
    cssRule: "fa fa-plane"
  }, {
    name: "calendar",
    cssRule: "fa fa-calendar"
  }, {
    name: "random",
    cssRule: "fa fa-random"
  }, {
    name: "comment",
    cssRule: "fa fa-comment"
  }, {
    name: "magnet",
    cssRule: "fa fa-magnet"
  }, {
    name: "chevron-up",
    cssRule: "fa fa-chevron-up"
  }, {
    name: "chevron-down",
    cssRule: "fa fa-chevron-down"
  }, {
    name: "retweet",
    cssRule: "fa fa-retweet"
  }, {
    name: "shopping-cart",
    cssRule: "fa fa-shopping-cart"
  }, {
    name: "folder",
    cssRule: "fa fa-folder"
  }, {
    name: "folder-open",
    cssRule: "fa fa-folder-open"
  }, {
    name: "arrows-v",
    cssRule: "fa fa-arrows-v"
  }, {
    name: "arrows-h",
    cssRule: "fa fa-arrows-h"
  }, {
    name: "bar-chart-o",
    cssRule: "fa fa-bar-chart-o"
  }, {
    name: "bar-chart",
    cssRule: "fa fa-bar-chart"
  }, {
    name: "twitter-square",
    cssRule: "fa fa-twitter-square"
  }, {
    name: "facebook-square",
    cssRule: "fa fa-facebook-square"
  }, {
    name: "camera-retro",
    cssRule: "fa fa-camera-retro"
  }, {
    name: "key",
    cssRule: "fa fa-key"
  }, {
    name: "gears",
    cssRule: "fa fa-gears"
  }, {
    name: "cogs",
    cssRule: "fa fa-cogs"
  }, {
    name: "comments",
    cssRule: "fa fa-comments"
  }, {
    name: "thumbs-o-up",
    cssRule: "fa fa-thumbs-o-up"
  }, {
    name: "thumbs-o-down",
    cssRule: "fa fa-thumbs-o-down"
  }, {
    name: "star-half",
    cssRule: "fa fa-star-half"
  }, {
    name: "heart-o",
    cssRule: "fa fa-heart-o"
  }, {
    name: "sign-out",
    cssRule: "fa fa-sign-out"
  }, {
    name: "linkedin-square",
    cssRule: "fa fa-linkedin-square"
  }, {
    name: "thumb-tack",
    cssRule: "fa fa-thumb-tack"
  }, {
    name: "external-link",
    cssRule: "fa fa-external-link"
  }, {
    name: "sign-in",
    cssRule: "fa fa-sign-in"
  }, {
    name: "trophy",
    cssRule: "fa fa-trophy"
  }, {
    name: "github-square",
    cssRule: "fa fa-github-square"
  }, {
    name: "upload",
    cssRule: "fa fa-upload"
  }, {
    name: "lemon-o",
    cssRule: "fa fa-lemon-o"
  }, {
    name: "phone",
    cssRule: "fa fa-phone"
  }, {
    name: "square-o",
    cssRule: "fa fa-square-o"
  }, {
    name: "bookmark-o",
    cssRule: "fa fa-bookmark-o"
  }, {
    name: "phone-square",
    cssRule: "fa fa-phone-square"
  }, {
    name: "twitter",
    cssRule: "fa fa-twitter"
  }, {
    name: "facebook-f",
    cssRule: "fa fa-facebook-f"
  }, {
    name: "facebook",
    cssRule: "fa fa-facebook"
  }, {
    name: "github",
    cssRule: "fa fa-github"
  }, {
    name: "unlock",
    cssRule: "fa fa-unlock"
  }, {
    name: "credit-card",
    cssRule: "fa fa-credit-card"
  }, {
    name: "feed",
    cssRule: "fa fa-feed"
  }, {
    name: "rss",
    cssRule: "fa fa-rss"
  }, {
    name: "hdd-o",
    cssRule: "fa fa-hdd-o"
  }, {
    name: "bullhorn",
    cssRule: "fa fa-bullhorn"
  }, {
    name: "bell",
    cssRule: "fa fa-bell"
  }, {
    name: "certificate",
    cssRule: "fa fa-certificate"
  }, {
    name: "hand-o-right",
    cssRule: "fa fa-hand-o-right"
  }, {
    name: "hand-o-left",
    cssRule: "fa fa-hand-o-left"
  }, {
    name: "hand-o-up",
    cssRule: "fa fa-hand-o-up"
  }, {
    name: "hand-o-down",
    cssRule: "fa fa-hand-o-down"
  }, {
    name: "arrow-circle-left",
    cssRule: "fa fa-arrow-circle-left"
  }, {
    name: "arrow-circle-right",
    cssRule: "fa fa-arrow-circle-right"
  }, {
    name: "arrow-circle-up",
    cssRule: "fa fa-arrow-circle-up"
  }, {
    name: "arrow-circle-down",
    cssRule: "fa fa-arrow-circle-down"
  }, {
    name: "globe",
    cssRule: "fa fa-globe"
  }, {
    name: "wrench",
    cssRule: "fa fa-wrench"
  }, {
    name: "tasks",
    cssRule: "fa fa-tasks"
  }, {
    name: "filter",
    cssRule: "fa fa-filter"
  }, {
    name: "briefcase",
    cssRule: "fa fa-briefcase"
  }, {
    name: "arrows-alt",
    cssRule: "fa fa-arrows-alt"
  }, {
    name: "group",
    cssRule: "fa fa-group"
  }, {
    name: "users",
    cssRule: "fa fa-users"
  }, {
    name: "chain",
    cssRule: "fa fa-chain"
  }, {
    name: "link",
    cssRule: "fa fa-link"
  }, {
    name: "cloud",
    cssRule: "fa fa-cloud"
  }, {
    name: "flask",
    cssRule: "fa fa-flask"
  }, {
    name: "cut",
    cssRule: "fa fa-cut"
  }, {
    name: "scissors",
    cssRule: "fa fa-scissors"
  }, {
    name: "copy",
    cssRule: "fa fa-copy"
  }, {
    name: "files-o",
    cssRule: "fa fa-files-o"
  }, {
    name: "paperclip",
    cssRule: "fa fa-paperclip"
  }, {
    name: "save",
    cssRule: "fa fa-save"
  }, {
    name: "floppy-o",
    cssRule: "fa fa-floppy-o"
  }, {
    name: "square",
    cssRule: "fa fa-square"
  }, {
    name: "navicon",
    cssRule: "fa fa-navicon"
  }, {
    name: "reorder",
    cssRule: "fa fa-reorder"
  }, {
    name: "bars",
    cssRule: "fa fa-bars"
  }, {
    name: "list-ul",
    cssRule: "fa fa-list-ul"
  }, {
    name: "list-ol",
    cssRule: "fa fa-list-ol"
  }, {
    name: "strikethrough",
    cssRule: "fa fa-strikethrough"
  }, {
    name: "underline",
    cssRule: "fa fa-underline"
  }, {
    name: "table",
    cssRule: "fa fa-table"
  }, {
    name: "magic",
    cssRule: "fa fa-magic"
  }, {
    name: "truck",
    cssRule: "fa fa-truck"
  }, {
    name: "pinterest",
    cssRule: "fa fa-pinterest"
  }, {
    name: "pinterest-square",
    cssRule: "fa fa-pinterest-square"
  }, {
    name: "google-plus-square",
    cssRule: "fa fa-google-plus-square"
  }, {
    name: "google-plus",
    cssRule: "fa fa-google-plus"
  }, {
    name: "money",
    cssRule: "fa fa-money"
  }, {
    name: "caret-down",
    cssRule: "fa fa-caret-down"
  }, {
    name: "caret-up",
    cssRule: "fa fa-caret-up"
  }, {
    name: "caret-left",
    cssRule: "fa fa-caret-left"
  }, {
    name: "caret-right",
    cssRule: "fa fa-caret-right"
  }, {
    name: "columns",
    cssRule: "fa fa-columns"
  }, {
    name: "unsorted",
    cssRule: "fa fa-unsorted"
  }, {
    name: "sort",
    cssRule: "fa fa-sort"
  }, {
    name: "sort-down",
    cssRule: "fa fa-sort-down"
  }, {
    name: "sort-desc",
    cssRule: "fa fa-sort-desc"
  }, {
    name: "sort-up",
    cssRule: "fa fa-sort-up"
  }, {
    name: "sort-asc",
    cssRule: "fa fa-sort-asc"
  }, {
    name: "envelope",
    cssRule: "fa fa-envelope"
  }, {
    name: "linkedin",
    cssRule: "fa fa-linkedin"
  }, {
    name: "rotate-left",
    cssRule: "fa fa-rotate-left"
  }, {
    name: "undo",
    cssRule: "fa fa-undo"
  }, {
    name: "legal",
    cssRule: "fa fa-legal"
  }, {
    name: "gavel",
    cssRule: "fa fa-gavel"
  }, {
    name: "dashboard",
    cssRule: "fa fa-dashboard"
  }, {
    name: "tachometer",
    cssRule: "fa fa-tachometer"
  }, {
    name: "comment-o",
    cssRule: "fa fa-comment-o"
  }, {
    name: "comments-o",
    cssRule: "fa fa-comments-o"
  }, {
    name: "flash",
    cssRule: "fa fa-flash"
  }, {
    name: "bolt",
    cssRule: "fa fa-bolt"
  }, {
    name: "sitemap",
    cssRule: "fa fa-sitemap"
  }, {
    name: "umbrella",
    cssRule: "fa fa-umbrella"
  }, {
    name: "paste",
    cssRule: "fa fa-paste"
  }, {
    name: "clipboard",
    cssRule: "fa fa-clipboard"
  }, {
    name: "lightbulb-o",
    cssRule: "fa fa-lightbulb-o"
  }, {
    name: "exchange",
    cssRule: "fa fa-exchange"
  }, {
    name: "cloud-download",
    cssRule: "fa fa-cloud-download"
  }, {
    name: "cloud-upload",
    cssRule: "fa fa-cloud-upload"
  }, {
    name: "user-md",
    cssRule: "fa fa-user-md"
  }, {
    name: "stethoscope",
    cssRule: "fa fa-stethoscope"
  }, {
    name: "suitcase",
    cssRule: "fa fa-suitcase"
  }, {
    name: "bell-o",
    cssRule: "fa fa-bell-o"
  }, {
    name: "coffee",
    cssRule: "fa fa-coffee"
  }, {
    name: "cutlery",
    cssRule: "fa fa-cutlery"
  }, {
    name: "file-text-o",
    cssRule: "fa fa-file-text-o"
  }, {
    name: "building-o",
    cssRule: "fa fa-building-o"
  }, {
    name: "hospital-o",
    cssRule: "fa fa-hospital-o"
  }, {
    name: "ambulance",
    cssRule: "fa fa-ambulance"
  }, {
    name: "medkit",
    cssRule: "fa fa-medkit"
  }, {
    name: "fighter-jet",
    cssRule: "fa fa-fighter-jet"
  }, {
    name: "beer",
    cssRule: "fa fa-beer"
  }, {
    name: "h-square",
    cssRule: "fa fa-h-square"
  }, {
    name: "plus-square",
    cssRule: "fa fa-plus-square"
  }, {
    name: "angle-double-left",
    cssRule: "fa fa-angle-double-left"
  }, {
    name: "angle-double-right",
    cssRule: "fa fa-angle-double-right"
  }, {
    name: "angle-double-up",
    cssRule: "fa fa-angle-double-up"
  }, {
    name: "angle-double-down",
    cssRule: "fa fa-angle-double-down"
  }, {
    name: "angle-left",
    cssRule: "fa fa-angle-left"
  }, {
    name: "angle-right",
    cssRule: "fa fa-angle-right"
  }, {
    name: "angle-up",
    cssRule: "fa fa-angle-up"
  }, {
    name: "angle-down",
    cssRule: "fa fa-angle-down"
  }, {
    name: "desktop",
    cssRule: "fa fa-desktop"
  }, {
    name: "laptop",
    cssRule: "fa fa-laptop"
  }, {
    name: "tablet",
    cssRule: "fa fa-tablet"
  }, {
    name: "mobile-phone",
    cssRule: "fa fa-mobile-phone"
  }, {
    name: "mobile",
    cssRule: "fa fa-mobile"
  }, {
    name: "circle-o",
    cssRule: "fa fa-circle-o"
  }, {
    name: "quote-left",
    cssRule: "fa fa-quote-left"
  }, {
    name: "quote-right",
    cssRule: "fa fa-quote-right"
  }, {
    name: "spinner",
    cssRule: "fa fa-spinner"
  }, {
    name: "circle",
    cssRule: "fa fa-circle"
  }, {
    name: "mail-reply",
    cssRule: "fa fa-mail-reply"
  }, {
    name: "reply",
    cssRule: "fa fa-reply"
  }, {
    name: "github-alt",
    cssRule: "fa fa-github-alt"
  }, {
    name: "folder-o",
    cssRule: "fa fa-folder-o"
  }, {
    name: "folder-open-o",
    cssRule: "fa fa-folder-open-o"
  }, {
    name: "smile-o",
    cssRule: "fa fa-smile-o"
  }, {
    name: "frown-o",
    cssRule: "fa fa-frown-o"
  }, {
    name: "meh-o",
    cssRule: "fa fa-meh-o"
  }, {
    name: "gamepad",
    cssRule: "fa fa-gamepad"
  }, {
    name: "keyboard-o",
    cssRule: "fa fa-keyboard-o"
  }, {
    name: "flag-o",
    cssRule: "fa fa-flag-o"
  }, {
    name: "flag-checkered",
    cssRule: "fa fa-flag-checkered"
  }, {
    name: "terminal",
    cssRule: "fa fa-terminal"
  }, {
    name: "code",
    cssRule: "fa fa-code"
  }, {
    name: "mail-reply-all",
    cssRule: "fa fa-mail-reply-all"
  }, {
    name: "reply-all",
    cssRule: "fa fa-reply-all"
  }, {
    name: "star-half-empty",
    cssRule: "fa fa-star-half-empty"
  }, {
    name: "star-half-full",
    cssRule: "fa fa-star-half-full"
  }, {
    name: "star-half-o",
    cssRule: "fa fa-star-half-o"
  }, {
    name: "location-arrow",
    cssRule: "fa fa-location-arrow"
  }, {
    name: "crop",
    cssRule: "fa fa-crop"
  }, {
    name: "code-fork",
    cssRule: "fa fa-code-fork"
  }, {
    name: "unlink",
    cssRule: "fa fa-unlink"
  }, {
    name: "chain-broken",
    cssRule: "fa fa-chain-broken"
  }, {
    name: "question",
    cssRule: "fa fa-question"
  }, {
    name: "info",
    cssRule: "fa fa-info"
  }, {
    name: "exclamation",
    cssRule: "fa fa-exclamation"
  }, {
    name: "superscript",
    cssRule: "fa fa-superscript"
  }, {
    name: "subscript",
    cssRule: "fa fa-subscript"
  }, {
    name: "eraser",
    cssRule: "fa fa-eraser"
  }, {
    name: "puzzle-piece",
    cssRule: "fa fa-puzzle-piece"
  }, {
    name: "microphone",
    cssRule: "fa fa-microphone"
  }, {
    name: "microphone-slash",
    cssRule: "fa fa-microphone-slash"
  }, {
    name: "shield",
    cssRule: "fa fa-shield"
  }, {
    name: "calendar-o",
    cssRule: "fa fa-calendar-o"
  }, {
    name: "fire-extinguisher",
    cssRule: "fa fa-fire-extinguisher"
  }, {
    name: "rocket",
    cssRule: "fa fa-rocket"
  }, {
    name: "maxcdn",
    cssRule: "fa fa-maxcdn"
  }, {
    name: "chevron-circle-left",
    cssRule: "fa fa-chevron-circle-left"
  }, {
    name: "chevron-circle-right",
    cssRule: "fa fa-chevron-circle-right"
  }, {
    name: "chevron-circle-up",
    cssRule: "fa fa-chevron-circle-up"
  }, {
    name: "chevron-circle-down",
    cssRule: "fa fa-chevron-circle-down"
  }, {
    name: "html5",
    cssRule: "fa fa-html5"
  }, {
    name: "css3",
    cssRule: "fa fa-css3"
  }, {
    name: "anchor",
    cssRule: "fa fa-anchor"
  }, {
    name: "unlock-alt",
    cssRule: "fa fa-unlock-alt"
  }, {
    name: "bullseye",
    cssRule: "fa fa-bullseye"
  }, {
    name: "ellipsis-h",
    cssRule: "fa fa-ellipsis-h"
  }, {
    name: "ellipsis-v",
    cssRule: "fa fa-ellipsis-v"
  }, {
    name: "rss-square",
    cssRule: "fa fa-rss-square"
  }, {
    name: "play-circle",
    cssRule: "fa fa-play-circle"
  }, {
    name: "ticket",
    cssRule: "fa fa-ticket"
  }, {
    name: "minus-square",
    cssRule: "fa fa-minus-square"
  }, {
    name: "minus-square-o",
    cssRule: "fa fa-minus-square-o"
  }, {
    name: "level-up",
    cssRule: "fa fa-level-up"
  }, {
    name: "level-down",
    cssRule: "fa fa-level-down"
  }, {
    name: "check-square",
    cssRule: "fa fa-check-square"
  }, {
    name: "pencil-square",
    cssRule: "fa fa-pencil-square"
  }, {
    name: "external-link-square",
    cssRule: "fa fa-external-link-square"
  }, {
    name: "share-square",
    cssRule: "fa fa-share-square"
  }, {
    name: "compass",
    cssRule: "fa fa-compass"
  }, {
    name: "toggle-down",
    cssRule: "fa fa-toggle-down"
  }, {
    name: "caret-square-o-down",
    cssRule: "fa fa-caret-square-o-down"
  }, {
    name: "toggle-up",
    cssRule: "fa fa-toggle-up"
  }, {
    name: "caret-square-o-up",
    cssRule: "fa fa-caret-square-o-up"
  }, {
    name: "toggle-right",
    cssRule: "fa fa-toggle-right"
  }, {
    name: "caret-square-o-right",
    cssRule: "fa fa-caret-square-o-right"
  }, {
    name: "euro",
    cssRule: "fa fa-euro"
  }, {
    name: "eur",
    cssRule: "fa fa-eur"
  }, {
    name: "gbp",
    cssRule: "fa fa-gbp"
  }, {
    name: "dollar",
    cssRule: "fa fa-dollar"
  }, {
    name: "usd",
    cssRule: "fa fa-usd"
  }, {
    name: "rupee",
    cssRule: "fa fa-rupee"
  }, {
    name: "inr",
    cssRule: "fa fa-inr"
  }, {
    name: "cny",
    cssRule: "fa fa-cny"
  }, {
    name: "rmb",
    cssRule: "fa fa-rmb"
  }, {
    name: "yen",
    cssRule: "fa fa-yen"
  }, {
    name: "jpy",
    cssRule: "fa fa-jpy"
  }, {
    name: "ruble",
    cssRule: "fa fa-ruble"
  }, {
    name: "rouble",
    cssRule: "fa fa-rouble"
  }, {
    name: "rub",
    cssRule: "fa fa-rub"
  }, {
    name: "won",
    cssRule: "fa fa-won"
  }, {
    name: "krw",
    cssRule: "fa fa-krw"
  }, {
    name: "bitcoin",
    cssRule: "fa fa-bitcoin"
  }, {
    name: "btc",
    cssRule: "fa fa-btc"
  }, {
    name: "file",
    cssRule: "fa fa-file"
  }, {
    name: "file-text",
    cssRule: "fa fa-file-text"
  }, {
    name: "sort-alpha-asc",
    cssRule: "fa fa-sort-alpha-asc"
  }, {
    name: "sort-alpha-desc",
    cssRule: "fa fa-sort-alpha-desc"
  }, {
    name: "sort-amount-asc",
    cssRule: "fa fa-sort-amount-asc"
  }, {
    name: "sort-amount-desc",
    cssRule: "fa fa-sort-amount-desc"
  }, {
    name: "sort-numeric-asc",
    cssRule: "fa fa-sort-numeric-asc"
  }, {
    name: "sort-numeric-desc",
    cssRule: "fa fa-sort-numeric-desc"
  }, {
    name: "thumbs-up",
    cssRule: "fa fa-thumbs-up"
  }, {
    name: "thumbs-down",
    cssRule: "fa fa-thumbs-down"
  }, {
    name: "youtube-square",
    cssRule: "fa fa-youtube-square"
  }, {
    name: "youtube",
    cssRule: "fa fa-youtube"
  }, {
    name: "xing",
    cssRule: "fa fa-xing"
  }, {
    name: "xing-square",
    cssRule: "fa fa-xing-square"
  }, {
    name: "youtube-play",
    cssRule: "fa fa-youtube-play"
  }, {
    name: "dropbox",
    cssRule: "fa fa-dropbox"
  }, {
    name: "stack-overflow",
    cssRule: "fa fa-stack-overflow"
  }, {
    name: "instagram",
    cssRule: "fa fa-instagram"
  }, {
    name: "flickr",
    cssRule: "fa fa-flickr"
  }, {
    name: "adn",
    cssRule: "fa fa-adn"
  }, {
    name: "bitbucket",
    cssRule: "fa fa-bitbucket"
  }, {
    name: "bitbucket-square",
    cssRule: "fa fa-bitbucket-square"
  }, {
    name: "tumblr",
    cssRule: "fa fa-tumblr"
  }, {
    name: "tumblr-square",
    cssRule: "fa fa-tumblr-square"
  }, {
    name: "long-arrow-down",
    cssRule: "fa fa-long-arrow-down"
  }, {
    name: "long-arrow-up",
    cssRule: "fa fa-long-arrow-up"
  }, {
    name: "long-arrow-left",
    cssRule: "fa fa-long-arrow-left"
  }, {
    name: "long-arrow-right",
    cssRule: "fa fa-long-arrow-right"
  }, {
    name: "apple",
    cssRule: "fa fa-apple"
  }, {
    name: "windows",
    cssRule: "fa fa-windows"
  }, {
    name: "android",
    cssRule: "fa fa-android"
  }, {
    name: "linux",
    cssRule: "fa fa-linux"
  }, {
    name: "dribbble",
    cssRule: "fa fa-dribbble"
  }, {
    name: "skype",
    cssRule: "fa fa-skype"
  }, {
    name: "foursquare",
    cssRule: "fa fa-foursquare"
  }, {
    name: "trello",
    cssRule: "fa fa-trello"
  }, {
    name: "female",
    cssRule: "fa fa-female"
  }, {
    name: "male",
    cssRule: "fa fa-male"
  }, {
    name: "gittip",
    cssRule: "fa fa-gittip"
  }, {
    name: "gratipay",
    cssRule: "fa fa-gratipay"
  }, {
    name: "sun-o",
    cssRule: "fa fa-sun-o"
  }, {
    name: "moon-o",
    cssRule: "fa fa-moon-o"
  }, {
    name: "archive",
    cssRule: "fa fa-archive"
  }, {
    name: "bug",
    cssRule: "fa fa-bug"
  }, {
    name: "vk",
    cssRule: "fa fa-vk"
  }, {
    name: "weibo",
    cssRule: "fa fa-weibo"
  }, {
    name: "renren",
    cssRule: "fa fa-renren"
  }, {
    name: "pagelines",
    cssRule: "fa fa-pagelines"
  }, {
    name: "stack-exchange",
    cssRule: "fa fa-stack-exchange"
  }, {
    name: "arrow-circle-o-right",
    cssRule: "fa fa-arrow-circle-o-right"
  }, {
    name: "arrow-circle-o-left",
    cssRule: "fa fa-arrow-circle-o-left"
  }, {
    name: "toggle-left",
    cssRule: "fa fa-toggle-left"
  }, {
    name: "caret-square-o-left",
    cssRule: "fa fa-caret-square-o-left"
  }, {
    name: "dot-circle-o",
    cssRule: "fa fa-dot-circle-o"
  }, {
    name: "wheelchair",
    cssRule: "fa fa-wheelchair"
  }, {
    name: "vimeo-square",
    cssRule: "fa fa-vimeo-square"
  }, {
    name: "turkish-lira",
    cssRule: "fa fa-turkish-lira"
  }, {
    name: "try",
    cssRule: "fa fa-try"
  }, {
    name: "plus-square-o",
    cssRule: "fa fa-plus-square-o"
  }, {
    name: "space-shuttle",
    cssRule: "fa fa-space-shuttle"
  }, {
    name: "slack",
    cssRule: "fa fa-slack"
  }, {
    name: "envelope-square",
    cssRule: "fa fa-envelope-square"
  }, {
    name: "wordpress",
    cssRule: "fa fa-wordpress"
  }, {
    name: "openid",
    cssRule: "fa fa-openid"
  }, {
    name: "institution",
    cssRule: "fa fa-institution"
  }, {
    name: "bank",
    cssRule: "fa fa-bank"
  }, {
    name: "university",
    cssRule: "fa fa-university"
  }, {
    name: "mortar-board",
    cssRule: "fa fa-mortar-board"
  }, {
    name: "graduation-cap",
    cssRule: "fa fa-graduation-cap"
  }, {
    name: "yahoo",
    cssRule: "fa fa-yahoo"
  }, {
    name: "google",
    cssRule: "fa fa-google"
  }, {
    name: "reddit",
    cssRule: "fa fa-reddit"
  }, {
    name: "reddit-square",
    cssRule: "fa fa-reddit-square"
  }, {
    name: "stumbleupon-circle",
    cssRule: "fa fa-stumbleupon-circle"
  }, {
    name: "stumbleupon",
    cssRule: "fa fa-stumbleupon"
  }, {
    name: "delicious",
    cssRule: "fa fa-delicious"
  }, {
    name: "digg",
    cssRule: "fa fa-digg"
  }, {
    name: "pied-piper-pp",
    cssRule: "fa fa-pied-piper-pp"
  }, {
    name: "pied-piper-alt",
    cssRule: "fa fa-pied-piper-alt"
  }, {
    name: "drupal",
    cssRule: "fa fa-drupal"
  }, {
    name: "joomla",
    cssRule: "fa fa-joomla"
  }, {
    name: "language",
    cssRule: "fa fa-language"
  }, {
    name: "fax",
    cssRule: "fa fa-fax"
  }, {
    name: "building",
    cssRule: "fa fa-building"
  }, {
    name: "child",
    cssRule: "fa fa-child"
  }, {
    name: "paw",
    cssRule: "fa fa-paw"
  }, {
    name: "spoon",
    cssRule: "fa fa-spoon"
  }, {
    name: "cube",
    cssRule: "fa fa-cube"
  }, {
    name: "cubes",
    cssRule: "fa fa-cubes"
  }, {
    name: "behance",
    cssRule: "fa fa-behance"
  }, {
    name: "behance-square",
    cssRule: "fa fa-behance-square"
  }, {
    name: "steam",
    cssRule: "fa fa-steam"
  }, {
    name: "steam-square",
    cssRule: "fa fa-steam-square"
  }, {
    name: "recycle",
    cssRule: "fa fa-recycle"
  }, {
    name: "automobile",
    cssRule: "fa fa-automobile"
  }, {
    name: "car",
    cssRule: "fa fa-car"
  }, {
    name: "cab",
    cssRule: "fa fa-cab"
  }, {
    name: "taxi",
    cssRule: "fa fa-taxi"
  }, {
    name: "tree",
    cssRule: "fa fa-tree"
  }, {
    name: "spotify",
    cssRule: "fa fa-spotify"
  }, {
    name: "deviantart",
    cssRule: "fa fa-deviantart"
  }, {
    name: "soundcloud",
    cssRule: "fa fa-soundcloud"
  }, {
    name: "database",
    cssRule: "fa fa-database"
  }, {
    name: "file-pdf-o",
    cssRule: "fa fa-file-pdf-o"
  }, {
    name: "file-word-o",
    cssRule: "fa fa-file-word-o"
  }, {
    name: "file-excel-o",
    cssRule: "fa fa-file-excel-o"
  }, {
    name: "file-powerpoint-o",
    cssRule: "fa fa-file-powerpoint-o"
  }, {
    name: "file-photo-o",
    cssRule: "fa fa-file-photo-o"
  }, {
    name: "file-picture-o",
    cssRule: "fa fa-file-picture-o"
  }, {
    name: "file-image-o",
    cssRule: "fa fa-file-image-o"
  }, {
    name: "file-zip-o",
    cssRule: "fa fa-file-zip-o"
  }, {
    name: "file-archive-o",
    cssRule: "fa fa-file-archive-o"
  }, {
    name: "file-sound-o",
    cssRule: "fa fa-file-sound-o"
  }, {
    name: "file-audio-o",
    cssRule: "fa fa-file-audio-o"
  }, {
    name: "file-movie-o",
    cssRule: "fa fa-file-movie-o"
  }, {
    name: "file-video-o",
    cssRule: "fa fa-file-video-o"
  }, {
    name: "file-code-o",
    cssRule: "fa fa-file-code-o"
  }, {
    name: "vine",
    cssRule: "fa fa-vine"
  }, {
    name: "codepen",
    cssRule: "fa fa-codepen"
  }, {
    name: "jsfiddle",
    cssRule: "fa fa-jsfiddle"
  }, {
    name: "life-bouy",
    cssRule: "fa fa-life-bouy"
  }, {
    name: "life-buoy",
    cssRule: "fa fa-life-buoy"
  }, {
    name: "life-saver",
    cssRule: "fa fa-life-saver"
  }, {
    name: "support",
    cssRule: "fa fa-support"
  }, {
    name: "life-ring",
    cssRule: "fa fa-life-ring"
  }, {
    name: "circle-o-notch",
    cssRule: "fa fa-circle-o-notch"
  }, {
    name: "ra",
    cssRule: "fa fa-ra"
  }, {
    name: "resistance",
    cssRule: "fa fa-resistance"
  }, {
    name: "rebel",
    cssRule: "fa fa-rebel"
  }, {
    name: "ge",
    cssRule: "fa fa-ge"
  }, {
    name: "empire",
    cssRule: "fa fa-empire"
  }, {
    name: "git-square",
    cssRule: "fa fa-git-square"
  }, {
    name: "git",
    cssRule: "fa fa-git"
  }, {
    name: "y-combinator-square",
    cssRule: "fa fa-y-combinator-square"
  }, {
    name: "yc-square",
    cssRule: "fa fa-yc-square"
  }, {
    name: "hacker-news",
    cssRule: "fa fa-hacker-news"
  }, {
    name: "tencent-weibo",
    cssRule: "fa fa-tencent-weibo"
  }, {
    name: "qq",
    cssRule: "fa fa-qq"
  }, {
    name: "wechat",
    cssRule: "fa fa-wechat"
  }, {
    name: "weixin",
    cssRule: "fa fa-weixin"
  }, {
    name: "send",
    cssRule: "fa fa-send"
  }, {
    name: "paper-plane",
    cssRule: "fa fa-paper-plane"
  }, {
    name: "send-o",
    cssRule: "fa fa-send-o"
  }, {
    name: "paper-plane-o",
    cssRule: "fa fa-paper-plane-o"
  }, {
    name: "history",
    cssRule: "fa fa-history"
  }, {
    name: "circle-thin",
    cssRule: "fa fa-circle-thin"
  }, {
    name: "header",
    cssRule: "fa fa-header"
  }, {
    name: "paragraph",
    cssRule: "fa fa-paragraph"
  }, {
    name: "sliders",
    cssRule: "fa fa-sliders"
  }, {
    name: "share-alt",
    cssRule: "fa fa-share-alt"
  }, {
    name: "share-alt-square",
    cssRule: "fa fa-share-alt-square"
  }, {
    name: "bomb",
    cssRule: "fa fa-bomb"
  }, {
    name: "soccer-ball-o",
    cssRule: "fa fa-soccer-ball-o"
  }, {
    name: "futbol-o",
    cssRule: "fa fa-futbol-o"
  }, {
    name: "tty",
    cssRule: "fa fa-tty"
  }, {
    name: "binoculars",
    cssRule: "fa fa-binoculars"
  }, {
    name: "plug",
    cssRule: "fa fa-plug"
  }, {
    name: "slideshare",
    cssRule: "fa fa-slideshare"
  }, {
    name: "twitch",
    cssRule: "fa fa-twitch"
  }, {
    name: "yelp",
    cssRule: "fa fa-yelp"
  }, {
    name: "newspaper-o",
    cssRule: "fa fa-newspaper-o"
  }, {
    name: "wifi",
    cssRule: "fa fa-wifi"
  }, {
    name: "calculator",
    cssRule: "fa fa-calculator"
  }, {
    name: "paypal",
    cssRule: "fa fa-paypal"
  }, {
    name: "google-wallet",
    cssRule: "fa fa-google-wallet"
  }, {
    name: "cc-visa",
    cssRule: "fa fa-cc-visa"
  }, {
    name: "cc-mastercard",
    cssRule: "fa fa-cc-mastercard"
  }, {
    name: "cc-discover",
    cssRule: "fa fa-cc-discover"
  }, {
    name: "cc-amex",
    cssRule: "fa fa-cc-amex"
  }, {
    name: "cc-paypal",
    cssRule: "fa fa-cc-paypal"
  }, {
    name: "cc-stripe",
    cssRule: "fa fa-cc-stripe"
  }, {
    name: "bell-slash",
    cssRule: "fa fa-bell-slash"
  }, {
    name: "bell-slash-o",
    cssRule: "fa fa-bell-slash-o"
  }, {
    name: "trash",
    cssRule: "fa fa-trash"
  }, {
    name: "copyright",
    cssRule: "fa fa-copyright"
  }, {
    name: "at",
    cssRule: "fa fa-at"
  }, {
    name: "eyedropper",
    cssRule: "fa fa-eyedropper"
  }, {
    name: "paint-brush",
    cssRule: "fa fa-paint-brush"
  }, {
    name: "birthday-cake",
    cssRule: "fa fa-birthday-cake"
  }, {
    name: "area-chart",
    cssRule: "fa fa-area-chart"
  }, {
    name: "pie-chart",
    cssRule: "fa fa-pie-chart"
  }, {
    name: "line-chart",
    cssRule: "fa fa-line-chart"
  }, {
    name: "lastfm",
    cssRule: "fa fa-lastfm"
  }, {
    name: "lastfm-square",
    cssRule: "fa fa-lastfm-square"
  }, {
    name: "toggle-off",
    cssRule: "fa fa-toggle-off"
  }, {
    name: "toggle-on",
    cssRule: "fa fa-toggle-on"
  }, {
    name: "bicycle",
    cssRule: "fa fa-bicycle"
  }, {
    name: "bus",
    cssRule: "fa fa-bus"
  }, {
    name: "ioxhost",
    cssRule: "fa fa-ioxhost"
  }, {
    name: "angellist",
    cssRule: "fa fa-angellist"
  }, {
    name: "cc",
    cssRule: "fa fa-cc"
  }, {
    name: "shekel",
    cssRule: "fa fa-shekel"
  }, {
    name: "sheqel",
    cssRule: "fa fa-sheqel"
  }, {
    name: "ils",
    cssRule: "fa fa-ils"
  }, {
    name: "meanpath",
    cssRule: "fa fa-meanpath"
  }, {
    name: "buysellads",
    cssRule: "fa fa-buysellads"
  }, {
    name: "connectdevelop",
    cssRule: "fa fa-connectdevelop"
  }, {
    name: "dashcube",
    cssRule: "fa fa-dashcube"
  }, {
    name: "forumbee",
    cssRule: "fa fa-forumbee"
  }, {
    name: "leanpub",
    cssRule: "fa fa-leanpub"
  }, {
    name: "sellsy",
    cssRule: "fa fa-sellsy"
  }, {
    name: "shirtsinbulk",
    cssRule: "fa fa-shirtsinbulk"
  }, {
    name: "simplybuilt",
    cssRule: "fa fa-simplybuilt"
  }, {
    name: "skyatlas",
    cssRule: "fa fa-skyatlas"
  }, {
    name: "cart-plus",
    cssRule: "fa fa-cart-plus"
  }, {
    name: "cart-arrow-down",
    cssRule: "fa fa-cart-arrow-down"
  }, {
    name: "diamond",
    cssRule: "fa fa-diamond"
  }, {
    name: "ship",
    cssRule: "fa fa-ship"
  }, {
    name: "user-secret",
    cssRule: "fa fa-user-secret"
  }, {
    name: "motorcycle",
    cssRule: "fa fa-motorcycle"
  }, {
    name: "street-view",
    cssRule: "fa fa-street-view"
  }, {
    name: "heartbeat",
    cssRule: "fa fa-heartbeat"
  }, {
    name: "venus",
    cssRule: "fa fa-venus"
  }, {
    name: "mars",
    cssRule: "fa fa-mars"
  }, {
    name: "mercury",
    cssRule: "fa fa-mercury"
  }, {
    name: "intersex",
    cssRule: "fa fa-intersex"
  }, {
    name: "transgender",
    cssRule: "fa fa-transgender"
  }, {
    name: "transgender-alt",
    cssRule: "fa fa-transgender-alt"
  }, {
    name: "venus-double",
    cssRule: "fa fa-venus-double"
  }, {
    name: "mars-double",
    cssRule: "fa fa-mars-double"
  }, {
    name: "venus-mars",
    cssRule: "fa fa-venus-mars"
  }, {
    name: "mars-stroke",
    cssRule: "fa fa-mars-stroke"
  }, {
    name: "mars-stroke-v",
    cssRule: "fa fa-mars-stroke-v"
  }, {
    name: "mars-stroke-h",
    cssRule: "fa fa-mars-stroke-h"
  }, {
    name: "neuter",
    cssRule: "fa fa-neuter"
  }, {
    name: "genderless",
    cssRule: "fa fa-genderless"
  }, {
    name: "facebook-official",
    cssRule: "fa fa-facebook-official"
  }, {
    name: "pinterest-p",
    cssRule: "fa fa-pinterest-p"
  }, {
    name: "whatsapp",
    cssRule: "fa fa-whatsapp"
  }, {
    name: "server",
    cssRule: "fa fa-server"
  }, {
    name: "user-plus",
    cssRule: "fa fa-user-plus"
  }, {
    name: "user-times",
    cssRule: "fa fa-user-times"
  }, {
    name: "hotel",
    cssRule: "fa fa-hotel"
  }, {
    name: "bed",
    cssRule: "fa fa-bed"
  }, {
    name: "viacoin",
    cssRule: "fa fa-viacoin"
  }, {
    name: "train",
    cssRule: "fa fa-train"
  }, {
    name: "subway",
    cssRule: "fa fa-subway"
  }, {
    name: "medium",
    cssRule: "fa fa-medium"
  }, {
    name: "yc",
    cssRule: "fa fa-yc"
  }, {
    name: "y-combinator",
    cssRule: "fa fa-y-combinator"
  }, {
    name: "optin-monster",
    cssRule: "fa fa-optin-monster"
  }, {
    name: "opencart",
    cssRule: "fa fa-opencart"
  }, {
    name: "expeditedssl",
    cssRule: "fa fa-expeditedssl"
  }, {
    name: "battery-4",
    cssRule: "fa fa-battery-4"
  }, {
    name: "battery",
    cssRule: "fa fa-battery"
  }, {
    name: "battery-full",
    cssRule: "fa fa-battery-full"
  }, {
    name: "battery-3",
    cssRule: "fa fa-battery-3"
  }, {
    name: "battery-three-quarters",
    cssRule: "fa fa-battery-three-quarters"
  }, {
    name: "battery-2",
    cssRule: "fa fa-battery-2"
  }, {
    name: "battery-half",
    cssRule: "fa fa-battery-half"
  }, {
    name: "battery-1",
    cssRule: "fa fa-battery-1"
  }, {
    name: "battery-quarter",
    cssRule: "fa fa-battery-quarter"
  }, {
    name: "battery-0",
    cssRule: "fa fa-battery-0"
  }, {
    name: "battery-empty",
    cssRule: "fa fa-battery-empty"
  }, {
    name: "mouse-pointer",
    cssRule: "fa fa-mouse-pointer"
  }, {
    name: "i-cursor",
    cssRule: "fa fa-i-cursor"
  }, {
    name: "object-group",
    cssRule: "fa fa-object-group"
  }, {
    name: "object-ungroup",
    cssRule: "fa fa-object-ungroup"
  }, {
    name: "sticky-note",
    cssRule: "fa fa-sticky-note"
  }, {
    name: "sticky-note-o",
    cssRule: "fa fa-sticky-note-o"
  }, {
    name: "cc-jcb",
    cssRule: "fa fa-cc-jcb"
  }, {
    name: "cc-diners-club",
    cssRule: "fa fa-cc-diners-club"
  }, {
    name: "clone",
    cssRule: "fa fa-clone"
  }, {
    name: "balance-scale",
    cssRule: "fa fa-balance-scale"
  }, {
    name: "hourglass-o",
    cssRule: "fa fa-hourglass-o"
  }, {
    name: "hourglass-1",
    cssRule: "fa fa-hourglass-1"
  }, {
    name: "hourglass-start",
    cssRule: "fa fa-hourglass-start"
  }, {
    name: "hourglass-2",
    cssRule: "fa fa-hourglass-2"
  }, {
    name: "hourglass-half",
    cssRule: "fa fa-hourglass-half"
  }, {
    name: "hourglass-3",
    cssRule: "fa fa-hourglass-3"
  }, {
    name: "hourglass-end",
    cssRule: "fa fa-hourglass-end"
  }, {
    name: "hourglass",
    cssRule: "fa fa-hourglass"
  }, {
    name: "hand-grab-o",
    cssRule: "fa fa-hand-grab-o"
  }, {
    name: "hand-rock-o",
    cssRule: "fa fa-hand-rock-o"
  }, {
    name: "hand-stop-o",
    cssRule: "fa fa-hand-stop-o"
  }, {
    name: "hand-paper-o",
    cssRule: "fa fa-hand-paper-o"
  }, {
    name: "hand-scissors-o",
    cssRule: "fa fa-hand-scissors-o"
  }, {
    name: "hand-lizard-o",
    cssRule: "fa fa-hand-lizard-o"
  }, {
    name: "hand-spock-o",
    cssRule: "fa fa-hand-spock-o"
  }, {
    name: "hand-pointer-o",
    cssRule: "fa fa-hand-pointer-o"
  }, {
    name: "hand-peace-o",
    cssRule: "fa fa-hand-peace-o"
  }, {
    name: "trademark",
    cssRule: "fa fa-trademark"
  }, {
    name: "registered",
    cssRule: "fa fa-registered"
  }, {
    name: "creative-commons",
    cssRule: "fa fa-creative-commons"
  }, {
    name: "gg",
    cssRule: "fa fa-gg"
  }, {
    name: "gg-circle",
    cssRule: "fa fa-gg-circle"
  }, {
    name: "tripadvisor",
    cssRule: "fa fa-tripadvisor"
  }, {
    name: "odnoklassniki",
    cssRule: "fa fa-odnoklassniki"
  }, {
    name: "odnoklassniki-square",
    cssRule: "fa fa-odnoklassniki-square"
  }, {
    name: "get-pocket",
    cssRule: "fa fa-get-pocket"
  }, {
    name: "wikipedia-w",
    cssRule: "fa fa-wikipedia-w"
  }, {
    name: "safari",
    cssRule: "fa fa-safari"
  }, {
    name: "chrome",
    cssRule: "fa fa-chrome"
  }, {
    name: "firefox",
    cssRule: "fa fa-firefox"
  }, {
    name: "opera",
    cssRule: "fa fa-opera"
  }, {
    name: "internet-explorer",
    cssRule: "fa fa-internet-explorer"
  }, {
    name: "tv",
    cssRule: "fa fa-tv"
  }, {
    name: "television",
    cssRule: "fa fa-television"
  }, {
    name: "contao",
    cssRule: "fa fa-contao"
  }, {
    name: "500px",
    cssRule: "fa fa-500px"
  }, {
    name: "amazon",
    cssRule: "fa fa-amazon"
  }, {
    name: "calendar-plus-o",
    cssRule: "fa fa-calendar-plus-o"
  }, {
    name: "calendar-minus-o",
    cssRule: "fa fa-calendar-minus-o"
  }, {
    name: "calendar-times-o",
    cssRule: "fa fa-calendar-times-o"
  }, {
    name: "calendar-check-o",
    cssRule: "fa fa-calendar-check-o"
  }, {
    name: "industry",
    cssRule: "fa fa-industry"
  }, {
    name: "map-pin",
    cssRule: "fa fa-map-pin"
  }, {
    name: "map-signs",
    cssRule: "fa fa-map-signs"
  }, {
    name: "map-o",
    cssRule: "fa fa-map-o"
  }, {
    name: "map",
    cssRule: "fa fa-map"
  }, {
    name: "commenting",
    cssRule: "fa fa-commenting"
  }, {
    name: "commenting-o",
    cssRule: "fa fa-commenting-o"
  }, {
    name: "houzz",
    cssRule: "fa fa-houzz"
  }, {
    name: "vimeo",
    cssRule: "fa fa-vimeo"
  }, {
    name: "black-tie",
    cssRule: "fa fa-black-tie"
  }, {
    name: "fonticons",
    cssRule: "fa fa-fonticons"
  }, {
    name: "reddit-alien",
    cssRule: "fa fa-reddit-alien"
  }, {
    name: "edge",
    cssRule: "fa fa-edge"
  }, {
    name: "credit-card-alt",
    cssRule: "fa fa-credit-card-alt"
  }, {
    name: "codiepie",
    cssRule: "fa fa-codiepie"
  }, {
    name: "modx",
    cssRule: "fa fa-modx"
  }, {
    name: "fort-awesome",
    cssRule: "fa fa-fort-awesome"
  }, {
    name: "usb",
    cssRule: "fa fa-usb"
  }, {
    name: "product-hunt",
    cssRule: "fa fa-product-hunt"
  }, {
    name: "mixcloud",
    cssRule: "fa fa-mixcloud"
  }, {
    name: "scribd",
    cssRule: "fa fa-scribd"
  }, {
    name: "pause-circle",
    cssRule: "fa fa-pause-circle"
  }, {
    name: "pause-circle-o",
    cssRule: "fa fa-pause-circle-o"
  }, {
    name: "stop-circle",
    cssRule: "fa fa-stop-circle"
  }, {
    name: "stop-circle-o",
    cssRule: "fa fa-stop-circle-o"
  }, {
    name: "shopping-bag",
    cssRule: "fa fa-shopping-bag"
  }, {
    name: "shopping-basket",
    cssRule: "fa fa-shopping-basket"
  }, {
    name: "hashtag",
    cssRule: "fa fa-hashtag"
  }, {
    name: "bluetooth",
    cssRule: "fa fa-bluetooth"
  }, {
    name: "bluetooth-b",
    cssRule: "fa fa-bluetooth-b"
  }, {
    name: "percent",
    cssRule: "fa fa-percent"
  }, {
    name: "gitlab",
    cssRule: "fa fa-gitlab"
  }, {
    name: "wpbeginner",
    cssRule: "fa fa-wpbeginner"
  }, {
    name: "wpforms",
    cssRule: "fa fa-wpforms"
  }, {
    name: "envira",
    cssRule: "fa fa-envira"
  }, {
    name: "universal-access",
    cssRule: "fa fa-universal-access"
  }, {
    name: "wheelchair-alt",
    cssRule: "fa fa-wheelchair-alt"
  }, {
    name: "question-circle-o",
    cssRule: "fa fa-question-circle-o"
  }, {
    name: "blind",
    cssRule: "fa fa-blind"
  }, {
    name: "audio-description",
    cssRule: "fa fa-audio-description"
  }, {
    name: "volume-control-phone",
    cssRule: "fa fa-volume-control-phone"
  }, {
    name: "braille",
    cssRule: "fa fa-braille"
  }, {
    name: "assistive-listening-systems",
    cssRule: "fa fa-assistive-listening-systems"
  }, {
    name: "asl-interpreting",
    cssRule: "fa fa-asl-interpreting"
  }, {
    name: "american-sign-language-interpreting",
    cssRule: "fa fa-american-sign-language-interpreting"
  }, {
    name: "deafness",
    cssRule: "fa fa-deafness"
  }, {
    name: "hard-of-hearing",
    cssRule: "fa fa-hard-of-hearing"
  }, {
    name: "deaf",
    cssRule: "fa fa-deaf"
  }, {
    name: "glide",
    cssRule: "fa fa-glide"
  }, {
    name: "glide-g",
    cssRule: "fa fa-glide-g"
  }, {
    name: "signing",
    cssRule: "fa fa-signing"
  }, {
    name: "sign-language",
    cssRule: "fa fa-sign-language"
  }, {
    name: "low-vision",
    cssRule: "fa fa-low-vision"
  }, {
    name: "viadeo",
    cssRule: "fa fa-viadeo"
  }, {
    name: "viadeo-square",
    cssRule: "fa fa-viadeo-square"
  }, {
    name: "snapchat",
    cssRule: "fa fa-snapchat"
  }, {
    name: "snapchat-ghost",
    cssRule: "fa fa-snapchat-ghost"
  }, {
    name: "snapchat-square",
    cssRule: "fa fa-snapchat-square"
  }, {
    name: "pied-piper",
    cssRule: "fa fa-pied-piper"
  }, {
    name: "first-order",
    cssRule: "fa fa-first-order"
  }, {
    name: "yoast",
    cssRule: "fa fa-yoast"
  }, {
    name: "themeisle",
    cssRule: "fa fa-themeisle"
  }, {
    name: "google-plus-circle",
    cssRule: "fa fa-google-plus-circle"
  }, {
    name: "google-plus-official",
    cssRule: "fa fa-google-plus-official"
  }, {
    name: "fa",
    cssRule: "fa fa-fa"
  }, {
    name: "font-awesome",
    cssRule: "fa fa-font-awesome"
  }, {
    name: "handshake-o",
    cssRule: "fa fa-handshake-o"
  }, {
    name: "envelope-open",
    cssRule: "fa fa-envelope-open"
  }, {
    name: "envelope-open-o",
    cssRule: "fa fa-envelope-open-o"
  }, {
    name: "linode",
    cssRule: "fa fa-linode"
  }, {
    name: "address-book",
    cssRule: "fa fa-address-book"
  }, {
    name: "address-book-o",
    cssRule: "fa fa-address-book-o"
  }, {
    name: "vcard",
    cssRule: "fa fa-vcard"
  }, {
    name: "address-card",
    cssRule: "fa fa-address-card"
  }, {
    name: "vcard-o",
    cssRule: "fa fa-vcard-o"
  }, {
    name: "address-card-o",
    cssRule: "fa fa-address-card-o"
  }, {
    name: "user-circle",
    cssRule: "fa fa-user-circle"
  }, {
    name: "user-circle-o",
    cssRule: "fa fa-user-circle-o"
  }, {
    name: "user-o",
    cssRule: "fa fa-user-o"
  }, {
    name: "id-badge",
    cssRule: "fa fa-id-badge"
  }, {
    name: "drivers-license",
    cssRule: "fa fa-drivers-license"
  }, {
    name: "id-card",
    cssRule: "fa fa-id-card"
  }, {
    name: "drivers-license-o",
    cssRule: "fa fa-drivers-license-o"
  }, {
    name: "id-card-o",
    cssRule: "fa fa-id-card-o"
  }, {
    name: "quora",
    cssRule: "fa fa-quora"
  }, {
    name: "free-code-camp",
    cssRule: "fa fa-free-code-camp"
  }, {
    name: "telegram",
    cssRule: "fa fa-telegram"
  }, {
    name: "thermometer-4",
    cssRule: "fa fa-thermometer-4"
  }, {
    name: "thermometer",
    cssRule: "fa fa-thermometer"
  }, {
    name: "thermometer-full",
    cssRule: "fa fa-thermometer-full"
  }, {
    name: "thermometer-3",
    cssRule: "fa fa-thermometer-3"
  }, {
    name: "thermometer-three-quarters",
    cssRule: "fa fa-thermometer-three-quarters"
  }, {
    name: "thermometer-2",
    cssRule: "fa fa-thermometer-2"
  }, {
    name: "thermometer-half",
    cssRule: "fa fa-thermometer-half"
  }, {
    name: "thermometer-1",
    cssRule: "fa fa-thermometer-1"
  }, {
    name: "thermometer-quarter",
    cssRule: "fa fa-thermometer-quarter"
  }, {
    name: "thermometer-0",
    cssRule: "fa fa-thermometer-0"
  }, {
    name: "thermometer-empty",
    cssRule: "fa fa-thermometer-empty"
  }, {
    name: "shower",
    cssRule: "fa fa-shower"
  }, {
    name: "bathtub",
    cssRule: "fa fa-bathtub"
  }, {
    name: "s15",
    cssRule: "fa fa-s15"
  }, {
    name: "bath",
    cssRule: "fa fa-bath"
  }, {
    name: "podcast",
    cssRule: "fa fa-podcast"
  }, {
    name: "window-maximize",
    cssRule: "fa fa-window-maximize"
  }, {
    name: "window-minimize",
    cssRule: "fa fa-window-minimize"
  }, {
    name: "window-restore",
    cssRule: "fa fa-window-restore"
  }, {
    name: "times-rectangle",
    cssRule: "fa fa-times-rectangle"
  }, {
    name: "window-close",
    cssRule: "fa fa-window-close"
  }, {
    name: "times-rectangle-o",
    cssRule: "fa fa-times-rectangle-o"
  }, {
    name: "window-close-o",
    cssRule: "fa fa-window-close-o"
  }, {
    name: "bandcamp",
    cssRule: "fa fa-bandcamp"
  }, {
    name: "grav",
    cssRule: "fa fa-grav"
  }, {
    name: "etsy",
    cssRule: "fa fa-etsy"
  }, {
    name: "imdb",
    cssRule: "fa fa-imdb"
  }, {
    name: "ravelry",
    cssRule: "fa fa-ravelry"
  }, {
    name: "eercast",
    cssRule: "fa fa-eercast"
  }, {
    name: "microchip",
    cssRule: "fa fa-microchip"
  }, {
    name: "snowflake-o",
    cssRule: "fa fa-snowflake-o"
  }, {
    name: "superpowers",
    cssRule: "fa fa-superpowers"
  }, {
    name: "wpexplorer",
    cssRule: "fa fa-wpexplorer"
  }, {
    name: "meetup",
    cssRule: "fa fa-meetup"
  }]
}, {
  id: 'fontawesome6',
  name: 'Font Awesome 6',
  iconList: [{
    name: "fa-fill-drip",
    cssRule: "fa-solid fa-fill-drip"
  }, {
    name: "fa-arrows-to-circle",
    cssRule: "fa-solid fa-arrows-to-circle"
  }, {
    name: "fa-chevron-circle-right",
    cssRule: "fa-solid fa-chevron-circle-right"
  }, {
    name: "fa-at",
    cssRule: "fa-solid fa-at"
  }, {
    name: "fa-trash-alt",
    cssRule: "fa-solid fa-trash-alt"
  }, {
    name: "fa-text-height",
    cssRule: "fa-solid fa-text-height"
  }, {
    name: "fa-user-times",
    cssRule: "fa-solid fa-user-times"
  }, {
    name: "fa-stethoscope",
    cssRule: "fa-solid fa-stethoscope"
  }, {
    name: "fa-comment-alt",
    cssRule: "fa-solid fa-comment-alt"
  }, {
    name: "fa-info",
    cssRule: "fa-solid fa-info"
  }, {
    name: "fa-compress-alt",
    cssRule: "fa-solid fa-compress-alt"
  }, {
    name: "fa-explosion",
    cssRule: "fa-solid fa-explosion"
  }, {
    name: "fa-file-alt",
    cssRule: "fa-solid fa-file-alt"
  }, {
    name: "fa-wave-square",
    cssRule: "fa-solid fa-wave-square"
  }, {
    name: "fa-ring",
    cssRule: "fa-solid fa-ring"
  }, {
    name: "fa-building-un",
    cssRule: "fa-solid fa-building-un"
  }, {
    name: "fa-dice-three",
    cssRule: "fa-solid fa-dice-three"
  }, {
    name: "fa-calendar-alt",
    cssRule: "fa-solid fa-calendar-alt"
  }, {
    name: "fa-anchor-circle-check",
    cssRule: "fa-solid fa-anchor-circle-check"
  }, {
    name: "fa-building-circle-arrow-right",
    cssRule: "fa-solid fa-building-circle-arrow-right"
  }, {
    name: "fa-volleyball",
    cssRule: "fa-solid fa-volleyball"
  }, {
    name: "fa-arrows-up-to-line",
    cssRule: "fa-solid fa-arrows-up-to-line"
  }, {
    name: "fa-sort-desc",
    cssRule: "fa-solid fa-sort-desc"
  }, {
    name: "fa-circle-minus",
    cssRule: "fa-solid fa-circle-minus"
  }, {
    name: "fa-door-open",
    cssRule: "fa-solid fa-door-open"
  }, {
    name: "fa-right-from-bracket",
    cssRule: "fa-solid fa-right-from-bracket"
  }, {
    name: "fa-atom",
    cssRule: "fa-solid fa-atom"
  }, {
    name: "fa-soap",
    cssRule: "fa-solid fa-soap"
  }, {
    name: "fa-heart-music-camera-bolt",
    cssRule: "fa-solid fa-heart-music-camera-bolt"
  }, {
    name: "fa-microphone-alt-slash",
    cssRule: "fa-solid fa-microphone-alt-slash"
  }, {
    name: "fa-bridge-circle-check",
    cssRule: "fa-solid fa-bridge-circle-check"
  }, {
    name: "fa-pump-medical",
    cssRule: "fa-solid fa-pump-medical"
  }, {
    name: "fa-fingerprint",
    cssRule: "fa-solid fa-fingerprint"
  }, {
    name: "fa-hand-point-right",
    cssRule: "fa-solid fa-hand-point-right"
  }, {
    name: "fa-magnifying-glass-location",
    cssRule: "fa-solid fa-magnifying-glass-location"
  }, {
    name: "fa-forward-step",
    cssRule: "fa-solid fa-forward-step"
  }, {
    name: "fa-face-smile-beam",
    cssRule: "fa-solid fa-face-smile-beam"
  }, {
    name: "fa-flag-checkered",
    cssRule: "fa-solid fa-flag-checkered"
  }, {
    name: "fa-football",
    cssRule: "fa-solid fa-football"
  }, {
    name: "fa-school-circle-exclamation",
    cssRule: "fa-solid fa-school-circle-exclamation"
  }, {
    name: "fa-crop",
    cssRule: "fa-solid fa-crop"
  }, {
    name: "fa-angle-double-down",
    cssRule: "fa-solid fa-angle-double-down"
  }, {
    name: "fa-users-rectangle",
    cssRule: "fa-solid fa-users-rectangle"
  }, {
    name: "fa-people-roof",
    cssRule: "fa-solid fa-people-roof"
  }, {
    name: "fa-people-line",
    cssRule: "fa-solid fa-people-line"
  }, {
    name: "fa-beer",
    cssRule: "fa-solid fa-beer"
  }, {
    name: "fa-diagram-predecessor",
    cssRule: "fa-solid fa-diagram-predecessor"
  }, {
    name: "fa-arrow-up-long",
    cssRule: "fa-solid fa-arrow-up-long"
  }, {
    name: "fa-burn",
    cssRule: "fa-solid fa-burn"
  }, {
    name: "fa-male",
    cssRule: "fa-solid fa-male"
  }, {
    name: "fa-laptop",
    cssRule: "fa-solid fa-laptop"
  }, {
    name: "fa-file-csv",
    cssRule: "fa-solid fa-file-csv"
  }, {
    name: "fa-menorah",
    cssRule: "fa-solid fa-menorah"
  }, {
    name: "fa-truck-plane",
    cssRule: "fa-solid fa-truck-plane"
  }, {
    name: "fa-record-vinyl",
    cssRule: "fa-solid fa-record-vinyl"
  }, {
    name: "fa-face-grin-stars",
    cssRule: "fa-solid fa-face-grin-stars"
  }, {
    name: "fa-bong",
    cssRule: "fa-solid fa-bong"
  }, {
    name: "fa-pastafarianism",
    cssRule: "fa-solid fa-pastafarianism"
  }, {
    name: "fa-arrow-down-up-across-line",
    cssRule: "fa-solid fa-arrow-down-up-across-line"
  }, {
    name: "fa-spoon",
    cssRule: "fa-solid fa-spoon"
  }, {
    name: "fa-jar-wheat",
    cssRule: "fa-solid fa-jar-wheat"
  }, {
    name: "fa-envelopes-bulk",
    cssRule: "fa-solid fa-envelopes-bulk"
  }, {
    name: "fa-file-circle-exclamation",
    cssRule: "fa-solid fa-file-circle-exclamation"
  }, {
    name: "fa-circle-h",
    cssRule: "fa-solid fa-circle-h"
  }, {
    name: "fa-pager",
    cssRule: "fa-solid fa-pager"
  }, {
    name: "fa-address-book",
    cssRule: "fa-solid fa-address-book"
  }, {
    name: "fa-strikethrough",
    cssRule: "fa-solid fa-strikethrough"
  }, {
    name: "fa-k",
    cssRule: "fa-solid fa-k"
  }, {
    name: "fa-landmark-flag",
    cssRule: "fa-solid fa-landmark-flag"
  }, {
    name: "fa-pencil",
    cssRule: "fa-solid fa-pencil"
  }, {
    name: "fa-backward",
    cssRule: "fa-solid fa-backward"
  }, {
    name: "fa-caret-right",
    cssRule: "fa-solid fa-caret-right"
  }, {
    name: "fa-comments",
    cssRule: "fa-solid fa-comments"
  }, {
    name: "fa-file-clipboard",
    cssRule: "fa-solid fa-file-clipboard"
  }, {
    name: "fa-code-pull-request",
    cssRule: "fa-solid fa-code-pull-request"
  }, {
    name: "fa-clipboard-list",
    cssRule: "fa-solid fa-clipboard-list"
  }, {
    name: "fa-truck-loading",
    cssRule: "fa-solid fa-truck-loading"
  }, {
    name: "fa-user-check",
    cssRule: "fa-solid fa-user-check"
  }, {
    name: "fa-vial-virus",
    cssRule: "fa-solid fa-vial-virus"
  }, {
    name: "fa-sheet-plastic",
    cssRule: "fa-solid fa-sheet-plastic"
  }, {
    name: "fa-blog",
    cssRule: "fa-solid fa-blog"
  }, {
    name: "fa-user-ninja",
    cssRule: "fa-solid fa-user-ninja"
  }, {
    name: "fa-person-arrow-up-from-line",
    cssRule: "fa-solid fa-person-arrow-up-from-line"
  }, {
    name: "fa-scroll-torah",
    cssRule: "fa-solid fa-scroll-torah"
  }, {
    name: "fa-broom-ball",
    cssRule: "fa-solid fa-broom-ball"
  }, {
    name: "fa-toggle-off",
    cssRule: "fa-solid fa-toggle-off"
  }, {
    name: "fa-archive",
    cssRule: "fa-solid fa-archive"
  }, {
    name: "fa-person-drowning",
    cssRule: "fa-solid fa-person-drowning"
  }, {
    name: "fa-arrow-down-9-1",
    cssRule: "fa-solid fa-arrow-down-9-1"
  }, {
    name: "fa-face-grin-tongue-squint",
    cssRule: "fa-solid fa-face-grin-tongue-squint"
  }, {
    name: "fa-spray-can",
    cssRule: "fa-solid fa-spray-can"
  }, {
    name: "fa-truck-monster",
    cssRule: "fa-solid fa-truck-monster"
  }, {
    name: "fa-w",
    cssRule: "fa-solid fa-w"
  }, {
    name: "fa-earth-africa",
    cssRule: "fa-solid fa-earth-africa"
  }, {
    name: "fa-rainbow",
    cssRule: "fa-solid fa-rainbow"
  }, {
    name: "fa-circle-notch",
    cssRule: "fa-solid fa-circle-notch"
  }, {
    name: "fa-tablet-alt",
    cssRule: "fa-solid fa-tablet-alt"
  }, {
    name: "fa-paw",
    cssRule: "fa-solid fa-paw"
  }, {
    name: "fa-cloud",
    cssRule: "fa-solid fa-cloud"
  }, {
    name: "fa-trowel-bricks",
    cssRule: "fa-solid fa-trowel-bricks"
  }, {
    name: "fa-face-flushed",
    cssRule: "fa-solid fa-face-flushed"
  }, {
    name: "fa-hospital-user",
    cssRule: "fa-solid fa-hospital-user"
  }, {
    name: "fa-tent-arrow-left-right",
    cssRule: "fa-solid fa-tent-arrow-left-right"
  }, {
    name: "fa-gavel",
    cssRule: "fa-solid fa-gavel"
  }, {
    name: "fa-binoculars",
    cssRule: "fa-solid fa-binoculars"
  }, {
    name: "fa-microphone-slash",
    cssRule: "fa-solid fa-microphone-slash"
  }, {
    name: "fa-box-tissue",
    cssRule: "fa-solid fa-box-tissue"
  }, {
    name: "fa-motorcycle",
    cssRule: "fa-solid fa-motorcycle"
  }, {
    name: "fa-bell-concierge",
    cssRule: "fa-solid fa-bell-concierge"
  }, {
    name: "fa-pen-ruler",
    cssRule: "fa-solid fa-pen-ruler"
  }, {
    name: "fa-people-arrows",
    cssRule: "fa-solid fa-people-arrows"
  }, {
    name: "fa-mars-and-venus-burst",
    cssRule: "fa-solid fa-mars-and-venus-burst"
  }, {
    name: "fa-caret-square-right",
    cssRule: "fa-solid fa-caret-square-right"
  }, {
    name: "fa-cut",
    cssRule: "fa-solid fa-cut"
  }, {
    name: "fa-sun-plant-wilt",
    cssRule: "fa-solid fa-sun-plant-wilt"
  }, {
    name: "fa-toilets-portable",
    cssRule: "fa-solid fa-toilets-portable"
  }, {
    name: "fa-hockey-puck",
    cssRule: "fa-solid fa-hockey-puck"
  }, {
    name: "fa-table",
    cssRule: "fa-solid fa-table"
  }, {
    name: "fa-magnifying-glass-arrow-right",
    cssRule: "fa-solid fa-magnifying-glass-arrow-right"
  }, {
    name: "fa-digital-tachograph",
    cssRule: "fa-solid fa-digital-tachograph"
  }, {
    name: "fa-users-slash",
    cssRule: "fa-solid fa-users-slash"
  }, {
    name: "fa-clover",
    cssRule: "fa-solid fa-clover"
  }, {
    name: "fa-mail-reply",
    cssRule: "fa-solid fa-mail-reply"
  }, {
    name: "fa-star-and-crescent",
    cssRule: "fa-solid fa-star-and-crescent"
  }, {
    name: "fa-house-fire",
    cssRule: "fa-solid fa-house-fire"
  }, {
    name: "fa-minus-square",
    cssRule: "fa-solid fa-minus-square"
  }, {
    name: "fa-helicopter",
    cssRule: "fa-solid fa-helicopter"
  }, {
    name: "fa-compass",
    cssRule: "fa-solid fa-compass"
  }, {
    name: "fa-caret-square-down",
    cssRule: "fa-solid fa-caret-square-down"
  }, {
    name: "fa-file-circle-question",
    cssRule: "fa-solid fa-file-circle-question"
  }, {
    name: "fa-laptop-code",
    cssRule: "fa-solid fa-laptop-code"
  }, {
    name: "fa-swatchbook",
    cssRule: "fa-solid fa-swatchbook"
  }, {
    name: "fa-prescription-bottle",
    cssRule: "fa-solid fa-prescription-bottle"
  }, {
    name: "fa-bars",
    cssRule: "fa-solid fa-bars"
  }, {
    name: "fa-people-group",
    cssRule: "fa-solid fa-people-group"
  }, {
    name: "fa-hourglass-3",
    cssRule: "fa-solid fa-hourglass-3"
  }, {
    name: "fa-heart-broken",
    cssRule: "fa-solid fa-heart-broken"
  }, {
    name: "fa-external-link-square-alt",
    cssRule: "fa-solid fa-external-link-square-alt"
  }, {
    name: "fa-face-kiss-beam",
    cssRule: "fa-solid fa-face-kiss-beam"
  }, {
    name: "fa-film",
    cssRule: "fa-solid fa-film"
  }, {
    name: "fa-ruler-horizontal",
    cssRule: "fa-solid fa-ruler-horizontal"
  }, {
    name: "fa-people-robbery",
    cssRule: "fa-solid fa-people-robbery"
  }, {
    name: "fa-lightbulb",
    cssRule: "fa-solid fa-lightbulb"
  }, {
    name: "fa-caret-left",
    cssRule: "fa-solid fa-caret-left"
  }, {
    name: "fa-circle-exclamation",
    cssRule: "fa-solid fa-circle-exclamation"
  }, {
    name: "fa-school-circle-xmark",
    cssRule: "fa-solid fa-school-circle-xmark"
  }, {
    name: "fa-arrow-right-from-bracket",
    cssRule: "fa-solid fa-arrow-right-from-bracket"
  }, {
    name: "fa-chevron-circle-down",
    cssRule: "fa-solid fa-chevron-circle-down"
  }, {
    name: "fa-unlock-alt",
    cssRule: "fa-solid fa-unlock-alt"
  }, {
    name: "fa-cloud-showers-heavy",
    cssRule: "fa-solid fa-cloud-showers-heavy"
  }, {
    name: "fa-headphones-alt",
    cssRule: "fa-solid fa-headphones-alt"
  }, {
    name: "fa-sitemap",
    cssRule: "fa-solid fa-sitemap"
  }, {
    name: "fa-circle-dollar-to-slot",
    cssRule: "fa-solid fa-circle-dollar-to-slot"
  }, {
    name: "fa-memory",
    cssRule: "fa-solid fa-memory"
  }, {
    name: "fa-road-spikes",
    cssRule: "fa-solid fa-road-spikes"
  }, {
    name: "fa-fire-burner",
    cssRule: "fa-solid fa-fire-burner"
  }, {
    name: "fa-flag",
    cssRule: "fa-solid fa-flag"
  }, {
    name: "fa-hanukiah",
    cssRule: "fa-solid fa-hanukiah"
  }, {
    name: "fa-feather",
    cssRule: "fa-solid fa-feather"
  }, {
    name: "fa-volume-down",
    cssRule: "fa-solid fa-volume-down"
  }, {
    name: "fa-comment-slash",
    cssRule: "fa-solid fa-comment-slash"
  }, {
    name: "fa-cloud-sun-rain",
    cssRule: "fa-solid fa-cloud-sun-rain"
  }, {
    name: "fa-compress",
    cssRule: "fa-solid fa-compress"
  }, {
    name: "fa-wheat-alt",
    cssRule: "fa-solid fa-wheat-alt"
  }, {
    name: "fa-ankh",
    cssRule: "fa-solid fa-ankh"
  }, {
    name: "fa-hands-holding-child",
    cssRule: "fa-solid fa-hands-holding-child"
  }, {
    name: "fa-asterisk",
    cssRule: "fa-solid fa-asterisk"
  }, {
    name: "fa-check-square",
    cssRule: "fa-solid fa-check-square"
  }, {
    name: "fa-peseta-sign",
    cssRule: "fa-solid fa-peseta-sign"
  }, {
    name: "fa-header",
    cssRule: "fa-solid fa-header"
  }, {
    name: "fa-ghost",
    cssRule: "fa-solid fa-ghost"
  }, {
    name: "fa-list",
    cssRule: "fa-solid fa-list"
  }, {
    name: "fa-phone-square-alt",
    cssRule: "fa-solid fa-phone-square-alt"
  }, {
    name: "fa-cart-plus",
    cssRule: "fa-solid fa-cart-plus"
  }, {
    name: "fa-gamepad",
    cssRule: "fa-solid fa-gamepad"
  }, {
    name: "fa-circle-dot",
    cssRule: "fa-solid fa-circle-dot"
  }, {
    name: "fa-dizzy",
    cssRule: "fa-solid fa-dizzy"
  }, {
    name: "fa-egg",
    cssRule: "fa-solid fa-egg"
  }, {
    name: "fa-house-medical-circle-xmark",
    cssRule: "fa-solid fa-house-medical-circle-xmark"
  }, {
    name: "fa-campground",
    cssRule: "fa-solid fa-campground"
  }, {
    name: "fa-folder-plus",
    cssRule: "fa-solid fa-folder-plus"
  }, {
    name: "fa-futbol",
    cssRule: "fa-solid fa-futbol"
  }, {
    name: "fa-paint-brush",
    cssRule: "fa-solid fa-paint-brush"
  }, {
    name: "fa-lock",
    cssRule: "fa-solid fa-lock"
  }, {
    name: "fa-gas-pump",
    cssRule: "fa-solid fa-gas-pump"
  }, {
    name: "fa-hot-tub",
    cssRule: "fa-solid fa-hot-tub"
  }, {
    name: "fa-map-location",
    cssRule: "fa-solid fa-map-location"
  }, {
    name: "fa-house-flood-water",
    cssRule: "fa-solid fa-house-flood-water"
  }, {
    name: "fa-tree",
    cssRule: "fa-solid fa-tree"
  }, {
    name: "fa-bridge-lock",
    cssRule: "fa-solid fa-bridge-lock"
  }, {
    name: "fa-sack-dollar",
    cssRule: "fa-solid fa-sack-dollar"
  }, {
    name: "fa-edit",
    cssRule: "fa-solid fa-edit"
  }, {
    name: "fa-car-side",
    cssRule: "fa-solid fa-car-side"
  }, {
    name: "fa-share-alt",
    cssRule: "fa-solid fa-share-alt"
  }, {
    name: "fa-heart-circle-minus",
    cssRule: "fa-solid fa-heart-circle-minus"
  }, {
    name: "fa-hourglass-2",
    cssRule: "fa-solid fa-hourglass-2"
  }, {
    name: "fa-microscope",
    cssRule: "fa-solid fa-microscope"
  }, {
    name: "fa-sink",
    cssRule: "fa-solid fa-sink"
  }, {
    name: "fa-bag-shopping",
    cssRule: "fa-solid fa-bag-shopping"
  }, {
    name: "fa-arrow-down-z-a",
    cssRule: "fa-solid fa-arrow-down-z-a"
  }, {
    name: "fa-mitten",
    cssRule: "fa-solid fa-mitten"
  }, {
    name: "fa-person-rays",
    cssRule: "fa-solid fa-person-rays"
  }, {
    name: "fa-users",
    cssRule: "fa-solid fa-users"
  }, {
    name: "fa-eye-slash",
    cssRule: "fa-solid fa-eye-slash"
  }, {
    name: "fa-flask-vial",
    cssRule: "fa-solid fa-flask-vial"
  }, {
    name: "fa-hand",
    cssRule: "fa-solid fa-hand"
  }, {
    name: "fa-om",
    cssRule: "fa-solid fa-om"
  }, {
    name: "fa-worm",
    cssRule: "fa-solid fa-worm"
  }, {
    name: "fa-house-circle-xmark",
    cssRule: "fa-solid fa-house-circle-xmark"
  }, {
    name: "fa-plug",
    cssRule: "fa-solid fa-plug"
  }, {
    name: "fa-chevron-up",
    cssRule: "fa-solid fa-chevron-up"
  }, {
    name: "fa-hand-spock",
    cssRule: "fa-solid fa-hand-spock"
  }, {
    name: "fa-stopwatch",
    cssRule: "fa-solid fa-stopwatch"
  }, {
    name: "fa-face-kiss",
    cssRule: "fa-solid fa-face-kiss"
  }, {
    name: "fa-bridge-circle-xmark",
    cssRule: "fa-solid fa-bridge-circle-xmark"
  }, {
    name: "fa-face-grin-tongue",
    cssRule: "fa-solid fa-face-grin-tongue"
  }, {
    name: "fa-chess-bishop",
    cssRule: "fa-solid fa-chess-bishop"
  }, {
    name: "fa-face-grin-wink",
    cssRule: "fa-solid fa-face-grin-wink"
  }, {
    name: "fa-deaf",
    cssRule: "fa-solid fa-deaf"
  }, {
    name: "fa-road-circle-check",
    cssRule: "fa-solid fa-road-circle-check"
  }, {
    name: "fa-dice-five",
    cssRule: "fa-solid fa-dice-five"
  }, {
    name: "fa-rss-square",
    cssRule: "fa-solid fa-rss-square"
  }, {
    name: "fa-land-mine-on",
    cssRule: "fa-solid fa-land-mine-on"
  }, {
    name: "fa-i-cursor",
    cssRule: "fa-solid fa-i-cursor"
  }, {
    name: "fa-stamp",
    cssRule: "fa-solid fa-stamp"
  }, {
    name: "fa-stairs",
    cssRule: "fa-solid fa-stairs"
  }, {
    name: "fa-i",
    cssRule: "fa-solid fa-i"
  }, {
    name: "fa-hryvnia",
    cssRule: "fa-solid fa-hryvnia"
  }, {
    name: "fa-pills",
    cssRule: "fa-solid fa-pills"
  }, {
    name: "fa-face-grin-wide",
    cssRule: "fa-solid fa-face-grin-wide"
  }, {
    name: "fa-tooth",
    cssRule: "fa-solid fa-tooth"
  }, {
    name: "fa-v",
    cssRule: "fa-solid fa-v"
  }, {
    name: "fa-bangladeshi-taka-sign",
    cssRule: "fa-solid fa-bangladeshi-taka-sign"
  }, {
    name: "fa-bicycle",
    cssRule: "fa-solid fa-bicycle"
  }, {
    name: "fa-rod-asclepius",
    cssRule: "fa-solid fa-rod-asclepius"
  }, {
    name: "fa-head-side-cough-slash",
    cssRule: "fa-solid fa-head-side-cough-slash"
  }, {
    name: "fa-ambulance",
    cssRule: "fa-solid fa-ambulance"
  }, {
    name: "fa-wheat-awn-circle-exclamation",
    cssRule: "fa-solid fa-wheat-awn-circle-exclamation"
  }, {
    name: "fa-snowman",
    cssRule: "fa-solid fa-snowman"
  }, {
    name: "fa-mortar-pestle",
    cssRule: "fa-solid fa-mortar-pestle"
  }, {
    name: "fa-road-barrier",
    cssRule: "fa-solid fa-road-barrier"
  }, {
    name: "fa-school",
    cssRule: "fa-solid fa-school"
  }, {
    name: "fa-igloo",
    cssRule: "fa-solid fa-igloo"
  }, {
    name: "fa-joint",
    cssRule: "fa-solid fa-joint"
  }, {
    name: "fa-angle-right",
    cssRule: "fa-solid fa-angle-right"
  }, {
    name: "fa-horse",
    cssRule: "fa-solid fa-horse"
  }, {
    name: "fa-q",
    cssRule: "fa-solid fa-q"
  }, {
    name: "fa-g",
    cssRule: "fa-solid fa-g"
  }, {
    name: "fa-notes-medical",
    cssRule: "fa-solid fa-notes-medical"
  }, {
    name: "fa-temperature-2",
    cssRule: "fa-solid fa-temperature-2"
  }, {
    name: "fa-dong-sign",
    cssRule: "fa-solid fa-dong-sign"
  }, {
    name: "fa-capsules",
    cssRule: "fa-solid fa-capsules"
  }, {
    name: "fa-poo-bolt",
    cssRule: "fa-solid fa-poo-bolt"
  }, {
    name: "fa-face-frown-open",
    cssRule: "fa-solid fa-face-frown-open"
  }, {
    name: "fa-hand-point-up",
    cssRule: "fa-solid fa-hand-point-up"
  }, {
    name: "fa-money-bill",
    cssRule: "fa-solid fa-money-bill"
  }, {
    name: "fa-bookmark",
    cssRule: "fa-solid fa-bookmark"
  }, {
    name: "fa-align-justify",
    cssRule: "fa-solid fa-align-justify"
  }, {
    name: "fa-umbrella-beach",
    cssRule: "fa-solid fa-umbrella-beach"
  }, {
    name: "fa-helmet-un",
    cssRule: "fa-solid fa-helmet-un"
  }, {
    name: "fa-bullseye",
    cssRule: "fa-solid fa-bullseye"
  }, {
    name: "fa-bacon",
    cssRule: "fa-solid fa-bacon"
  }, {
    name: "fa-hand-point-down",
    cssRule: "fa-solid fa-hand-point-down"
  }, {
    name: "fa-arrow-up-from-bracket",
    cssRule: "fa-solid fa-arrow-up-from-bracket"
  }, {
    name: "fa-folder",
    cssRule: "fa-solid fa-folder"
  }, {
    name: "fa-file-medical-alt",
    cssRule: "fa-solid fa-file-medical-alt"
  }, {
    name: "fa-radiation",
    cssRule: "fa-solid fa-radiation"
  }, {
    name: "fa-chart-simple",
    cssRule: "fa-solid fa-chart-simple"
  }, {
    name: "fa-mars-stroke",
    cssRule: "fa-solid fa-mars-stroke"
  }, {
    name: "fa-vial",
    cssRule: "fa-solid fa-vial"
  }, {
    name: "fa-dashboard",
    cssRule: "fa-solid fa-dashboard"
  }, {
    name: "fa-magic-wand-sparkles",
    cssRule: "fa-solid fa-magic-wand-sparkles"
  }, {
    name: "fa-e",
    cssRule: "fa-solid fa-e"
  }, {
    name: "fa-pen-alt",
    cssRule: "fa-solid fa-pen-alt"
  }, {
    name: "fa-bridge-circle-exclamation",
    cssRule: "fa-solid fa-bridge-circle-exclamation"
  }, {
    name: "fa-user",
    cssRule: "fa-solid fa-user"
  }, {
    name: "fa-school-circle-check",
    cssRule: "fa-solid fa-school-circle-check"
  }, {
    name: "fa-dumpster",
    cssRule: "fa-solid fa-dumpster"
  }, {
    name: "fa-shuttle-van",
    cssRule: "fa-solid fa-shuttle-van"
  }, {
    name: "fa-building-user",
    cssRule: "fa-solid fa-building-user"
  }, {
    name: "fa-caret-square-left",
    cssRule: "fa-solid fa-caret-square-left"
  }, {
    name: "fa-highlighter",
    cssRule: "fa-solid fa-highlighter"
  }, {
    name: "fa-key",
    cssRule: "fa-solid fa-key"
  }, {
    name: "fa-bullhorn",
    cssRule: "fa-solid fa-bullhorn"
  }, {
    name: "fa-globe",
    cssRule: "fa-solid fa-globe"
  }, {
    name: "fa-synagogue",
    cssRule: "fa-solid fa-synagogue"
  }, {
    name: "fa-person-half-dress",
    cssRule: "fa-solid fa-person-half-dress"
  }, {
    name: "fa-road-bridge",
    cssRule: "fa-solid fa-road-bridge"
  }, {
    name: "fa-location-arrow",
    cssRule: "fa-solid fa-location-arrow"
  }, {
    name: "fa-c",
    cssRule: "fa-solid fa-c"
  }, {
    name: "fa-tablet-button",
    cssRule: "fa-solid fa-tablet-button"
  }, {
    name: "fa-building-lock",
    cssRule: "fa-solid fa-building-lock"
  }, {
    name: "fa-pizza-slice",
    cssRule: "fa-solid fa-pizza-slice"
  }, {
    name: "fa-money-bill-wave",
    cssRule: "fa-solid fa-money-bill-wave"
  }, {
    name: "fa-area-chart",
    cssRule: "fa-solid fa-area-chart"
  }, {
    name: "fa-house-flag",
    cssRule: "fa-solid fa-house-flag"
  }, {
    name: "fa-person-circle-minus",
    cssRule: "fa-solid fa-person-circle-minus"
  }, {
    name: "fa-ban",
    cssRule: "fa-solid fa-ban"
  }, {
    name: "fa-camera-rotate",
    cssRule: "fa-solid fa-camera-rotate"
  }, {
    name: "fa-air-freshener",
    cssRule: "fa-solid fa-air-freshener"
  }, {
    name: "fa-star",
    cssRule: "fa-solid fa-star"
  }, {
    name: "fa-repeat",
    cssRule: "fa-solid fa-repeat"
  }, {
    name: "fa-cross",
    cssRule: "fa-solid fa-cross"
  }, {
    name: "fa-box",
    cssRule: "fa-solid fa-box"
  }, {
    name: "fa-venus-mars",
    cssRule: "fa-solid fa-venus-mars"
  }, {
    name: "fa-arrow-pointer",
    cssRule: "fa-solid fa-arrow-pointer"
  }, {
    name: "fa-expand-arrows-alt",
    cssRule: "fa-solid fa-expand-arrows-alt"
  }, {
    name: "fa-charging-station",
    cssRule: "fa-solid fa-charging-station"
  }, {
    name: "fa-shapes",
    cssRule: "fa-solid fa-shapes"
  }, {
    name: "fa-random",
    cssRule: "fa-solid fa-random"
  }, {
    name: "fa-person-running",
    cssRule: "fa-solid fa-person-running"
  }, {
    name: "fa-mobile-retro",
    cssRule: "fa-solid fa-mobile-retro"
  }, {
    name: "fa-grip-lines-vertical",
    cssRule: "fa-solid fa-grip-lines-vertical"
  }, {
    name: "fa-spider",
    cssRule: "fa-solid fa-spider"
  }, {
    name: "fa-hands-bound",
    cssRule: "fa-solid fa-hands-bound"
  }, {
    name: "fa-file-invoice-dollar",
    cssRule: "fa-solid fa-file-invoice-dollar"
  }, {
    name: "fa-plane-circle-exclamation",
    cssRule: "fa-solid fa-plane-circle-exclamation"
  }, {
    name: "fa-x-ray",
    cssRule: "fa-solid fa-x-ray"
  }, {
    name: "fa-spell-check",
    cssRule: "fa-solid fa-spell-check"
  }, {
    name: "fa-slash",
    cssRule: "fa-solid fa-slash"
  }, {
    name: "fa-computer-mouse",
    cssRule: "fa-solid fa-computer-mouse"
  }, {
    name: "fa-arrow-right-to-bracket",
    cssRule: "fa-solid fa-arrow-right-to-bracket"
  }, {
    name: "fa-shop-slash",
    cssRule: "fa-solid fa-shop-slash"
  }, {
    name: "fa-server",
    cssRule: "fa-solid fa-server"
  }, {
    name: "fa-virus-covid-slash",
    cssRule: "fa-solid fa-virus-covid-slash"
  }, {
    name: "fa-shop-lock",
    cssRule: "fa-solid fa-shop-lock"
  }, {
    name: "fa-hourglass-1",
    cssRule: "fa-solid fa-hourglass-1"
  }, {
    name: "fa-blender-phone",
    cssRule: "fa-solid fa-blender-phone"
  }, {
    name: "fa-building-wheat",
    cssRule: "fa-solid fa-building-wheat"
  }, {
    name: "fa-person-breastfeeding",
    cssRule: "fa-solid fa-person-breastfeeding"
  }, {
    name: "fa-right-to-bracket",
    cssRule: "fa-solid fa-right-to-bracket"
  }, {
    name: "fa-venus",
    cssRule: "fa-solid fa-venus"
  }, {
    name: "fa-passport",
    cssRule: "fa-solid fa-passport"
  }, {
    name: "fa-thumb-tack-slash",
    cssRule: "fa-solid fa-thumb-tack-slash"
  }, {
    name: "fa-heart-pulse",
    cssRule: "fa-solid fa-heart-pulse"
  }, {
    name: "fa-people-carry",
    cssRule: "fa-solid fa-people-carry"
  }, {
    name: "fa-temperature-high",
    cssRule: "fa-solid fa-temperature-high"
  }, {
    name: "fa-microchip",
    cssRule: "fa-solid fa-microchip"
  }, {
    name: "fa-crown",
    cssRule: "fa-solid fa-crown"
  }, {
    name: "fa-weight-hanging",
    cssRule: "fa-solid fa-weight-hanging"
  }, {
    name: "fa-xmarks-lines",
    cssRule: "fa-solid fa-xmarks-lines"
  }, {
    name: "fa-file-prescription",
    cssRule: "fa-solid fa-file-prescription"
  }, {
    name: "fa-weight",
    cssRule: "fa-solid fa-weight"
  }, {
    name: "fa-user-friends",
    cssRule: "fa-solid fa-user-friends"
  }, {
    name: "fa-arrow-up-a-z",
    cssRule: "fa-solid fa-arrow-up-a-z"
  }, {
    name: "fa-chess-knight",
    cssRule: "fa-solid fa-chess-knight"
  }, {
    name: "fa-face-laugh-squint",
    cssRule: "fa-solid fa-face-laugh-squint"
  }, {
    name: "fa-wheelchair",
    cssRule: "fa-solid fa-wheelchair"
  }, {
    name: "fa-arrow-circle-up",
    cssRule: "fa-solid fa-arrow-circle-up"
  }, {
    name: "fa-toggle-on",
    cssRule: "fa-solid fa-toggle-on"
  }, {
    name: "fa-person-walking",
    cssRule: "fa-solid fa-person-walking"
  }, {
    name: "fa-l",
    cssRule: "fa-solid fa-l"
  }, {
    name: "fa-fire",
    cssRule: "fa-solid fa-fire"
  }, {
    name: "fa-bed-pulse",
    cssRule: "fa-solid fa-bed-pulse"
  }, {
    name: "fa-shuttle-space",
    cssRule: "fa-solid fa-shuttle-space"
  }, {
    name: "fa-face-laugh",
    cssRule: "fa-solid fa-face-laugh"
  }, {
    name: "fa-folder-open",
    cssRule: "fa-solid fa-folder-open"
  }, {
    name: "fa-heart-circle-plus",
    cssRule: "fa-solid fa-heart-circle-plus"
  }, {
    name: "fa-code-fork",
    cssRule: "fa-solid fa-code-fork"
  }, {
    name: "fa-city",
    cssRule: "fa-solid fa-city"
  }, {
    name: "fa-microphone-alt",
    cssRule: "fa-solid fa-microphone-alt"
  }, {
    name: "fa-pepper-hot",
    cssRule: "fa-solid fa-pepper-hot"
  }, {
    name: "fa-unlock",
    cssRule: "fa-solid fa-unlock"
  }, {
    name: "fa-colon-sign",
    cssRule: "fa-solid fa-colon-sign"
  }, {
    name: "fa-headset",
    cssRule: "fa-solid fa-headset"
  }, {
    name: "fa-store-slash",
    cssRule: "fa-solid fa-store-slash"
  }, {
    name: "fa-road-circle-xmark",
    cssRule: "fa-solid fa-road-circle-xmark"
  }, {
    name: "fa-user-minus",
    cssRule: "fa-solid fa-user-minus"
  }, {
    name: "fa-mars-stroke-up",
    cssRule: "fa-solid fa-mars-stroke-up"
  }, {
    name: "fa-champagne-glasses",
    cssRule: "fa-solid fa-champagne-glasses"
  }, {
    name: "fa-clipboard",
    cssRule: "fa-solid fa-clipboard"
  }, {
    name: "fa-house-circle-exclamation",
    cssRule: "fa-solid fa-house-circle-exclamation"
  }, {
    name: "fa-file-arrow-up",
    cssRule: "fa-solid fa-file-arrow-up"
  }, {
    name: "fa-wifi",
    cssRule: "fa-solid fa-wifi"
  }, {
    name: "fa-bath",
    cssRule: "fa-solid fa-bath"
  }, {
    name: "fa-underline",
    cssRule: "fa-solid fa-underline"
  }, {
    name: "fa-user-edit",
    cssRule: "fa-solid fa-user-edit"
  }, {
    name: "fa-signature",
    cssRule: "fa-solid fa-signature"
  }, {
    name: "fa-stroopwafel",
    cssRule: "fa-solid fa-stroopwafel"
  }, {
    name: "fa-bold",
    cssRule: "fa-solid fa-bold"
  }, {
    name: "fa-anchor-lock",
    cssRule: "fa-solid fa-anchor-lock"
  }, {
    name: "fa-building-ngo",
    cssRule: "fa-solid fa-building-ngo"
  }, {
    name: "fa-manat-sign",
    cssRule: "fa-solid fa-manat-sign"
  }, {
    name: "fa-not-equal",
    cssRule: "fa-solid fa-not-equal"
  }, {
    name: "fa-border-style",
    cssRule: "fa-solid fa-border-style"
  }, {
    name: "fa-map-location-dot",
    cssRule: "fa-solid fa-map-location-dot"
  }, {
    name: "fa-jedi",
    cssRule: "fa-solid fa-jedi"
  }, {
    name: "fa-poll",
    cssRule: "fa-solid fa-poll"
  }, {
    name: "fa-mug-hot",
    cssRule: "fa-solid fa-mug-hot"
  }, {
    name: "fa-battery-car",
    cssRule: "fa-solid fa-battery-car"
  }, {
    name: "fa-gift",
    cssRule: "fa-solid fa-gift"
  }, {
    name: "fa-dice-two",
    cssRule: "fa-solid fa-dice-two"
  }, {
    name: "fa-chess-queen",
    cssRule: "fa-solid fa-chess-queen"
  }, {
    name: "fa-glasses",
    cssRule: "fa-solid fa-glasses"
  }, {
    name: "fa-chess-board",
    cssRule: "fa-solid fa-chess-board"
  }, {
    name: "fa-building-circle-check",
    cssRule: "fa-solid fa-building-circle-check"
  }, {
    name: "fa-person-chalkboard",
    cssRule: "fa-solid fa-person-chalkboard"
  }, {
    name: "fa-mars-stroke-h",
    cssRule: "fa-solid fa-mars-stroke-h"
  }, {
    name: "fa-hand-back-fist",
    cssRule: "fa-solid fa-hand-back-fist"
  }, {
    name: "fa-caret-square-up",
    cssRule: "fa-solid fa-caret-square-up"
  }, {
    name: "fa-cloud-showers-water",
    cssRule: "fa-solid fa-cloud-showers-water"
  }, {
    name: "fa-bar-chart",
    cssRule: "fa-solid fa-bar-chart"
  }, {
    name: "fa-hands-bubbles",
    cssRule: "fa-solid fa-hands-bubbles"
  }, {
    name: "fa-less-than-equal",
    cssRule: "fa-solid fa-less-than-equal"
  }, {
    name: "fa-train",
    cssRule: "fa-solid fa-train"
  }, {
    name: "fa-eye-low-vision",
    cssRule: "fa-solid fa-eye-low-vision"
  }, {
    name: "fa-crow",
    cssRule: "fa-solid fa-crow"
  }, {
    name: "fa-sailboat",
    cssRule: "fa-solid fa-sailboat"
  }, {
    name: "fa-window-restore",
    cssRule: "fa-solid fa-window-restore"
  }, {
    name: "fa-plus-square",
    cssRule: "fa-solid fa-plus-square"
  }, {
    name: "fa-torii-gate",
    cssRule: "fa-solid fa-torii-gate"
  }, {
    name: "fa-frog",
    cssRule: "fa-solid fa-frog"
  }, {
    name: "fa-bucket",
    cssRule: "fa-solid fa-bucket"
  }, {
    name: "fa-image",
    cssRule: "fa-solid fa-image"
  }, {
    name: "fa-microphone",
    cssRule: "fa-solid fa-microphone"
  }, {
    name: "fa-cow",
    cssRule: "fa-solid fa-cow"
  }, {
    name: "fa-caret-up",
    cssRule: "fa-solid fa-caret-up"
  }, {
    name: "fa-screwdriver",
    cssRule: "fa-solid fa-screwdriver"
  }, {
    name: "fa-folder-closed",
    cssRule: "fa-solid fa-folder-closed"
  }, {
    name: "fa-house-tsunami",
    cssRule: "fa-solid fa-house-tsunami"
  }, {
    name: "fa-square-nfi",
    cssRule: "fa-solid fa-square-nfi"
  }, {
    name: "fa-arrow-up-from-ground-water",
    cssRule: "fa-solid fa-arrow-up-from-ground-water"
  }, {
    name: "fa-glass-martini-alt",
    cssRule: "fa-solid fa-glass-martini-alt"
  }, {
    name: "fa-square-binary",
    cssRule: "fa-solid fa-square-binary"
  }, {
    name: "fa-rotate-back",
    cssRule: "fa-solid fa-rotate-back"
  }, {
    name: "fa-columns",
    cssRule: "fa-solid fa-columns"
  }, {
    name: "fa-lemon",
    cssRule: "fa-solid fa-lemon"
  }, {
    name: "fa-head-side-mask",
    cssRule: "fa-solid fa-head-side-mask"
  }, {
    name: "fa-handshake",
    cssRule: "fa-solid fa-handshake"
  }, {
    name: "fa-gem",
    cssRule: "fa-solid fa-gem"
  }, {
    name: "fa-dolly",
    cssRule: "fa-solid fa-dolly"
  }, {
    name: "fa-smoking",
    cssRule: "fa-solid fa-smoking"
  }, {
    name: "fa-compress-arrows-alt",
    cssRule: "fa-solid fa-compress-arrows-alt"
  }, {
    name: "fa-monument",
    cssRule: "fa-solid fa-monument"
  }, {
    name: "fa-snowplow",
    cssRule: "fa-solid fa-snowplow"
  }, {
    name: "fa-angle-double-right",
    cssRule: "fa-solid fa-angle-double-right"
  }, {
    name: "fa-cannabis",
    cssRule: "fa-solid fa-cannabis"
  }, {
    name: "fa-circle-play",
    cssRule: "fa-solid fa-circle-play"
  }, {
    name: "fa-tablets",
    cssRule: "fa-solid fa-tablets"
  }, {
    name: "fa-ethernet",
    cssRule: "fa-solid fa-ethernet"
  }, {
    name: "fa-eur",
    cssRule: "fa-solid fa-eur"
  }, {
    name: "fa-chair",
    cssRule: "fa-solid fa-chair"
  }, {
    name: "fa-check-circle",
    cssRule: "fa-solid fa-check-circle"
  }, {
    name: "fa-circle-stop",
    cssRule: "fa-solid fa-circle-stop"
  }, {
    name: "fa-compass-drafting",
    cssRule: "fa-solid fa-compass-drafting"
  }, {
    name: "fa-plate-wheat",
    cssRule: "fa-solid fa-plate-wheat"
  }, {
    name: "fa-icicles",
    cssRule: "fa-solid fa-icicles"
  }, {
    name: "fa-person-shelter",
    cssRule: "fa-solid fa-person-shelter"
  }, {
    name: "fa-neuter",
    cssRule: "fa-solid fa-neuter"
  }, {
    name: "fa-id-badge",
    cssRule: "fa-solid fa-id-badge"
  }, {
    name: "fa-marker",
    cssRule: "fa-solid fa-marker"
  }, {
    name: "fa-face-laugh-beam",
    cssRule: "fa-solid fa-face-laugh-beam"
  }, {
    name: "fa-helicopter-symbol",
    cssRule: "fa-solid fa-helicopter-symbol"
  }, {
    name: "fa-universal-access",
    cssRule: "fa-solid fa-universal-access"
  }, {
    name: "fa-chevron-circle-up",
    cssRule: "fa-solid fa-chevron-circle-up"
  }, {
    name: "fa-lari-sign",
    cssRule: "fa-solid fa-lari-sign"
  }, {
    name: "fa-volcano",
    cssRule: "fa-solid fa-volcano"
  }, {
    name: "fa-person-walking-dashed-line-arrow-right",
    cssRule: "fa-solid fa-person-walking-dashed-line-arrow-right"
  }, {
    name: "fa-gbp",
    cssRule: "fa-solid fa-gbp"
  }, {
    name: "fa-viruses",
    cssRule: "fa-solid fa-viruses"
  }, {
    name: "fa-square-person-confined",
    cssRule: "fa-solid fa-square-person-confined"
  }, {
    name: "fa-user-tie",
    cssRule: "fa-solid fa-user-tie"
  }, {
    name: "fa-arrow-down-long",
    cssRule: "fa-solid fa-arrow-down-long"
  }, {
    name: "fa-tent-arrow-down-to-line",
    cssRule: "fa-solid fa-tent-arrow-down-to-line"
  }, {
    name: "fa-certificate",
    cssRule: "fa-solid fa-certificate"
  }, {
    name: "fa-mail-reply-all",
    cssRule: "fa-solid fa-mail-reply-all"
  }, {
    name: "fa-suitcase",
    cssRule: "fa-solid fa-suitcase"
  }, {
    name: "fa-person-skating",
    cssRule: "fa-solid fa-person-skating"
  }, {
    name: "fa-filter-circle-dollar",
    cssRule: "fa-solid fa-filter-circle-dollar"
  }, {
    name: "fa-camera-retro",
    cssRule: "fa-solid fa-camera-retro"
  }, {
    name: "fa-arrow-circle-down",
    cssRule: "fa-solid fa-arrow-circle-down"
  }, {
    name: "fa-arrow-right-to-file",
    cssRule: "fa-solid fa-arrow-right-to-file"
  }, {
    name: "fa-external-link-square",
    cssRule: "fa-solid fa-external-link-square"
  }, {
    name: "fa-box-open",
    cssRule: "fa-solid fa-box-open"
  }, {
    name: "fa-scroll",
    cssRule: "fa-solid fa-scroll"
  }, {
    name: "fa-spa",
    cssRule: "fa-solid fa-spa"
  }, {
    name: "fa-location-pin-lock",
    cssRule: "fa-solid fa-location-pin-lock"
  }, {
    name: "fa-pause",
    cssRule: "fa-solid fa-pause"
  }, {
    name: "fa-hill-avalanche",
    cssRule: "fa-solid fa-hill-avalanche"
  }, {
    name: "fa-temperature-0",
    cssRule: "fa-solid fa-temperature-0"
  }, {
    name: "fa-bomb",
    cssRule: "fa-solid fa-bomb"
  }, {
    name: "fa-registered",
    cssRule: "fa-solid fa-registered"
  }, {
    name: "fa-address-card",
    cssRule: "fa-solid fa-address-card"
  }, {
    name: "fa-balance-scale-right",
    cssRule: "fa-solid fa-balance-scale-right"
  }, {
    name: "fa-subscript",
    cssRule: "fa-solid fa-subscript"
  }, {
    name: "fa-diamond-turn-right",
    cssRule: "fa-solid fa-diamond-turn-right"
  }, {
    name: "fa-burst",
    cssRule: "fa-solid fa-burst"
  }, {
    name: "fa-house-laptop",
    cssRule: "fa-solid fa-house-laptop"
  }, {
    name: "fa-face-tired",
    cssRule: "fa-solid fa-face-tired"
  }, {
    name: "fa-money-bills",
    cssRule: "fa-solid fa-money-bills"
  }, {
    name: "fa-smog",
    cssRule: "fa-solid fa-smog"
  }, {
    name: "fa-crutch",
    cssRule: "fa-solid fa-crutch"
  }, {
    name: "fa-cloud-arrow-up",
    cssRule: "fa-solid fa-cloud-arrow-up"
  }, {
    name: "fa-palette",
    cssRule: "fa-solid fa-palette"
  }, {
    name: "fa-arrows-turn-right",
    cssRule: "fa-solid fa-arrows-turn-right"
  }, {
    name: "fa-vest",
    cssRule: "fa-solid fa-vest"
  }, {
    name: "fa-ferry",
    cssRule: "fa-solid fa-ferry"
  }, {
    name: "fa-arrows-down-to-people",
    cssRule: "fa-solid fa-arrows-down-to-people"
  }, {
    name: "fa-seedling",
    cssRule: "fa-solid fa-seedling"
  }, {
    name: "fa-arrows-alt-h",
    cssRule: "fa-solid fa-arrows-alt-h"
  }, {
    name: "fa-boxes-packing",
    cssRule: "fa-solid fa-boxes-packing"
  }, {
    name: "fa-arrow-circle-left",
    cssRule: "fa-solid fa-arrow-circle-left"
  }, {
    name: "fa-group-arrows-rotate",
    cssRule: "fa-solid fa-group-arrows-rotate"
  }, {
    name: "fa-bowl-food",
    cssRule: "fa-solid fa-bowl-food"
  }, {
    name: "fa-candy-cane",
    cssRule: "fa-solid fa-candy-cane"
  }, {
    name: "fa-arrow-down-wide-short",
    cssRule: "fa-solid fa-arrow-down-wide-short"
  }, {
    name: "fa-cloud-bolt",
    cssRule: "fa-solid fa-cloud-bolt"
  }, {
    name: "fa-remove-format",
    cssRule: "fa-solid fa-remove-format"
  }, {
    name: "fa-face-smile-wink",
    cssRule: "fa-solid fa-face-smile-wink"
  }, {
    name: "fa-file-word",
    cssRule: "fa-solid fa-file-word"
  }, {
    name: "fa-file-powerpoint",
    cssRule: "fa-solid fa-file-powerpoint"
  }, {
    name: "fa-arrows-h",
    cssRule: "fa-solid fa-arrows-h"
  }, {
    name: "fa-house-lock",
    cssRule: "fa-solid fa-house-lock"
  }, {
    name: "fa-cloud-arrow-down",
    cssRule: "fa-solid fa-cloud-arrow-down"
  }, {
    name: "fa-children",
    cssRule: "fa-solid fa-children"
  }, {
    name: "fa-blackboard",
    cssRule: "fa-solid fa-blackboard"
  }, {
    name: "fa-user-alt-slash",
    cssRule: "fa-solid fa-user-alt-slash"
  }, {
    name: "fa-envelope-open",
    cssRule: "fa-solid fa-envelope-open"
  }, {
    name: "fa-handshake-alt-slash",
    cssRule: "fa-solid fa-handshake-alt-slash"
  }, {
    name: "fa-mattress-pillow",
    cssRule: "fa-solid fa-mattress-pillow"
  }, {
    name: "fa-guarani-sign",
    cssRule: "fa-solid fa-guarani-sign"
  }, {
    name: "fa-arrows-rotate",
    cssRule: "fa-solid fa-arrows-rotate"
  }, {
    name: "fa-fire-extinguisher",
    cssRule: "fa-solid fa-fire-extinguisher"
  }, {
    name: "fa-cruzeiro-sign",
    cssRule: "fa-solid fa-cruzeiro-sign"
  }, {
    name: "fa-greater-than-equal",
    cssRule: "fa-solid fa-greater-than-equal"
  }, {
    name: "fa-shield-alt",
    cssRule: "fa-solid fa-shield-alt"
  }, {
    name: "fa-atlas",
    cssRule: "fa-solid fa-atlas"
  }, {
    name: "fa-virus",
    cssRule: "fa-solid fa-virus"
  }, {
    name: "fa-envelope-circle-check",
    cssRule: "fa-solid fa-envelope-circle-check"
  }, {
    name: "fa-layer-group",
    cssRule: "fa-solid fa-layer-group"
  }, {
    name: "fa-arrows-to-dot",
    cssRule: "fa-solid fa-arrows-to-dot"
  }, {
    name: "fa-archway",
    cssRule: "fa-solid fa-archway"
  }, {
    name: "fa-heart-circle-check",
    cssRule: "fa-solid fa-heart-circle-check"
  }, {
    name: "fa-house-chimney-crack",
    cssRule: "fa-solid fa-house-chimney-crack"
  }, {
    name: "fa-file-archive",
    cssRule: "fa-solid fa-file-archive"
  }, {
    name: "fa-square",
    cssRule: "fa-solid fa-square"
  }, {
    name: "fa-glass-martini",
    cssRule: "fa-solid fa-glass-martini"
  }, {
    name: "fa-couch",
    cssRule: "fa-solid fa-couch"
  }, {
    name: "fa-cedi-sign",
    cssRule: "fa-solid fa-cedi-sign"
  }, {
    name: "fa-italic",
    cssRule: "fa-solid fa-italic"
  }, {
    name: "fa-table-cells-column-lock",
    cssRule: "fa-solid fa-table-cells-column-lock"
  }, {
    name: "fa-church",
    cssRule: "fa-solid fa-church"
  }, {
    name: "fa-comments-dollar",
    cssRule: "fa-solid fa-comments-dollar"
  }, {
    name: "fa-democrat",
    cssRule: "fa-solid fa-democrat"
  }, {
    name: "fa-z",
    cssRule: "fa-solid fa-z"
  }, {
    name: "fa-person-skiing",
    cssRule: "fa-solid fa-person-skiing"
  }, {
    name: "fa-road-lock",
    cssRule: "fa-solid fa-road-lock"
  }, {
    name: "fa-a",
    cssRule: "fa-solid fa-a"
  }, {
    name: "fa-temperature-arrow-down",
    cssRule: "fa-solid fa-temperature-arrow-down"
  }, {
    name: "fa-feather-alt",
    cssRule: "fa-solid fa-feather-alt"
  }, {
    name: "fa-p",
    cssRule: "fa-solid fa-p"
  }, {
    name: "fa-snowflake",
    cssRule: "fa-solid fa-snowflake"
  }, {
    name: "fa-newspaper",
    cssRule: "fa-solid fa-newspaper"
  }, {
    name: "fa-ad",
    cssRule: "fa-solid fa-ad"
  }, {
    name: "fa-arrow-circle-right",
    cssRule: "fa-solid fa-arrow-circle-right"
  }, {
    name: "fa-filter-circle-xmark",
    cssRule: "fa-solid fa-filter-circle-xmark"
  }, {
    name: "fa-locust",
    cssRule: "fa-solid fa-locust"
  }, {
    name: "fa-sort",
    cssRule: "fa-solid fa-sort"
  }, {
    name: "fa-list-1-2",
    cssRule: "fa-solid fa-list-1-2"
  }, {
    name: "fa-person-dress-burst",
    cssRule: "fa-solid fa-person-dress-burst"
  }, {
    name: "fa-money-check-alt",
    cssRule: "fa-solid fa-money-check-alt"
  }, {
    name: "fa-vector-square",
    cssRule: "fa-solid fa-vector-square"
  }, {
    name: "fa-bread-slice",
    cssRule: "fa-solid fa-bread-slice"
  }, {
    name: "fa-language",
    cssRule: "fa-solid fa-language"
  }, {
    name: "fa-face-kiss-wink-heart",
    cssRule: "fa-solid fa-face-kiss-wink-heart"
  }, {
    name: "fa-filter",
    cssRule: "fa-solid fa-filter"
  }, {
    name: "fa-question",
    cssRule: "fa-solid fa-question"
  }, {
    name: "fa-file-signature",
    cssRule: "fa-solid fa-file-signature"
  }, {
    name: "fa-arrows-alt",
    cssRule: "fa-solid fa-arrows-alt"
  }, {
    name: "fa-house-chimney-user",
    cssRule: "fa-solid fa-house-chimney-user"
  }, {
    name: "fa-hand-holding-heart",
    cssRule: "fa-solid fa-hand-holding-heart"
  }, {
    name: "fa-puzzle-piece",
    cssRule: "fa-solid fa-puzzle-piece"
  }, {
    name: "fa-money-check",
    cssRule: "fa-solid fa-money-check"
  }, {
    name: "fa-star-half-alt",
    cssRule: "fa-solid fa-star-half-alt"
  }, {
    name: "fa-code",
    cssRule: "fa-solid fa-code"
  }, {
    name: "fa-glass-whiskey",
    cssRule: "fa-solid fa-glass-whiskey"
  }, {
    name: "fa-building-circle-exclamation",
    cssRule: "fa-solid fa-building-circle-exclamation"
  }, {
    name: "fa-magnifying-glass-chart",
    cssRule: "fa-solid fa-magnifying-glass-chart"
  }, {
    name: "fa-arrow-up-right-from-square",
    cssRule: "fa-solid fa-arrow-up-right-from-square"
  }, {
    name: "fa-cubes-stacked",
    cssRule: "fa-solid fa-cubes-stacked"
  }, {
    name: "fa-krw",
    cssRule: "fa-solid fa-krw"
  }, {
    name: "fa-virus-covid",
    cssRule: "fa-solid fa-virus-covid"
  }, {
    name: "fa-austral-sign",
    cssRule: "fa-solid fa-austral-sign"
  }, {
    name: "fa-f",
    cssRule: "fa-solid fa-f"
  }, {
    name: "fa-leaf",
    cssRule: "fa-solid fa-leaf"
  }, {
    name: "fa-road",
    cssRule: "fa-solid fa-road"
  }, {
    name: "fa-cab",
    cssRule: "fa-solid fa-cab"
  }, {
    name: "fa-person-circle-plus",
    cssRule: "fa-solid fa-person-circle-plus"
  }, {
    name: "fa-chart-pie",
    cssRule: "fa-solid fa-chart-pie"
  }, {
    name: "fa-bolt-lightning",
    cssRule: "fa-solid fa-bolt-lightning"
  }, {
    name: "fa-sack-xmark",
    cssRule: "fa-solid fa-sack-xmark"
  }, {
    name: "fa-file-excel",
    cssRule: "fa-solid fa-file-excel"
  }, {
    name: "fa-file-contract",
    cssRule: "fa-solid fa-file-contract"
  }, {
    name: "fa-fish-fins",
    cssRule: "fa-solid fa-fish-fins"
  }, {
    name: "fa-building-flag",
    cssRule: "fa-solid fa-building-flag"
  }, {
    name: "fa-face-grin-beam",
    cssRule: "fa-solid fa-face-grin-beam"
  }, {
    name: "fa-object-ungroup",
    cssRule: "fa-solid fa-object-ungroup"
  }, {
    name: "fa-poop",
    cssRule: "fa-solid fa-poop"
  }, {
    name: "fa-location-pin",
    cssRule: "fa-solid fa-location-pin"
  }, {
    name: "fa-kaaba",
    cssRule: "fa-solid fa-kaaba"
  }, {
    name: "fa-toilet-paper",
    cssRule: "fa-solid fa-toilet-paper"
  }, {
    name: "fa-hard-hat",
    cssRule: "fa-solid fa-hard-hat"
  }, {
    name: "fa-eject",
    cssRule: "fa-solid fa-eject"
  }, {
    name: "fa-arrow-alt-circle-right",
    cssRule: "fa-solid fa-arrow-alt-circle-right"
  }, {
    name: "fa-plane-circle-check",
    cssRule: "fa-solid fa-plane-circle-check"
  }, {
    name: "fa-face-rolling-eyes",
    cssRule: "fa-solid fa-face-rolling-eyes"
  }, {
    name: "fa-object-group",
    cssRule: "fa-solid fa-object-group"
  }, {
    name: "fa-chart-line",
    cssRule: "fa-solid fa-chart-line"
  }, {
    name: "fa-mask-ventilator",
    cssRule: "fa-solid fa-mask-ventilator"
  }, {
    name: "fa-arrow-right",
    cssRule: "fa-solid fa-arrow-right"
  }, {
    name: "fa-map-signs",
    cssRule: "fa-solid fa-map-signs"
  }, {
    name: "fa-cash-register",
    cssRule: "fa-solid fa-cash-register"
  }, {
    name: "fa-person-circle-question",
    cssRule: "fa-solid fa-person-circle-question"
  }, {
    name: "fa-h",
    cssRule: "fa-solid fa-h"
  }, {
    name: "fa-tarp",
    cssRule: "fa-solid fa-tarp"
  }, {
    name: "fa-screwdriver-wrench",
    cssRule: "fa-solid fa-screwdriver-wrench"
  }, {
    name: "fa-arrows-to-eye",
    cssRule: "fa-solid fa-arrows-to-eye"
  }, {
    name: "fa-plug-circle-bolt",
    cssRule: "fa-solid fa-plug-circle-bolt"
  }, {
    name: "fa-heart",
    cssRule: "fa-solid fa-heart"
  }, {
    name: "fa-mars-and-venus",
    cssRule: "fa-solid fa-mars-and-venus"
  }, {
    name: "fa-home-user",
    cssRule: "fa-solid fa-home-user"
  }, {
    name: "fa-dumpster-fire",
    cssRule: "fa-solid fa-dumpster-fire"
  }, {
    name: "fa-house-crack",
    cssRule: "fa-solid fa-house-crack"
  }, {
    name: "fa-cocktail",
    cssRule: "fa-solid fa-cocktail"
  }, {
    name: "fa-face-surprise",
    cssRule: "fa-solid fa-face-surprise"
  }, {
    name: "fa-bottle-water",
    cssRule: "fa-solid fa-bottle-water"
  }, {
    name: "fa-circle-pause",
    cssRule: "fa-solid fa-circle-pause"
  }, {
    name: "fa-toilet-paper-slash",
    cssRule: "fa-solid fa-toilet-paper-slash"
  }, {
    name: "fa-apple-alt",
    cssRule: "fa-solid fa-apple-alt"
  }, {
    name: "fa-kitchen-set",
    cssRule: "fa-solid fa-kitchen-set"
  }, {
    name: "fa-r",
    cssRule: "fa-solid fa-r"
  }, {
    name: "fa-temperature-1",
    cssRule: "fa-solid fa-temperature-1"
  }, {
    name: "fa-cube",
    cssRule: "fa-solid fa-cube"
  }, {
    name: "fa-bitcoin-sign",
    cssRule: "fa-solid fa-bitcoin-sign"
  }, {
    name: "fa-shield-dog",
    cssRule: "fa-solid fa-shield-dog"
  }, {
    name: "fa-solar-panel",
    cssRule: "fa-solid fa-solar-panel"
  }, {
    name: "fa-lock-open",
    cssRule: "fa-solid fa-lock-open"
  }, {
    name: "fa-elevator",
    cssRule: "fa-solid fa-elevator"
  }, {
    name: "fa-money-bill-transfer",
    cssRule: "fa-solid fa-money-bill-transfer"
  }, {
    name: "fa-money-bill-trend-up",
    cssRule: "fa-solid fa-money-bill-trend-up"
  }, {
    name: "fa-house-flood-water-circle-arrow-right",
    cssRule: "fa-solid fa-house-flood-water-circle-arrow-right"
  }, {
    name: "fa-poll-h",
    cssRule: "fa-solid fa-poll-h"
  }, {
    name: "fa-circle",
    cssRule: "fa-solid fa-circle"
  }, {
    name: "fa-backward-fast",
    cssRule: "fa-solid fa-backward-fast"
  }, {
    name: "fa-recycle",
    cssRule: "fa-solid fa-recycle"
  }, {
    name: "fa-user-astronaut",
    cssRule: "fa-solid fa-user-astronaut"
  }, {
    name: "fa-plane-slash",
    cssRule: "fa-solid fa-plane-slash"
  }, {
    name: "fa-trademark",
    cssRule: "fa-solid fa-trademark"
  }, {
    name: "fa-basketball",
    cssRule: "fa-solid fa-basketball"
  }, {
    name: "fa-satellite-dish",
    cssRule: "fa-solid fa-satellite-dish"
  }, {
    name: "fa-arrow-alt-circle-up",
    cssRule: "fa-solid fa-arrow-alt-circle-up"
  }, {
    name: "fa-mobile-alt",
    cssRule: "fa-solid fa-mobile-alt"
  }, {
    name: "fa-volume-high",
    cssRule: "fa-solid fa-volume-high"
  }, {
    name: "fa-users-rays",
    cssRule: "fa-solid fa-users-rays"
  }, {
    name: "fa-wallet",
    cssRule: "fa-solid fa-wallet"
  }, {
    name: "fa-clipboard-check",
    cssRule: "fa-solid fa-clipboard-check"
  }, {
    name: "fa-file-audio",
    cssRule: "fa-solid fa-file-audio"
  }, {
    name: "fa-burger",
    cssRule: "fa-solid fa-burger"
  }, {
    name: "fa-wrench",
    cssRule: "fa-solid fa-wrench"
  }, {
    name: "fa-bugs",
    cssRule: "fa-solid fa-bugs"
  }, {
    name: "fa-rupee",
    cssRule: "fa-solid fa-rupee"
  }, {
    name: "fa-file-image",
    cssRule: "fa-solid fa-file-image"
  }, {
    name: "fa-circle-question",
    cssRule: "fa-solid fa-circle-question"
  }, {
    name: "fa-plane-departure",
    cssRule: "fa-solid fa-plane-departure"
  }, {
    name: "fa-handshake-slash",
    cssRule: "fa-solid fa-handshake-slash"
  }, {
    name: "fa-book-bookmark",
    cssRule: "fa-solid fa-book-bookmark"
  }, {
    name: "fa-code-branch",
    cssRule: "fa-solid fa-code-branch"
  }, {
    name: "fa-hat-cowboy",
    cssRule: "fa-solid fa-hat-cowboy"
  }, {
    name: "fa-bridge",
    cssRule: "fa-solid fa-bridge"
  }, {
    name: "fa-phone-alt",
    cssRule: "fa-solid fa-phone-alt"
  }, {
    name: "fa-truck-front",
    cssRule: "fa-solid fa-truck-front"
  }, {
    name: "fa-cat",
    cssRule: "fa-solid fa-cat"
  }, {
    name: "fa-anchor-circle-exclamation",
    cssRule: "fa-solid fa-anchor-circle-exclamation"
  }, {
    name: "fa-truck-field",
    cssRule: "fa-solid fa-truck-field"
  }, {
    name: "fa-route",
    cssRule: "fa-solid fa-route"
  }, {
    name: "fa-clipboard-question",
    cssRule: "fa-solid fa-clipboard-question"
  }, {
    name: "fa-panorama",
    cssRule: "fa-solid fa-panorama"
  }, {
    name: "fa-comment-medical",
    cssRule: "fa-solid fa-comment-medical"
  }, {
    name: "fa-teeth-open",
    cssRule: "fa-solid fa-teeth-open"
  }, {
    name: "fa-file-circle-minus",
    cssRule: "fa-solid fa-file-circle-minus"
  }, {
    name: "fa-tags",
    cssRule: "fa-solid fa-tags"
  }, {
    name: "fa-wine-glass",
    cssRule: "fa-solid fa-wine-glass"
  }, {
    name: "fa-fast-forward",
    cssRule: "fa-solid fa-fast-forward"
  }, {
    name: "fa-face-meh-blank",
    cssRule: "fa-solid fa-face-meh-blank"
  }, {
    name: "fa-parking",
    cssRule: "fa-solid fa-parking"
  }, {
    name: "fa-house-signal",
    cssRule: "fa-solid fa-house-signal"
  }, {
    name: "fa-bars-progress",
    cssRule: "fa-solid fa-bars-progress"
  }, {
    name: "fa-faucet-drip",
    cssRule: "fa-solid fa-faucet-drip"
  }, {
    name: "fa-cart-flatbed",
    cssRule: "fa-solid fa-cart-flatbed"
  }, {
    name: "fa-ban-smoking",
    cssRule: "fa-solid fa-ban-smoking"
  }, {
    name: "fa-terminal",
    cssRule: "fa-solid fa-terminal"
  }, {
    name: "fa-mobile-button",
    cssRule: "fa-solid fa-mobile-button"
  }, {
    name: "fa-house-medical-flag",
    cssRule: "fa-solid fa-house-medical-flag"
  }, {
    name: "fa-basket-shopping",
    cssRule: "fa-solid fa-basket-shopping"
  }, {
    name: "fa-tape",
    cssRule: "fa-solid fa-tape"
  }, {
    name: "fa-bus-alt",
    cssRule: "fa-solid fa-bus-alt"
  }, {
    name: "fa-eye",
    cssRule: "fa-solid fa-eye"
  }, {
    name: "fa-face-sad-cry",
    cssRule: "fa-solid fa-face-sad-cry"
  }, {
    name: "fa-audio-description",
    cssRule: "fa-solid fa-audio-description"
  }, {
    name: "fa-person-military-to-person",
    cssRule: "fa-solid fa-person-military-to-person"
  }, {
    name: "fa-file-shield",
    cssRule: "fa-solid fa-file-shield"
  }, {
    name: "fa-user-slash",
    cssRule: "fa-solid fa-user-slash"
  }, {
    name: "fa-pen",
    cssRule: "fa-solid fa-pen"
  }, {
    name: "fa-tower-observation",
    cssRule: "fa-solid fa-tower-observation"
  }, {
    name: "fa-file-code",
    cssRule: "fa-solid fa-file-code"
  }, {
    name: "fa-signal",
    cssRule: "fa-solid fa-signal"
  }, {
    name: "fa-bus",
    cssRule: "fa-solid fa-bus"
  }, {
    name: "fa-heart-circle-xmark",
    cssRule: "fa-solid fa-heart-circle-xmark"
  }, {
    name: "fa-home-lg",
    cssRule: "fa-solid fa-home-lg"
  }, {
    name: "fa-window-maximize",
    cssRule: "fa-solid fa-window-maximize"
  }, {
    name: "fa-face-frown",
    cssRule: "fa-solid fa-face-frown"
  }, {
    name: "fa-prescription",
    cssRule: "fa-solid fa-prescription"
  }, {
    name: "fa-shop",
    cssRule: "fa-solid fa-shop"
  }, {
    name: "fa-floppy-disk",
    cssRule: "fa-solid fa-floppy-disk"
  }, {
    name: "fa-vihara",
    cssRule: "fa-solid fa-vihara"
  }, {
    name: "fa-balance-scale-left",
    cssRule: "fa-solid fa-balance-scale-left"
  }, {
    name: "fa-sort-asc",
    cssRule: "fa-solid fa-sort-asc"
  }, {
    name: "fa-comment-dots",
    cssRule: "fa-solid fa-comment-dots"
  }, {
    name: "fa-plant-wilt",
    cssRule: "fa-solid fa-plant-wilt"
  }, {
    name: "fa-diamond",
    cssRule: "fa-solid fa-diamond"
  }, {
    name: "fa-face-grin-squint",
    cssRule: "fa-solid fa-face-grin-squint"
  }, {
    name: "fa-hand-holding-dollar",
    cssRule: "fa-solid fa-hand-holding-dollar"
  }, {
    name: "fa-chart-diagram",
    cssRule: "fa-solid fa-chart-diagram"
  }, {
    name: "fa-bacterium",
    cssRule: "fa-solid fa-bacterium"
  }, {
    name: "fa-hand-pointer",
    cssRule: "fa-solid fa-hand-pointer"
  }, {
    name: "fa-drum-steelpan",
    cssRule: "fa-solid fa-drum-steelpan"
  }, {
    name: "fa-hand-scissors",
    cssRule: "fa-solid fa-hand-scissors"
  }, {
    name: "fa-hands-praying",
    cssRule: "fa-solid fa-hands-praying"
  }, {
    name: "fa-arrow-right-rotate",
    cssRule: "fa-solid fa-arrow-right-rotate"
  }, {
    name: "fa-biohazard",
    cssRule: "fa-solid fa-biohazard"
  }, {
    name: "fa-location",
    cssRule: "fa-solid fa-location"
  }, {
    name: "fa-mars-double",
    cssRule: "fa-solid fa-mars-double"
  }, {
    name: "fa-child-dress",
    cssRule: "fa-solid fa-child-dress"
  }, {
    name: "fa-users-between-lines",
    cssRule: "fa-solid fa-users-between-lines"
  }, {
    name: "fa-lungs-virus",
    cssRule: "fa-solid fa-lungs-virus"
  }, {
    name: "fa-face-grin-tears",
    cssRule: "fa-solid fa-face-grin-tears"
  }, {
    name: "fa-phone",
    cssRule: "fa-solid fa-phone"
  }, {
    name: "fa-calendar-times",
    cssRule: "fa-solid fa-calendar-times"
  }, {
    name: "fa-child-reaching",
    cssRule: "fa-solid fa-child-reaching"
  }, {
    name: "fa-head-side-virus",
    cssRule: "fa-solid fa-head-side-virus"
  }, {
    name: "fa-user-cog",
    cssRule: "fa-solid fa-user-cog"
  }, {
    name: "fa-arrow-up-1-9",
    cssRule: "fa-solid fa-arrow-up-1-9"
  }, {
    name: "fa-door-closed",
    cssRule: "fa-solid fa-door-closed"
  }, {
    name: "fa-shield-virus",
    cssRule: "fa-solid fa-shield-virus"
  }, {
    name: "fa-dice-six",
    cssRule: "fa-solid fa-dice-six"
  }, {
    name: "fa-mosquito-net",
    cssRule: "fa-solid fa-mosquito-net"
  }, {
    name: "fa-file-fragment",
    cssRule: "fa-solid fa-file-fragment"
  }, {
    name: "fa-bridge-water",
    cssRule: "fa-solid fa-bridge-water"
  }, {
    name: "fa-person-booth",
    cssRule: "fa-solid fa-person-booth"
  }, {
    name: "fa-text-width",
    cssRule: "fa-solid fa-text-width"
  }, {
    name: "fa-hat-wizard",
    cssRule: "fa-solid fa-hat-wizard"
  }, {
    name: "fa-pen-fancy",
    cssRule: "fa-solid fa-pen-fancy"
  }, {
    name: "fa-digging",
    cssRule: "fa-solid fa-digging"
  }, {
    name: "fa-trash",
    cssRule: "fa-solid fa-trash"
  }, {
    name: "fa-gauge-simple",
    cssRule: "fa-solid fa-gauge-simple"
  }, {
    name: "fa-book-medical",
    cssRule: "fa-solid fa-book-medical"
  }, {
    name: "fa-poo",
    cssRule: "fa-solid fa-poo"
  }, {
    name: "fa-quote-right",
    cssRule: "fa-solid fa-quote-right"
  }, {
    name: "fa-shirt",
    cssRule: "fa-solid fa-shirt"
  }, {
    name: "fa-cubes",
    cssRule: "fa-solid fa-cubes"
  }, {
    name: "fa-divide",
    cssRule: "fa-solid fa-divide"
  }, {
    name: "fa-tenge",
    cssRule: "fa-solid fa-tenge"
  }, {
    name: "fa-headphones",
    cssRule: "fa-solid fa-headphones"
  }, {
    name: "fa-hands-holding",
    cssRule: "fa-solid fa-hands-holding"
  }, {
    name: "fa-hands-clapping",
    cssRule: "fa-solid fa-hands-clapping"
  }, {
    name: "fa-republican",
    cssRule: "fa-solid fa-republican"
  }, {
    name: "fa-arrow-left",
    cssRule: "fa-solid fa-arrow-left"
  }, {
    name: "fa-person-circle-xmark",
    cssRule: "fa-solid fa-person-circle-xmark"
  }, {
    name: "fa-ruler",
    cssRule: "fa-solid fa-ruler"
  }, {
    name: "fa-align-left",
    cssRule: "fa-solid fa-align-left"
  }, {
    name: "fa-dice-d6",
    cssRule: "fa-solid fa-dice-d6"
  }, {
    name: "fa-restroom",
    cssRule: "fa-solid fa-restroom"
  }, {
    name: "fa-j",
    cssRule: "fa-solid fa-j"
  }, {
    name: "fa-users-viewfinder",
    cssRule: "fa-solid fa-users-viewfinder"
  }, {
    name: "fa-file-video",
    cssRule: "fa-solid fa-file-video"
  }, {
    name: "fa-external-link-alt",
    cssRule: "fa-solid fa-external-link-alt"
  }, {
    name: "fa-table-cells",
    cssRule: "fa-solid fa-table-cells"
  }, {
    name: "fa-file-pdf",
    cssRule: "fa-solid fa-file-pdf"
  }, {
    name: "fa-bible",
    cssRule: "fa-solid fa-bible"
  }, {
    name: "fa-o",
    cssRule: "fa-solid fa-o"
  }, {
    name: "fa-medkit",
    cssRule: "fa-solid fa-medkit"
  }, {
    name: "fa-user-secret",
    cssRule: "fa-solid fa-user-secret"
  }, {
    name: "fa-otter",
    cssRule: "fa-solid fa-otter"
  }, {
    name: "fa-female",
    cssRule: "fa-solid fa-female"
  }, {
    name: "fa-comment-dollar",
    cssRule: "fa-solid fa-comment-dollar"
  }, {
    name: "fa-briefcase-clock",
    cssRule: "fa-solid fa-briefcase-clock"
  }, {
    name: "fa-table-cells-large",
    cssRule: "fa-solid fa-table-cells-large"
  }, {
    name: "fa-book-tanakh",
    cssRule: "fa-solid fa-book-tanakh"
  }, {
    name: "fa-phone-volume",
    cssRule: "fa-solid fa-phone-volume"
  }, {
    name: "fa-hat-cowboy-side",
    cssRule: "fa-solid fa-hat-cowboy-side"
  }, {
    name: "fa-clipboard-user",
    cssRule: "fa-solid fa-clipboard-user"
  }, {
    name: "fa-child",
    cssRule: "fa-solid fa-child"
  }, {
    name: "fa-lira-sign",
    cssRule: "fa-solid fa-lira-sign"
  }, {
    name: "fa-satellite",
    cssRule: "fa-solid fa-satellite"
  }, {
    name: "fa-plane-lock",
    cssRule: "fa-solid fa-plane-lock"
  }, {
    name: "fa-tag",
    cssRule: "fa-solid fa-tag"
  }, {
    name: "fa-comment",
    cssRule: "fa-solid fa-comment"
  }, {
    name: "fa-birthday-cake",
    cssRule: "fa-solid fa-birthday-cake"
  }, {
    name: "fa-envelope",
    cssRule: "fa-solid fa-envelope"
  }, {
    name: "fa-angle-double-up",
    cssRule: "fa-solid fa-angle-double-up"
  }, {
    name: "fa-paperclip",
    cssRule: "fa-solid fa-paperclip"
  }, {
    name: "fa-arrow-right-to-city",
    cssRule: "fa-solid fa-arrow-right-to-city"
  }, {
    name: "fa-ribbon",
    cssRule: "fa-solid fa-ribbon"
  }, {
    name: "fa-lungs",
    cssRule: "fa-solid fa-lungs"
  }, {
    name: "fa-arrow-up-9-1",
    cssRule: "fa-solid fa-arrow-up-9-1"
  }, {
    name: "fa-litecoin-sign",
    cssRule: "fa-solid fa-litecoin-sign"
  }, {
    name: "fa-border-none",
    cssRule: "fa-solid fa-border-none"
  }, {
    name: "fa-circle-nodes",
    cssRule: "fa-solid fa-circle-nodes"
  }, {
    name: "fa-parachute-box",
    cssRule: "fa-solid fa-parachute-box"
  }, {
    name: "fa-indent",
    cssRule: "fa-solid fa-indent"
  }, {
    name: "fa-truck-field-un",
    cssRule: "fa-solid fa-truck-field-un"
  }, {
    name: "fa-hourglass",
    cssRule: "fa-solid fa-hourglass"
  }, {
    name: "fa-mountain",
    cssRule: "fa-solid fa-mountain"
  }, {
    name: "fa-user-doctor",
    cssRule: "fa-solid fa-user-doctor"
  }, {
    name: "fa-circle-info",
    cssRule: "fa-solid fa-circle-info"
  }, {
    name: "fa-cloud-meatball",
    cssRule: "fa-solid fa-cloud-meatball"
  }, {
    name: "fa-camera",
    cssRule: "fa-solid fa-camera"
  }, {
    name: "fa-square-virus",
    cssRule: "fa-solid fa-square-virus"
  }, {
    name: "fa-meteor",
    cssRule: "fa-solid fa-meteor"
  }, {
    name: "fa-car-on",
    cssRule: "fa-solid fa-car-on"
  }, {
    name: "fa-sleigh",
    cssRule: "fa-solid fa-sleigh"
  }, {
    name: "fa-arrow-down-1-9",
    cssRule: "fa-solid fa-arrow-down-1-9"
  }, {
    name: "fa-hand-holding-droplet",
    cssRule: "fa-solid fa-hand-holding-droplet"
  }, {
    name: "fa-water",
    cssRule: "fa-solid fa-water"
  }, {
    name: "fa-calendar-check",
    cssRule: "fa-solid fa-calendar-check"
  }, {
    name: "fa-braille",
    cssRule: "fa-solid fa-braille"
  }, {
    name: "fa-prescription-bottle-alt",
    cssRule: "fa-solid fa-prescription-bottle-alt"
  }, {
    name: "fa-landmark",
    cssRule: "fa-solid fa-landmark"
  }, {
    name: "fa-truck",
    cssRule: "fa-solid fa-truck"
  }, {
    name: "fa-crosshairs",
    cssRule: "fa-solid fa-crosshairs"
  }, {
    name: "fa-person-cane",
    cssRule: "fa-solid fa-person-cane"
  }, {
    name: "fa-tent",
    cssRule: "fa-solid fa-tent"
  }, {
    name: "fa-vest-patches",
    cssRule: "fa-solid fa-vest-patches"
  }, {
    name: "fa-check-double",
    cssRule: "fa-solid fa-check-double"
  }, {
    name: "fa-arrow-down-a-z",
    cssRule: "fa-solid fa-arrow-down-a-z"
  }, {
    name: "fa-money-bill-wheat",
    cssRule: "fa-solid fa-money-bill-wheat"
  }, {
    name: "fa-cookie",
    cssRule: "fa-solid fa-cookie"
  }, {
    name: "fa-arrow-left-rotate",
    cssRule: "fa-solid fa-arrow-left-rotate"
  }, {
    name: "fa-hard-drive",
    cssRule: "fa-solid fa-hard-drive"
  }, {
    name: "fa-face-grin-squint-tears",
    cssRule: "fa-solid fa-face-grin-squint-tears"
  }, {
    name: "fa-dumbbell",
    cssRule: "fa-solid fa-dumbbell"
  }, {
    name: "fa-list-alt",
    cssRule: "fa-solid fa-list-alt"
  }, {
    name: "fa-tarp-droplet",
    cssRule: "fa-solid fa-tarp-droplet"
  }, {
    name: "fa-house-medical-circle-check",
    cssRule: "fa-solid fa-house-medical-circle-check"
  }, {
    name: "fa-person-skiing-nordic",
    cssRule: "fa-solid fa-person-skiing-nordic"
  }, {
    name: "fa-calendar-plus",
    cssRule: "fa-solid fa-calendar-plus"
  }, {
    name: "fa-plane-arrival",
    cssRule: "fa-solid fa-plane-arrival"
  }, {
    name: "fa-arrow-alt-circle-left",
    cssRule: "fa-solid fa-arrow-alt-circle-left"
  }, {
    name: "fa-subway",
    cssRule: "fa-solid fa-subway"
  }, {
    name: "fa-chart-gantt",
    cssRule: "fa-solid fa-chart-gantt"
  }, {
    name: "fa-indian-rupee",
    cssRule: "fa-solid fa-indian-rupee"
  }, {
    name: "fa-crop-alt",
    cssRule: "fa-solid fa-crop-alt"
  }, {
    name: "fa-money-bill-1",
    cssRule: "fa-solid fa-money-bill-1"
  }, {
    name: "fa-left-long",
    cssRule: "fa-solid fa-left-long"
  }, {
    name: "fa-dna",
    cssRule: "fa-solid fa-dna"
  }, {
    name: "fa-virus-slash",
    cssRule: "fa-solid fa-virus-slash"
  }, {
    name: "fa-minus",
    cssRule: "fa-solid fa-minus"
  }, {
    name: "fa-chess",
    cssRule: "fa-solid fa-chess"
  }, {
    name: "fa-arrow-left-long",
    cssRule: "fa-solid fa-arrow-left-long"
  }, {
    name: "fa-plug-circle-check",
    cssRule: "fa-solid fa-plug-circle-check"
  }, {
    name: "fa-street-view",
    cssRule: "fa-solid fa-street-view"
  }, {
    name: "fa-franc-sign",
    cssRule: "fa-solid fa-franc-sign"
  }, {
    name: "fa-volume-off",
    cssRule: "fa-solid fa-volume-off"
  }, {
    name: "fa-american-sign-language-interpreting",
    cssRule: "fa-solid fa-american-sign-language-interpreting"
  }, {
    name: "fa-cog",
    cssRule: "fa-solid fa-cog"
  }, {
    name: "fa-droplet-slash",
    cssRule: "fa-solid fa-droplet-slash"
  }, {
    name: "fa-mosque",
    cssRule: "fa-solid fa-mosque"
  }, {
    name: "fa-mosquito",
    cssRule: "fa-solid fa-mosquito"
  }, {
    name: "fa-star-of-david",
    cssRule: "fa-solid fa-star-of-david"
  }, {
    name: "fa-person-military-rifle",
    cssRule: "fa-solid fa-person-military-rifle"
  }, {
    name: "fa-cart-shopping",
    cssRule: "fa-solid fa-cart-shopping"
  }, {
    name: "fa-vials",
    cssRule: "fa-solid fa-vials"
  }, {
    name: "fa-plug-circle-plus",
    cssRule: "fa-solid fa-plug-circle-plus"
  }, {
    name: "fa-place-of-worship",
    cssRule: "fa-solid fa-place-of-worship"
  }, {
    name: "fa-grip-vertical",
    cssRule: "fa-solid fa-grip-vertical"
  }, {
    name: "fa-hexagon-nodes",
    cssRule: "fa-solid fa-hexagon-nodes"
  }, {
    name: "fa-arrow-turn-up",
    cssRule: "fa-solid fa-arrow-turn-up"
  }, {
    name: "fa-u",
    cssRule: "fa-solid fa-u"
  }, {
    name: "fa-square-root-alt",
    cssRule: "fa-solid fa-square-root-alt"
  }, {
    name: "fa-clock",
    cssRule: "fa-solid fa-clock"
  }, {
    name: "fa-backward-step",
    cssRule: "fa-solid fa-backward-step"
  }, {
    name: "fa-pallet",
    cssRule: "fa-solid fa-pallet"
  }, {
    name: "fa-faucet",
    cssRule: "fa-solid fa-faucet"
  }, {
    name: "fa-baseball-bat-ball",
    cssRule: "fa-solid fa-baseball-bat-ball"
  }, {
    name: "fa-s",
    cssRule: "fa-solid fa-s"
  }, {
    name: "fa-timeline",
    cssRule: "fa-solid fa-timeline"
  }, {
    name: "fa-keyboard",
    cssRule: "fa-solid fa-keyboard"
  }, {
    name: "fa-caret-down",
    cssRule: "fa-solid fa-caret-down"
  }, {
    name: "fa-clinic-medical",
    cssRule: "fa-solid fa-clinic-medical"
  }, {
    name: "fa-temperature-3",
    cssRule: "fa-solid fa-temperature-3"
  }, {
    name: "fa-mobile-android-alt",
    cssRule: "fa-solid fa-mobile-android-alt"
  }, {
    name: "fa-plane-up",
    cssRule: "fa-solid fa-plane-up"
  }, {
    name: "fa-piggy-bank",
    cssRule: "fa-solid fa-piggy-bank"
  }, {
    name: "fa-battery-3",
    cssRule: "fa-solid fa-battery-3"
  }, {
    name: "fa-mountain-city",
    cssRule: "fa-solid fa-mountain-city"
  }, {
    name: "fa-coins",
    cssRule: "fa-solid fa-coins"
  }, {
    name: "fa-khanda",
    cssRule: "fa-solid fa-khanda"
  }, {
    name: "fa-sliders",
    cssRule: "fa-solid fa-sliders"
  }, {
    name: "fa-folder-tree",
    cssRule: "fa-solid fa-folder-tree"
  }, {
    name: "fa-network-wired",
    cssRule: "fa-solid fa-network-wired"
  }, {
    name: "fa-map-pin",
    cssRule: "fa-solid fa-map-pin"
  }, {
    name: "fa-hamsa",
    cssRule: "fa-solid fa-hamsa"
  }, {
    name: "fa-cent-sign",
    cssRule: "fa-solid fa-cent-sign"
  }, {
    name: "fa-flask",
    cssRule: "fa-solid fa-flask"
  }, {
    name: "fa-person-pregnant",
    cssRule: "fa-solid fa-person-pregnant"
  }, {
    name: "fa-wand-sparkles",
    cssRule: "fa-solid fa-wand-sparkles"
  }, {
    name: "fa-ellipsis-v",
    cssRule: "fa-solid fa-ellipsis-v"
  }, {
    name: "fa-ticket",
    cssRule: "fa-solid fa-ticket"
  }, {
    name: "fa-power-off",
    cssRule: "fa-solid fa-power-off"
  }, {
    name: "fa-long-arrow-alt-right",
    cssRule: "fa-solid fa-long-arrow-alt-right"
  }, {
    name: "fa-flag-usa",
    cssRule: "fa-solid fa-flag-usa"
  }, {
    name: "fa-laptop-file",
    cssRule: "fa-solid fa-laptop-file"
  }, {
    name: "fa-teletype",
    cssRule: "fa-solid fa-teletype"
  }, {
    name: "fa-diagram-next",
    cssRule: "fa-solid fa-diagram-next"
  }, {
    name: "fa-person-rifle",
    cssRule: "fa-solid fa-person-rifle"
  }, {
    name: "fa-house-medical-circle-exclamation",
    cssRule: "fa-solid fa-house-medical-circle-exclamation"
  }, {
    name: "fa-closed-captioning",
    cssRule: "fa-solid fa-closed-captioning"
  }, {
    name: "fa-hiking",
    cssRule: "fa-solid fa-hiking"
  }, {
    name: "fa-venus-double",
    cssRule: "fa-solid fa-venus-double"
  }, {
    name: "fa-images",
    cssRule: "fa-solid fa-images"
  }, {
    name: "fa-calculator",
    cssRule: "fa-solid fa-calculator"
  }, {
    name: "fa-people-pulling",
    cssRule: "fa-solid fa-people-pulling"
  }, {
    name: "fa-n",
    cssRule: "fa-solid fa-n"
  }, {
    name: "fa-cable-car",
    cssRule: "fa-solid fa-cable-car"
  }, {
    name: "fa-cloud-rain",
    cssRule: "fa-solid fa-cloud-rain"
  }, {
    name: "fa-building-circle-xmark",
    cssRule: "fa-solid fa-building-circle-xmark"
  }, {
    name: "fa-ship",
    cssRule: "fa-solid fa-ship"
  }, {
    name: "fa-arrows-down-to-line",
    cssRule: "fa-solid fa-arrows-down-to-line"
  }, {
    name: "fa-download",
    cssRule: "fa-solid fa-download"
  }, {
    name: "fa-face-grin",
    cssRule: "fa-solid fa-face-grin"
  }, {
    name: "fa-backspace",
    cssRule: "fa-solid fa-backspace"
  }, {
    name: "fa-eye-dropper",
    cssRule: "fa-solid fa-eye-dropper"
  }, {
    name: "fa-file-circle-check",
    cssRule: "fa-solid fa-file-circle-check"
  }, {
    name: "fa-forward",
    cssRule: "fa-solid fa-forward"
  }, {
    name: "fa-mobile",
    cssRule: "fa-solid fa-mobile"
  }, {
    name: "fa-face-meh",
    cssRule: "fa-solid fa-face-meh"
  }, {
    name: "fa-align-center",
    cssRule: "fa-solid fa-align-center"
  }, {
    name: "fa-book-dead",
    cssRule: "fa-solid fa-book-dead"
  }, {
    name: "fa-drivers-license",
    cssRule: "fa-solid fa-drivers-license"
  }, {
    name: "fa-dedent",
    cssRule: "fa-solid fa-dedent"
  }, {
    name: "fa-heart-circle-exclamation",
    cssRule: "fa-solid fa-heart-circle-exclamation"
  }, {
    name: "fa-home",
    cssRule: "fa-solid fa-home"
  }, {
    name: "fa-calendar-week",
    cssRule: "fa-solid fa-calendar-week"
  }, {
    name: "fa-laptop-medical",
    cssRule: "fa-solid fa-laptop-medical"
  }, {
    name: "fa-b",
    cssRule: "fa-solid fa-b"
  }, {
    name: "fa-file-medical",
    cssRule: "fa-solid fa-file-medical"
  }, {
    name: "fa-dice-one",
    cssRule: "fa-solid fa-dice-one"
  }, {
    name: "fa-kiwi-bird",
    cssRule: "fa-solid fa-kiwi-bird"
  }, {
    name: "fa-arrow-right-arrow-left",
    cssRule: "fa-solid fa-arrow-right-arrow-left"
  }, {
    name: "fa-redo-alt",
    cssRule: "fa-solid fa-redo-alt"
  }, {
    name: "fa-cutlery",
    cssRule: "fa-solid fa-cutlery"
  }, {
    name: "fa-arrow-up-wide-short",
    cssRule: "fa-solid fa-arrow-up-wide-short"
  }, {
    name: "fa-mill-sign",
    cssRule: "fa-solid fa-mill-sign"
  }, {
    name: "fa-bowl-rice",
    cssRule: "fa-solid fa-bowl-rice"
  }, {
    name: "fa-skull",
    cssRule: "fa-solid fa-skull"
  }, {
    name: "fa-broadcast-tower",
    cssRule: "fa-solid fa-broadcast-tower"
  }, {
    name: "fa-truck-pickup",
    cssRule: "fa-solid fa-truck-pickup"
  }, {
    name: "fa-long-arrow-alt-up",
    cssRule: "fa-solid fa-long-arrow-alt-up"
  }, {
    name: "fa-stop",
    cssRule: "fa-solid fa-stop"
  }, {
    name: "fa-code-merge",
    cssRule: "fa-solid fa-code-merge"
  }, {
    name: "fa-upload",
    cssRule: "fa-solid fa-upload"
  }, {
    name: "fa-hurricane",
    cssRule: "fa-solid fa-hurricane"
  }, {
    name: "fa-mound",
    cssRule: "fa-solid fa-mound"
  }, {
    name: "fa-toilet-portable",
    cssRule: "fa-solid fa-toilet-portable"
  }, {
    name: "fa-compact-disc",
    cssRule: "fa-solid fa-compact-disc"
  }, {
    name: "fa-file-arrow-down",
    cssRule: "fa-solid fa-file-arrow-down"
  }, {
    name: "fa-caravan",
    cssRule: "fa-solid fa-caravan"
  }, {
    name: "fa-shield-cat",
    cssRule: "fa-solid fa-shield-cat"
  }, {
    name: "fa-bolt",
    cssRule: "fa-solid fa-bolt"
  }, {
    name: "fa-glass-water",
    cssRule: "fa-solid fa-glass-water"
  }, {
    name: "fa-oil-well",
    cssRule: "fa-solid fa-oil-well"
  }, {
    name: "fa-vault",
    cssRule: "fa-solid fa-vault"
  }, {
    name: "fa-mars",
    cssRule: "fa-solid fa-mars"
  }, {
    name: "fa-toilet",
    cssRule: "fa-solid fa-toilet"
  }, {
    name: "fa-plane-circle-xmark",
    cssRule: "fa-solid fa-plane-circle-xmark"
  }, {
    name: "fa-cny",
    cssRule: "fa-solid fa-cny"
  }, {
    name: "fa-rouble",
    cssRule: "fa-solid fa-rouble"
  }, {
    name: "fa-sun",
    cssRule: "fa-solid fa-sun"
  }, {
    name: "fa-guitar",
    cssRule: "fa-solid fa-guitar"
  }, {
    name: "fa-face-laugh-wink",
    cssRule: "fa-solid fa-face-laugh-wink"
  }, {
    name: "fa-horse-head",
    cssRule: "fa-solid fa-horse-head"
  }, {
    name: "fa-bore-hole",
    cssRule: "fa-solid fa-bore-hole"
  }, {
    name: "fa-industry",
    cssRule: "fa-solid fa-industry"
  }, {
    name: "fa-arrow-alt-circle-down",
    cssRule: "fa-solid fa-arrow-alt-circle-down"
  }, {
    name: "fa-arrows-turn-to-dots",
    cssRule: "fa-solid fa-arrows-turn-to-dots"
  }, {
    name: "fa-florin-sign",
    cssRule: "fa-solid fa-florin-sign"
  }, {
    name: "fa-arrow-down-short-wide",
    cssRule: "fa-solid fa-arrow-down-short-wide"
  }, {
    name: "fa-less-than",
    cssRule: "fa-solid fa-less-than"
  }, {
    name: "fa-angle-down",
    cssRule: "fa-solid fa-angle-down"
  }, {
    name: "fa-car-tunnel",
    cssRule: "fa-solid fa-car-tunnel"
  }, {
    name: "fa-head-side-cough",
    cssRule: "fa-solid fa-head-side-cough"
  }, {
    name: "fa-grip-lines",
    cssRule: "fa-solid fa-grip-lines"
  }, {
    name: "fa-thumbs-down",
    cssRule: "fa-solid fa-thumbs-down"
  }, {
    name: "fa-user-lock",
    cssRule: "fa-solid fa-user-lock"
  }, {
    name: "fa-arrow-right-long",
    cssRule: "fa-solid fa-arrow-right-long"
  }, {
    name: "fa-anchor-circle-xmark",
    cssRule: "fa-solid fa-anchor-circle-xmark"
  }, {
    name: "fa-ellipsis",
    cssRule: "fa-solid fa-ellipsis"
  }, {
    name: "fa-chess-pawn",
    cssRule: "fa-solid fa-chess-pawn"
  }, {
    name: "fa-first-aid",
    cssRule: "fa-solid fa-first-aid"
  }, {
    name: "fa-person-through-window",
    cssRule: "fa-solid fa-person-through-window"
  }, {
    name: "fa-toolbox",
    cssRule: "fa-solid fa-toolbox"
  }, {
    name: "fa-hands-holding-circle",
    cssRule: "fa-solid fa-hands-holding-circle"
  }, {
    name: "fa-bug",
    cssRule: "fa-solid fa-bug"
  }, {
    name: "fa-credit-card",
    cssRule: "fa-solid fa-credit-card"
  }, {
    name: "fa-automobile",
    cssRule: "fa-solid fa-automobile"
  }, {
    name: "fa-hand-holding-hand",
    cssRule: "fa-solid fa-hand-holding-hand"
  }, {
    name: "fa-book-open-reader",
    cssRule: "fa-solid fa-book-open-reader"
  }, {
    name: "fa-mountain-sun",
    cssRule: "fa-solid fa-mountain-sun"
  }, {
    name: "fa-arrows-left-right-to-line",
    cssRule: "fa-solid fa-arrows-left-right-to-line"
  }, {
    name: "fa-dice-d20",
    cssRule: "fa-solid fa-dice-d20"
  }, {
    name: "fa-truck-droplet",
    cssRule: "fa-solid fa-truck-droplet"
  }, {
    name: "fa-file-circle-xmark",
    cssRule: "fa-solid fa-file-circle-xmark"
  }, {
    name: "fa-temperature-arrow-up",
    cssRule: "fa-solid fa-temperature-arrow-up"
  }, {
    name: "fa-medal",
    cssRule: "fa-solid fa-medal"
  }, {
    name: "fa-bed",
    cssRule: "fa-solid fa-bed"
  }, {
    name: "fa-h-square",
    cssRule: "fa-solid fa-h-square"
  }, {
    name: "fa-podcast",
    cssRule: "fa-solid fa-podcast"
  }, {
    name: "fa-temperature-4",
    cssRule: "fa-solid fa-temperature-4"
  }, {
    name: "fa-bell",
    cssRule: "fa-solid fa-bell"
  }, {
    name: "fa-superscript",
    cssRule: "fa-solid fa-superscript"
  }, {
    name: "fa-plug-circle-xmark",
    cssRule: "fa-solid fa-plug-circle-xmark"
  }, {
    name: "fa-star-of-life",
    cssRule: "fa-solid fa-star-of-life"
  }, {
    name: "fa-phone-slash",
    cssRule: "fa-solid fa-phone-slash"
  }, {
    name: "fa-paint-roller",
    cssRule: "fa-solid fa-paint-roller"
  }, {
    name: "fa-hands-helping",
    cssRule: "fa-solid fa-hands-helping"
  }, {
    name: "fa-location-dot",
    cssRule: "fa-solid fa-location-dot"
  }, {
    name: "fa-file",
    cssRule: "fa-solid fa-file"
  }, {
    name: "fa-greater-than",
    cssRule: "fa-solid fa-greater-than"
  }, {
    name: "fa-person-swimming",
    cssRule: "fa-solid fa-person-swimming"
  }, {
    name: "fa-arrow-down",
    cssRule: "fa-solid fa-arrow-down"
  }, {
    name: "fa-droplet",
    cssRule: "fa-solid fa-droplet"
  }, {
    name: "fa-eraser",
    cssRule: "fa-solid fa-eraser"
  }, {
    name: "fa-earth",
    cssRule: "fa-solid fa-earth"
  }, {
    name: "fa-person-burst",
    cssRule: "fa-solid fa-person-burst"
  }, {
    name: "fa-dove",
    cssRule: "fa-solid fa-dove"
  }, {
    name: "fa-battery-0",
    cssRule: "fa-solid fa-battery-0"
  }, {
    name: "fa-socks",
    cssRule: "fa-solid fa-socks"
  }, {
    name: "fa-inbox",
    cssRule: "fa-solid fa-inbox"
  }, {
    name: "fa-section",
    cssRule: "fa-solid fa-section"
  }, {
    name: "fa-gauge-high",
    cssRule: "fa-solid fa-gauge-high"
  }, {
    name: "fa-envelope-open-text",
    cssRule: "fa-solid fa-envelope-open-text"
  }, {
    name: "fa-hospital",
    cssRule: "fa-solid fa-hospital"
  }, {
    name: "fa-wine-bottle",
    cssRule: "fa-solid fa-wine-bottle"
  }, {
    name: "fa-chess-rook",
    cssRule: "fa-solid fa-chess-rook"
  }, {
    name: "fa-bars-staggered",
    cssRule: "fa-solid fa-bars-staggered"
  }, {
    name: "fa-dharmachakra",
    cssRule: "fa-solid fa-dharmachakra"
  }, {
    name: "fa-hotdog",
    cssRule: "fa-solid fa-hotdog"
  }, {
    name: "fa-blind",
    cssRule: "fa-solid fa-blind"
  }, {
    name: "fa-drum",
    cssRule: "fa-solid fa-drum"
  }, {
    name: "fa-ice-cream",
    cssRule: "fa-solid fa-ice-cream"
  }, {
    name: "fa-heart-circle-bolt",
    cssRule: "fa-solid fa-heart-circle-bolt"
  }, {
    name: "fa-fax",
    cssRule: "fa-solid fa-fax"
  }, {
    name: "fa-paragraph",
    cssRule: "fa-solid fa-paragraph"
  }, {
    name: "fa-check-to-slot",
    cssRule: "fa-solid fa-check-to-slot"
  }, {
    name: "fa-star-half",
    cssRule: "fa-solid fa-star-half"
  }, {
    name: "fa-boxes",
    cssRule: "fa-solid fa-boxes"
  }, {
    name: "fa-chain",
    cssRule: "fa-solid fa-chain"
  }, {
    name: "fa-assistive-listening-systems",
    cssRule: "fa-solid fa-assistive-listening-systems"
  }, {
    name: "fa-tree-city",
    cssRule: "fa-solid fa-tree-city"
  }, {
    name: "fa-play",
    cssRule: "fa-solid fa-play"
  }, {
    name: "fa-font",
    cssRule: "fa-solid fa-font"
  }, {
    name: "fa-table-cells-row-lock",
    cssRule: "fa-solid fa-table-cells-row-lock"
  }, {
    name: "fa-rupiah-sign",
    cssRule: "fa-solid fa-rupiah-sign"
  }, {
    name: "fa-magnifying-glass",
    cssRule: "fa-solid fa-magnifying-glass"
  }, {
    name: "fa-ping-pong-paddle-ball",
    cssRule: "fa-solid fa-ping-pong-paddle-ball"
  }, {
    name: "fa-diagnoses",
    cssRule: "fa-solid fa-diagnoses"
  }, {
    name: "fa-trash-can-arrow-up",
    cssRule: "fa-solid fa-trash-can-arrow-up"
  }, {
    name: "fa-naira-sign",
    cssRule: "fa-solid fa-naira-sign"
  }, {
    name: "fa-cart-arrow-down",
    cssRule: "fa-solid fa-cart-arrow-down"
  }, {
    name: "fa-walkie-talkie",
    cssRule: "fa-solid fa-walkie-talkie"
  }, {
    name: "fa-file-edit",
    cssRule: "fa-solid fa-file-edit"
  }, {
    name: "fa-receipt",
    cssRule: "fa-solid fa-receipt"
  }, {
    name: "fa-pen-square",
    cssRule: "fa-solid fa-pen-square"
  }, {
    name: "fa-suitcase-rolling",
    cssRule: "fa-solid fa-suitcase-rolling"
  }, {
    name: "fa-person-circle-exclamation",
    cssRule: "fa-solid fa-person-circle-exclamation"
  }, {
    name: "fa-chevron-down",
    cssRule: "fa-solid fa-chevron-down"
  }, {
    name: "fa-battery",
    cssRule: "fa-solid fa-battery"
  }, {
    name: "fa-skull-crossbones",
    cssRule: "fa-solid fa-skull-crossbones"
  }, {
    name: "fa-code-compare",
    cssRule: "fa-solid fa-code-compare"
  }, {
    name: "fa-list-dots",
    cssRule: "fa-solid fa-list-dots"
  }, {
    name: "fa-school-lock",
    cssRule: "fa-solid fa-school-lock"
  }, {
    name: "fa-tower-cell",
    cssRule: "fa-solid fa-tower-cell"
  }, {
    name: "fa-down-long",
    cssRule: "fa-solid fa-down-long"
  }, {
    name: "fa-ranking-star",
    cssRule: "fa-solid fa-ranking-star"
  }, {
    name: "fa-chess-king",
    cssRule: "fa-solid fa-chess-king"
  }, {
    name: "fa-person-harassing",
    cssRule: "fa-solid fa-person-harassing"
  }, {
    name: "fa-brazilian-real-sign",
    cssRule: "fa-solid fa-brazilian-real-sign"
  }, {
    name: "fa-landmark-alt",
    cssRule: "fa-solid fa-landmark-alt"
  }, {
    name: "fa-arrow-up",
    cssRule: "fa-solid fa-arrow-up"
  }, {
    name: "fa-television",
    cssRule: "fa-solid fa-television"
  }, {
    name: "fa-shrimp",
    cssRule: "fa-solid fa-shrimp"
  }, {
    name: "fa-list-check",
    cssRule: "fa-solid fa-list-check"
  }, {
    name: "fa-jug-detergent",
    cssRule: "fa-solid fa-jug-detergent"
  }, {
    name: "fa-circle-user",
    cssRule: "fa-solid fa-circle-user"
  }, {
    name: "fa-user-shield",
    cssRule: "fa-solid fa-user-shield"
  }, {
    name: "fa-wind",
    cssRule: "fa-solid fa-wind"
  }, {
    name: "fa-car-burst",
    cssRule: "fa-solid fa-car-burst"
  }, {
    name: "fa-y",
    cssRule: "fa-solid fa-y"
  }, {
    name: "fa-person-snowboarding",
    cssRule: "fa-solid fa-person-snowboarding"
  }, {
    name: "fa-shipping-fast",
    cssRule: "fa-solid fa-shipping-fast"
  }, {
    name: "fa-fish",
    cssRule: "fa-solid fa-fish"
  }, {
    name: "fa-user-graduate",
    cssRule: "fa-solid fa-user-graduate"
  }, {
    name: "fa-adjust",
    cssRule: "fa-solid fa-adjust"
  }, {
    name: "fa-clapperboard",
    cssRule: "fa-solid fa-clapperboard"
  }, {
    name: "fa-circle-radiation",
    cssRule: "fa-solid fa-circle-radiation"
  }, {
    name: "fa-baseball",
    cssRule: "fa-solid fa-baseball"
  }, {
    name: "fa-jet-fighter-up",
    cssRule: "fa-solid fa-jet-fighter-up"
  }, {
    name: "fa-diagram-project",
    cssRule: "fa-solid fa-diagram-project"
  }, {
    name: "fa-copy",
    cssRule: "fa-solid fa-copy"
  }, {
    name: "fa-volume-mute",
    cssRule: "fa-solid fa-volume-mute"
  }, {
    name: "fa-hand-sparkles",
    cssRule: "fa-solid fa-hand-sparkles"
  }, {
    name: "fa-grip",
    cssRule: "fa-solid fa-grip"
  }, {
    name: "fa-share-from-square",
    cssRule: "fa-solid fa-share-from-square"
  }, {
    name: "fa-child-combatant",
    cssRule: "fa-solid fa-child-combatant"
  }, {
    name: "fa-gun",
    cssRule: "fa-solid fa-gun"
  }, {
    name: "fa-phone-square",
    cssRule: "fa-solid fa-phone-square"
  }, {
    name: "fa-add",
    cssRule: "fa-solid fa-add"
  }, {
    name: "fa-expand",
    cssRule: "fa-solid fa-expand"
  }, {
    name: "fa-computer",
    cssRule: "fa-solid fa-computer"
  }, {
    name: "fa-close",
    cssRule: "fa-solid fa-close"
  }, {
    name: "fa-arrows",
    cssRule: "fa-solid fa-arrows"
  }, {
    name: "fa-chalkboard-teacher",
    cssRule: "fa-solid fa-chalkboard-teacher"
  }, {
    name: "fa-peso-sign",
    cssRule: "fa-solid fa-peso-sign"
  }, {
    name: "fa-building-shield",
    cssRule: "fa-solid fa-building-shield"
  }, {
    name: "fa-baby",
    cssRule: "fa-solid fa-baby"
  }, {
    name: "fa-users-line",
    cssRule: "fa-solid fa-users-line"
  }, {
    name: "fa-quote-left",
    cssRule: "fa-solid fa-quote-left"
  }, {
    name: "fa-tractor",
    cssRule: "fa-solid fa-tractor"
  }, {
    name: "fa-trash-arrow-up",
    cssRule: "fa-solid fa-trash-arrow-up"
  }, {
    name: "fa-arrow-down-up-lock",
    cssRule: "fa-solid fa-arrow-down-up-lock"
  }, {
    name: "fa-lines-leaning",
    cssRule: "fa-solid fa-lines-leaning"
  }, {
    name: "fa-ruler-combined",
    cssRule: "fa-solid fa-ruler-combined"
  }, {
    name: "fa-copyright",
    cssRule: "fa-solid fa-copyright"
  }, {
    name: "fa-equals",
    cssRule: "fa-solid fa-equals"
  }, {
    name: "fa-blender",
    cssRule: "fa-solid fa-blender"
  }, {
    name: "fa-teeth",
    cssRule: "fa-solid fa-teeth"
  }, {
    name: "fa-ils",
    cssRule: "fa-solid fa-ils"
  }, {
    name: "fa-map",
    cssRule: "fa-solid fa-map"
  }, {
    name: "fa-rocket",
    cssRule: "fa-solid fa-rocket"
  }, {
    name: "fa-photo-film",
    cssRule: "fa-solid fa-photo-film"
  }, {
    name: "fa-folder-minus",
    cssRule: "fa-solid fa-folder-minus"
  }, {
    name: "fa-hexagon-nodes-bolt",
    cssRule: "fa-solid fa-hexagon-nodes-bolt"
  }, {
    name: "fa-store",
    cssRule: "fa-solid fa-store"
  }, {
    name: "fa-arrow-trend-up",
    cssRule: "fa-solid fa-arrow-trend-up"
  }, {
    name: "fa-plug-circle-minus",
    cssRule: "fa-solid fa-plug-circle-minus"
  }, {
    name: "fa-sign",
    cssRule: "fa-solid fa-sign"
  }, {
    name: "fa-bezier-curve",
    cssRule: "fa-solid fa-bezier-curve"
  }, {
    name: "fa-bell-slash",
    cssRule: "fa-solid fa-bell-slash"
  }, {
    name: "fa-tablet",
    cssRule: "fa-solid fa-tablet"
  }, {
    name: "fa-school-flag",
    cssRule: "fa-solid fa-school-flag"
  }, {
    name: "fa-fill",
    cssRule: "fa-solid fa-fill"
  }, {
    name: "fa-angle-up",
    cssRule: "fa-solid fa-angle-up"
  }, {
    name: "fa-drumstick-bite",
    cssRule: "fa-solid fa-drumstick-bite"
  }, {
    name: "fa-holly-berry",
    cssRule: "fa-solid fa-holly-berry"
  }, {
    name: "fa-chevron-left",
    cssRule: "fa-solid fa-chevron-left"
  }, {
    name: "fa-bacteria",
    cssRule: "fa-solid fa-bacteria"
  }, {
    name: "fa-hand-lizard",
    cssRule: "fa-solid fa-hand-lizard"
  }, {
    name: "fa-notdef",
    cssRule: "fa-solid fa-notdef"
  }, {
    name: "fa-disease",
    cssRule: "fa-solid fa-disease"
  }, {
    name: "fa-briefcase-medical",
    cssRule: "fa-solid fa-briefcase-medical"
  }, {
    name: "fa-genderless",
    cssRule: "fa-solid fa-genderless"
  }, {
    name: "fa-chevron-right",
    cssRule: "fa-solid fa-chevron-right"
  }, {
    name: "fa-retweet",
    cssRule: "fa-solid fa-retweet"
  }, {
    name: "fa-car-alt",
    cssRule: "fa-solid fa-car-alt"
  }, {
    name: "fa-pump-soap",
    cssRule: "fa-solid fa-pump-soap"
  }, {
    name: "fa-video-slash",
    cssRule: "fa-solid fa-video-slash"
  }, {
    name: "fa-battery-2",
    cssRule: "fa-solid fa-battery-2"
  }, {
    name: "fa-radio",
    cssRule: "fa-solid fa-radio"
  }, {
    name: "fa-baby-carriage",
    cssRule: "fa-solid fa-baby-carriage"
  }, {
    name: "fa-traffic-light",
    cssRule: "fa-solid fa-traffic-light"
  }, {
    name: "fa-thermometer",
    cssRule: "fa-solid fa-thermometer"
  }, {
    name: "fa-vr-cardboard",
    cssRule: "fa-solid fa-vr-cardboard"
  }, {
    name: "fa-hand-middle-finger",
    cssRule: "fa-solid fa-hand-middle-finger"
  }, {
    name: "fa-percent",
    cssRule: "fa-solid fa-percent"
  }, {
    name: "fa-truck-moving",
    cssRule: "fa-solid fa-truck-moving"
  }, {
    name: "fa-glass-water-droplet",
    cssRule: "fa-solid fa-glass-water-droplet"
  }, {
    name: "fa-display",
    cssRule: "fa-solid fa-display"
  }, {
    name: "fa-face-smile",
    cssRule: "fa-solid fa-face-smile"
  }, {
    name: "fa-thumb-tack",
    cssRule: "fa-solid fa-thumb-tack"
  }, {
    name: "fa-trophy",
    cssRule: "fa-solid fa-trophy"
  }, {
    name: "fa-person-praying",
    cssRule: "fa-solid fa-person-praying"
  }, {
    name: "fa-hammer",
    cssRule: "fa-solid fa-hammer"
  }, {
    name: "fa-hand-peace",
    cssRule: "fa-solid fa-hand-peace"
  }, {
    name: "fa-rotate",
    cssRule: "fa-solid fa-rotate"
  }, {
    name: "fa-spinner",
    cssRule: "fa-solid fa-spinner"
  }, {
    name: "fa-robot",
    cssRule: "fa-solid fa-robot"
  }, {
    name: "fa-peace",
    cssRule: "fa-solid fa-peace"
  }, {
    name: "fa-cogs",
    cssRule: "fa-solid fa-cogs"
  }, {
    name: "fa-warehouse",
    cssRule: "fa-solid fa-warehouse"
  }, {
    name: "fa-arrow-up-right-dots",
    cssRule: "fa-solid fa-arrow-up-right-dots"
  }, {
    name: "fa-splotch",
    cssRule: "fa-solid fa-splotch"
  }, {
    name: "fa-face-grin-hearts",
    cssRule: "fa-solid fa-face-grin-hearts"
  }, {
    name: "fa-dice-four",
    cssRule: "fa-solid fa-dice-four"
  }, {
    name: "fa-sim-card",
    cssRule: "fa-solid fa-sim-card"
  }, {
    name: "fa-transgender",
    cssRule: "fa-solid fa-transgender"
  }, {
    name: "fa-mercury",
    cssRule: "fa-solid fa-mercury"
  }, {
    name: "fa-arrow-turn-down",
    cssRule: "fa-solid fa-arrow-turn-down"
  }, {
    name: "fa-person-falling-burst",
    cssRule: "fa-solid fa-person-falling-burst"
  }, {
    name: "fa-award",
    cssRule: "fa-solid fa-award"
  }, {
    name: "fa-ticket-alt",
    cssRule: "fa-solid fa-ticket-alt"
  }, {
    name: "fa-building",
    cssRule: "fa-solid fa-building"
  }, {
    name: "fa-angle-double-left",
    cssRule: "fa-solid fa-angle-double-left"
  }, {
    name: "fa-qrcode",
    cssRule: "fa-solid fa-qrcode"
  }, {
    name: "fa-clock-rotate-left",
    cssRule: "fa-solid fa-clock-rotate-left"
  }, {
    name: "fa-face-grin-beam-sweat",
    cssRule: "fa-solid fa-face-grin-beam-sweat"
  }, {
    name: "fa-arrow-right-from-file",
    cssRule: "fa-solid fa-arrow-right-from-file"
  }, {
    name: "fa-shield",
    cssRule: "fa-solid fa-shield"
  }, {
    name: "fa-arrow-up-short-wide",
    cssRule: "fa-solid fa-arrow-up-short-wide"
  }, {
    name: "fa-comment-nodes",
    cssRule: "fa-solid fa-comment-nodes"
  }, {
    name: "fa-house-medical",
    cssRule: "fa-solid fa-house-medical"
  }, {
    name: "fa-golf-ball",
    cssRule: "fa-solid fa-golf-ball"
  }, {
    name: "fa-chevron-circle-left",
    cssRule: "fa-solid fa-chevron-circle-left"
  }, {
    name: "fa-house-chimney-window",
    cssRule: "fa-solid fa-house-chimney-window"
  }, {
    name: "fa-pen-nib",
    cssRule: "fa-solid fa-pen-nib"
  }, {
    name: "fa-tent-arrow-turn-left",
    cssRule: "fa-solid fa-tent-arrow-turn-left"
  }, {
    name: "fa-tents",
    cssRule: "fa-solid fa-tents"
  }, {
    name: "fa-magic",
    cssRule: "fa-solid fa-magic"
  }, {
    name: "fa-dog",
    cssRule: "fa-solid fa-dog"
  }, {
    name: "fa-carrot",
    cssRule: "fa-solid fa-carrot"
  }, {
    name: "fa-moon",
    cssRule: "fa-solid fa-moon"
  }, {
    name: "fa-wine-glass-alt",
    cssRule: "fa-solid fa-wine-glass-alt"
  }, {
    name: "fa-cheese",
    cssRule: "fa-solid fa-cheese"
  }, {
    name: "fa-yin-yang",
    cssRule: "fa-solid fa-yin-yang"
  }, {
    name: "fa-music",
    cssRule: "fa-solid fa-music"
  }, {
    name: "fa-code-commit",
    cssRule: "fa-solid fa-code-commit"
  }, {
    name: "fa-temperature-low",
    cssRule: "fa-solid fa-temperature-low"
  }, {
    name: "fa-biking",
    cssRule: "fa-solid fa-biking"
  }, {
    name: "fa-broom",
    cssRule: "fa-solid fa-broom"
  }, {
    name: "fa-shield-heart",
    cssRule: "fa-solid fa-shield-heart"
  }, {
    name: "fa-gopuram",
    cssRule: "fa-solid fa-gopuram"
  }, {
    name: "fa-earth-oceania",
    cssRule: "fa-solid fa-earth-oceania"
  }, {
    name: "fa-square-xmark",
    cssRule: "fa-solid fa-square-xmark"
  }, {
    name: "fa-hashtag",
    cssRule: "fa-solid fa-hashtag"
  }, {
    name: "fa-expand-alt",
    cssRule: "fa-solid fa-expand-alt"
  }, {
    name: "fa-oil-can",
    cssRule: "fa-solid fa-oil-can"
  }, {
    name: "fa-t",
    cssRule: "fa-solid fa-t"
  }, {
    name: "fa-hippo",
    cssRule: "fa-solid fa-hippo"
  }, {
    name: "fa-chart-column",
    cssRule: "fa-solid fa-chart-column"
  }, {
    name: "fa-infinity",
    cssRule: "fa-solid fa-infinity"
  }, {
    name: "fa-vial-circle-check",
    cssRule: "fa-solid fa-vial-circle-check"
  }, {
    name: "fa-person-arrow-down-to-line",
    cssRule: "fa-solid fa-person-arrow-down-to-line"
  }, {
    name: "fa-voicemail",
    cssRule: "fa-solid fa-voicemail"
  }, {
    name: "fa-fan",
    cssRule: "fa-solid fa-fan"
  }, {
    name: "fa-person-walking-luggage",
    cssRule: "fa-solid fa-person-walking-luggage"
  }, {
    name: "fa-arrows-alt-v",
    cssRule: "fa-solid fa-arrows-alt-v"
  }, {
    name: "fa-cloud-moon-rain",
    cssRule: "fa-solid fa-cloud-moon-rain"
  }, {
    name: "fa-calendar",
    cssRule: "fa-solid fa-calendar"
  }, {
    name: "fa-trailer",
    cssRule: "fa-solid fa-trailer"
  }, {
    name: "fa-bahai",
    cssRule: "fa-solid fa-bahai"
  }, {
    name: "fa-sd-card",
    cssRule: "fa-solid fa-sd-card"
  }, {
    name: "fa-dragon",
    cssRule: "fa-solid fa-dragon"
  }, {
    name: "fa-shoe-prints",
    cssRule: "fa-solid fa-shoe-prints"
  }, {
    name: "fa-circle-plus",
    cssRule: "fa-solid fa-circle-plus"
  }, {
    name: "fa-face-grin-tongue-wink",
    cssRule: "fa-solid fa-face-grin-tongue-wink"
  }, {
    name: "fa-hand-holding",
    cssRule: "fa-solid fa-hand-holding"
  }, {
    name: "fa-plug-circle-exclamation",
    cssRule: "fa-solid fa-plug-circle-exclamation"
  }, {
    name: "fa-chain-broken",
    cssRule: "fa-solid fa-chain-broken"
  }, {
    name: "fa-clone",
    cssRule: "fa-solid fa-clone"
  }, {
    name: "fa-person-walking-arrow-loop-left",
    cssRule: "fa-solid fa-person-walking-arrow-loop-left"
  }, {
    name: "fa-arrow-up-z-a",
    cssRule: "fa-solid fa-arrow-up-z-a"
  }, {
    name: "fa-fire-alt",
    cssRule: "fa-solid fa-fire-alt"
  }, {
    name: "fa-tornado",
    cssRule: "fa-solid fa-tornado"
  }, {
    name: "fa-file-circle-plus",
    cssRule: "fa-solid fa-file-circle-plus"
  }, {
    name: "fa-book-quran",
    cssRule: "fa-solid fa-book-quran"
  }, {
    name: "fa-anchor",
    cssRule: "fa-solid fa-anchor"
  }, {
    name: "fa-border-all",
    cssRule: "fa-solid fa-border-all"
  }, {
    name: "fa-angry",
    cssRule: "fa-solid fa-angry"
  }, {
    name: "fa-cookie-bite",
    cssRule: "fa-solid fa-cookie-bite"
  }, {
    name: "fa-arrow-trend-down",
    cssRule: "fa-solid fa-arrow-trend-down"
  }, {
    name: "fa-feed",
    cssRule: "fa-solid fa-feed"
  }, {
    name: "fa-draw-polygon",
    cssRule: "fa-solid fa-draw-polygon"
  }, {
    name: "fa-balance-scale",
    cssRule: "fa-solid fa-balance-scale"
  }, {
    name: "fa-gauge-simple-high",
    cssRule: "fa-solid fa-gauge-simple-high"
  }, {
    name: "fa-shower",
    cssRule: "fa-solid fa-shower"
  }, {
    name: "fa-desktop",
    cssRule: "fa-solid fa-desktop"
  }, {
    name: "fa-m",
    cssRule: "fa-solid fa-m"
  }, {
    name: "fa-table-list",
    cssRule: "fa-solid fa-table-list"
  }, {
    name: "fa-comment-sms",
    cssRule: "fa-solid fa-comment-sms"
  }, {
    name: "fa-book",
    cssRule: "fa-solid fa-book"
  }, {
    name: "fa-user-plus",
    cssRule: "fa-solid fa-user-plus"
  }, {
    name: "fa-check",
    cssRule: "fa-solid fa-check"
  }, {
    name: "fa-battery-4",
    cssRule: "fa-solid fa-battery-4"
  }, {
    name: "fa-house-circle-check",
    cssRule: "fa-solid fa-house-circle-check"
  }, {
    name: "fa-angle-left",
    cssRule: "fa-solid fa-angle-left"
  }, {
    name: "fa-diagram-successor",
    cssRule: "fa-solid fa-diagram-successor"
  }, {
    name: "fa-truck-arrow-right",
    cssRule: "fa-solid fa-truck-arrow-right"
  }, {
    name: "fa-arrows-split-up-and-left",
    cssRule: "fa-solid fa-arrows-split-up-and-left"
  }, {
    name: "fa-fist-raised",
    cssRule: "fa-solid fa-fist-raised"
  }, {
    name: "fa-cloud-moon",
    cssRule: "fa-solid fa-cloud-moon"
  }, {
    name: "fa-briefcase",
    cssRule: "fa-solid fa-briefcase"
  }, {
    name: "fa-person-falling",
    cssRule: "fa-solid fa-person-falling"
  }, {
    name: "fa-image-portrait",
    cssRule: "fa-solid fa-image-portrait"
  }, {
    name: "fa-user-tag",
    cssRule: "fa-solid fa-user-tag"
  }, {
    name: "fa-rug",
    cssRule: "fa-solid fa-rug"
  }, {
    name: "fa-earth-europe",
    cssRule: "fa-solid fa-earth-europe"
  }, {
    name: "fa-cart-flatbed-suitcase",
    cssRule: "fa-solid fa-cart-flatbed-suitcase"
  }, {
    name: "fa-rectangle-times",
    cssRule: "fa-solid fa-rectangle-times"
  }, {
    name: "fa-baht-sign",
    cssRule: "fa-solid fa-baht-sign"
  }, {
    name: "fa-book-open",
    cssRule: "fa-solid fa-book-open"
  }, {
    name: "fa-book-journal-whills",
    cssRule: "fa-solid fa-book-journal-whills"
  }, {
    name: "fa-handcuffs",
    cssRule: "fa-solid fa-handcuffs"
  }, {
    name: "fa-exclamation-triangle",
    cssRule: "fa-solid fa-exclamation-triangle"
  }, {
    name: "fa-database",
    cssRule: "fa-solid fa-database"
  }, {
    name: "fa-mail-forward",
    cssRule: "fa-solid fa-mail-forward"
  }, {
    name: "fa-bottle-droplet",
    cssRule: "fa-solid fa-bottle-droplet"
  }, {
    name: "fa-mask-face",
    cssRule: "fa-solid fa-mask-face"
  }, {
    name: "fa-hill-rockslide",
    cssRule: "fa-solid fa-hill-rockslide"
  }, {
    name: "fa-exchange-alt",
    cssRule: "fa-solid fa-exchange-alt"
  }, {
    name: "fa-paper-plane",
    cssRule: "fa-solid fa-paper-plane"
  }, {
    name: "fa-road-circle-exclamation",
    cssRule: "fa-solid fa-road-circle-exclamation"
  }, {
    name: "fa-dungeon",
    cssRule: "fa-solid fa-dungeon"
  }, {
    name: "fa-align-right",
    cssRule: "fa-solid fa-align-right"
  }, {
    name: "fa-money-bill-1-wave",
    cssRule: "fa-solid fa-money-bill-1-wave"
  }, {
    name: "fa-life-ring",
    cssRule: "fa-solid fa-life-ring"
  }, {
    name: "fa-hands",
    cssRule: "fa-solid fa-hands"
  }, {
    name: "fa-calendar-day",
    cssRule: "fa-solid fa-calendar-day"
  }, {
    name: "fa-ladder-water",
    cssRule: "fa-solid fa-ladder-water"
  }, {
    name: "fa-arrows-up-down",
    cssRule: "fa-solid fa-arrows-up-down"
  }, {
    name: "fa-face-grimace",
    cssRule: "fa-solid fa-face-grimace"
  }, {
    name: "fa-wheelchair-alt",
    cssRule: "fa-solid fa-wheelchair-alt"
  }, {
    name: "fa-level-down-alt",
    cssRule: "fa-solid fa-level-down-alt"
  }, {
    name: "fa-person-walking-arrow-right",
    cssRule: "fa-solid fa-person-walking-arrow-right"
  }, {
    name: "fa-envelope-square",
    cssRule: "fa-solid fa-envelope-square"
  }, {
    name: "fa-dice",
    cssRule: "fa-solid fa-dice"
  }, {
    name: "fa-bowling-ball",
    cssRule: "fa-solid fa-bowling-ball"
  }, {
    name: "fa-brain",
    cssRule: "fa-solid fa-brain"
  }, {
    name: "fa-band-aid",
    cssRule: "fa-solid fa-band-aid"
  }, {
    name: "fa-calendar-minus",
    cssRule: "fa-solid fa-calendar-minus"
  }, {
    name: "fa-circle-xmark",
    cssRule: "fa-solid fa-circle-xmark"
  }, {
    name: "fa-gifts",
    cssRule: "fa-solid fa-gifts"
  }, {
    name: "fa-hotel",
    cssRule: "fa-solid fa-hotel"
  }, {
    name: "fa-earth-asia",
    cssRule: "fa-solid fa-earth-asia"
  }, {
    name: "fa-id-card-alt",
    cssRule: "fa-solid fa-id-card-alt"
  }, {
    name: "fa-magnifying-glass-plus",
    cssRule: "fa-solid fa-magnifying-glass-plus"
  }, {
    name: "fa-thumbs-up",
    cssRule: "fa-solid fa-thumbs-up"
  }, {
    name: "fa-user-clock",
    cssRule: "fa-solid fa-user-clock"
  }, {
    name: "fa-allergies",
    cssRule: "fa-solid fa-allergies"
  }, {
    name: "fa-file-invoice",
    cssRule: "fa-solid fa-file-invoice"
  }, {
    name: "fa-window-minimize",
    cssRule: "fa-solid fa-window-minimize"
  }, {
    name: "fa-coffee",
    cssRule: "fa-solid fa-coffee"
  }, {
    name: "fa-brush",
    cssRule: "fa-solid fa-brush"
  }, {
    name: "fa-file-half-dashed",
    cssRule: "fa-solid fa-file-half-dashed"
  }, {
    name: "fa-mask",
    cssRule: "fa-solid fa-mask"
  }, {
    name: "fa-magnifying-glass-minus",
    cssRule: "fa-solid fa-magnifying-glass-minus"
  }, {
    name: "fa-ruler-vertical",
    cssRule: "fa-solid fa-ruler-vertical"
  }, {
    name: "fa-user-alt",
    cssRule: "fa-solid fa-user-alt"
  }, {
    name: "fa-train-tram",
    cssRule: "fa-solid fa-train-tram"
  }, {
    name: "fa-user-nurse",
    cssRule: "fa-solid fa-user-nurse"
  }, {
    name: "fa-syringe",
    cssRule: "fa-solid fa-syringe"
  }, {
    name: "fa-cloud-sun",
    cssRule: "fa-solid fa-cloud-sun"
  }, {
    name: "fa-stopwatch-20",
    cssRule: "fa-solid fa-stopwatch-20"
  }, {
    name: "fa-square-full",
    cssRule: "fa-solid fa-square-full"
  }, {
    name: "fa-magnet",
    cssRule: "fa-solid fa-magnet"
  }, {
    name: "fa-jar",
    cssRule: "fa-solid fa-jar"
  }, {
    name: "fa-note-sticky",
    cssRule: "fa-solid fa-note-sticky"
  }, {
    name: "fa-bug-slash",
    cssRule: "fa-solid fa-bug-slash"
  }, {
    name: "fa-arrow-up-from-water-pump",
    cssRule: "fa-solid fa-arrow-up-from-water-pump"
  }, {
    name: "fa-bone",
    cssRule: "fa-solid fa-bone"
  }, {
    name: "fa-table-cells-row-unlock",
    cssRule: "fa-solid fa-table-cells-row-unlock"
  }, {
    name: "fa-user-injured",
    cssRule: "fa-solid fa-user-injured"
  }, {
    name: "fa-face-sad-tear",
    cssRule: "fa-solid fa-face-sad-tear"
  }, {
    name: "fa-plane",
    cssRule: "fa-solid fa-plane"
  }, {
    name: "fa-tent-arrows-down",
    cssRule: "fa-solid fa-tent-arrows-down"
  }, {
    name: "fa-exclamation",
    cssRule: "fa-solid fa-exclamation"
  }, {
    name: "fa-arrows-spin",
    cssRule: "fa-solid fa-arrows-spin"
  }, {
    name: "fa-print",
    cssRule: "fa-solid fa-print"
  }, {
    name: "fa-try",
    cssRule: "fa-solid fa-try"
  }, {
    name: "fa-dollar",
    cssRule: "fa-solid fa-dollar"
  }, {
    name: "fa-x",
    cssRule: "fa-solid fa-x"
  }, {
    name: "fa-magnifying-glass-dollar",
    cssRule: "fa-solid fa-magnifying-glass-dollar"
  }, {
    name: "fa-users-cog",
    cssRule: "fa-solid fa-users-cog"
  }, {
    name: "fa-person-military-pointing",
    cssRule: "fa-solid fa-person-military-pointing"
  }, {
    name: "fa-bank",
    cssRule: "fa-solid fa-bank"
  }, {
    name: "fa-umbrella",
    cssRule: "fa-solid fa-umbrella"
  }, {
    name: "fa-trowel",
    cssRule: "fa-solid fa-trowel"
  }, {
    name: "fa-d",
    cssRule: "fa-solid fa-d"
  }, {
    name: "fa-stapler",
    cssRule: "fa-solid fa-stapler"
  }, {
    name: "fa-masks-theater",
    cssRule: "fa-solid fa-masks-theater"
  }, {
    name: "fa-kip-sign",
    cssRule: "fa-solid fa-kip-sign"
  }, {
    name: "fa-hand-point-left",
    cssRule: "fa-solid fa-hand-point-left"
  }, {
    name: "fa-handshake-alt",
    cssRule: "fa-solid fa-handshake-alt"
  }, {
    name: "fa-fighter-jet",
    cssRule: "fa-solid fa-fighter-jet"
  }, {
    name: "fa-share-alt-square",
    cssRule: "fa-solid fa-share-alt-square"
  }, {
    name: "fa-barcode",
    cssRule: "fa-solid fa-barcode"
  }, {
    name: "fa-plus-minus",
    cssRule: "fa-solid fa-plus-minus"
  }, {
    name: "fa-video",
    cssRule: "fa-solid fa-video"
  }, {
    name: "fa-graduation-cap",
    cssRule: "fa-solid fa-graduation-cap"
  }, {
    name: "fa-hand-holding-medical",
    cssRule: "fa-solid fa-hand-holding-medical"
  }, {
    name: "fa-person-circle-check",
    cssRule: "fa-solid fa-person-circle-check"
  }, {
    name: "fa-level-up-alt",
    cssRule: "fa-solid fa-level-up-alt"
  }, {
    name: "fa-monero",
    cssRule: "fa-brands fa-monero"
  }, {
    name: "fa-hooli",
    cssRule: "fa-brands fa-hooli"
  }, {
    name: "fa-yelp",
    cssRule: "fa-brands fa-yelp"
  }, {
    name: "fa-cc-visa",
    cssRule: "fa-brands fa-cc-visa"
  }, {
    name: "fa-lastfm",
    cssRule: "fa-brands fa-lastfm"
  }, {
    name: "fa-shopware",
    cssRule: "fa-brands fa-shopware"
  }, {
    name: "fa-creative-commons-nc",
    cssRule: "fa-brands fa-creative-commons-nc"
  }, {
    name: "fa-aws",
    cssRule: "fa-brands fa-aws"
  }, {
    name: "fa-redhat",
    cssRule: "fa-brands fa-redhat"
  }, {
    name: "fa-yoast",
    cssRule: "fa-brands fa-yoast"
  }, {
    name: "fa-cloudflare",
    cssRule: "fa-brands fa-cloudflare"
  }, {
    name: "fa-ups",
    cssRule: "fa-brands fa-ups"
  }, {
    name: "fa-pixiv",
    cssRule: "fa-brands fa-pixiv"
  }, {
    name: "fa-wpexplorer",
    cssRule: "fa-brands fa-wpexplorer"
  }, {
    name: "fa-dyalog",
    cssRule: "fa-brands fa-dyalog"
  }, {
    name: "fa-bity",
    cssRule: "fa-brands fa-bity"
  }, {
    name: "fa-stackpath",
    cssRule: "fa-brands fa-stackpath"
  }, {
    name: "fa-buysellads",
    cssRule: "fa-brands fa-buysellads"
  }, {
    name: "fa-first-order",
    cssRule: "fa-brands fa-first-order"
  }, {
    name: "fa-modx",
    cssRule: "fa-brands fa-modx"
  }, {
    name: "fa-guilded",
    cssRule: "fa-brands fa-guilded"
  }, {
    name: "fa-vnv",
    cssRule: "fa-brands fa-vnv"
  }, {
    name: "fa-js-square",
    cssRule: "fa-brands fa-js-square"
  }, {
    name: "fa-microsoft",
    cssRule: "fa-brands fa-microsoft"
  }, {
    name: "fa-qq",
    cssRule: "fa-brands fa-qq"
  }, {
    name: "fa-orcid",
    cssRule: "fa-brands fa-orcid"
  }, {
    name: "fa-java",
    cssRule: "fa-brands fa-java"
  }, {
    name: "fa-invision",
    cssRule: "fa-brands fa-invision"
  }, {
    name: "fa-creative-commons-pd-alt",
    cssRule: "fa-brands fa-creative-commons-pd-alt"
  }, {
    name: "fa-centercode",
    cssRule: "fa-brands fa-centercode"
  }, {
    name: "fa-glide-g",
    cssRule: "fa-brands fa-glide-g"
  }, {
    name: "fa-drupal",
    cssRule: "fa-brands fa-drupal"
  }, {
    name: "fa-jxl",
    cssRule: "fa-brands fa-jxl"
  }, {
    name: "fa-dart-lang",
    cssRule: "fa-brands fa-dart-lang"
  }, {
    name: "fa-hire-a-helper",
    cssRule: "fa-brands fa-hire-a-helper"
  }, {
    name: "fa-creative-commons-by",
    cssRule: "fa-brands fa-creative-commons-by"
  }, {
    name: "fa-unity",
    cssRule: "fa-brands fa-unity"
  }, {
    name: "fa-whmcs",
    cssRule: "fa-brands fa-whmcs"
  }, {
    name: "fa-rocketchat",
    cssRule: "fa-brands fa-rocketchat"
  }, {
    name: "fa-vk",
    cssRule: "fa-brands fa-vk"
  }, {
    name: "fa-untappd",
    cssRule: "fa-brands fa-untappd"
  }, {
    name: "fa-mailchimp",
    cssRule: "fa-brands fa-mailchimp"
  }, {
    name: "fa-css3-alt",
    cssRule: "fa-brands fa-css3-alt"
  }, {
    name: "fa-reddit-square",
    cssRule: "fa-brands fa-reddit-square"
  }, {
    name: "fa-vimeo-v",
    cssRule: "fa-brands fa-vimeo-v"
  }, {
    name: "fa-contao",
    cssRule: "fa-brands fa-contao"
  }, {
    name: "fa-square-font-awesome",
    cssRule: "fa-brands fa-square-font-awesome"
  }, {
    name: "fa-deskpro",
    cssRule: "fa-brands fa-deskpro"
  }, {
    name: "fa-brave",
    cssRule: "fa-brands fa-brave"
  }, {
    name: "fa-sistrix",
    cssRule: "fa-brands fa-sistrix"
  }, {
    name: "fa-instagram-square",
    cssRule: "fa-brands fa-instagram-square"
  }, {
    name: "fa-battle-net",
    cssRule: "fa-brands fa-battle-net"
  }, {
    name: "fa-the-red-yeti",
    cssRule: "fa-brands fa-the-red-yeti"
  }, {
    name: "fa-hacker-news-square",
    cssRule: "fa-brands fa-hacker-news-square"
  }, {
    name: "fa-edge",
    cssRule: "fa-brands fa-edge"
  }, {
    name: "fa-threads",
    cssRule: "fa-brands fa-threads"
  }, {
    name: "fa-napster",
    cssRule: "fa-brands fa-napster"
  }, {
    name: "fa-snapchat-square",
    cssRule: "fa-brands fa-snapchat-square"
  }, {
    name: "fa-google-plus-g",
    cssRule: "fa-brands fa-google-plus-g"
  }, {
    name: "fa-artstation",
    cssRule: "fa-brands fa-artstation"
  }, {
    name: "fa-markdown",
    cssRule: "fa-brands fa-markdown"
  }, {
    name: "fa-sourcetree",
    cssRule: "fa-brands fa-sourcetree"
  }, {
    name: "fa-google-plus",
    cssRule: "fa-brands fa-google-plus"
  }, {
    name: "fa-diaspora",
    cssRule: "fa-brands fa-diaspora"
  }, {
    name: "fa-foursquare",
    cssRule: "fa-brands fa-foursquare"
  }, {
    name: "fa-stack-overflow",
    cssRule: "fa-brands fa-stack-overflow"
  }, {
    name: "fa-github-alt",
    cssRule: "fa-brands fa-github-alt"
  }, {
    name: "fa-phoenix-squadron",
    cssRule: "fa-brands fa-phoenix-squadron"
  }, {
    name: "fa-pagelines",
    cssRule: "fa-brands fa-pagelines"
  }, {
    name: "fa-algolia",
    cssRule: "fa-brands fa-algolia"
  }, {
    name: "fa-red-river",
    cssRule: "fa-brands fa-red-river"
  }, {
    name: "fa-creative-commons-sa",
    cssRule: "fa-brands fa-creative-commons-sa"
  }, {
    name: "fa-safari",
    cssRule: "fa-brands fa-safari"
  }, {
    name: "fa-google",
    cssRule: "fa-brands fa-google"
  }, {
    name: "fa-font-awesome-alt",
    cssRule: "fa-brands fa-font-awesome-alt"
  }, {
    name: "fa-atlassian",
    cssRule: "fa-brands fa-atlassian"
  }, {
    name: "fa-linkedin-in",
    cssRule: "fa-brands fa-linkedin-in"
  }, {
    name: "fa-digital-ocean",
    cssRule: "fa-brands fa-digital-ocean"
  }, {
    name: "fa-nimblr",
    cssRule: "fa-brands fa-nimblr"
  }, {
    name: "fa-chromecast",
    cssRule: "fa-brands fa-chromecast"
  }, {
    name: "fa-evernote",
    cssRule: "fa-brands fa-evernote"
  }, {
    name: "fa-hacker-news",
    cssRule: "fa-brands fa-hacker-news"
  }, {
    name: "fa-creative-commons-sampling",
    cssRule: "fa-brands fa-creative-commons-sampling"
  }, {
    name: "fa-adversal",
    cssRule: "fa-brands fa-adversal"
  }, {
    name: "fa-creative-commons",
    cssRule: "fa-brands fa-creative-commons"
  }, {
    name: "fa-watchman-monitoring",
    cssRule: "fa-brands fa-watchman-monitoring"
  }, {
    name: "fa-fonticons",
    cssRule: "fa-brands fa-fonticons"
  }, {
    name: "fa-weixin",
    cssRule: "fa-brands fa-weixin"
  }, {
    name: "fa-shirtsinbulk",
    cssRule: "fa-brands fa-shirtsinbulk"
  }, {
    name: "fa-codepen",
    cssRule: "fa-brands fa-codepen"
  }, {
    name: "fa-git-alt",
    cssRule: "fa-brands fa-git-alt"
  }, {
    name: "fa-lyft",
    cssRule: "fa-brands fa-lyft"
  }, {
    name: "fa-rev",
    cssRule: "fa-brands fa-rev"
  }, {
    name: "fa-windows",
    cssRule: "fa-brands fa-windows"
  }, {
    name: "fa-wizards-of-the-coast",
    cssRule: "fa-brands fa-wizards-of-the-coast"
  }, {
    name: "fa-square-viadeo",
    cssRule: "fa-brands fa-square-viadeo"
  }, {
    name: "fa-meetup",
    cssRule: "fa-brands fa-meetup"
  }, {
    name: "fa-centos",
    cssRule: "fa-brands fa-centos"
  }, {
    name: "fa-adn",
    cssRule: "fa-brands fa-adn"
  }, {
    name: "fa-cloudsmith",
    cssRule: "fa-brands fa-cloudsmith"
  }, {
    name: "fa-opensuse",
    cssRule: "fa-brands fa-opensuse"
  }, {
    name: "fa-pied-piper-alt",
    cssRule: "fa-brands fa-pied-piper-alt"
  }, {
    name: "fa-dribbble-square",
    cssRule: "fa-brands fa-dribbble-square"
  }, {
    name: "fa-codiepie",
    cssRule: "fa-brands fa-codiepie"
  }, {
    name: "fa-node",
    cssRule: "fa-brands fa-node"
  }, {
    name: "fa-mix",
    cssRule: "fa-brands fa-mix"
  }, {
    name: "fa-steam",
    cssRule: "fa-brands fa-steam"
  }, {
    name: "fa-cc-apple-pay",
    cssRule: "fa-brands fa-cc-apple-pay"
  }, {
    name: "fa-scribd",
    cssRule: "fa-brands fa-scribd"
  }, {
    name: "fa-debian",
    cssRule: "fa-brands fa-debian"
  }, {
    name: "fa-openid",
    cssRule: "fa-brands fa-openid"
  }, {
    name: "fa-instalod",
    cssRule: "fa-brands fa-instalod"
  }, {
    name: "fa-files-pinwheel",
    cssRule: "fa-brands fa-files-pinwheel"
  }, {
    name: "fa-expeditedssl",
    cssRule: "fa-brands fa-expeditedssl"
  }, {
    name: "fa-sellcast",
    cssRule: "fa-brands fa-sellcast"
  }, {
    name: "fa-square-twitter",
    cssRule: "fa-brands fa-square-twitter"
  }, {
    name: "fa-r-project",
    cssRule: "fa-brands fa-r-project"
  }, {
    name: "fa-delicious",
    cssRule: "fa-brands fa-delicious"
  }, {
    name: "fa-freebsd",
    cssRule: "fa-brands fa-freebsd"
  }, {
    name: "fa-vuejs",
    cssRule: "fa-brands fa-vuejs"
  }, {
    name: "fa-accusoft",
    cssRule: "fa-brands fa-accusoft"
  }, {
    name: "fa-ioxhost",
    cssRule: "fa-brands fa-ioxhost"
  }, {
    name: "fa-fonticons-fi",
    cssRule: "fa-brands fa-fonticons-fi"
  }, {
    name: "fa-app-store",
    cssRule: "fa-brands fa-app-store"
  }, {
    name: "fa-cc-mastercard",
    cssRule: "fa-brands fa-cc-mastercard"
  }, {
    name: "fa-itunes-note",
    cssRule: "fa-brands fa-itunes-note"
  }, {
    name: "fa-golang",
    cssRule: "fa-brands fa-golang"
  }, {
    name: "fa-kickstarter",
    cssRule: "fa-brands fa-kickstarter"
  }, {
    name: "fa-grav",
    cssRule: "fa-brands fa-grav"
  }, {
    name: "fa-weibo",
    cssRule: "fa-brands fa-weibo"
  }, {
    name: "fa-uncharted",
    cssRule: "fa-brands fa-uncharted"
  }, {
    name: "fa-firstdraft",
    cssRule: "fa-brands fa-firstdraft"
  }, {
    name: "fa-square-youtube",
    cssRule: "fa-brands fa-square-youtube"
  }, {
    name: "fa-wikipedia-w",
    cssRule: "fa-brands fa-wikipedia-w"
  }, {
    name: "fa-rendact",
    cssRule: "fa-brands fa-rendact"
  }, {
    name: "fa-angellist",
    cssRule: "fa-brands fa-angellist"
  }, {
    name: "fa-galactic-republic",
    cssRule: "fa-brands fa-galactic-republic"
  }, {
    name: "fa-nfc-directional",
    cssRule: "fa-brands fa-nfc-directional"
  }, {
    name: "fa-skype",
    cssRule: "fa-brands fa-skype"
  }, {
    name: "fa-joget",
    cssRule: "fa-brands fa-joget"
  }, {
    name: "fa-fedora",
    cssRule: "fa-brands fa-fedora"
  }, {
    name: "fa-stripe-s",
    cssRule: "fa-brands fa-stripe-s"
  }, {
    name: "fa-meta",
    cssRule: "fa-brands fa-meta"
  }, {
    name: "fa-laravel",
    cssRule: "fa-brands fa-laravel"
  }, {
    name: "fa-hotjar",
    cssRule: "fa-brands fa-hotjar"
  }, {
    name: "fa-bluetooth-b",
    cssRule: "fa-brands fa-bluetooth-b"
  }, {
    name: "fa-square-letterboxd",
    cssRule: "fa-brands fa-square-letterboxd"
  }, {
    name: "fa-sticker-mule",
    cssRule: "fa-brands fa-sticker-mule"
  }, {
    name: "fa-creative-commons-zero",
    cssRule: "fa-brands fa-creative-commons-zero"
  }, {
    name: "fa-hips",
    cssRule: "fa-brands fa-hips"
  }, {
    name: "fa-css",
    cssRule: "fa-brands fa-css"
  }, {
    name: "fa-behance",
    cssRule: "fa-brands fa-behance"
  }, {
    name: "fa-reddit",
    cssRule: "fa-brands fa-reddit"
  }, {
    name: "fa-discord",
    cssRule: "fa-brands fa-discord"
  }, {
    name: "fa-chrome",
    cssRule: "fa-brands fa-chrome"
  }, {
    name: "fa-app-store-ios",
    cssRule: "fa-brands fa-app-store-ios"
  }, {
    name: "fa-cc-discover",
    cssRule: "fa-brands fa-cc-discover"
  }, {
    name: "fa-wpbeginner",
    cssRule: "fa-brands fa-wpbeginner"
  }, {
    name: "fa-confluence",
    cssRule: "fa-brands fa-confluence"
  }, {
    name: "fa-shoelace",
    cssRule: "fa-brands fa-shoelace"
  }, {
    name: "fa-mdb",
    cssRule: "fa-brands fa-mdb"
  }, {
    name: "fa-dochub",
    cssRule: "fa-brands fa-dochub"
  }, {
    name: "fa-accessible-icon",
    cssRule: "fa-brands fa-accessible-icon"
  }, {
    name: "fa-ebay",
    cssRule: "fa-brands fa-ebay"
  }, {
    name: "fa-amazon",
    cssRule: "fa-brands fa-amazon"
  }, {
    name: "fa-unsplash",
    cssRule: "fa-brands fa-unsplash"
  }, {
    name: "fa-yarn",
    cssRule: "fa-brands fa-yarn"
  }, {
    name: "fa-square-steam",
    cssRule: "fa-brands fa-square-steam"
  }, {
    name: "fa-500px",
    cssRule: "fa-brands fa-500px"
  }, {
    name: "fa-square-vimeo",
    cssRule: "fa-brands fa-square-vimeo"
  }, {
    name: "fa-asymmetrik",
    cssRule: "fa-brands fa-asymmetrik"
  }, {
    name: "fa-font-awesome",
    cssRule: "fa-brands fa-font-awesome"
  }, {
    name: "fa-gratipay",
    cssRule: "fa-brands fa-gratipay"
  }, {
    name: "fa-apple",
    cssRule: "fa-brands fa-apple"
  }, {
    name: "fa-hive",
    cssRule: "fa-brands fa-hive"
  }, {
    name: "fa-gitkraken",
    cssRule: "fa-brands fa-gitkraken"
  }, {
    name: "fa-keybase",
    cssRule: "fa-brands fa-keybase"
  }, {
    name: "fa-apple-pay",
    cssRule: "fa-brands fa-apple-pay"
  }, {
    name: "fa-padlet",
    cssRule: "fa-brands fa-padlet"
  }, {
    name: "fa-amazon-pay",
    cssRule: "fa-brands fa-amazon-pay"
  }, {
    name: "fa-github-square",
    cssRule: "fa-brands fa-github-square"
  }, {
    name: "fa-stumbleupon",
    cssRule: "fa-brands fa-stumbleupon"
  }, {
    name: "fa-fedex",
    cssRule: "fa-brands fa-fedex"
  }, {
    name: "fa-phoenix-framework",
    cssRule: "fa-brands fa-phoenix-framework"
  }, {
    name: "fa-shopify",
    cssRule: "fa-brands fa-shopify"
  }, {
    name: "fa-neos",
    cssRule: "fa-brands fa-neos"
  }, {
    name: "fa-square-threads",
    cssRule: "fa-brands fa-square-threads"
  }, {
    name: "fa-hackerrank",
    cssRule: "fa-brands fa-hackerrank"
  }, {
    name: "fa-researchgate",
    cssRule: "fa-brands fa-researchgate"
  }, {
    name: "fa-swift",
    cssRule: "fa-brands fa-swift"
  }, {
    name: "fa-angular",
    cssRule: "fa-brands fa-angular"
  }, {
    name: "fa-speakap",
    cssRule: "fa-brands fa-speakap"
  }, {
    name: "fa-angrycreative",
    cssRule: "fa-brands fa-angrycreative"
  }, {
    name: "fa-y-combinator",
    cssRule: "fa-brands fa-y-combinator"
  }, {
    name: "fa-empire",
    cssRule: "fa-brands fa-empire"
  }, {
    name: "fa-envira",
    cssRule: "fa-brands fa-envira"
  }, {
    name: "fa-google-scholar",
    cssRule: "fa-brands fa-google-scholar"
  }, {
    name: "fa-gitlab-square",
    cssRule: "fa-brands fa-gitlab-square"
  }, {
    name: "fa-studiovinari",
    cssRule: "fa-brands fa-studiovinari"
  }, {
    name: "fa-pied-piper",
    cssRule: "fa-brands fa-pied-piper"
  }, {
    name: "fa-wordpress",
    cssRule: "fa-brands fa-wordpress"
  }, {
    name: "fa-product-hunt",
    cssRule: "fa-brands fa-product-hunt"
  }, {
    name: "fa-firefox",
    cssRule: "fa-brands fa-firefox"
  }, {
    name: "fa-linode",
    cssRule: "fa-brands fa-linode"
  }, {
    name: "fa-goodreads",
    cssRule: "fa-brands fa-goodreads"
  }, {
    name: "fa-odnoklassniki-square",
    cssRule: "fa-brands fa-odnoklassniki-square"
  }, {
    name: "fa-jsfiddle",
    cssRule: "fa-brands fa-jsfiddle"
  }, {
    name: "fa-sith",
    cssRule: "fa-brands fa-sith"
  }, {
    name: "fa-themeisle",
    cssRule: "fa-brands fa-themeisle"
  }, {
    name: "fa-page4",
    cssRule: "fa-brands fa-page4"
  }, {
    name: "fa-hashnode",
    cssRule: "fa-brands fa-hashnode"
  }, {
    name: "fa-react",
    cssRule: "fa-brands fa-react"
  }, {
    name: "fa-cc-paypal",
    cssRule: "fa-brands fa-cc-paypal"
  }, {
    name: "fa-squarespace",
    cssRule: "fa-brands fa-squarespace"
  }, {
    name: "fa-cc-stripe",
    cssRule: "fa-brands fa-cc-stripe"
  }, {
    name: "fa-creative-commons-share",
    cssRule: "fa-brands fa-creative-commons-share"
  }, {
    name: "fa-bitcoin",
    cssRule: "fa-brands fa-bitcoin"
  }, {
    name: "fa-keycdn",
    cssRule: "fa-brands fa-keycdn"
  }, {
    name: "fa-opera",
    cssRule: "fa-brands fa-opera"
  }, {
    name: "fa-itch-io",
    cssRule: "fa-brands fa-itch-io"
  }, {
    name: "fa-umbraco",
    cssRule: "fa-brands fa-umbraco"
  }, {
    name: "fa-galactic-senate",
    cssRule: "fa-brands fa-galactic-senate"
  }, {
    name: "fa-ubuntu",
    cssRule: "fa-brands fa-ubuntu"
  }, {
    name: "fa-draft2digital",
    cssRule: "fa-brands fa-draft2digital"
  }, {
    name: "fa-stripe",
    cssRule: "fa-brands fa-stripe"
  }, {
    name: "fa-houzz",
    cssRule: "fa-brands fa-houzz"
  }, {
    name: "fa-gg",
    cssRule: "fa-brands fa-gg"
  }, {
    name: "fa-dhl",
    cssRule: "fa-brands fa-dhl"
  }, {
    name: "fa-pinterest-square",
    cssRule: "fa-brands fa-pinterest-square"
  }, {
    name: "fa-xing",
    cssRule: "fa-brands fa-xing"
  }, {
    name: "fa-blackberry",
    cssRule: "fa-brands fa-blackberry"
  }, {
    name: "fa-creative-commons-pd",
    cssRule: "fa-brands fa-creative-commons-pd"
  }, {
    name: "fa-playstation",
    cssRule: "fa-brands fa-playstation"
  }, {
    name: "fa-quinscape",
    cssRule: "fa-brands fa-quinscape"
  }, {
    name: "fa-less",
    cssRule: "fa-brands fa-less"
  }, {
    name: "fa-blogger-b",
    cssRule: "fa-brands fa-blogger-b"
  }, {
    name: "fa-opencart",
    cssRule: "fa-brands fa-opencart"
  }, {
    name: "fa-vine",
    cssRule: "fa-brands fa-vine"
  }, {
    name: "fa-signal-messenger",
    cssRule: "fa-brands fa-signal-messenger"
  }, {
    name: "fa-paypal",
    cssRule: "fa-brands fa-paypal"
  }, {
    name: "fa-gitlab",
    cssRule: "fa-brands fa-gitlab"
  }, {
    name: "fa-typo3",
    cssRule: "fa-brands fa-typo3"
  }, {
    name: "fa-reddit-alien",
    cssRule: "fa-brands fa-reddit-alien"
  }, {
    name: "fa-yahoo",
    cssRule: "fa-brands fa-yahoo"
  }, {
    name: "fa-dailymotion",
    cssRule: "fa-brands fa-dailymotion"
  }, {
    name: "fa-affiliatetheme",
    cssRule: "fa-brands fa-affiliatetheme"
  }, {
    name: "fa-pied-piper-pp",
    cssRule: "fa-brands fa-pied-piper-pp"
  }, {
    name: "fa-bootstrap",
    cssRule: "fa-brands fa-bootstrap"
  }, {
    name: "fa-odnoklassniki",
    cssRule: "fa-brands fa-odnoklassniki"
  }, {
    name: "fa-nfc-symbol",
    cssRule: "fa-brands fa-nfc-symbol"
  }, {
    name: "fa-mintbit",
    cssRule: "fa-brands fa-mintbit"
  }, {
    name: "fa-ethereum",
    cssRule: "fa-brands fa-ethereum"
  }, {
    name: "fa-speaker-deck",
    cssRule: "fa-brands fa-speaker-deck"
  }, {
    name: "fa-creative-commons-nc-eu",
    cssRule: "fa-brands fa-creative-commons-nc-eu"
  }, {
    name: "fa-patreon",
    cssRule: "fa-brands fa-patreon"
  }, {
    name: "fa-avianex",
    cssRule: "fa-brands fa-avianex"
  }, {
    name: "fa-ello",
    cssRule: "fa-brands fa-ello"
  }, {
    name: "fa-gofore",
    cssRule: "fa-brands fa-gofore"
  }, {
    name: "fa-bimobject",
    cssRule: "fa-brands fa-bimobject"
  }, {
    name: "fa-brave-reverse",
    cssRule: "fa-brands fa-brave-reverse"
  }, {
    name: "fa-facebook-f",
    cssRule: "fa-brands fa-facebook-f"
  }, {
    name: "fa-google-plus-square",
    cssRule: "fa-brands fa-google-plus-square"
  }, {
    name: "fa-web-awesome",
    cssRule: "fa-brands fa-web-awesome"
  }, {
    name: "fa-mandalorian",
    cssRule: "fa-brands fa-mandalorian"
  }, {
    name: "fa-first-order-alt",
    cssRule: "fa-brands fa-first-order-alt"
  }, {
    name: "fa-osi",
    cssRule: "fa-brands fa-osi"
  }, {
    name: "fa-google-wallet",
    cssRule: "fa-brands fa-google-wallet"
  }, {
    name: "fa-d-and-d-beyond",
    cssRule: "fa-brands fa-d-and-d-beyond"
  }, {
    name: "fa-periscope",
    cssRule: "fa-brands fa-periscope"
  }, {
    name: "fa-fulcrum",
    cssRule: "fa-brands fa-fulcrum"
  }, {
    name: "fa-cloudscale",
    cssRule: "fa-brands fa-cloudscale"
  }, {
    name: "fa-forumbee",
    cssRule: "fa-brands fa-forumbee"
  }, {
    name: "fa-mizuni",
    cssRule: "fa-brands fa-mizuni"
  }, {
    name: "fa-schlix",
    cssRule: "fa-brands fa-schlix"
  }, {
    name: "fa-square-xing",
    cssRule: "fa-brands fa-square-xing"
  }, {
    name: "fa-bandcamp",
    cssRule: "fa-brands fa-bandcamp"
  }, {
    name: "fa-wpforms",
    cssRule: "fa-brands fa-wpforms"
  }, {
    name: "fa-cloudversify",
    cssRule: "fa-brands fa-cloudversify"
  }, {
    name: "fa-usps",
    cssRule: "fa-brands fa-usps"
  }, {
    name: "fa-megaport",
    cssRule: "fa-brands fa-megaport"
  }, {
    name: "fa-magento",
    cssRule: "fa-brands fa-magento"
  }, {
    name: "fa-spotify",
    cssRule: "fa-brands fa-spotify"
  }, {
    name: "fa-optin-monster",
    cssRule: "fa-brands fa-optin-monster"
  }, {
    name: "fa-fly",
    cssRule: "fa-brands fa-fly"
  }, {
    name: "fa-square-bluesky",
    cssRule: "fa-brands fa-square-bluesky"
  }, {
    name: "fa-aviato",
    cssRule: "fa-brands fa-aviato"
  }, {
    name: "fa-itunes",
    cssRule: "fa-brands fa-itunes"
  }, {
    name: "fa-cuttlefish",
    cssRule: "fa-brands fa-cuttlefish"
  }, {
    name: "fa-blogger",
    cssRule: "fa-brands fa-blogger"
  }, {
    name: "fa-flickr",
    cssRule: "fa-brands fa-flickr"
  }, {
    name: "fa-viber",
    cssRule: "fa-brands fa-viber"
  }, {
    name: "fa-soundcloud",
    cssRule: "fa-brands fa-soundcloud"
  }, {
    name: "fa-digg",
    cssRule: "fa-brands fa-digg"
  }, {
    name: "fa-tencent-weibo",
    cssRule: "fa-brands fa-tencent-weibo"
  }, {
    name: "fa-letterboxd",
    cssRule: "fa-brands fa-letterboxd"
  }, {
    name: "fa-symfony",
    cssRule: "fa-brands fa-symfony"
  }, {
    name: "fa-maxcdn",
    cssRule: "fa-brands fa-maxcdn"
  }, {
    name: "fa-etsy",
    cssRule: "fa-brands fa-etsy"
  }, {
    name: "fa-facebook-messenger",
    cssRule: "fa-brands fa-facebook-messenger"
  }, {
    name: "fa-audible",
    cssRule: "fa-brands fa-audible"
  }, {
    name: "fa-think-peaks",
    cssRule: "fa-brands fa-think-peaks"
  }, {
    name: "fa-bilibili",
    cssRule: "fa-brands fa-bilibili"
  }, {
    name: "fa-erlang",
    cssRule: "fa-brands fa-erlang"
  }, {
    name: "fa-x-twitter",
    cssRule: "fa-brands fa-x-twitter"
  }, {
    name: "fa-cotton-bureau",
    cssRule: "fa-brands fa-cotton-bureau"
  }, {
    name: "fa-dashcube",
    cssRule: "fa-brands fa-dashcube"
  }, {
    name: "fa-42-group",
    cssRule: "fa-brands fa-42-group"
  }, {
    name: "fa-stack-exchange",
    cssRule: "fa-brands fa-stack-exchange"
  }, {
    name: "fa-elementor",
    cssRule: "fa-brands fa-elementor"
  }, {
    name: "fa-pied-piper-square",
    cssRule: "fa-brands fa-pied-piper-square"
  }, {
    name: "fa-creative-commons-nd",
    cssRule: "fa-brands fa-creative-commons-nd"
  }, {
    name: "fa-palfed",
    cssRule: "fa-brands fa-palfed"
  }, {
    name: "fa-superpowers",
    cssRule: "fa-brands fa-superpowers"
  }, {
    name: "fa-resolving",
    cssRule: "fa-brands fa-resolving"
  }, {
    name: "fa-xbox",
    cssRule: "fa-brands fa-xbox"
  }, {
    name: "fa-square-web-awesome-stroke",
    cssRule: "fa-brands fa-square-web-awesome-stroke"
  }, {
    name: "fa-searchengin",
    cssRule: "fa-brands fa-searchengin"
  }, {
    name: "fa-tiktok",
    cssRule: "fa-brands fa-tiktok"
  }, {
    name: "fa-facebook-square",
    cssRule: "fa-brands fa-facebook-square"
  }, {
    name: "fa-renren",
    cssRule: "fa-brands fa-renren"
  }, {
    name: "fa-linux",
    cssRule: "fa-brands fa-linux"
  }, {
    name: "fa-glide",
    cssRule: "fa-brands fa-glide"
  }, {
    name: "fa-linkedin",
    cssRule: "fa-brands fa-linkedin"
  }, {
    name: "fa-hubspot",
    cssRule: "fa-brands fa-hubspot"
  }, {
    name: "fa-deploydog",
    cssRule: "fa-brands fa-deploydog"
  }, {
    name: "fa-twitch",
    cssRule: "fa-brands fa-twitch"
  }, {
    name: "fa-flutter",
    cssRule: "fa-brands fa-flutter"
  }, {
    name: "fa-ravelry",
    cssRule: "fa-brands fa-ravelry"
  }, {
    name: "fa-mixer",
    cssRule: "fa-brands fa-mixer"
  }, {
    name: "fa-lastfm-square",
    cssRule: "fa-brands fa-lastfm-square"
  }, {
    name: "fa-vimeo",
    cssRule: "fa-brands fa-vimeo"
  }, {
    name: "fa-mendeley",
    cssRule: "fa-brands fa-mendeley"
  }, {
    name: "fa-uniregistry",
    cssRule: "fa-brands fa-uniregistry"
  }, {
    name: "fa-figma",
    cssRule: "fa-brands fa-figma"
  }, {
    name: "fa-creative-commons-remix",
    cssRule: "fa-brands fa-creative-commons-remix"
  }, {
    name: "fa-cc-amazon-pay",
    cssRule: "fa-brands fa-cc-amazon-pay"
  }, {
    name: "fa-dropbox",
    cssRule: "fa-brands fa-dropbox"
  }, {
    name: "fa-instagram",
    cssRule: "fa-brands fa-instagram"
  }, {
    name: "fa-cmplid",
    cssRule: "fa-brands fa-cmplid"
  }, {
    name: "fa-upwork",
    cssRule: "fa-brands fa-upwork"
  }, {
    name: "fa-facebook",
    cssRule: "fa-brands fa-facebook"
  }, {
    name: "fa-gripfire",
    cssRule: "fa-brands fa-gripfire"
  }, {
    name: "fa-jedi-order",
    cssRule: "fa-brands fa-jedi-order"
  }, {
    name: "fa-uikit",
    cssRule: "fa-brands fa-uikit"
  }, {
    name: "fa-fort-awesome-alt",
    cssRule: "fa-brands fa-fort-awesome-alt"
  }, {
    name: "fa-phabricator",
    cssRule: "fa-brands fa-phabricator"
  }, {
    name: "fa-ussunnah",
    cssRule: "fa-brands fa-ussunnah"
  }, {
    name: "fa-earlybirds",
    cssRule: "fa-brands fa-earlybirds"
  }, {
    name: "fa-trade-federation",
    cssRule: "fa-brands fa-trade-federation"
  }, {
    name: "fa-autoprefixer",
    cssRule: "fa-brands fa-autoprefixer"
  }, {
    name: "fa-whatsapp",
    cssRule: "fa-brands fa-whatsapp"
  }, {
    name: "fa-square-upwork",
    cssRule: "fa-brands fa-square-upwork"
  }, {
    name: "fa-slideshare",
    cssRule: "fa-brands fa-slideshare"
  }, {
    name: "fa-google-play",
    cssRule: "fa-brands fa-google-play"
  }, {
    name: "fa-viadeo",
    cssRule: "fa-brands fa-viadeo"
  }, {
    name: "fa-line",
    cssRule: "fa-brands fa-line"
  }, {
    name: "fa-google-drive",
    cssRule: "fa-brands fa-google-drive"
  }, {
    name: "fa-servicestack",
    cssRule: "fa-brands fa-servicestack"
  }, {
    name: "fa-simplybuilt",
    cssRule: "fa-brands fa-simplybuilt"
  }, {
    name: "fa-bitbucket",
    cssRule: "fa-brands fa-bitbucket"
  }, {
    name: "fa-imdb",
    cssRule: "fa-brands fa-imdb"
  }, {
    name: "fa-deezer",
    cssRule: "fa-brands fa-deezer"
  }, {
    name: "fa-raspberry-pi",
    cssRule: "fa-brands fa-raspberry-pi"
  }, {
    name: "fa-jira",
    cssRule: "fa-brands fa-jira"
  }, {
    name: "fa-docker",
    cssRule: "fa-brands fa-docker"
  }, {
    name: "fa-screenpal",
    cssRule: "fa-brands fa-screenpal"
  }, {
    name: "fa-bluetooth",
    cssRule: "fa-brands fa-bluetooth"
  }, {
    name: "fa-gitter",
    cssRule: "fa-brands fa-gitter"
  }, {
    name: "fa-d-and-d",
    cssRule: "fa-brands fa-d-and-d"
  }, {
    name: "fa-microblog",
    cssRule: "fa-brands fa-microblog"
  }, {
    name: "fa-cc-diners-club",
    cssRule: "fa-brands fa-cc-diners-club"
  }, {
    name: "fa-gg-circle",
    cssRule: "fa-brands fa-gg-circle"
  }, {
    name: "fa-pied-piper-hat",
    cssRule: "fa-brands fa-pied-piper-hat"
  }, {
    name: "fa-kickstarter-k",
    cssRule: "fa-brands fa-kickstarter-k"
  }, {
    name: "fa-yandex",
    cssRule: "fa-brands fa-yandex"
  }, {
    name: "fa-readme",
    cssRule: "fa-brands fa-readme"
  }, {
    name: "fa-html5",
    cssRule: "fa-brands fa-html5"
  }, {
    name: "fa-sellsy",
    cssRule: "fa-brands fa-sellsy"
  }, {
    name: "fa-square-web-awesome",
    cssRule: "fa-brands fa-square-web-awesome"
  }, {
    name: "fa-sass",
    cssRule: "fa-brands fa-sass"
  }, {
    name: "fa-wirsindhandwerk",
    cssRule: "fa-brands fa-wirsindhandwerk"
  }, {
    name: "fa-buromobelexperte",
    cssRule: "fa-brands fa-buromobelexperte"
  }, {
    name: "fa-salesforce",
    cssRule: "fa-brands fa-salesforce"
  }, {
    name: "fa-octopus-deploy",
    cssRule: "fa-brands fa-octopus-deploy"
  }, {
    name: "fa-medapps",
    cssRule: "fa-brands fa-medapps"
  }, {
    name: "fa-ns8",
    cssRule: "fa-brands fa-ns8"
  }, {
    name: "fa-pinterest-p",
    cssRule: "fa-brands fa-pinterest-p"
  }, {
    name: "fa-apper",
    cssRule: "fa-brands fa-apper"
  }, {
    name: "fa-fort-awesome",
    cssRule: "fa-brands fa-fort-awesome"
  }, {
    name: "fa-waze",
    cssRule: "fa-brands fa-waze"
  }, {
    name: "fa-bluesky",
    cssRule: "fa-brands fa-bluesky"
  }, {
    name: "fa-cc-jcb",
    cssRule: "fa-brands fa-cc-jcb"
  }, {
    name: "fa-snapchat",
    cssRule: "fa-brands fa-snapchat"
  }, {
    name: "fa-fantasy-flight-games",
    cssRule: "fa-brands fa-fantasy-flight-games"
  }, {
    name: "fa-rust",
    cssRule: "fa-brands fa-rust"
  }, {
    name: "fa-wix",
    cssRule: "fa-brands fa-wix"
  }, {
    name: "fa-behance-square",
    cssRule: "fa-brands fa-behance-square"
  }, {
    name: "fa-supple",
    cssRule: "fa-brands fa-supple"
  }, {
    name: "fa-webflow",
    cssRule: "fa-brands fa-webflow"
  }, {
    name: "fa-rebel",
    cssRule: "fa-brands fa-rebel"
  }, {
    name: "fa-css3",
    cssRule: "fa-brands fa-css3"
  }, {
    name: "fa-staylinked",
    cssRule: "fa-brands fa-staylinked"
  }, {
    name: "fa-kaggle",
    cssRule: "fa-brands fa-kaggle"
  }, {
    name: "fa-space-awesome",
    cssRule: "fa-brands fa-space-awesome"
  }, {
    name: "fa-deviantart",
    cssRule: "fa-brands fa-deviantart"
  }, {
    name: "fa-cpanel",
    cssRule: "fa-brands fa-cpanel"
  }, {
    name: "fa-goodreads-g",
    cssRule: "fa-brands fa-goodreads-g"
  }, {
    name: "fa-git-square",
    cssRule: "fa-brands fa-git-square"
  }, {
    name: "fa-square-tumblr",
    cssRule: "fa-brands fa-square-tumblr"
  }, {
    name: "fa-trello",
    cssRule: "fa-brands fa-trello"
  }, {
    name: "fa-creative-commons-nc-jp",
    cssRule: "fa-brands fa-creative-commons-nc-jp"
  }, {
    name: "fa-get-pocket",
    cssRule: "fa-brands fa-get-pocket"
  }, {
    name: "fa-perbyte",
    cssRule: "fa-brands fa-perbyte"
  }, {
    name: "fa-grunt",
    cssRule: "fa-brands fa-grunt"
  }, {
    name: "fa-weebly",
    cssRule: "fa-brands fa-weebly"
  }, {
    name: "fa-connectdevelop",
    cssRule: "fa-brands fa-connectdevelop"
  }, {
    name: "fa-leanpub",
    cssRule: "fa-brands fa-leanpub"
  }, {
    name: "fa-black-tie",
    cssRule: "fa-brands fa-black-tie"
  }, {
    name: "fa-themeco",
    cssRule: "fa-brands fa-themeco"
  }, {
    name: "fa-python",
    cssRule: "fa-brands fa-python"
  }, {
    name: "fa-android",
    cssRule: "fa-brands fa-android"
  }, {
    name: "fa-bots",
    cssRule: "fa-brands fa-bots"
  }, {
    name: "fa-free-code-camp",
    cssRule: "fa-brands fa-free-code-camp"
  }, {
    name: "fa-hornbill",
    cssRule: "fa-brands fa-hornbill"
  }, {
    name: "fa-js",
    cssRule: "fa-brands fa-js"
  }, {
    name: "fa-ideal",
    cssRule: "fa-brands fa-ideal"
  }, {
    name: "fa-git",
    cssRule: "fa-brands fa-git"
  }, {
    name: "fa-dev",
    cssRule: "fa-brands fa-dev"
  }, {
    name: "fa-sketch",
    cssRule: "fa-brands fa-sketch"
  }, {
    name: "fa-yandex-international",
    cssRule: "fa-brands fa-yandex-international"
  }, {
    name: "fa-cc-amex",
    cssRule: "fa-brands fa-cc-amex"
  }, {
    name: "fa-uber",
    cssRule: "fa-brands fa-uber"
  }, {
    name: "fa-github",
    cssRule: "fa-brands fa-github"
  }, {
    name: "fa-php",
    cssRule: "fa-brands fa-php"
  }, {
    name: "fa-alipay",
    cssRule: "fa-brands fa-alipay"
  }, {
    name: "fa-youtube",
    cssRule: "fa-brands fa-youtube"
  }, {
    name: "fa-skyatlas",
    cssRule: "fa-brands fa-skyatlas"
  }, {
    name: "fa-firefox-browser",
    cssRule: "fa-brands fa-firefox-browser"
  }, {
    name: "fa-replyd",
    cssRule: "fa-brands fa-replyd"
  }, {
    name: "fa-suse",
    cssRule: "fa-brands fa-suse"
  }, {
    name: "fa-jenkins",
    cssRule: "fa-brands fa-jenkins"
  }, {
    name: "fa-twitter",
    cssRule: "fa-brands fa-twitter"
  }, {
    name: "fa-rockrms",
    cssRule: "fa-brands fa-rockrms"
  }, {
    name: "fa-pinterest",
    cssRule: "fa-brands fa-pinterest"
  }, {
    name: "fa-buffer",
    cssRule: "fa-brands fa-buffer"
  }, {
    name: "fa-npm",
    cssRule: "fa-brands fa-npm"
  }, {
    name: "fa-yammer",
    cssRule: "fa-brands fa-yammer"
  }, {
    name: "fa-btc",
    cssRule: "fa-brands fa-btc"
  }, {
    name: "fa-dribbble",
    cssRule: "fa-brands fa-dribbble"
  }, {
    name: "fa-stumbleupon-circle",
    cssRule: "fa-brands fa-stumbleupon-circle"
  }, {
    name: "fa-internet-explorer",
    cssRule: "fa-brands fa-internet-explorer"
  }, {
    name: "fa-stubber",
    cssRule: "fa-brands fa-stubber"
  }, {
    name: "fa-telegram",
    cssRule: "fa-brands fa-telegram"
  }, {
    name: "fa-old-republic",
    cssRule: "fa-brands fa-old-republic"
  }, {
    name: "fa-odysee",
    cssRule: "fa-brands fa-odysee"
  }, {
    name: "fa-square-whatsapp",
    cssRule: "fa-brands fa-square-whatsapp"
  }, {
    name: "fa-node-js",
    cssRule: "fa-brands fa-node-js"
  }, {
    name: "fa-edge-legacy",
    cssRule: "fa-brands fa-edge-legacy"
  }, {
    name: "fa-slack",
    cssRule: "fa-brands fa-slack"
  }, {
    name: "fa-medrt",
    cssRule: "fa-brands fa-medrt"
  }, {
    name: "fa-usb",
    cssRule: "fa-brands fa-usb"
  }, {
    name: "fa-tumblr",
    cssRule: "fa-brands fa-tumblr"
  }, {
    name: "fa-vaadin",
    cssRule: "fa-brands fa-vaadin"
  }, {
    name: "fa-quora",
    cssRule: "fa-brands fa-quora"
  }, {
    name: "fa-square-x-twitter",
    cssRule: "fa-brands fa-square-x-twitter"
  }, {
    name: "fa-reacteurope",
    cssRule: "fa-brands fa-reacteurope"
  }, {
    name: "fa-medium",
    cssRule: "fa-brands fa-medium"
  }, {
    name: "fa-amilia",
    cssRule: "fa-brands fa-amilia"
  }, {
    name: "fa-mixcloud",
    cssRule: "fa-brands fa-mixcloud"
  }, {
    name: "fa-flipboard",
    cssRule: "fa-brands fa-flipboard"
  }, {
    name: "fa-viacoin",
    cssRule: "fa-brands fa-viacoin"
  }, {
    name: "fa-critical-role",
    cssRule: "fa-brands fa-critical-role"
  }, {
    name: "fa-sitrox",
    cssRule: "fa-brands fa-sitrox"
  }, {
    name: "fa-discourse",
    cssRule: "fa-brands fa-discourse"
  }, {
    name: "fa-joomla",
    cssRule: "fa-brands fa-joomla"
  }, {
    name: "fa-mastodon",
    cssRule: "fa-brands fa-mastodon"
  }, {
    name: "fa-airbnb",
    cssRule: "fa-brands fa-airbnb"
  }, {
    name: "fa-wolf-pack-battalion",
    cssRule: "fa-brands fa-wolf-pack-battalion"
  }, {
    name: "fa-buy-n-large",
    cssRule: "fa-brands fa-buy-n-large"
  }, {
    name: "fa-gulp",
    cssRule: "fa-brands fa-gulp"
  }, {
    name: "fa-creative-commons-sampling-plus",
    cssRule: "fa-brands fa-creative-commons-sampling-plus"
  }, {
    name: "fa-strava",
    cssRule: "fa-brands fa-strava"
  }, {
    name: "fa-ember",
    cssRule: "fa-brands fa-ember"
  }, {
    name: "fa-canadian-maple-leaf",
    cssRule: "fa-brands fa-canadian-maple-leaf"
  }, {
    name: "fa-teamspeak",
    cssRule: "fa-brands fa-teamspeak"
  }, {
    name: "fa-pushed",
    cssRule: "fa-brands fa-pushed"
  }, {
    name: "fa-wordpress-simple",
    cssRule: "fa-brands fa-wordpress-simple"
  }, {
    name: "fa-nutritionix",
    cssRule: "fa-brands fa-nutritionix"
  }, {
    name: "fa-wodu",
    cssRule: "fa-brands fa-wodu"
  }, {
    name: "fa-google-pay",
    cssRule: "fa-brands fa-google-pay"
  }, {
    name: "fa-intercom",
    cssRule: "fa-brands fa-intercom"
  }, {
    name: "fa-zhihu",
    cssRule: "fa-brands fa-zhihu"
  }, {
    name: "fa-korvue",
    cssRule: "fa-brands fa-korvue"
  }, {
    name: "fa-pix",
    cssRule: "fa-brands fa-pix"
  }, {
    name: "fa-steam-symbol",
    cssRule: "fa-brands fa-steam-symbol"
  }]
}, {
  id: 'fontello',
  name: 'Fontello',
  iconList: [{
    name: "user",
    cssRule: "icon-user"
  }, {
    name: "people",
    cssRule: "icon-people"
  }, {
    name: "user-female",
    cssRule: "icon-user-female"
  }, {
    name: "user-follow",
    cssRule: "icon-user-follow"
  }, {
    name: "user-following",
    cssRule: "icon-user-following"
  }, {
    name: "user-unfollow",
    cssRule: "icon-user-unfollow"
  }, {
    name: "login",
    cssRule: "icon-login"
  }, {
    name: "logout",
    cssRule: "icon-logout"
  }, {
    name: "emotsmile",
    cssRule: "icon-emotsmile"
  }, {
    name: "phone",
    cssRule: "icon-phone"
  }, {
    name: "call-end",
    cssRule: "icon-call-end"
  }, {
    name: "call-in",
    cssRule: "icon-call-in"
  }, {
    name: "call-out",
    cssRule: "icon-call-out"
  }, {
    name: "map",
    cssRule: "icon-map"
  }, {
    name: "location-pin",
    cssRule: "icon-location-pin"
  }, {
    name: "direction",
    cssRule: "icon-direction"
  }, {
    name: "directions",
    cssRule: "icon-directions"
  }, {
    name: "compass",
    cssRule: "icon-compass"
  }, {
    name: "layers",
    cssRule: "icon-layers"
  }, {
    name: "menu",
    cssRule: "icon-menu"
  }, {
    name: "list",
    cssRule: "icon-list"
  }, {
    name: "options-vertical",
    cssRule: "icon-options-vertical"
  }, {
    name: "options",
    cssRule: "icon-options"
  }, {
    name: "arrow-down",
    cssRule: "icon-arrow-down"
  }, {
    name: "arrow-left",
    cssRule: "icon-arrow-left"
  }, {
    name: "arrow-right",
    cssRule: "icon-arrow-right"
  }, {
    name: "arrow-up",
    cssRule: "icon-arrow-up"
  }, {
    name: "arrow-up-circle",
    cssRule: "icon-arrow-up-circle"
  }, {
    name: "arrow-left-circle",
    cssRule: "icon-arrow-left-circle"
  }, {
    name: "arrow-right-circle",
    cssRule: "icon-arrow-right-circle"
  }, {
    name: "arrow-down-circle",
    cssRule: "icon-arrow-down-circle"
  }, {
    name: "check",
    cssRule: "icon-check"
  }, {
    name: "clock",
    cssRule: "icon-clock"
  }, {
    name: "plus",
    cssRule: "icon-plus"
  }, {
    name: "minus",
    cssRule: "icon-minus"
  }, {
    name: "close",
    cssRule: "icon-close"
  }, {
    name: "event",
    cssRule: "icon-event"
  }, {
    name: "exclamation",
    cssRule: "icon-exclamation"
  }, {
    name: "organization",
    cssRule: "icon-organization"
  }, {
    name: "trophy",
    cssRule: "icon-trophy"
  }, {
    name: "screen-smartphone",
    cssRule: "icon-screen-smartphone"
  }, {
    name: "screen-desktop",
    cssRule: "icon-screen-desktop"
  }, {
    name: "plane",
    cssRule: "icon-plane"
  }, {
    name: "notebook",
    cssRule: "icon-notebook"
  }, {
    name: "mustache",
    cssRule: "icon-mustache"
  }, {
    name: "mouse",
    cssRule: "icon-mouse"
  }, {
    name: "magnet",
    cssRule: "icon-magnet"
  }, {
    name: "energy",
    cssRule: "icon-energy"
  }, {
    name: "disc",
    cssRule: "icon-disc"
  }, {
    name: "cursor",
    cssRule: "icon-cursor"
  }, {
    name: "cursor-move",
    cssRule: "icon-cursor-move"
  }, {
    name: "crop",
    cssRule: "icon-crop"
  }, {
    name: "chemistry",
    cssRule: "icon-chemistry"
  }, {
    name: "speedometer",
    cssRule: "icon-speedometer"
  }, {
    name: "shield",
    cssRule: "icon-shield"
  }, {
    name: "screen-tablet",
    cssRule: "icon-screen-tablet"
  }, {
    name: "magic-wand",
    cssRule: "icon-magic-wand"
  }, {
    name: "hourglass",
    cssRule: "icon-hourglass"
  }, {
    name: "graduation",
    cssRule: "icon-graduation"
  }, {
    name: "ghost",
    cssRule: "icon-ghost"
  }, {
    name: "game-controller",
    cssRule: "icon-game-controller"
  }, {
    name: "fire",
    cssRule: "icon-fire"
  }, {
    name: "eyeglass",
    cssRule: "icon-eyeglass"
  }, {
    name: "envelope-open",
    cssRule: "icon-envelope-open"
  }, {
    name: "envelope-letter",
    cssRule: "icon-envelope-letter"
  }, {
    name: "bell",
    cssRule: "icon-bell"
  }, {
    name: "badge",
    cssRule: "icon-badge"
  }, {
    name: "anchor",
    cssRule: "icon-anchor"
  }, {
    name: "wallet",
    cssRule: "icon-wallet"
  }, {
    name: "vector",
    cssRule: "icon-vector"
  }, {
    name: "speech",
    cssRule: "icon-speech"
  }, {
    name: "puzzle",
    cssRule: "icon-puzzle"
  }, {
    name: "printer",
    cssRule: "icon-printer"
  }, {
    name: "present",
    cssRule: "icon-present"
  }, {
    name: "playlist",
    cssRule: "icon-playlist"
  }, {
    name: "pin",
    cssRule: "icon-pin"
  }, {
    name: "picture",
    cssRule: "icon-picture"
  }, {
    name: "handbag",
    cssRule: "icon-handbag"
  }, {
    name: "globe-alt",
    cssRule: "icon-globe-alt"
  }, {
    name: "globe",
    cssRule: "icon-globe"
  }, {
    name: "folder-alt",
    cssRule: "icon-folder-alt"
  }, {
    name: "folder",
    cssRule: "icon-folder"
  }, {
    name: "film",
    cssRule: "icon-film"
  }, {
    name: "feed",
    cssRule: "icon-feed"
  }, {
    name: "drop",
    cssRule: "icon-drop"
  }, {
    name: "drawer",
    cssRule: "icon-drawer"
  }, {
    name: "docs",
    cssRule: "icon-docs"
  }, {
    name: "doc",
    cssRule: "icon-doc"
  }, {
    name: "diamond",
    cssRule: "icon-diamond"
  }, {
    name: "cup",
    cssRule: "icon-cup"
  }, {
    name: "calculator",
    cssRule: "icon-calculator"
  }, {
    name: "bubbles",
    cssRule: "icon-bubbles"
  }, {
    name: "briefcase",
    cssRule: "icon-briefcase"
  }, {
    name: "book-open",
    cssRule: "icon-book-open"
  }, {
    name: "basket-loaded",
    cssRule: "icon-basket-loaded"
  }, {
    name: "basket",
    cssRule: "icon-basket"
  }, {
    name: "bag",
    cssRule: "icon-bag"
  }, {
    name: "action-undo",
    cssRule: "icon-action-undo"
  }, {
    name: "action-redo",
    cssRule: "icon-action-redo"
  }, {
    name: "wrench",
    cssRule: "icon-wrench"
  }, {
    name: "umbrella",
    cssRule: "icon-umbrella"
  }, {
    name: "trash",
    cssRule: "icon-trash"
  }, {
    name: "tag",
    cssRule: "icon-tag"
  }, {
    name: "support",
    cssRule: "icon-support"
  }, {
    name: "frame",
    cssRule: "icon-frame"
  }, {
    name: "size-fullscreen",
    cssRule: "icon-size-fullscreen"
  }, {
    name: "size-actual",
    cssRule: "icon-size-actual"
  }, {
    name: "shuffle",
    cssRule: "icon-shuffle"
  }, {
    name: "share-alt",
    cssRule: "icon-share-alt"
  }, {
    name: "share",
    cssRule: "icon-share"
  }, {
    name: "rocket",
    cssRule: "icon-rocket"
  }, {
    name: "question",
    cssRule: "icon-question"
  }, {
    name: "pie-chart",
    cssRule: "icon-pie-chart"
  }, {
    name: "pencil",
    cssRule: "icon-pencil"
  }, {
    name: "note",
    cssRule: "icon-note"
  }, {
    name: "loop",
    cssRule: "icon-loop"
  }, {
    name: "home",
    cssRule: "icon-home"
  }, {
    name: "grid",
    cssRule: "icon-grid"
  }, {
    name: "graph",
    cssRule: "icon-graph"
  }, {
    name: "microphone",
    cssRule: "icon-microphone"
  }, {
    name: "music-tone-alt",
    cssRule: "icon-music-tone-alt"
  }, {
    name: "music-tone",
    cssRule: "icon-music-tone"
  }, {
    name: "earphones-alt",
    cssRule: "icon-earphones-alt"
  }, {
    name: "earphones",
    cssRule: "icon-earphones"
  }, {
    name: "equalizer",
    cssRule: "icon-equalizer"
  }, {
    name: "like",
    cssRule: "icon-like"
  }, {
    name: "dislike",
    cssRule: "icon-dislike"
  }, {
    name: "control-start",
    cssRule: "icon-control-start"
  }, {
    name: "control-rewind",
    cssRule: "icon-control-rewind"
  }, {
    name: "control-play",
    cssRule: "icon-control-play"
  }, {
    name: "control-pause",
    cssRule: "icon-control-pause"
  }, {
    name: "control-forward",
    cssRule: "icon-control-forward"
  }, {
    name: "control-end",
    cssRule: "icon-control-end"
  }, {
    name: "volume-1",
    cssRule: "icon-volume-1"
  }, {
    name: "volume-2",
    cssRule: "icon-volume-2"
  }, {
    name: "volume-off",
    cssRule: "icon-volume-off"
  }, {
    name: "calendar",
    cssRule: "icon-calendar"
  }, {
    name: "bulb",
    cssRule: "icon-bulb"
  }, {
    name: "chart",
    cssRule: "icon-chart"
  }, {
    name: "ban",
    cssRule: "icon-ban"
  }, {
    name: "bubble",
    cssRule: "icon-bubble"
  }, {
    name: "camrecorder",
    cssRule: "icon-camrecorder"
  }, {
    name: "camera",
    cssRule: "icon-camera"
  }, {
    name: "cloud-download",
    cssRule: "icon-cloud-download"
  }, {
    name: "cloud-upload",
    cssRule: "icon-cloud-upload"
  }, {
    name: "envelope",
    cssRule: "icon-envelope"
  }, {
    name: "eye",
    cssRule: "icon-eye"
  }, {
    name: "flag",
    cssRule: "icon-flag"
  }, {
    name: "heart",
    cssRule: "icon-heart"
  }, {
    name: "info",
    cssRule: "icon-info"
  }, {
    name: "key",
    cssRule: "icon-key"
  }, {
    name: "link",
    cssRule: "icon-link"
  }, {
    name: "lock",
    cssRule: "icon-lock"
  }, {
    name: "lock-open",
    cssRule: "icon-lock-open"
  }, {
    name: "magnifier",
    cssRule: "icon-magnifier"
  }, {
    name: "magnifier-add",
    cssRule: "icon-magnifier-add"
  }, {
    name: "magnifier-remove",
    cssRule: "icon-magnifier-remove"
  }, {
    name: "paper-clip",
    cssRule: "icon-paper-clip"
  }, {
    name: "paper-plane",
    cssRule: "icon-paper-plane"
  }, {
    name: "power",
    cssRule: "icon-power"
  }, {
    name: "refresh",
    cssRule: "icon-refresh"
  }, {
    name: "reload",
    cssRule: "icon-reload"
  }, {
    name: "settings",
    cssRule: "icon-settings"
  }, {
    name: "star",
    cssRule: "icon-star"
  }, {
    name: "symbol-female",
    cssRule: "icon-symbol-female"
  }, {
    name: "symbol-male",
    cssRule: "icon-symbol-male"
  }, {
    name: "target",
    cssRule: "icon-target"
  }, {
    name: "credit-card",
    cssRule: "icon-credit-card"
  }, {
    name: "paypal",
    cssRule: "icon-paypal"
  }, {
    name: "social-tumblr",
    cssRule: "icon-social-tumblr"
  }, {
    name: "social-twitter",
    cssRule: "icon-social-twitter"
  }, {
    name: "social-facebook",
    cssRule: "icon-social-facebook"
  }, {
    name: "social-instagram",
    cssRule: "icon-social-instagram"
  }, {
    name: "social-linkedin",
    cssRule: "icon-social-linkedin"
  }, {
    name: "social-pinterest",
    cssRule: "icon-social-pinterest"
  }, {
    name: "social-github",
    cssRule: "icon-social-github"
  }, {
    name: "social-google",
    cssRule: "icon-social-google"
  }, {
    name: "social-reddit",
    cssRule: "icon-social-reddit"
  }, {
    name: "social-skype",
    cssRule: "icon-social-skype"
  }, {
    name: "social-dribbble",
    cssRule: "icon-social-dribbble"
  }, {
    name: "social-behance",
    cssRule: "icon-social-behance"
  }, {
    name: "social-foursqare",
    cssRule: "icon-social-foursqare"
  }, {
    name: "social-soundcloud",
    cssRule: "icon-social-soundcloud"
  }, {
    name: "social-spotify",
    cssRule: "icon-social-spotify"
  }, {
    name: "social-stumbleupon",
    cssRule: "icon-social-stumbleupon"
  }, {
    name: "social-youtube",
    cssRule: "icon-social-youtube"
  }, {
    name: "social-dropbox",
    cssRule: "icon-social-dropbox"
  }, {
    name: "social-vkontakte",
    cssRule: "icon-social-vkontakte"
  }, {
    name: "social-steam",
    cssRule: "icon-social-steam"
  }, {
    name: "user",
    cssRule: "icon-user"
  }, {
    name: "people",
    cssRule: "icon-people"
  }, {
    name: "user-female",
    cssRule: "icon-user-female"
  }, {
    name: "user-follow",
    cssRule: "icon-user-follow"
  }, {
    name: "user-following",
    cssRule: "icon-user-following"
  }, {
    name: "user-unfollow",
    cssRule: "icon-user-unfollow"
  }, {
    name: "login",
    cssRule: "icon-login"
  }, {
    name: "logout",
    cssRule: "icon-logout"
  }, {
    name: "emotsmile",
    cssRule: "icon-emotsmile"
  }, {
    name: "phone",
    cssRule: "icon-phone"
  }, {
    name: "call-end",
    cssRule: "icon-call-end"
  }, {
    name: "call-in",
    cssRule: "icon-call-in"
  }, {
    name: "call-out",
    cssRule: "icon-call-out"
  }, {
    name: "map",
    cssRule: "icon-map"
  }, {
    name: "location-pin",
    cssRule: "icon-location-pin"
  }, {
    name: "direction",
    cssRule: "icon-direction"
  }, {
    name: "directions",
    cssRule: "icon-directions"
  }, {
    name: "compass",
    cssRule: "icon-compass"
  }, {
    name: "layers",
    cssRule: "icon-layers"
  }, {
    name: "menu",
    cssRule: "icon-menu"
  }, {
    name: "list",
    cssRule: "icon-list"
  }, {
    name: "options-vertical",
    cssRule: "icon-options-vertical"
  }, {
    name: "options",
    cssRule: "icon-options"
  }, {
    name: "arrow-down",
    cssRule: "icon-arrow-down"
  }, {
    name: "arrow-left",
    cssRule: "icon-arrow-left"
  }, {
    name: "arrow-right",
    cssRule: "icon-arrow-right"
  }, {
    name: "arrow-up",
    cssRule: "icon-arrow-up"
  }, {
    name: "arrow-up-circle",
    cssRule: "icon-arrow-up-circle"
  }, {
    name: "arrow-left-circle",
    cssRule: "icon-arrow-left-circle"
  }, {
    name: "arrow-right-circle",
    cssRule: "icon-arrow-right-circle"
  }, {
    name: "arrow-down-circle",
    cssRule: "icon-arrow-down-circle"
  }, {
    name: "check",
    cssRule: "icon-check"
  }, {
    name: "clock",
    cssRule: "icon-clock"
  }, {
    name: "plus",
    cssRule: "icon-plus"
  }, {
    name: "minus",
    cssRule: "icon-minus"
  }, {
    name: "close",
    cssRule: "icon-close"
  }, {
    name: "event",
    cssRule: "icon-event"
  }, {
    name: "exclamation",
    cssRule: "icon-exclamation"
  }, {
    name: "organization",
    cssRule: "icon-organization"
  }, {
    name: "trophy",
    cssRule: "icon-trophy"
  }, {
    name: "screen-smartphone",
    cssRule: "icon-screen-smartphone"
  }, {
    name: "screen-desktop",
    cssRule: "icon-screen-desktop"
  }, {
    name: "plane",
    cssRule: "icon-plane"
  }, {
    name: "notebook",
    cssRule: "icon-notebook"
  }, {
    name: "mustache",
    cssRule: "icon-mustache"
  }, {
    name: "mouse",
    cssRule: "icon-mouse"
  }, {
    name: "magnet",
    cssRule: "icon-magnet"
  }, {
    name: "energy",
    cssRule: "icon-energy"
  }, {
    name: "disc",
    cssRule: "icon-disc"
  }, {
    name: "cursor",
    cssRule: "icon-cursor"
  }, {
    name: "cursor-move",
    cssRule: "icon-cursor-move"
  }, {
    name: "crop",
    cssRule: "icon-crop"
  }, {
    name: "chemistry",
    cssRule: "icon-chemistry"
  }, {
    name: "speedometer",
    cssRule: "icon-speedometer"
  }, {
    name: "shield",
    cssRule: "icon-shield"
  }, {
    name: "screen-tablet",
    cssRule: "icon-screen-tablet"
  }, {
    name: "magic-wand",
    cssRule: "icon-magic-wand"
  }, {
    name: "hourglass",
    cssRule: "icon-hourglass"
  }, {
    name: "graduation",
    cssRule: "icon-graduation"
  }, {
    name: "ghost",
    cssRule: "icon-ghost"
  }, {
    name: "game-controller",
    cssRule: "icon-game-controller"
  }, {
    name: "fire",
    cssRule: "icon-fire"
  }, {
    name: "eyeglass",
    cssRule: "icon-eyeglass"
  }, {
    name: "envelope-open",
    cssRule: "icon-envelope-open"
  }, {
    name: "envelope-letter",
    cssRule: "icon-envelope-letter"
  }, {
    name: "bell",
    cssRule: "icon-bell"
  }, {
    name: "badge",
    cssRule: "icon-badge"
  }, {
    name: "anchor",
    cssRule: "icon-anchor"
  }, {
    name: "wallet",
    cssRule: "icon-wallet"
  }, {
    name: "vector",
    cssRule: "icon-vector"
  }, {
    name: "speech",
    cssRule: "icon-speech"
  }, {
    name: "puzzle",
    cssRule: "icon-puzzle"
  }, {
    name: "printer",
    cssRule: "icon-printer"
  }, {
    name: "present",
    cssRule: "icon-present"
  }, {
    name: "playlist",
    cssRule: "icon-playlist"
  }, {
    name: "pin",
    cssRule: "icon-pin"
  }, {
    name: "picture",
    cssRule: "icon-picture"
  }, {
    name: "handbag",
    cssRule: "icon-handbag"
  }, {
    name: "globe-alt",
    cssRule: "icon-globe-alt"
  }, {
    name: "globe",
    cssRule: "icon-globe"
  }, {
    name: "folder-alt",
    cssRule: "icon-folder-alt"
  }, {
    name: "folder",
    cssRule: "icon-folder"
  }, {
    name: "film",
    cssRule: "icon-film"
  }, {
    name: "feed",
    cssRule: "icon-feed"
  }, {
    name: "drop",
    cssRule: "icon-drop"
  }, {
    name: "drawer",
    cssRule: "icon-drawer"
  }, {
    name: "docs",
    cssRule: "icon-docs"
  }, {
    name: "doc",
    cssRule: "icon-doc"
  }, {
    name: "diamond",
    cssRule: "icon-diamond"
  }, {
    name: "cup",
    cssRule: "icon-cup"
  }, {
    name: "calculator",
    cssRule: "icon-calculator"
  }, {
    name: "bubbles",
    cssRule: "icon-bubbles"
  }, {
    name: "briefcase",
    cssRule: "icon-briefcase"
  }, {
    name: "book-open",
    cssRule: "icon-book-open"
  }, {
    name: "basket-loaded",
    cssRule: "icon-basket-loaded"
  }, {
    name: "basket",
    cssRule: "icon-basket"
  }, {
    name: "bag",
    cssRule: "icon-bag"
  }, {
    name: "action-undo",
    cssRule: "icon-action-undo"
  }, {
    name: "action-redo",
    cssRule: "icon-action-redo"
  }, {
    name: "wrench",
    cssRule: "icon-wrench"
  }, {
    name: "umbrella",
    cssRule: "icon-umbrella"
  }, {
    name: "trash",
    cssRule: "icon-trash"
  }, {
    name: "tag",
    cssRule: "icon-tag"
  }, {
    name: "support",
    cssRule: "icon-support"
  }, {
    name: "frame",
    cssRule: "icon-frame"
  }, {
    name: "size-fullscreen",
    cssRule: "icon-size-fullscreen"
  }, {
    name: "size-actual",
    cssRule: "icon-size-actual"
  }, {
    name: "shuffle",
    cssRule: "icon-shuffle"
  }, {
    name: "share-alt",
    cssRule: "icon-share-alt"
  }, {
    name: "share",
    cssRule: "icon-share"
  }, {
    name: "rocket",
    cssRule: "icon-rocket"
  }, {
    name: "question",
    cssRule: "icon-question"
  }, {
    name: "pie-chart",
    cssRule: "icon-pie-chart"
  }, {
    name: "pencil",
    cssRule: "icon-pencil"
  }, {
    name: "note",
    cssRule: "icon-note"
  }, {
    name: "loop",
    cssRule: "icon-loop"
  }, {
    name: "home",
    cssRule: "icon-home"
  }, {
    name: "grid",
    cssRule: "icon-grid"
  }, {
    name: "graph",
    cssRule: "icon-graph"
  }, {
    name: "microphone",
    cssRule: "icon-microphone"
  }, {
    name: "music-tone-alt",
    cssRule: "icon-music-tone-alt"
  }, {
    name: "music-tone",
    cssRule: "icon-music-tone"
  }, {
    name: "earphones-alt",
    cssRule: "icon-earphones-alt"
  }, {
    name: "earphones",
    cssRule: "icon-earphones"
  }, {
    name: "equalizer",
    cssRule: "icon-equalizer"
  }, {
    name: "like",
    cssRule: "icon-like"
  }, {
    name: "dislike",
    cssRule: "icon-dislike"
  }, {
    name: "control-start",
    cssRule: "icon-control-start"
  }, {
    name: "control-rewind",
    cssRule: "icon-control-rewind"
  }, {
    name: "control-play",
    cssRule: "icon-control-play"
  }, {
    name: "control-pause",
    cssRule: "icon-control-pause"
  }, {
    name: "control-forward",
    cssRule: "icon-control-forward"
  }, {
    name: "control-end",
    cssRule: "icon-control-end"
  }, {
    name: "volume-1",
    cssRule: "icon-volume-1"
  }, {
    name: "volume-2",
    cssRule: "icon-volume-2"
  }, {
    name: "volume-off",
    cssRule: "icon-volume-off"
  }, {
    name: "calendar",
    cssRule: "icon-calendar"
  }, {
    name: "bulb",
    cssRule: "icon-bulb"
  }, {
    name: "chart",
    cssRule: "icon-chart"
  }, {
    name: "ban",
    cssRule: "icon-ban"
  }, {
    name: "bubble",
    cssRule: "icon-bubble"
  }, {
    name: "camrecorder",
    cssRule: "icon-camrecorder"
  }, {
    name: "camera",
    cssRule: "icon-camera"
  }, {
    name: "cloud-download",
    cssRule: "icon-cloud-download"
  }, {
    name: "cloud-upload",
    cssRule: "icon-cloud-upload"
  }, {
    name: "envelope",
    cssRule: "icon-envelope"
  }, {
    name: "eye",
    cssRule: "icon-eye"
  }, {
    name: "flag",
    cssRule: "icon-flag"
  }, {
    name: "heart",
    cssRule: "icon-heart"
  }, {
    name: "info",
    cssRule: "icon-info"
  }, {
    name: "key",
    cssRule: "icon-key"
  }, {
    name: "link",
    cssRule: "icon-link"
  }, {
    name: "lock",
    cssRule: "icon-lock"
  }, {
    name: "lock-open",
    cssRule: "icon-lock-open"
  }, {
    name: "magnifier",
    cssRule: "icon-magnifier"
  }, {
    name: "magnifier-add",
    cssRule: "icon-magnifier-add"
  }, {
    name: "magnifier-remove",
    cssRule: "icon-magnifier-remove"
  }, {
    name: "paper-clip",
    cssRule: "icon-paper-clip"
  }, {
    name: "paper-plane",
    cssRule: "icon-paper-plane"
  }, {
    name: "power",
    cssRule: "icon-power"
  }, {
    name: "refresh",
    cssRule: "icon-refresh"
  }, {
    name: "reload",
    cssRule: "icon-reload"
  }, {
    name: "settings",
    cssRule: "icon-settings"
  }, {
    name: "star",
    cssRule: "icon-star"
  }, {
    name: "symbol-female",
    cssRule: "icon-symbol-female"
  }, {
    name: "symbol-male",
    cssRule: "icon-symbol-male"
  }, {
    name: "target",
    cssRule: "icon-target"
  }, {
    name: "credit-card",
    cssRule: "icon-credit-card"
  }, {
    name: "paypal",
    cssRule: "icon-paypal"
  }, {
    name: "social-tumblr",
    cssRule: "icon-social-tumblr"
  }, {
    name: "social-twitter",
    cssRule: "icon-social-twitter"
  }, {
    name: "social-facebook",
    cssRule: "icon-social-facebook"
  }, {
    name: "social-instagram",
    cssRule: "icon-social-instagram"
  }, {
    name: "social-linkedin",
    cssRule: "icon-social-linkedin"
  }, {
    name: "social-pinterest",
    cssRule: "icon-social-pinterest"
  }, {
    name: "social-github",
    cssRule: "icon-social-github"
  }, {
    name: "social-google",
    cssRule: "icon-social-google"
  }, {
    name: "social-reddit",
    cssRule: "icon-social-reddit"
  }, {
    name: "social-skype",
    cssRule: "icon-social-skype"
  }, {
    name: "social-dribbble",
    cssRule: "icon-social-dribbble"
  }, {
    name: "social-behance",
    cssRule: "icon-social-behance"
  }, {
    name: "social-foursqare",
    cssRule: "icon-social-foursqare"
  }, {
    name: "social-soundcloud",
    cssRule: "icon-social-soundcloud"
  }, {
    name: "social-spotify",
    cssRule: "icon-social-spotify"
  }, {
    name: "social-stumbleupon",
    cssRule: "icon-social-stumbleupon"
  }, {
    name: "social-youtube",
    cssRule: "icon-social-youtube"
  }, {
    name: "social-dropbox",
    cssRule: "icon-social-dropbox"
  }, {
    name: "social-vkontakte",
    cssRule: "icon-social-vkontakte"
  }, {
    name: "social-steam",
    cssRule: "icon-social-steam"
  }]
}, {
  id: 'recitfad',
  name: 'RÉCITFAD',
  iconList: [{
    name: "avant-daller-plus-loin_b",
    cssRule: "recitfad-avant-daller-plus-loin_b"
  }, {
    name: "ampoule",
    cssRule: "recitfad-ampoule"
  }, {
    name: "actualiser-son-potentiel_n",
    cssRule: "recitfad-actualiser-son-potentiel_n"
  }, {
    name: "etau",
    cssRule: "recitfad-etau"
  }, {
    name: "inhalation",
    cssRule: "recitfad-inhalation"
  }, {
    name: "laver-mains",
    cssRule: "recitfad-laver-mains"
  }, {
    name: "manches-repliees",
    cssRule: "recitfad-manches-repliees"
  }, {
    name: "nettoyer",
    cssRule: "recitfad-nettoyer"
  }, {
    name: "pas-courir",
    cssRule: "recitfad-pas-courir"
  }, {
    name: "pas-jeter-dans-evier",
    cssRule: "recitfad-pas-jeter-dans-evier"
  }, {
    name: "pas-nourriture",
    cssRule: "recitfad-pas-nourriture"
  }, {
    name: "pas-verres-contact",
    cssRule: "recitfad-pas-verres-contact"
  }, {
    name: "pas-vetements-amples",
    cssRule: "recitfad-pas-vetements-amples"
  }, {
    name: "pichenote",
    cssRule: "recitfad-pichenote"
  }, {
    name: "porter-sarrau",
    cssRule: "recitfad-porter-sarrau"
  }, {
    name: "port-lunettes",
    cssRule: "recitfad-port-lunettes"
  }, {
    name: "position-adequate",
    cssRule: "recitfad-position-adequate"
  }, {
    name: "suggestions-outils",
    cssRule: "recitfad-suggestions-outils"
  }, {
    name: "tenir-xacto",
    cssRule: "recitfad-tenir-xacto"
  }, {
    name: "xacto",
    cssRule: "recitfad-xacto"
  }, {
    name: "chaussures-adequates",
    cssRule: "recitfad-chaussures-adequates"
  }, {
    name: "cheveux",
    cssRule: "recitfad-cheveux"
  }, {
    name: "choix-outils",
    cssRule: "recitfad-choix-outils"
  }, {
    name: "couper-avec-xacto",
    cssRule: "recitfad-couper-avec-xacto"
  }, {
    name: "bloc-argile_n",
    cssRule: "recitfad-bloc-argile_n"
  }, {
    name: "ce-travai-compte_n",
    cssRule: "recitfad-ce-travai-compte_n"
  }, {
    name: "collaboration_n",
    cssRule: "recitfad-collaboration_n"
  }, {
    name: "communiquer_n",
    cssRule: "recitfad-communiquer_n"
  }, {
    name: "consignes-audio_n",
    cssRule: "recitfad-consignes-audio_n"
  }, {
    name: "consultable-sur-un-cellulaire_n",
    cssRule: "recitfad-consultable-sur-un-cellulaire_n"
  }, {
    name: "consultable-sur-une-tablette_n",
    cssRule: "recitfad-consultable-sur-une-tablette_n"
  }, {
    name: "consultable-sur-un-ordi_n",
    cssRule: "recitfad-consultable-sur-un-ordi_n"
  }, {
    name: "consulte-la-carte_n",
    cssRule: "recitfad-consulte-la-carte_n"
  }, {
    name: "consulte-le-diagramme_n",
    cssRule: "recitfad-consulte-le-diagramme_n"
  }, {
    name: "consulte-le-document_n",
    cssRule: "recitfad-consulte-le-document_n"
  }, {
    name: "consulte-le-graphique_n",
    cssRule: "recitfad-consulte-le-graphique_n"
  }, {
    name: "consulte-le-tableau_n",
    cssRule: "recitfad-consulte-le-tableau_n"
  }, {
    name: "consulte-limage_n",
    cssRule: "recitfad-consulte-limage_n"
  }, {
    name: "creativite_n",
    cssRule: "recitfad-creativite_n"
  }, {
    name: "criteres-de-succes_n",
    cssRule: "recitfad-criteres-de-succes_n"
  }, {
    name: "vivre-ensemble-et-citoyennete_n",
    cssRule: "recitfad-vivre-ensemble-et-citoyennete_n"
  }, {
    name: "utilise-suite-bureautique-en-ligne_n",
    cssRule: "recitfad-utilise-suite-bureautique-en-ligne_n"
  }, {
    name: "univers_n",
    cssRule: "recitfad-univers_n"
  }, {
    name: "televerse-la-piece_n",
    cssRule: "recitfad-televerse-la-piece_n"
  }, {
    name: "telecharge-la-piece-suivante_n",
    cssRule: "recitfad-telecharge-la-piece-suivante_n"
  }, {
    name: "techniques_n",
    cssRule: "recitfad-techniques_n"
  }, {
    name: "sante-et-bien-etre_n",
    cssRule: "recitfad-sante-et-bien-etre_n"
  }, {
    name: "robotique_n",
    cssRule: "recitfad-robotique_n"
  }, {
    name: "resoudre-un-probleme_n",
    cssRule: "recitfad-resoudre-un-probleme_n"
  }, {
    name: "recommencer-avec-nouveaux-exercices_n",
    cssRule: "recitfad-recommencer-avec-nouveaux-exercices_n"
  }, {
    name: "realite-virtuelle_n",
    cssRule: "recitfad-realite-virtuelle_n"
  }, {
    name: "realite-augmentee_n",
    cssRule: "recitfad-realite-augmentee_n"
  }, {
    name: "programmation_n",
    cssRule: "recitfad-programmation_n"
  }, {
    name: "prends-des-notes_n",
    cssRule: "recitfad-prends-des-notes_n"
  }, {
    name: "pinceaux_n",
    cssRule: "recitfad-pinceaux_n"
  }, {
    name: "pastels_n",
    cssRule: "recitfad-pastels_n"
  }, {
    name: "orientation-et-entrepreneuriat_n",
    cssRule: "recitfad-orientation-et-entrepreneuriat_n"
  }, {
    name: "notions-cles_n",
    cssRule: "recitfad-notions-cles_n"
  }, {
    name: "narration-dun-texte_n",
    cssRule: "recitfad-narration-dun-texte_n"
  }, {
    name: "methode-de-travail_n",
    cssRule: "recitfad-methode-de-travail_n"
  }, {
    name: "media_n",
    cssRule: "recitfad-media_n"
  }, {
    name: "lunettes-realitevirtuelle_n",
    cssRule: "recitfad-lunettes-realitevirtuelle_n"
  }, {
    name: "livre-de-reference-a-se-procurer_n",
    cssRule: "recitfad-livre-de-reference-a-se-procurer_n"
  }, {
    name: "laisse-des-traces-demarche_n",
    cssRule: "recitfad-laisse-des-traces-demarche_n"
  }, {
    name: "jugement-critique_n",
    cssRule: "recitfad-jugement-critique_n"
  }, {
    name: "jette-un-oeil_n",
    cssRule: "recitfad-jette-un-oeil_n"
  }, {
    name: "intentions_n",
    cssRule: "recitfad-intentions_n"
  }, {
    name: "important_n",
    cssRule: "recitfad-important_n"
  }, {
    name: "gouache_n",
    cssRule: "recitfad-gouache_n"
  }, {
    name: "gestes-et-materiel_n",
    cssRule: "recitfad-gestes-et-materiel_n"
  }, {
    name: "exporter-linformation_n",
    cssRule: "recitfad-exporter-linformation_n"
  }, {
    name: "exploiter-les-technologies_n",
    cssRule: "recitfad-exploiter-les-technologies_n"
  }, {
    name: "environnement-et-consommation_n",
    cssRule: "recitfad-environnement-et-consommation_n"
  }, {
    name: "enregistre-une-video_n",
    cssRule: "recitfad-enregistre-une-video_n"
  }, {
    name: "enregistre-un-audio_n",
    cssRule: "recitfad-enregistre-un-audio_n"
  }, {
    name: "ecoute-la-video_n",
    cssRule: "recitfad-ecoute-la-video_n"
  }, {
    name: "duree_n",
    cssRule: "recitfad-duree_n"
  }, {
    name: "document-a-imprimer_n",
    cssRule: "recitfad-document-a-imprimer_n"
  }, {
    name: "demande-un-casque-ecoute-micro_n",
    cssRule: "recitfad-demande-un-casque-ecoute-micro_n"
  }, {
    name: "demande-un-cellulaire_n",
    cssRule: "recitfad-demande-un-cellulaire_n"
  }, {
    name: "demande-une-tablette_n",
    cssRule: "recitfad-demande-une-tablette_n"
  }, {
    name: "demande-une-webcam_n",
    cssRule: "recitfad-demande-une-webcam_n"
  }, {
    name: "demande-un-ordinateur_n",
    cssRule: "recitfad-demande-un-ordinateur_n"
  }, {
    name: "bbnidan",
    cssRule: "recitfad-bbnidan"
  }, {
    name: "Terre-et-espace",
    cssRule: "recitfad-Terre-et-espace"
  }, {
    name: "Univers-materiel",
    cssRule: "recitfad-Univers-materiel"
  }, {
    name: "Univers-vivant",
    cssRule: "recitfad-Univers-vivant"
  }, {
    name: "Univers-technologique",
    cssRule: "recitfad-Univers-technologique"
  }, {
    name: "communication_orale",
    cssRule: "recitfad-communication_orale"
  }, {
    name: "creer",
    cssRule: "recitfad-creer"
  }, {
    name: "ecrire",
    cssRule: "recitfad-ecrire"
  }, {
    name: "lire",
    cssRule: "recitfad-lire"
  }, {
    name: "reperes",
    cssRule: "recitfad-reperes"
  }, {
    name: "repertoire",
    cssRule: "recitfad-repertoire"
  }, {
    name: "intro_sept",
    cssRule: "recitfad-intro_sept"
  }, {
    name: "intro_huit",
    cssRule: "recitfad-intro_huit"
  }, {
    name: "intro_neuf",
    cssRule: "recitfad-intro_neuf"
  }, {
    name: "fonction",
    cssRule: "recitfad-fonction"
  }, {
    name: "intro_un",
    cssRule: "recitfad-intro_un"
  }, {
    name: "intro_deux",
    cssRule: "recitfad-intro_deux"
  }, {
    name: "intro_trois",
    cssRule: "recitfad-intro_trois"
  }, {
    name: "intro_quatre",
    cssRule: "recitfad-intro_quatre"
  }, {
    name: "intro_cinq",
    cssRule: "recitfad-intro_cinq"
  }, {
    name: "intro_six",
    cssRule: "recitfad-intro_six"
  }, {
    name: "ordi_algebre",
    cssRule: "recitfad-ordi_algebre"
  }, {
    name: "algebre",
    cssRule: "recitfad-algebre"
  }, {
    name: "question",
    cssRule: "recitfad-question"
  }, {
    name: "ordi_question",
    cssRule: "recitfad-ordi_question"
  }, {
    name: "ordi_fonction",
    cssRule: "recitfad-ordi_fonction"
  }, {
    name: "loupe_fonction",
    cssRule: "recitfad-loupe_fonction"
  }, {
    name: "loupe-geometrie",
    cssRule: "recitfad-loupe-geometrie"
  }, {
    name: "loupe_geo_ana",
    cssRule: "recitfad-loupe_geo_ana"
  }]
}];