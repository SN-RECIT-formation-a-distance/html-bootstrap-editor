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
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { searchConfig } from '@codemirror/search';
import { lintGutter } from '@codemirror/lint';
import { html, htmlCompletion, autoCloseTags } from '@codemirror/lang-html';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
var beautifyingHTML = require("pretty");

export class SourceCodeEditor extends Component{
    static defaultProps = {
        value: "",
        onChange: null,
        queryStr: "",
        style: null
    };

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.setCursor = this.setCursor.bind(this);

        this.state = {data: ""};

        this.codeMirror = React.createRef();
    }

    componentDidUpdate(prevProps, prevState){
        if((prevProps.value !== this.props.value) && (this.props.value.length > 0)){
            let data = beautifyingHTML(this.props.value, {ocd: true});
            this.setState({data: data}, () => this.setCursor(prevProps));
        }
        else{
            this.setCursor(prevProps);
        }
    }

    setCursor(prevProps){
        if((prevProps.queryStr !== this.props.queryStr) && (this.props.queryStr.length > 0) && this.codeMirror){
            let pos = this.state.data.search(`data-tag-id="${this.props.queryStr}"`);
            
            setTimeout(() => {
                this.codeMirror.current.editor.focus();
                try {
                    this.codeMirror.current.view.dispatch({selection: {anchor: pos}});
                    this.codeMirror.current.view.scrollPosIntoView(pos);
                } catch(e){}
            }, 500);

        }
    }

    render(){
        let main = 
            <div style={this.props.style} className="react-codemirror">
                <CodeMirror ref={this.codeMirror} value={this.state.data} theme="dark" extensions={[html(), EditorView.lineWrapping, lintGutter(), htmlCompletion, autoCloseTags, searchConfig({matchCase:false})]} onChange={this.onChange}/>
            </div>;

        return main;
    }

    onChange(value){
        this.setState({data: value});
        if(this.props.onChange){
            this.props.onChange(value);
        }
    }
}