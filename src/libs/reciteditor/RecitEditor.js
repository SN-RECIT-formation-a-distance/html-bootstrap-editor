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
import { WordProcessor } from './word-processor/WordProcessor';
import { LayoutBuilder } from './layout-builder/LayoutBuilder';
import { Options } from '../../Options';
import "./assets/css/components.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FeedbackCtrl, VisualFeedback } from './common/Feedback';
import { IWrapper, UtilsHTML } from './common/Utils';

//////////////////////////////////////////////////
// Note: the "export *" will only export the classes marked with "export" in their definition
//////////////////////////////////////////////////
export * from './assets/Assets';
export * from './common/Utils';
export * from './common/ToggleButtons';
export * from './common/InputNumber';
export * from './common/InputText';
export * from './common/InputTextArea';
export * from './common/ComboBox';
export * from './common/InputColor';
export * from './common/ImageSrc';
export * from './common/MultipleSelect';
export * from './common/MinValueMax';
export * from './common/SourceCodeEditor';
export * from './common/IconSelector';
export * from './common/BtnUpload';
export * from './common/ButtonsBar';
export * from './common/Iframe';
export * from './layout-builder/components/TableActions'
export * from './layout-builder/components/LayoutSpacingEditor';
export * from './layout-builder/components/LayoutSpacing';
export * from './layout-builder/components/ColorSelector';
export * from './layout-builder/components/TreeView';
export * from './layout-builder/components/Canvas';
export * from './layout-builder/components/CanvasState';
export * from './layout-builder/ctrl/ComponentsCollection';
export * from './layout-builder/ctrl/Templates';
export * from './layout-builder/ctrl/HistoryManager';
export * from './layout-builder/ctrl/HTMLElementData';
export * from './layout-builder/ctrl/HTMLElements';
export * from './layout-builder/ctrl/HTMLProperties';
export * from './layout-builder/LayoutBuilder';

export const $glVars = {
    feedback: new FeedbackCtrl(),
    cssRules: [],
    recitEditor: null
}

export class RecitEditor extends Component{
    static defaultProps = {
        name: "",
        builder: "layout",
        wrapper: null,
        options: {wordProcessor: false, layoutBuilder: true}
    };

    constructor(props){
        super(props);

        this.onSelectBuilder = this.onSelectBuilder.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSaveAndClose = this.onSaveAndClose.bind(this);

        this.state = {builder: props.builder};

        // the content is not in the state because we don't want to refresh the component every time the user types something. This moves the caret to the beginning of the content.
        IWrapper.wrapper = props.wrapper;
        this.mainViewRef = React.createRef();
        $glVars.recitEditor = this;
        
        let cssFiles = IWrapper.getThemeCssRules().urlList.concat(IWrapper.getAdditionalHTMLHead().css);
        UtilsHTML.getStylesheetRules(cssFiles).then((rules) => {
            $glVars.cssRules = rules;
        });
    }

    componentDidMount(){
        this.content = IWrapper.getContent();
        window.document.title = Options.appTitle(); 
        $glVars.feedback.addObserver("App", () => this.onFeedback()); 
        this.forceUpdate();
    }

	render(){
		let main = <div className="htmlbootstrapeditor">
                {this.state.builder === "word" ? 
                    <WordProcessor content={this.content} onSelectBuilder={this.onSelectBuilder} onChange={this.onChange} options={this.props.options}/> 
                    : 
                    <LayoutBuilder ref={this.mainViewRef} content={this.content} onSelectBuilder={this.onSelectBuilder} onChange={this.onChange} onSaveAndClose={this.onSaveAndClose} options={this.props.options}/>}
        
            {$glVars.feedback.msg.map((item, index) => {  
                return (<VisualFeedback key={index} id={index} msg={item.msg} type={item.type} title={item.title} timeout={item.timeout}/>);
            })}
        </div>
		return main;
    }

    onScreenshot(){
        return this.mainViewRef.current.onScreenshot()
    }
    
    onChange(content, forceUpdate){
        this.content = content;

        if(forceUpdate){
            this.forceUpdate();
        }
    }

    onFeedback(){
        this.forceUpdate();
    }

    onSelectBuilder(option){
        this.setState({builder: option});
    }

    onSaveAndClose(content){
        IWrapper.setContent(content);
    }
}
