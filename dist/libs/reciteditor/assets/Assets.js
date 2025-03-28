"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Assets = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _react = _interopRequireDefault(require("react"));
var _Assets;
/**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var Assets = exports.Assets = (0, _createClass2["default"])(function Assets() {
  (0, _classCallCheck2["default"])(this, Assets);
});
_Assets = Assets;
Assets.RecitLogo = require('./images/recit.png');
Assets.ImageEmpty = 'https://raw.githubusercontent.com/SN-RECIT-formation-a-distance/moodle-atto_reciteditor/master/src/react/build/assets/images/header4.jpg';
Assets.ImageEmptyHD = _Assets.ImageEmpty;
Assets.ImageAvatar = 'https://sn-recit-formation-a-distance.github.io/html-bootstrap-editor-showcase/img/avatar.jpg';
Assets.CanvasCSS = require('./css/canvas.css.asset');
Assets.CanvasDesignerCSS = require('./css/designer-canvas.css.asset');
Assets.BootstrapJS = require('./bootstrap/js/bootstrap.bundle.min.js.asset');
Assets.JqueryJS = require('./bootstrap/js/jquery.min.js.asset');
Assets.faBootstrap = _react["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "svg-inline--fa fa-w-20",
  viewBox: "0 0 576 512"
}, _react["default"].createElement("path", {
  fill: "#FFF",
  d: "M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"
}));
Assets.faHtml = _react["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "svg-inline--fa fa-w-20",
  viewBox: "0 0 384 512"
}, _react["default"].createElement("path", {
  fill: "#FFF",
  d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
}));
Assets.faBorderTop = _react["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  className: "svg-inline--fa fa-w-16",
  viewBox: "0 0 48 48"
}, _react["default"].createElement("path", {
  fill: "#FFF",
  d: "M14 42h4v-4h-4v4zm0-16h4v-4h-4v4zm8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm-16-8h4v-4h-4v4zm0 8h4v-4h-4v4zm0-16h4v-4h-4v4zm0-8h4v-4h-4v4zm16 16h4v-4h-4v4zm16-16h4v-4h-4v4zm0 8h4v-4h-4v4zm-32-20v4h36v-4h-36zm32 28h4v-4h-4v4zm-8 8h4v-4h-4v4zm-8-24h4v-4h-4v4zm16 24h4v-4h-4v4zm-8-16h4v-4h-4v4z"
}), _react["default"].createElement("path", {
  d: "M0 0h48v48h-48z",
  fill: "none"
}));
Assets.faBorderBottom = _react["default"].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  className: "svg-inline--fa fa-w-16",
  viewBox: "0 0 48 48"
}, _react["default"].createElement("path", {
  fill: "#FFF",
  d: "M18 22h-4v4h4v-4zm8 8h-4v4h4v-4zm-8-24h-4v4h4v-4zm8 16h-4v4h4v-4zm-16-16h-4v4h4v-4zm16 8h-4v4h4v-4zm8 8h-4v4h4v-4zm-8-16h-4v4h4v-4zm8 0h-4v4h4v-4zm4 20h4v-4h-4v4zm0 8h4v-4h-4v4zm-28-20h-4v4h4v-4zm28-8v4h4v-4h-4zm0 12h4v-4h-4v4zm-28 4h-4v4h4v-4zm-4 20h36v-4h-36v4zm4-12h-4v4h4v-4z"
}), _react["default"].createElement("path", {
  d: "M0 0h48v48h-48z",
  fill: "none"
}));