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
import { FormControl, Container, Row, Col } from 'react-bootstrap';
import { i18n } from '../RecitEditor';

export class MinValueMax extends Component {
    static defaultProps = {
        values: {},
        valueName: 'Value',
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
        
        this.onCommit = this.onCommit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        this.state = {values: {}};    
        if (this.props.values){
            for (let k of ['min','value','max']){
                if (this.props.values[k]){
                    this.state.values[k] = this.props.values[k];
                }else{
                    this.state.values[k] = '';
                }
            }
        }
    }
    
    render() {       
        let main = <Container>
        <Row>
          <Col>{i18n.get_string('min')}<br/><FormControl autoFocus={this.props.autoFocus} className={"InputMinValueMax"} name="min" type="text" 
                    value={this.state.values['min']} placeholder={this.props.placeholder} onChange={this.onChange} onBlur={this.onFocusOut} onKeyDown={this.onKeyDown}
                    disabled={this.props.disabled} size={this.props.size}/></Col>
          <Col>{i18n.get_string('value')}<br/><FormControl autoFocus={this.props.autoFocus} className={"InputMinValueMax"} name="value" type="text" 
                    value={this.state.values['value']} placeholder={this.props.placeholder} onChange={this.onChange} onBlur={this.onFocusOut} onKeyDown={this.onKeyDown}
                    disabled={this.props.disabled} size={this.props.size}/></Col>
          <Col>{i18n.get_string('max')}<br/><FormControl autoFocus={this.props.autoFocus} className={"InputMinValueMax"} name="max" type="text" 
                    value={this.state.values['max']} placeholder={this.props.placeholder} onChange={this.onChange} onBlur={this.onFocusOut} onKeyDown={this.onKeyDown}
                    disabled={this.props.disabled} size={this.props.size}/></Col>
        </Row>
      </Container>;
        return (main);
    }   
    
    onChange(event){
        let values = this.state.values;
        values[event.target.name] = event.target.value;
        this.setState({values: values});
    }   
    
    onCommit(callback){
        callback = callback || null;
        
        let values = this.state.values;
        
        let eventData = {
            target: {name: this.props.valueName, value: values}  
        };
        
        this.setState({dataChanged: false}, () => {
            if (this.props.onChange) this.props.onChange(eventData);
            if (this.props.onCommit) this.props.onCommit(eventData);
            if(callback !== null){callback();};
        });
    }

    onFocusOut(event){
        this.onCommit();
    }

    onKeyDown(event){   
        let that = this;
        // React cannot access the event in an asynchronous way
        // If you want to access the event properties in an asynchronous way, you should call event.persist() on the event
        event.persist();
        let callback = function(){
            if(that.props.onKeyDown !== null){
                that.props.onKeyDown(event);
            }
        }

        switch(event.key){
            case "Enter":
                this.onCommit(callback);
                break;        
            default:
        }        
    }
}
