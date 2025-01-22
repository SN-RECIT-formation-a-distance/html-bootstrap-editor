"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _package = _interopRequireDefault(require("../package.json"));
/**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var Options = exports.Options = function () {
  function Options() {
    (0, _classCallCheck2["default"])(this, Options);
  }
  return (0, _createClass2["default"])(Options, null, [{
    key: "appName",
    value: function appName() {
      return _package["default"].description;
    }
  }, {
    key: "appVersion",
    value: function appVersion() {
      return _package["default"].version;
    }
  }, {
    key: "homepage",
    value: function homepage() {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "http://localhost:3000";
      } else {
        return _package["default"].homepage;
      }
    }
  }, {
    key: "appTitle",
    value: function appTitle() {
      return this.appName() + " | v" + this.appVersion();
    }
  }]);
}();
Options.versionHistory = [{
  version: "0.0.1",
  description: "",
  timestamp: '2019-10-17'
}];