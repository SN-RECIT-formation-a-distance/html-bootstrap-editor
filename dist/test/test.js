"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
var _client = require("react-dom/client");
var IWrapper = {
  getSettings: null,
  uploadFile: null,
  getThemeCssRules: null,
  getThemeUrl: null,
  getContent: null,
  saveContent: null,
  getTemplateList: null,
  saveTemplate: null
};
IWrapper.getSettings = function () {
  var result = {};
  result.wwwroot = '/';
  result.showcase_url = 'https://sn-recit-formation-a-distance.github.io/html-bootstrap-editor-showcase/index.html';
  result.iconclass = '.fa';
  result.pixabaykey = 'key';
  return result;
};
IWrapper.uploadFile = function (filename, binFile, cb) {
  var xhr = new XMLHttpRequest();
  cb(xhr);
};
IWrapper.getThemeCssRules = function (returnAllRules) {
  var cssRulesBuffer = {
    rules: [],
    url: []
  };
  return cssRulesBuffer;
};
IWrapper.getThemeUrl = function () {
  return 'https://github.com/moodle/moodle/raw/12e9d9e1bf1291700fa0765116376ad2d02bf06b/theme/boost/style/moodle.css';
};
IWrapper.get_string = function (str, resource) {
  return str;
};
IWrapper.getContent = function () {
  return '';
};
IWrapper.setContent = function (htmlStr) {
  document.body.innerHTML = htmlStr;
};
IWrapper.saveTemplate = function (data) {
  return new Promise(function (resolve, reject) {
    resolve({
      success: true
    });
  });
};
IWrapper.getTemplateList = function (type) {
  return new Promise(function (resolve, reject) {
    resolve([{
      data: []
    }]);
  });
};
IWrapper.deleteTemplate = function (id) {
  return new Promise(function (resolve, reject) {
    resolve({
      success: true
    });
  });
};
IWrapper.importTemplates = function (fileContent) {
  return new Promise(function (resolve, reject) {
    resolve({
      success: true
    });
  });
};
var domContainer = document.getElementById('root');
var root = (0, _client.createRoot)(domContainer);
root.render( /*#__PURE__*/_react["default"].createElement(_index.HTMLBootstrapEditor, {
  wrapper: IWrapper
}));