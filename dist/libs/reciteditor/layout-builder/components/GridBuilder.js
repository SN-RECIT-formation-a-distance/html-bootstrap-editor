"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridBuilder = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _RecitEditor = require("../../RecitEditor");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * Atto HTML editor
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * @package    atto_reciteditor
                                                                                                                                                                                                                                                                                                                                           * @copyright  2019 RECIT
                                                                                                                                                                                                                                                                                                                                           * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                                                                                                                                                                           */
var GridBuilder = function (_Component) {
  (0, _inherits2["default"])(GridBuilder, _Component);
  var _super = _createSuper(GridBuilder);
  function GridBuilder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, GridBuilder);
    _this = _super.call(this, props);
    _this.onDataChange = _this.onDataChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onColChange = _this.onColChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.deviceList = ['xs', 'sm', 'md', 'lg', 'xl'];
    var cols = [];
    for (var i = 0; i <= 12; i++) {
      var t = {};
      cols.push(t);
    }
    _this.state = {
      data: {
        numcols: 0,
        cols: cols,
        responsive: 'md',
        verticalspace: 1
      },
      modal: false
    };
    if (_this.isEmpty()) {
      _this.state.modal = true;
    }
    return _this;
  }
  (0, _createClass2["default"])(GridBuilder, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.props.value.getAttribute('data-empty') == '1';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.value.isSameNode(this.props.value)) {
        if (this.isEmpty()) {
          this.setState({
            modal: true
          });
        }
      }
    }
  }, {
    key: "getPreviewMaxWidth",
    value: function getPreviewMaxWidth() {
      switch (this.state.data.responsive) {
        case 'md':
          return '60%';
        case 'lg':
          return '80%';
        default:
          return '100%';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var numcols = this.state.data.numcols;
      var cols = this.state.data.cols;
      var modal = _react["default"].createElement(_reactBootstrap.Modal, {
        key: "3",
        show: this.state.modal,
        onHide: function onHide() {
          return _this2.onClose();
        },
        size: "xl",
        backdrop: "static",
        keyboard: false
      }, _react["default"].createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, _react["default"].createElement(_reactBootstrap.Modal.Title, null, this.props.text)), _react["default"].createElement(_reactBootstrap.Modal.Body, null, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-md-6"
      }, _react["default"].createElement("h5", null, _RecitEditor.i18n.get_string('howmuchcols')), _react["default"].createElement("select", {
        value: numcols,
        name: "numcols",
        onChange: this.onDataChange
      }, function () {
        var arr = [];
        arr.push(_react["default"].createElement("option", {
          key: 0,
          value: "0",
          disabled: true
        }, _RecitEditor.i18n.get_string('selectoption')));
        for (var i = 1; i <= 4; i++) {
          arr.push(_react["default"].createElement("option", {
            key: i,
            value: i
          }, i));
        }
        return arr;
      }())), _react["default"].createElement("div", {
        className: "col-md-6"
      }, _react["default"].createElement("h5", null, _RecitEditor.i18n.get_string('responsive')), _react["default"].createElement(_RecitEditor.ToggleButtons, {
        type: "radio",
        bsSize: "sm",
        className: "gridbuilder_toggle",
        name: "responsive",
        value: this.state.data.responsive,
        options: [{
          text: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faTabletAlt,
            title: "MD",
            style: {
              transform: 'rotate(90deg)'
            }
          }), " md"),
          value: 'md'
        }, {
          text: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faLaptop,
            title: "LG"
          }), " lg"),
          value: 'lg'
        }, {
          text: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faDesktop,
            title: "XL"
          }), " xl"),
          value: 'xl'
        }],
        onChange: this.onDataChange
      }), _react["default"].createElement("h5", null, _RecitEditor.i18n.get_string('verticalspace')), _react["default"].createElement(_RecitEditor.ToggleButtons, {
        type: "radio",
        bsSize: "sm",
        className: "gridbuilder_toggle",
        name: "verticalspace",
        value: this.state.data.verticalspace,
        options: [{
          text: _RecitEditor.i18n.get_string('yes'),
          value: 1
        }, {
          text: _RecitEditor.i18n.get_string('no'),
          value: 0
        }],
        onChange: this.onDataChange
      }))), numcols > 0 && _react["default"].createElement("div", {
        className: "p-1 mt-2"
      }, _react["default"].createElement("h5", {
        className: "mt-3"
      }, _RecitEditor.i18n.get_string('definecols')), _react["default"].createElement("p", {
        className: "text-muted"
      }, _RecitEditor.i18n.get_string('coltotal')), _react["default"].createElement("div", {
        className: 'row m-auto',
        style: {
          maxWidth: this.getPreviewMaxWidth(),
          backgroundColor: '#efefef'
        }
      }, function () {
        var arr = [];
        for (var i = 1; i <= numcols; i++) {
          var colNum = cols[i];
          arr.push(_react["default"].createElement("div", {
            key: i,
            className: 'border ' + _this2.getColClasses(i, true),
            style: {
              wordBreak: 'break-all',
              maxHeight: '360px',
              overflow: 'hidden'
            }
          }, _react["default"].createElement("select", {
            className: "mt-2",
            value: colNum[_this2.state.data.responsive] || 'na',
            name: i,
            onChange: _this2.onColChange
          }, function () {
            var arr = [_react["default"].createElement("option", {
              key: "0",
              value: "na"
            }, _RecitEditor.i18n.get_string('herit'))];
            for (var _i = 1; _i <= 12; _i++) {
              arr.push(_react["default"].createElement("option", {
                key: _i,
                value: _i
              }, _i));
            }
            return arr;
          }()), _react["default"].createElement("br", null), "Col #", i, _react["default"].createElement("br", null), _react["default"].createElement("span", {
            className: "badge badge-warning"
          }, _this2.getColClasses(i)), _react["default"].createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"));
        }
        return arr;
      }()))), _react["default"].createElement(_reactBootstrap.Modal.Footer, null, _react["default"].createElement(_reactBootstrap.Button, {
        variant: "secondary",
        onClick: function onClick() {
          return _this2.onClose();
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTimes,
        title: _RecitEditor.i18n.get_string('cancel')
      }), " ", _RecitEditor.i18n.get_string('cancel')), _react["default"].createElement(_reactBootstrap.Button, {
        variant: "success",
        onClick: function onClick() {
          return _this2.onSave();
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSave,
        title: _RecitEditor.i18n.get_string('save')
      }), " ", _RecitEditor.i18n.get_string('create'))));
      return [modal];
    }
  }, {
    key: "getColClasses",
    value: function getColClasses(col, preview) {
      var cols = this.state.data.cols;
      var curDev = this.state.data.responsive;
      if (preview && cols[col][curDev]) {
        return "col-12 col-" + curDev + "-" + cols[col][curDev];
      }
      var cl = "col-12";
      if (this.state.data.verticalspace == 1) {
        cl = cl + " py-2";
      }
      for (var dev in cols[col]) {
        cl = cl + " col-" + dev + "-" + cols[col][dev] + " ";
      }
      return cl;
    }
  }, {
    key: "getRemainingColSpace",
    value: function getRemainingColSpace() {
      var numcols = this.state.data.numcols;
      var cols = this.state.data.cols;
      var colSpace = 0;
      for (var i = 1; i <= numcols; i++) {
        colSpace = colSpace + cols[i];
      }
      return 12 - colSpace;
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(event) {
      var data = this.state.data;
      data[event.target.name] = event.target.value;
      if (event.target.name == 'numcols') {
        data.numcols = parseInt(event.target.value);
        switch (data.numcols) {
          case 2:
            data.responsive = 'md';
            break;
          case 3:
            data.responsive = 'lg';
            break;
          case 4:
            data.responsive = 'xl';
            break;
        }
        var cols = [];
        for (var i = 0; i <= 12; i++) {
          var t = {};
          t[data.responsive] = Math.floor(12 / data.numcols);
          cols.push(t);
        }
        data.cols = cols;
      }
      this.setState({
        data: data
      });
    }
  }, {
    key: "onColChange",
    value: function onColChange(event) {
      var data = this.state.data;
      var val = event.target.value;
      if (parseInt(val)) {
        data['cols'][event.target.name][data.responsive] = parseInt(event.target.value);
      } else {
        delete data['cols'][event.target.name][data.responsive];
      }
      this.setState({
        data: data
      });
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var numcols = this.state.data.numcols;
      if (numcols == 0) return;
      var html = '<div class="row flex-md-row justify-content-md-center">';
      for (var i = 1; i <= numcols; i++) {
        html = html + "<div class='" + this.getColClasses(i) + "'></div>";
      }
      html = html + "</div>";
      this.props.value.innerHTML = html;
      this.props.value.removeAttribute('data-empty');
      this.props.onSave({
        target: {
          value: html
        }
      });
      this.setState({
        modal: false
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        modal: false
      });
    }
  }]);
  return GridBuilder;
}(_react.Component);
exports.GridBuilder = GridBuilder;
GridBuilder.defaultProps = {
  onClose: null,
  onSave: null,
  value: '',
  text: '',
  isEmpty: false,
  name: ''
};