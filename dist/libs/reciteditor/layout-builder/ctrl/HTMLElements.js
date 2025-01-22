"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLVideoElement = exports.HTMLUListElement = exports.HTMLTableRowElement = exports.HTMLTableHeaderCellElement = exports.HTMLTableElement = exports.HTMLTableDataCellElement = exports.HTMLTabPaneElement = exports.HTMLTabElement = exports.HTMLTabContentElement = exports.HTMLSpanElement = exports.HTMLSectionElement = exports.HTMLRowElement = exports.HTMLParagraphElement = exports.HTMLOListElement = exports.HTMLNavLinkElement = exports.HTMLNavItemElement = exports.HTMLNavElement = exports.HTMLMediaElement = exports.HTMLLinkElement = exports.HTMLLIElement = exports.HTMLImageWithCaptionElement = exports.HTMLImageFigureElement = exports.HTMLImageElement = exports.HTMLIframeElement = exports.HTMLIconElement = exports.HTMLHorizontalBarElement = exports.HTMLHeadingElement = exports.HTMLHRElement = exports.HTMLGridElement = exports.HTMLFlipCardFrontElement = exports.HTMLFlipCardElement = exports.HTMLFlipCardBackElement = exports.HTMLEmbedElement = exports.HTMLDivElement = exports.HTMLColElement = exports.HTMLClickableImageElement = exports.HTMLCarouselNavElement = exports.HTMLCarouselElement = exports.HTMLCardHeaderElement = exports.HTMLCardFooterElement = exports.HTMLCardElement = exports.HTMLCardBodyElement = exports.HTMLButtonVideoElement = exports.HTMLButtonElement = exports.HTMLBodyElement = exports.HTMLAvatarCardElement = exports.HTMLAudioElement = exports.HTMLAlertElement = exports.HTMLAccordionNavElement = exports.HTMLAccordionElement = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _RecitEditor = require("../../RecitEditor");
var _HTMLProperties = require("./HTMLProperties");
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
var HTMLElement = function () {
  function HTMLElement(name, tagName, type, properties) {
    (0, _classCallCheck2["default"])(this, HTMLElement);
    this.name = name || "";
    this.tagName = tagName || "";
    this.type = type || "native";
    this.properties = properties || {
      all: [],
      min: []
    };
    this.cssProp = {
      prefix: "bg"
    };
    this.visible = true;
    this.panels = {
      components: 1,
      properties: 0,
      treeView: 1
    };
  }
  return (0, _createClass2["default"])(HTMLElement, [{
    key: "getDesc",
    value: function getDesc(el) {
      return this.name;
    }
  }, {
    key: "getHelpText",
    value: function getHelpText(el) {
      return null;
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      return el;
    }
  }, {
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.tagName.toLowerCase() === this.tagName.toLowerCase();
    }
  }, {
    key: "createElementDZ",
    value: function createElementDZ(desc) {
      var el = document.createElement("div");
      el.classList.add("dropping-zone");
      el.innerHTML = desc || "";
      return el;
    }
  }, {
    key: "getDescDZ",
    value: function getDescDZ(el) {
      return "<span class='p-1 disabled badge ml-2 badge-warning nopointerevents'>" + this.getDesc(el) + "</span>";
    }
  }, {
    key: "prepareDroppingZones",
    value: function prepareDroppingZones(el) {
      var elName = this.getDescDZ(el);
      if (el.children.length > 0) {
        el.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('insidebegining') + elName), el.firstChild);
        el.appendChild(this.createElementDZ(_RecitEditor.i18n.get_string('insideend') + elName));
      } else {
        el.appendChild(this.createElementDZ(_RecitEditor.i18n.get_string('inside') + elName));
      }
      el.parentNode.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('before') + elName), el);
      el.parentNode.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('after') + elName), el.nextSibling);
    }
  }]);
}();
var HTMLBodyElement = exports.HTMLBodyElement = function (_HTMLElement) {
  function HTMLBodyElement() {
    var _this;
    (0, _classCallCheck2["default"])(this, HTMLBodyElement);
    _this = _callSuper(this, HTMLBodyElement, ['Body', 'body', 'native']);
    _this.visible = false;
    return _this;
  }
  (0, _inherits2["default"])(HTMLBodyElement, _HTMLElement);
  return (0, _createClass2["default"])(HTMLBodyElement, [{
    key: "prepareDroppingZones",
    value: function prepareDroppingZones(el) {
      if (el.children.length > 0) {
        el.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('insidebegining')), el.firstChild);
        el.appendChild(this.createElementDZ(_RecitEditor.i18n.get_string('insideend')));
      } else {
        el.appendChild(this.createElementDZ(_RecitEditor.i18n.get_string('inside')));
      }
    }
  }]);
}(HTMLElement);
var HTMLHeadingElement = exports.HTMLHeadingElement = function (_HTMLElement2) {
  function HTMLHeadingElement(name, tagName, icon) {
    var _this2;
    (0, _classCallCheck2["default"])(this, HTMLHeadingElement);
    _this2 = _callSuper(this, HTMLHeadingElement, [name, tagName, 'native', {
      min: ['heading', 'bs-text'],
      all: ['heading', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'font', 'layout', 'background', 'htmlattributes']
    }]);
    _this2.icon = icon;
    return _this2;
  }
  (0, _inherits2["default"])(HTMLHeadingElement, _HTMLElement2);
  return (0, _createClass2["default"])(HTMLHeadingElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerText = _RecitEditor.i18n.get_string('heading');
      if (this.icon) {
        el.innerHTML = "<i class='fa fa-search'></i> " + el.innerText;
      }
      return el;
    }
  }, {
    key: "prepareDroppingZones",
    value: function prepareDroppingZones(el) {
      el.parentNode.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('before') + this.getDescDZ(el)), el);
      el.parentNode.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('after') + this.getDescDZ(el)), el.nextSibling);
    }
  }, {
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      for (var i = 1; i < 7; i++) {
        if (el.tagName.toLowerCase() == "h" + i) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "getDesc",
    value: function getDesc(el) {
      return el.tagName;
    }
  }]);
}(HTMLElement);
var HTMLParagraphElement = exports.HTMLParagraphElement = function (_HTMLElement3) {
  function HTMLParagraphElement() {
    (0, _classCallCheck2["default"])(this, HTMLParagraphElement);
    return _callSuper(this, HTMLParagraphElement, [_RecitEditor.i18n.get_string('paragraph'), 'p', 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.text]);
  }
  (0, _inherits2["default"])(HTMLParagraphElement, _HTMLElement3);
  return (0, _createClass2["default"])(HTMLParagraphElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerText = _RecitEditor.i18n.get_string('paragraph');
      return el;
    }
  }, {
    key: "prepareDroppingZones",
    value: function prepareDroppingZones(el) {
      el.parentNode.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('before') + this.getDescDZ()), el);
      el.parentNode.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('after') + this.getDescDZ()), el.nextSibling);
    }
  }]);
}(HTMLElement);
var HTMLLinkElement = exports.HTMLLinkElement = function (_HTMLElement4) {
  function HTMLLinkElement() {
    var _this3;
    (0, _classCallCheck2["default"])(this, HTMLLinkElement);
    _this3 = _callSuper(this, HTMLLinkElement, [_RecitEditor.i18n.get_string('link'), "a", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.link]);
    _this3.cssProp.prefix = 'btn';
    return _this3;
  }
  (0, _inherits2["default"])(HTMLLinkElement, _HTMLElement4);
  return (0, _createClass2["default"])(HTMLLinkElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerText = _RecitEditor.i18n.get_string('link');
      el.setAttribute('href', '#');
      el.setAttribute('target', '_self');
      return el;
    }
  }]);
}(HTMLElement);
var HTMLImageFigureElement = exports.HTMLImageFigureElement = function (_HTMLElement5) {
  function HTMLImageFigureElement() {
    var _this4;
    (0, _classCallCheck2["default"])(this, HTMLImageFigureElement);
    _this4 = _callSuper(this, HTMLImageFigureElement, [_RecitEditor.i18n.get_string('imagewithcaption'), "figure", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this4.visible = false;
    return _this4;
  }
  (0, _inherits2["default"])(HTMLImageFigureElement, _HTMLElement5);
  return (0, _createClass2["default"])(HTMLImageFigureElement);
}(HTMLElement);
var HTMLButtonElement = exports.HTMLButtonElement = function (_HTMLElement6) {
  function HTMLButtonElement(name, tagName, type, properties) {
    var _this5;
    (0, _classCallCheck2["default"])(this, HTMLButtonElement);
    _this5 = _callSuper(this, HTMLButtonElement, [name, tagName, type, properties]);
    _this5.cssProp.prefix = 'btn';
    return _this5;
  }
  (0, _inherits2["default"])(HTMLButtonElement, _HTMLElement6);
  return (0, _createClass2["default"])(HTMLButtonElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('btn') && el.tagName.toLowerCase() !== "a";
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("a");
      el.setAttribute("href", "#");
      el.classList.add('btn');
      el.classList.add('btn-primary');
      el.innerHTML = _RecitEditor.i18n.get_string('button');
      return el;
    }
  }]);
}(HTMLElement);
var HTMLButtonVideoElement = exports.HTMLButtonVideoElement = function (_HTMLElement7) {
  function HTMLButtonVideoElement() {
    (0, _classCallCheck2["default"])(this, HTMLButtonVideoElement);
    return _callSuper(this, HTMLButtonVideoElement, [_RecitEditor.i18n.get_string('videobutton'), 'videobtn', 'bootstrap', {
      all: [].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.buttons.all), ['videobtn']),
      min: ['videobtn']
    }]);
  }
  (0, _inherits2["default"])(HTMLButtonVideoElement, _HTMLElement7);
  return (0, _createClass2["default"])(HTMLButtonVideoElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('htmlbootstrapeditor_videobtn') || this.equalLegacy(el);
    }
  }, {
    key: "equalLegacy",
    value: function equalLegacy(el) {
      return el.classList.contains('attoreciteditor_videobtn') || el.classList.contains('videobtn');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("button");
      el.innerHTML = _RecitEditor.i18n.get_string('videobutton');
      el.classList.add('btn');
      el.classList.add('btn-primary');
      el.classList.add('htmlbootstrapeditor_videobtn');
      el.setAttribute('data-videourl', 'https://www.youtube.com/embed/WvljI0VIq-E?rel=0');
      return el;
    }
  }]);
}(HTMLElement);
var HTMLMediaElement = exports.HTMLMediaElement = function (_HTMLElement8) {
  function HTMLMediaElement(name, tagName, type, properties) {
    (0, _classCallCheck2["default"])(this, HTMLMediaElement);
    return _callSuper(this, HTMLMediaElement, [name, tagName, type, properties]);
  }
  (0, _inherits2["default"])(HTMLMediaElement, _HTMLElement8);
  return (0, _createClass2["default"])(HTMLMediaElement);
}(HTMLElement);
var HTMLAudioElement = exports.HTMLAudioElement = function (_HTMLMediaElement) {
  function HTMLAudioElement() {
    (0, _classCallCheck2["default"])(this, HTMLAudioElement);
    return _callSuper(this, HTMLAudioElement, [_RecitEditor.i18n.get_string('audio'), 'audio', 'native', {
      all: ['bs-general', 'bs-spacingborder', 'htmlattributes', 'sourceaudio', 'layout'],
      min: ['sourceaudio']
    }]);
  }
  (0, _inherits2["default"])(HTMLAudioElement, _HTMLMediaElement);
  return (0, _createClass2["default"])(HTMLAudioElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.setAttribute('controls', '');
      return el;
    }
  }, {
    key: "getHelpText",
    value: function getHelpText() {
      return _RecitEditor.i18n.get_string('audiohelp');
    }
  }]);
}(HTMLMediaElement);
var HTMLVideoElement = exports.HTMLVideoElement = function (_HTMLMediaElement2) {
  function HTMLVideoElement(name, tagName, type) {
    (0, _classCallCheck2["default"])(this, HTMLVideoElement);
    return _callSuper(this, HTMLVideoElement, [name, 'video', type, _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.video]);
  }
  (0, _inherits2["default"])(HTMLVideoElement, _HTMLMediaElement2);
  return (0, _createClass2["default"])(HTMLVideoElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('video') || el.classList.contains('video-container');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add('embed-responsive');
      el.classList.add('embed-responsive-16by9');
      el.classList.add('video-container');
      var iframe = document.createElement("iframe");
      iframe.classList.add('embed-responsive-item');
      iframe.classList.add('video');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '1');
      iframe.src = 'https://www.youtube.com/embed/WvljI0VIq-E?rel=0';
      el.appendChild(iframe);
      return el;
    }
  }]);
}(HTMLMediaElement);
var HTMLDivElement = exports.HTMLDivElement = function (_HTMLElement9) {
  function HTMLDivElement(name, tagName, type, properties) {
    (0, _classCallCheck2["default"])(this, HTMLDivElement);
    return _callSuper(this, HTMLDivElement, [name || "Div", tagName || "div", type || 'native', properties || _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
  }
  (0, _inherits2["default"])(HTMLDivElement, _HTMLElement9);
  return (0, _createClass2["default"])(HTMLDivElement);
}(HTMLElement);
var HTMLEmbedElement = exports.HTMLEmbedElement = function (_HTMLElement10) {
  function HTMLEmbedElement() {
    (0, _classCallCheck2["default"])(this, HTMLEmbedElement);
    return _callSuper(this, HTMLEmbedElement, [_RecitEditor.i18n.get_string('embed'), 'div', 'bootstrap', {
      all: ['bs-general', 'bs-spacingborder', 'marginborderpadding', 'layout', 'embed'],
      min: ['embed']
    }]);
  }
  (0, _inherits2["default"])(HTMLEmbedElement, _HTMLElement10);
  return (0, _createClass2["default"])(HTMLEmbedElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement('div');
      el.classList.add('embed-element');
      el.classList.add('embed-responsive');
      el.classList.add('embed-responsive-16by9');
      return el;
    }
  }, {
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('embed-element');
    }
  }]);
}(HTMLElement);
var HTMLIframeElement = exports.HTMLIframeElement = function (_HTMLElement11) {
  function HTMLIframeElement() {
    var _this6;
    (0, _classCallCheck2["default"])(this, HTMLIframeElement);
    _this6 = _callSuper(this, HTMLIframeElement, [_RecitEditor.i18n.get_string('iframe'), 'iframe', 'native', {
      all: ['outerhtml', 'marginborderpadding', 'layout'],
      min: ['outerhtml']
    }]);
    _this6.visible = false;
    return _this6;
  }
  (0, _inherits2["default"])(HTMLIframeElement, _HTMLElement11);
  return (0, _createClass2["default"])(HTMLIframeElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement('iframe');
      return el;
    }
  }, {
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.tagName == 'IFRAME';
    }
  }]);
}(HTMLElement);
var HTMLSpanElement = exports.HTMLSpanElement = function (_HTMLElement12) {
  function HTMLSpanElement() {
    var _this7;
    (0, _classCallCheck2["default"])(this, HTMLSpanElement);
    _this7 = _callSuper(this, HTMLSpanElement, ["Span", "span", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
    _this7.visible = false;
    return _this7;
  }
  (0, _inherits2["default"])(HTMLSpanElement, _HTMLElement12);
  return (0, _createClass2["default"])(HTMLSpanElement);
}(HTMLElement);
var HTMLSectionElement = exports.HTMLSectionElement = function (_HTMLElement13) {
  function HTMLSectionElement() {
    (0, _classCallCheck2["default"])(this, HTMLSectionElement);
    return _callSuper(this, HTMLSectionElement, ["Section", "section", 'native', {
      min: ['bs-grid', 'modal-grid', 'bs-background', 'bs-border'],
      all: ['bs-grid', 'modal-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    }]);
  }
  (0, _inherits2["default"])(HTMLSectionElement, _HTMLElement13);
  return (0, _createClass2["default"])(HTMLSectionElement);
}(HTMLElement);
var HTMLGridElement = exports.HTMLGridElement = function (_HTMLElement14) {
  function HTMLGridElement() {
    var _this8;
    (0, _classCallCheck2["default"])(this, HTMLGridElement);
    _this8 = _callSuper(this, HTMLGridElement, ['Container', 'grid', 'bootstrap', {
      min: ['bs-grid', 'modal-grid', 'bs-background', 'bs-border'],
      all: ['bs-grid', 'modal-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    }]);
    _this8.modalCreation = true;
    return _this8;
  }
  (0, _inherits2["default"])(HTMLGridElement, _HTMLElement14);
  return (0, _createClass2["default"])(HTMLGridElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add("container-fluid");
      el.setAttribute('data-empty', '1');
      var row = document.createElement("div");
      row.classList.add("row");
      el.appendChild(row);
      var col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
      col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
      col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
      return el;
    }
  }, {
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('container') || el.classList.contains('container-fluid');
    }
  }]);
}(HTMLElement);
var HTMLRowElement = exports.HTMLRowElement = function (_HTMLElement15) {
  function HTMLRowElement() {
    var _this9;
    (0, _classCallCheck2["default"])(this, HTMLRowElement);
    _this9 = _callSuper(this, HTMLRowElement, ['Row', 'row', 'bootstrap', {
      min: ['bs-row', 'bs-background', 'bs-border'],
      all: ['bs-row', 'bs-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    }]);
    _this9.visible = false;
    return _this9;
  }
  (0, _inherits2["default"])(HTMLRowElement, _HTMLElement15);
  return (0, _createClass2["default"])(HTMLRowElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('row') || el.classList.contains('row-fluid') || this.equalLegacy(el);
    }
  }, {
    key: "equalLegacy",
    value: function equalLegacy(el) {
      return el.classList.contains('htmlbootstrapeditor_row-fluid') || el.classList.contains('attoreciteditor_row-fluid');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add("row");
      return el;
    }
  }]);
}(HTMLElement);
var HTMLColElement = exports.HTMLColElement = function (_HTMLElement16) {
  function HTMLColElement() {
    var _this10;
    (0, _classCallCheck2["default"])(this, HTMLColElement);
    _this10 = _callSuper(this, HTMLColElement, ['Col', 'col', 'bootstrap', {
      min: ['bs-col', 'bs-background', 'bs-border'],
      all: ['bs-col', 'bs-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    }]);
    _this10.visible = false;
    return _this10;
  }
  (0, _inherits2["default"])(HTMLColElement, _HTMLElement16);
  return (0, _createClass2["default"])(HTMLColElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      var containsCol = false;
      for (var i = 0; i <= 12; i++) {
        if (el.classList.contains('col-' + i)) {
          containsCol = true;
        }
      }
      return el.classList.contains('col') || el.classList.contains('col-auto') || containsCol;
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add("col");
      return el;
    }
  }, {
    key: "prepareDroppingZones",
    value: function prepareDroppingZones(el) {
      if (el.children.length > 0) {
        el.insertBefore(this.createElementDZ(_RecitEditor.i18n.get_string('insidebegining') + this.getDescDZ()), el.firstChild);
        el.appendChild(this.createElementDZ(_RecitEditor.i18n.get_string('insideend') + this.getDescDZ()));
      } else {
        el.appendChild(this.createElementDZ(_RecitEditor.i18n.get_string('inside') + this.getDescDZ()));
      }
    }
  }]);
}(HTMLElement);
var HTMLUListElement = exports.HTMLUListElement = function (_HTMLElement17) {
  function HTMLUListElement() {
    (0, _classCallCheck2["default"])(this, HTMLUListElement);
    return _callSuper(this, HTMLUListElement, [_RecitEditor.i18n.get_string('list'), "ul", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
  }
  (0, _inherits2["default"])(HTMLUListElement, _HTMLElement17);
  return (0, _createClass2["default"])(HTMLUListElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = "<li>" + _RecitEditor.i18n.get_string('list') + "</li>";
      return el;
    }
  }]);
}(HTMLElement);
var HTMLOListElement = exports.HTMLOListElement = function (_HTMLElement18) {
  function HTMLOListElement() {
    (0, _classCallCheck2["default"])(this, HTMLOListElement);
    return _callSuper(this, HTMLOListElement, [_RecitEditor.i18n.get_string('numberedlist'), "ol", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
  }
  (0, _inherits2["default"])(HTMLOListElement, _HTMLElement18);
  return (0, _createClass2["default"])(HTMLOListElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = "<li>" + _RecitEditor.i18n.get_string('numberedlist') + "</li>";
      return el;
    }
  }]);
}(HTMLElement);
var HTMLTableElement = exports.HTMLTableElement = function (_HTMLElement19) {
  function HTMLTableElement() {
    var _this11;
    (0, _classCallCheck2["default"])(this, HTMLTableElement);
    _this11 = _callSuper(this, HTMLTableElement, [_RecitEditor.i18n.get_string('table'), 'table', 'nativecomponent', {
      all: ['bs-table'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['bs-table']
    }]);
    _this11.cssProp.prefix = 'table';
    return _this11;
  }
  (0, _inherits2["default"])(HTMLTableElement, _HTMLElement19);
  return (0, _createClass2["default"])(HTMLTableElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement('table');
      el.classList.add('table');
      var tbody = document.createElement('tbody');
      el.appendChild(tbody);
      for (var i = 0; i < 2; i++) {
        var row = document.createElement('tr');
        tbody.appendChild(row);
        for (var j = 0; j < 2; j++) {
          var tag = 'td';
          if (i == 0) tag = 'th';
          var cell = document.createElement(tag);
          row.appendChild(cell);
        }
      }
      return el;
    }
  }]);
}(HTMLElement);
var HTMLTableDataCellElement = exports.HTMLTableDataCellElement = function (_HTMLElement20) {
  function HTMLTableDataCellElement() {
    var _this12;
    (0, _classCallCheck2["default"])(this, HTMLTableDataCellElement);
    _this12 = _callSuper(this, HTMLTableDataCellElement, [_RecitEditor.i18n.get_string('tablecell'), "td", 'native', {
      all: ['bs-tablecell'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['bs-tablecell']
    }]);
    _this12.visible = false;
    return _this12;
  }
  (0, _inherits2["default"])(HTMLTableDataCellElement, _HTMLElement20);
  return (0, _createClass2["default"])(HTMLTableDataCellElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = _RecitEditor.i18n.get_string('tablecell');
      return el;
    }
  }]);
}(HTMLElement);
var HTMLTableHeaderCellElement = exports.HTMLTableHeaderCellElement = function (_HTMLElement21) {
  function HTMLTableHeaderCellElement() {
    var _this13;
    (0, _classCallCheck2["default"])(this, HTMLTableHeaderCellElement);
    _this13 = _callSuper(this, HTMLTableHeaderCellElement, [_RecitEditor.i18n.get_string('tableheader'), "th", 'native', {
      all: ['bs-tablecell'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['bs-tablecell']
    }]);
    _this13.visible = false;
    return _this13;
  }
  (0, _inherits2["default"])(HTMLTableHeaderCellElement, _HTMLElement21);
  return (0, _createClass2["default"])(HTMLTableHeaderCellElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = _RecitEditor.i18n.get_string('tablecell');
      return el;
    }
  }]);
}(HTMLElement);
var HTMLTableRowElement = exports.HTMLTableRowElement = function (_HTMLElement22) {
  function HTMLTableRowElement() {
    var _this14;
    (0, _classCallCheck2["default"])(this, HTMLTableRowElement);
    _this14 = _callSuper(this, HTMLTableRowElement, [_RecitEditor.i18n.get_string('tablerow'), "tr", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
    _this14.visible = false;
    return _this14;
  }
  (0, _inherits2["default"])(HTMLTableRowElement, _HTMLElement22);
  return (0, _createClass2["default"])(HTMLTableRowElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      return el;
    }
  }]);
}(HTMLElement);
var HTMLLIElement = exports.HTMLLIElement = function (_HTMLElement23) {
  function HTMLLIElement() {
    var _this15;
    (0, _classCallCheck2["default"])(this, HTMLLIElement);
    _this15 = _callSuper(this, HTMLLIElement, [_RecitEditor.i18n.get_string('listitem'), "li", 'native', {
      all: ['bs-general', 'bs-spacingborder', 'htmlattributes', 'font', 'layout', 'background'],
      min: []
    }]);
    _this15.visible = false;
    return _this15;
  }
  (0, _inherits2["default"])(HTMLLIElement, _HTMLElement23);
  return (0, _createClass2["default"])(HTMLLIElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerText = _RecitEditor.i18n.get_string('listitem');
      return el;
    }
  }]);
}(HTMLElement);
var HTMLAlertElement = exports.HTMLAlertElement = function (_HTMLDivElement) {
  function HTMLAlertElement() {
    var _this16;
    (0, _classCallCheck2["default"])(this, HTMLAlertElement);
    _this16 = _callSuper(this, HTMLAlertElement, [_RecitEditor.i18n.get_string('alert'), "div", 'bootstrap']);
    _this16.cssProp.prefix = "alert";
    return _this16;
  }
  (0, _inherits2["default"])(HTMLAlertElement, _HTMLDivElement);
  return (0, _createClass2["default"])(HTMLAlertElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('alert');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.classList.add("alert");
      el.classList.add("alert-primary");
      el.setAttribute("role", "alert");
      var p = document.createElement('p');
      el.appendChild(p);
      return el;
    }
  }]);
}(HTMLDivElement);
var HTMLAvatarCardElement = exports.HTMLAvatarCardElement = function (_HTMLDivElement2) {
  function HTMLAvatarCardElement() {
    (0, _classCallCheck2["default"])(this, HTMLAvatarCardElement);
    return _callSuper(this, HTMLAvatarCardElement, [_RecitEditor.i18n.get_string('avatarcard'), "div", 'bootstrap']);
  }
  (0, _inherits2["default"])(HTMLAvatarCardElement, _HTMLDivElement2);
  return (0, _createClass2["default"])(HTMLAvatarCardElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('avatarcard');
    }
  }, {
    key: "create",
    value: function create() {
      var card = document.createElement("div");
      card.classList.add("card", "shadow");
      card.style.marginTop = '60px';
      var header = document.createElement("div");
      header.classList.add('mx-auto', 'bg-white');
      card.appendChild(header);
      var el = document.createElement("img");
      el.classList.add("rounded-circle", "img-fluid", "shadow");
      el.setAttribute("src", "".concat(_RecitEditor.Assets.ImageAvatar));
      el.setAttribute('alt', '');
      el.style.height = '120px';
      el.style.width = '120px';
      el.style.marginTop = '-60px';
      el.style.overflow = 'hidden';
      el.style.borderRadius = '50%';
      header.appendChild(el);
      var body = document.createElement("div");
      body.classList.add("card-body");
      card.appendChild(body);
      el = document.createElement("h3");
      el.innerHTML = _RecitEditor.i18n.get_string('title');
      el.classList.add("text-center");
      el.classList.add("mb-4");
      body.appendChild(el);
      el = document.createElement("hr");
      body.appendChild(el);
      el = document.createElement("p");
      el.classList.add('dark-gray-text', 'text-center', 'mt-5');
      el.innerHTML = 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis voluptate ab error quam dolores doloremque, quae consectetur.';
      body.appendChild(el);
      return card;
    }
  }]);
}(HTMLDivElement);
var HTMLCardElement = exports.HTMLCardElement = function (_HTMLDivElement3) {
  function HTMLCardElement() {
    (0, _classCallCheck2["default"])(this, HTMLCardElement);
    var properties = Object.assign(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers, {});
    properties.min.splice(1, 0, 'bs-dimension');
    properties.all.splice(2, 0, 'bs-dimension');
    return _callSuper(this, HTMLCardElement, [_RecitEditor.i18n.get_string('card'), "div", 'bootstrap', properties]);
  }
  (0, _inherits2["default"])(HTMLCardElement, _HTMLDivElement3);
  return (0, _createClass2["default"])(HTMLCardElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('card');
    }
  }, {
    key: "create",
    value: function create() {
      var card = document.createElement("div");
      card.classList.add("card", "shadow", "border-0");
      var el = document.createElement("img");
      el.classList.add("card-img-top");
      el.setAttribute("src", "".concat(_RecitEditor.Assets.ImageEmpty));
      el.setAttribute('alt', '');
      card.appendChild(el);
      var body = document.createElement("div");
      body.classList.add("card-body", "bg-white");
      card.appendChild(body);
      el = document.createElement("h3");
      el.innerHTML = _RecitEditor.i18n.get_string('title');
      el.classList.add("text-center");
      el.classList.add("mb-4");
      body.appendChild(el);
      el = document.createElement("p");
      el.innerHTML = 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis voluptate ab error quam dolores doloremque, quae consectetur.';
      body.appendChild(el);
      el = document.createElement("div");
      el.classList.add("card-footer", "bg-white", "border-0", "mb-0");
      card.appendChild(el);
      return card;
    }
  }]);
}(HTMLDivElement);
var HTMLCardBodyElement = exports.HTMLCardBodyElement = function (_HTMLDivElement4) {
  function HTMLCardBodyElement() {
    var _this17;
    (0, _classCallCheck2["default"])(this, HTMLCardBodyElement);
    _this17 = _callSuper(this, HTMLCardBodyElement, [_RecitEditor.i18n.get_string('cardbody'), "div", 'bootstrap']);
    _this17.visible = false;
    return _this17;
  }
  (0, _inherits2["default"])(HTMLCardBodyElement, _HTMLDivElement4);
  return (0, _createClass2["default"])(HTMLCardBodyElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('card-body');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add("card-body");
      return el;
    }
  }]);
}(HTMLDivElement);
var HTMLCardHeaderElement = exports.HTMLCardHeaderElement = function (_HTMLDivElement5) {
  function HTMLCardHeaderElement() {
    var _this18;
    (0, _classCallCheck2["default"])(this, HTMLCardHeaderElement);
    _this18 = _callSuper(this, HTMLCardHeaderElement, [_RecitEditor.i18n.get_string('cardheader'), "div", 'bootstrap']);
    _this18.visible = false;
    return _this18;
  }
  (0, _inherits2["default"])(HTMLCardHeaderElement, _HTMLDivElement5);
  return (0, _createClass2["default"])(HTMLCardHeaderElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('card-header');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add("card-header");
      return el;
    }
  }]);
}(HTMLDivElement);
var HTMLCardFooterElement = exports.HTMLCardFooterElement = function (_HTMLDivElement6) {
  function HTMLCardFooterElement() {
    var _this19;
    (0, _classCallCheck2["default"])(this, HTMLCardFooterElement);
    _this19 = _callSuper(this, HTMLCardFooterElement, [_RecitEditor.i18n.get_string('cardfooter'), "div", 'bootstrap']);
    _this19.visible = false;
    return _this19;
  }
  (0, _inherits2["default"])(HTMLCardFooterElement, _HTMLDivElement6);
  return (0, _createClass2["default"])(HTMLCardFooterElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('card-footer');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement("div");
      el.classList.add("card-footer");
      return el;
    }
  }]);
}(HTMLDivElement);
var HTMLFlipCardElement = exports.HTMLFlipCardElement = function (_HTMLDivElement7) {
  function HTMLFlipCardElement() {
    var _this20;
    (0, _classCallCheck2["default"])(this, HTMLFlipCardElement);
    _this20 = _callSuper(this, HTMLFlipCardElement, [_RecitEditor.i18n.get_string('flipcard'), "div", 'nativecomponent']);
    _this20.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this20;
  }
  (0, _inherits2["default"])(HTMLFlipCardElement, _HTMLDivElement7);
  return (0, _createClass2["default"])(HTMLFlipCardElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('htmlbootstrapeditor_flipcard2') || this.equalLegacy(el);
    }
  }, {
    key: "equalLegacy",
    value: function equalLegacy(el) {
      return el.classList.contains('attoreciteditor_flipcard2');
    }
  }, {
    key: "create",
    value: function create() {
      var card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("htmlbootstrapeditor_flipcard2");
      card.classList.add("manual-flip-click");
      card.style.marginTop = '60px';
      var cardinner = document.createElement("div");
      cardinner.classList.add("flipcard-inner");
      card.appendChild(cardinner);
      for (var _i = 0, _arr = ['front', 'back']; _i < _arr.length; _i++) {
        var v = _arr[_i];
        var face = document.createElement("div");
        face.classList.add(v);
        cardinner.appendChild(face);
        var head = document.createElement("div");
        head.classList.add("card-header");
        head.classList.add("bg-primary");
        head.classList.add("text-center");
        head.classList.add("rounded-top");
        face.appendChild(head);
        var head2 = document.createElement("div");
        head.appendChild(head2);
        var el = document.createElement("img");
        el.classList.add("rounded-circle");
        el.classList.add("shadow");
        el.setAttribute("src", "".concat(_RecitEditor.Assets.ImageAvatar));
        el.setAttribute('alt', '');
        el.style.height = '120px';
        el.style.width = '120px';
        el.style.marginTop = '-60px';
        head2.appendChild(el);
        el = document.createElement("h3");
        el.innerHTML = _RecitEditor.i18n.get_string('title') + ' ' + _RecitEditor.i18n.get_string(v);
        el.classList.add("text-white");
        el.classList.add("mt-3");
        head2.appendChild(el);
        var body = document.createElement("div");
        body.classList.add("card-body");
        face.appendChild(body);
        el = document.createElement("p");
        el.classList.add('dark-gray-text', 'text-center');
        el.innerHTML = 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis voluptate ab error quam dolores doloremque, quae consectetur.';
        body.appendChild(el);
      }
      return card;
    }
  }]);
}(HTMLDivElement);
var HTMLFlipCardFrontElement = exports.HTMLFlipCardFrontElement = function (_HTMLDivElement8) {
  function HTMLFlipCardFrontElement() {
    var _this21;
    (0, _classCallCheck2["default"])(this, HTMLFlipCardFrontElement);
    _this21 = _callSuper(this, HTMLFlipCardFrontElement, [_RecitEditor.i18n.get_string('front'), "div", 'nativecomponent']);
    _this21.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    _this21.visible = false;
    return _this21;
  }
  (0, _inherits2["default"])(HTMLFlipCardFrontElement, _HTMLDivElement8);
  return (0, _createClass2["default"])(HTMLFlipCardFrontElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('front');
    }
  }, {
    key: "onSelect",
    value: function onSelect(el) {
      var flipcard = el.parentElement.parentElement;
      flipcard.classList.remove('hover');
    }
  }]);
}(HTMLDivElement);
var HTMLFlipCardBackElement = exports.HTMLFlipCardBackElement = function (_HTMLDivElement9) {
  function HTMLFlipCardBackElement() {
    var _this22;
    (0, _classCallCheck2["default"])(this, HTMLFlipCardBackElement);
    _this22 = _callSuper(this, HTMLFlipCardBackElement, [_RecitEditor.i18n.get_string('rear'), "div", 'nativecomponent']);
    _this22.visible = false;
    _this22.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this22;
  }
  (0, _inherits2["default"])(HTMLFlipCardBackElement, _HTMLDivElement9);
  return (0, _createClass2["default"])(HTMLFlipCardBackElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('back');
    }
  }, {
    key: "onSelect",
    value: function onSelect(el) {
      var flipcard = el.parentElement.parentElement;
      flipcard.classList.add('hover');
    }
  }]);
}(HTMLDivElement);
var HTMLCarouselElement = exports.HTMLCarouselElement = function (_HTMLDivElement10) {
  function HTMLCarouselElement() {
    var _this23;
    (0, _classCallCheck2["default"])(this, HTMLCarouselElement);
    _this23 = _callSuper(this, HTMLCarouselElement, [_RecitEditor.i18n.get_string('carousel'), "div", 'nativecomponent', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this23.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this23;
  }
  (0, _inherits2["default"])(HTMLCarouselElement, _HTMLDivElement10);
  return (0, _createClass2["default"])(HTMLCarouselElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('carousel') || el.classList.contains('carousel-inner') || el.classList.contains('carousel-item');
    }
  }, {
    key: "getDesc",
    value: function getDesc(el) {
      if (el.classList.contains('carousel')) return _RecitEditor.i18n.get_string('carousel');
      if (el.classList.contains('carousel-inner')) return 'Carousel inner';
      if (el.classList.contains('carousel-item')) return 'Carousel item';
    }
  }, {
    key: "create",
    value: function create() {
      var slider = document.createElement("div");
      slider.classList.add("carousel");
      slider.classList.add("slide");
      slider.setAttribute("data-ride", "carousel");
      var carouselId = _RecitEditor.Utils.getRandomId();
      slider.innerHTML = "\n            <div id=\"".concat(carouselId, "\" class=\"carousel slide\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators\">\n                    <li data-target=\"#").concat(carouselId, "\" data-slide-to=\"0\" class=\"active\"></li>\n                    <li data-target=\"#").concat(carouselId, "\" data-slide-to=\"1\"></li>\n                    <li data-target=\"#").concat(carouselId, "\" data-slide-to=\"2\"></li>\n                </ol>\n                <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\" >\n                        <img class=\"d-block w-100\" src=\"https://picsum.photos/1500/480\" alt=\"First slide\">\n                        <div class=\"carousel-caption d-none d-md-block\" >\n                            <h3 class=\"h5\">Titre 1</h3>\n                            <p>Paragraphe 1</p>\n                        </div>\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img class=\"d-block w-100\" src=\"https://picsum.photos/1500/480\" alt=\"Second slide\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3 class=\"h5\">Titre 2</h3>\n                            <p>Paragraphe 2</p>\n                        </div>\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img class=\"d-block w-100\" src=\"https://picsum.photos/1500/480\" alt=\"Third slide\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3 class=\"h5\">Titre 3</h3>\n                            <p>Paragraphe 3</p>\n                        </div>\n                    </div>\n                </div>\n                 \n                <button class=\"carousel-control-prev\" type=\"button\" data-target=\"#").concat(carouselId, "\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                </button>\n                <button class=\"carousel-control-next\" type=\"button\" data-target=\"#").concat(carouselId, "\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                </button>\n            </div>");
      return slider;
    }
  }, {
    key: "onSelect",
    value: function onSelect(el) {
      if (el.classList.contains("carousel-item")) {
        var slider = el.parentElement;
        var slides = slider.querySelectorAll('.carousel-item');
        var _iterator = _createForOfIteratorHelper(slides),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var slide = _step.value;
            slide.classList.remove('active');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        el.classList.add('active');
      }
    }
  }]);
}(HTMLDivElement);
var HTMLCarouselNavElement = exports.HTMLCarouselNavElement = function (_HTMLDivElement11) {
  function HTMLCarouselNavElement() {
    var _this24;
    (0, _classCallCheck2["default"])(this, HTMLCarouselNavElement);
    _this24 = _callSuper(this, HTMLCarouselNavElement, [_RecitEditor.i18n.get_string('carouselnav'), "div", 'nativecomponent', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this24.visible = false;
    _this24.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this24;
  }
  (0, _inherits2["default"])(HTMLCarouselNavElement, _HTMLDivElement11);
  return (0, _createClass2["default"])(HTMLCarouselNavElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('carousel-control-prev') || el.classList.contains('carousel-control-next');
    }
  }]);
}(HTMLDivElement);
var HTMLTabElement = exports.HTMLTabElement = function (_HTMLDivElement12) {
  function HTMLTabElement() {
    var _this25;
    (0, _classCallCheck2["default"])(this, HTMLTabElement);
    _this25 = _callSuper(this, HTMLTabElement, [_RecitEditor.i18n.get_string('tab'), "div", 'nativecomponent', {
      all: ['tab'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['tab']
    }]);
    _this25.cssProp.prefix = 'tab';
    _this25.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this25;
  }
  (0, _inherits2["default"])(HTMLTabElement, _HTMLDivElement12);
  return (0, _createClass2["default"])(HTMLTabElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('tabs') || el.classList.contains('carousel-control-next');
    }
  }, {
    key: "create",
    value: function create() {
      var slider = document.createElement("div");
      slider.classList.add("tabs");
      var id1 = _RecitEditor.Utils.getRandomId();
      var id2 = _RecitEditor.Utils.getRandomId();
      var id3 = _RecitEditor.Utils.getRandomId();
      slider.innerHTML = "\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#".concat(id1, "\" role=\"tab\" aria-controls=\"").concat(id1, "\">\n                    Onglet 1\n                </a>\n                </li>\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#").concat(id2, "\" role=\"tab\" aria-controls=\"").concat(id2, "\">\n                    Onglet 2\n                </a>\n                </li>\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#").concat(id3, "\" role=\"tab\" aria-controls=\"").concat(id3, "\">\n                    Onglet 3\n                </a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane fade show active mt-3\" id=\"").concat(id1, "\" role=\"tabpanel\" aria-labelledby=\"").concat(id1, "\">\n                    <p>Contenu de l'onglet 1</p>\n                </div>\n                <div class=\"tab-pane fade mt-3\" id=\"").concat(id2, "\" role=\"tabpanel\" aria-labelledby=\"").concat(id2, "\">\n                    <p>Contenu de l'onglet 2</p>\n                </div>\n                <div class=\"tab-pane fade mt-3\" id=\"").concat(id3, "\" role=\"tabpanel\" aria-labelledby=\"").concat(id3, "\">\n                    <p>Contenu de l'onglet 3</p>\n                </div>\n            </div>");
      return slider;
    }
  }]);
}(HTMLDivElement);
var HTMLAccordionElement = exports.HTMLAccordionElement = function (_HTMLDivElement13) {
  function HTMLAccordionElement() {
    var _this26;
    (0, _classCallCheck2["default"])(this, HTMLAccordionElement);
    _this26 = _callSuper(this, HTMLAccordionElement, [_RecitEditor.i18n.get_string('accordion'), "div", 'nativecomponent', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.accordion]);
    _this26.cssProp.prefix = 'accordion';
    _this26.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this26;
  }
  (0, _inherits2["default"])(HTMLAccordionElement, _HTMLDivElement13);
  return (0, _createClass2["default"])(HTMLAccordionElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('accordion');
    }
  }, {
    key: "create",
    value: function create() {
      var slider = document.createElement("div");
      slider.classList.add("accordion");
      slider.setAttribute('id', _RecitEditor.Utils.getRandomId());
      var id1 = _RecitEditor.Utils.getRandomId();
      var id2 = _RecitEditor.Utils.getRandomId();
      var id3 = _RecitEditor.Utils.getRandomId();
      slider.innerHTML = "\n            <div class=\"card\">\n            <div class=\"card-header\" id=\"headingOne\">\n                <h2 class=\"mb-0\">\n                <button class=\"btn btn-link btn-block text-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#".concat(id1, "\" aria-expanded=\"true\" aria-controls=\"").concat(id1, "\">\n                    Item #1\n                </button>\n                </h2>\n            </div>\n        \n            <div id=\"").concat(id1, "\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#").concat(slider.getAttribute('id'), "\">\n                <div class=\"card-body\">\n                Item #1\n                </div>\n            </div>\n            </div>\n            <div class=\"card\">\n            <div class=\"card-header\" id=\"headingTwo\">\n                <h2 class=\"mb-0\">\n                <button class=\"btn btn-link btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#").concat(id2, "\" aria-expanded=\"false\" aria-controls=\"").concat(id2, "\">\n                    Item #2\n                </button>\n                </h2>\n            </div>\n            <div id=\"").concat(id2, "\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#").concat(slider.getAttribute('id'), "\">\n                <div class=\"card-body\">\n                Item #2\n                </div>\n            </div>\n            </div>\n            <div class=\"card\">\n            <div class=\"card-header\" id=\"headingThree\">\n                <h2 class=\"mb-0\">\n                <button class=\"btn btn-link btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#").concat(id3, "\" aria-expanded=\"false\" aria-controls=\"").concat(id3, "\">\n                    Item #3\n                </button>\n                </h2>\n            </div>\n            <div id=\"").concat(id3, "\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#").concat(slider.getAttribute('id'), "\">\n                <div class=\"card-body\">\n                Item #3\n                </div>\n            </div>\n            </div>");
      return slider;
    }
  }]);
}(HTMLDivElement);
var HTMLAccordionNavElement = exports.HTMLAccordionNavElement = function (_HTMLElement24) {
  function HTMLAccordionNavElement() {
    var _this27;
    (0, _classCallCheck2["default"])(this, HTMLAccordionNavElement);
    _this27 = _callSuper(this, HTMLAccordionNavElement, [_RecitEditor.i18n.get_string('accordionitem'), "button", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.accordion]);
    _this27.visible = false;
    _this27.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this27;
  }
  (0, _inherits2["default"])(HTMLAccordionNavElement, _HTMLElement24);
  return (0, _createClass2["default"])(HTMLAccordionNavElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      if (!el.parentElement || !el.parentElement.parentElement || !el.parentElement.parentElement.parentElement || !el.parentElement.parentElement.parentElement.parentElement) {
        return false;
      }
      return el.parentElement.parentElement.parentElement.parentElement.classList.contains('accordion');
    }
  }]);
}(HTMLElement);
var HTMLTabContentElement = exports.HTMLTabContentElement = function (_HTMLDivElement14) {
  function HTMLTabContentElement() {
    var _this28;
    (0, _classCallCheck2["default"])(this, HTMLTabContentElement);
    _this28 = _callSuper(this, HTMLTabContentElement, [_RecitEditor.i18n.get_string('tabcontent'), "div", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this28.cssProp.prefix = 'tab';
    _this28.visible = false;
    _this28.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this28;
  }
  (0, _inherits2["default"])(HTMLTabContentElement, _HTMLDivElement14);
  return (0, _createClass2["default"])(HTMLTabContentElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('tab-content');
    }
  }]);
}(HTMLDivElement);
var HTMLTabPaneElement = exports.HTMLTabPaneElement = function (_HTMLDivElement15) {
  function HTMLTabPaneElement() {
    var _this29;
    (0, _classCallCheck2["default"])(this, HTMLTabPaneElement);
    _this29 = _callSuper(this, HTMLTabPaneElement, [_RecitEditor.i18n.get_string('tabcontent'), "div", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this29.cssProp.prefix = 'tab';
    _this29.visible = false;
    _this29.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this29;
  }
  (0, _inherits2["default"])(HTMLTabPaneElement, _HTMLDivElement15);
  return (0, _createClass2["default"])(HTMLTabPaneElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('tab-pane');
    }
  }, {
    key: "getDesc",
    value: function getDesc(el) {
      var tab = el.parentElement.parentElement;
      var target = tab.querySelector('[aria-controls="' + el.id + '"]');
      if (!target) return this.name;
      return _RecitEditor.i18n.get_string('tabcontent') + ' ' + target.innerText;
    }
  }]);
}(HTMLDivElement);
var HTMLNavElement = exports.HTMLNavElement = function (_HTMLElement25) {
  function HTMLNavElement() {
    var _this30;
    (0, _classCallCheck2["default"])(this, HTMLNavElement);
    _this30 = _callSuper(this, HTMLNavElement, ["Nav", "nav", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this30.visible = false;
    _this30.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this30;
  }
  (0, _inherits2["default"])(HTMLNavElement, _HTMLElement25);
  return (0, _createClass2["default"])(HTMLNavElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('nav');
    }
  }]);
}(HTMLElement);
var HTMLNavItemElement = exports.HTMLNavItemElement = function (_HTMLElement26) {
  function HTMLNavItemElement() {
    var _this31;
    (0, _classCallCheck2["default"])(this, HTMLNavItemElement);
    _this31 = _callSuper(this, HTMLNavItemElement, ["NavItem", "li", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general]);
    _this31.visible = false;
    _this31.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this31;
  }
  (0, _inherits2["default"])(HTMLNavItemElement, _HTMLElement26);
  return (0, _createClass2["default"])(HTMLNavItemElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('nav-item');
    }
  }]);
}(HTMLElement);
var HTMLNavLinkElement = exports.HTMLNavLinkElement = function (_HTMLElement27) {
  function HTMLNavLinkElement() {
    var _this32;
    (0, _classCallCheck2["default"])(this, HTMLNavLinkElement);
    _this32 = _callSuper(this, HTMLNavLinkElement, ["NavLink", "a", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.link]);
    _this32.cssProp.prefix = 'btn';
    _this32.visible = false;
    _this32.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this32;
  }
  (0, _inherits2["default"])(HTMLNavLinkElement, _HTMLElement27);
  return (0, _createClass2["default"])(HTMLNavLinkElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('nav-link');
    }
  }, {
    key: "onSelect",
    value: function onSelect(el) {
      if (el.parentElement.parentElement.parentElement.classList.contains("tabs")) {
        var tab = el.parentElement.parentElement.parentElement;
        var target = el.getAttribute('aria-controls');
        target = tab.querySelector('#' + target);
        if (!target) return;
        var items = tab.querySelectorAll('.tab-pane');
        var _iterator2 = _createForOfIteratorHelper(items),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var it = _step2.value;
            it.classList.remove('active', 'show');
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        items = tab.querySelectorAll('.nav-link');
        var _iterator3 = _createForOfIteratorHelper(items),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _it = _step3.value;
            _it.classList.remove('active', 'show');
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        el.classList.add('active', 'show');
        target.classList.add('active', 'show');
      }
    }
  }]);
}(HTMLElement);
var HTMLHRElement = exports.HTMLHRElement = function (_HTMLElement28) {
  function HTMLHRElement() {
    (0, _classCallCheck2["default"])(this, HTMLHRElement);
    return _callSuper(this, HTMLHRElement, [_RecitEditor.i18n.get_string('split'), "hr", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
  }
  (0, _inherits2["default"])(HTMLHRElement, _HTMLElement28);
  return (0, _createClass2["default"])(HTMLHRElement);
}(HTMLElement);
var HTMLHorizontalBarElement = exports.HTMLHorizontalBarElement = function (_HTMLElement29) {
  function HTMLHorizontalBarElement() {
    (0, _classCallCheck2["default"])(this, HTMLHorizontalBarElement);
    return _callSuper(this, HTMLHorizontalBarElement, [_RecitEditor.i18n.get_string('horizontalbar'), "hr", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers]);
  }
  (0, _inherits2["default"])(HTMLHorizontalBarElement, _HTMLElement29);
  return (0, _createClass2["default"])(HTMLHorizontalBarElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement("hr");
      el.classList.add("bg-primary");
      el.classList.add("p-2");
      el.classList.add("m-0");
      return el;
    }
  }]);
}(HTMLElement);
var HTMLImageElement = exports.HTMLImageElement = function (_HTMLElement30) {
  function HTMLImageElement() {
    (0, _classCallCheck2["default"])(this, HTMLImageElement);
    return _callSuper(this, HTMLImageElement, [_RecitEditor.i18n.get_string('image'), "img", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.image]);
  }
  (0, _inherits2["default"])(HTMLImageElement, _HTMLElement30);
  return (0, _createClass2["default"])(HTMLImageElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement("img");
      el.setAttribute('src', "".concat(_RecitEditor.Assets.ImageEmpty));
      el.setAttribute('alt', '');
      el.classList.add("img-fluid");
      return el;
    }
  }]);
}(HTMLElement);
var HTMLImageWithCaptionElement = exports.HTMLImageWithCaptionElement = function (_HTMLElement31) {
  function HTMLImageWithCaptionElement() {
    (0, _classCallCheck2["default"])(this, HTMLImageWithCaptionElement);
    return _callSuper(this, HTMLImageWithCaptionElement, [_RecitEditor.i18n.get_string('imagewithcaption'), "figure", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.image]);
  }
  (0, _inherits2["default"])(HTMLImageWithCaptionElement, _HTMLElement31);
  return (0, _createClass2["default"])(HTMLImageWithCaptionElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('htmlbootstrapeditor_img-popup') || this.equalLegacy(el);
    }
  }, {
    key: "equalLegacy",
    value: function equalLegacy(el) {
      return el.classList.contains('attoreciteditor_img-popup');
    }
  }, {
    key: "create",
    value: function create() {
      var div = document.createElement("figure");
      div.classList.add('figure-caption');
      div.classList.add('text-center');
      div.classList.add('p-2');
      var el = document.createElement("img");
      el.setAttribute('src', "".concat(_RecitEditor.Assets.ImageEmpty));
      el.classList.add("img-fluid");
      el.classList.add("htmlbootstrapeditor_img-popup");
      el.setAttribute('alt', '');
      div.appendChild(el);
      el = document.createElement("figcaption");
      el.innerHTML = "Source : Nom de l'auteur, <em>titre de la photo ou de l'oeuvre</em> (année), nom de l'institution qui possède l'œuvre.";
      div.appendChild(el);
      return div;
    }
  }]);
}(HTMLElement);
var HTMLClickableImageElement = exports.HTMLClickableImageElement = function (_HTMLElement32) {
  function HTMLClickableImageElement() {
    (0, _classCallCheck2["default"])(this, HTMLClickableImageElement);
    return _callSuper(this, HTMLClickableImageElement, [_RecitEditor.i18n.get_string('clickableimage'), "div", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.image]);
  }
  (0, _inherits2["default"])(HTMLClickableImageElement, _HTMLElement32);
  return (0, _createClass2["default"])(HTMLClickableImageElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('htmlbootstrapeditor_imgclick') || this.equalLegacy(el);
    }
  }, {
    key: "equalLegacy",
    value: function equalLegacy(el) {
      return el.classList.contains('attoreciteditor_imgclick');
    }
  }, {
    key: "create",
    value: function create() {
      var div = document.createElement("div");
      div.classList.add('htmlbootstrapeditor_imgclick');
      var el = document.createElement("img");
      el.setAttribute('src', "".concat(_RecitEditor.Assets.ImageEmpty));
      el.classList.add("img-fluid");
      el.setAttribute('alt', '');
      div.appendChild(el);
      var div2 = document.createElement("div");
      div2.classList.add('imgclickcontent');
      el = document.createElement("a");
      el.classList.add('border');
      el.classList.add('border-white');
      el.classList.add('rounded');
      el.classList.add('p-2');
      el.href = '#';
      el.innerHTML = _RecitEditor.i18n.get_string('getstarted');
      div2.appendChild(el);
      div.appendChild(div2);
      return div;
    }
  }]);
}(HTMLElement);
var HTMLIconElement = exports.HTMLIconElement = function (_HTMLElement33) {
  function HTMLIconElement() {
    (0, _classCallCheck2["default"])(this, HTMLIconElement);
    return _callSuper(this, HTMLIconElement, [_RecitEditor.i18n.get_string('icon'), "i", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.icon]);
  }
  (0, _inherits2["default"])(HTMLIconElement, _HTMLElement33);
  return (0, _createClass2["default"])(HTMLIconElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return this.equalFontAwesome(el) || this.equalGoogleIcons(el) || el.tagName == 'I' && el.classList[0] && el.innerHTML == '';
    }
  }, {
    key: "equalFontAwesome",
    value: function equalFontAwesome(el) {
      return el.classList.contains('fa');
    }
  }, {
    key: "equalGoogleIcons",
    value: function equalGoogleIcons(el) {
      return el.classList.contains('material-symbols-outlined');
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.classList.add('fa', 'fa-anchor');
      return el;
    }
  }]);
}(HTMLElement);