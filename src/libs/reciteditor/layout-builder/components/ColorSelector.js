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
import { Button } from 'react-bootstrap';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {UtilsMoodle} from '../../RecitEditor';

export class ColorSelector extends Component {
    static defaultProps = {
        name: "",
        value: "", 
        options: [],
        flags: {},
        onChange: null,
    };
    
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.options = this.props.options;

        // set Bootstrap variant colors according to the theme
        if (this.props.flags && this.props.flags.fetchFromTheme){
            let cssRules = UtilsMoodle.getThemeMoodleCssRules(true);

            for (let c of cssRules.rules){
                for (let i in this.options){
                    let css = '.' + this.props.flags.prefix+this.options[i].value;
                    if (c.selectorText === css){
                        if(this.props.flags.prefix === 'text-'){
                            this.options[i].style = {backgroundColor: c.style.color, borderColor: c.style.color};                            
                        }
                        else{
                            this.options[i].style = {backgroundColor: c.style.backgroundColor, borderColor: c.style.backgroundColor};
                        }
                    }
                }
            }
        }
    }
    
    render() {
        let that = this;
        let main = 
            <div className="color-selector">
                {this.options.map(function(item, index){
                    let result = null;
                    let props = {key:index,  onClick:() => that.onChange(item.value), size:'sm', title:item.text, className:'m-1', style: item.style};
                    let child = that.props.value === item.value && <FontAwesomeIcon  icon={faCheck} />;

                    if(item.value === "white"){
                        result = <Button {...props} variant="light" className="bg-white" >{child}</Button>
                    }
                    else{
                        result =<Button {...props} variant={item.value}>{child}</Button>
                    }

                    return result;
                })}
            </div>

        return (main);
    }   

    onChange(variant){
        let event = {target: {name: this.props.name, value: (this.props.value === variant ? "" : variant)}}

        this.props.onChange(event);
    }
}
