"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeView = void 0;
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
var _RecitEditor = require("../../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var TreeView = function (_Component) {
  (0, _inherits2["default"])(TreeView, _Component);
  var _super = _createSuper(TreeView);
  function TreeView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TreeView);
    _this = _super.call(this, props);
    _this.onCollapse = _this.onCollapse.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSaveTemplate = _this.onSaveTemplate.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      notCollapsed: {},
      saveElement: false
    };
    return _this;
  }
  (0, _createClass2["default"])(TreeView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!Object.is(prevProps.selectedElement, this.props.selectedElement)) {
        this.setState({
          notCollapsed: {}
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.data === null) {
        return null;
      }
      var data = this.props.data;
      if (this.props.view === 'sourceCode') {
        data = _RecitEditor.UtilsHTML.assignTagId(this.props.data);
      }
      var treeView = this.createTreeViewData(data);
      var main = _react["default"].createElement("div", {
        className: "panel"
      }, _react["default"].createElement("h5", {
        className: "m-0 p-2"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSitemap
      }), " ", _RecitEditor.i18n.get_string('tree')), _react["default"].createElement("hr", {
        className: "mt-0"
      }), _react["default"].createElement("ul", {
        className: "tree-view"
      }, this.renderTreeView(treeView, 0)), this.state.saveElement && _react["default"].createElement(_RecitEditor.TemplateForm, {
        onClose: function onClose() {
          return _this2.setState({
            saveElement: false
          });
        },
        onSave: this.onSaveTemplate,
        title: _RecitEditor.i18n.get_string('createtemplate'),
        description: _RecitEditor.i18n.get_string('addcomponentdesc')
      }));
      return main;
    }
  }, {
    key: "renderTreeView",
    value: function renderTreeView(node, key) {
      var _this3 = this;
      var id = "id".concat(key);
      var result = null;
      var selected = this.props.selectedElement !== null && this.props.selectedElement.isSameNode(node.dom);
      var extraClasses = selected ? 'disabled btn-warning' : '';
      var btn = _react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        "aria-label": "Item actions",
        style: {
          flexWrap: "nowrap"
        }
      }, _react["default"].createElement(_reactBootstrap.ButtonGroup, null, _react["default"].createElement(_reactBootstrap.Button, {
        variant: "link",
        className: "p-1 ".concat(extraClasses),
        style: {
          whiteSpace: "nowrap"
        },
        onClick: function onClick() {
          return _this3.props.onSelect(node.dom);
        }
      }, " ".concat(node.text))), selected && _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        size: "sm",
        className: "ml-2 btn-group-actions",
        style: selected ? {
          display: 'flex'
        } : {}
      }, !node.dom.isSameNode(this.props.data) && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this3.props.onMoveNodeUp(node.dom);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowUp,
        title: _RecitEditor.i18n.get_string('moveelementup')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this3.props.onMoveNodeDown(node.dom);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowDown,
        title: _RecitEditor.i18n.get_string('moveelementdown')
      })), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this3.props.onDeleteElement(node.dom);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTrashAlt,
        title: _RecitEditor.i18n.get_string('delete')
      }))), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this3.setState({
            saveElement: node.dom
          });
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      }))));
      var icon = this.state.notCollapsed[id] || node.dom.contains(this.props.selectedElement) ? _freeSolidSvgIcons.faAngleDown : _freeSolidSvgIcons.faAngleRight;
      if (node.children.length > 0) {
        result = _react["default"].createElement("li", {
          key: key
        }, _react["default"].createElement("span", {
          className: "d-flex align-items-center"
        }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          className: "mr-1",
          icon: icon,
          onClick: function onClick(event) {
            return _this3.onCollapse(event, id);
          }
        }), btn), (this.state.notCollapsed[id] || node.dom.contains(this.props.selectedElement)) && _react["default"].createElement("ul", null, node.children.map(function (item, index) {
          key = key + 1;
          return _this3.renderTreeView(item, key);
        })));
      } else {
        result = _react["default"].createElement("li", {
          key: key
        }, _react["default"].createElement("span", {
          className: "d-flex align-items-center"
        }, _react["default"].createElement("i", {
          style: {
            marginRight: "12px"
          }
        }), btn));
      }
      return result;
    }
  }, {
    key: "onSaveTemplate",
    value: function onSaveTemplate(data) {
      this.props.onSaveElement(data.name, 'l', this.state.saveElement);
      this.setState({
        saveElement: false
      });
    }
  }, {
    key: "createTreeViewData",
    value: function createTreeViewData(node) {
      var result = {
        text: this.getNodeDesc(node),
        dom: node,
        children: []
      };
      var _iterator = _createForOfIteratorHelper(node.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          var obj = null;
          if (child.children.length > 0) {
            obj = this.createTreeViewData(child);
          } else {
            obj = {
              text: this.getNodeDesc(child),
              dom: child,
              children: []
            };
          }
          result.children.push(obj);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }, {
    key: "getNodeDesc",
    value: function getNodeDesc(node) {
      var elClass = _RecitEditor.HTMLElementData.getInstance().getElementClass(null, node);
      return elClass ? elClass.getDesc(node) : _RecitEditor.UtilsString.capitalizeFirstLetter(node.tagName.toLowerCase());
    }
  }, {
    key: "onCollapse",
    value: function onCollapse(event, id) {
      event.stopPropagation();
      event.preventDefault();
      var notCollapsed = this.state.notCollapsed;
      notCollapsed[id] = !notCollapsed[id] || false;
      this.setState({
        notCollapsed: notCollapsed
      });
    }
  }]);
  return TreeView;
}(_react.Component);
exports.TreeView = TreeView;
TreeView.defaultProps = {
  data: null,
  onSelect: null,
  selectedElement: null,
  onDeleteElement: null,
  onSaveElement: null,
  onMoveNodeUp: null,
  onMoveNodeDown: null,
  view: 'designer'
};