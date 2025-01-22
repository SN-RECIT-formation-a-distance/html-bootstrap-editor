"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableActions = void 0;
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
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var TableActions = exports.TableActions = function (_Component) {
  function TableActions(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TableActions);
    _this = _callSuper(this, TableActions, [props]);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TableActions, _Component);
  return (0, _createClass2["default"])(TableActions, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var main = _react["default"].createElement(_reactBootstrap.ButtonGroup, {
        size: "sm"
      }, this.props.showRmCol && _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.onClick('rmcol');
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faMinus
      }), " " + _RecitEditor.i18n.get_string('column')), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.onClick('addcol');
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus
      }), " " + _RecitEditor.i18n.get_string('column')), _react["default"].createElement(_reactBootstrap.Button, {
        onClick: function onClick() {
          return _this2.onClick('addline');
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlus
      }), " " + _RecitEditor.i18n.get_string('line')));
      return main;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      this.props.onChange({
        target: {
          value: event
        }
      });
    }
  }]);
}(_react.Component);
TableActions.defaultProps = {
  onChange: null,
  showRmCol: false
};