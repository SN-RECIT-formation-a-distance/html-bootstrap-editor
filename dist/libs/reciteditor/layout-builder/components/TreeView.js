"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeView = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
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
var TreeView = exports.TreeView = function (_Component) {
  function TreeView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TreeView);
    _this = _callSuper(this, TreeView, [props]);
    _this.onCollapse = _this.onCollapse.bind(_this);
    _this.onSaveTemplate = _this.onSaveTemplate.bind(_this);
    _this.state = {
      notCollapsed: {},
      saveElement: false
    };
    return _this;
  }
  (0, _inherits2["default"])(TreeView, _Component);
  return (0, _createClass2["default"])(TreeView, [{
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
}(_react.Component);
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