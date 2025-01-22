"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagePixaBay = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _RecitEditor = require("../RecitEditor");
var _Pagination = require("./Pagination");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var ImagePixaBay = exports.ImagePixaBay = function (_Component) {
  function ImagePixaBay(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImagePixaBay);
    _this = _callSuper(this, ImagePixaBay, [props]);
    var settings = _RecitEditor.IWrapper.getSettings();
    _this.api_key = settings.pixabaykey || '';
    _this.per_page = 50;
    _this.categories = [{
      "text": _RecitEditor.i18n.get_string('none'),
      "value": ''
    }, {
      "text": "backgrounds",
      "value": "backgrounds"
    }, {
      "text": "fashion",
      "value": "fashion"
    }, {
      "text": "nature",
      "value": "nature"
    }, {
      "text": "science",
      "value": "science"
    }, {
      "text": "education",
      "value": "education"
    }, {
      "text": "feelings",
      "value": "feelings"
    }, {
      "text": "health",
      "value": "health"
    }, {
      "text": "people",
      "value": "people"
    }, {
      "text": "religion",
      "value": "religion"
    }, {
      "text": "places",
      "value": "places"
    }, {
      "text": "animals",
      "value": "animals"
    }, {
      "text": "industry",
      "value": "industry"
    }, {
      "text": "computer",
      "value": "computer"
    }, {
      "text": "food",
      "value": "food"
    }, {
      "text": "sports",
      "value": "sports"
    }, {
      "text": "transportation",
      "value": "transportation"
    }, {
      "text": "travel",
      "value": "travel"
    }, {
      "text": "buildings",
      "value": "buildings"
    }, {
      "text": "business",
      "value": "business"
    }, {
      "text": "music",
      "value": "music"
    }];
    _this.state = {
      modal: false,
      data: [],
      pagination: {},
      category: ''
    };
    return _this;
  }
  (0, _inherits2["default"])(ImagePixaBay, _Component);
  return (0, _createClass2["default"])(ImagePixaBay, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (!_RecitEditor.IWrapper.isUploadImplemented()) return null;
      if (this.api_key.length == 0) return null;
      var main = _react["default"].createElement(_reactBootstrap.Button, {
        key: "1",
        name: this.props.name,
        size: "sm",
        variant: "primary",
        onClick: function onClick() {
          return _this2.handleShow();
        },
        disabled: this.props.disabled
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faImage
      }), " ".concat(this.props.text));
      var modal = _react["default"].createElement(_reactBootstrap.Modal, {
        key: "2",
        dialogClassName: "iconselectormodal",
        show: this.state.modal,
        onHide: function onHide() {
          return _this2.handleClose();
        }
      }, _react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, _react["default"].createElement(_reactBootstrap.Modal.Title, null, _react["default"].createElement("a", {
        href: "https://pixabay.com/",
        target: "_blank",
        style: {
          margin: 'auto'
        }
      }, _react["default"].createElement("img", {
        src: "https://pixabay.com/static/img/logo.svg",
        style: {
          width: "94px"
        }
      }), " Free Images"))), _react["default"].createElement(_reactBootstrap.Modal.Body, null, _react["default"].createElement(_reactBootstrap.Form.Row, null, _react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col,
        className: "col-8"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('keyword')), _react["default"].createElement(_reactBootstrap.FormControl, {
        className: "InputText",
        type: "text",
        value: this.state.search,
        onChange: function onChange(e) {
          return _this2.onSearch(e);
        },
        onSubmit: function onSubmit() {
          return _this2.onQuery();
        }
      })), _react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col,
        className: "col-3"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('category')), _react["default"].createElement(_RecitEditor.ComboBox, {
        onChange: function onChange(e) {
          return _this2.setState({
            category: e.target.value
          });
        },
        value: this.state.category,
        options: this.categories
      })), _react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col,
        className: "col-1"
      }, _react["default"].createElement(_reactBootstrap.Form.Label, null, "\xA0"), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.onQuery();
        },
        className: "form-control",
        title: _RecitEditor.i18n.get_string('search')
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSearch
      })))), _react["default"].createElement("div", {
        className: "d-flex mb-5",
        style: {
          flexWrap: 'wrap',
          maxHeight: '600px',
          overflowY: 'auto'
        }
      }, this.state.data.map(function (res, i) {
        return _react["default"].createElement("div", {
          key: i,
          className: "m-2 img-bay",
          onClick: function onClick() {
            return _this2.onUpload(res.largeImageURL);
          }
        }, _react["default"].createElement("img", {
          src: res.previewURL
        }));
      })), this.state.data.length > 0 && _react["default"].createElement(_Pagination.Pagination, {
        pagination: this.state.pagination,
        onChangePage: function onChangePage(p) {
          return _this2.onChangePage(p);
        }
      })));
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
        search: event.target.value,
        pagination: {
          current_page: 1,
          item_per_page: this.per_page,
          count: 0
        },
        data: []
      });
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(p) {
      var pagination = this.state.pagination;
      pagination.current_page = p;
      this.setState({
        pagination: pagination
      });
      this.onQuery();
    }
  }, {
    key: "onQuery",
    value: function onQuery() {
      var _this3 = this;
      var q = this.state.search;
      var url = "https://pixabay.com/api/?username=mjweaver01&key=" + this.api_key + "&q=" + q + "&per_page=" + this.per_page + "&page=" + this.state.pagination.current_page + "&category=" + this.state.category + "&image_type=photo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        if (response.hits) {
          var pagination = _this3.state.pagination;
          pagination.count = response.total;
          _this3.setState({
            data: response.hits,
            pagination: pagination
          });
        } else {
          _this3.setState({
            data: []
          });
        }
      });
    }
  }, {
    key: "onUpload",
    value: function onUpload(url) {
      var _this4 = this;
      this.handleClose();
      fetch(url).then(function (res) {
        return res.blob();
      }).then(function (blob) {
        _RecitEditor.IWrapper.uploadFile(_this4.generateFileName(), blob, function (file) {
          return _this4.onAdd(file.url);
        });
      });
    }
  }, {
    key: "generateFileName",
    value: function generateFileName() {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid + '.jpg';
    }
  }, {
    key: "onAdd",
    value: function onAdd(url) {
      var eventData = {
        target: {
          name: this.props.name,
          value: url
        }
      };
      if (this.props.onChange) {
        this.props.onChange(eventData);
      }
      if (this.props.onCommit) {
        this.props.onCommit(eventData);
      }
    }
  }]);
}(_react.Component);
ImagePixaBay.defaultProps = {
  name: "",
  value: '',
  placeholder: "",
  onChange: null,
  onKeyDown: null,
  autoFocus: false,
  autoSelect: false,
  onCommit: null,
  disabled: false,
  size: ""
};