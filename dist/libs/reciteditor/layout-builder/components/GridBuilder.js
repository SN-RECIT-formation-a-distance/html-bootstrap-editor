"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridBuilder = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
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
var GridBuilder = exports.GridBuilder = function (_Component) {
  function GridBuilder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, GridBuilder);
    _this = _callSuper(this, GridBuilder, [props]);
    _this.onDataChange = _this.onDataChange.bind(_this);
    _this.onColChange = _this.onColChange.bind(_this);
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
  (0, _inherits2["default"])(GridBuilder, _Component);
  return (0, _createClass2["default"])(GridBuilder, [{
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
    value: function getPreviewMaxWidth(responsive) {
      switch (responsive) {
        case 'sm':
          return '40%';
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
      }, _react["default"].createElement("h5", null, _RecitEditor.i18n.get_string('verticalspace')), _react["default"].createElement(_RecitEditor.ToggleButtons, {
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
        className: "text-primary"
      }, _RecitEditor.i18n.get_string('coltotal')), _react["default"].createElement("p", null, _RecitEditor.i18n.get_string('hdscreen'), " (1920x1080):"), this.preview('xl'), _react["default"].createElement("hr", null), _react["default"].createElement("p", null, _RecitEditor.i18n.get_string('horizontaltablet'), " (1024x768):"), this.preview('lg'), _react["default"].createElement("hr", null), _react["default"].createElement("p", null, _RecitEditor.i18n.get_string('verticaltablet'), " (768x1024):"), this.preview('md'), _react["default"].createElement("hr", null), _react["default"].createElement("p", null, _RecitEditor.i18n.get_string('smartphone'), " (390x944):"), this.preview('sm', true))), _react["default"].createElement(_reactBootstrap.Modal.Footer, null, _react["default"].createElement(_reactBootstrap.Button, {
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
    key: "preview",
    value: function preview(responsive, noEdit) {
      var _this3 = this;
      var numcols = this.state.data.numcols;
      var cols = this.state.data.cols;
      var style = {
        maxWidth: this.getPreviewMaxWidth(responsive),
        backgroundColor: '#efefef',
        border: '10px solid #797970',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        justifyContent: 'center'
      };
      if (responsive == 'lg') {
        style.borderLeftWidth = '40px';
      } else {
        style.borderBottomWidth = '40px';
      }
      return _react["default"].createElement("div", {
        className: 'row m-auto p-4 ' + (responsive == 'xl' ? '' : 'rounded'),
        style: style
      }, function () {
        var arr = [];
        for (var i = 1; i <= numcols; i++) {
          var colNum = cols[i];
          arr.push(_react["default"].createElement("div", {
            key: i,
            className: 'p-4 ' + _this3.getColClasses(i, true, responsive),
            style: {
              wordBreak: 'break-all',
              maxHeight: '360px',
              overflow: 'hidden'
            }
          }, _react["default"].createElement("div", {
            className: 'p-3 ',
            style: {
              border: '1px solid #000',
              backgroundColor: '#fff'
            }
          }, !noEdit && _react["default"].createElement("select", {
            className: "mt-2",
            value: colNum[responsive] || 'na',
            name: i,
            onChange: function onChange(e) {
              return _this3.onColChange(e, responsive);
            }
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
          }, _this3.getColClasses(i, false, responsive)), _react["default"].createElement("br", null), "Lorem ipsum dolor sit")));
        }
        return arr;
      }());
    }
  }, {
    key: "getColClasses",
    value: function getColClasses(col, preview, responsive) {
      var cols = this.state.data.cols;
      var curDev = responsive;
      if (preview && cols[col][curDev]) {
        return "col-12 col-" + curDev + "-" + cols[col][curDev];
      } else if (preview) {
        return this.getLarger(col, responsive);
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
    key: "getLarger",
    value: function getLarger(col, responsive) {
      var cls = false;
      var cols = this.state.data.cols;
      switch (responsive) {
        case 'xl':
          cls = ['md', 'lg', 'sm'];
          break;
        case 'md':
          cls = ['sm'];
          break;
        case 'lg':
          cls = ['md', 'sm'];
          break;
      }
      if (cls) {
        var _iterator = _createForOfIteratorHelper(cls),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var v = _step.value;
            if (cols[col][v]) {
              return "col-" + responsive + "-" + cols[col][v];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return "col-12";
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
        var cols = [];
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
        for (var i = 0; i <= 12; i++) {
          var t = {};
          t[data.responsive] = Math.floor(12 / data.numcols);
          if (data.numcols == 4) {
            t['lg'] = 6;
          }
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
    value: function onColChange(event, responsive) {
      var data = this.state.data;
      var val = event.target.value;
      if (parseInt(val)) {
        data['cols'][event.target.name][responsive] = parseInt(event.target.value);
      } else {
        delete data['cols'][event.target.name][responsive];
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
        html = html + "<div class='" + this.getColClasses(i, false, this.state.data.responsive) + "'></div>";
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
}(_react.Component);
GridBuilder.defaultProps = {
  onClose: null,
  onSave: null,
  value: '',
  text: '',
  isEmpty: false,
  name: ''
};