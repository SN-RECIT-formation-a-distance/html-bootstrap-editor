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
import { Button, ButtonToolbar, ButtonGroup, Modal, Form, Dropdown, DropdownButton} from 'react-bootstrap';
import {faFont, faCode, faFileCode, faBold, faItalic, faAlignLeft, faAlignRight, faAlignJustify, faAlignCenter,
        faOutdent, faIndent, faUnderline, faStrikethrough, faListUl, faListOl, faRemoveFormat, faLink, faUnlink, faUndo, faRedo,
        faFillDrip, faHighlighter, faCamera, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ScreenCapture, UtilsHTML,Utils, ImageSrc, i18n} from '../RecitEditor';

export class ButtonsBar extends Component{
    static defaultProps = {
        selection: null,
        history: null,
        flags: null,
        onUndo: null,
        onRedo: null,
        onHighlighter: null,
        onCodeSource: null,
        onMathFormula: null,
        onShowHtmlEditor: null,
        onScreenCapture: null,
        onAddImage: null,
        options: {},
    };

    static Layout = {
        btnNormal: "light",
        btnToggled: "secondary"
    }

    constructor(props){
        super(props);  
        
        this.onAddLink = this.onAddLink.bind(this);
        this.onAddImage = this.onAddImage.bind(this);
        this.onAddImageModal = this.onAddImageModal.bind(this);
        this.onCloseInputLink = this.onCloseInputLink.bind(this);    
        this.onRemoveLink = this.onRemoveLink.bind(this);

        this.applyNumerationTypeset = this.applyNumerationTypeset.bind(this);
        this.applyIndentTypeset = this.applyIndentTypeset.bind(this);
        this.onRemoveTypeset = this.onRemoveTypeset.bind(this);

        this.state = {modalInputLink: false, modalInputImage: false};
    }

    render(){
        let style = {backgroundColor: "#f7f7f7", border: "1px solid #dfdfdf", borderRadius: "4px"};
        let selection = this.props.selection;
        let history = this.props.history;

        let fontSizes = [
            {text: '12', value: '12px'},
            {text: '14', value: '14px'},
            {text: '16', value: '16px'},
            {text: '18', value: '18px'},
            {text: '20', value: '20px'},
            {text: '25', value: '25px'},
            {text: '30', value: '30px'},
            {text: '35', value: '35px'},
            {text: '40', value: '40px'},
            {text: '50', value: '50px'},
            {text: '60', value: '60px'},
            {text: '70', value: '70px'}
        ];

        let main = 
        <div style={{backgroundColor: style.backgroundColor, minHeight: 50, padding: ".5rem"}}>
            <ButtonToolbar>
                <ButtonGroup className="mr-2 mb-2" size="sm" style={{border: style.border, borderRadius: style.borderRadius}}>
                    {this.props.options.layoutBuilder && <Button variant={ButtonsBar.Layout.btnNormal} onClick={this.props.onShowHtmlEditor}><FontAwesomeIcon icon={faFileCode} title={i18n.get_string('returntohtmleditor')}/></Button>}
                    <Button variant={ButtonsBar.Layout.btnNormal} onClick={this.props.onCodeSource}><FontAwesomeIcon icon={faCode} title={i18n.get_string('htmleditor')}/></Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm" style={{border: style.border, borderRadius: style.borderRadius}}>
                    <DropdownSetCssProp selection={selection} cssProp="font-size" defaultValue={"16px"} dataProvider={fontSizes}  />
                    <BtnSetCssProp selection={selection} cssProp="font-weight" defaultValue="normal" value="bold"  icon={faBold}  title={i18n.get_string('bold')}/>
                    <BtnSetCssProp selection={selection} cssProp="font-style" defaultValue="normal" value="italic" icon={faItalic}  title={i18n.get_string('italic')}/>
                    <BtnSetCssProp selection={selection} cssProp="text-decoration" defaultValue="normal" value="underline" icon={faUnderline}  title={i18n.get_string('underline')}/>
                    <BtnSetCssProp selection={selection} cssProp="text-decoration" defaultValue="normal" value="line-through" icon={faStrikethrough}  title={i18n.get_string('strikethrough')}/>
                    <BtnUnsetCssProp selection={selection} cssProp={["fontSize","fontWeight","fontStyle","textDecoration"]} icon={faRemoveFormat} defaultValue=""   title={i18n.get_string('removeformat')}/>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm" style={{border: style.border, borderRadius: style.borderRadius}}>
                    <BtnColorPicker selection={selection} cssProp="backgroundColor" icon={faFillDrip} defaultValue="#FFFFFF"   title={i18n.get_string('bgcolor')}/>
                    <BtnUnsetCssProp selection={selection} cssProp={["backgroundColor"]} icon={faRemoveFormat} defaultValue="#FFFFFF"  title={i18n.get_string('removebgcolor')}/>
                    <BtnColorPicker selection={selection} cssProp="color" icon={faFont} defaultValue="#000000"  title={i18n.get_string('fontcolor')}/>
                    <BtnUnsetCssProp selection={selection} cssProp={["color"]} icon={faRemoveFormat} defaultValue="#000000"   title={i18n.get_string('removefontcolor')}/>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm" style={{border: style.border, borderRadius: style.borderRadius}} >
                    <Button variant={ButtonsBar.Layout.btnNormal} onClick={() => this.applyNumerationTypeset("ul")}><FontAwesomeIcon icon={faListUl} title={i18n.get_string('list')}/></Button>
                    <Button  variant={ButtonsBar.Layout.btnNormal} onClick={() => this.applyNumerationTypeset("ol")}><FontAwesomeIcon icon={faListOl} title={i18n.get_string('numberedlist')}/></Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm"  style={{border: style.border, borderRadius: style.borderRadius}}>
                    <BtnAlignment selection={selection} cssProp="left" icon={faAlignLeft}   title={i18n.get_string('alignleft')}/>
                    <BtnAlignment selection={selection} cssProp="center" icon={faAlignCenter}  title={i18n.get_string('aligncenter')}/>
                    <BtnAlignment selection={selection} cssProp="right" icon={faAlignRight}  title={i18n.get_string('alignright')}/>
                    <BtnAlignment selection={selection} cssProp="justify" icon={faAlignJustify}  title={i18n.get_string('justify')}/>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm"  style={{border: style.border, borderRadius: style.borderRadius}}>
                    <Button variant={ButtonsBar.Layout.btnNormal} onClick={() => this.applyIndentTypeset("outdent")}  title={i18n.get_string('outdent')}><FontAwesomeIcon icon={faOutdent}/></Button>
                    <Button  variant={ButtonsBar.Layout.btnNormal} onClick={() => this.applyIndentTypeset("indent")}  title={i18n.get_string('indent')}><FontAwesomeIcon icon={faIndent}/></Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm"  style={{border: style.border, borderRadius: style.borderRadius}}>
                    <Button variant={ButtonsBar.Layout.btnNormal} onClick={this.onAddLink} title={i18n.get_string('link')}><FontAwesomeIcon icon={faLink}/></Button>
                    <Button  variant={ButtonsBar.Layout.btnNormal} onClick={this.onRemoveLink} title={i18n.get_string('removelink')}><FontAwesomeIcon icon={faUnlink}/></Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm"  style={{border: style.border, borderRadius: style.borderRadius}}>
                    <Button variant={ButtonsBar.Layout.btnNormal} onClick={this.props.onUndo} disabled={history.undo.length === 0} title={i18n.get_string('undo')}><FontAwesomeIcon icon={faUndo}/></Button>
                    <Button  variant={ButtonsBar.Layout.btnNormal} onClick={this.props.onRedo}  disabled={history.redo.length === 0} title={i18n.get_string('redo')}><FontAwesomeIcon icon={faRedo}/></Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm"  style={{border: style.border, borderRadius: style.borderRadius}}>
                    <Button variant={(this.props.flags.highlighter ? 'warning' : ButtonsBar.Layout.btnNormal)} onClick={this.props.onHighlighter} title={i18n.get_string('highlighttool')}><FontAwesomeIcon icon={faHighlighter}/></Button>
                    <Button variant={(this.props.flags.mathFormula ? 'warning' : ButtonsBar.Layout.btnNormal)} onClick={this.props.onMathFormula} title={i18n.get_string('math')}><i><b>f(x)</b></i></Button>
                    <Button variant={(this.props.flags.mathFormula ? 'warning' : ButtonsBar.Layout.btnNormal)} id="btn-addimg" onClick={() => this.onAddImageModal(true)} title={i18n.get_string('addimage')}><FontAwesomeIcon icon={faImage}/></Button>
                    <ScreenCapture onEndCapture={this.props.onScreenCapture}>
                        {({ onStartCapture }) => (
                            <Button variant={ButtonsBar.Layout.btnNormal}  onClick={onStartCapture} title={i18n.get_string('screenshot')}><FontAwesomeIcon icon={faCamera}/></Button>
                        )}
                    </ScreenCapture>
                </ButtonGroup>
                <ButtonGroup className="mr-2 mb-2" size="sm"  style={{border: style.border, borderRadius: style.borderRadius}}>
                    <Button variant={ButtonsBar.Layout.btnNormal} onClick={this.onRemoveTypeset} title={i18n.get_string('removeformat')}><FontAwesomeIcon icon={faRemoveFormat}/></Button>
                </ButtonGroup>
            </ButtonToolbar> 
            {this.state.modalInputLink && <InputLink selection={this.props.selection} onClose={this.onCloseInputLink}/>}
            {this.state.modalInputImage && <Modal key="2" show={this.state.modalInputImage} onHide={() => this.onAddImageModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{i18n.get_string('addimage')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageSrc name="Image" value="" placeholder={i18n.get_string('imageurl')} size="sm" onCommit={this.onAddImage} /> 
                </Modal.Body>
            </Modal>}
        </div>;

        return main;
    }

    onAddImageModal(toggle){
        document.getElementById('btn-addimg').blur(); //Unselect the button as popup will reopen when pressing enter
        this.setState({modalInputImage: toggle});
    }

    onAddImage(event){
        this.props.onAddImage(event.target.value);
        this.onAddImageModal(false);
    }

    applyNumerationTypeset(option){
        let sel = this.props.selection;
        
        if(sel === null || !sel.isSelection) return;

        let newNode = document.createElement(option);
        let li = document.createElement("li");
        newNode.appendChild(li);
        li.appendChild(sel.range.extractContents());
        sel.range.insertNode(newNode);
    }    

    applyIndentTypeset(option){
        let sel = this.props.selection;
        
        if(sel === null){ return; }

        // if there is no text selected then it quits
        if(sel.sel.isCollapsed){ return; }

        if(option === "indent"){
            let newNode = document.createElement("div");
            newNode.appendChild(sel.range.extractContents());
            newNode.style.paddingLeft = "30px";
            newNode.setAttribute("data-indent", "1");
            sel.range.insertNode(newNode);
        }
        else{
            //let node = (sel.anchorNode instanceof Element ? sel.anchorNode :  sel.anchorNode.parentElement);
            if(sel.node.getAttribute("data-indent") === "1"){
                sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
                sel.node.remove();
            } 
        }
    }
    
    onAddLink(){
        let sel = this.props.selection;

        if(sel === null || sel.node === null || !sel.isSelection){ return; }

        this.setState({modalInputLink: true});
    }

    onCloseInputLink(){
        this.setState({modalInputLink: false});
    }

    onRemoveLink(){
        let sel = this.props.selection;
        
        if(sel === null){ return; }

        if(sel.node instanceof HTMLAnchorElement){
            sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
            sel.node.remove();
        }
    }

    onRemoveTypeset(){
        let sel = this.props.selection;
        
        if(sel === null){ return; }

        // if there is no text selected then it quits
        if(sel.sel.isCollapsed){ return; }

        sel.node.style.textAlign = "";
        sel.node.style.backgroundColor = "";
        sel.node.style.color = "";
        sel.node.style.fontSize = '';
        sel.node.style.fontWeight = '';
        sel.node.style.textDecoration = '';

        // && (sel.sel.extentOffset - sel.sel.anchorOffset > 0)
        if(!sel.isNodeRoot){            
            sel.parentNode.insertAdjacentHTML("beforeend", sel.node.innerHTML);
            sel.node.remove();    
        }
    }
}

class DropdownSetCssProp extends Component{
    static defaultProps = {
        selection: null,
        icon: null,
        cssProp: "",
        defaultValue: "",
        dataProvider: "",
        title: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(){
        let value = this.getCurrentValue();

        let main = 
            <DropdownButton variant={ButtonsBar.Layout.btnNormal} as={ButtonGroup} title={value}>
                {this.props.dataProvider.map((item, index) =>
                    <Dropdown.Item key={index} onClick={(event) => this.onClick(event, item)}>{item.text}</Dropdown.Item>
                )}
                
            </DropdownButton>

        return main;
            
    }
  
    getCurrentValue(){
        let sel = this.props.selection;
        if(sel === null){ 
            return this.props.defaultValue; 
        }

        let currentValue = sel.node.style[this.props.cssProp] || "";

        currentValue = (currentValue.length === 0 ? this.props.defaultValue : currentValue);

        return currentValue;
    }

    onClick(event, item){
        let sel = this.props.selection;
        
        if(sel === null){ return; }

        // if there is no text selected then it quits
        if(sel.sel.isCollapsed){ return; }

        let prop = this.props.cssProp;
        
        if(sel.isNodeRoot){
            let newNode = document.createElement("span");
            newNode.appendChild(sel.range.extractContents());
            newNode.style[prop] = item.value;
            sel.range.insertNode(newNode);
        }
        else if(sel.subSelection){
            let newNode = document.createElement("span");
            newNode.appendChild(sel.range.extractContents());
            newNode.style[prop] = item.value;
            sel.range.insertNode(newNode);
        }
        else{
            //sel.node.outerHTML = sel.node.innerHTML;
            sel.node.style[prop] = item.value;
        }
    }
}

export class BtnSetCssProp extends Component{
    static defaultProps = {
        selection: null,
        window: null,
        icon: null,
        cssProp: "",
        defaultValue: "",
        tagName: "",
        value: "",
        onClick: null,
        title: "",
        variant: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(){
        let variant = (this.getCurrentValue() === this.props.value ? ButtonsBar.Layout.btnToggled : ButtonsBar.Layout.btnNormal );

        if(this.props.variant.length > 0){
            variant = this.props.variant;
        }

        let main = 
            <Button variant={variant} title={this.props.title} onClick={this.onClick}>
                <FontAwesomeIcon icon={this.props.icon}/>{" "}
            </Button>;

        return main;
            
    }
  
    getCurrentValue(){
        let sel = this.props.selection || UtilsHTML.getCurrentSelection(null, null, this.props.window);
        if(sel === null){ 
            return this.props.defaultValue; 
        }

        if (this.props.tagName.length > 0){
            let tag = sel.node.tagName;
            if (this.props.tagName.toUpperCase() == tag){
                return this.props.value;
            }

        }else{
            let currentValue = sel.node.style[this.props.cssProp] || "";

            currentValue = (currentValue.length === 0 ? this.props.defaultValue : currentValue);

            return currentValue;
        }
    }

    getValue(){
        return (this.getCurrentValue() === this.props.defaultValue ? this.props.value : this.props.defaultValue);
    }

    onClick(event){
        let sel = this.props.selection || UtilsHTML.getCurrentSelection(null, null, this.props.window);
        
        if(sel === null || !sel.isSelection){ return; }
        
        // if there is no text selected then it quits
        if(sel.sel.isCollapsed){ return; }

        let prop = this.props.cssProp;

        
        let selection = sel.sel;
        if (selection.rangeCount) {
            let range = selection.getRangeAt(0);
            let clonedSelection = range.cloneContents();
            let dummydiv = document.createElement('div'); //We have to create a dummy div to get the selected document fragment, fragment doesnt have innerhtml prop
            dummydiv.appendChild(clonedSelection);
            let text = dummydiv.innerHTML;
            let parent = range.startContainer.parentNode;
            let offset = Utils.getCaretCharacterOffsetWithin(parent);
            
            if (this.props.tagName.length > 0 && this.props.tagName.toUpperCase() != parent.tagName) {//If the prop is a tag name
                let inner = document.createElement(this.props.tagName);
                inner.innerHTML = text;
                parent.innerHTML = Utils.replaceAt(parent.innerHTML, text, inner.outerHTML, offset);
            }else if (text == parent.innerHTML && !parent.style[prop]) {//If the text selectioned is the whole tag, set style on the tag rather than create a span
                parent.style[prop] = this.getValue();
            }else if (range.startOffset > 0 && !parent.style[prop]) {
                let inner = document.createElement("span");
                inner.style[prop] = this.getValue();
                inner.innerHTML = text;
                parent.innerHTML = Utils.replaceAt(parent.innerHTML, text, inner.outerHTML, offset);
            } else if ((parent.style && parent.style[prop]) || this.props.tagName.toUpperCase() == parent.tagName) {//Undo the style
                parent.outerHTML = parent.innerHTML;
            }
        }
        
        if(sel.refreshSelection){
        	sel.refreshSelection()
        }

        if(this.props.onClick){
            this.props.onClick(event, true);
        }
    }
}

class BtnColorPicker extends Component{
    static defaultProps = {
        selection: null,
        icon: null,
        cssProp: "",
        defaultValue: "",
        onClick: null,
        title: ""
    };

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {value:this.props.defaultValue};
    }

    render() {
        let value = this.state.value;

        if((this.props.selection !== null) && (this.props.selection.node !== null)){
            value = this.RGBToHex(this.props.selection.node.style[this.props.cssProp]);
        }

        let main = 
            <Button variant={ButtonsBar.Layout.btnNormal} title={this.props.title}>
                <FontAwesomeIcon icon={this.props.icon}/>{" "}
                <input type="color" onChange={this.onChange} onBlur={this.onBlur} value={value}/>
            </Button>;

        return main;
            
    }

    RGBToHex(rgb) {
        rgb = rgb || "rgb(0,0,0)";

        // Choose correct separator
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        // Turn "rgb(r,g,b)" into [r,g,b]
        rgb = rgb.substr(4).split(")")[0].split(sep);
      
        
        // Convert %s to 0–255
        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1)
            rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255);
            /* Example:
            75% -> 191
            75/100 = 0.75, * 255 = 191.25 -> 191
            */
        }

        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);
      
        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;
      
        /*
            Now we can supply values like either of these:
            rgb(255,25,2)
            rgb(255 25 2)
            rgb(50%,30%,10%)
            rgb(50% 30% 10%)
        */
       
        return "#" + r + g + b;
    }

    onChange(event){
        this.setState({value:event.target.value})
    }
  
    onBlur(event){
        let sel = this.props.selection;
        
        if(sel === null){ return; }

        // if there is no text selected then it quits
        if(sel.sel.isCollapsed){ return; }

        let prop = this.props.cssProp;
        let color = this.state.value;

        if(sel.isNodeRoot){
            let newNode = document.createElement("span");
            newNode.appendChild(sel.range.extractContents());
            //sel.node.appendChild(newNode);
            sel.range.insertNode(newNode);
            newNode.style[prop] = color
        }
        else if(sel.subSelection){
            let newNode = document.createElement("span");
            newNode.appendChild(sel.range.extractContents());
            sel.range.insertNode(newNode);
            newNode.style[prop] = color
        }
        else{
            sel.node.style[prop] = color
        }

        sel.refreshSelection()

        if(this.props.onClick){
            this.props.onClick(event);
        }
    }
}

class BtnUnsetCssProp extends Component{
    static defaultProps = {
        selection: null,
        icon: null,
        cssProp: [],
        defaultValue: "",
        onClick: null,
        title: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(){
        return <Button variant={ButtonsBar.Layout.btnNormal} onClick={this.onClick} title={this.props.title}><FontAwesomeIcon icon={this.props.icon}/></Button>;
    }

    onClick(event){
        let sel = this.props.selection;
        
        if(sel === null){ return; }
        if(sel.isNodeRoot){ return; }

        for (let prop of this.props.cssProp){
            sel.node.style[prop] = this.props.defaultValue;
        }

        if(this.props.onClick){
            this.props.onClick(event);
        }
    }
}

/*class BtnSetCssClass extends Component{
    static defaultProps = {
        selection: null,
        icon: null,
        text: null,
        cssClass: "",
        onClick: null,
        title: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(){
        let sel = this.props.selection;
        let variant = "secondary";

        if((sel !== null) && (sel.node !== null)){
            variant = (sel.node.classList.contains(this.props.cssClass) ? "outline-secondary" : "secondary");
        }

        return <Button variant={variant} onClick={this.onClick} title={this.props.title}><FontAwesomeIcon icon={this.props.icon}/>{this.props.text}</Button>
    }

    onClick(event){
        let sel = this.props.selection;
        let option = this.props.cssClass;
        
        if(sel === null){ return; }
        
        if(sel.isNodeRoot){
            let newNode = document.createElement("span");
            newNode.classList.add(option);
            newNode.appendChild(sel.range.extractContents());
            sel.node.appendChild(newNode);
        }
        else{
            if(sel.node.classList.contains(option)){
                sel.node.classList.remove(option);
            }
            else{
                sel.node.classList.add(option);
            }
        }

        if(this.props.onClick){
            this.props.onClick(event);
        }
    }
}*/

class BtnAlignment extends Component{
    static defaultProps = {
        selection: null,
        icon: null,
        cssProp: "",
        onClick: null,
        title: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(){
        let sel = this.props.selection;
        let variant = ButtonsBar.Layout.btnNormal;

        if((sel !== null) && (sel.node !== null)){
            variant = (sel.node.style.textAlign === this.props.cssProp ? ButtonsBar.Layout.btnToggled : ButtonsBar.Layout.btnNormal );
        }

        return <Button variant={variant} onClick={this.onClick} title={this.props.title}><FontAwesomeIcon icon={this.props.icon}/></Button>
    }

    onClick(event){
        let sel = this.props.selection;
        let option = this.props.cssProp;
        
        if(sel === null){ return; }

        if(sel.isNodeRoot){
            let newNode = document.createElement("p");
            newNode.appendChild(sel.range.extractContents());
            if(newNode.innerHTML.length > 0){
                newNode.style.textAlign = option;
                sel.node.appendChild(newNode);
            }
        }
        else{
            if((sel.node instanceof HTMLDivElement) || (sel.node instanceof HTMLParagraphElement)){
                sel.node.style.textAlign = option;
            }
            else if(!sel.isParentNodeRoot){
                sel.parentNode.style.textAlign = option;
            }
            else{
                let newNode = document.createElement("p");
                //newNode.appendChild(sel.range.extractContents());
                newNode.style.textAlign = option;
                newNode.appendChild(sel.node);
                sel.parentNode.appendChild(newNode);
            }
        }

        sel.refreshSelection()

        if(this.props.onClick){
            this.props.onClick(event);
        }
    }
}

class InputLink extends Component{
    static defaultProps = {
        selection: null,
        onClose: null
    };

    constructor(props){
        super(props);

        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);

        let url = (props.selection.node instanceof HTMLAnchorElement ? props.selection.node.getAttribute("href") : "");
        let target = (props.selection.node.getAttribute("target") === "_blank" ? true : false);
        this.state = {url: url, target: target, text: props.selection.sel.toString(), selection: props.selection };
    }

    render(){
        let main = 
            <Modal show={true} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{i18n.get_string('createlink')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formURL">
                            <Form.Label>{i18n.get_string('inputurl')}</Form.Label>
                            <Form.Control name="url" type="text" value={this.state.url} placeholder="http://" onChange={this.onChange} />
                            <Form.Text className="text-muted">
                                {`${i18n.get_string('texttoshow')}: ${this.state.text}`}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formTarget">
                            <Form.Check name="target" type="checkbox" checked={this.state.target} label={i18n.get_string('openinnewwindow')} onChange={this.onChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
        
                <Modal.Footer>
                    <Button variant="primary" onClick={this.onSave}>{i18n.get_string('createlink')}</Button>
                </Modal.Footer>
        </Modal>;

        return main;
    }

    onSave(){
        let sel = this.state.selection;
        let url = this.state.url;
        let target = (this.state.target ? '_blank' : '');

        if(sel.node instanceof HTMLAnchorElement){
            sel.node.href = url;
            sel.node.target = target;
        }
        else{
            let newNode = document.createElement("a");
            newNode.innerHTML = sel.range.extractContents().textContent;
            newNode.setAttribute("href", url);
            newNode.target = target;

            sel.range.insertNode(newNode);
        }

        this.props.onClose();
    }

    onChange(event){
        let data = this.state;
        if(event.target.type === "checkbox"){
            data[event.target.name] = event.target.checked;
        }
        else{
            data[event.target.name] = event.target.value;    
        }

        this.setState(data);
    }
}