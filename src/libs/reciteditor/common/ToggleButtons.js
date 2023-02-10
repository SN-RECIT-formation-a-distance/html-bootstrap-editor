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
import { ButtonToolbar, ToggleButtonGroup, ToggleButton as BsToggleButton  } from 'react-bootstrap';

export class ToggleButtons extends Component {
    static defaultProps = {
        name: "",
        defaultValue: [],
        value: "",
        onChange: null,
        type: "checkbox", // checkbox | radio
        options: [], // {value: "", text:"", glyph: ""}
        bsSize: "", // "" | sm | lg
        style: null,
        label: '',
        className: '',
        disabled: false
    };
      
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render() {   
        let main = 
            <ButtonToolbar style={this.props.style} className={this.props.className} data-read-only={(this.props.disabled ? 1 : 0)}>                        
                <ToggleButtonGroup size={this.props.bsSize} type={this.props.type} name={this.props.name} value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.onChange}>                                
                    {this.props.options.map((item, index) => {   
                        let element = 
                            <BsToggleButton key={index} variant={"outline-primary"} value={item.value} disabled={this.props.disabled}>
                                {item.glyph}
                                {item.text}
                            </BsToggleButton>;
                        return (element);
                    })}
                    <span className='text-muted ml-3'>{this.props.label}</span>
                </ToggleButtonGroup>
            </ButtonToolbar>;
        return (main);
    }   
    
    onChange(eventKey){ 
        this.props.onChange({target: {value: eventKey, name: this.props.name}});
    }   
}
