"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Templates = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _RecitEditor = require("../../RecitEditor");
/**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var Templates = exports.Templates = function () {
  function Templates() {
    (0, _classCallCheck2["default"])(this, Templates);
  }
  return (0, _createClass2["default"])(Templates, null, [{
    key: "onLoad",
    value: function onLoad() {
      var p = Templates.webApi.getTemplateList();
      var p2 = p.then(function (webApiResult) {
        if (webApiResult && !webApiResult.error) {
          Templates.layoutList = webApiResult[0].data;
        } else {
          alert("Error: ".concat(JSON.stringify(webApiResult)));
        }
        return webApiResult;
      }, function (err, response) {
        console.log(err, response);
      });
      return p2;
    }
  }, {
    key: "onSave",
    value: function onSave(name, type, htmlStr, img) {
      var data = {};
      data.name = name;
      data.htmlstr = htmlStr;
      data.type = type;
      data.img = img || '';
      return Templates.webApi.saveTemplate(data);
    }
  }, {
    key: "onDelete",
    value: function onDelete(item) {
      if (window.confirm(_RecitEditor.i18n.get_string('deleteconfirmmsg'))) {
        return Templates.webApi.deleteTemplate(item.id);
      }
      return null;
    }
  }, {
    key: "onImport",
    value: function onImport(fileCtrl, dataObj) {
      dataObj = dataObj || null;
      var p1 = new Promise(function (resolve, reject) {
        if (fileCtrl !== null) {
          if (fileCtrl.length === 0) {
            reject();
          }
          var reader = new FileReader();
          reader.addEventListener('load', function (e) {
            try {
              var fileContent = e.target.result;
              resolve(fileContent);
            } catch (err) {
              alert(_RecitEditor.i18n.get_string('errorseeconsole'));
              console.log(err);
              reject();
            }
          });
          reader.readAsText(fileCtrl.files[0]);
        } else {
          resolve(JSON.stringify(dataObj));
        }
      });
      var result = p1.then(function (fileContent) {
        return Templates.webApi.importTemplates(fileContent);
      });
      return result;
    }
  }, {
    key: "onExport",
    value: function onExport(item) {
      return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item));
    }
  }]);
}();
Templates.layoutList = [];
Templates.webApi = _RecitEditor.IWrapper;