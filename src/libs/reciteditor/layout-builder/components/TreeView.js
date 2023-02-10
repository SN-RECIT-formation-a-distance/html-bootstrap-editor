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
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';
import {faAngleRight, faSave, faAngleDown, faArrowUp, faArrowDown, faTrashAlt, faSitemap} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {HTMLElementData, UtilsHTML, UtilsString, i18n, TemplateForm} from '../../RecitEditor';

export class TreeView extends Component{
    static defaultProps = {
        data: null,
        onSelect: null,
        selectedElement: null,
        onDeleteElement: null,
        onSaveElement: null,
        onMoveNodeUp: null,
        onMoveNodeDown: null,
        view: 'designer'
    };
    
    constructor(props){
        super(props);

        this.onCollapse = this.onCollapse.bind(this);
        this.onSaveTemplate = this.onSaveTemplate.bind(this);

        this.state = {notCollapsed: {}, saveElement: false};
    }

    componentDidUpdate(prevProps, prevState){
        // when the selected element is changed then it collapses all branches
        if(!Object.is(prevProps.selectedElement, this.props.selectedElement)){
            this.setState({notCollapsed: {}});
        }
    }

    render(){
        if(this.props.data === null){ return null; }

        let data = this.props.data;

        if(this.props.view === 'sourceCode'){           
            data = UtilsHTML.assignTagId(this.props.data);
        }
        
        let treeView = this.createTreeViewData(data);

        let main = 
            <div className='panel'>
                <h5 className='m-0 p-2'><FontAwesomeIcon icon={faSitemap}/> {i18n.get_string('tree')}</h5>
                <hr className='mt-0'/>
                <ul className='tree-view'>
                    {this.renderTreeView(treeView, 0)}
                </ul>
                {this.state.saveElement && <TemplateForm onClose={() => this.setState({saveElement:false})} onSave={this.onSaveTemplate} title={i18n.get_string('createtemplate')} description={i18n.get_string('addcomponentdesc')}/>}
            </div>;

        return main;
    }

    renderTreeView(node, key){
        let id = `id${key}`;

        let result = null;
        
        let selected = (this.props.selectedElement !== null && this.props.selectedElement.isSameNode(node.dom)); //If root isn't selected
        let extraClasses = (selected ? 'disabled btn-warning' : '');
        
        //node.dom.isSameNode(this.props.data) checks if root node is selected
        let btn =  
            <ButtonToolbar aria-label="Item actions" style={{flexWrap: "nowrap"}}>
                <ButtonGroup>
                    <Button variant="link" className={`p-1 ${extraClasses}`} style={{whiteSpace: "nowrap"}} onClick={() => this.props.onSelect(node.dom)} >{` ${node.text}`}</Button>
                </ButtonGroup>
                
                {selected && 
                    <ButtonGroup size="sm" className="ml-2 btn-group-actions" style={(selected ? {display: 'flex'} : {})}>
                        {!node.dom.isSameNode(this.props.data) && <> 
                            <Button onClick={() => this.props.onMoveNodeUp(node.dom)}><FontAwesomeIcon icon={faArrowUp} title={i18n.get_string('moveelementup')}/></Button>
                            <Button onClick={() => this.props.onMoveNodeDown(node.dom)}><FontAwesomeIcon icon={faArrowDown} title={i18n.get_string('moveelementdown')}/></Button>
                            <Button onClick={() => this.props.onDeleteElement(node.dom)}><FontAwesomeIcon icon={faTrashAlt} title={i18n.get_string('delete')}/></Button>
                        </>}
                        <Button onClick={() => this.setState({saveElement:node.dom})}><FontAwesomeIcon icon={faSave} title={i18n.get_string('save')}/></Button>
                    </ButtonGroup>
                }
                
            </ButtonToolbar>;

        let icon = ((this.state.notCollapsed[id] || node.dom.contains(this.props.selectedElement)) ? faAngleDown : faAngleRight);

        if(node.children.length > 0){
            result = 
                <li key={key}>
                    <span className="d-flex align-items-center" >
                        <FontAwesomeIcon className="mr-1" icon={icon} onClick={(event) => this.onCollapse(event, id)}/>
                        {btn}
                    </span>
                    {(this.state.notCollapsed[id] || node.dom.contains(this.props.selectedElement)) &&
                        <ul>
                            {node.children.map((item, index) => {
                                key = key + 1
                                return this.renderTreeView(item, key);
                            })}
                        </ul>
                    }
                </li>
        }
        else{
            result = 
                <li key={key}>
                    <span className="d-flex align-items-center">
                        <i style={{marginRight: "12px"}}></i>
                        {btn}
                    </span>
                </li>;
        }
            
        return result;
    }

    onSaveTemplate(data){
        this.props.onSaveElement(data.name, 'l', this.state.saveElement);
        this.setState({saveElement:false});
    }

    createTreeViewData(node){
        let result = {text: this.getNodeDesc(node), dom: node, children: []};

        for(let child of node.children){
            let obj = null;
            if(child.children.length > 0){
                obj = this.createTreeViewData(child);
            }
            else{
                obj = {text: this.getNodeDesc(child),  dom: child, children: []};
            }
            result.children.push(obj);
        }

        return result;
    }

    getNodeDesc(node){
        let elClass = HTMLElementData.getElementClass(null, node);

        return (elClass ? elClass.getDesc(node) : UtilsString.capitalizeFirstLetter(node.tagName.toLowerCase()));
    }

    onCollapse(event, id){
        event.stopPropagation();
        event.preventDefault();

        let notCollapsed = this.state.notCollapsed;
        notCollapsed[id] = !notCollapsed[id] || false;
        this.setState({notCollapsed: notCollapsed});
    }
}