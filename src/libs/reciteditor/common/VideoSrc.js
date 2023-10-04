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
import { Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSync} from '@fortawesome/free-solid-svg-icons';
import { InputText, Utils, i18n } from '../RecitEditor';

export class VideoSrc extends Component {
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
        size: ""
    };
    
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {       
        let main =
                <InputGroup className="mb-3">
                    <InputText name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange}
                            onKeyDown={this.props.onKeyDown} autoFocus={this.props.autoFocus} autoSelect={this.props.autoSelect} onCommit={this.props.onCommit} disabled={this.props.disabled}
                            size={this.props.size}/>
                    <InputGroup.Append>
                        <Button size='sm' onClick={this.onClick} title={i18n.get_string('youtubeparamrel')}><FontAwesomeIcon icon={faSync}/></Button>
                    </InputGroup.Append>
                </InputGroup>
        return (main);
    }   

    onClick(event){
        let value = Utils.formatVideoURLEmbed(this.props.value);
        
        let eventData = {
            target: {name: this.props.name, value: value}                
        };
        
        if (this.props.onChange){
            this.props.onChange(eventData);
        }
    }
}
