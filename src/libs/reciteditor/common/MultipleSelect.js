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
import { JsNx } from '../RecitEditor';

export class MultipleSelect extends Component{
    static defaultProps = {        
        onChange: null,    
        values: [],
        name: "",
        placeholder: "",
        options: [],
        style: null,
        autoAdd: false,
    };

    constructor(props){
        super(props);

        this.onDataChange = this.onDataChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        this.state = {status: 0, searchStr: ""};
    }

    render(){
        let dataProvider = [... this.props.options];

        if (dataProvider.length == 0){
            dataProvider = [...this.props.values];
        }
        if (this.props.autoAdd){
            if (this.state.searchStr.length > 0 && !dataProvider.includes(this.state.searchStr)){
                dataProvider.push({value:this.state.searchStr, text:this.state.searchStr});
            }
        }
        let that = this;

        let main = 
            <div className='multiple-select' style={this.props.style}>
                <ul className="choices">
                    {that.props.values.map((value, index) => {
                            let row = null;

                            let item = JsNx.getItem(dataProvider, 'value', value.value, null);
                            if(item !== null){
                                row = 
                                    <li key={index} className="item">
                                        <span>{item.text}
                                            <span className="btn-delete" onClick={() => that.onDeleteItem(index)} dangerouslySetInnerHTML={{__html: ' &#10006;'}}></span>
                                        </span>
                                    </li>;
                            }
                            
                            return (row);                                    
                        }
                    )}
                     <li className="search">
                        <input placeholder={this.props.placeholder} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} value={this.state.searchStr}
                                 onKeyDown={this.onKeyDown}/>
                    </li>
                </ul>
                <div className='dropdown-container' data-status={this.state.status}>
                    <ul className='dropdown-list'>
                        {dataProvider.map((item, index) => {
                                let selected = (that.props.values.includes(item.value) ? 1 : 0);
                                let row = <li key={index} data-index={index} data-selected={selected} onClick={() => that.onSelectItem(item.value)}>{item.text}</li>
                                return (row);                                    
                            }
                        )}
                    </ul>
                </div>
            </div>


        return main;
    }

    onChange(event){
        this.setState({searchStr: event.target.value});
    }

    onFocus(event){
        this.setState({status: 1});
    }

    onBlur(event){
        let that = this;
        setTimeout(function(){
                that.setState({status: 0, searchStr: ""});
            }, 300
        );
    }

    onSelectItem(val){
        let values = this.props.values || [];
        
        let item = JsNx.getItem(values, 'value', val, null);
        if (item) return;

        values.push({value:val,text:val});
        
        this.onDataChange();
    }

    onDeleteItem(index){
        let values = this.props.values || [];
        
        values.splice(index, 1);
        
        this.onDataChange();
    }

    onDataChange(){
        let values = [];

        for (let c of this.props.values){
            values.push(c.value)
        }
        let event = {target: {name: this.props.name, value: values}}
        this.props.onChange(event);
    }

    onKeyDown(event) {
        if (event.key === 'Enter'){
            this.onSelectItem(event.target.value);
            this.setState({searchStr: ""});
        }
    }
}