"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Pagination = exports.Pagination = function (_Component) {
  function Pagination(props) {
    (0, _classCallCheck2["default"])(this, Pagination);
    return _callSuper(this, Pagination, [props]);
  }
  (0, _inherits2["default"])(Pagination, _Component);
  return (0, _createClass2["default"])(Pagination, [{
    key: "renderPagination",
    value: function renderPagination() {
      var _this = this;
      var pagination = [];
      var count = this.props.pagination.count;
      var pageCount = Math.ceil(count / this.props.pagination.item_per_page);
      if (pageCount > 1) {
        pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.First, {
          key: "first",
          disabled: this.props.pagination.current_page == 1,
          onClick: function onClick() {
            return _this.props.onChangePage(1);
          }
        }));
        pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.Prev, {
          key: "prev",
          disabled: this.props.pagination.current_page == 1,
          onClick: function onClick() {
            return _this.props.onChangePage(_this.props.pagination.current_page - 1);
          }
        }));
        if (pageCount < 10) {
          for (var p = 1; p <= pageCount; p++) {
            this.pushPage(p, pagination);
          }
        } else {
          var _p = this.props.pagination.current_page;
          if (_p > 1) {
            if (_p - 1 > 1) {
              this.pushPage(1, pagination);
            }
            if (_p - 2 > 1) {
              pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.Ellipsis, {
                key: "el" + _p
              }));
            }
            this.pushPage(_p - 1, pagination);
          }
          this.pushPage(_p, pagination);
          if (_p < pageCount) {
            this.pushPage(_p + 1, pagination);
            if (_p + 1 < pageCount) {
              pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.Ellipsis, {
                key: "elend" + _p
              }));
            }
            if (_p + 2 < pageCount) {
              this.pushPage(pageCount, pagination);
            }
          }
        }
        pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.Next, {
          key: "next",
          disabled: this.props.pagination.current_page == pageCount,
          onClick: function onClick() {
            return _this.props.onChangePage(_this.props.pagination.current_page + 1);
          }
        }));
        pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.Last, {
          key: "last",
          disabled: this.props.pagination.current_page == pageCount,
          onClick: function onClick() {
            return _this.props.onChangePage(pageCount);
          }
        }));
      }
      return pagination;
    }
  }, {
    key: "pushPage",
    value: function pushPage(p, pagination) {
      var _this2 = this;
      pagination.push(_react["default"].createElement(_reactBootstrap.Pagination.Item, {
        key: p,
        onClick: function onClick() {
          return _this2.props.onChangePage(p);
        },
        active: this.props.pagination.current_page == p
      }, p));
    }
  }, {
    key: "render",
    value: function render() {
      var main = _react["default"].createElement(_reactBootstrap.Pagination, {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, this.renderPagination());
      return main;
    }
  }]);
}(_react.Component);
Pagination.defaultProps = {
  onChangePage: null,
  pagination: null
};