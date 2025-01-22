"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLElementData = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireDefault(require("react"));
var _RecitEditor = require("../../RecitEditor");
var _HTMLProperties = require("./HTMLProperties");
var _HTMLElements = require("./HTMLElements");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var HTMLElementData = function () {
  function HTMLElementData() {
    (0, _classCallCheck2["default"])(this, HTMLElementData);
    this.propertyList = {
      bootstrap: [{
        name: 'bs-background',
        description: _RecitEditor.i18n.get_string('background'),
        children: [new _HTMLProperties.BsBackgroundProperty(), new _HTMLProperties.BsBackgroundImageProperty(), new _HTMLProperties.HTMLImageBankProperty(false), new _HTMLProperties.HTMLBackgroundCoverProperty(), new _HTMLProperties.BsShadowProperty()]
      }, {
        name: 'icon',
        description: _RecitEditor.i18n.get_string('icon'),
        children: [new _HTMLProperties.BsIconProperty(), new _HTMLProperties.BsIconSizeProperty(), new _HTMLProperties.BsTextColorProperty()]
      }, {
        name: 'modal-grid',
        description: _RecitEditor.i18n.get_string('grid'),
        visible: false,
        children: [new _HTMLProperties.ModalGridProperty()]
      }, {
        name: 'bs-grid',
        description: _RecitEditor.i18n.get_string('grid'),
        children: [new _HTMLProperties.BsGridPaddingProperty()]
      }, {
        name: 'bs-row',
        description: _RecitEditor.i18n.get_string('row'),
        children: [new _HTMLProperties.BsGridResponsiveProperty()]
      }, {
        name: 'bs-col',
        description: _RecitEditor.i18n.get_string('column'),
        children: [new _HTMLProperties.BsGridVerticalAlignProperty()]
      }, {
        name: 'bs-general',
        description: _RecitEditor.i18n.get_string('classlist'),
        children: [new _HTMLProperties.HTMLClassProperty()]
      }, {
        name: 'bs-spacing',
        description: _RecitEditor.i18n.get_string('spacing'),
        children: [new _HTMLProperties.BsMarginProperty(), new _HTMLProperties.BsPaddingProperty()]
      }, {
        name: 'bs-border',
        description: _RecitEditor.i18n.get_string('border'),
        children: [new _HTMLProperties.BsBorderProperty(), new _HTMLProperties.BsBorderColorProperty(), new _HTMLProperties.BsBorderStyleProperty(), new _HTMLProperties.BsBorderRadiusProperty()]
      }, {
        name: 'bs-text',
        description: _RecitEditor.i18n.get_string('text'),
        children: [new _HTMLProperties.BsTextColorProperty(), new _HTMLProperties.BsTextAlignmentProperty()]
      }, {
        name: 'bs-button',
        description: _RecitEditor.i18n.get_string('button'),
        children: [new _HTMLProperties.BsBackgroundProperty(), new _HTMLProperties.BsBtnBlockProperty(), new _HTMLProperties.BsBtnOutlineProperty(), new _HTMLProperties.BsBtnSizeProperty()]
      }, {
        name: 'bs-table',
        description: _RecitEditor.i18n.get_string('table'),
        children: [new _HTMLProperties.BsTableActionProperty(), new _HTMLProperties.BsTableBorderProperty(), new _HTMLProperties.BsTableStripedProperty()]
      }, {
        name: 'bs-tablecell',
        description: _RecitEditor.i18n.get_string('table'),
        children: [new _HTMLProperties.BsTableCellActionProperty()]
      }, {
        name: 'tab',
        description: _RecitEditor.i18n.get_string('taboptions'),
        children: [new _HTMLProperties.BsTabProperty(), new _HTMLProperties.BsTabJustifyProperty(), new _HTMLProperties.BsAddTabProperty()]
      }, {
        name: 'accordion',
        description: _RecitEditor.i18n.get_string('accordionoptions'),
        children: [new _HTMLProperties.BsAddAccordionProperty()]
      }, {
        name: 'heading',
        description: _RecitEditor.i18n.get_string('heading'),
        children: [new _HTMLProperties.BsHeadingProperty()]
      }, {
        name: 'bs-dimension',
        description: _RecitEditor.i18n.get_string('dimension'),
        children: [new _HTMLProperties.BsFullHeightProperty()]
      }],
      html: [{
        name: 'layout',
        description: _RecitEditor.i18n.get_string('layout'),
        children: [new _HTMLProperties.HTMLWidthProperty(), new _HTMLProperties.HTMLHeightProperty(), new _HTMLProperties.HTMLMarginBorderPaddingProperty()]
      }, {
        name: 'font',
        description: _RecitEditor.i18n.get_string('font'),
        children: [new _HTMLProperties.HTMLFontSizeProperty(), new _HTMLProperties.HTMLFontFamilyProperty(), new _HTMLProperties.HTMLColorProperty()]
      }, {
        name: 'background',
        description: _RecitEditor.i18n.get_string('background'),
        children: [new _HTMLProperties.HTMLBackgroundProperty()]
      }, {
        name: 'link',
        description: _RecitEditor.i18n.get_string('linkoptions'),
        children: [new _HTMLProperties.HTMLHrefProperty(), new _HTMLProperties.HTMLTargetProperty()]
      }, {
        name: 'source',
        description: _RecitEditor.i18n.get_string('source'),
        children: [new _HTMLProperties.HTMLSourceProperty(), new _HTMLProperties.HTMLImageBankProperty(true)]
      }, {
        name: 'sourceaudio',
        description: _RecitEditor.i18n.get_string('source'),
        children: [new _HTMLProperties.HTMLSourceProperty('.mp3,.wav')]
      }, {
        name: 'outerhtml',
        description: _RecitEditor.i18n.get_string('source'),
        children: [new _HTMLProperties.HTMLOuterHTMLProperty()]
      }, {
        name: 'alt',
        description: _RecitEditor.i18n.get_string('description'),
        children: [new _HTMLProperties.HTMLAltProperty()]
      }, {
        name: 'htmlattributes',
        description: _RecitEditor.i18n.get_string('htmlattributes'),
        children: [new _HTMLProperties.HTMLClassProperty(), new _HTMLProperties.HTMLStyleProperty(), new _HTMLProperties.HTMLIdProperty()]
      }, {
        name: 'videobtn',
        description: _RecitEditor.i18n.get_string('source'),
        children: [new _HTMLProperties.HTMLVideoButtonProperty()]
      }, {
        name: 'videosource',
        description: _RecitEditor.i18n.get_string('source'),
        children: [new _HTMLProperties.HTMLVideoSourceProperty()]
      }, {
        name: 'embed',
        description: _RecitEditor.i18n.get_string('properties'),
        children: [new _HTMLProperties.HTMLEmbedRatio(), new _HTMLProperties.HTMLEmbedProperty()]
      }, {
        name: 'htmlcode',
        description: _RecitEditor.i18n.get_string('htmlcode'),
        children: [new _HTMLProperties.HTMLCodeProperty()]
      }, {
        name: 'appearance',
        description: _RecitEditor.i18n.get_string('htmlcode'),
        children: [new _HTMLProperties.HTMLColorProperty(), new _HTMLProperties.HTMLBackgroundProperty(), new _HTMLProperties.HTMLFontSizeProperty()]
      }],
      bookmark: []
    };
    this.elementList = [{
      name: _RecitEditor.i18n.get_string('layout'),
      children: [new _HTMLElements.HTMLBodyElement(), new _HTMLElements.HTMLDivElement(), new _HTMLElements.HTMLSectionElement(), new _HTMLElements.HTMLGridElement(), new _HTMLElements.HTMLRowElement(), new _HTMLElements.HTMLColElement()]
    }, {
      name: _react["default"].createElement(_react["default"].Fragment, null, _RecitEditor.i18n.get_string('text'), " ", _react["default"].createElement("a", {
        target: "_blank",
        href: "https://www.w3.org/WAI/tutorials/page-structure/headings/#heading-ranks"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faInfoCircle
      }), " ")),
      children: [new _HTMLElements.HTMLHeadingElement('H1', 'h1'), new _HTMLElements.HTMLHeadingElement('H2', 'h2'), new _HTMLElements.HTMLHeadingElement('H3', 'h3'), new _HTMLElements.HTMLHeadingElement('H4', 'h4'), new _HTMLElements.HTMLHeadingElement('H5', 'h5'), new _HTMLElements.HTMLHeadingElement('H6', 'h6'), new _HTMLElements.HTMLHeadingElement(_RecitEditor.i18n.get_string('headingwithicon'), 'h3', true), new _HTMLElements.HTMLParagraphElement(), new _HTMLElements.HTMLUListElement(), new _HTMLElements.HTMLOListElement(), new _HTMLElements.HTMLLIElement(), new _HTMLElements.HTMLSpanElement()]
    }, {
      name: _RecitEditor.i18n.get_string('media'),
      children: [new _HTMLElements.HTMLImageElement(), new _HTMLElements.HTMLImageWithCaptionElement(), new _HTMLElements.HTMLImageFigureElement(), new _HTMLElements.HTMLClickableImageElement(), new _HTMLElements.HTMLVideoElement(_RecitEditor.i18n.get_string('video'), null, 'bootstrap'), new _HTMLElements.HTMLIframeElement(), new _HTMLElements.HTMLButtonVideoElement(), new _HTMLElements.HTMLIconElement(), new _HTMLElements.HTMLAudioElement(), new _HTMLElements.HTMLEmbedElement()]
    }, {
      name: _RecitEditor.i18n.get_string('navigation'),
      children: [new _HTMLElements.HTMLButtonElement(_RecitEditor.i18n.get_string('button'), 'a', 'bootstrap', _HTMLProperties.HTMLPropertiesData.propsAssignmentFacade.buttons), new _HTMLElements.HTMLButtonVideoElement(), new _HTMLElements.HTMLLinkElement(), new _HTMLElements.HTMLNavElement(), new _HTMLElements.HTMLNavItemElement(), new _HTMLElements.HTMLNavLinkElement()]
    }, {
      name: _RecitEditor.i18n.get_string('nativecomponents'),
      children: [new _HTMLElements.HTMLAccordionElement(), new _HTMLElements.HTMLAccordionNavElement(), new _HTMLElements.HTMLCarouselElement(), new _HTMLElements.HTMLCarouselNavElement(), new _HTMLElements.HTMLFlipCardElement(), new _HTMLElements.HTMLFlipCardFrontElement(), new _HTMLElements.HTMLFlipCardBackElement(), new _HTMLElements.HTMLTabElement(), new _HTMLElements.HTMLTabPaneElement(), new _HTMLElements.HTMLTabContentElement(), new _HTMLElements.HTMLTableElement(), new _HTMLElements.HTMLTableDataCellElement(), new _HTMLElements.HTMLTableHeaderCellElement(), new _HTMLElements.HTMLTableRowElement(), new _HTMLElements.HTMLAlertElement(), new _HTMLElements.HTMLAvatarCardElement(), new _HTMLElements.HTMLCardElement(), new _HTMLElements.HTMLCardBodyElement(), new _HTMLElements.HTMLCardHeaderElement(), new _HTMLElements.HTMLCardFooterElement(), new _HTMLElements.HTMLHRElement(), new _HTMLElements.HTMLHorizontalBarElement()]
    }];
  }
  (0, _createClass2["default"])(HTMLElementData, [{
    key: "elementListSortByName",
    value: function elementListSortByName() {
      this.elementList.sort(function (a, b) {
        return a.name.toString().localeCompare(b.name.toString());
      });
      var _iterator = _createForOfIteratorHelper(this.elementList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.children.sort(function (a, b) {
            return a.name.toString().localeCompare(b.name.toString());
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "elementListSortbyType",
    value: function elementListSortbyType() {
      if (this.elementListSortedbyType) {
        return this.elementListSortedbyType;
      }
      var list = [];
      var _iterator2 = _createForOfIteratorHelper(this.elementList),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var cat = _step2.value;
          if (cat.name == _RecitEditor.i18n.get_string('nativecomponents')) {
            var _iterator4 = _createForOfIteratorHelper(cat.children),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;
                list.push(item);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var list2 = [];
      var _iterator3 = _createForOfIteratorHelper(this.elementList),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _cat = _step3.value;
          if (_cat.name != _RecitEditor.i18n.get_string('nativecomponents')) {
            var _iterator5 = _createForOfIteratorHelper(_cat.children),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _item = _step5.value;
                list2.push(_item);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      list2.sort(function (a, b) {
        return a.type.toString().localeCompare(b.type.toString());
      });
      this.elementListSortedbyType = [].concat(list, list2);
      return this.elementListSortedbyType;
    }
  }, {
    key: "getElementClass",
    value: function getElementClass(data, el) {
      data = data || null;
      el = el || null;
      var list = this.elementListSortbyType();
      var _iterator6 = _createForOfIteratorHelper(list),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;
          if (item.equal(el)) {
            return item;
          } else if (data !== null && data.name === item.name) {
            return item;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return null;
    }
  }, {
    key: "createElement",
    value: function createElement(componentData) {
      var el = null;
      if (componentData.type === 'native' || componentData.type === 'bootstrap' || componentData.type == 'nativecomponent') {
        var component = this.getElementClass(componentData);
        el = component.create();
      } else if (componentData.type === 'c' || componentData.type === 'l') {
        var html = componentData.htmlStr || componentData.htmlstr;
        if (!html) {
          alert(_RecitEditor.i18n.get_string('invalidcomponent'));
          console.log(componentData);
          return;
        }
        var htmlEl = new DOMParser().parseFromString(html, "text/html");
        el = htmlEl.body.firstChild;
        if (htmlEl.body.childElementCount > 1) {
          var div = document.createElement('div');
          div.innerHTML = htmlEl.body.innerHTML;
          el = div;
        }
      } else {
        console.log("Component type not found: ".concat(componentData));
      }
      return el;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!HTMLElementData.instance) {
        HTMLElementData.instance = new HTMLElementData();
      }
      return HTMLElementData.instance;
    }
  }]);
  return HTMLElementData;
}();
exports.HTMLElementData = HTMLElementData;
HTMLElementData.fontFamilyList = [];
HTMLElementData.instance = null;