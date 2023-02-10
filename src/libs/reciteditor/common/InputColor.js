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
import { Form, Button } from 'react-bootstrap';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Utils, i18n} from '../RecitEditor';

export class InputColor extends Component {
    static defaultProps = {
        name: "",
        value: '#000000',
        onChange: null,
        disabled: false,
        size: ""
    };
    
    constructor(props){
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.state = {value:this.props.value};
    }
    
    render() {       
        let value = Utils.RGBToHex(this.state.value);

        let main = 
            <div style={{display: "inline-flex", width: '100%'}}>
                <Form.Control size={this.props.size} name={this.props.name} type="color" value={value} 
                                onChange={this.onChange} onBlur={this.onBlur} disabled={this.props.disabled} style={{width: "80px"}}/>
                <Button className="ml-1" size='sm' variant={'primary'} onClick={this.onReset} title={i18n.get_string('deleteformat')}><FontAwesomeIcon icon={faRemoveFormat}/></Button>
            </div>
        return (main);
    }   
    
    onChange(event){ 
        let eventData = {
            target: {name: this.props.name, value: event.target.value}
        };

        this.setState({value:event.target.value});

        if (this.props.onChange){
            this.props.onChange(eventData);
        }
    }
    
    onBlur(event){ 
        let eventData = {
            target: {name: this.props.name, value: this.state.value}
        };

        if (this.props.onBlur){
            this.props.onBlur(eventData);
        }
    }

    onReset(){
        let eventData = {
            target: {name: this.props.name, value: ''}
        };

        this.setState({value:''});

        if (this.props.onChange){
            this.props.onChange(eventData);
        }

        if (this.props.onBlur){ // Fire onBlur too as it's a button, it'll never get fired
            this.props.onBlur(eventData);
        }
    }
}
