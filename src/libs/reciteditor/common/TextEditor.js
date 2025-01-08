import { faParagraph, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { i18n, IWrapper, UtilsString } from './Utils';

export class TextEditorModal extends React.Component {
    static defaultProps = {
        onClose: null,
        onSave: null,
        element: null
    };

    static allowedTags = {
        'p': {content: 'outerHTML'},
        'h1': {content: 'outerHTML'},
        'h2': {content: 'outerHTML'},
        'h3': {content: 'outerHTML'},
        'h4': {content: 'outerHTML'},
        'h5': {content: 'outerHTML'},
        'h6': {content: 'outerHTML'},
        'td': {content: 'innerHTML', stripPTags: true},
        'th': {content: 'innerHTML', stripPTags: true},
        'ul': {content: 'outerHTML'},
        'ol': {content: 'outerHTML'},
        //'a': {content: 'innerHTML', stripPTags: true},
        'em': {content: 'outerHTML'},
        'pre': {content: 'outerHTML'},
        'q': {content: 'outerHTML'},
        'figcaption': {content: 'innerHTML', stripPTags: true},

    };

    static isTagEditable(tag, html = null){
        // avoid tag i edition because this editor modifies it from i to em
        if(html !== null){
            let els = html.querySelectorAll("i[class]");
            if (els.length > 0){
                return false;
            }
        }

        return TextEditorModal.allowedTags[tag.toLowerCase()] ? true : false;
    }

    constructor(props){
        super(props);

        this.onDataChange = this.onDataChange.bind(this);
        this.editorRef = React.createRef();

        let tag = TextEditorModal.allowedTags[props.element.tagName.toLowerCase()];
        if (!tag) console.error('Text editor received unknown tag');
        this.initModules();
        let html = props.element[tag.content];
        html = this.preProcess(html);
        this.state = {value: html, tag: tag};
    }

    render(){
        let main = 
            <Modal show={true} onHide={this.props.onClose} size='lg' backdrop="static" keyboard={false} >
                <Modal.Body>
                    <div id="cktoolbar">
                        <span className="ql-formats">
                            <button className="ql-bold" title={i18n.get_string('bold')}></button>
                            <button className="ql-italic" title={i18n.get_string('italic')}></button>
                            <button className="ql-underline" title={i18n.get_string('underline')}></button>
                            <button className="ql-strike" title={i18n.get_string('strikethrough')}></button>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-link" title={i18n.get_string('link')}></button>
                        </span>
                        <span className="ql-formats">
                            <select className="ql-color" title={i18n.get_string('fontcolor')}/>
                            <select className="ql-background" title={i18n.get_string('bgcolor')}/>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-list" value="ordered" title={i18n.get_string('numberedlist')}></button>
                            <button className="ql-list" value="bullet" title={i18n.get_string('list')}></button>
                        </span>

                        <span className='ql-formats'>
                            <select className="ql-header" defaultValue={''} onChange={(e) => e.persist()}>
                                <option value="2"></option>
                                <option value="3"></option>
                                <option value="4"></option>
                                <option value="5"></option>
                                <option></option>
                            </select>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-clean" title={i18n.get_string('removeformat')}></button>
                            <button className="ql-nonbreakingspace" title={i18n.get_string('nonbreakingspace')}>
                                <FontAwesomeIcon icon={faParagraph}/>
                            </button>
                        </span>
                    </div>
                    <ReactQuill style={{height:'250px'}} theme="snow" value={this.state.value} onChange={this.onDataChange} modules={this.modules} ref={this.editorRef}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}><FontAwesomeIcon icon={faTimes} title={i18n.get_string('cancel')}/> {i18n.get_string('cancel')}</Button>
                    <Button variant="success" onClick={() => this.onSave()}><FontAwesomeIcon icon={faSave} title={i18n.get_string('save')}/> {i18n.get_string('save')}</Button>
                </Modal.Footer>
            </Modal>;
            
        return main;
    }

    preProcess(html){
        let el = document.createElement('div');
        el.innerHTML = html;                
        return el.innerHTML;
    }

    postProcess(html){
        let el = document.createElement('div');
        el.innerHTML = html;        
        return el.innerHTML;
    }

    onDataChange(val){
        this.setState({value: val});
    }

    onSave(){
        let html = this.state.value.replace(/<p(\s+[a-z0-9\-_\'\"=]+)*><\/p>/ig, '');//Remove empty tags
        if (this.state.tag.stripPTags){
            html = html.replace(/(<p[^>]*>|<\/p>)/g, '');
        }
        html = this.postProcess(html);

        let el = this.props.element;
        if (this.state.tag.content == 'outerHTML'){
            el = this.props.element.parentElement;
            let dummydiv = document.createElement('div');
            dummydiv.innerHTML = html;
            this.props.element.replaceWith(...dummydiv.children);
        }else{
            el.innerHTML = html;
        }
        this.props.onSave(el);
    }

    initModules(){
        let that = this;
        this.modules = {
            toolbar: {
                container: '#cktoolbar',
                handlers: {
                    "nonbreakingspace": function (value) {
                        let val = EditorModuleNonBreakingSpace.process(that.state.value);
                        that.setState({value: val});
                    }
                }
            }
        }
    }
}

class EditorModuleNonBreakingSpace {
    static process(text){
        let el = document.createElement('div');
        el.innerHTML = text;
        
        EditorModuleNonBreakingSpace.replaceNonBreakingSpace(el);

        return el.innerHTML;
    }

    static replaceNonBreakingSpace(el){
        for (let t of el.childNodes){
            if (t.innerHTML){
                t.innerHTML = UtilsString.replaceNonBreakingSpace(t.innerHTML)
            }else{
                t.data = UtilsString.replaceNonBreakingSpace(t.textContent)
            }
        }
    }
}


const Inline = Quill.import('blots/inline');
export class FaRule extends Inline {
    static blotName = 'fa';
    static tagName = 'i';
    static className = 'iconrecit';
    /**
     * Converts the HTML tag to image blot
     * @param value
     */
    static create(value) {
      let node = super.create();
      Object.getOwnPropertyNames(value).forEach((attribute_name) => {
        node.setAttribute(attribute_name, value[attribute_name]);
      });
  
      return node;
    }

    optimize(c){}
}

const Parchment = Quill.import('parchment');
let Align = new Parchment.Attributor.Class('fa', 'iconrecit');
Parchment.register(Align);
Quill.register(FaRule);

class IndentAttributor extends Parchment.Attributor.Style {
    multiplier = 2;
  
    constructor(name, style, params) {
      super(name, style, params);
    }
  
    add(node, value) {
      return super.add(node, `${value * this.multiplier}rem`);
    }
  
    value(node) {
      return parseFloat(super.value(node)) / this.multiplier || undefined;
    }
}

const levels = [1, 2, 3, 4, 5];
const multiplier = 2;
const indentStyle = new IndentAttributor('indent', 'margin-left', {
  scope: Parchment.Scope.BLOCK,
  whitelist: levels.map(value => `${value * multiplier}rem`),
});

Quill.register(indentStyle);