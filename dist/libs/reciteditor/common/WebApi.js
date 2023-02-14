"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebApi = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _RecitEditor = require("../RecitEditor");
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
var WebApi = /*#__PURE__*/function () {
  function WebApi() {
    (0, _classCallCheck2["default"])(this, WebApi);
    this.gateway = this.getGateway();
    this.post = this.post.bind(this);
    this.loading = document.getElementById("tt-loading");
  }
  (0, _createClass2["default"])(WebApi, [{
    key: "getGateway",
    value: function getGateway() {
      return "127.0.0.1"; //IWrapper.getApiUrl();
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var that = this;
      var result = new Promise(function (resolve, reject) {
        data = JSON.stringify(data);
        var xhr = new XMLHttpRequest();
        xhr.open("post", url, true);
        // Header sent to the server, specifying a particular format (the content of message body).
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Accept', 'json'); // What kind of response to expect.

        xhr.onload = function (event) {
          var response = null;
          try {
            response = JSON.parse(event.target.response);
          } catch (error) {
            reject(error, event.target.response);
          }
          if (that.loading) {
            that.loading.style.display = "none";
          }
          resolve(response);
        };
        xhr.onerror = function (err) {
          reject(err);
        };
        if (that.loading) {
          that.loading.style.display = "block";
        }
        xhr.send(data);
      });
      return result;
    }
  }, {
    key: "queryMoodle",
    value: function queryMoodle(methodName, args, onSuccess) {
      var data = {
        index: 0,
        args: args,
        methodname: methodName
      };
      return this.post(this.gateway + "&info=" + methodName, [data], onSuccess);
    }
  }, {
    key: "saveTemplate",
    value: function saveTemplate(data) {
      return this.queryMoodle('atto_reciteditor_save_template', data);
    }
  }, {
    key: "getTemplateList",
    value: function getTemplateList(type) {
      return this.queryMoodle('atto_reciteditor_get_template_list', {
        type: type
      });
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(id) {
      return this.queryMoodle('atto_reciteditor_delete_template', {
        id: id
      });
    }
  }, {
    key: "importTemplates",
    value: function importTemplates(fileContent) {
      return this.queryMoodle('atto_reciteditor_import_templates', {
        fileContent: fileContent
      });
    }
  }]);
  return WebApi;
}();
exports.WebApi = WebApi;