"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLVideoElement = exports.HTMLUListElement = exports.HTMLTableRowElement = exports.HTMLTableHeaderCellElement = exports.HTMLTableElement = exports.HTMLTableDataCellElement = exports.HTMLTabPaneElement = exports.HTMLTabElement = exports.HTMLTabContentElement = exports.HTMLSpanElement = exports.HTMLSectionElement = exports.HTMLRowElement = exports.HTMLParagraphElement = exports.HTMLOListElement = exports.HTMLNavLinkElement = exports.HTMLNavItemElement = exports.HTMLNavElement = exports.HTMLMediaElement = exports.HTMLLinkElement = exports.HTMLLIElement = exports.HTMLImageWithCaptionElement = exports.HTMLImageFigureElement = exports.HTMLImageElement = exports.HTMLIframeElement = exports.HTMLIconElement = exports.HTMLHorizontalBarElement = exports.HTMLHeadingElement = exports.HTMLHRElement = exports.HTMLGridElement = exports.HTMLFlipCardFrontElement = exports.HTMLFlipCardElement = exports.HTMLFlipCardBackElement = exports.HTMLEmbedElement = exports.HTMLDivElement = exports.HTMLColElement = exports.HTMLClickableImageElement = exports.HTMLCarouselNavElement = exports.HTMLCarouselElement = exports.HTMLCardHeaderElement = exports.HTMLCardFooterElement = exports.HTMLCardElement = exports.HTMLCardBodyElement = exports.HTMLButtonVideoElement = exports.HTMLButtonElement = exports.HTMLBodyElement = exports.HTMLAvatarCardElement = exports.HTMLAudioElement = exports.HTMLAlertElement = exports.HTMLAccordionNavElement = exports.HTMLAccordionElement = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _RecitEditor = require("../../RecitEditor");
var _HTMLProperties = require("./HTMLProperties");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } // This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
/**
 * Abstract class
 */
var HTMLElement = /*#__PURE__*/function () {
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
  (0, _createClass2["default"])(HTMLElement, [{
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
  return HTMLElement;
}();
var HTMLBodyElement = /*#__PURE__*/function (_HTMLElement) {
  (0, _inherits2["default"])(HTMLBodyElement, _HTMLElement);
  var _super = _createSuper(HTMLBodyElement);
  function HTMLBodyElement() {
    var _this;
    (0, _classCallCheck2["default"])(this, HTMLBodyElement);
    _this = _super.call(this, 'Body', 'body', 'native');
    _this.visible = false;
    return _this;
  }
  (0, _createClass2["default"])(HTMLBodyElement, [{
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
  return HTMLBodyElement;
}(HTMLElement);
exports.HTMLBodyElement = HTMLBodyElement;
var HTMLHeadingElement = /*#__PURE__*/function (_HTMLElement2) {
  (0, _inherits2["default"])(HTMLHeadingElement, _HTMLElement2);
  var _super2 = _createSuper(HTMLHeadingElement);
  function HTMLHeadingElement(name, tagName, icon) {
    var _this2;
    (0, _classCallCheck2["default"])(this, HTMLHeadingElement);
    _this2 = _super2.call(this, name, tagName, 'native', {
      min: ['heading', 'bs-text'],
      all: ['heading', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'font', 'layout', 'background', 'htmlattributes']
    });
    _this2.icon = icon;
    return _this2;
  }
  (0, _createClass2["default"])(HTMLHeadingElement, [{
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
  return HTMLHeadingElement;
}(HTMLElement);
exports.HTMLHeadingElement = HTMLHeadingElement;
var HTMLParagraphElement = /*#__PURE__*/function (_HTMLElement3) {
  (0, _inherits2["default"])(HTMLParagraphElement, _HTMLElement3);
  var _super3 = _createSuper(HTMLParagraphElement);
  function HTMLParagraphElement() {
    (0, _classCallCheck2["default"])(this, HTMLParagraphElement);
    return _super3.call(this, _RecitEditor.i18n.get_string('paragraph'), 'p', 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.text);
  }
  (0, _createClass2["default"])(HTMLParagraphElement, [{
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
  return HTMLParagraphElement;
}(HTMLElement);
exports.HTMLParagraphElement = HTMLParagraphElement;
var HTMLLinkElement = /*#__PURE__*/function (_HTMLElement4) {
  (0, _inherits2["default"])(HTMLLinkElement, _HTMLElement4);
  var _super4 = _createSuper(HTMLLinkElement);
  function HTMLLinkElement() {
    var _this3;
    (0, _classCallCheck2["default"])(this, HTMLLinkElement);
    _this3 = _super4.call(this, _RecitEditor.i18n.get_string('link'), "a", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.link);
    _this3.cssProp.prefix = 'btn';
    return _this3;
  }
  (0, _createClass2["default"])(HTMLLinkElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerText = _RecitEditor.i18n.get_string('link');
      el.setAttribute('href', '#');
      el.setAttribute('target', '_self');
      return el;
    }
  }]);
  return HTMLLinkElement;
}(HTMLElement);
exports.HTMLLinkElement = HTMLLinkElement;
var HTMLImageFigureElement = /*#__PURE__*/function (_HTMLElement5) {
  (0, _inherits2["default"])(HTMLImageFigureElement, _HTMLElement5);
  var _super5 = _createSuper(HTMLImageFigureElement);
  function HTMLImageFigureElement() {
    var _this4;
    (0, _classCallCheck2["default"])(this, HTMLImageFigureElement);
    _this4 = _super5.call(this, _RecitEditor.i18n.get_string('imagewithcaption'), "figure", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this4.visible = false;
    return _this4;
  }
  return (0, _createClass2["default"])(HTMLImageFigureElement);
}(HTMLElement);
exports.HTMLImageFigureElement = HTMLImageFigureElement;
var HTMLButtonElement = /*#__PURE__*/function (_HTMLElement6) {
  (0, _inherits2["default"])(HTMLButtonElement, _HTMLElement6);
  var _super6 = _createSuper(HTMLButtonElement);
  function HTMLButtonElement(name, tagName, type, properties) {
    var _this5;
    (0, _classCallCheck2["default"])(this, HTMLButtonElement);
    _this5 = _super6.call(this, name, tagName, type, properties);
    _this5.cssProp.prefix = 'btn';
    return _this5;
  }
  (0, _createClass2["default"])(HTMLButtonElement, [{
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
  return HTMLButtonElement;
}(HTMLElement);
/*export class HTMLButtonCollapseElement extends HTMLElement{
    constructor(){
        super(i18n.get_string('collapsebutton'), 'buttoncollapse', 'bootstrap', [...HTMLPropertiesData.propsAssignmentFacade.controls, 'collapse']);
        this.cssProp.prefix = 'btn';
    }

    equal(el){
        if(el === null){ return false; }

        return (el.classList.contains('btn-collapse'));
    }

    create(){ 
        let el = document.createElement("button");
        el.classList.add('btn');
        el.classList.add('btn-primary', 'btn-collapse');
        el.setAttribute('data-bs-toggle', 'collapse');
        el.innerHTML = i18n.get_string('collapsebutton');
        return el;
    }
}*/
exports.HTMLButtonElement = HTMLButtonElement;
var HTMLButtonVideoElement = /*#__PURE__*/function (_HTMLElement7) {
  (0, _inherits2["default"])(HTMLButtonVideoElement, _HTMLElement7);
  var _super7 = _createSuper(HTMLButtonVideoElement);
  function HTMLButtonVideoElement() {
    (0, _classCallCheck2["default"])(this, HTMLButtonVideoElement);
    return _super7.call(this, _RecitEditor.i18n.get_string('videobutton'), 'videobtn', 'bootstrap', {
      all: [].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.buttons.all), ['videobtn']),
      min: ['videobtn']
    });
  }
  (0, _createClass2["default"])(HTMLButtonVideoElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('htmlbootstrapeditor_videobtn') || this.equalLegacy(el); //Videobtn is legacy class
    }
  }, {
    key: "equalLegacy",
    value: function equalLegacy(el) {
      return el.classList.contains('attoreciteditor_videobtn') || el.classList.contains('videobtn'); //Videobtn is legacy class
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
  return HTMLButtonVideoElement;
}(HTMLElement);
exports.HTMLButtonVideoElement = HTMLButtonVideoElement;
var HTMLMediaElement = /*#__PURE__*/function (_HTMLElement8) {
  (0, _inherits2["default"])(HTMLMediaElement, _HTMLElement8);
  var _super8 = _createSuper(HTMLMediaElement);
  function HTMLMediaElement(name, tagName, type, properties) {
    (0, _classCallCheck2["default"])(this, HTMLMediaElement);
    return _super8.call(this, name, tagName, type, properties);
  }
  return (0, _createClass2["default"])(HTMLMediaElement);
}(HTMLElement);
exports.HTMLMediaElement = HTMLMediaElement;
var HTMLAudioElement = /*#__PURE__*/function (_HTMLMediaElement) {
  (0, _inherits2["default"])(HTMLAudioElement, _HTMLMediaElement);
  var _super9 = _createSuper(HTMLAudioElement);
  function HTMLAudioElement() {
    (0, _classCallCheck2["default"])(this, HTMLAudioElement);
    return _super9.call(this, _RecitEditor.i18n.get_string('audio'), 'audio', 'native', {
      all: ['bs-general', 'bs-spacingborder', 'htmlattributes', 'sourceaudio', 'layout'],
      min: ['sourceaudio']
    });
  }
  (0, _createClass2["default"])(HTMLAudioElement, [{
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
  return HTMLAudioElement;
}(HTMLMediaElement);
exports.HTMLAudioElement = HTMLAudioElement;
var HTMLVideoElement = /*#__PURE__*/function (_HTMLMediaElement2) {
  (0, _inherits2["default"])(HTMLVideoElement, _HTMLMediaElement2);
  var _super10 = _createSuper(HTMLVideoElement);
  function HTMLVideoElement(name, tagName, type) {
    (0, _classCallCheck2["default"])(this, HTMLVideoElement);
    return _super10.call(this, name, 'video', type, _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.video);
  }
  (0, _createClass2["default"])(HTMLVideoElement, [{
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
  return HTMLVideoElement;
}(HTMLMediaElement);
exports.HTMLVideoElement = HTMLVideoElement;
var HTMLDivElement = /*#__PURE__*/function (_HTMLElement9) {
  (0, _inherits2["default"])(HTMLDivElement, _HTMLElement9);
  var _super11 = _createSuper(HTMLDivElement);
  function HTMLDivElement(name, tagName, type, properties) {
    (0, _classCallCheck2["default"])(this, HTMLDivElement);
    return _super11.call(this, name || "Div", tagName || "div", type || 'native', properties || _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
  }
  return (0, _createClass2["default"])(HTMLDivElement);
}(HTMLElement);
exports.HTMLDivElement = HTMLDivElement;
var HTMLEmbedElement = /*#__PURE__*/function (_HTMLElement10) {
  (0, _inherits2["default"])(HTMLEmbedElement, _HTMLElement10);
  var _super12 = _createSuper(HTMLEmbedElement);
  function HTMLEmbedElement() {
    (0, _classCallCheck2["default"])(this, HTMLEmbedElement);
    return _super12.call(this, _RecitEditor.i18n.get_string('embed'), 'div', 'bootstrap', {
      all: ['bs-general', 'bs-spacingborder', 'marginborderpadding', 'layout', 'embed'],
      min: ['embed']
    });
  }
  (0, _createClass2["default"])(HTMLEmbedElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement('div');
      el.classList.add('embedelement');
      return el;
    }
  }, {
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('embedelement');
    }
  }]);
  return HTMLEmbedElement;
}(HTMLElement);
exports.HTMLEmbedElement = HTMLEmbedElement;
var HTMLIframeElement = /*#__PURE__*/function (_HTMLElement11) {
  (0, _inherits2["default"])(HTMLIframeElement, _HTMLElement11);
  var _super13 = _createSuper(HTMLIframeElement);
  function HTMLIframeElement() {
    var _this6;
    (0, _classCallCheck2["default"])(this, HTMLIframeElement);
    _this6 = _super13.call(this, _RecitEditor.i18n.get_string('iframe'), 'iframe', 'native', {
      all: ['outerhtml', 'marginborderpadding', 'layout'],
      min: ['outerhtml']
    });
    _this6.visible = false;
    return _this6;
  }
  (0, _createClass2["default"])(HTMLIframeElement, [{
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
  return HTMLIframeElement;
}(HTMLElement);
exports.HTMLIframeElement = HTMLIframeElement;
var HTMLSpanElement = /*#__PURE__*/function (_HTMLElement12) {
  (0, _inherits2["default"])(HTMLSpanElement, _HTMLElement12);
  var _super14 = _createSuper(HTMLSpanElement);
  function HTMLSpanElement() {
    var _this7;
    (0, _classCallCheck2["default"])(this, HTMLSpanElement);
    _this7 = _super14.call(this, "Span", "span", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
    _this7.visible = false;
    return _this7;
  }
  return (0, _createClass2["default"])(HTMLSpanElement);
}(HTMLElement);
exports.HTMLSpanElement = HTMLSpanElement;
var HTMLSectionElement = /*#__PURE__*/function (_HTMLElement13) {
  (0, _inherits2["default"])(HTMLSectionElement, _HTMLElement13);
  var _super15 = _createSuper(HTMLSectionElement);
  function HTMLSectionElement() {
    (0, _classCallCheck2["default"])(this, HTMLSectionElement);
    return _super15.call(this, "Section", "section", 'native', {
      min: ['bs-grid', 'modal-grid', 'bs-background', 'bs-border'],
      all: ['bs-grid', 'modal-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    });
  }
  return (0, _createClass2["default"])(HTMLSectionElement);
}(HTMLElement);
exports.HTMLSectionElement = HTMLSectionElement;
var HTMLGridElement = /*#__PURE__*/function (_HTMLElement14) {
  (0, _inherits2["default"])(HTMLGridElement, _HTMLElement14);
  var _super16 = _createSuper(HTMLGridElement);
  function HTMLGridElement() {
    var _this8;
    (0, _classCallCheck2["default"])(this, HTMLGridElement);
    _this8 = _super16.call(this, 'Container', 'grid', 'bootstrap', {
      min: ['bs-grid', 'modal-grid', 'bs-background', 'bs-border'],
      all: ['bs-grid', 'modal-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    });
    _this8.modalCreation = true;
    return _this8;
  }
  (0, _createClass2["default"])(HTMLGridElement, [{
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
  return HTMLGridElement;
}(HTMLElement);
exports.HTMLGridElement = HTMLGridElement;
var HTMLRowElement = /*#__PURE__*/function (_HTMLElement15) {
  (0, _inherits2["default"])(HTMLRowElement, _HTMLElement15);
  var _super17 = _createSuper(HTMLRowElement);
  function HTMLRowElement() {
    var _this9;
    (0, _classCallCheck2["default"])(this, HTMLRowElement);
    _this9 = _super17.call(this, 'Row', 'row', 'bootstrap', {
      min: ['bs-row', 'bs-background', 'bs-border'],
      all: ['bs-row', 'bs-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    });
    _this9.visible = false;
    return _this9;
  }
  (0, _createClass2["default"])(HTMLRowElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('row') || this.equalLegacy(el);
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
  return HTMLRowElement;
}(HTMLElement);
exports.HTMLRowElement = HTMLRowElement;
var HTMLColElement = /*#__PURE__*/function (_HTMLElement16) {
  (0, _inherits2["default"])(HTMLColElement, _HTMLElement16);
  var _super18 = _createSuper(HTMLColElement);
  function HTMLColElement() {
    var _this10;
    (0, _classCallCheck2["default"])(this, HTMLColElement);
    _this10 = _super18.call(this, 'Col', 'col', 'bootstrap', {
      min: ['bs-col', 'bs-background', 'bs-border'],
      all: ['bs-col', 'bs-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
    });
    _this10.visible = false;
    return _this10;
  }
  (0, _createClass2["default"])(HTMLColElement, [{
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
      return el.classList.contains('col') || containsCol;
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
  return HTMLColElement;
}(HTMLElement);
exports.HTMLColElement = HTMLColElement;
var HTMLUListElement = /*#__PURE__*/function (_HTMLElement17) {
  (0, _inherits2["default"])(HTMLUListElement, _HTMLElement17);
  var _super19 = _createSuper(HTMLUListElement);
  function HTMLUListElement() {
    (0, _classCallCheck2["default"])(this, HTMLUListElement);
    return _super19.call(this, _RecitEditor.i18n.get_string('list'), "ul", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
  }
  (0, _createClass2["default"])(HTMLUListElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = "<li>" + _RecitEditor.i18n.get_string('list') + "</li>";
      return el;
    }
  }]);
  return HTMLUListElement;
}(HTMLElement);
exports.HTMLUListElement = HTMLUListElement;
var HTMLOListElement = /*#__PURE__*/function (_HTMLElement18) {
  (0, _inherits2["default"])(HTMLOListElement, _HTMLElement18);
  var _super20 = _createSuper(HTMLOListElement);
  function HTMLOListElement() {
    (0, _classCallCheck2["default"])(this, HTMLOListElement);
    return _super20.call(this, _RecitEditor.i18n.get_string('numberedlist'), "ol", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
  }
  (0, _createClass2["default"])(HTMLOListElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = "<li>" + _RecitEditor.i18n.get_string('numberedlist') + "</li>";
      return el;
    }
  }]);
  return HTMLOListElement;
}(HTMLElement);
exports.HTMLOListElement = HTMLOListElement;
var HTMLTableElement = /*#__PURE__*/function (_HTMLElement19) {
  (0, _inherits2["default"])(HTMLTableElement, _HTMLElement19);
  var _super21 = _createSuper(HTMLTableElement);
  function HTMLTableElement() {
    var _this11;
    (0, _classCallCheck2["default"])(this, HTMLTableElement);
    _this11 = _super21.call(this, _RecitEditor.i18n.get_string('table'), 'table', 'nativecomponent', {
      all: ['bs-table'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['bs-table']
    });
    _this11.cssProp.prefix = 'table';
    return _this11;
  }
  (0, _createClass2["default"])(HTMLTableElement, [{
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
  return HTMLTableElement;
}(HTMLElement);
exports.HTMLTableElement = HTMLTableElement;
var HTMLTableDataCellElement = /*#__PURE__*/function (_HTMLElement20) {
  (0, _inherits2["default"])(HTMLTableDataCellElement, _HTMLElement20);
  var _super22 = _createSuper(HTMLTableDataCellElement);
  function HTMLTableDataCellElement() {
    var _this12;
    (0, _classCallCheck2["default"])(this, HTMLTableDataCellElement);
    _this12 = _super22.call(this, _RecitEditor.i18n.get_string('tablecell'), "td", 'native', {
      all: ['bs-tablecell'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['bs-tablecell']
    });
    _this12.visible = false;
    return _this12;
  }
  (0, _createClass2["default"])(HTMLTableDataCellElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = _RecitEditor.i18n.get_string('tablecell');
      return el;
    }
  }]);
  return HTMLTableDataCellElement;
}(HTMLElement);
exports.HTMLTableDataCellElement = HTMLTableDataCellElement;
var HTMLTableHeaderCellElement = /*#__PURE__*/function (_HTMLElement21) {
  (0, _inherits2["default"])(HTMLTableHeaderCellElement, _HTMLElement21);
  var _super23 = _createSuper(HTMLTableHeaderCellElement);
  function HTMLTableHeaderCellElement() {
    var _this13;
    (0, _classCallCheck2["default"])(this, HTMLTableHeaderCellElement);
    _this13 = _super23.call(this, _RecitEditor.i18n.get_string('tableheader'), "th", 'native', {
      all: ['bs-tablecell'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['bs-tablecell']
    });
    _this13.visible = false;
    return _this13;
  }
  (0, _createClass2["default"])(HTMLTableHeaderCellElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerHTML = _RecitEditor.i18n.get_string('tablecell');
      return el;
    }
  }]);
  return HTMLTableHeaderCellElement;
}(HTMLElement);
exports.HTMLTableHeaderCellElement = HTMLTableHeaderCellElement;
var HTMLTableRowElement = /*#__PURE__*/function (_HTMLElement22) {
  (0, _inherits2["default"])(HTMLTableRowElement, _HTMLElement22);
  var _super24 = _createSuper(HTMLTableRowElement);
  function HTMLTableRowElement() {
    var _this14;
    (0, _classCallCheck2["default"])(this, HTMLTableRowElement);
    _this14 = _super24.call(this, _RecitEditor.i18n.get_string('tablerow'), "tr", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
    _this14.visible = false;
    return _this14;
  }
  (0, _createClass2["default"])(HTMLTableRowElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      return el;
    }
  }]);
  return HTMLTableRowElement;
}(HTMLElement);
exports.HTMLTableRowElement = HTMLTableRowElement;
var HTMLLIElement = /*#__PURE__*/function (_HTMLElement23) {
  (0, _inherits2["default"])(HTMLLIElement, _HTMLElement23);
  var _super25 = _createSuper(HTMLLIElement);
  function HTMLLIElement() {
    var _this15;
    (0, _classCallCheck2["default"])(this, HTMLLIElement);
    _this15 = _super25.call(this, _RecitEditor.i18n.get_string('listitem'), "li", 'native', {
      all: ['bs-general', 'bs-spacingborder', 'htmlattributes', 'font', 'layout', 'background'],
      min: []
    });
    _this15.visible = false;
    return _this15;
  }
  (0, _createClass2["default"])(HTMLLIElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.innerText = _RecitEditor.i18n.get_string('listitem');
      return el;
    }
  }]);
  return HTMLLIElement;
}(HTMLElement);
exports.HTMLLIElement = HTMLLIElement;
var HTMLAlertElement = /*#__PURE__*/function (_HTMLDivElement) {
  (0, _inherits2["default"])(HTMLAlertElement, _HTMLDivElement);
  var _super26 = _createSuper(HTMLAlertElement);
  function HTMLAlertElement() {
    var _this16;
    (0, _classCallCheck2["default"])(this, HTMLAlertElement);
    _this16 = _super26.call(this, _RecitEditor.i18n.get_string('alert'), "div", 'bootstrap');
    _this16.cssProp.prefix = "alert";
    return _this16;
  }
  (0, _createClass2["default"])(HTMLAlertElement, [{
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
  return HTMLAlertElement;
}(HTMLDivElement);
exports.HTMLAlertElement = HTMLAlertElement;
var HTMLAvatarCardElement = /*#__PURE__*/function (_HTMLDivElement2) {
  (0, _inherits2["default"])(HTMLAvatarCardElement, _HTMLDivElement2);
  var _super27 = _createSuper(HTMLAvatarCardElement);
  function HTMLAvatarCardElement() {
    (0, _classCallCheck2["default"])(this, HTMLAvatarCardElement);
    return _super27.call(this, _RecitEditor.i18n.get_string('avatarcard'), "div", 'bootstrap');
  }
  (0, _createClass2["default"])(HTMLAvatarCardElement, [{
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
  return HTMLAvatarCardElement;
}(HTMLDivElement);
exports.HTMLAvatarCardElement = HTMLAvatarCardElement;
var HTMLCardElement = /*#__PURE__*/function (_HTMLDivElement3) {
  (0, _inherits2["default"])(HTMLCardElement, _HTMLDivElement3);
  var _super28 = _createSuper(HTMLCardElement);
  function HTMLCardElement() {
    (0, _classCallCheck2["default"])(this, HTMLCardElement);
    return _super28.call(this, _RecitEditor.i18n.get_string('card'), "div", 'bootstrap');
  }
  (0, _createClass2["default"])(HTMLCardElement, [{
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
  return HTMLCardElement;
}(HTMLDivElement);
exports.HTMLCardElement = HTMLCardElement;
var HTMLCardBodyElement = /*#__PURE__*/function (_HTMLDivElement4) {
  (0, _inherits2["default"])(HTMLCardBodyElement, _HTMLDivElement4);
  var _super29 = _createSuper(HTMLCardBodyElement);
  function HTMLCardBodyElement() {
    var _this17;
    (0, _classCallCheck2["default"])(this, HTMLCardBodyElement);
    _this17 = _super29.call(this, _RecitEditor.i18n.get_string('cardbody'), "div", 'bootstrap');
    _this17.visible = false;
    return _this17;
  }
  (0, _createClass2["default"])(HTMLCardBodyElement, [{
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
  return HTMLCardBodyElement;
}(HTMLDivElement);
exports.HTMLCardBodyElement = HTMLCardBodyElement;
var HTMLCardHeaderElement = /*#__PURE__*/function (_HTMLDivElement5) {
  (0, _inherits2["default"])(HTMLCardHeaderElement, _HTMLDivElement5);
  var _super30 = _createSuper(HTMLCardHeaderElement);
  function HTMLCardHeaderElement() {
    var _this18;
    (0, _classCallCheck2["default"])(this, HTMLCardHeaderElement);
    _this18 = _super30.call(this, _RecitEditor.i18n.get_string('cardheader'), "div", 'bootstrap');
    _this18.visible = false;
    return _this18;
  }
  (0, _createClass2["default"])(HTMLCardHeaderElement, [{
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
  return HTMLCardHeaderElement;
}(HTMLDivElement);
exports.HTMLCardHeaderElement = HTMLCardHeaderElement;
var HTMLCardFooterElement = /*#__PURE__*/function (_HTMLDivElement6) {
  (0, _inherits2["default"])(HTMLCardFooterElement, _HTMLDivElement6);
  var _super31 = _createSuper(HTMLCardFooterElement);
  function HTMLCardFooterElement() {
    var _this19;
    (0, _classCallCheck2["default"])(this, HTMLCardFooterElement);
    _this19 = _super31.call(this, _RecitEditor.i18n.get_string('cardfooter'), "div", 'bootstrap');
    _this19.visible = false;
    return _this19;
  }
  (0, _createClass2["default"])(HTMLCardFooterElement, [{
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
  return HTMLCardFooterElement;
}(HTMLDivElement);
exports.HTMLCardFooterElement = HTMLCardFooterElement;
var HTMLFlipCardElement = /*#__PURE__*/function (_HTMLDivElement7) {
  (0, _inherits2["default"])(HTMLFlipCardElement, _HTMLDivElement7);
  var _super32 = _createSuper(HTMLFlipCardElement);
  function HTMLFlipCardElement() {
    var _this20;
    (0, _classCallCheck2["default"])(this, HTMLFlipCardElement);
    _this20 = _super32.call(this, _RecitEditor.i18n.get_string('flipcard'), "div", 'nativecomponent');
    _this20.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this20;
  }
  (0, _createClass2["default"])(HTMLFlipCardElement, [{
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
  return HTMLFlipCardElement;
}(HTMLDivElement);
exports.HTMLFlipCardElement = HTMLFlipCardElement;
var HTMLFlipCardFrontElement = /*#__PURE__*/function (_HTMLDivElement8) {
  (0, _inherits2["default"])(HTMLFlipCardFrontElement, _HTMLDivElement8);
  var _super33 = _createSuper(HTMLFlipCardFrontElement);
  function HTMLFlipCardFrontElement() {
    var _this21;
    (0, _classCallCheck2["default"])(this, HTMLFlipCardFrontElement);
    _this21 = _super33.call(this, _RecitEditor.i18n.get_string('front'), "div", 'nativecomponent');
    _this21.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    _this21.visible = false;
    return _this21;
  }
  (0, _createClass2["default"])(HTMLFlipCardFrontElement, [{
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
  return HTMLFlipCardFrontElement;
}(HTMLDivElement);
exports.HTMLFlipCardFrontElement = HTMLFlipCardFrontElement;
var HTMLFlipCardBackElement = /*#__PURE__*/function (_HTMLDivElement9) {
  (0, _inherits2["default"])(HTMLFlipCardBackElement, _HTMLDivElement9);
  var _super34 = _createSuper(HTMLFlipCardBackElement);
  function HTMLFlipCardBackElement() {
    var _this22;
    (0, _classCallCheck2["default"])(this, HTMLFlipCardBackElement);
    _this22 = _super34.call(this, _RecitEditor.i18n.get_string('rear'), "div", 'nativecomponent');
    _this22.visible = false;
    _this22.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this22;
  }
  (0, _createClass2["default"])(HTMLFlipCardBackElement, [{
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
  return HTMLFlipCardBackElement;
}(HTMLDivElement);
exports.HTMLFlipCardBackElement = HTMLFlipCardBackElement;
var HTMLCarouselElement = /*#__PURE__*/function (_HTMLDivElement10) {
  (0, _inherits2["default"])(HTMLCarouselElement, _HTMLDivElement10);
  var _super35 = _createSuper(HTMLCarouselElement);
  function HTMLCarouselElement() {
    var _this23;
    (0, _classCallCheck2["default"])(this, HTMLCarouselElement);
    _this23 = _super35.call(this, _RecitEditor.i18n.get_string('carousel'), "div", 'nativecomponent', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this23.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this23;
  }
  (0, _createClass2["default"])(HTMLCarouselElement, [{
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
      slider.innerHTML = "<div id=\"carouselInd\" class=\"carousel slide\" data-ride=\"carousel\" data-tag-id=\"3\">\n         <ol class=\"carousel-indicators\" data-tag-id=\"4\">\n             <li data-target=\"#carouselInd\" data-slide-to=\"0\" data-tag-id=\"5\">\n             </li>\n             <li data-target=\"#carouselInd\" data-slide-to=\"1\" data-tag-id=\"6\">\n             </li>\n             <li data-target=\"#carouselInd\" data-slide-to=\"2\" data-tag-id=\"7\">\n             </li>\n         </ol>\n         <div class=\"carousel-inner\" data-tag-id=\"8\">\n             <div class=\"carousel-item active\" data-tag-id=\"9\">\n             <img class=\"d-block w-100\" src=\"https://picsum.photos/1500/480\" alt=\"First slide\" data-tag-id=\"10\">\n             <div class=\"carousel-caption d-none d-md-block\" data-tag-id=\"11\">\n                 <h3 class=\"h5\" data-tag-id=\"12\">\n                 Titre 1\n                 </h3>\n                 <p data-tag-id=\"13\">\n                 Paragraphe 1\n                 </p>\n             </div>\n             </div>\n             <div class=\"carousel-item\" data-tag-id=\"14\">\n             <img class=\"d-block w-100\" src=\"https://picsum.photos/1500/480\" alt=\"Second slide\" data-tag-id=\"15\">\n             <div class=\"carousel-caption d-none d-md-block\" data-tag-id=\"16\">\n                 <h3 class=\"h5\" data-tag-id=\"17\">\n                 Titre 2\n                 </h3>\n                 <p data-tag-id=\"18\">\n                 Paragraphe 2\n                 </p>\n             </div>\n             </div>\n             <div class=\"carousel-item\" data-tag-id=\"19\">\n             <img class=\"d-block w-100\" src=\"https://picsum.photos/1500/480\" alt=\"Third slide\" data-tag-id=\"20\">\n             <div class=\"carousel-caption d-none d-md-block\" data-tag-id=\"21\">\n                 <h3 class=\"h5\" data-tag-id=\"22\">\n                 Titre 3\n                 </h3>\n                 <p data-tag-id=\"23\">\n                 Paragraphe 3\n                 </p>\n             </div>\n             </div>\n         </div>\n         <a class=\"carousel-control-prev\" href=\"#carouselInd\" role=\"button\" data-slide=\"prev\" data-tag-id=\"24\">\n             <i class=\"fa-3x fa fa-arrow-circle-left\" data-tag-id=\"25\"></i>\n             <span class=\"sr-only\" data-tag-id=\"26\">\n                 Pr\xE9c\xE9dent\n                 </span>\n         </a>\n         <a class=\"carousel-control-next\" href=\"#carouselInd\" role=\"button\" data-slide=\"next\" data-tag-id=\"27\">\n             <i class=\"fa-3x fa fa-arrow-circle-right\" data-tag-id=\"28\"></i>\n             <span class=\"sr-only\" data-tag-id=\"29\">\n                 Suivant\n                 </span>\n         </a>\n         </div>";
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
  return HTMLCarouselElement;
}(HTMLDivElement);
exports.HTMLCarouselElement = HTMLCarouselElement;
var HTMLCarouselNavElement = /*#__PURE__*/function (_HTMLDivElement11) {
  (0, _inherits2["default"])(HTMLCarouselNavElement, _HTMLDivElement11);
  var _super36 = _createSuper(HTMLCarouselNavElement);
  function HTMLCarouselNavElement() {
    var _this24;
    (0, _classCallCheck2["default"])(this, HTMLCarouselNavElement);
    _this24 = _super36.call(this, _RecitEditor.i18n.get_string('carouselnav'), "div", 'nativecomponent', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this24.visible = false;
    _this24.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this24;
  }
  (0, _createClass2["default"])(HTMLCarouselNavElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('carousel-control-prev') || el.classList.contains('carousel-control-next');
    }
  }]);
  return HTMLCarouselNavElement;
}(HTMLDivElement);
exports.HTMLCarouselNavElement = HTMLCarouselNavElement;
var HTMLTabElement = /*#__PURE__*/function (_HTMLDivElement12) {
  (0, _inherits2["default"])(HTMLTabElement, _HTMLDivElement12);
  var _super37 = _createSuper(HTMLTabElement);
  function HTMLTabElement() {
    var _this25;
    (0, _classCallCheck2["default"])(this, HTMLTabElement);
    _this25 = _super37.call(this, _RecitEditor.i18n.get_string('tab'), "div", 'nativecomponent', {
      all: ['tab'].concat((0, _toConsumableArray2["default"])(_HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers.all)),
      min: ['tab']
    });
    _this25.cssProp.prefix = 'tab';
    _this25.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this25;
  }
  (0, _createClass2["default"])(HTMLTabElement, [{
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
      slider.innerHTML = "\n             <ul class=\"nav nav-tabs\" role=\"tablist\">\n                 <li class=\"nav-item\">\n                 <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tab1\" role=\"tab\" aria-controls=\"tab1\">\n                     Onglet 1\n                 </a>\n                 </li>\n                 <li class=\"nav-item\">\n                 <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab2\" role=\"tab\" aria-controls=\"tab2\">\n                     Onglet 2\n                 </a>\n                 </li>\n                 <li class=\"nav-item\">\n                 <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab3\" role=\"tab\" aria-controls=\"tab3\">\n                     Onglet 3\n                 </a>\n                 </li>\n             </ul>\n             <div class=\"tab-content\">\n                 <div class=\"tab-pane fade show active mt-3\" id=\"tab1\" role=\"tabpanel\" aria-labelledby=\"tab1\">\n                     <p>Contenu de l'onglet 1</p>\n                 </div>\n                 <div class=\"tab-pane fade mt-3\" id=\"tab2\" role=\"tabpanel\" aria-labelledby=\"tab2\">\n                     <p>Contenu de l'onglet 2</p>\n                 </div>\n                 <div class=\"tab-pane fade mt-3\" id=\"tab3\" role=\"tabpanel\" aria-labelledby=\"tab3\">\n                     <p>Contenu de l'onglet 3</p>\n                 </div>\n             </div>";
      return slider;
    }
  }]);
  return HTMLTabElement;
}(HTMLDivElement);
exports.HTMLTabElement = HTMLTabElement;
var HTMLAccordionElement = /*#__PURE__*/function (_HTMLDivElement13) {
  (0, _inherits2["default"])(HTMLAccordionElement, _HTMLDivElement13);
  var _super38 = _createSuper(HTMLAccordionElement);
  function HTMLAccordionElement() {
    var _this26;
    (0, _classCallCheck2["default"])(this, HTMLAccordionElement);
    _this26 = _super38.call(this, _RecitEditor.i18n.get_string('accordion'), "div", 'nativecomponent', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.accordion);
    _this26.cssProp.prefix = 'accordion';
    _this26.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this26;
  }
  (0, _createClass2["default"])(HTMLAccordionElement, [{
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
      slider.id = "accordion-" + Math.floor(Math.random() * 1000);
      slider.innerHTML = "\n             <div class=\"card\">\n               <div class=\"card-header\" id=\"headingOne\">\n                 <h2 class=\"mb-0\">\n                   <button class=\"btn btn-link btn-block text-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                     Item #1\n                   </button>\n                 </h2>\n               </div>\n           \n               <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#".concat(slider.id, "\">\n                 <div class=\"card-body\">\n                   Item #1\n                 </div>\n               </div>\n             </div>\n             <div class=\"card\">\n               <div class=\"card-header\" id=\"headingTwo\">\n                 <h2 class=\"mb-0\">\n                   <button class=\"btn btn-link btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                     Item #2\n                   </button>\n                 </h2>\n               </div>\n               <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#").concat(slider.id, "\">\n                 <div class=\"card-body\">\n                   Item #2\n                 </div>\n               </div>\n             </div>\n             <div class=\"card\">\n               <div class=\"card-header\" id=\"headingThree\">\n                 <h2 class=\"mb-0\">\n                   <button class=\"btn btn-link btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                     Item #3\n                   </button>\n                 </h2>\n               </div>\n               <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#").concat(slider.id, "\">\n                 <div class=\"card-body\">\n                   Item #3\n                 </div>\n               </div>\n             </div>");
      return slider;
    }
  }]);
  return HTMLAccordionElement;
}(HTMLDivElement);
exports.HTMLAccordionElement = HTMLAccordionElement;
var HTMLAccordionNavElement = /*#__PURE__*/function (_HTMLElement24) {
  (0, _inherits2["default"])(HTMLAccordionNavElement, _HTMLElement24);
  var _super39 = _createSuper(HTMLAccordionNavElement);
  function HTMLAccordionNavElement() {
    var _this27;
    (0, _classCallCheck2["default"])(this, HTMLAccordionNavElement);
    _this27 = _super39.call(this, _RecitEditor.i18n.get_string('accordionitem'), "button", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.accordion);
    _this27.visible = false;
    _this27.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this27;
  }
  (0, _createClass2["default"])(HTMLAccordionNavElement, [{
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
  return HTMLAccordionNavElement;
}(HTMLElement);
exports.HTMLAccordionNavElement = HTMLAccordionNavElement;
var HTMLTabContentElement = /*#__PURE__*/function (_HTMLDivElement14) {
  (0, _inherits2["default"])(HTMLTabContentElement, _HTMLDivElement14);
  var _super40 = _createSuper(HTMLTabContentElement);
  function HTMLTabContentElement() {
    var _this28;
    (0, _classCallCheck2["default"])(this, HTMLTabContentElement);
    _this28 = _super40.call(this, _RecitEditor.i18n.get_string('tabcontent'), "div", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this28.cssProp.prefix = 'tab';
    _this28.visible = false;
    _this28.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this28;
  }
  (0, _createClass2["default"])(HTMLTabContentElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('tab-content');
    }
  }]);
  return HTMLTabContentElement;
}(HTMLDivElement);
exports.HTMLTabContentElement = HTMLTabContentElement;
var HTMLTabPaneElement = /*#__PURE__*/function (_HTMLDivElement15) {
  (0, _inherits2["default"])(HTMLTabPaneElement, _HTMLDivElement15);
  var _super41 = _createSuper(HTMLTabPaneElement);
  function HTMLTabPaneElement() {
    var _this29;
    (0, _classCallCheck2["default"])(this, HTMLTabPaneElement);
    _this29 = _super41.call(this, _RecitEditor.i18n.get_string('tabcontent'), "div", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this29.cssProp.prefix = 'tab';
    _this29.visible = false;
    _this29.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this29;
  }
  (0, _createClass2["default"])(HTMLTabPaneElement, [{
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
  return HTMLTabPaneElement;
}(HTMLDivElement);
exports.HTMLTabPaneElement = HTMLTabPaneElement;
var HTMLNavElement = /*#__PURE__*/function (_HTMLElement25) {
  (0, _inherits2["default"])(HTMLNavElement, _HTMLElement25);
  var _super42 = _createSuper(HTMLNavElement);
  function HTMLNavElement() {
    var _this30;
    (0, _classCallCheck2["default"])(this, HTMLNavElement);
    _this30 = _super42.call(this, "Nav", "nav", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this30.visible = false;
    _this30.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this30;
  }
  (0, _createClass2["default"])(HTMLNavElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('nav');
    }
  }]);
  return HTMLNavElement;
}(HTMLElement);
exports.HTMLNavElement = HTMLNavElement;
var HTMLNavItemElement = /*#__PURE__*/function (_HTMLElement26) {
  (0, _inherits2["default"])(HTMLNavItemElement, _HTMLElement26);
  var _super43 = _createSuper(HTMLNavItemElement);
  function HTMLNavItemElement() {
    var _this31;
    (0, _classCallCheck2["default"])(this, HTMLNavItemElement);
    _this31 = _super43.call(this, "NavItem", "li", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.general);
    _this31.visible = false;
    _this31.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this31;
  }
  (0, _createClass2["default"])(HTMLNavItemElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('nav-item');
    }
  }]);
  return HTMLNavItemElement;
}(HTMLElement);
exports.HTMLNavItemElement = HTMLNavItemElement;
var HTMLNavLinkElement = /*#__PURE__*/function (_HTMLElement27) {
  (0, _inherits2["default"])(HTMLNavLinkElement, _HTMLElement27);
  var _super44 = _createSuper(HTMLNavLinkElement);
  function HTMLNavLinkElement() {
    var _this32;
    (0, _classCallCheck2["default"])(this, HTMLNavLinkElement);
    _this32 = _super44.call(this, "NavLink", "a", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.link);
    _this32.cssProp.prefix = 'btn';
    _this32.visible = false;
    _this32.panels = {
      components: 0,
      properties: 1,
      treeView: 1
    };
    return _this32;
  }
  (0, _createClass2["default"])(HTMLNavLinkElement, [{
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
  return HTMLNavLinkElement;
}(HTMLElement);
exports.HTMLNavLinkElement = HTMLNavLinkElement;
var HTMLHRElement = /*#__PURE__*/function (_HTMLElement28) {
  (0, _inherits2["default"])(HTMLHRElement, _HTMLElement28);
  var _super45 = _createSuper(HTMLHRElement);
  function HTMLHRElement() {
    (0, _classCallCheck2["default"])(this, HTMLHRElement);
    return _super45.call(this, _RecitEditor.i18n.get_string('split'), "hr", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
  }
  return (0, _createClass2["default"])(HTMLHRElement);
}(HTMLElement);
exports.HTMLHRElement = HTMLHRElement;
var HTMLHorizontalBarElement = /*#__PURE__*/function (_HTMLElement29) {
  (0, _inherits2["default"])(HTMLHorizontalBarElement, _HTMLElement29);
  var _super46 = _createSuper(HTMLHorizontalBarElement);
  function HTMLHorizontalBarElement() {
    (0, _classCallCheck2["default"])(this, HTMLHorizontalBarElement);
    return _super46.call(this, _RecitEditor.i18n.get_string('horizontalbar'), "hr", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.containers);
  }
  (0, _createClass2["default"])(HTMLHorizontalBarElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement("hr");
      el.classList.add("bg-primary");
      el.classList.add("p-2");
      el.classList.add("m-0");
      return el;
    }
  }]);
  return HTMLHorizontalBarElement;
}(HTMLElement);
exports.HTMLHorizontalBarElement = HTMLHorizontalBarElement;
var HTMLImageElement = /*#__PURE__*/function (_HTMLElement30) {
  (0, _inherits2["default"])(HTMLImageElement, _HTMLElement30);
  var _super47 = _createSuper(HTMLImageElement);
  function HTMLImageElement() {
    (0, _classCallCheck2["default"])(this, HTMLImageElement);
    return _super47.call(this, _RecitEditor.i18n.get_string('image'), "img", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.image);
  }
  (0, _createClass2["default"])(HTMLImageElement, [{
    key: "create",
    value: function create() {
      var el = document.createElement("img");
      el.setAttribute('src', "".concat(_RecitEditor.Assets.ImageEmpty));
      el.classList.add("img-fluid");
      return el;
    }
  }]);
  return HTMLImageElement;
}(HTMLElement);
exports.HTMLImageElement = HTMLImageElement;
var HTMLImageWithCaptionElement = /*#__PURE__*/function (_HTMLElement31) {
  (0, _inherits2["default"])(HTMLImageWithCaptionElement, _HTMLElement31);
  var _super48 = _createSuper(HTMLImageWithCaptionElement);
  function HTMLImageWithCaptionElement() {
    (0, _classCallCheck2["default"])(this, HTMLImageWithCaptionElement);
    return _super48.call(this, _RecitEditor.i18n.get_string('imagewithcaption'), "figure", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.image);
  }
  (0, _createClass2["default"])(HTMLImageWithCaptionElement, [{
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
      div.appendChild(el);
      el = document.createElement("figcaption");
      el.innerHTML = "Source : Nom de l'auteur, <em>titre de la photo ou de l'oeuvre</em> (année), nom de l'institution qui possède l'œuvre.";
      div.appendChild(el);
      return div;
    }
  }]);
  return HTMLImageWithCaptionElement;
}(HTMLElement);
exports.HTMLImageWithCaptionElement = HTMLImageWithCaptionElement;
var HTMLClickableImageElement = /*#__PURE__*/function (_HTMLElement32) {
  (0, _inherits2["default"])(HTMLClickableImageElement, _HTMLElement32);
  var _super49 = _createSuper(HTMLClickableImageElement);
  function HTMLClickableImageElement() {
    (0, _classCallCheck2["default"])(this, HTMLClickableImageElement);
    return _super49.call(this, _RecitEditor.i18n.get_string('clickableimage'), "div", 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.image);
  }
  (0, _createClass2["default"])(HTMLClickableImageElement, [{
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
  return HTMLClickableImageElement;
}(HTMLElement);
exports.HTMLClickableImageElement = HTMLClickableImageElement;
var HTMLIconElement = /*#__PURE__*/function (_HTMLElement33) {
  (0, _inherits2["default"])(HTMLIconElement, _HTMLElement33);
  var _super50 = _createSuper(HTMLIconElement);
  function HTMLIconElement() {
    (0, _classCallCheck2["default"])(this, HTMLIconElement);
    return _super50.call(this, _RecitEditor.i18n.get_string('icon'), "i", 'native', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.icon);
  }
  (0, _createClass2["default"])(HTMLIconElement, [{
    key: "equal",
    value: function equal(el) {
      if (el === null) {
        return false;
      }
      return el.classList.contains('fa') || el.tagName == 'I' && el.classList[0] && el.innerHTML == '';
    }
  }, {
    key: "create",
    value: function create() {
      var el = document.createElement(this.tagName);
      el.classList.add('fa', 'fa-anchor'); //Default icon
      return el;
    }
  }]);
  return HTMLIconElement;
}(HTMLElement);
exports.HTMLIconElement = HTMLIconElement;