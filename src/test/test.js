import React from 'react';
import {HTMLBootstrapEditor} from '../index.js';
import { createRoot } from 'react-dom/client';
import {TestTemplates} from './templates';

let IWrapper = {
    getSettings: null,
    uploadFile: null,
    getThemeCssRules: null,
    getThemeUrl: null,
    getContent: null,
    saveContent: null,
    getTemplateList: null,
    saveTemplate: null
};

IWrapper.getSettings = function(){
    var result = {};
    result.wwwroot = '/';
    result.showcase_url = 'https://sn-recit-formation-a-distance.github.io/html-bootstrap-editor-showcase/index.html';
    result.iconclass = '.fa';
    result.pixabaykey = 'key';
    return result;
}


IWrapper.uploadFile = function(filename, binFile, cb){
    let xhr = new XMLHttpRequest();
    cb(xhr);
}

IWrapper.getThemeCssRules = function(returnAllRules){
    var cssRulesBuffer = {rules: [], url: [IWrapper.getThemeUrl()]};

    return cssRulesBuffer;
}

IWrapper.getThemeUrl = function(){
    return 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
}

IWrapper.get_string = function(str, resource){
    return str;
}

IWrapper.getContent = function(){
    return '';
};

IWrapper.setContent = function(htmlStr){
    document.body.innerHTML = htmlStr;
};

IWrapper.saveTemplate = function(data){
    return new Promise((resolve, reject) => {
        resolve({success:true});
    });
}

IWrapper.getTemplateList = function(type){
    return new Promise((resolve, reject) => {
        resolve(TestTemplates);
    });
}

IWrapper.deleteTemplate = function(id){
    return new Promise((resolve, reject) => {
        resolve({success:true});
    });
}

IWrapper.importTemplates = function(fileContent){
    return new Promise((resolve, reject) => {
        resolve({success:true});
    });
}

let domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(<HTMLBootstrapEditor wrapper={IWrapper}/>);