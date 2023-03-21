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

/**
 * 
 * @returns An object with settings. All keys are defined as below.
 */
IWrapper.getSettings = function(){
    var result = {};
    result.wwwroot = '/';
    result.showcase_url = 'https://sn-recit-formation-a-distance.github.io/html-bootstrap-editor-showcase/index.html';
    result.iconclass = 'fontawesome=.fa';
    result.pixabaykey = 'key';
    return result;
}

/**
 * This function will upload images to a public server
 * @param {String} filename 
 * @param {Binary} binFile 
 * @param {Function} cb Callback to call when the file has been uploaded. The request must return the file url.
 */
IWrapper.uploadFile = function(filename, binFile, cb){
    let xhr = new XMLHttpRequest();
    cb(xhr);
}

/**
 * This function will return all CSS rules used on the website.
 */
IWrapper.getThemeCssRules = function(returnAllRules){
    var cssRulesBuffer = {rules: [], url: ['https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css']};

    return cssRulesBuffer;
}

/**
 * This function will an associative array containing all strings for current languages i.e strings['errormsg'] = 'An error has occured'
 */
IWrapper.get_string = function(str, resource){
    return str;
}

/**
 * 
 * @returns A string containing HTML to edit
 */
IWrapper.getContent = function(){
    return '';
};

/**
 * This function will be called when user press 'save' with a string containing the edited HTML
 */
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