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
import { FormControl } from 'react-bootstrap';

export class InputNumber extends Component {
    static defaultProps = {
        name: "",
        value: 0,
        min: null,
        max: null,
        nbDecimals: 0,
        placeholder: "",
        onChange: null,
        onKeyDown: null,
        autoFocus: false,
        autoSelect: false,
        disabled: false,
        size: ""
    };
    
    static getDerivedStateFromProps(nextProps, prevState){
        // if the data has changed then the component waits until the commit event in order to modify the value coming from props values
        if(prevState.dataChanged){ return null; }

        let nextValue = nextProps.value.toString();
        if(nextValue !== prevState.value){
            return({value: nextValue, dataChanged: false});
        }
        return null;
    }

    constructor(props){
        super(props);
        
        this.onCommit = this.onCommit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        this.state = {value: props.value.toString(), dataChanged: false};    

        this.inputRef = React.createRef();
    }

    componentDidMount(){
        if(this.props.autoSelect){
            this.inputRef.current.select();
        }
    }
    
    render() {       
        let main = <FormControl ref={this.inputRef} autoFocus={this.props.autoFocus} className={"InputNumber"} name={this.props.name} type="text" 
                    value={this.state.value} placeholder={this.props.placeholder} onChange={this.onChange} onBlur={this.onFocusOut} onKeyDown={this.onKeyDown}
                    disabled={this.props.disabled} size={this.props.size}/>
        return (main);
    }   
    
    onChange(event){ 
        this.setState({value: event.target.value.toString(), dataChanged: true});
    }   
    
    onCommit(callback){
        callback = callback || null;
        
       // if(!this.state.dataChanged){ return;}
        let value = this.state.value.replace(",", ".");    

        if(this.props.nbDecimals === 0){
            value = Number.parseInt(value, 10);
        }
        else{
            value = Number.parseFloat(value).toFixed(this.props.nbDecimals);
        }

        if(Number.isNaN(value)){
            value = 0;
        }

        if((this.props.min !== null) && (value < this.props.min)){
            value = this.props.min;
        }

        if((this.props.max !== null) && (value > this.props.max)){
            value = this.props.max;
        }
        
        let eventData = {
            target: {name: this.props.name, value: value}                
        };
        
        this.setState({dataChanged: false}, () => {
            this.props.onChange(eventData);
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
