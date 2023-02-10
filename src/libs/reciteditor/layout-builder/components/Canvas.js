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
import { ButtonToolbar, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {faArrowsAlt, faEdit, faBold, faArrowUp,faArrowDown, faTrashAlt, faClone, faItalic, faUnderline, faStrikethrough, faPuzzlePiece, faParagraph, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {HTMLElementData, BtnSetCssProp, TemplateForm, UtilsHTML, i18n} from '../../RecitEditor';
import { TextEditorModal } from '../../common/TextEditor';

export class Canvas extends Component
{
    static defaultProps = {
        children: null,
        style: null
    };      

	render(){     
        let style = {margin: "auto", display: "flex"};
        style = this.props.style;

		let main = 
            <div style={style}>
                {this.props.children}
            </div>; 

		return (main);
    }
}

/**
 * This class attaches all required events for edition to all dom elements.
 * Example: For a dom element to be selectable, it needs to be wrapped with this class.
 */
export class CanvasElement{
    static draggingItem = null;
    static instanceList = []; //Keep a list of instance to avoid recreating canvaselement if it was already instancied

    constructor(dom, onSelectCallback, onDropCallback, onEditNodeText){
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        //this.onDragStart = this.onDragStart.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onDblClick = this.onDblClick.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this); 
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onSelectCallback = onSelectCallback;
        this.onDropCallback = onDropCallback;
        this.onEditNodeText = onEditNodeText;

        this.dom = dom;
        this.dom.ondragover = this.onDragOver;
        this.dom.ondragenter = this.onDragEnter;
        this.dom.ondragleave = this.onDragLeave;
        //this.dom.ondragstart = this.onDragStart;
        this.dom.ondrop = this.onDrop;
        this.dom.onclick = this.onClickHandler;
        this.dom.onmouseover = this.onMouseOver;
        this.dom.onmouseout = this.onMouseOut;

        CanvasElement.instanceList.push(dom)
        this.state = {initDragging: false, onDragging: false, clickCounter: 0 };

    }

    static isElementInstancied(el){
        for (let instance of CanvasElement.instanceList){
            if (Object.is(el, instance)){
                return true;
            }
        }
        return false;
    }

    static create(el, onSelectElement, onDropElement, onEditNodeText){
        let canvasElement = null;
        if (!CanvasElement.isElementInstancied(el)){
            canvasElement = new CanvasElement(el, onSelectElement, onDropElement, onEditNodeText);
        }

        for(let child of el.childNodes){
            CanvasElement.create(child, onSelectElement, onDropElement, onEditNodeText);
        }

        return canvasElement
    }

    onClickHandler(event){
        event.preventDefault(); // Cancel the default action (in case of href)
        event.stopPropagation();
        this.state.clickCounter++;
        let that = this;

        if(event.detail === 1){
            setTimeout(() => {
                if(that.state.clickCounter === 1){
                    that.onClick();
                }
                that.state.clickCounter = 0;
            }, 250);
        }
        else if (event.detail === 2) {
            this.onDblClick();
            this.state.clickCounter = 0;
        }
    }

    onClick(){
        if(!this.dom.hasAttribute("contenteditable")){
            this.onSelectCallback(this.dom);
        }
    }

    onDblClick(){
        if(!this.dom.hasAttribute("contenteditable")){
            this.onEditNodeText(this.dom);
        }
    }

    onDrop(event){
        // it needs to stop propagation otherwise it will dispatch onFillInSlot in cascade. We want just assign a section to one single slot.
        event.stopPropagation();   

        let eventData = event.dataTransfer.getData("componentData");
        
        let el = null;
        if(eventData.length > 0){
            let componentData = JSON.parse(eventData);
            el = HTMLElementData.createElement(componentData);
            if (el){
                CanvasElement.create(el, this.onSelectCallback, this.onDropCallback, this.onEditNodeText);
            }
        }
        else if (CanvasElement.draggingItem !== null){
            el = CanvasElement.draggingItem;
            CanvasElement.draggingItem = null;
        }
        
        if(el !== null){
            if(event.target.classList.contains('dropping-zone')){
                try{
                    event.target.replaceWith(el);
                }
                catch(err){
                    console.log(err)
                }
            }
            else if(event.currentTarget.tagName.toLowerCase() === "body"){
                //this.dom.appendChild(el);
                event.currentTarget.appendChild(el);
            }
            else{
                console.log(i18n.get_string('failedtodrop'), event.target);
            }
        }
        
        this.state.initDragging = false;
        this.state.onDragging = false;
        //let el = React.createElement(component.element, {});
        //ReactDOM.render(el, this.dom);

        this.onDropCallback(this.dom, el);

        return false;
    } 
    
    onDragOver(event){
        event.preventDefault(); // Necessary to allow us to drop.
        if(!event.target.classList.contains('dropping-zone-hover') && event.target.classList.contains('dropping-zone')){
            event.target.classList.add('dropping-zone-hover');
        }
        
        return false;
    }

    onDragEnter(event){
        // do not cascate the event towards the parents
        event.preventDefault();
        event.stopPropagation();

        if(this.state.onDragging){ return; }       

        this.state.initDragging = true;

        let that = this;

        let cleanUp = function(){
            let body = that.dom;

            while(body.parentNode){
                body = body.parentNode;
            }

            let items = body.querySelectorAll(".dropping-zone");

            items.forEach(function(item) {
                item.remove();    
            });
        }

        // wait 0.5 second to add the dropping zone
        window.setTimeout(() => {
            // if the user moved the mouse then we do not add the dropping zone
            if(!that.state.initDragging){ return; }

            that.state.onDragging = true;
            
            cleanUp();           

            let elClass = HTMLElementData.getElementClass(null, that.dom);
            
            if(elClass){
                elClass.prepareDroppingZones(that.dom);
            }
            
        }, 1000);
    }

    onDragLeave(event){
        event.preventDefault();
        event.stopPropagation();

        if(event.target.classList.contains('dropping-zone-hover')){
            event.target.classList.remove('dropping-zone-hover');
        }

        this.state.initDragging = false;        
        this.state.onDragging = false;
    }

    onMouseOver(event){
        event.stopPropagation();
        event.preventDefault();
        this.dom.setAttribute("data-hovering", "1");
    }

    onMouseOut(event){
        this.dom.removeAttribute("data-hovering");
    }
}

export class FloatingMenu extends Component{
    static defaultProps = {
        posCanvas: null,
        selectedElement: null,
        onDragElement: null,
        onEdit: null,
        onMoveNodeUp: null,
        onMoveNodeDown: null,
        onDeleteElement: null,
        onCloneNode: null,
        device: null,
    };

    constructor(props){
        super(props);
    }

    render(){
        
        if(this.props.posCanvas === null){ return null;}
        if(this.props.selectedElement === null){ return null;}
        if(this.props.device === null){ return null;}
        if(this.props.selectedElement.tagName === 'BODY'){ return null; }
        if(this.props.selectedElement.getAttribute('contenteditable') === 'true'){ return null; }

        let style = {display: 'block', top: 0, left: 0};

        let posCanvas = this.props.posCanvas;
        let posEl = UtilsHTML.getBoundingClientRect(this.props.selectedElement, this.props.device.scale);
        let isEditable = true;//TextEditorModal.isTagEditable(this.props.selectedElement.tagName);
        let name = '';
        let help = null;
        let cl = HTMLElementData.getElementClass(null, this.props.selectedElement);
        if (cl){
            name = cl.getDesc(this.props.selectedElement);
            help = cl.getHelpText(this.props.selectedElement);
        }

        // 32px = ButtonToolBar thickness
        style.top = Math.max(posCanvas.top + posEl.top - 32, 0);
        style.left = posCanvas.left + posEl.left;

        let main =  
            <div className='floating-menu' style={style}>
                <ButtonToolbar>
                    <ButtonGroup size="sm">
                        <Button onDragStart={this.props.onDragElement} draggable="true" style={{cursor: 'grab'}}><FontAwesomeIcon  icon={faArrowsAlt} title={i18n.get_string('drag')}/> {name}</Button>
                        {isEditable && <Button onClick={this.props.onEdit}><FontAwesomeIcon icon={faEdit} title={i18n.get_string('edit')}/></Button>}
                        <Button onClick={() => this.props.onMoveNodeUp(null)}  ><FontAwesomeIcon icon={faArrowUp} title={i18n.get_string('moveelementup')}/></Button>
                        <Button onClick={() => this.props.onMoveNodeDown(null)}><FontAwesomeIcon icon={faArrowDown} title={i18n.get_string('moveelementdown')}/></Button>
                        <Button onClick={this.props.onCloneNode}><FontAwesomeIcon icon={faClone} title={i18n.get_string('clone')}/></Button>
                        <Button onClick={() => this.props.onDeleteElement(null)}><FontAwesomeIcon icon={faTrashAlt} title={i18n.get_string('delete')}/></Button>
                        {help && <OverlayTrigger overlay={<Tooltip>{help}</Tooltip>}><Button><FontAwesomeIcon icon={faInfoCircle}/> </Button></OverlayTrigger>}
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        return main;
    }
}
