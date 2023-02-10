"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Pagination = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Pagination, _Component);
  var _super = _createSuper(Pagination);
  function Pagination(props) {
    (0, _classCallCheck2["default"])(this, Pagination);
    return _super.call(this, props);
  }
  (0, _createClass2["default"])(Pagination, [{
    key: "renderPagination",
    value: function renderPagination() {
      var _this = this;
      var pagination = [];
      var count = this.props.pagination.count;
      var pageCount = Math.ceil(count / this.props.pagination.item_per_page);
      if (pageCount > 1) {
        pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.First, {
          key: "first",
          disabled: this.props.pagination.current_page == 1,
          onClick: function onClick() {
            return _this.props.onChangePage(1);
          }
        }));
        pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.Prev, {
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
              pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.Ellipsis, {
                key: "el" + _p
              }));
            }
            this.pushPage(_p - 1, pagination);
          }
          this.pushPage(_p, pagination);
          if (_p < pageCount) {
            this.pushPage(_p + 1, pagination);
            if (_p + 1 < pageCount) {
              pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.Ellipsis, {
                key: "elend" + _p
              }));
            }
            if (_p + 2 < pageCount) {
              this.pushPage(pageCount, pagination);
            }
          }
        }
        pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.Next, {
          key: "next",
          disabled: this.props.pagination.current_page == pageCount,
          onClick: function onClick() {
            return _this.props.onChangePage(_this.props.pagination.current_page + 1);
          }
        }));
        pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.Last, {
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
      pagination.push( /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination.Item, {
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
      var main = /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Pagination, {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, this.renderPagination());
      return main;
    }
  }]);
  return Pagination;
}(_react.Component);
exports.Pagination = Pagination;
Pagination.defaultProps = {
  onChangePage: null,
  pagination: null
};