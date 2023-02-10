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
import { Form } from 'react-bootstrap';

export class ComboBox extends Component {
    static defaultProps = {        
        onChange: null,    
        value: "",
        name: "",
        disabled: false,
        multiple: false,
        required: false,
        size: 1,
        placeholder: "",
        options: [],
        style: null,
        selectedIndex: -1,
        className: ""
    };
    
    constructor(props){
        super(props);
        
        this.onChange = this.onChange.bind(this);
    }
    
    render() {     
        //  spread attributes <div {...this.props}>    
        let spreadAttr = {required: this.props.required, multiple: this.props.multiple, disabled: this.props.disabled, size: this.props.size};

        let main = 
            <Form.Control as="select" {...spreadAttr}  onChange={this.onChange} value={this.props.value} style={this.props.style} className={this.props.className}>
                <option  value="">{this.props.placeholder}</option>
                {this.props.options.map(function(item, index){
                    return <option key={index} value={item.value}>{item.text}</option>;
                })}
            </Form.Control>;            
        return (main);
    }   
    
    onChange(event){
        let value = event.target.value || "";
        let selectedIndex = event.target.selectedIndex - 1; // -1 because of the placeholder (first option)
        let text = "";
        let data = null;
        
        if((selectedIndex >= 0) && (selectedIndex < this.props.options.length)){
            data = this.props.options[selectedIndex].data;
            text = this.props.options[selectedIndex].text;
        }

        this.props.onChange({target:{name: this.props.name, value: value, text: text, data: data, index: selectedIndex}});
    }
}
