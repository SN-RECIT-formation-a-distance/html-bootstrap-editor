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

export class HistoryManager {
    static MAX_HISTORY = 50;
    constructor(){
        this.history = {undo: [], redo: []};
        this.onContentChange = this.onContentChange.bind(this);
        this.onRedo = this.onRedo.bind(this);
        this.onUndo = this.onUndo.bind(this);
        this.addHistoryItem = this.addHistoryItem.bind(this);
    }

    onContentChange(oldContent){
        this.addHistoryItem(oldContent);
    }    

    onUndo(callback, currentHTML){
        let content = this.history.undo.pop();

        if (content == currentHTML && this.history.undo.length > 1){
            content = this.history.undo.pop();
        }
        
        if(content){
            this.history.redo.push(currentHTML);

            if(this.history.redo.length > HistoryManager.MAX_HISTORY){
                this.history.redo.unshift();
            }
            
            callback(content);
        }
    }

    addHistoryItem(content){
        if(this.history.undo.length > HistoryManager.MAX_HISTORY){
            this.history.undo.unshift();
        }
        if(this.history.undo[this.history.undo.length - 1] !== content){
            this.history.undo.push(content);
        }
    }

    onRedo(callback, currentHTML){
        let content = this.history.redo.pop();
        
        if(content){
            this.addHistoryItem(currentHTML);
            
            callback(content);
        }
    }
}