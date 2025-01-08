"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceCodeState = exports.SourceCodeDesignerState = exports.PreviewState = exports.DesignerState = void 0;
var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _react = _interopRequireDefault(require("react"));
var _TextEditor = require("../../common/TextEditor");
var _RecitEditor = require("../../RecitEditor");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /**
                                                                                                                                                                                     * Atto HTML editor
                                                                                                                                                                                     *
                                                                                                                                                                                     * @package    atto_reciteditor
                                                                                                                                                                                     * @copyright  2019 RECIT
                                                                                                                                                                                     * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                     */
var CanvasState = function () {
  function CanvasState(mainView) {
    (0, _classCallCheck2["default"])(this, CanvasState);
    this.mainView = mainView;
    this.onInit = this.onInit.bind(this);
    this.onSelectElement = this.onSelectElement.bind(this);
    this.onDeleteElement = this.onDeleteElement.bind(this);
    this.onMoveNodeUp = this.onMoveNodeUp.bind(this);
    this.onMoveNodeDown = this.onMoveNodeDown.bind(this);
    this.onCloneNode = this.onCloneNode.bind(this);
    this.onAfterInsertNode = this.onAfterInsertNode.bind(this);
    this.onLoadFrame = this.onLoadFrame.bind(this);
    this.htmlCleaning = this.htmlCleaning.bind(this);
    this.onKey = this.onKey.bind(this);
    this.onLoadFrame();
  }
  (0, _createClass2["default"])(CanvasState, [{
    key: "onLoadFrame",
    value: function onLoadFrame() {}
  }, {
    key: "onInit",
    value: function onInit(iframe) {}
  }, {
    key: "onInitCSS",
    value: function onInitCSS(doc, head) {
      var cssRules = _RecitEditor.IWrapper.getThemeCssRules();
      var el = null;
      if (cssRules.urlList.length > 0) {
        var _iterator = _createForOfIteratorHelper(cssRules.urlList),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var url = _step.value;
            el = doc.createElement("link");
            el.setAttribute("href", url);
            el.setAttribute("rel", "stylesheet");
            head.appendChild(el);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var additionalHTMLHead = _RecitEditor.IWrapper.getAdditionalHTMLHead();
      if (additionalHTMLHead.css.length > 0) {
        var _iterator2 = _createForOfIteratorHelper(additionalHTMLHead.css),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _url = _step2.value;
            el = doc.createElement("link");
            el.setAttribute("href", _url);
            el.setAttribute("rel", "stylesheet");
            head.appendChild(el);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (additionalHTMLHead.js.length > 0) {
        var _iterator3 = _createForOfIteratorHelper(additionalHTMLHead.js),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _url2 = _step3.value;
            el = doc.createElement("script");
            el.setAttribute("src", _url2);
            head.appendChild(el);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (cssRules.rules.length > 0) {
        el = doc.createElement("style");
        el.setAttribute("title", "theme-moodle");
        el.innerHTML = _RecitEditor.UtilsHTML.cssRules2Str(cssRules.rules);
        head.appendChild(el);
      }
    }
  }, {
    key: "render",
    value: function render(show, selectedElement) {}
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {}
  }, {
    key: "getData",
    value: function getData(htmlCleaning) {}
  }, {
    key: "setData",
    value: function setData(value, selectedElement) {}
  }, {
    key: "onBeforeChange",
    value: function onBeforeChange(value, flags) {}
  }, {
    key: "onContentChange",
    value: function onContentChange(value, flags) {}
  }, {
    key: "onAfterChange",
    value: function onAfterChange(value, flags) {}
  }, {
    key: "onDeleteElement",
    value: function onDeleteElement(selectedElement) {}
  }, {
    key: "onMoveNodeUp",
    value: function onMoveNodeUp(selectedElement) {}
  }, {
    key: "onMoveNodeDown",
    value: function onMoveNodeDown(selectedElement) {}
  }, {
    key: "onCloneNode",
    value: function onCloneNode(selectedElement) {}
  }, {
    key: "onAfterInsertNode",
    value: function onAfterInsertNode(elems) {}
  }, {
    key: "onReplaceNode",
    value: function onReplaceNode(fromEl, toEl) {}
  }, {
    key: "onInsertTemplate",
    value: function onInsertTemplate(position, item) {}
  }, {
    key: "onStartEditingNodeText",
    value: function onStartEditingNodeText(selectedElement) {}
  }, {
    key: "onFinishEditingNodeText",
    value: function onFinishEditingNodeText(html) {}
  }, {
    key: "onKey",
    value: function onKey(e, editingElement) {}
  }, {
    key: "onPanelChange",
    value: function onPanelChange(panels) {
      return panels;
    }
  }, {
    key: "onSelectElement",
    value: function onSelectElement(el, selectedElement, panels) {
      var result = {
        el: el,
        panels: panels
      };
      return result;
    }
  }, {
    key: "htmlCleaning",
    value: function htmlCleaning(htmlDoc, keepSelectedElement) {
      htmlDoc = htmlDoc || null;
      if (htmlDoc === null) {
        return;
      }
      var items = htmlDoc.querySelectorAll(".dropping-zone, .dropping-zone-hover, [contenteditable], [data-hovering], [data-selected], [draggable]");
      items.forEach(function (item) {
        if (item.classList.contains("dropping-zone")) {
          item.remove();
        } else if (item.classList.contains("dropping-zone-hover")) {
          item.classList.remove('dropping-zone-hover');
        }
        item.removeAttribute("data-hovering");
        item.removeAttribute("contenteditable");
        if (!keepSelectedElement) {
          item.removeAttribute("data-selected");
          item.removeAttribute("draggable");
        }
      });
    }
  }, {
    key: "getStyle",
    value: function getStyle(width) {
      var style = {
        width: width || this.mainView.props.device.width,
        height: this.mainView.props.device.height
      };
      if (this.mainView.props.device.scale < 1) {
        style.transform = "scale(".concat(this.mainView.props.device.scale, ")");
        style.transformOrigin = "0 0";
      }
      return style;
    }
  }]);
  return CanvasState;
}();
var SourceCodeDesignerState = function (_CanvasState) {
  (0, _inherits2["default"])(SourceCodeDesignerState, _CanvasState);
  var _super = _createSuper(SourceCodeDesignerState);
  function SourceCodeDesignerState(mainView, designerState, sourceCodeState) {
    var _this;
    (0, _classCallCheck2["default"])(this, SourceCodeDesignerState);
    _this = _super.call(this, mainView);
    _this.designer = designerState;
    _this.sourceCode = sourceCodeState;
    return _this;
  }
  (0, _createClass2["default"])(SourceCodeDesignerState, [{
    key: "render",
    value: function render(view, selectedElement) {
      var col = "";
      var sourceCodeWidth = null;
      var sourceCodeHeight = null;
      if (view == 'sourceCodeDesigner') {
        col = "col-md-6";
        sourceCodeWidth = "100%";
        sourceCodeHeight = "95vh";
      }
      var main = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: col
      }, this.sourceCode.render(view === 'sourceCode' || view == 'sourceCodeDesigner', selectedElement, sourceCodeWidth, sourceCodeHeight)), _react["default"].createElement("div", {
        className: col
      }, this.designer.render(view === 'designer' || view == 'sourceCodeDesigner', selectedElement)));
      return main;
    }
  }, {
    key: "onContentChange",
    value: function onContentChange(val, origin) {
      if (origin == 'designer') {
        this.sourceCode.setData(val);
      } else if (origin == 'sourceCode') {
        this.designer.setData(val);
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.designer.getData(true);
    }
  }, {
    key: "setData",
    value: function setData(data, selectedElement) {
      this.designer.setData(data, selectedElement);
      this.sourceCode.setData(data, selectedElement);
      return true;
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.designer.onDragEnd();
    }
  }, {
    key: "onSelectElement",
    value: function onSelectElement(el, selectedElement, panels) {
      this.sourceCode.onSelectElement(el, selectedElement, panels);
      var result = this.designer.onSelectElement(el, selectedElement, panels);
      result.panels.components = 0;
      result.panels.properties = 0;
      result.panels.treeView = 0;
      return result;
    }
  }, {
    key: "onDeleteElement",
    value: function onDeleteElement(el) {
      this.designer.onDeleteElement(el);
    }
  }, {
    key: "onMoveNodeUp",
    value: function onMoveNodeUp(el) {
      this.designer.onMoveNodeUp(el);
    }
  }, {
    key: "onKey",
    value: function onKey(e, selectedElement) {
      this.sourceCode.onKey(e, selectedElement);
      this.designer.onKey(e, selectedElement);
    }
  }, {
    key: "onMoveNodeDown",
    value: function onMoveNodeDown(el) {
      this.designer.onMoveNodeDown(el);
    }
  }, {
    key: "onCloneNode",
    value: function onCloneNode(el) {
      this.designer.onCloneNode(el);
    }
  }, {
    key: "onAfterInsertNode",
    value: function onAfterInsertNode(elems) {
      this.designer.onAfterInsertNode(elems);
    }
  }, {
    key: "onStartEditingNodeText",
    value: function onStartEditingNodeText(el, dbClick) {
      this.designer.onStartEditingNodeText(el, dbClick);
    }
  }, {
    key: "onFinishEditingNodeText",
    value: function onFinishEditingNodeText(html) {
      this.designer.onFinishEditingNodeText(html);
    }
  }, {
    key: "onPanelChange",
    value: function onPanelChange(panels) {
      panels.components = 0;
      panels.properties = 0;
      panels.treeView = 0;
      return panels;
    }
  }]);
  return SourceCodeDesignerState;
}(CanvasState);
exports.SourceCodeDesignerState = SourceCodeDesignerState;
var DesignerState = function (_CanvasState2) {
  (0, _inherits2["default"])(DesignerState, _CanvasState2);
  var _super2 = _createSuper(DesignerState);
  function DesignerState(mainView, historyManager) {
    var _this2;
    (0, _classCallCheck2["default"])(this, DesignerState);
    _this2 = _super2.call(this, mainView);
    _this2.iFrame = null;
    _this2.window = null;
    _this2.historyManager = historyManager;
    _this2.onKey = _this2.onKey.bind((0, _assertThisInitialized2["default"])(_this2));
    _this2.loadCount = 0;
    _this2.editingElement = null;
    return _this2;
  }
  (0, _createClass2["default"])(DesignerState, [{
    key: "onLoadFrame",
    value: function onLoadFrame() {
      var iframe = window.document.getElementById("designer-canvas");
      if (iframe) {
        this.onInit(iframe);
        return;
      } else {
        console.log("Loading designer iframe...");
        if (this.loadCount > 20) {
          console.log("Exiting because it was impossible to load the designer canvas.");
          return;
        }
        this.loadCount++;
        setTimeout(this.onLoadFrame, 500);
      }
    }
  }, {
    key: "onInit",
    value: function onInit(iframe) {
      this.iFrame = iframe;
      this.window = this.iFrame.contentWindow || this.iFrame.contentDocument;
      var head = this.window.document.head;
      var doc = this.window.document;
      var body = this.window.document.body;
      this.onInitCSS(doc, head);
      var el = doc.createElement("link");
      el.setAttribute("href", "".concat(_RecitEditor.Assets.CanvasDesignerCSS));
      el.setAttribute("rel", "stylesheet");
      el.setAttribute("type", "text/css");
      head.appendChild(el);
      _RecitEditor.CanvasElement.create(body, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
      body.onkeydown = this.mainView.onKey;
      body.ondrag = this.mainView.onDragStart;
    }
  }, {
    key: "render",
    value: function render(show, selectedElement, width) {
      var _this3 = this;
      var posCanvas = this.iFrame === null ? null : this.iFrame.getBoundingClientRect();
      this.loadFontFamilies();
      var main = _react["default"].createElement(_RecitEditor.Canvas, {
        style: {
          display: show ? 'flex' : 'none'
        }
      }, _react["default"].createElement("iframe", {
        id: "designer-canvas",
        className: "canvas",
        style: this.getStyle(width)
      }), _react["default"].createElement(_RecitEditor.FloatingMenu, {
        posCanvas: posCanvas,
        selectedElement: selectedElement,
        onDragElement: this.mainView.onDragStart,
        onEdit: this.mainView.onStartEditingNodeText,
        onDeleteElement: this.mainView.onDeleteElement,
        onMoveNodeUp: this.mainView.onMoveNodeUp,
        onMoveNodeDown: this.mainView.onMoveNodeDown,
        onCloneNode: this.mainView.onCloneNode,
        onSaveElement: this.mainView.onSaveTemplate,
        device: this.mainView.props.device
      }), this.editingElement && _react["default"].createElement(_TextEditor.TextEditorModal, {
        onClose: function onClose() {
          return _this3.mainView.onFinishEditingNodeText(null);
        },
        onSave: function onSave(html) {
          return _this3.mainView.onFinishEditingNodeText(html);
        },
        element: this.editingElement
      }));
      return main;
    }
  }, {
    key: "loadFontFamilies",
    value: function loadFontFamilies() {
      if (this.window === null || _RecitEditor.HTMLElementData.fontFamilyList.length > 0) {
        return;
      }
      this.window.document.fonts.ready.then(function (fontFaceSet) {
        var fontFaces = (0, _toConsumableArray2["default"])(fontFaceSet);
        var _iterator4 = _createForOfIteratorHelper(fontFaces),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var item = _step4.value;
            if (_RecitEditor.JsNx.getItem(_RecitEditor.HTMLElementData.fontFamilyList, 'value', item.family, null) === null) {
              _RecitEditor.HTMLElementData.fontFamilyList.push({
                value: item.family,
                text: item.family
              });
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      });
    }
  }, {
    key: "onSelectElement",
    value: function onSelectElement(el, selectedElement, panels) {
      var result = {
        el: el,
        panels: panels
      };
      if (Object.is(result.el, selectedElement)) {
        this.htmlCleaning(this.window.document);
        result.el = null;
      } else {
        this.htmlCleaning(this.window.document);
        result.panels.properties = result.panels.properties === 0 ? 3 : result.panels.properties;
        if (result.el !== null) {
          if (result.el.getAttribute('data-selected') === '1') {
            result.el.removeAttribute('data-selected');
            result.el.removeAttribute('draggable');
          } else {
            result.el.setAttribute('data-selected', '1');
            result.el.setAttribute('draggable', 'true');
            var elClass = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, result.el);
            if (elClass && elClass.onSelect) {
              elClass.onSelect(result.el);
            }
            if (elClass && elClass.collapsePanel) {
              result.panels.components = elClass.collapsePanel.components;
              result.panels.properties = elClass.collapsePanel.properties;
              result.panels.treeView = elClass.collapsePanel.treeView;
            }
          }
        }
      }
      return result;
    }
  }, {
    key: "onPanelChange",
    value: function onPanelChange(panels) {
      panels.components = 1;
      panels.properties = 0;
      panels.treeView = 1;
      return panels;
    }
  }, {
    key: "onBeforeChange",
    value: function onBeforeChange() {
      if (this.historyManager) {
        this.historyManager.onContentChange(this.getData());
      }
    }
  }, {
    key: "onAfterChange",
    value: function onAfterChange() {
      this.mainView.onContentChange(this.getData(), 'designer');
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.onBeforeChange();
      this.htmlCleaning(this.window.document, true);
      this.onAfterChange();
    }
  }, {
    key: "onDeleteElement",
    value: function onDeleteElement(el) {
      if (!el) {
        return;
      }
      if (el.isSameNode(this.window.document.body)) {
        return;
      }
      this.onBeforeChange();
      el.remove();
      this.onAfterChange();
    }
  }, {
    key: "onMoveNodeUp",
    value: function onMoveNodeUp(el) {
      if (el.isSameNode(this.window.document.body)) {
        return;
      }
      var parent = el.parentElement;
      this.onBeforeChange();
      if (el.isSameNode(parent.firstElementChild)) {
        if (!parent.isSameNode(this.window.document.body)) {
          parent.parentElement.insertBefore(el, parent);
        }
      } else {
        parent.insertBefore(el, el.previousElementSibling);
      }
      this.onAfterChange();
    }
  }, {
    key: "onMoveNodeDown",
    value: function onMoveNodeDown(el) {
      if (el.isSameNode(this.window.document.body)) {
        return;
      }
      var parent = el.parentElement;
      this.onBeforeChange();
      if (el.isSameNode(parent.lastElementChild)) {
        if (!parent.isSameNode(this.window.document.body)) {
          parent.parentElement.insertBefore(el, parent.nextElementSibling);
        }
      } else {
        parent.insertBefore(el.nextElementSibling, el);
      }
      this.onAfterChange();
    }
  }, {
    key: "onCloneNode",
    value: function onCloneNode(selectedElement) {
      if (selectedElement.isSameNode(this.window.document.body)) {
        return;
      }
      this.onBeforeChange();
      var parent = selectedElement.parentElement;
      var el = selectedElement.cloneNode(true);
      el.removeAttribute("data-selected");
      el.removeAttribute("contenteditable");
      parent.appendChild(el);
      _RecitEditor.CanvasElement.create(el, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
      this.onAfterChange();
    }
  }, {
    key: "onAfterInsertNode",
    value: function onAfterInsertNode(elems) {
      this.onBeforeChange();
      var _iterator5 = _createForOfIteratorHelper(elems),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var el = _step5.value;
          _RecitEditor.CanvasElement.create(el, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.editingElement = null;
      this.onAfterChange();
    }
  }, {
    key: "onReplaceNode",
    value: function onReplaceNode(fromEl, toEl) {
      if (toEl === null) {
        return;
      }
      this.onBeforeChange();
      fromEl.replaceWith(toEl);
      _RecitEditor.CanvasElement.create(toEl, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
      this.editingElement = null;
      this.htmlCleaning(this.window.document, true);
      this.onAfterChange();
    }
  }, {
    key: "onInsertTemplate",
    value: function onInsertTemplate(position, item) {
      var body = this.getBody();
      if (position == 'top') {
        body.insertAdjacentHTML('afterbegin', item);
      } else {
        body.insertAdjacentHTML('beforeend', item);
      }
      this.onAfterInsertNode(body.children);
    }
  }, {
    key: "getData",
    value: function getData(htmlCleaning) {
      if (this.window === null) {
        return null;
      }
      if (htmlCleaning) {
        this.htmlCleaning(this.window.document);
      }
      return this.window.document.body.innerHTML;
    }
  }, {
    key: "getBody",
    value: function getBody() {
      if (this.window === null) {
        return null;
      }
      return this.window.document.body;
    }
  }, {
    key: "setData",
    value: function setData(value, selectedElement) {
      var that = this;
      var loading = function loading() {
        if (that.window) {
          var body = that.window.document.body;
          body.innerHTML = value;
          _RecitEditor.CanvasElement.create(body, that.mainView.onSelectElement, that.mainView.onDrop, that.mainView.onStartEditingNodeText);
        } else {
          console.log("Loading designer canvas...");
          setTimeout(loading, 500);
        }
      };
      setTimeout(loading, 500);
    }
  }, {
    key: "onStartEditingNodeText",
    value: function onStartEditingNodeText(selectedElement, dbClick) {
      if (selectedElement === null) {
        return;
      }
      if (_TextEditor.TextEditorModal.isTagEditable(selectedElement.tagName, selectedElement) && !dbClick) {
        this.editingElement = selectedElement;
      } else {
        var that = this;
        var setCaretToEnd = function setCaretToEnd(el) {
          el.focus();
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(true);
          var sel = that.window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          el.scrollTop = el.scrollHeight;
        };
        if (selectedElement === null) {
          return;
        }
        selectedElement.setAttribute('contenteditable', 'true');
        setCaretToEnd(selectedElement);
      }
    }
  }, {
    key: "onFinishEditingNodeText",
    value: function onFinishEditingNodeText(el) {
      if (el) {
        _RecitEditor.CanvasElement.create(el, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
      }
      this.editingElement = null;
      this.onAfterChange();
    }
  }, {
    key: "onKey",
    value: function onKey(e, editingElement) {
      if (e.ctrlKey && e.keyCode == 90) {
        this.historyManager.onUndo(this.mainView.setData, this.mainView.getData());
      }
      if (!e.shiftKey && e.keyCode == 13) {
        if (editingElement && editingElement.getAttribute('contenteditable') == 'true') {
          e.preventDefault();
          return false;
        }
      }
    }
  }]);
  return DesignerState;
}(CanvasState);
exports.DesignerState = DesignerState;
var SourceCodeState = function (_CanvasState3) {
  (0, _inherits2["default"])(SourceCodeState, _CanvasState3);
  var _super3 = _createSuper(SourceCodeState);
  function SourceCodeState(mainView) {
    var _this4;
    (0, _classCallCheck2["default"])(this, SourceCodeState);
    _this4 = _super3.call(this, mainView);
    _this4.onChange = _this4.onChange.bind((0, _assertThisInitialized2["default"])(_this4));
    _this4.queryStr = "";
    _this4.data = "";
    return _this4;
  }
  (0, _createClass2["default"])(SourceCodeState, [{
    key: "render",
    value: function render(show, selectedElement, width, height) {
      var style = {
        width: width || Math.min(this.mainView.props.device.width, window.innerWidth - _RecitEditor.LayoutBuilder.properties.leftPanel.width),
        height: height || Math.min(this.mainView.props.device.height, window.innerHeight - _RecitEditor.LayoutBuilder.properties.topNavBar.height),
        display: show ? 'block' : 'none',
        overflowY: 'auto'
      };
      return _react["default"].createElement(_RecitEditor.SourceCodeEditor, {
        queryStr: this.queryStr,
        style: style,
        value: this.data,
        onChange: this.onChange
      });
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.data = value;
      this.mainView.onContentChange(value, 'sourceCode');
    }
  }, {
    key: "htmlCleaning",
    value: function htmlCleaning() {
      var htmlDoc = new DOMParser().parseFromString(this.data, "text/html");
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SourceCodeState.prototype), "htmlCleaning", this).call(this, htmlDoc);
      return htmlDoc.body.innerHTML;
    }
  }, {
    key: "getData",
    value: function getData(htmlCleaning) {
      var result = this.data;
      if (htmlCleaning) {
        result = this.htmlCleaning();
      }
      return _RecitEditor.UtilsHTML.removeTagId(result);
    }
  }, {
    key: "setData",
    value: function setData(value, selectedElement) {
      selectedElement = selectedElement || null;
      if (selectedElement !== null) {
        this.queryStr = selectedElement.getAttribute("data-tag-id") || "";
      }
      this.data = _RecitEditor.UtilsHTML.assignTagId(value);
    }
  }, {
    key: "onSelectElement",
    value: function onSelectElement(el, selectedElement, panels) {
      var result = {
        el: el,
        panels: panels
      };
      if (el === null) {
        return result;
      }
      this.queryStr = el.getAttribute("data-tag-id") || "";
      return result;
    }
  }, {
    key: "onPanelChange",
    value: function onPanelChange(panels) {
      panels.components = 0;
      panels.properties = 0;
      panels.treeView = 1;
      return panels;
    }
  }]);
  return SourceCodeState;
}(CanvasState);
exports.SourceCodeState = SourceCodeState;
var PreviewState = function (_CanvasState4) {
  (0, _inherits2["default"])(PreviewState, _CanvasState4);
  var _super4 = _createSuper(PreviewState);
  function PreviewState(mainView) {
    var _this5;
    (0, _classCallCheck2["default"])(this, PreviewState);
    _this5 = _super4.call(this, mainView);
    _this5.iFrame = null;
    _this5.loadCount = 0;
    return _this5;
  }
  (0, _createClass2["default"])(PreviewState, [{
    key: "onLoadFrame",
    value: function onLoadFrame() {
      var iframe = window.document.getElementById("preview-canvas");
      if (iframe) {
        this.onInit(iframe);
        return;
      } else {
        console.log("Loading preview iframe...");
        if (this.loadCount > 20) {
          console.log("Exiting because it was impossible to load the preview canvas.");
          return;
        }
        this.loadCount++;
        setTimeout(this.onLoadFrame, 500);
      }
    }
  }, {
    key: "onInit",
    value: function onInit(iframe) {
      this.iFrame = iframe.contentWindow || iframe.contentDocument;
      var head = this.iFrame.document.head;
      var doc = this.iFrame.document;
      var el = null;
      this.onInitCSS(doc, head);
      el = doc.createElement("link");
      el.setAttribute("href", "".concat(_RecitEditor.Assets.CanvasCSS));
      el.setAttribute("rel", "stylesheet");
      head.appendChild(el);
      el = doc.createElement("script");
      el.setAttribute("src", "".concat(_RecitEditor.Assets.JqueryJS));
      el.setAttribute("type", "text/javascript");
      head.appendChild(el);
      var bsJs = doc.createElement("script");
      bsJs.setAttribute("src", "".concat(_RecitEditor.Assets.BootstrapJS));
      bsJs.setAttribute("type", "text/javascript");
      el.onload = function () {
        return head.appendChild(bsJs);
      };
      this.iFrame.addEventListener("click", function (e) {
        if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON') {
          if (e.target.host.toString().length > 0 && e.target.host !== window.location.host) {
            e.preventDefault();
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render(show, selectedElement) {
      var main = _react["default"].createElement(_RecitEditor.Canvas, {
        style: {
          display: show ? 'flex' : 'none'
        }
      }, _react["default"].createElement("iframe", {
        id: "preview-canvas",
        className: "canvas",
        style: this.getStyle()
      }));
      return main;
    }
  }, {
    key: "onSelectElement",
    value: function onSelectElement(el, selectedElement, panels) {
      var result = {
        el: null,
        panels: panels
      };
      return result;
    }
  }, {
    key: "htmlCleaning",
    value: function htmlCleaning() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(PreviewState.prototype), "htmlCleaning", this).call(this, this.iFrame.document);
      var popup = this.iFrame.document.body.querySelectorAll('.r_popup-overlay');
      var _iterator6 = _createForOfIteratorHelper(popup),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var el = _step6.value;
          el.remove();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "getData",
    value: function getData(htmlCleaning) {
      this.htmlCleaning();
      return this.iFrame.document.body.innerHTML;
    }
  }, {
    key: "setData",
    value: function setData(value, selectedElement) {
      var body = this.iFrame.document.body;
      body.innerHTML = value;
    }
  }, {
    key: "onPanelChange",
    value: function onPanelChange(panels) {
      panels.components = 0;
      panels.properties = 0;
      panels.treeView = 0;
      return panels;
    }
  }]);
  return PreviewState;
}(CanvasState);
exports.PreviewState = PreviewState;