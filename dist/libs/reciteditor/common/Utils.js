"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18n = exports.UtilsTreeStruct = exports.UtilsString = exports.UtilsHTML = exports.UtilsDateTime = exports.Utils = exports.UploadFile = exports.Storage = exports.JsNx = exports.IWrapper = exports.Cookies = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _RecitEditor = require("../RecitEditor");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /**
                                                                                                                                                                                     * Atto HTML editor
                                                                                                                                                                                     *
                                                                                                                                                                                     * @package    atto_reciteditor
                                                                                                                                                                                     * @copyright  2019 RECIT
                                                                                                                                                                                     * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                     */
var JsNx = function () {
  function JsNx() {
    (0, _classCallCheck2["default"])(this, JsNx);
  }
  (0, _createClass2["default"])(JsNx, null, [{
    key: "at",
    value: function at(arr, index, defaultValue) {
      if (JsNx.exists(arr, index)) {
        return arr[index];
      } else {
        return defaultValue;
      }
    }
  }, {
    key: "exists",
    value: function exists(arr, index) {
      if (typeof arr[index] === "undefined") {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "getItem",
    value: function getItem(arr, prop, value, defaultValue) {
      var _iterator = _createForOfIteratorHelper(arr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (JsNx.get(item, prop, null) === value) {
            return item;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return defaultValue;
    }
  }, {
    key: "remove",
    value: function remove(arr, index) {
      var result = [];
      if (JsNx.exists(arr, index)) {
        result = arr.splice(index, 1);
      }
      return result.length > 0 ? result[0] : null;
    }
  }]);
  return JsNx;
}();
exports.JsNx = JsNx;
JsNx.removeItem = function (arr, prop, value) {
  var index = JsNx.getItemIndex(arr, prop, value, -1);
  return JsNx.remove(arr, index);
};
JsNx.getItemIndex = function (arr, prop, value) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (JsNx.get(item, prop, null) === value) {
      return i;
    }
  }
  return -1;
};
JsNx.get = function (obj, prop, defaultValue) {
  var props = prop.split('.');
  var result = typeof defaultValue === "undefined" ? null : defaultValue;
  if (typeof obj[prop] === "function") {
    result = obj[prop]();
  } else if (props.length === 1 && obj.hasOwnProperty(props[0])) {
    result = obj[props[0]];
  } else if (props.length === 2 && obj[props[0]].hasOwnProperty(props[1])) {
    result = obj[props[0]][props[1]];
  }
  return result;
};
JsNx.clone = function (obj) {
  if (obj instanceof Date) {
    return new Date(obj.valueOf());
  }
  var result = Object.create(obj.__proto__);
  for (var prop in obj) {
    if (Array.isArray(obj[prop])) {
      switch ((0, _typeof2["default"])(JsNx.at(obj[prop], 0, null))) {
        case "object":
          result[prop] = JsNx.copy(obj[prop], 2);
          break;
        default:
          result[prop] = JsNx.copy(obj[prop]);
      }
    } else if ((0, _typeof2["default"])(obj[prop]) === "object" && obj[prop] !== null) {
      result[prop] = JsNx.clone(obj[prop]);
    } else {
      result[prop] = obj[prop];
    }
  }
  return result;
};
JsNx.copy = function (arr, level) {
  level = level || 0;
  switch (level) {
    case 1:
      return JSON.parse(JSON.stringify(arr));
    case 2:
      var result = [];
      var _iterator8 = _createForOfIteratorHelper(arr),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var item = _step8.value;
          result.push(item !== null ? JsNx.clone(item) : null);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    default:
      return arr.slice();
  }
};
JsNx.compare = function (obj1, obj2) {
  obj1 = obj1 || null;
  obj2 = obj2 || null;
  if (obj1 === null && obj2 === null) {
    return true;
  } else if (obj1 === null || obj2 === null) {
    return false;
  }
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (var _i = 0, _keys = keys1; _i < _keys.length; _i++) {
    var key = _keys[_i];
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
var Storage = function () {
  function Storage() {
    (0, _classCallCheck2["default"])(this, Storage);
  }
  (0, _createClass2["default"])(Storage, null, [{
    key: "get",
    value: function get(key) {
      return localStorage.getItem(Storage.KEY_PREFIX + key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return localStorage.setItem(Storage.KEY_PREFIX + key, value);
    }
  }]);
  return Storage;
}();
exports.Storage = Storage;
Storage.KEY_PREFIX = "reciteditor.";
var Utils = function () {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
  }
  (0, _createClass2["default"])(Utils, null, [{
    key: "dateParse",
    value: function dateParse(strDate) {}
  }, {
    key: "formatMoney",
    value: function formatMoney(value) {
      return "$ " + parseFloat(value).toFixed(2);
    }
  }, {
    key: "getUrlVars",
    value: function getUrlVars() {
      var vars, uri;
      vars = {};
      uri = decodeURI(window.location.href);
      uri.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      return vars;
    }
  }, {
    key: "countOccurrencesInString",
    value: function countOccurrencesInString(string, subString, allowOverlapping) {
      string += "";
      subString += "";
      if (subString.length <= 0) return string.length + 1;
      var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;
      while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
          ++n;
          pos += step;
        } else break;
      }
      return n;
    }
  }, {
    key: "replaceAt",
    value: function replaceAt(s, subString, replacement, index) {
      if (Utils.countOccurrencesInString(s, subString) < 2) {
        return s.replace(subString, replacement);
      } else {
        var offset = index - subString.length;
        var p = s.substr(index - offset).replace(subString, replacement);
        return s.substr(0, index - offset) + p;
      }
    }
  }, {
    key: "getCaretCharacterOffsetWithin",
    value: function getCaretCharacterOffsetWithin(element) {
      var caretOffset = 0;
      var doc = element.ownerDocument || element.document;
      var win = doc.defaultView || doc.parentWindow;
      var sel;
      if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
          var range = win.getSelection().getRangeAt(0);
          var preCaretRange = range.cloneRange();
          preCaretRange.selectNodeContents(element);
          preCaretRange.setEnd(range.endContainer, range.endOffset);
          caretOffset = preCaretRange.toString().length;
        }
      } else if ((sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
      }
      return caretOffset;
    }
  }, {
    key: "RGBToHex",
    value: function RGBToHex(rgb) {
      rgb = rgb || "rgb(0,0,0)";
      var regex = new RegExp(/^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/gm);
      if (!regex.test(rgb)) {
        return rgb;
      }
      var sep = rgb.indexOf(",") > -1 ? "," : " ";
      rgb = rgb.substr(4).split(")")[0].split(sep);
      for (var R in rgb) {
        var _r = rgb[R];
        if (_r.indexOf("%") > -1) rgb[R] = Math.round(_r.substr(0, _r.length - 1) / 100 * 255);
      }
      var r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
      if (r.length === 1) r = "0" + r;
      if (g.length === 1) g = "0" + g;
      if (b.length === 1) b = "0" + b;
      return "#" + r + g + b;
    }
  }, {
    key: "resizeImageFromSize",
    value: function resizeImageFromSize(imgBase64, maxWidth, maxHeight, fileType) {
      var promise = new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = imgBase64;
        img.onload = function () {
          var width = this.width;
          var height = this.height;
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
          var canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL(fileType));
        };
      });
      return promise;
    }
  }, {
    key: "getYoutubeIDFromURL",
    value: function getYoutubeIDFromURL(url) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      var match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    }
  }, {
    key: "formatVideoURLEmbed",
    value: function formatVideoURLEmbed(url) {
      if (url.includes('youtube') && url.includes('watch?v=') || url.includes('youtu.be')) {
        var id = Utils.getYoutubeIDFromURL(url);
        if (id) {
          url = 'https://www.youtube.com/embed/' + id;
        }
      }
      if (!url.includes('rel=')) {
        if (url.includes('?')) {
          url = url + '&rel=0';
        } else {
          url = url + '?rel=0';
        }
      }
      return url;
    }
  }]);
  return Utils;
}();
exports.Utils = Utils;
Utils.version = 1.0;
var IWrapper = function () {
  function IWrapper() {
    (0, _classCallCheck2["default"])(this, IWrapper);
  }
  (0, _createClass2["default"])(IWrapper, null, [{
    key: "get_string",
    value: function get_string(str, resource) {
      if (!IWrapper.wrapper.get_string) {
        throw new Error('get_string undefined');
      }
      return IWrapper.wrapper.get_string(str, resource);
    }
  }, {
    key: "getThemeCssRules",
    value: function getThemeCssRules(returnAllRules) {
      if (!IWrapper.wrapper.getThemeCssRules) {
        throw new Error('getThemeCssRules undefined');
      }
      return IWrapper.wrapper.getThemeCssRules(returnAllRules);
    }
  }, {
    key: "getAdditionalHTMLHead",
    value: function getAdditionalHTMLHead() {
      if (!IWrapper.wrapper.getAdditionalHTMLHead) {
        throw new Error('getAdditionalHTMLHead undefined');
      }
      return IWrapper.wrapper.getAdditionalHTMLHead();
    }
  }, {
    key: "getContent",
    value: function getContent() {
      if (!IWrapper.wrapper.getContent) {
        throw new Error('getContent undefined');
      }
      return IWrapper.wrapper.getContent();
    }
  }, {
    key: "getSettings",
    value: function getSettings() {
      if (!IWrapper.wrapper.getSettings) {
        throw new Error('getSettings undefined');
      }
      return IWrapper.wrapper.getSettings();
    }
  }, {
    key: "getFileTransferData",
    value: function getFileTransferData() {
      if (!IWrapper.wrapper.getFileTransferData) {
        throw new Error('getFileTransferData undefined');
      }
      return IWrapper.wrapper.getFileTransferData();
    }
  }, {
    key: "saveTemplate",
    value: function saveTemplate(data) {
      if (!IWrapper.wrapper.saveTemplate) {
        throw new Error('Api undefined');
      }
      return IWrapper.wrapper.saveTemplate(data);
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(data) {
      if (!IWrapper.wrapper.deleteTemplate) {
        throw new Error('Api undefined');
      }
      return IWrapper.wrapper.deleteTemplate(data);
    }
  }, {
    key: "importTemplates",
    value: function importTemplates(data) {
      if (!IWrapper.wrapper.importTemplates) {
        throw new Error('Api undefined');
      }
      return IWrapper.wrapper.importTemplates(data);
    }
  }, {
    key: "getTemplateList",
    value: function getTemplateList(data) {
      if (!IWrapper.wrapper.getTemplateList) {
        throw new Error('Api undefined');
      }
      return IWrapper.wrapper.getTemplateList(data);
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      if (!IWrapper.wrapper.setContent) {
        throw new Error('setContent undefined');
      }
      return IWrapper.wrapper.setContent(content);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(name, content, cb) {
      if (!IWrapper.wrapper.uploadFile) {
        throw new Error('uploadFile undefined');
      }
      return IWrapper.wrapper.uploadFile(name, content, cb);
    }
  }, {
    key: "isUploadImplemented",
    value: function isUploadImplemented() {
      if (!IWrapper.wrapper.uploadFile) {
        return false;
      }
      return true;
    }
  }]);
  return IWrapper;
}();
exports.IWrapper = IWrapper;
IWrapper.wrapper = null;
var UploadFile = function () {
  function UploadFile() {
    (0, _classCallCheck2["default"])(this, UploadFile);
    this.onReadyStateChange = this.onReadyStateChange.bind(this);
    this.onUploadDone = null;
  }
  (0, _createClass2["default"])(UploadFile, [{
    key: "onReadyStateChange",
    value: function onReadyStateChange(file) {
      if (file) {
        if (this.onUploadDone) {
          this.onUploadDone(file.url);
        }
      } else {
        alert("server error");
      }
      return true;
    }
  }, {
    key: "onSelectFileToUpload",
    value: function onSelectFileToUpload(event, callback) {
      var _this = this;
      var reader = new FileReader();
      var file = event.target.files[0];
      var that = this;
      this.onUploadDone = callback;
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        if (file.type.match('image.*')) {
          var _callback = function _callback(dataURL) {
            var fileContent = that.convertbase64ToBin(dataURL);
            IWrapper.uploadFile(that.slugify(file.name), fileContent, that.onReadyStateChange);
          };
          that.resizeImage(reader.result, file.type, _callback);
          return;
        }
        var fileContent = that.convertbase64ToBin(reader.result);
        IWrapper.uploadFile(that.slugify(file.name), fileContent, _this.onReadyStateChange);
      };
    }
  }, {
    key: "resizeImage",
    value: function resizeImage(imgBase64, fileType, callback) {
      var MAX_WIDTH = 1500;
      var MAX_HEIGHT = 1300;
      return this.resizeImageFromSize(imgBase64, MAX_WIDTH, MAX_HEIGHT, fileType, callback);
    }
  }, {
    key: "slugify",
    value: function slugify(str) {
      var _map;
      var map = (_map = {
        '-': ' '
      }, (0, _defineProperty2["default"])(_map, "-", '_'), (0, _defineProperty2["default"])(_map, 'a', 'á|à|ã|â|À|Á|Ã|Â'), (0, _defineProperty2["default"])(_map, 'e', 'é|è|ê|É|È|Ê'), (0, _defineProperty2["default"])(_map, 'i', 'í|ì|î|Í|Ì|Î'), (0, _defineProperty2["default"])(_map, 'o', 'ó|ò|ô|õ|Ó|Ò|Ô|Õ'), (0, _defineProperty2["default"])(_map, 'u', 'ú|ù|û|ü|Ú|Ù|Û|Ü'), (0, _defineProperty2["default"])(_map, 'c', 'ç|Ç'), (0, _defineProperty2["default"])(_map, 'n', 'ñ|Ñ'), _map);
      for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
      }
      ;
      return str;
    }
  }, {
    key: "resizeImageFromSize",
    value: function resizeImageFromSize(imgBase64, maxWidth, maxHeight, fileType, callback) {
      var img = new Image();
      img.src = imgBase64;
      img.onload = function () {
        var width = this.width;
        var height = this.height;
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        callback(canvas.toDataURL(fileType));
      };
    }
  }, {
    key: "convertbase64ToBin",
    value: function convertbase64ToBin(dataURI) {
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
      } else {
        byteString = decodeURI(dataURI.split(',')[1]);
      }
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], {
        type: mimeString
      });
    }
  }]);
  return UploadFile;
}();
exports.UploadFile = UploadFile;
UploadFile.instance = null;
var UtilsString = function () {
  function UtilsString() {
    (0, _classCallCheck2["default"])(this, UtilsString);
  }
  (0, _createClass2["default"])(UtilsString, null, [{
    key: "checkEmail",
    value: function checkEmail(email) {
      email = email || "";
      if (email.length === 0) {
        return true;
      }
      var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var emails = email.split(",");
      var _iterator2 = _createForOfIteratorHelper(emails),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          if (!filter.test(e.trim())) {
            return false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return true;
    }
  }, {
    key: "replaceNonBreakingSpace",
    value: function replaceNonBreakingSpace(str) {
      if (!str || str.length == 0) return;
      var regex = new RegExp(/(\u00AB|\u2014)(?:\s+)?|(?:\s+)?([\?!:;\u00BB])/g);
      str = str.replace("&nbsp; ", "");
      str = str.replace("&nbsp;", "");
      str = str.replace(regex, "$1&nbsp;$2");
      return str;
    }
  }, {
    key: "capitalizeFirstLetter",
    value: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }]);
  return UtilsString;
}();
exports.UtilsString = UtilsString;
var UtilsDateTime = function () {
  function UtilsDateTime() {
    (0, _classCallCheck2["default"])(this, UtilsDateTime);
  }
  (0, _createClass2["default"])(UtilsDateTime, null, [{
    key: "nbMinSinceSundayToDate",
    value: function nbMinSinceSundayToDate(nbMinSinceSunday) {
      nbMinSinceSunday = parseInt(nbMinSinceSunday, 10);
      if (nbMinSinceSunday === 0) {
        return null;
      }
      var hour = Math.trunc(nbMinSinceSunday % 1440 / 60);
      var minutes = nbMinSinceSunday % 60;
      return new Date(0, 0, 0, hour, minutes, 0);
    }
  }, {
    key: "dateToNbMinSinceSunday",
    value: function dateToNbMinSinceSunday(weekDay, date) {
      if (date instanceof Date) {
        return date.getHours() * 60 + date.getMinutes() + weekDay * 1440;
      } else {
        return 0;
      }
    }
  }, {
    key: "minutesToTime",
    value: function minutesToTime(time, separator) {
      separator = separator || ":";
      var hour, min, result, offsetDays;
      if (time >= 0 && time <= 23) {
        hour = time;
        min = 0;
      } else {
        hour = Math.trunc(time / 60);
        offsetDays = Math.trunc(hour / 24);
        min = time - hour * 60;
        hour -= offsetDays * 24;
      }
      result = hour.toString().nxLpad("0", 2) + separator + min.toString().nxLpad("0", 2);
      return result;
    }
  }]);
  return UtilsDateTime;
}();
exports.UtilsDateTime = UtilsDateTime;
UtilsDateTime.timeToMin = function (time) {
  var hour, minutes;
  if (time.length !== 5) {
    return 0;
  }
  hour = parseInt(time.substring(0, 2), 10);
  minutes = parseInt(time.substring(3, 5), 10);
  return hour * 60 + minutes;
};
;
var UtilsTreeStruct = function () {
  function UtilsTreeStruct() {
    (0, _classCallCheck2["default"])(this, UtilsTreeStruct);
  }
  (0, _createClass2["default"])(UtilsTreeStruct, null, [{
    key: "treeWalk",
    value: function treeWalk(tree, propNodes, callback) {
      var i, node;
      for (i = 0; i < tree.length; i++) {
        node = tree[i];
        if (node.hasOwnProperty(propNodes) && node[propNodes].length > 0) {
          callback(node);
          UtilsTreeStruct.treeWalk(node[propNodes], propNodes, callback);
        } else {
          callback(node);
        }
      }
    }
  }, {
    key: "getParentNode",
    value: function getParentNode(rootNode, propNodes, callback, defaultValue) {
      var i, node;
      var result = defaultValue;
      if (callback(rootNode)) {
        return result;
      }
      var nodes = rootNode.nxGet(propNodes);
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        if (node.nxGet(propNodes).length > 0) {
          if (callback(node)) {
            return rootNode;
          }
          result = UtilsTreeStruct.getParentNode(node, propNodes, callback, defaultValue);
        } else if (callback(node)) {
          return rootNode;
        }
      }
      return result;
    }
  }, {
    key: "getNode",
    value: function getNode(tree, propNodes, callback, defaultValue) {
      var i, node, result;
      for (i = 0; i < tree.length; i++) {
        node = tree[i];
        if (callback(node)) {
          return node;
        }
        if (node.hasOwnProperty(propNodes) && node[propNodes].length > 0) {
          result = UtilsTreeStruct.getNode(node[propNodes], propNodes, callback, defaultValue);
          if (result !== null) {
            return result;
          }
        } else if (typeof node[propNodes] === "function" && node[propNodes]().length > 0) {
          result = UtilsTreeStruct.getNode(node[propNodes], propNodes, callback, defaultValue);
          if (result !== null) {
            return result;
          }
        }
      }
      return defaultValue;
    }
  }, {
    key: "removeNode",
    value: function removeNode(tree, propNodes, callback) {
      var i, node;
      for (i = 0; i < tree.length; i++) {
        node = tree[i];
        if (callback(node)) {
          tree.splice(i, 1);
          return true;
        }
        if (node.hasOwnProperty(propNodes) && node[propNodes].length > 0) {
          if (UtilsTreeStruct.removeNode(node[propNodes], propNodes, callback)) {
            return true;
          }
        } else if (typeof node[propNodes] === "function" && node[propNodes]().length > 0) {
          if (UtilsTreeStruct.removeNode(node[propNodes](), propNodes, callback)) {
            return true;
          }
        }
      }
      return false;
    }
  }]);
  return UtilsTreeStruct;
}();
exports.UtilsTreeStruct = UtilsTreeStruct;
var UtilsHTML = function () {
  function UtilsHTML() {
    (0, _classCallCheck2["default"])(this, UtilsHTML);
  }
  (0, _createClass2["default"])(UtilsHTML, null, [{
    key: "cssRules2Str",
    value: function cssRules2Str(cssRules) {
      var result = "";
      var _iterator3 = _createForOfIteratorHelper(cssRules),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var rule = _step3.value;
          result += rule.cssText;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return result;
    }
  }, {
    key: "cssStr2Rules",
    value: function cssStr2Rules(cssString) {
      var cssRules = [];
      var cssArray = cssString.split('}');
      for (var i = 0; i < cssArray.length; i++) {
        var rule = cssArray[i].trim();
        if (rule.length > 0) {
          var parts = rule.split('{');
          if (parts[1]) {
            var selector = parts[0].trim();
            var style = parts[1].trim();
            var css = UtilsHTML.parseCSS(style);
            cssRules.push({
              selectorText: selector,
              cssText: style,
              style: css
            });
          }
        }
      }
      return cssRules;
    }
  }, {
    key: "parseCSS",
    value: function parseCSS(css) {
      var style = {};
      var rules = css.split(';');
      var _iterator4 = _createForOfIteratorHelper(rules),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var rule = _step4.value;
          var parts = rule.split(':');
          if (parts[1]) {
            style[parts[0].trim()] = parts[1].trim();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return style;
    }
  }, {
    key: "getStylesheetRules",
    value: function () {
      var _getStylesheetRules = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(urls) {
        var promises, contents;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              promises = urls.map(function (url) {
                return fetch(url).then(function (response) {
                  return response.text();
                });
              });
              _context.next = 3;
              return Promise.all(promises);
            case 3:
              contents = _context.sent;
              return _context.abrupt("return", UtilsHTML.cssStr2Rules(contents.join('')));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getStylesheetRules(_x) {
        return _getStylesheetRules.apply(this, arguments);
      }
      return getStylesheetRules;
    }()
  }, {
    key: "getAvailableFonts",
    value: function getAvailableFonts() {
      var _document = document,
        fonts = _document.fonts;
      var it = fonts.entries();
      var arr = [];
      var done = false;
      while (!done) {
        var font = it.next();
        if (!font.done) {
          arr.push(font.value[0].family);
        } else {
          done = font.done;
        }
      }
      var fontlist = (0, _toConsumableArray2["default"])(new Set(arr));
      var list = [];
      var _iterator5 = _createForOfIteratorHelper(fontlist),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var f = _step5.value;
          list.push({
            text: f,
            value: f
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return list;
    }
  }, {
    key: "getTableFromCell",
    value: function getTableFromCell(cell) {
      var table = cell;
      var counter = 0;
      while (!(table.tagName.toLowerCase() === 'table') && counter <= 5) {
        table = table.parentElement;
        counter++;
      }
      return table.tagName.toLowerCase() === 'table' ? table : null;
    }
  }, {
    key: "tableAddCol",
    value: function tableAddCol(table) {
      var result = [];
      var _iterator6 = _createForOfIteratorHelper(table.rows),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var row = _step6.value;
          var tag = 'td';
          if (row.children[0] && row.children[0].tagName == 'TH') {
            tag = 'th';
          }
          var td = document.createElement(tag);
          result.push(td);
          row.appendChild(td);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return result;
    }
  }, {
    key: "tableAddRow",
    value: function tableAddRow(table) {
      var result = [];
      var tBody = table.tBodies[0] || null;
      if (tBody === null) {
        return result;
      }
      var tr = tBody.children[0];
      if (tr) {
        var newRow = document.createElement('tr');
        var count = tr.children.length;
        for (var i = 0; i < count; i++) {
          newRow.insertCell();
        }
        if (table.tBodies[0]) {
          table.tBodies[0].appendChild(newRow);
        } else {
          table.appendChild(newRow);
        }
        result.push(newRow);
      }
      return result;
    }
  }, {
    key: "assignTagId",
    value: function assignTagId(node) {
      var convertToString = false;
      if (typeof node === 'string') {
        node = new DOMParser().parseFromString(node, "text/html");
        node = node.body;
        convertToString = true;
      }
      var id = 1;
      var funcRec = function funcRec(node) {
        node.setAttribute("data-tag-id", id++);
        var _iterator7 = _createForOfIteratorHelper(node.children),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var child = _step7.value;
            if (child.children.length > 0) {
              funcRec(child);
            } else {
              child.setAttribute("data-tag-id", id++);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      };
      funcRec(node);
      if (convertToString) {
        node = node.innerHTML;
      }
      return node;
    }
  }, {
    key: "removeTagId",
    value: function removeTagId(node) {
      var convertToString = false;
      if (typeof node === 'string') {
        node = new DOMParser().parseFromString(node, "text/html");
        node = node.body;
        convertToString = true;
      }
      var items = node.querySelectorAll("[data-tag-id]");
      items.forEach(function (item) {
        item.removeAttribute("data-tag-id");
      });
      if (convertToString) {
        node = node.innerHTML;
      }
      return node;
    }
  }, {
    key: "getCurrentSelection",
    value: function getCurrentSelection(dom, refreshSelectioCallback, windowObj) {
      var result = null;
      windowObj = windowObj || window;
      var sel = windowObj.getSelection ? windowObj.getSelection() : document.selection;
      if (sel !== null) {
        result = {};
        result.sel = sel;
        result.isSelection = sel.rangeCount > 0 && sel.toString().length > 0;
        result.selectionDirection = '';
        if (result.sel.anchorOffset > result.sel.focusOffset) {
          result.selectionDirection = 'ltr';
        } else if (result.sel.anchorOffset < result.sel.focusOffset) {
          result.selectionDirection = 'rtl';
        }
        var mainNode = result.sel.baseNode || result.sel.anchorNode;
        if (!mainNode) return null;
        result.node = mainNode instanceof Element ? mainNode : mainNode.parentElement;
        result.subSelection = result.sel.anchorOffset > 0 && result.sel.focusOffset > 0;
        if (!result.isSelection) {
          var range = document.createRange();
          var text = result.node;
          if (text) {
            range.selectNodeContents(text);
            result.range = range;
          }
        } else {
          result.range = result.sel.getRangeAt(0);
        }
        result.isNodeRoot = result.node === dom;
        result.parentNode = result.node === dom ? result.node : result.node.parentElement;
        result.isParentNodeRoot = result.node === dom;
        result.editorRef = dom;
        result.selectedText = result.sel.toString();
        result.selectedContent = result.range.cloneContents();
        if (result.selectedContent.children[0]) {
          if (result.selectedContent.children[0].innerText == result.selectedText) {
            result.node = result.selectedContent.children[0];
            result.isNodeRoot = false;
            result.subSelection = false;
          }
        }
        result.refreshSelection = refreshSelectioCallback;
      }
      return result;
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect(el, zoom) {
      zoom = zoom || 1;
      var data = JSON.parse(JSON.stringify(el.getBoundingClientRect()));
      if (zoom < 1) {
        data.x = data.x * zoom;
        data.y = data.y * zoom;
        data.top = data.top * zoom;
        data.left = data.left * zoom;
        data.right = data.right * zoom;
        data.bottom = data.bottom * zoom;
        data.width = data.width * zoom;
        data.height = data.height * zoom;
      }
      return data;
    }
  }]);
  return UtilsHTML;
}();
exports.UtilsHTML = UtilsHTML;
var i18n = function () {
  function i18n() {
    (0, _classCallCheck2["default"])(this, i18n);
  }
  (0, _createClass2["default"])(i18n, null, [{
    key: "get_string",
    value: function get_string(str) {
      var res = "";
      try {
        res = IWrapper.get_string(str);
      } catch (e) {
        throw new Error("Try to get string before wrapper initialized: " + str);
      }
      return res;
    }
  }]);
  return i18n;
}();
exports.i18n = i18n;
var Cookies = function () {
  function Cookies() {
    (0, _classCallCheck2["default"])(this, Cookies);
  }
  (0, _createClass2["default"])(Cookies, null, [{
    key: "set",
    value: function set(id, value, minutesExpire) {
      value = window.escape(value);
      var d = new Date();
      d.setTime(d.getTime() + minutesExpire * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = id + "=" + value + "; " + expires;
    }
  }]);
  return Cookies;
}();
exports.Cookies = Cookies;
Cookies.get = function (id, defaultValue) {
  var result = defaultValue;
  var name = id + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name) === 0) result = c.substring(name.length, c.length);
  }
  result = window.unescape(result);
  switch ((0, _typeof2["default"])(defaultValue)) {
    case 'boolean':
      result = result === 'true';
      break;
    case 'number':
      result = parseFloat(result);
      break;
    case 'object':
      result = defaultValue instanceof Date ? new Date(result) : result;
      break;
    default:
      result = result.toString();
  }
  return result;
};
;