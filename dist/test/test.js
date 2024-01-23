"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
var _client = require("react-dom/client");
var _templates = require("./templates");
var IWrapper = {
  getSettings: null,
  uploadFile: null,
  getThemeCssRules: null,
  getAdditionalHTMLHead: null,
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
  result.iconclass = 'fontawesome=.fa';
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
    urlList: ['https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css']
  };
  return cssRulesBuffer;
};
IWrapper.getAdditionalHTMLHead = function () {
  var result = {
    css: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'],
    js: []
  };
  return result;
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
    resolve(_templates.TestTemplates);
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
root.render(_react["default"].createElement(_index.HTMLBootstrapEditor, {
  wrapper: IWrapper
}));