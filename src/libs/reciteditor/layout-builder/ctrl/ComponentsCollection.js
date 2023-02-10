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
import { Form, Row, Col, Nav, ButtonToolbar, ButtonGroup, Button, Modal  } from 'react-bootstrap';
import { faSave, faTrashAlt, faAngleRight, faAngleDown, faCubes, faCloud, faTimes, faCloudDownloadAlt, faCog, faPuzzlePiece, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LayoutSpacingEditor, LayoutSpacing, MultipleSelect, $glVars, Assets, ToggleButtons, InputColor, InputText, InputTextArea, MinValueMax, ComboBox, ImageSrc, BtnUpload,  
    IconSelector, ColorSelector, Templates, i18n } from '../../RecitEditor';
import { HTMLElementData } from './HTMLElementData';
import { GridBuilder } from '../components/GridBuilder';
import { ImagePixaBay } from '../../common/ImagePixaBay';

export class ComponentProperties extends Component{
    static defaultProps = {
        element: null,
        onAfterInsertNode: null,
        onDeleteElement: null,
        onAfterAssignProperty: null,
        tab: 'bm'
    };

    render(){
        let title = <></>;

        if(this.props.tab === "bs"){
            title = <><i className='svgicon mr-2'>{Assets.faBootstrap}</i> {i18n.get_string('bootstrap')}</>;
        }
        else if(this.props.tab === "html"){
            title = <><i className='svgicon mr-2'>{Assets.faHtml}</i> {i18n.get_string('htmlproprieties')}</>;
        }
        else if(this.props.tab === "bm"){
            title = <><FontAwesomeIcon icon={faCubes} className='mr-2'/> {i18n.get_string('basic')}</>;
        }

        let header = <div><h5 className="m-0 p-2 d-flex">{title}</h5><hr className='mt-0'/></div>;
        
        if(this.props.element === null){ 
            return header; 
        }
        
        let propertyList = this.getPropertyList();

        let main = 
            <div className='panel'>
                {header}

                {this.props.tab === "bs" && 
                        <FormProperties element={this.props.element} onAfterReplaceNode={this.props.onAfterReplaceNode} onAfterAssignProperty={this.props.onAfterAssignProperty} onAfterInsertNode={this.props.onAfterInsertNode} onDeleteElement={this.props.onDeleteElement} properties={propertyList.bootstrap} />
                }
                {this.props.tab === "html" && <FormProperties element={this.props.element} onAfterInsertNode={this.props.onAfterInsertNode} onAfterAssignProperty={this.props.onAfterAssignProperty} onAfterReplaceNode={this.props.onAfterReplaceNode} onDeleteElement={this.props.onDeleteElement} properties={propertyList.html} />}
                {this.props.tab === "bm" && <FormProperties element={this.props.element} onAfterInsertNode={this.props.onAfterInsertNode} onAfterAssignProperty={this.props.onAfterAssignProperty} onAfterReplaceNode={this.props.onAfterReplaceNode} onDeleteElement={this.props.onDeleteElement} properties={propertyList.bookmark} />}
            </div>
                
                
        return main;
    }

    getPropertyList(){
        let result = {
            bs: [],
            html: [],
            bm: [],
        };
        
        let elClass = HTMLElementData.getElementClass(null, this.props.element);

        if(elClass === null){ return result;}
        
        result.bootstrap = HTMLElementData.propertyList.bootstrap.filter(item => elClass.properties.all.includes(item.name));
        result.html =  HTMLElementData.propertyList.html.filter(item => elClass.properties.all.includes(item.name));
        result.bookmark =  result.bootstrap.concat(result.html).filter(item => elClass.properties.min.includes(item.name));

        result.bootstrap.sort((el1, el2) => { 
            return elClass.properties.all.indexOf(el1.name) - elClass.properties.all.indexOf(el2.name)
        });

        result.html.sort((el1, el2) => { 
            return elClass.properties.all.indexOf(el1.name) - elClass.properties.all.indexOf(el2.name)
        });

        result.bookmark.sort((el1, el2) => { 
            return elClass.properties.min.indexOf(el1.name) - elClass.properties.min.indexOf(el2.name)
        });

        return result;
    }
}

class FormProperties extends Component{
    static defaultProps = {
        element: null,
        properties: [],
        onAfterInsertNode: null,
        onAfterReplaceNode: null,
        onAfterAssignProperty: null,
        onDeleteElement: null
    };

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
        //this.onCollapse = this.onCollapse.bind(this);

        //this.state = {collapsed: {}}
    }
    
    render(){
        let main =
        <div className="tab-content">
            {this.props.properties.map((item, index) => {
               // let collapsed = (typeof this.state.collapsed[item.name] === "undefined" ? false : this.state.collapsed[item.name]);
                
               // let icon = collapsed ? faAngleRight : faAngleDown;

                let form = 
                <Form key={index} onSubmit={this.onSubmit} className="mb-4">
                    {/*item.visible != false && <h6  onClick={(event) => this.onCollapse(event, item.name)}><FontAwesomeIcon className="mr-1" icon={icon}/> {item.description}</h6>*/}
                    {/*!collapsed &&*/ item.children.map((item2, index2) => {
                        let formItem = null;
                        let flags = item2.getFlags(this.props.element);
                        
                        if(typeof flags.showLabel == "undefined" || flags.showLabel){
                            formItem = 
                            <Form.Group size="sm" key={index2} style={{alignItems: "center"}}  controlId={`formitem${index}${index2}`}>
                                <Form.Label>{item2.text}</Form.Label>
                                {this.createFormControl(item2)}
                            </Form.Group>;
                            
                        }else{
                            formItem = 
                            <Form.Group size="sm" key={index2}  controlId={`formitem${index}${index2}`}>
                                {this.createFormControl(item2)}
                            </Form.Group>;
                        }

                        return (formItem);
                    })}

                </Form>

                return form;
            })}
        </div>;
            
        return main;
    }

    createFormControl(data){
        let result = null;
        let value = data.getValue(this.props.element, data);
        let flags = data.getFlags(this.props.element);
        
        switch(data.input.type){
            case 'radio':
                result = <ToggleButtons type={data.input.toggleType} name={data.name} value={value} bsSize="sm" defaultValue={value}
                                options={data.input.options} onChange={(event) => this.onDataChange(event, data)}/>;
                break;
            case 'text':
                result = <InputText name={data.name} value={value} size="sm"
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'textarea':
                result = <InputTextArea name={data.name} value={value} size="sm"
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'minvaluemax':
                result = <MinValueMax valueName={data.name} values={value} size="sm"
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'color':
                result = <InputColor name={data.name} value={value} 
                                onBlur={(event) => this.onDataChange(event, data)} />;
                break;
            case 'combobox':
                result = <ComboBox name={data.name} value={value} options={data.input.options}
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'iconselector':
                result = <IconSelector name={data.name} value={value} text={data.input.text}
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'pixabay':
                result = <ImagePixaBay name={data.name} value={value} text={data.input.text}
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'gridbuilder':
                result = <GridBuilder name={data.name} value={value} text={data.input.text}
                                onSave={(event) => this.onModalSave(event, data)} />;
                break;
            case 'multipleselect':
                result = <MultipleSelect name={data.name} values={value} options={data.input.options} autoAdd={flags.autoAdd}
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'layoutspacingeditor':
                result = <LayoutSpacingEditor name={data.name} values={value}
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'layoutspacing':
                result = <LayoutSpacing name={data.name} value={value} options={data.input.options}
                                            onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'colorselector':
                result = <ColorSelector name={data.name} value={value} options={data.input.options} flags={flags}
                                onChange={(event) => this.onDataChange(event, data)} />;
                break;
            case 'buttongroup':
                result = 
                    <ButtonGroup>
                        {data.input.options.map((item, index) => {
                            let btn = <Button size="sm" key={index} onClick={() => this.onClick(item)}>{item.text}</Button>;
                            return (btn);
                        })}
                    </ButtonGroup>
              
                break;
            case 'ImageSrc':
                result = <ImageSrc name={data.name} accept={data.input.accept} value={value} size="sm" onChange={(event) => this.onDataChange(event, data)}  />;
                break;
            case 'button':
                result = <Button size="sm" onClick={() => this.onDataChange({target:{value:''}}, data)}>{data.input.text}</Button>
                break;
        }

        return result;
    }

    onDataChange(event, componentData){
        if (componentData.input.onChange){
            componentData.input.onChange(this.props.element, event.target.value, componentData);
            this.forceUpdate();
            this.props.onAfterAssignProperty();
        }
    }

    onModalSave(event, componentData){
        this.props.onAfterReplaceNode([this.props.element]);       
    }

    onClick(item){
        let result = item.onClick(this.props.element);

        if(result.action === 'insert'){
            this.props.onAfterInsertNode(result.nodes);
        }
        else if(result.action === 'delete'){
            this.props.onDeleteElement();
        }
    }

    onSubmit(event){
        event.preventDefault();
    }
    
    /*onCollapse(event, id){
        event.stopPropagation();
        event.preventDefault();

        let collapsed = this.state.collapsed;
        collapsed[id] = (typeof collapsed[id] === 'undefined' ? false : !collapsed[id]);
        this.setState({collapsed: collapsed});
    }*/
}

export class VisualComponentList extends Component{
    static defaultProps = {
        onDragEnd: null,
        onSaveTemplate: null,
        onInsert: null,
        tab: 'tpl'
    };
  
    constructor(props){
        super(props);

        this.loadTemplates = this.loadTemplates.bind(this);
    }

    render(){       
//{HTMLElementData.elementListSortByName()}
        let main =
            <div className='component-list'>
               
                {this.props.tab === "comp" &&
                    <div className='panel'>
                        <h5 className="m-0 p-2"><FontAwesomeIcon icon={faPuzzlePiece}/> {i18n.get_string('components')}</h5>
                        <hr className='mt-0'/>
                        
                        <TokenList dataProvider={HTMLElementData.elementList} onDragEnd={this.props.onDragEnd}/>
                    </div>

                }

                {this.props.tab === "tpl" &&
                    <div className='panel'>
                        <h5 className="m-0 p-2"><FontAwesomeIcon icon={faCloud}/> {i18n.get_string('templates')}</h5>
                        <hr className='mt-0'/>
                        <TemplateList dataProvider={Templates.layoutList} onDragEnd={this.props.onDragEnd} onInsert={this.props.onInsert} onChange={this.loadTemplates} onSaveTemplate={this.props.onSaveTemplate} type='l'/>
                    </div>
                }
            </div>;

        return main;
    }

    loadTemplates(){
        let p = Templates.onLoad();
        let that = this;
        
        p.then((webApiResult) => {
            if(!webApiResult.error){
                that.forceUpdate();
            }
            else{
                alert(`Error: ${webApiResult}`);
            }
        },
        (err, response) => {
            console.log(err, response);
        });
    }
}

class TokenList extends Component{
    static defaultProps = {
        dataProvider: [],
        onDragEnd: null,
        onInsert: null
    };

    constructor(props){
        super(props);

        this.onCollapse = this.onCollapse.bind(this);

        this.state = {collapsed: {}};
    }    

    render(){       
        let main =
            <div className="tab-content">
                {this.props.dataProvider.map((item, index) => {

                    let collapsed = ((typeof this.state.collapsed[item.name] !== "undefined") && (this.state.collapsed[item.name]));
                    let icon = collapsed ? faAngleRight : faAngleDown;

                    let branch = 
                        <ul key={index} className='mt-2'>
                            <li key={index} className='token-section' onClick={(event) => this.onCollapse(event, item.name)}>
                                <FontAwesomeIcon className="mr-1" icon={icon} /> 
                                {item.name}
                            </li>
                            {!collapsed && item.children.map((item2, index2) => {
                                if(!item2.visible){ return null; }

                                return (<Token data={item2} key={index2} onDragEnd={this.props.onDragEnd} onInsert={this.props.onInsert} />);
                            })}
                        </ul>

                    return (branch);
                })}
            </div>;

        return main;
    }

    onCollapse(event, id){
        let collapsed = this.state.collapsed;
        collapsed[id] = !collapsed[id] || false;
        this.setState({collapsed: collapsed});
    }
}

class TemplateList extends Component{
    static defaultProps = {
        dataProvider: [],
        onDragEnd: null,
        onChange: null,
        onInsert: null,
        type: 'c',
        onSaveTemplate: null
    };

    constructor(props){
        super(props);

        this.onImport = this.onImport.bind(this);
        this.onExport = this.onExport.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.showImport = this.showImport.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.showShowcase = this.showShowcase.bind(this);
        this.receiveMessageFromIframe = this.receiveMessageFromIframe.bind(this);
        this.showModal = this.showModal.bind(this);
        this.onSaveTemplate = this.onSaveTemplate.bind(this);

        let url = false;
        if (typeof M != 'undefined' && M.recit && M.recit.reciteditor && M.recit.reciteditor.settings.showcase_url && M.recit.reciteditor.settings.showcase_url.length > 0){
            url = M.recit.reciteditor.settings.showcase_url;
        }
        this.state = {showModal: false, showMenu: false, showImport: false, showShowcase: false, UrlShowcase: url, collapse: {}, hoverimg: false};
    }    

    componentDidMount(){
        window.addEventListener("message", this.receiveMessageFromIframe, false);
    }

    componentWillUnmount(){
        window.removeEventListener("message", this.receiveMessageFromIframe, false);
    }

    render(){       
        let that = this;
        // {this.props.type === 'l' && <Button onClick={() => this.showModal(true)}><FontAwesomeIcon icon={faSave} title={i18n.get_string('savetemplate')}/></Button>}
        // <Button onClick={() => this.showMenu(!this.state.showMenu)} variant={(this.state.showMenu ? 'warning' : 'primary')}><FontAwesomeIcon icon={faCog} title={i18n.get_string('options')}/></Button>
        let main =
            <div className="tab-content">
                <div>
                    <ButtonToolbar style={{justifyContent: 'flex-end'}}>
                        <ButtonGroup >
                                <BtnUpload id="import-collection"  accept=".json" onChange={this.onImport} title={i18n.get_string('import')}/>
                                {this.props.type === 'l' && this.state.UrlShowcase && <Button onClick={() => this.showShowcase(true)}><FontAwesomeIcon icon={faCloud} title={i18n.get_string('showroom')}/> {i18n.get_string('showroom')}</Button>}
                        </ButtonGroup>
                    </ButtonToolbar>
                    {this.state.showMenu &&  this.props.type === 'c' && <Button onClick={(event) => this.onExport(event, this.props.dataProvider.myComponents)}><FontAwesomeIcon icon={faCloudDownloadAlt}/> {i18n.get_string('export')}</Button>}
                </div>
                {this.props.type === 'l' && 
                    <ul className='mt-2 d-flex flex-wrap justify-content-center'>
                        {this.props.dataProvider.map((item, index) => {
                            return (that.getToken(item, index, true));
                        })}
                    </ul>
                }
                {this.props.type === 'c' && <>
                    <span onClick={() => this.onCollapse('my')}>
                        <FontAwesomeIcon className="mr-1" icon={!this.state.collapse['my'] ? faAngleDown : faAngleRight}/> {i18n.get_string('mycomponents')}
                    </span>
                    <ul className='mt-2 d-flex flex-wrap'>
                    {!this.state.collapse['my'] && this.props.dataProvider.myComponents.map((item, index) => {
                        return (this.getToken(item, index, true));
                    })}
                    </ul>
                    <span onClick={() => this.onCollapse('base')}>
                        <FontAwesomeIcon className="mr-1" icon={!this.state.collapse['base'] ? faAngleDown : faAngleRight}/> {i18n.get_string('basecomponents')}
                    </span>
                    <ul className='mt-2 d-flex flex-wrap'>
                    {!this.state.collapse['base'] && this.props.dataProvider.components.map((item, index) => {
                        return (this.getToken(item, index, false));
                    })}
                </ul></>}
                {this.state.showShowcase && 
                    <Modal show={true} onHide={() => this.showShowcase(false)} backdrop="static" keyboard={false} className='templatevitrine'>
                        <Modal.Header closeButton>
                            <Modal.Title>{i18n.get_string('showroom')}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe src={this.state.UrlShowcase}/>
                        </Modal.Body>
                    </Modal>
                }
                {this.state.showModal && <TemplateForm onClose={() => this.showModal(false)} onSave={this.onSaveTemplate} title={i18n.get_string('createtemplate')} description={i18n.get_string('addcomponentdesc')}/>}
            </div>;

        return main;
    }
    
    onCollapse(id){
        let c = this.state.collapse;
        c[id] = !c[id];
        this.setState({collapse: c});
    }

    showModal(show){
        this.setState({showModal: show});
    }

    onSaveTemplate(data){
        this.props.onSaveTemplate(data.name, 'l');
        this.showModal(false);
    }

    showMenu(show){
        this.setState({showMenu: show});
    }

    showImport(show){
        this.setState({showImport: show});
    }

    onImport(event, data){
        let fileCtrl = (event !== null ? event.target : null);
        let that = this;        
        let promise = Templates.onImport(fileCtrl, data);
        
        promise.then((webApiResult) => {
            if(!webApiResult.error){
                that.showImport(false);
                that.props.onChange();
                $glVars.feedback.showInfo(i18n.get_string('pluginname'), i18n.get_string('msgsuccess'), 3);
            }
            else{
                alert(`Error: ${webApiResult}`);
            }
        },
        (err, response) => {
            console.log(err, response);
        });
    }

    onExport(event, item){
        item = item || [];
        event.stopPropagation();

        let dataStr = Templates.onExport(item);
        let node = document.createElement('a');
        node.setAttribute("href",     dataStr);
        node.setAttribute("download", (item.length === 1 ? `${item[0].name}.json` : "my-collection.json"));
        window.document.body.appendChild(node); // required for firefox
        node.click();
        node.remove();
        $glVars.feedback.showInfo(i18n.get_string('pluginname'), i18n.get_string('msgsuccess'), 3);
    }

    onDelete(event, item){
        event.stopPropagation();

        let promise = Templates.onDelete(item);

        if(promise === null){ return;}

        let that = this;

        promise.then((webApiResult) => {
            if(!webApiResult[0].error){
                that.props.onChange();
                $glVars.feedback.showInfo(i18n.get_string('pluginname'), i18n.get_string('msgsuccess'), 3);
            }
            else{
                $glVars.feedback.showError(i18n.get_string('pluginname'), JSON.stringify(webApiResult));
            }
        },
        (err, response) => {
            console.log(err, response);
        });
    }

    showShowcase(show){
        this.setState({showShowcase: show});
    }

    getToken(item, index, editable){
        if(this.props.type === 'l'){
            return <TokenTemplate showMenu={this.state.hovering == item.id} data={item} key={index} onDragEnd={this.props.onDragEnd} onInsert={this.props.onInsert} onHover={() => this.setState({hovering: item.id})} onMouseLeave={() => this.setState({hovering: null})}
                        onExport={(event) => this.onExport(event, item)} onDelete={(event) => this.onDelete(event, item)}/>
        }
        else{
            return <Token showMenu={editable && this.state.showMenu} data={item} key={index} onDragEnd={this.props.onDragEnd} hoverimg={item.img} onInsert={this.props.onInsert}
                            onExport={(event) => this.onExport(event, item)} onDelete={(event) => this.onDelete(event, item)}/>
        }
    }

    receiveMessageFromIframe(event) {
        switch (event.data.message){
            case 'import':
                let data = [{name: event.data.value.name, htmlStr: event.data.value.htmlStr || event.data.value.htmlString || event.data.value.htmlstr, img: event.data.value.img || event.data.value.image, type: 'l'}];
                this.onImport(null, data);
                this.showShowcase(false);
                break;
        }
    }
}

class Token extends Component
{
    static defaultProps = {
        data: null,
        onDragEnd: null,
        showMenu: false,
        onExport: null,
        onDelete: null,
        onInsert: null,
        hoverimg: null,
        onHover: null,
        onMouseLeave: null,
    };
    
    constructor(props){
        super(props);

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {imagePreview: false};
    }
	
	render(){
		let main = 
            <li className="token" data-type={this.props.data.type} draggable="true" onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onMouseEnter={() => this.onMouseEnter(this.props.hoverimg)} onMouseLeave={this.onMouseLeave} onMouseDown={this.onMouseLeave}>
                {this.props.data.name}   
                {this.props.showMenu && 
                    <ButtonToolbar style={{marginLeft: "1rem", display: "inline-flex"}}>
                        <ButtonGroup size="sm">
                            <Button onClick={this.props.onExport}><FontAwesomeIcon  icon={faCloudDownloadAlt} title={i18n.get_string('export')}/></Button>
                            <Button onClick={this.props.onDelete}><FontAwesomeIcon  icon={faTrashAlt} title={i18n.get_string('delete')}/></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                }
                {this.state.imagePreview && !this.props.showMenu &&
                    <div className='templatepreview'>
                        <img src={this.state.imagePreview}/>
                </div>}   
            </li>;

		return main;
    }
    
    onDragStart(event){
        event.dataTransfer.setData("componentData", JSON.stringify(this.props.data));
        this.setState({imagePreview: false});
    }
    
    onDragEnd(event){
        this.props.onDragEnd();
    }

    onMouseEnter(img){
        if (this.props.onHover){
            this.props.onHover();
        }
        if (img){
            this.setState({imagePreview: img});
        }
    }

    onMouseLeave(){
        if (this.props.onMouseLeave){
            this.props.onMouseLeave();
        }
        this.setState({imagePreview: false});
    }
}

class TokenTemplate extends Token{
    render(){       
        let item = this.props.data;

        let main =
                <div className='template' onMouseEnter={() => this.onMouseEnter(this.props.data.img)} onMouseLeave={this.onMouseLeave}
                        onDragEnd={this.props.onDragEnd} draggable="true" onDragStart={this.onDragStart}>
                    <div className="tplimg">
                        <img src={item.img}/>
                    </div>
                    <p>{item.name}</p>
                    {this.props.showMenu &&
                        <ButtonToolbar style={{marginLeft: "1rem", display: "inline-flex"}}>
                            <ButtonGroup size="sm">
                                <Button onClick={() => this.onInsert('top', item.htmlstr)}><i title={i18n.get_string('inserttop')}>{Assets.faBorderTop}</i></Button>
                                <Button onClick={() => this.onInsert('bottom', item.htmlstr)}><i title={i18n.get_string('insertbottom')}>{Assets.faBorderBottom}</i></Button>
                                <Button onClick={this.props.onExport}><FontAwesomeIcon icon={faCloudDownloadAlt} title={i18n.get_string('export')}/></Button>
                                <Button onClick={this.props.onDelete}><FontAwesomeIcon icon={faTrashAlt} title={i18n.get_string('delete')}/></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    }

                    {this.state.imagePreview &&
                        <div className='templatepreview'>
                            <img src={this.state.imagePreview}/>
                    </div>}
                </div>
        return main;
    }

    onInsert(pos, html){
        this.props.onInsert(pos, html);
        $glVars.feedback.showInfo(i18n.get_string('pluginname'), i18n.get_string('templateadded'), 3);
    }
}

export class TemplateForm extends Component{
    static defaultProps = {
        onClose: null,
        onSave: null,
        description: '',
        title: ''
    };    

    constructor(props){
        super(props);

        this.onDataChange = this.onDataChange.bind(this);

        this.state = {data: {name: ""}};
    }

    render(){
        let main = 
            <Modal show={true} onHide={this.props.onClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.description}</p>
                    <Form onSubmit={e => { e.preventDefault(); }}>                       
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>{i18n.get_string('name')}</Form.Label>
                                <Form.Control type="text" required value={this.state.data.name} name="name" onChange={this.onDataChange}/>
                            </Form.Group>
                        </Form.Row>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}><FontAwesomeIcon icon={faTimes} title={i18n.get_string('cancel')}/> {i18n.get_string('cancel')}</Button>
                    <Button variant="success" onClick={() => this.props.onSave(this.state.data)}><FontAwesomeIcon icon={faSave} title={i18n.get_string('save')}/> {i18n.get_string('save')}</Button>
                </Modal.Footer>
            </Modal>
/*<Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>{"Type"}</Form.Label>
                                <ToggleButtons type="checkbox" name="type" value={this.state.data.type} bsSize="sm" defaultValue={['l']}
                                options={[{text:"Composant",  value:"c"}, {text: "Layout", value:'l'}]} onChange={this.onDataChange}/>
                            </Form.Group>                           
                        </Form.Row>*/
        return main;
    }

    onDataChange(event){
        let data = this.state.data;
        data[event.target.name] = event.target.value;
        this.setState({data: data});
    }
}