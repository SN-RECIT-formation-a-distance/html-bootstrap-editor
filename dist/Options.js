"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _package = _interopRequireDefault(require("../package.json"));
// This file is part of Moodle - http://moodle.org/
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
var Options = /*#__PURE__*/function () {
  function Options() {
    (0, _classCallCheck2["default"])(this, Options);
  }
  (0, _createClass2["default"])(Options, null, [{
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
  return Options;
}();
exports.Options = Options;
Options.versionHistory = [{
  version: "0.0.1",
  description: "",
  timestamp: '2019-10-17'
}];