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

export class InputTextArea extends Component {
    static defaultProps = {
        name: "",
        value: '',
        placeholder: "",
        onChange: null,
        onKeyDown: null,
        autoFocus: false,
        autoSelect: false,
        onCommit: null,
        minHeight: 70,
        maxHeight: 700,
        disabled: false,
        size: ""
    };
    
    static getDerivedStateFromProps(nextProps, prevState){
        // if the data has changed then the component waits until the commit event in order to modify the value coming from props values
        if(prevState.dataChanged){ return null; }

        let nextValue = nextProps.value;
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

        this.state = {dataChanged: false};    
        if (this.props.value){
           this.state.value = this.props.value;
        }

        this.inputRef = React.createRef();
    }

    componentDidMount(){
        if(this.props.autoSelect){
            this.inputRef.current.select();
        }
        this.resize();
    }
    
    render() {       
        let main = <FormControl ref={this.inputRef} autoFocus={this.props.autoFocus} className={"InputText"} name={this.props.name} as="textarea" 
                    value={this.state.value} placeholder={this.props.placeholder} onChange={this.onChange} onBlur={this.onFocusOut} onKeyDown={this.onKeyDown}
                    disabled={this.props.disabled} size={this.props.size}/>
        return (main);
    }

    resize(){
        this.inputRef.current.style.height = "0px";
        let scrollHeight = this.inputRef.current.scrollHeight;
        if (scrollHeight < this.props.minHeight) scrollHeight = this.props.minHeight;
        if (scrollHeight > this.props.maxHeight) scrollHeight = this.props.maxHeight;
        this.inputRef.current.style.height = scrollHeight + "px";
    }
    
    onChange(event){ 
        let val = event.target.value.toString();
        this.setState({value: val, dataChanged: true});
        this.resize();
    }   
    
    onCommit(callback){
        callback = callback || null;
        
       // if(!this.state.dataChanged){ return;}
        let value = this.state.value;
        
        let eventData = {
            target: {name: this.props.name, value: value}                
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
        if(that.props.onKeyDown !== null){
            that.props.onKeyDown(event);
        }

    }
}
