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

 import React from 'react';
import { TextEditorModal } from '../../common/TextEditor';
 import {LayoutBuilder, Canvas, CanvasElement, FloatingMenu, NodeTextEditing, SourceCodeEditor, Assets, HTMLElementData, UtilsHTML, UtilsMoodle, UtilsString} from '../../RecitEditor';

class CanvasState{
    constructor(mainView){
        this.mainView = mainView;

        this.onInit = this.onInit.bind(this);
        this.onSelectElement = this.onSelectElement.bind(this);
        this.onDeleteElement = this.onDeleteElement.bind(this);
        this.onMoveNodeUp = this.onMoveNodeUp.bind(this);
        this.onMoveNodeDown = this.onMoveNodeDown.bind(this);
        this.onCloneNode = this.onCloneNode.bind(this);
        this.onAfterInsertNode = this.onAfterInsertNode.bind(this);
        this.onLoadFrame = this.onLoadFrame.bind(this);
        this.htmlCleaning = this.htmlCleaning.bind(this);
        this.onKey = this.onKey.bind(this);

        this.onLoadFrame();
    }

    onLoadFrame(){} // Abstract method
    onInit(iframe){}
    render(show, selectedElement){}
    onDragEnd(){}
    getData(htmlCleaning){}
    setData(value, selectedElement){}
    onBeforeChange(value, flags){}
    onContentChange(value, flags){}
    onAfterChange(value, flags){}
    onDeleteElement(selectedElement){}
    onMoveNodeUp(selectedElement){}
    onMoveNodeDown(selectedElement){}
    onCloneNode(selectedElement){}
    onAfterInsertNode(elems){}
    onInsertTemplate(position, item){}
    onStartEditingNodeText(selectedElement){}
    onFinishEditingNodeText(html){}
    onKey(e, editingElement){}

    onPanelChange(panels){ 
        return panels;
    }

    onSelectElement(el, selectedElement, panels){ 
        let result = {el: el, panels: panels };
        return result;
    }  

    htmlCleaning(htmlDoc, keepSelectedElement){
        htmlDoc = htmlDoc || null;
        if(htmlDoc === null){
            return;
        }

        // remove the class dropping-zone of all elements
        let items = htmlDoc.querySelectorAll(".dropping-zone, .dropping-zone-hover, [contenteditable], [data-hovering], [data-selected], [draggable]");

        items.forEach(function(item) {
            //item.classList.remove('dropping-zone');
            if(item.classList.contains("dropping-zone")){
                item.remove();
            }
            else if(item.classList.contains("dropping-zone-hover")){
                item.classList.remove('dropping-zone-hover');
            }
            
            item.removeAttribute("data-hovering");
            item.removeAttribute("contenteditable");
            if (!keepSelectedElement){
                item.removeAttribute("data-selected");
                item.removeAttribute("draggable");
            }
        });
    }

    getStyle(width){
        let style = {width: width || this.mainView.props.device.width, height: this.mainView.props.device.height};

        if(this.mainView.props.device.scale < 1){
            style.transform = `scale(${this.mainView.props.device.scale})`;
            style.transformOrigin = "0 0";
        } 

        return style;
    }
}

export class SourceCodeDesignerState extends CanvasState{
    constructor(mainView, designerState, sourceCodeState){
        super(mainView)
        this.designer = designerState;
        this.sourceCode = sourceCodeState;
    }

    render(view, selectedElement){
        let col = "";
        let sourceCodeWidth = null;
        let sourceCodeHeight = null;
        if (view == 'sourceCodeDesigner'){
            col = "col-md-6";
            sourceCodeWidth = "100%";
            sourceCodeHeight = "95vh";
        }

        let main = <>
            <div className={col}>
                {this.designer.render((view === 'designer' || view == 'sourceCodeDesigner'), selectedElement)}
            </div>
            <div className={col}>
                {this.sourceCode.render((view === 'sourceCode' || view == 'sourceCodeDesigner'), selectedElement, sourceCodeWidth, sourceCodeHeight)}
            </div>
           </>

        return main;
    }
    
    onContentChange(val, origin){
        if (origin == 'designer'){
            this.sourceCode.setData(val);
        }else if (origin == 'sourceCode'){
            this.designer.setData(val)
        }
    }

    getData(){
        return this.designer.getData(true);
    }

    setData(data, selectedElement){
        this.designer.setData(data, selectedElement);
        this.sourceCode.setData(data, selectedElement);
        return true;
    }

    onDragEnd(){
        this.designer.onDragEnd();
    }

    onSelectElement(el, selectedElement, panels){
        this.sourceCode.onSelectElement(el, selectedElement, panels);
        let result = this.designer.onSelectElement(el, selectedElement, panels);
        return result
    }

    onDeleteElement(el){
        this.designer.onDeleteElement(el);
    }

    onMoveNodeUp(el){
        this.designer.onMoveNodeUp(el);
    }

    onKey(e, selectedElement){
        this.sourceCode.onKey(e, selectedElement);
        this.designer.onKey(e, selectedElement);
    }

    onMoveNodeDown(el){
        this.designer.onMoveNodeDown(el);
    }

    onCloneNode(el){
        this.designer.onCloneNode(el);
    }

    onAfterInsertNode(elems){
        this.designer.onAfterInsertNode(elems);
    }

    onStartEditingNodeText(el){
        this.designer.onStartEditingNodeText(el);
    }

    onFinishEditingNodeText(html){
        this.designer.onFinishEditingNodeText(html)
    }

    onPanelChange(panels){
        return this.designer.onPanelChange(panels);
    }
}

export class DesignerState extends CanvasState{
    constructor(mainView, historyManager){
        super(mainView);

        this.iFrame = null;
        this.window = null;
        this.historyManager = historyManager;
        this.onKey = this.onKey.bind(this);
        this.loadCount = 0;
        this.editingElement = null;
    }

    onLoadFrame(){
        let iframe = window.document.getElementById("designer-canvas");

        if(iframe){
            this.onInit(iframe);
            return;
        }
        else{
            console.log("Loading designer iframe...");

            if(this.loadCount > 20){
                console.log("Exiting because it was impossible to load the designer canvas.");
                return;
            }

            this.loadCount++;
            setTimeout(this.onLoadFrame, 500);
        }
    }

    onInit(iframe){
        this.iFrame = iframe;
        this.window = this.iFrame.contentWindow || this.iFrame.contentDocument;
        let head = this.window.document.head;
        let doc = this.window.document;
        let body = this.window.document.body;
        let style = UtilsMoodle.getThemeMoodleCssRules();
        let el = null;
        
        if (style.url.length > 0){
            for (let url of style.url){            
                el = doc.createElement("link");
                el.setAttribute("href", url);
                el.setAttribute("rel", "stylesheet");
                head.appendChild(el);
            }
        }

        if (style.rules.length > 0){
            el = doc.createElement("style");
            el.setAttribute("title", "theme-moodle");
            el.innerHTML = UtilsHTML.cssRules2Str(style.rules);
            head.appendChild(el);
        }

        el = doc.createElement("link");
		el.setAttribute("href", `${Assets.CanvasDesignerCSS}`);
		el.setAttribute("rel", "stylesheet");
		head.appendChild(el);

        // pure JS
        CanvasElement.create(body, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);

        // React JS
        //body.appendChild(doc.firstChild);        

        body.onkeydown = this.mainView.onKey;
        body.ondrag = this.mainView.onDragStart;
    }

    render(show, selectedElement, width){
        let posCanvas = (this.iFrame === null ? null : this.iFrame.getBoundingClientRect());        
 
        let main = 
            <Canvas style={{display: (show ? 'flex' : 'none') }}>
                <iframe id="designer-canvas" className="canvas" style={this.getStyle(width)}></iframe>
                <FloatingMenu posCanvas={posCanvas} selectedElement={selectedElement} onDragElement={this.mainView.onDragStart} onEdit={this.mainView.onStartEditingNodeText}
                            onDeleteElement={this.mainView.onDeleteElement} onMoveNodeUp={this.mainView.onMoveNodeUp} onMoveNodeDown={this.mainView.onMoveNodeDown} 
                             onCloneNode={this.mainView.onCloneNode} onSaveTemplate={this.mainView.onSaveTemplate} device={this.mainView.props.device} />
                {this.editingElement && <TextEditorModal onClose={() => this.mainView.onFinishEditingNodeText(null)} onSave={(html) => this.mainView.onFinishEditingNodeText(html)} element={this.editingElement}/>}
            </Canvas>;

        return main; 
    }

    onSelectElement(el, selectedElement, panels){
        let result = {el: el, panels: panels};

        //We allow body to be selected for save template button
        //if((result.el !== null) && (result.el.tagName.toLowerCase() === 'body')){ 
            //result.el = null;
        //}

        // if the selected element receives another click then it deselects it
        if(Object.is(result.el, selectedElement)){
            this.htmlCleaning(this.window.document);
            
            //result.panels.components = 1; // show templates panel
            //result.panels.properties = 0; // hide properties panel
            result.el = null;
        }
        else{
            this.htmlCleaning(this.window.document);

            //result.panels.components = 0; // hide templates panel
            result.panels.properties = (result.panels.properties === 0 ? 3 : result.panels.properties); // if no properties panel is visible then it displays the basic panel

            if(result.el !== null){
                if(result.el.getAttribute('data-selected') === '1'){
                    result.el.removeAttribute('data-selected');
                    result.el.removeAttribute('draggable');
                }
                else{
                    result.el.setAttribute('data-selected', '1');
                    result.el.setAttribute('draggable', 'true');
    
                    let elClass = HTMLElementData.getElementClass(null, result.el);
                    if (elClass && elClass.onSelect){
                        elClass.onSelect(result.el);
                    }
                    if (elClass && elClass.collapsePanel){
                        result.panels.components = elClass.collapsePanel.components;
                        result.panels.properties = elClass.collapsePanel.properties;
                        result.panels.treeView = elClass.collapsePanel.treeView;
                    }
                }
            }
    
        }

        return result;
    }

    onPanelChange(panels){
        panels.components = 1;
        panels.properties = 0;
        panels.treeView = 1;
        
        return panels;
    }

    onBeforeChange(){
        if (this.historyManager){
            this.historyManager.onContentChange(this.getData());
        }
    }

    onAfterChange(){
        this.mainView.onContentChange(this.getData(), 'designer');
    }
    
    onDragEnd(){
        this.onBeforeChange();
        this.htmlCleaning(this.window.document, true);
        this.onAfterChange();
    }

    onDeleteElement(el){
        if(!el){ return; } // Element does not exist
        if(el.isSameNode(this.window.document.body)){ return; }

        this.onBeforeChange();
        el.remove();
        this.onAfterChange();
    }
    
    onMoveNodeUp(el){
        if(el.isSameNode(this.window.document.body)){ return; }

        let parent = el.parentElement;

        this.onBeforeChange()
        if(el.isSameNode(parent.firstElementChild)){
            if(!parent.isSameNode(this.window.document.body)){
                parent.parentElement.insertBefore(el, parent);
            }
        }
        else{
            parent.insertBefore(el, el.previousElementSibling);
        }
        
        this.onAfterChange();
    }

    onMoveNodeDown(el){
        if(el.isSameNode(this.window.document.body)){ return; }

        let parent = el.parentElement;
        this.onBeforeChange()
        if(el.isSameNode(parent.lastElementChild)){
            if(!parent.isSameNode(this.window.document.body)){
                parent.parentElement.insertBefore(el, parent.nextElementSibling);
            }
        }
        else{
            parent.insertBefore(el.nextElementSibling, el);
        }

        this.onAfterChange();
    }

    onCloneNode(selectedElement){
        if(selectedElement.isSameNode(this.window.document.body)){ return; }

        this.onBeforeChange();
        let parent = selectedElement.parentElement;
        let el = selectedElement.cloneNode(true)
        el.removeAttribute("data-selected");
        el.removeAttribute("contenteditable");
        parent.appendChild(el);
        CanvasElement.create(el, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
        this.onAfterChange();
    }

    onAfterInsertNode(elems){
        this.onBeforeChange();

        for(let el of elems){
            CanvasElement.create(el, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
        }
        this.onAfterChange();
    }

    onInsertTemplate(position, item){
        let body = this.getBody();
        if (position == 'top'){
            body.insertAdjacentHTML('afterbegin', item);
        }else{  
            body.insertAdjacentHTML('beforeend', item);
        }
        this.onAfterInsertNode(body.children);
    }
   
    getData(htmlCleaning){
        if(this.window === null){ return null; }

        if(htmlCleaning){
            this.htmlCleaning(this.window.document);
        }

        return this.window.document.body.innerHTML;
    }

    getBody(){
        if(this.window === null){ return null; }

        return this.window.document.body;
    }

    setData(value, selectedElement){
        let that = this;

        let loading = function(){
            if(that.window){
                let body = that.window.document.body;
                body.innerHTML = value;
                CanvasElement.create(body, that.mainView.onSelectElement, that.mainView.onDrop, that.mainView.onStartEditingNodeText);
            }
            else{
                console.log("Loading designer canvas...");
                setTimeout(loading, 500);
            }
        }
        setTimeout(loading, 500);
    }

    onStartEditingNodeText(selectedElement){ 
        if (TextEditorModal.isTagEditable(selectedElement.tagName)){
            this.editingElement = selectedElement;
        }else{
            let that = this;     
        
            let setCaretToEnd = function(el) {
                el.focus();
                
                let range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(true);
                let sel = that.window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            
                // set scroll to the end if multiline
                el.scrollTop = el.scrollHeight; 
            }    
            if(selectedElement === null){
                return;
            }
            selectedElement.setAttribute('contenteditable', 'true');
            setCaretToEnd(selectedElement);
        }
    }

    onFinishEditingNodeText(el){
        if (el){
            CanvasElement.create(el, this.mainView.onSelectElement, this.mainView.onDrop, this.mainView.onStartEditingNodeText);
        }
        this.editingElement = null;
        this.onAfterChange();
    }

    onKey(e, editingElement) {
        /*if (e.keyCode === 46) {//del
            if (!editingElement || editingElement.getAttribute('contenteditable') != 'true') {
                this.mainView.onDeleteElement(null);
            }
        }*/

        if (e.ctrlKey && e.keyCode == 90){//ctrl z
            this.historyManager.onUndo(this.mainView.setData, this.mainView.getData());
        }
        
        if (!e.shiftKey && e.keyCode == 13){//return
            if (editingElement && editingElement.getAttribute('contenteditable') == 'true') {
                // prevent the default behaviour of return key pressed
                e.preventDefault()
                return false;
            }
        }
    }
}

export class SourceCodeState extends CanvasState{
    constructor(mainView){
        super(mainView);

        this.onChange = this.onChange.bind(this);

        this.queryStr = "";
        this.data = "";
    }

    render(show, selectedElement, width, height){
        let style = {
            width: width || Math.min(this.mainView.props.device.width, window.innerWidth - LayoutBuilder.properties.leftPanel.width), 
            height: height || Math.min(this.mainView.props.device.height, window.innerHeight - LayoutBuilder.properties.topNavBar.height), 
            display: (show ? 'block' : 'none'),
            overflowY: 'auto'
        };
        
        return <SourceCodeEditor queryStr={this.queryStr} style={style} value={this.data} onChange={this.onChange}/>
    }

    onChange(value){
        this.data = value;
        this.mainView.onContentChange(value, 'sourceCode');
    }

    htmlCleaning(){
        let htmlDoc = new DOMParser().parseFromString(this.data, "text/html");
        super.htmlCleaning(htmlDoc);
        return htmlDoc.body.innerHTML;
    }

    getData(htmlCleaning){
        let result = this.data;

        if(htmlCleaning){
            result = this.htmlCleaning();
        }
        
        return UtilsHTML.removeTagId(result);
    }

    setData(value, selectedElement){
        selectedElement = selectedElement || null;

        if(selectedElement !== null){
            this.queryStr = selectedElement.getAttribute("data-tag-id") || "";
        }        
        
        this.data = UtilsHTML.assignTagId(value);
    }

    onSelectElement(el, selectedElement, panels){ 
        let result = {el: el, panels: panels };

        if(el === null){return result;}

        this.queryStr = el.getAttribute("data-tag-id") || "";
        
        return result;
    }

    onPanelChange(panels){ 
        panels.components = 0;
        panels.properties = 0;
        panels.treeView = 1;
        
        return panels;
    }
}

export class PreviewState extends CanvasState{
    constructor(mainView){
        super(mainView);

        this.iFrame = null;
        this.loadCount = 0
    }

    onLoadFrame(){
        let iframe = window.document.getElementById("preview-canvas");

        if(iframe){
            this.onInit(iframe);
            return;
        }
        else{
            console.log("Loading preview iframe...");

            if(this.loadCount > 20){
                console.log("Exiting because it was impossible to load the preview canvas.");
                return;
            }
            this.loadCount++;

            setTimeout(this.onLoadFrame, 500);
        }
    }

    onInit(iframe){
        this.iFrame =  iframe.contentWindow || iframe.contentDocument;
        let head = this.iFrame.document.head;
        let doc = this.iFrame.document;
        let style = UtilsMoodle.getThemeMoodleCssRules();
        let el = null

        if (style.rules.length > 0){
            el = doc.createElement("style");
            el.innerHTML = UtilsHTML.cssRules2Str(style.rules);
            head.appendChild(el);
        }

        if (style.url.length > 0){
            for (let url of style.url){            
                el = doc.createElement("link");
                el.setAttribute("href", url);
                el.setAttribute("rel", "stylesheet");
                head.appendChild(el);
            }
        }

        el = doc.createElement("link");
		el.setAttribute("href", `${Assets.CanvasCSS}`);
		el.setAttribute("rel", "stylesheet");
		head.appendChild(el);

        el = doc.createElement("script");
		el.setAttribute("src", `${Assets.JqueryJS}`);
		el.setAttribute("type", "text/javascript");
		head.appendChild(el);

        let bsJs = doc.createElement("script");
		bsJs.setAttribute("src", `${Assets.BootstrapJS}`);
		bsJs.setAttribute("type", "text/javascript");
        el.onload = () => head.appendChild(bsJs); //Wait until jQuery is loaded
        
        this.iFrame.addEventListener("click", function(e) {//Prevent links from working on preview
            if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON'){
                if((e.target.host.toString().length > 0) && (e.target.host !== window.location.host)){
                    e.preventDefault();
                }
            }
        });
    }

    render(show, selectedElement){
        let main = 
            <Canvas style={{display: (show ? 'flex' : 'none') }}> 
                <iframe id="preview-canvas" className="canvas" style={this.getStyle()}></iframe>
            </Canvas>;
        return main;
    }

    onSelectElement(el, selectedElement, panels){
        let result = {el: null, panels: panels};
        return result;
    }

    htmlCleaning(){
        super.htmlCleaning(this.iFrame.document);
        
        //Clean up popups before returning html
        let popup = this.iFrame.document.body.querySelectorAll('.r_popup-overlay');
        for (let el of popup){
            el.remove();
        }
    }

    getData(htmlCleaning){
        this.htmlCleaning();
        return this.iFrame.document.body.innerHTML;
    }

    setData(value, selectedElement){
        let body = this.iFrame.document.body;
        body.innerHTML = value;
    }

    onPanelChange(panels){
        panels.components = 0;
        panels.properties = 0;
        panels.treeView = 0;

        return panels;
    }
}