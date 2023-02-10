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

import { UtilsMoodle } from '../RecitEditor';

export class WebApi{
    constructor(){
        this.gateway = this.getGateway();
        this.post = this.post.bind(this);
        this.loading = document.getElementById("tt-loading");
    }

    getGateway(){
        let atto = UtilsMoodle.getAttoInterface();
        
        let settings = atto.getSettings();
        if(settings){
            return M.cfg.wwwroot + "/lib/ajax/service.php?sesskey=" + M.cfg.sesskey;
        }
        else{
            return "Unknown gateway."
        }
    }

    post(url, data){
        let that = this;

        let result = new Promise((resolve, reject) => {
            data = JSON.stringify(data);

            let xhr = new XMLHttpRequest();
    
            xhr.open("post", url, true);
            // Header sent to the server, specifying a particular format (the content of message body).
            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            xhr.setRequestHeader('Accept', 'json'); // What kind of response to expect.
            
            xhr.onload = function(event){
                let response = null;

                try{
                    response = JSON.parse(event.target.response);
                }
                catch(error){
                    reject(error, event.target.response);
                }

                if(that.loading){
                    that.loading.style.display = "none";
                }
                
                resolve(response);
            }
    
            xhr.onerror = function(err){
                reject(err);
            }
    
            if(that.loading){
                that.loading.style.display = "block";
            }
            
            xhr.send(data);
        });

        return result;       
    }

    queryMoodle(methodName, args, onSuccess){
        let data = {index:0, args:args, methodname: methodName};
        return this.post(this.gateway + "&info=" + methodName, [data], onSuccess);
    }

    saveTemplate(data){
        return this.queryMoodle('atto_reciteditor_save_template', data);
    }

    getTemplateList(type){
        return this.queryMoodle('atto_reciteditor_get_template_list', {type:type});
    }

    deleteTemplate(id){
        return this.queryMoodle('atto_reciteditor_delete_template', {id:id});
    }

    importTemplates(fileContent){
        return this.queryMoodle('atto_reciteditor_import_templates', {fileContent:fileContent});
    }
}