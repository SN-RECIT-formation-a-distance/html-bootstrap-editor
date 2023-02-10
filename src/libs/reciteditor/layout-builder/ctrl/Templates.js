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

import { i18n, Assets, WebApi } from '../../RecitEditor';

export class Templates{
    static layoutList = [];

    static webApi = new WebApi();

    static onLoad(){
        let p = Templates.webApi.getTemplateList();
        let p2 = p.then((webApiResult) => {
            if(webApiResult && !webApiResult.error){
                Templates.layoutList = webApiResult[0].data;
            }
            else{
                alert(`Error: ${JSON.stringify(webApiResult)}`);
            }
            return webApiResult;
        },
        (err, response) => {
            console.log(err, response);
        });

        return p2;
    }

    static onSave(name, type, htmlStr, img){
        let data = {};
        data.name = name;
        data.htmlstr = htmlStr;
        data.type = type;
        data.img = img || '';
        return Templates.webApi.saveTemplate(data);
    }

    static onDelete(item){
        if(window.confirm(i18n.get_string('deleteconfirmmsg'))){ 
            return Templates.webApi.deleteTemplate(item.id);
        }

        return null;
    }

    static onImport(fileCtrl, dataObj){
        dataObj = dataObj || null;

        let p1 = new Promise((resolve, reject) => {            
            if(fileCtrl !== null){
                if(fileCtrl.length === 0) { reject(); }
    
                let reader = new FileReader();
                reader.addEventListener('load', function(e) {
                    try{
                        let fileContent = (e.target.result);
                        resolve(fileContent);
                    }
                    catch(err){
                        alert(i18n.get_string('errorseeconsole'));
                        console.log(err);
                        reject();
                    }
                });

                reader.readAsText(fileCtrl.files[0]);
            }
            else{
                resolve(JSON.stringify(dataObj));
            }           
        });

        let result = p1.then((fileContent) => {
            return Templates.webApi.importTemplates(fileContent);
        });

        return result;
    }

    static onExport(item){
        return  "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item));
    }
}