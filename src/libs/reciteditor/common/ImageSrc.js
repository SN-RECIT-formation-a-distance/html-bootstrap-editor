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

import React, { Component } from 'react';
import { InputGroup } from 'react-bootstrap';
import { InputText, BtnUpload, MoodleUploadFile } from '../RecitEditor';

export class ImageSrc extends Component {
    static defaultProps = {
        name: "",
        value: '',
        placeholder: "",
        onChange: null,
        onKeyDown: null,
        autoFocus: false,
        autoSelect: false,
        onCommit: null,
        disabled: false,
        accept: "",
        size: ""
    };
    
    constructor(props){
        super(props);
    
        this.onUpload = this.onUpload.bind(this);
        this.onUploadDone = this.onUploadDone.bind(this);

        this.moodleUpload = new MoodleUploadFile();
    }

    render() {       
        let main =
                <InputGroup className="mb-3">
                    <InputText name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange}
                            onKeyDown={this.props.onKeyDown} autoFocus={this.props.autoFocus} autoSelect={this.props.autoSelect} onCommit={this.props.onCommit} disabled={this.props.disabled}
                            size={this.props.size}/>
                    <InputGroup.Append>
                        <BtnUpload id="file-upload" size="btn-sm" accept={this.props.accept} onChange={this.onUpload}/>
                    </InputGroup.Append>
                </InputGroup>
        return (main);
    }   

    onUpload(event){
        this.moodleUpload.onSelectFileToUpload(event, this.onUploadDone);
    }

    onUploadDone(url){
        //if image is succesfully uploaded set image url
        //event.data.element.trigger('propertyChange', [url, that]);
        //update src input
        //$('input[type="text"]', event.data.element).val(url);
        let eventData = {
            target: {name: this.props.name, value: url}                
        };
        if (this.props.onChange){
            this.props.onChange(eventData);
        }
        if (this.props.onCommit){
            this.props.onCommit(eventData);
        }
    }
}
