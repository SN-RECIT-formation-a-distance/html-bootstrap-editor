"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagePixaBay = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _RecitEditor = require("../RecitEditor");
var _Pagination = require("./Pagination");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ImagePixaBay = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ImagePixaBay, _Component);
  var _super = _createSuper(ImagePixaBay);
  function ImagePixaBay(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImagePixaBay);
    _this = _super.call(this, props);
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
    _this.Upload = new _RecitEditor.UploadFile();
    return _this;
  }
  (0, _createClass2["default"])(ImagePixaBay, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.api_key.length == 0) return null;
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        key: "1",
        name: this.props.name,
        size: "sm",
        variant: "primary",
        onClick: function onClick() {
          return _this2.handleShow();
        },
        disabled: this.props.disabled
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faImage
      }), " ".concat(this.props.text));
      var modal = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
        key: "2",
        dialogClassName: "iconselectormodal",
        show: this.state.modal,
        onHide: function onHide() {
          return _this2.handleClose();
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://pixabay.com/",
        target: "_blank",
        style: {
          margin: 'auto'
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://pixabay.com/static/img/logo.svg",
        style: {
          width: "94px"
        }
      }), " Free Images"))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Row, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col,
        className: "col-8"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('keyword')), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "InputText",
        type: "text",
        value: this.state.search,
        onChange: function onChange(e) {
          return _this2.onSearch(e);
        },
        onSubmit: function onSubmit() {
          return _this2.onQuery();
        }
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col,
        className: "col-3"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, _RecitEditor.i18n.get_string('category')), /*#__PURE__*/_react["default"].createElement(_RecitEditor.ComboBox, {
        onChange: function onChange(e) {
          return _this2.setState({
            category: e.target.value
          });
        },
        value: this.state.category,
        options: this.categories
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
        as: _reactBootstrap.Col,
        className: "col-1"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, "\xA0"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.onQuery();
        },
        className: "form-control",
        title: _RecitEditor.i18n.get_string('search')
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSearch
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-flex mb-5",
        style: {
          flexWrap: 'wrap',
          maxHeight: '600px',
          overflowY: 'auto'
        }
      }, this.state.data.map(function (res, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          className: "m-2 img-bay",
          onClick: function onClick() {
            return _this2.onUpload(res.largeImageURL);
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: res.previewURL
        }));
      })), this.state.data.length > 0 && /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, {
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
      this.Upload.onUploadDone = function (url) {
        return _this4.onAdd(url);
      };
      fetch(url).then(function (res) {
        return res.blob();
      }).then(function (blob) {
        _this4.Upload.upload(_this4.generateFileName(), blob);
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
  return ImagePixaBay;
}(_react.Component);
exports.ImagePixaBay = ImagePixaBay;
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