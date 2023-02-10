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

import {Assets} from '../RecitEditor';

export class JsNx{
    /**
     * Return the array item at the indicated index. If it not exists, then return the default value.
     * @param {number} index
     * @param {*} default value
     * @returns {*}
     */
    static at(arr, index, defaultValue){
        if(JsNx.exists(arr, index)){
            return arr[index];
        }
        else{
            return defaultValue;
        }
    };

    /**
     * Check if the index exists in the array.
     * @param {number} index
     * @returns {boolean}
     */
    static exists(arr, index){
        if(typeof arr[index] === "undefined"){
            return false;
        }
        else{
            return true;
        }
    };

    /**
     * Return the array item (an object) according to the property and value indicated. If it not exists, then return the default value.
     * @param {string} property
     * @param {*} property value
     * @param {*} default value
     * @returns {*}
     */
    static getItem(arr, prop, value, defaultValue){ 
        for(let item of arr){
            if(JsNx.get(item, prop, null) === value){return item; }
        }  

        return defaultValue;
    };

    /**
     * Remove an element from the array. If the element does not exists then do nothing.
     * @param {number} index
     * @returns {object}
     */
    static remove(arr, index){
        let result = [];
        
        if(JsNx.exists(arr, index)){
            result = arr.splice(index,1);
        }
        
        return (result.length > 0 ? result[0] : null);
    };

    /**
     * Remove an element from the array according to the property and value indicated.
     * @param {string} property
     * @param {*} property value
     * @returns {object}
     */
    static removeItem = function(arr, prop, value){
        let index = JsNx.getItemIndex(arr, prop, value, -1);
        return JsNx.remove(arr, index);
    };

    /**
     * Return the array item (an object) index according to the property and value indicated. 
     * @param {string} property
     * @param {*} property value
     * @returns {number}
     */
    static getItemIndex = function(arr, prop, value){
        for(let i = 0; i < arr.length; i++){
            let item = arr[i];
            
            if(JsNx.get(item, prop, null) === value){ return i }
        }
        return -1;
    };

    /**
    * Get the property value. If it not exists, then return the default value.
    * @param {string} prop
    * @param {*} defaultValue
    * @returns {*}
    */
    static get = function(obj, prop, defaultValue){  
        let props = prop.split('.');
        let result = (typeof defaultValue === "undefined" ? null : defaultValue);

        if(typeof obj[prop] === "function"){
            result = obj[prop]();
        }
        else if((props.length === 1) && (obj.hasOwnProperty(props[0]))){
            result = obj[props[0]];
        }
        else if((props.length === 2) && (obj[props[0]].hasOwnProperty(props[1]))){
            result = obj[props[0]][props[1]];
        }
    
        return result;
    };

    /*
    * @description Deep clone the object and return a new one
    * @returns {Object}
    */
    static clone = function(obj){
        if(obj instanceof Date){
            return new Date(obj.valueOf());
        }

        let result = Object.create(obj.__proto__);
        
        for(let prop in obj){
            if(Array.isArray(obj[prop])){
                switch(typeof JsNx.at(obj[prop], 0,null)){
                    case "object":
                        result[prop] = JsNx.copy(obj[prop], 2);
                        break;
                    default:
                        result[prop] = JsNx.copy(obj[prop]);
                }
            }
            else if((typeof obj[prop] === "object") && (obj[prop] !== null)){
                result[prop] = JsNx.clone(obj[prop]);
            }
            else{
                result[prop] = obj[prop];
            }
        }
        return result;   
    };

    static copy = function(arr, level){
        level = level || 0;
        
        switch(level){
            case 1:
                return JSON.parse(JSON.stringify(arr)); //  Array of literal-structures (array, object) ex: [[], {}];
            case 2:
                //return jQuery.extend(this); // Array of prototype-objects (function). The jQuery technique can be used to deep-copy all array-types. ex: [function () {}, function () {}];
                let result = [];
                for(let item of arr){
                    result.push((item !== null ? JsNx.clone(item) : null));
                }
                return result;
            default:
                return arr.slice(); // Array of literal-values (boolean, number, string) ex:  [true, 1, "true"]
        }
    };

    /**
     * During shallow equality check of objects you get the list of properties (using Object.keys()) of both objects, then check the properties’ values for equality.
     * @param {object} obj1 
     * @param {object} obj2 
     * @return {boolean} it returns true if the objects as equals
     */
    static compare = function(obj1, obj2){
        obj1 = obj1 || null;
        obj2 = obj2 || null;

        if((obj1 === null) && (obj2 === null)){
            return true;
        }
        else if((obj1 === null) || (obj2 === null)){
            return false;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        
        if (keys1.length !== keys2.length) {
            return false;
        }
        
        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
            return false;
            }
        }
        
        return true;
    }
}

export class Storage {
    static KEY_PREFIX = "reciteditor.";

    static get(key){
        return localStorage.getItem(Storage.KEY_PREFIX + key);
    }

    static set(key, value){
        return localStorage.setItem(Storage.KEY_PREFIX + key, value);
    }
}

export class Utils{
    static version = 1.0;

    // this is necessary in order to handle with timezone
    static dateParse(strDate){
       // return Moment(strDate).toDate();
    }

    static formatMoney(value){
        return "$ " + parseFloat(value).toFixed(2);
    }

    static getUrlVars(){
        var vars, uri;

        vars = {};
    
        uri = decodeURI(window.location.href);
    
        uri.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        
        return vars;
    }
    
    static countOccurrencesInString(string, subString, allowOverlapping) {
    
        string += "";
        subString += "";
        if (subString.length <= 0) return (string.length + 1);
    
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

    static replaceAt(s, subString, replacement, index) {
        if (Utils.countOccurrencesInString(s, subString) < 2){
            return s.replace(subString, replacement);
        }else{ //There are multiple occurences of the substring in the string so replace only the one we want by index
            let offset = index - subString.length;
            let p = s.substr(index-offset).replace(subString, replacement);

            return s.substr(0, index-offset) + p;
        }
    }

    static getCaretCharacterOffsetWithin(element) {
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
        } else if ( (sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
    }

    static RGBToHex(rgb) {
        rgb = rgb || "rgb(0,0,0)";

        let regex = new RegExp(/^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/gm);

        // not an RGB
        if(!regex.test(rgb)){ 
            return rgb; 
        }

        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);
      
        
        // Convert %s to 0–255
        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1)
            rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255);
            /* Example:
            75% -> 191
            75/100 = 0.75, * 255 = 191.25 -> 191
            */
        }

        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
      
        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;
      
        /*
            Now we can supply values like either of these:
            rgb(255,25,2)
            rgb(255 25 2)
            rgb(50%,30%,10%)
            rgb(50% 30% 10%)
        */
        return "#" + r + g + b;
    }
    

    static resizeImageFromSize(imgBase64, maxWidth, maxHeight, fileType){
        let promise = new Promise((resolve, reject) => {
            let img = new Image();

            img.src = imgBase64;
            img.onload = function() {
                let width = this.width;
                let height = this.height;
        
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } 
                else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
        
                let canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
        
                resolve(canvas.toDataURL(fileType));
            };
        });

        return promise;        
    }

    static getYoutubeIDFromURL(url){
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }

    static formatVideoURLEmbed(url){
        if ((url.includes('youtube') && url.includes('watch?v=')) || url.includes('youtu.be')){//URL is not embed
            let id = Utils.getYoutubeIDFromURL(url);
            if (id){
                url = '//www.youtube.com/embed/' + id;
            }
        }
        if (!url.includes('rel=')){
            if (url.includes('?')){
                url = url + '&rel=0';
            }else{
                url = url + '?rel=0';
            }
        }
        return url;
    }
}

export class UtilsMoodle
{
    static rolesL1 = ['ad', 'mg', 'cc', 'et'];
    static rolesL2 = ['ad', 'mg', 'cc', 'et', 'tc'];
    static rolesL3 = ['sd', 'gu', 'fp'];

    static checkRoles(roles, r1){
        let r2 = roles;
        let a = new Set(r1);
        let b = new Set(r2);
        let intersection = new Set([...a].filter(x => b.has(x)));
        return intersection.size > 0;
    }

    static getAttoInterface(){
        let result = {
            setContent: function(){console.log('Atto interface not defined.'); }, 
            getContent: function(){console.log('Atto interface not defined.'); return null;}, 
            getSettings: function(){console.log('Atto interface not defined.'); return null; },
            getThemeCssRules: function(){console.log('Atto interface not defined.'); return null; },
            getThemeUrl: function(){console.log('Atto interface not defined.'); return null; },
            getFileTransferData: function(){console.log('Atto interface not defined.'); return null;}
        };

        if(window.attoInterface){
            result.getContent = window.attoInterface.getContent || window.parent.attoInterface.getContent; // the editor content here is text and not html
            result.setContent = window.attoInterface.setContent || window.parent.attoInterface.setContent;
            result.getSettings = window.attoInterface.getSettings || window.parent.attoInterface.getSettings;
            result.getThemeCssRules = window.attoInterface.getThemeCssRules || window.parent.attoInterface.getThemeCssRules;
            result.getThemeUrl = window.attoInterface.getThemeUrl || window.parent.attoInterface.getThemeUrl;
            result.getFileTransferData = window.attoInterface.getFileTransferData || window.parent.attoInterface.getFileTransferData;
            return result;
        }else if (typeof M !== 'undefined' && M.cfg){
            result.getSettings = function(){ return M.cfg};
            return result;
        }
        else{
            if(process.env.NODE_ENV !== "development"){  
                alert('Atto interface not defined. Unable to transfer content.');
                window.close();
            }
            else{
                console.log('Atto interface not defined. Unable to transfer content.');
            }

            return result;
        }
    }

    static getThemeMoodleCssRules(returnAllRules){
        let attoInterface = UtilsMoodle.getAttoInterface();

        if(attoInterface !== null){
            return attoInterface.getThemeCssRules(returnAllRules);
        }
        return {};
    }

    static getThemeMoodleUrl(){
        let attoInterface = UtilsMoodle.getAttoInterface();

        if(attoInterface !== null){
            return attoInterface.getThemeUrl();
        }
        console.log(`Loading theme Bootstrap on ${this.constructor.name}`);
        return Assets.Bootstrap;
    }

    static get_string(str, resource){
        if (typeof M == 'undefined') return str;
        let moodle = M || window.parent.M;
        return moodle.util.get_string(str, resource);
    }
}

export class MoodleUploadFile{
    static instance = null;

    constructor(){
        this.onReadyStateChange = this.onReadyStateChange.bind(this);

        this.xhr = new XMLHttpRequest();
        this.xhr.onreadystatechange = this.onReadyStateChange;
       // this.M = window.opener.M;
        this.onUploadDone = null;
    }

    onReadyStateChange(){
        let that = this;

        if (this.xhr.readyState === 4) {
            if (this.xhr.status === 200) {
                let result = JSON.parse(this.xhr.responseText);
                if (result) {
                    if (result.error) {
                        //return new this.M.core.ajaxException(result);
                        alert("error");
                        console.log(result);
                    }

                    let file = result;
                    if (result.event && result.event === 'fileexists') {
                        // A file with this name is already in use here - rename to avoid conflict.
                        // Chances are, it's a different image (stored in a different folder on the user's computer).
                        // If the user wants to reuse an existing image, they can copy/paste it within the editor.
                        file = result.newfile;
                    }

                    // Replace placeholder with actual image.
                    /*newhtml = template({
                        url: file.url,
                        presentation: true
                    });
                    newimage = Y.Node.create(newhtml);
                    if (placeholder) {
                        placeholder.replace(newimage);
                    } else {
                        self.editor.appendChild(newimage);
                    }
                    self.markUpdated();*/
                    if(this.onUploadDone){
                        this.onUploadDone(file.url);
                    }
                }
            } else {
               /* Y.use('moodle-core-notification-alert', function() {
                    new that.M.core.alert({message: this.M.util.get_string('servererror', 'moodle')});
                });*/
                alert("server error");
            }
        }
        return true;
    }

    onSelectFileToUpload(event, callback){
        let reader = new FileReader();
        let file = event.target.files[0];
        let that = this;

        this.onUploadDone = callback;

        reader.readAsDataURL(file);

        reader.onloadend = () => {                        
            if (file.type.match('image.*')){
                let callback = function(dataURL){
                    let fileContent = that.convertbase64ToBin(dataURL);
                    that.upload(file.name, fileContent);
                }
                
                that.resizeImage(reader.result, file.type, callback);

                return;
            }

            /*let fileInMB = file.size / 1024 / 1024;
            let maxFileSize = 5;
            if(fileInMB > maxFileSize){
                alert(`Le fichier est trop grand pour le dossier de destination. La taille maximale du fichier est de ${maxFileSize} mégaoctets.`);
                return;
            }*/
            
            let fileContent = that.convertbase64ToBin(reader.result);

            that.upload(file.name, fileContent);
        };
    }

    /**
     * An Javascript function to remove accents, spaces and set lower case from an input string.
     * @param {string} str 
     */
    slugify(str) {
        var map = {
            '-' : ' ',
            '-' : '_',
            'a' : 'á|à|ã|â|À|Á|Ã|Â',
            'e' : 'é|è|ê|É|È|Ê',
            'i' : 'í|ì|î|Í|Ì|Î',
            'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
            'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
            'c' : 'ç|Ç',
            'n' : 'ñ|Ñ'
        };
        
        for (var pattern in map) {
            str = str.replace(new RegExp(map[pattern], 'g'), pattern);
        };
    
        return str;
    };

    resizeImage(imgBase64, fileType, callback){
            let MAX_WIDTH = 1500;
            let MAX_HEIGHT = 1300;
            return this.resizeImageFromSize(imgBase64, MAX_WIDTH, MAX_HEIGHT, fileType, callback)
    }

    resizeImageFromSize(imgBase64, maxWidth, maxHeight, fileType, callback){
        let img = new Image();

        img.src = imgBase64;
        img.onload = function() {
            let width = this.width;
            let height = this.height;
    
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } 
            else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }
    
            let canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
    
            callback(canvas.toDataURL(fileType));
        };
    }

    upload(filename, binFile){
        let atto = UtilsMoodle.getAttoInterface();
        
        if(atto === null){ return; }

        let fileTransferData = atto.getFileTransferData();
        let settings = atto.getSettings();

        let formData = new FormData();
        formData.append('repo_upload_file', binFile);
        formData.append('itemid', fileTransferData.itemid);
        formData.append('env', fileTransferData.env);
        formData.append('repo_id', fileTransferData.repo_id); 
        formData.append('sesskey', settings.sesskey);
        formData.append('client_id', fileTransferData.client_id);
        formData.append('savepath', "/"); //(options.savepath === undefined) ? '/' : options.savepath,
        formData.append('ctx_id', settings.contextid);
        formData.append('license', fileTransferData.license);
        formData.append('author', fileTransferData.author);

        let tmp = this.slugify(filename).split(".");
        filename = [(tmp[0] || ""), (tmp[1] || "")];
        formData.append('title', `${filename[0].substr(0,255)}.${filename[1]}`);
    
        this.xhr.open("POST", settings.wwwroot + '/repository/repository_ajax.php?action=upload', true);
        this.xhr.send(formData);
    }

    /**
     * @param {string} dataURI
     * @return {Blob} Binary object.
     */
    convertbase64ToBin(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = decodeURI(dataURI.split(',')[1]);
        }
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type: mimeString});
    }
}

export class UtilsString
{
    static checkEmail(email) {
        email = email || "";

        if(email.length === 0){ return true;}

        //var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let emails = email.split(",");
        for(let e of emails){
            if(!filter.test(e.trim())){
                return false;
            }
        }
    
        return true;
    }

    static replaceNonBreakingSpace(str){
        if (!str || str.length == 0) return;
        let regex = new RegExp(/(\u00AB|\u2014)(?:\s+)?|(?:\s+)?([\?!:;\u00BB])/g);
        str = str.replace("&nbsp; ", "");//Revert old nbsp
        str = str.replace("&nbsp;", "");//Revert old nbsp
        str = str.replace(regex, "$1&nbsp;$2");
        return str;
    }

    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export class UtilsDateTime
{
    static nbMinSinceSundayToDate(nbMinSinceSunday){
        nbMinSinceSunday = parseInt(nbMinSinceSunday,10);
        if(nbMinSinceSunday === 0){
            return null;
        }
        let hour = Math.trunc((nbMinSinceSunday % 1440) / 60);
        let minutes = nbMinSinceSunday % 60;
        return new Date(0,0,0, hour, minutes, 0);
    }
    
    static dateToNbMinSinceSunday(weekDay, date){
        if(date instanceof Date){
            return (date.getHours() * 60) + date.getMinutes() + (weekDay * 1440); // 1440 = minutes in a day
        }
        else{
            return 0;
        }
    }
    
    /**
    * Transform the shift minutes to the time string
    * @param {type} time 
    * @param {type} separator
    * @returns {ScheduleShift.minutesToTime.result}
    */
    static minutesToTime(time, separator) {
        separator = separator || ":";

        let hour, min, result, offsetDays;

        if((time >= 0) && (time <= 23)){
            hour = time;
            min = 0;
        }
        else{
            hour = Math.trunc(time / 60); // extract the hour
            offsetDays = Math.trunc(hour / 24);
            min = time - (hour * 60); // extract the minutes
            hour -= (offsetDays * 24);
        }

        result = hour.toString().nxLpad("0", 2) + separator + min.toString().nxLpad("0", 2);
        return result;
    };
    
    /**
     * Transform the time in string to minutes
     * @param {string} - hh:mm
     * @return {number} - The number of minutes 
     */
    static timeToMin = function (time) { 
        var hour, minutes;

        if (time.length !== 5) {
            return 0;
        }

        hour = parseInt(time.substring(0, 2),10);
        minutes = parseInt(time.substring(3, 5),10);

        return (hour * 60) + minutes;
    };
};

export class UtilsTreeStruct
{
    /**
     * Apply a user supplied function to every node of the tree and return its result
     * @param {Array} - tree
     * @param {string} - proNodes The property name of the children nodes 
     * @param {function} - callback The callback function
     * @returns void
     */
    static treeWalk(tree, propNodes, callback){
        let i, node;
        
        for(i = 0; i < tree.length; i++){
            node = tree[i];
            if((node.hasOwnProperty(propNodes)) && (node[propNodes].length > 0)){
                callback(node);
                UtilsTreeStruct.treeWalk(node[propNodes], propNodes, callback);
            }
            else{
                callback(node);        
            }
        }
    }
    
    /**
     * Get the parent node 
     * @param {Array} - tree
     * @param {string} - proNodes - The property name of the children nodes 
     * @param {function} - callback - The callback function. It needs to return true or false
     * @param * - default value
     * @returns * - the parent node or the default value
     */
    static getParentNode(rootNode, propNodes, callback, defaultValue){
        let i, node;
        let result = defaultValue;

        // there is no parent node
        if(callback(rootNode)){ return result;} 

        let nodes = rootNode.nxGet(propNodes);

        for(i = 0; i < nodes.length; i++){
            node = nodes[i];

            if(node.nxGet(propNodes).length > 0){                
                if(callback(node)){return rootNode; }

                result = UtilsTreeStruct.getParentNode(node, propNodes, callback, defaultValue);
            }
            else if(callback(node)){return rootNode; }           
        }

        return result;
    }
    
    /**
     * Get a node from the tree
     * @param {Array} - tree
     * @param {string} - proNodes - The property name of the children nodes 
     * @param {function} - callback - The callback function. It needs to return true or false
     * @param * - default value
     * @returns * - the node or the default value
     */
    static getNode(tree, propNodes, callback, defaultValue){
        let i, node, result;
        
        for(i = 0; i < tree.length; i++){
            node = tree[i];
            
            if(callback(node)){
                return node;
            }
            
            if((node.hasOwnProperty(propNodes)) && (node[propNodes].length > 0)){
                result = UtilsTreeStruct.getNode(node[propNodes], propNodes, callback, defaultValue);
                if(result !== null){
                    return result;
                }
            }
            else if((typeof node[propNodes] === "function") && (node[propNodes]().length > 0)){
                result = UtilsTreeStruct.getNode(node[propNodes], propNodes, callback, defaultValue);
                if(result !== null){
                    return result;
                }
            }
        }
        return defaultValue;
    }
    
     /**
     * Remove a node from the tree
     * @param {Array} - tree
     * @param {string} - proNodes - The property name of the children nodes 
     * @param {function} - callback - The callback function. It needs to return true or false
     * @returns {boolean} - True if the node was found. False otherwise.
     */
    static removeNode(tree, propNodes, callback){
        let i, node;
        
        for(i = 0; i < tree.length; i++){
            node = tree[i];
            
            if(callback(node)){
                tree.splice(i, 1);
                return true;
            }
            
            if((node.hasOwnProperty(propNodes)) && (node[propNodes].length > 0)){
                if(UtilsTreeStruct.removeNode(node[propNodes], propNodes, callback)){
                    return true;
                }
            }
            else if((typeof node[propNodes] === "function") && (node[propNodes]().length > 0)){
                if(UtilsTreeStruct.removeNode(node[propNodes](), propNodes, callback)){
                    return true;
                }
            }
        }
        return false;
    }
    /*static removeNode(tree, propNodes, callback){
        let i, node;
        
        for(i = 0; i < tree.length; i++){
            node = tree[i];
            
            if((node.hasOwnProperty(propNodes)) && (node[propNodes].length > 0)){
                if(callback(node)){
                    tree.splice(i, 1);
                    return true;
                }
                
                return UtilsTreeStruct.removeNode(node[propNodes], propNodes, callback);
            }
            else{
                if(callback(node)){
                    tree.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }*/
}

export class UtilsHTML{
    static cssRules2Str(cssRules){
        let result = "";
        
        for(let rule of cssRules){
            result += rule.cssText;
        }
 
        return result;
    }

    static getAvailableFonts(){
        let { fonts } = document;
        const it = fonts.entries();

        let arr = [];
        let done = false;

        while (!done) {
            const font = it.next();
            if (!font.done) {
            arr.push(font.value[0].family);
            } else {
            done = font.done;
            }
        }

        // converted to set then arr to filter repetitive values
        let fontlist = [...new Set(arr)];
        let list = [];
        for (let f of fontlist){
            list.push({text:f, value:f})
        }
        return list;
    }

    static getTableFromCell(cell){
        let table = cell;
        let counter = 0;
        while(!(table.tagName.toLowerCase() === 'table') && (counter <= 5)){
            table = table.parentElement;
            counter++;
        }

        return (table.tagName.toLowerCase() === 'table' ? table : null);
    }

    static tableAddCol(table){
        let result = [];

        for (let row of table.rows){
            let tag = 'td';
            if (row.children[0] && row.children[0].tagName == 'TH'){
                tag = 'th';
            }

            let td = document.createElement(tag);
            result.push(td);
            row.appendChild(td);
        }

        return result;
    }

    static tableAddRow(table){
        let result = [];
        let tBody = table.tBodies[0] || null;

        if(tBody === null){
            return result;
        }

        let tr = tBody.children[0];
        
        if (tr){
            let newRow = document.createElement('tr');
            let count = tr.children.length;
            
            for (let i = 0; i < count; i++){
                newRow.insertCell();
            }
            
            if(table.tBodies[0]){
                table.tBodies[0].appendChild(newRow);
            }
            else{
                table.appendChild(newRow);
            }

            result.push(newRow);
        }

        return result;
    }

    static assignTagId(node){
        let convertToString = false;

        if(typeof node === 'string'){
            node = new DOMParser().parseFromString(node, "text/html");
            node = node.body;
            convertToString = true;
        }

        let id = 1;
        let funcRec = function (node) {
            node.setAttribute("data-tag-id", id++);

            for(let child of node.children){
                if(child.children.length > 0){
                    funcRec(child);
                }
                else{
                    child.setAttribute("data-tag-id", id++);
                }
            }
        }

        funcRec(node);

        if(convertToString){
            node = node.innerHTML;
        }

        return node;
    }

    static removeTagId(node){
        let convertToString = false;

        if(typeof node === 'string'){
            node = new DOMParser().parseFromString(node, "text/html");
            node = node.body;
            convertToString = true;
        }

        let items = node.querySelectorAll("[data-tag-id]");

        items.forEach(function(item) {
            item.removeAttribute("data-tag-id");
        });

        if(convertToString){
            node = node.innerHTML;
        }

        return node;
    }

    static getCurrentSelection(dom, refreshSelectioCallback, windowObj){
        let result = null;
        
        windowObj = windowObj || window;
        
        let sel = windowObj.getSelection ? windowObj.getSelection() : document.selection;              

        if(sel !== null){
            result = {};
            result.sel = sel;
            result.isSelection = (sel.rangeCount > 0) && (sel.toString().length > 0);
        
            result.selectionDirection = '';
            if(result.sel.anchorOffset > result.sel.focusOffset){
                result.selectionDirection = 'ltr';
            }
            else if(result.sel.anchorOffset < result.sel.focusOffset){
                result.selectionDirection = 'rtl';
            }
             
            let mainNode = result.sel.baseNode || result.sel.anchorNode; // Chromme || Firefox
            if (!mainNode) return null;
            result.node = (mainNode instanceof Element ? mainNode :  mainNode.parentElement);
            result.subSelection = (result.sel.anchorOffset > 0 && result.sel.focusOffset > 0);

            if (!result.isSelection){//If it's not a selection, set the range to be the whole node
                let range = document.createRange();
                let text = result.node;
                if (text){
                    range.selectNodeContents(text);
                    result.range = range;
                }
            }else{
                result.range = result.sel.getRangeAt(0);
            }
    
            result.isNodeRoot = (result.node === dom);
            result.parentNode = (result.node === dom ? result.node : result.node.parentElement);
            result.isParentNodeRoot = (result.node === dom);
            result.editorRef = dom;
            result.selectedText = result.sel.toString();
            result.selectedContent = result.range.cloneContents();

            if (result.selectedContent.children[0]){ // Est-ce que la selection contient des tag html?
                if (result.selectedContent.children[0].innerText == result.selectedText){
                    result.node = result.selectedContent.children[0];
                    result.isNodeRoot = false;
                    result.subSelection = false;
                }
            }
            result.refreshSelection = refreshSelectioCallback;
        }

        return result;
    }

    static getBoundingClientRect(el, zoom){
        zoom = zoom || 1;
        let data = JSON.parse(JSON.stringify(el.getBoundingClientRect()));

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
}

export class i18n {
    static get_string(str){
        //if (!document.lang) document.lang = ""
        let res = UtilsMoodle.get_string(str, 'atto_reciteditor');
        //if (res.startsWith('[[')) document.lang += "'"+str+"',"+'\n'
        //if (res.startsWith('[[')) document.lang += "$string['"+str+"'] = '';"+'\n'
        return res;
    }
}

export class Cookies
{   
    /**
    * @static
    * @param {type} id
    * @param {type} value
    * @param {type} minutesExpire
    * @returns {void}
    */
    static set(id, value, minutesExpire) {
        value = window.escape(value);

        let d = new Date();
        d.setTime(d.getTime() + (minutesExpire*60*1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = id + "=" + value + "; " + expires;
    };

    static get = function (id, defaultValue) {
        let result = defaultValue;
        let name = id + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') 
                c = c.substring(1);

            if (c.indexOf(name) === 0) 
                result = c.substring(name.length, c.length);
        }

        result = window.unescape(result);
        switch(typeof defaultValue){            
            case 'boolean':
                result = result === 'true';
                break;
            case 'number':
                result = parseFloat(result);
                break;
            case 'object':
                result = (defaultValue instanceof Date ? new Date(result) : result);
                break;
            default:
                result = result.toString();
        }

        return result;
    };
};