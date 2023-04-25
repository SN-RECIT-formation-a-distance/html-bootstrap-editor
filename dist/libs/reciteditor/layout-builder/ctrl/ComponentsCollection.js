"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualComponentList = exports.TemplateForm = exports.ComponentProperties = void 0;
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _RecitEditor = require("../../RecitEditor");
var _HTMLElementData = require("./HTMLElementData");
var _GridBuilder = require("../components/GridBuilder");
var _ImagePixaBay = require("../../common/ImagePixaBay");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var ComponentProperties = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ComponentProperties, _Component);
  var _super = _createSuper(ComponentProperties);
  function ComponentProperties() {
    (0, _classCallCheck2["default"])(this, ComponentProperties);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(ComponentProperties, [{
    key: "render",
    value: function render() {
      var title = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      if (this.props.tab === "bs") {
        title = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "svgicon mr-2"
        }, _RecitEditor.Assets.faBootstrap), " ", _RecitEditor.i18n.get_string('bootstrap'));
      } else if (this.props.tab === "html") {
        title = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "svgicon mr-2"
        }, _RecitEditor.Assets.faHtml), " ", _RecitEditor.i18n.get_string('htmlproprieties'));
      } else if (this.props.tab === "bm") {
        title = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faCubes,
          className: "mr-2"
        }), " ", _RecitEditor.i18n.get_string('basic'));
      }
      var header = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "m-0 p-2 d-flex"
      }, title), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "mt-0"
      }));
      if (this.props.element === null) {
        return header;
      }
      var propertyList = this.getPropertyList();
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel"
      }, header, this.props.tab === "bs" && /*#__PURE__*/_react["default"].createElement(FormProperties, {
        element: this.props.element,
        onAfterReplaceNode: this.props.onAfterReplaceNode,
        onAfterAssignProperty: this.props.onAfterAssignProperty,
        onAfterInsertNode: this.props.onAfterInsertNode,
        onDeleteElement: this.props.onDeleteElement,
        properties: propertyList.bootstrap
      }), this.props.tab === "html" && /*#__PURE__*/_react["default"].createElement(FormProperties, {
        element: this.props.element,
        onAfterInsertNode: this.props.onAfterInsertNode,
        onAfterAssignProperty: this.props.onAfterAssignProperty,
        onAfterReplaceNode: this.props.onAfterReplaceNode,
        onDeleteElement: this.props.onDeleteElement,
        properties: propertyList.html
      }), this.props.tab === "bm" && /*#__PURE__*/_react["default"].createElement(FormProperties, {
        element: this.props.element,
        onAfterInsertNode: this.props.onAfterInsertNode,
        onAfterAssignProperty: this.props.onAfterAssignProperty,
        onAfterReplaceNode: this.props.onAfterReplaceNode,
        onDeleteElement: this.props.onDeleteElement,
        properties: propertyList.bookmark
      }));
      return main;
    }
  }, {
    key: "getPropertyList",
    value: function getPropertyList() {
      var result = {
        bs: [],
        html: [],
        bm: []
      };
      var elClass = _HTMLElementData.HTMLElementData.getInstance().getElementClass(null, this.props.element);
      if (elClass === null) {
        return result;
      }
      result.bootstrap = _HTMLElementData.HTMLElementData.getInstance().propertyList.bootstrap.filter(function (item) {
        return elClass.properties.all.includes(item.name);
      });
      result.html = _HTMLElementData.HTMLElementData.getInstance().propertyList.html.filter(function (item) {
        return elClass.properties.all.includes(item.name);
      });
      result.bookmark = result.bootstrap.concat(result.html).filter(function (item) {
        return elClass.properties.min.includes(item.name);
      });
      result.bootstrap.sort(function (el1, el2) {
        return elClass.properties.all.indexOf(el1.name) - elClass.properties.all.indexOf(el2.name);
      });
      result.html.sort(function (el1, el2) {
        return elClass.properties.all.indexOf(el1.name) - elClass.properties.all.indexOf(el2.name);
      });
      result.bookmark.sort(function (el1, el2) {
        return elClass.properties.min.indexOf(el1.name) - elClass.properties.min.indexOf(el2.name);
      });
      return result;
    }
  }]);
  return ComponentProperties;
}(_react.Component);
exports.ComponentProperties = ComponentProperties;
ComponentProperties.defaultProps = {
  element: null,
  onAfterInsertNode: null,
  onDeleteElement: null,
  onAfterAssignProperty: null,
  tab: 'bm'
};
var FormProperties = /*#__PURE__*/function (_Component2) {
  (0, _inherits2["default"])(FormProperties, _Component2);
  var _super2 = _createSuper(FormProperties);
  function FormProperties(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormProperties);
    _this = _super2.call(this, props);
    _this.onSubmit = _this.onSubmit.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDataChange = _this.onDataChange.bind((0, _assertThisInitialized2["default"])(_this));
    //this.onCollapse = this.onCollapse.bind(this);

    //this.state = {collapsed: {}}
    return _this;
  }
  (0, _createClass2["default"])(FormProperties, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab-content"
      }, this.props.properties.map(function (item, index) {
        // let collapsed = (typeof this.state.collapsed[item.name] === "undefined" ? false : this.state.collapsed[item.name]);

        // let icon = collapsed ? faAngleRight : faAngleDown;

        var form = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, {
          key: index,
          onSubmit: _this2.onSubmit,
          className: "mb-4"
        }, /*!collapsed &&*/item.children.map(function (item2, index2) {
          var formItem = null;
          var flags = item2.getFlags(_this2.props.element);
          if (typeof flags.showLabel == "undefined" || flags.showLabel) {
            formItem = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
              size: "sm",
              key: index2,
              style: {
                alignItems: "center"
              },
              controlId: "formitem".concat(index).concat(index2)
            }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, item2.text), _this2.createFormControl(item2));
          } else {
            formItem = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
              size: "sm",
              key: index2,
              controlId: "formitem".concat(index).concat(index2)
            }, _this2.createFormControl(item2));
          }
          return formItem;
        }));
        return form;
      }));
      return main;
    }
  }, {
    key: "createFormControl",
    value: function createFormControl(data) {
      var _this3 = this;
      var result = null;
      var value = data.getValue(this.props.element, data);
      var flags = data.getFlags(this.props.element);
      switch (data.input.type) {
        case 'radio':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.ToggleButtons, {
            type: data.input.toggleType,
            name: data.name,
            value: value,
            bsSize: "sm",
            defaultValue: value,
            options: data.input.options,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'text':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.InputText, {
            name: data.name,
            value: value,
            size: "sm",
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'textarea':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.InputTextArea, {
            name: data.name,
            value: value,
            size: "sm",
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'minvaluemax':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.MinValueMax, {
            valueName: data.name,
            values: value,
            size: "sm",
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'color':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.InputColor, {
            name: data.name,
            value: value,
            onBlur: function onBlur(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'combobox':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.ComboBox, {
            name: data.name,
            value: value,
            options: data.input.options,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'iconselector':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.IconSelector, {
            name: data.name,
            value: value,
            text: data.input.text,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'pixabay':
          result = /*#__PURE__*/_react["default"].createElement(_ImagePixaBay.ImagePixaBay, {
            name: data.name,
            value: value,
            text: data.input.text,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'gridbuilder':
          result = /*#__PURE__*/_react["default"].createElement(_GridBuilder.GridBuilder, {
            name: data.name,
            value: value,
            text: data.input.text,
            onSave: function onSave(event) {
              return _this3.onModalSave(event, data);
            }
          });
          break;
        case 'multipleselect':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.MultipleSelect, {
            name: data.name,
            values: value,
            options: data.input.options,
            autoAdd: flags.autoAdd,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'layoutspacingeditor':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.LayoutSpacingEditor, {
            name: data.name,
            values: value,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'layoutspacing':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.LayoutSpacing, {
            name: data.name,
            value: value,
            options: data.input.options,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'colorselector':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.ColorSelector, {
            name: data.name,
            value: value,
            options: data.input.options,
            flags: flags,
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'buttongroup':
          //A div is needed because buttongroup is inline
          result = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, null, data.input.options.map(function (item, index) {
            var btn = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
              size: "sm",
              key: index,
              onClick: function onClick() {
                return _this3.onClick(item);
              }
            }, item.text);
            return btn;
          })));
          break;
        case 'ImageSrc':
          result = /*#__PURE__*/_react["default"].createElement(_RecitEditor.ImageSrc, {
            name: data.name,
            accept: data.input.accept,
            value: value,
            size: "sm",
            onChange: function onChange(event) {
              return _this3.onDataChange(event, data);
            }
          });
          break;
        case 'button':
          result = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
            size: "sm",
            onClick: function onClick() {
              return _this3.onDataChange({
                target: {
                  value: ''
                }
              }, data);
            }
          }, data.input.text);
          break;
      }
      return result;
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(event, componentData) {
      if (componentData.input.onChange) {
        componentData.input.onChange(this.props.element, event.target.value, componentData);
        this.forceUpdate();
        this.props.onAfterAssignProperty();
      }
    }
  }, {
    key: "onModalSave",
    value: function onModalSave(event, componentData) {
      this.props.onAfterReplaceNode([this.props.element]);
    }
  }, {
    key: "onClick",
    value: function onClick(item) {
      var result = item.onClick(this.props.element);
      if (result.action === 'insert') {
        this.props.onAfterInsertNode(result.nodes);
      } else if (result.action === 'delete') {
        this.props.onDeleteElement();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
    }

    /*onCollapse(event, id){
        event.stopPropagation();
        event.preventDefault();
          let collapsed = this.state.collapsed;
        collapsed[id] = (typeof collapsed[id] === 'undefined' ? false : !collapsed[id]);
        this.setState({collapsed: collapsed});
    }*/
  }]);
  return FormProperties;
}(_react.Component);
FormProperties.defaultProps = {
  element: null,
  properties: [],
  onAfterInsertNode: null,
  onAfterReplaceNode: null,
  onAfterAssignProperty: null,
  onDeleteElement: null
};
var VisualComponentList = /*#__PURE__*/function (_Component3) {
  (0, _inherits2["default"])(VisualComponentList, _Component3);
  var _super3 = _createSuper(VisualComponentList);
  function VisualComponentList(props) {
    var _this4;
    (0, _classCallCheck2["default"])(this, VisualComponentList);
    _this4 = _super3.call(this, props);
    _this4.loadTemplates = _this4.loadTemplates.bind((0, _assertThisInitialized2["default"])(_this4));
    return _this4;
  }
  (0, _createClass2["default"])(VisualComponentList, [{
    key: "render",
    value: function render() {
      //{HTMLElementData.elementListSortByName()}
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "component-list"
      }, this.props.tab === "comp" && /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel"
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "m-0 p-2"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPuzzlePiece
      }), " ", _RecitEditor.i18n.get_string('components')), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "mt-0"
      }), /*#__PURE__*/_react["default"].createElement(TokenList, {
        dataProvider: _HTMLElementData.HTMLElementData.getInstance().elementList,
        onDragEnd: this.props.onDragEnd
      })), this.props.tab === "tpl" && /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel"
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "m-0 p-2"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloud
      }), " ", _RecitEditor.i18n.get_string('templates')), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "mt-0"
      }), /*#__PURE__*/_react["default"].createElement(TemplateList, {
        dataProvider: _RecitEditor.Templates.layoutList,
        onDragEnd: this.props.onDragEnd,
        onInsert: this.props.onInsert,
        onChange: this.loadTemplates,
        onSaveTemplate: this.props.onSaveTemplate,
        type: "l"
      })));
      return main;
    }
  }, {
    key: "loadTemplates",
    value: function loadTemplates() {
      var p = _RecitEditor.Templates.onLoad();
      var that = this;
      p.then(function (webApiResult) {
        if (!webApiResult.error) {
          that.forceUpdate();
        } else {
          alert("Error: ".concat(webApiResult));
        }
      }, function (err, response) {
        console.log(err, response);
      });
    }
  }]);
  return VisualComponentList;
}(_react.Component);
exports.VisualComponentList = VisualComponentList;
VisualComponentList.defaultProps = {
  onDragEnd: null,
  onSaveTemplate: null,
  onInsert: null,
  tab: 'tpl'
};
var TokenList = /*#__PURE__*/function (_Component4) {
  (0, _inherits2["default"])(TokenList, _Component4);
  var _super4 = _createSuper(TokenList);
  function TokenList(props) {
    var _this5;
    (0, _classCallCheck2["default"])(this, TokenList);
    _this5 = _super4.call(this, props);
    _this5.onCollapse = _this5.onCollapse.bind((0, _assertThisInitialized2["default"])(_this5));
    _this5.state = {
      collapsed: {}
    };
    return _this5;
  }
  (0, _createClass2["default"])(TokenList, [{
    key: "render",
    value: function render() {
      var _this6 = this;
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab-content"
      }, this.props.dataProvider.map(function (item, index) {
        var collapsed = typeof _this6.state.collapsed[item.name] !== "undefined" && _this6.state.collapsed[item.name];
        var icon = collapsed ? _freeSolidSvgIcons.faAngleRight : _freeSolidSvgIcons.faAngleDown;
        var branch = /*#__PURE__*/_react["default"].createElement("ul", {
          key: index,
          className: "mt-2"
        }, /*#__PURE__*/_react["default"].createElement("li", {
          key: index,
          className: "token-section",
          onClick: function onClick(event) {
            return _this6.onCollapse(event, item.name);
          }
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          className: "mr-1",
          icon: icon
        }), item.name), !collapsed && item.children.map(function (item2, index2) {
          if (!item2.visible) {
            return null;
          }
          return /*#__PURE__*/_react["default"].createElement(Token, {
            data: item2,
            key: index2,
            onDragEnd: _this6.props.onDragEnd,
            onInsert: _this6.props.onInsert
          });
        }));
        return branch;
      }));
      return main;
    }
  }, {
    key: "onCollapse",
    value: function onCollapse(event, id) {
      var collapsed = this.state.collapsed;
      collapsed[id] = !collapsed[id] || false;
      this.setState({
        collapsed: collapsed
      });
    }
  }]);
  return TokenList;
}(_react.Component);
TokenList.defaultProps = {
  dataProvider: [],
  onDragEnd: null,
  onInsert: null
};
var TemplateList = /*#__PURE__*/function (_Component5) {
  (0, _inherits2["default"])(TemplateList, _Component5);
  var _super5 = _createSuper(TemplateList);
  function TemplateList(props) {
    var _this7;
    (0, _classCallCheck2["default"])(this, TemplateList);
    _this7 = _super5.call(this, props);
    _this7.onImport = _this7.onImport.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.onExport = _this7.onExport.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.showMenu = _this7.showMenu.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.showImport = _this7.showImport.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.onDelete = _this7.onDelete.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.showShowcase = _this7.showShowcase.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.receiveMessageFromIframe = _this7.receiveMessageFromIframe.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.showModal = _this7.showModal.bind((0, _assertThisInitialized2["default"])(_this7));
    _this7.onSaveTemplate = _this7.onSaveTemplate.bind((0, _assertThisInitialized2["default"])(_this7));
    var url = false;
    var settings = _RecitEditor.IWrapper.getSettings();
    if (settings.showcase_url && settings.showcase_url.length > 0) {
      url = settings.showcase_url;
    }
    _this7.state = {
      showModal: false,
      showMenu: false,
      showImport: false,
      showShowcase: false,
      UrlShowcase: url,
      collapse: {},
      hoverimg: false
    };
    return _this7;
  }
  (0, _createClass2["default"])(TemplateList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("message", this.receiveMessageFromIframe, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("message", this.receiveMessageFromIframe, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;
      var that = this;
      // {this.props.type === 'l' && <Button onClick={() => this.showModal(true)}><FontAwesomeIcon icon={faSave} title={i18n.get_string('savetemplate')}/></Button>}
      // <Button onClick={() => this.showMenu(!this.state.showMenu)} variant={(this.state.showMenu ? 'warning' : 'primary')}><FontAwesomeIcon icon={faCog} title={i18n.get_string('options')}/></Button>
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab-content"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        style: {
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(_RecitEditor.BtnUpload, {
        id: "import-collection",
        accept: ".json",
        onChange: this.onImport,
        title: _RecitEditor.i18n.get_string('import')
      }), this.props.type === 'l' && this.state.UrlShowcase && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this8.showShowcase(true);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloud,
        title: _RecitEditor.i18n.get_string('showroom')
      }), " ", _RecitEditor.i18n.get_string('showroom')))), this.state.showMenu && this.props.type === 'c' && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick(event) {
          return _this8.onExport(event, _this8.props.dataProvider.myComponents);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloudDownloadAlt
      }), " ", _RecitEditor.i18n.get_string('export'))), this.props.type === 'l' && /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mt-2 d-flex flex-wrap justify-content-center"
      }, this.props.dataProvider.map(function (item, index) {
        return that.getToken(item, index, true);
      })), this.props.type === 'c' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        onClick: function onClick() {
          return _this8.onCollapse('my');
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: !this.state.collapse['my'] ? _freeSolidSvgIcons.faAngleDown : _freeSolidSvgIcons.faAngleRight
      }), " ", _RecitEditor.i18n.get_string('mycomponents')), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mt-2 d-flex flex-wrap"
      }, !this.state.collapse['my'] && this.props.dataProvider.myComponents.map(function (item, index) {
        return _this8.getToken(item, index, true);
      })), /*#__PURE__*/_react["default"].createElement("span", {
        onClick: function onClick() {
          return _this8.onCollapse('base');
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mr-1",
        icon: !this.state.collapse['base'] ? _freeSolidSvgIcons.faAngleDown : _freeSolidSvgIcons.faAngleRight
      }), " ", _RecitEditor.i18n.get_string('basecomponents')), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "mt-2 d-flex flex-wrap"
      }, !this.state.collapse['base'] && this.props.dataProvider.components.map(function (item, index) {
        return _this8.getToken(item, index, false);
      }))), this.state.showShowcase && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        show: true,
        onHide: function onHide() {
          return _this8.showShowcase(false);
        },
        backdrop: "static",
        keyboard: false,
        className: "templatevitrine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, _RecitEditor.i18n.get_string('showroom'))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement("iframe", {
        src: this.state.UrlShowcase
      }))), this.state.showModal && /*#__PURE__*/_react["default"].createElement(TemplateForm, {
        onClose: function onClose() {
          return _this8.showModal(false);
        },
        onSave: this.onSaveTemplate,
        title: _RecitEditor.i18n.get_string('createtemplate'),
        description: _RecitEditor.i18n.get_string('addcomponentdesc')
      }));
      return main;
    }
  }, {
    key: "onCollapse",
    value: function onCollapse(id) {
      var c = this.state.collapse;
      c[id] = !c[id];
      this.setState({
        collapse: c
      });
    }
  }, {
    key: "showModal",
    value: function showModal(show) {
      this.setState({
        showModal: show
      });
    }
  }, {
    key: "onSaveTemplate",
    value: function onSaveTemplate(data) {
      this.props.onSaveTemplate(data.name, 'l');
      this.showModal(false);
    }
  }, {
    key: "showMenu",
    value: function showMenu(show) {
      this.setState({
        showMenu: show
      });
    }
  }, {
    key: "showImport",
    value: function showImport(show) {
      this.setState({
        showImport: show
      });
    }
  }, {
    key: "onImport",
    value: function onImport(event, data) {
      var fileCtrl = event !== null ? event.target : null;
      var that = this;
      var promise = _RecitEditor.Templates.onImport(fileCtrl, data);
      promise.then(function (webApiResult) {
        if (!webApiResult.error) {
          that.showImport(false);
          that.props.onChange();
          _RecitEditor.$glVars.feedback.showInfo(_RecitEditor.i18n.get_string('pluginname'), _RecitEditor.i18n.get_string('msgsuccess'), 3);
        } else {
          alert("Error: ".concat(webApiResult));
        }
      }, function (err, response) {
        console.log(err, response);
      });
    }
  }, {
    key: "onExport",
    value: function onExport(event, item) {
      item = item || [];
      event.stopPropagation();
      var dataStr = _RecitEditor.Templates.onExport(item);
      var node = document.createElement('a');
      node.setAttribute("href", dataStr);
      node.setAttribute("download", item.length === 1 ? "".concat(item[0].name, ".json") : "my-collection.json");
      window.document.body.appendChild(node); // required for firefox
      node.click();
      node.remove();
      _RecitEditor.$glVars.feedback.showInfo(_RecitEditor.i18n.get_string('pluginname'), _RecitEditor.i18n.get_string('msgsuccess'), 3);
    }
  }, {
    key: "onDelete",
    value: function onDelete(event, item) {
      event.stopPropagation();
      var promise = _RecitEditor.Templates.onDelete(item);
      if (promise === null) {
        return;
      }
      var that = this;
      promise.then(function (webApiResult) {
        if (!webApiResult[0].error) {
          that.props.onChange();
          _RecitEditor.$glVars.feedback.showInfo(_RecitEditor.i18n.get_string('pluginname'), _RecitEditor.i18n.get_string('msgsuccess'), 3);
        } else {
          _RecitEditor.$glVars.feedback.showError(_RecitEditor.i18n.get_string('pluginname'), JSON.stringify(webApiResult));
        }
      }, function (err, response) {
        console.log(err, response);
      });
    }
  }, {
    key: "showShowcase",
    value: function showShowcase(show) {
      this.setState({
        showShowcase: show
      });
    }
  }, {
    key: "getToken",
    value: function getToken(item, index, editable) {
      var _this9 = this;
      if (this.props.type === 'l') {
        return /*#__PURE__*/_react["default"].createElement(TokenTemplate, {
          showMenu: this.state.hovering == item.id,
          data: item,
          key: index,
          onDragEnd: this.props.onDragEnd,
          onInsert: this.props.onInsert,
          onHover: function onHover() {
            return _this9.setState({
              hovering: item.id
            });
          },
          onMouseLeave: function onMouseLeave() {
            return _this9.setState({
              hovering: null
            });
          },
          onExport: function onExport(event) {
            return _this9.onExport(event, item);
          },
          onDelete: function onDelete(event) {
            return _this9.onDelete(event, item);
          }
        });
      } else {
        return /*#__PURE__*/_react["default"].createElement(Token, {
          showMenu: editable && this.state.showMenu,
          data: item,
          key: index,
          onDragEnd: this.props.onDragEnd,
          hoverimg: item.img,
          onInsert: this.props.onInsert,
          onExport: function onExport(event) {
            return _this9.onExport(event, item);
          },
          onDelete: function onDelete(event) {
            return _this9.onDelete(event, item);
          }
        });
      }
    }
  }, {
    key: "receiveMessageFromIframe",
    value: function receiveMessageFromIframe(event) {
      switch (event.data.message) {
        case 'import':
          var data = [{
            name: event.data.value.name,
            htmlStr: event.data.value.htmlStr || event.data.value.htmlString || event.data.value.htmlstr,
            img: event.data.value.img || event.data.value.image,
            type: 'l'
          }];
          this.onImport(null, data);
          this.showShowcase(false);
          break;
      }
    }
  }]);
  return TemplateList;
}(_react.Component);
TemplateList.defaultProps = {
  dataProvider: [],
  onDragEnd: null,
  onChange: null,
  onInsert: null,
  type: 'c',
  onSaveTemplate: null
};
var Token = /*#__PURE__*/function (_Component6) {
  (0, _inherits2["default"])(Token, _Component6);
  var _super6 = _createSuper(Token);
  function Token(props) {
    var _this10;
    (0, _classCallCheck2["default"])(this, Token);
    _this10 = _super6.call(this, props);
    _this10.onDragStart = _this10.onDragStart.bind((0, _assertThisInitialized2["default"])(_this10));
    _this10.onDragEnd = _this10.onDragEnd.bind((0, _assertThisInitialized2["default"])(_this10));
    _this10.onMouseLeave = _this10.onMouseLeave.bind((0, _assertThisInitialized2["default"])(_this10));
    _this10.state = {
      imagePreview: false
    };
    return _this10;
  }
  (0, _createClass2["default"])(Token, [{
    key: "render",
    value: function render() {
      var _this11 = this;
      var main = /*#__PURE__*/_react["default"].createElement("li", {
        className: "token",
        "data-type": this.props.data.type,
        draggable: "true",
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onMouseEnter: function onMouseEnter() {
          return _this11.onMouseEnter(_this11.props.hoverimg);
        },
        onMouseLeave: this.onMouseLeave,
        onMouseDown: this.onMouseLeave
      }, this.props.data.name, this.props.showMenu && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        style: {
          marginLeft: "1rem",
          display: "inline-flex"
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        size: "sm"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onExport
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloudDownloadAlt,
        title: _RecitEditor.i18n.get_string('export')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onDelete
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTrashAlt,
        title: _RecitEditor.i18n.get_string('delete')
      })))), this.state.imagePreview && !this.props.showMenu && /*#__PURE__*/_react["default"].createElement("div", {
        className: "templatepreview"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.state.imagePreview
      })));
      return main;
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      event.dataTransfer.setData("componentData", JSON.stringify(this.props.data));
      this.setState({
        imagePreview: false
      });
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event) {
      this.props.onDragEnd();
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(img) {
      if (this.props.onHover) {
        this.props.onHover();
      }
      if (img) {
        this.setState({
          imagePreview: img
        });
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave();
      }
      this.setState({
        imagePreview: false
      });
    }
  }]);
  return Token;
}(_react.Component);
Token.defaultProps = {
  data: null,
  onDragEnd: null,
  showMenu: false,
  onExport: null,
  onDelete: null,
  onInsert: null,
  hoverimg: null,
  onHover: null,
  onMouseLeave: null
};
var TokenTemplate = /*#__PURE__*/function (_Token) {
  (0, _inherits2["default"])(TokenTemplate, _Token);
  var _super7 = _createSuper(TokenTemplate);
  function TokenTemplate() {
    (0, _classCallCheck2["default"])(this, TokenTemplate);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2["default"])(TokenTemplate, [{
    key: "render",
    value: function render() {
      var _this12 = this;
      var item = this.props.data;
      var main = /*#__PURE__*/_react["default"].createElement("div", {
        className: "template",
        onMouseEnter: function onMouseEnter() {
          return _this12.onMouseEnter(_this12.props.data.img);
        },
        onMouseLeave: this.onMouseLeave,
        onDragEnd: this.props.onDragEnd,
        draggable: "true",
        onDragStart: this.onDragStart
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "tplimg"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: item.img
      })), /*#__PURE__*/_react["default"].createElement("p", null, item.name), this.props.showMenu && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonToolbar, {
        style: {
          marginLeft: "1rem",
          display: "inline-flex"
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
        size: "sm"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this12.onInsert('top', item.htmlstr);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        title: _RecitEditor.i18n.get_string('inserttop')
      }, _RecitEditor.Assets.faBorderTop)), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this12.onInsert('bottom', item.htmlstr);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        title: _RecitEditor.i18n.get_string('insertbottom')
      }, _RecitEditor.Assets.faBorderBottom)), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onExport
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloudDownloadAlt,
        title: _RecitEditor.i18n.get_string('export')
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.props.onDelete
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTrashAlt,
        title: _RecitEditor.i18n.get_string('delete')
      })))), this.state.imagePreview && /*#__PURE__*/_react["default"].createElement("div", {
        className: "templatepreview"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.state.imagePreview
      })));
      return main;
    }
  }, {
    key: "onInsert",
    value: function onInsert(pos, html) {
      this.props.onInsert(pos, html);
      _RecitEditor.$glVars.feedback.showInfo(_RecitEditor.i18n.get_string('pluginname'), _RecitEditor.i18n.get_string('templateadded'), 3);
    }
  }]);
  return TokenTemplate;
}(Token);
var TemplateForm = /*#__PURE__*/function (_Component7) {
  (0, _inherits2["default"])(TemplateForm, _Component7);
  var _super8 = _createSuper(TemplateForm);
  function TemplateForm(props) {
    var _this13;
    (0, _classCallCheck2["default"])(this, TemplateForm);
    _this13 = _super8.call(this, props);
    _this13.onDataChange = _this13.onDataChange.bind((0, _assertThisInitialized2["default"])(_this13));
    _this13.state = {
      data: {
        name: ""
      }
    };
    return _this13;
  }
  (0, _createClass2["default"])(TemplateForm, [{
    key: "render",
    value: function render() {
      var _this14 = this;
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        show: true,
        onHide: this.props.onClose,
        backdrop: "static",
        keyboard: false
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, this.props.title)), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement("p", null, this.props.description), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Row, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('name')), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
        type: "text",
        required: true,
        value: this.state.data.name,
        name: "name",
        onChange: this.onDataChange
      }))))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "secondary",
        onClick: this.props.onClose
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTimes,
        title: _RecitEditor.i18n.get_string('cancel')
      }), " ", _RecitEditor.i18n.get_string('cancel')), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        variant: "success",
        onClick: function onClick() {
          return _this14.props.onSave(_this14.state.data);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      }), " ", _RecitEditor.i18n.get_string('save'))));
      /*<Form.Row>
                                  <Form.Group as={Col}>
                                      <Form.Label>{"Type"}</Form.Label>
                                      <ToggleButtons type="checkbox" name="type" value={this.state.data.type} bsSize="sm" defaultValue={['l']}
                                      options={[{text:"Composant",  value:"c"}, {text: "Layout", value:'l'}]} onChange={this.onDataChange}/>
                                  </Form.Group>                           
                              </Form.Row>*/
      return main;
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(event) {
      var data = this.state.data;
      data[event.target.name] = event.target.value;
      this.setState({
        data: data
      });
    }
  }]);
  return TemplateForm;
}(_react.Component);
exports.TemplateForm = TemplateForm;
TemplateForm.defaultProps = {
  onClose: null,
  onSave: null,
  description: '',
  title: ''
};