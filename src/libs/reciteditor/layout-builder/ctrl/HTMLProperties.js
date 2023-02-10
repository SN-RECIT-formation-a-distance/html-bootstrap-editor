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
import { faRemoveFormat, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faPlus, faMinus, faEllipsisH, faGripLines, faSquare, faRuler, faEllipsisV, faFolder, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Utils, UtilsHTML, i18n, LayoutSpacingEditor as VCLayoutSpacingEditor} from '../../RecitEditor';
import {HTMLElementData} from './HTMLElementData';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class ColorSelectorInput{
    constructor(options, onChangeProp){
        this.type = 'colorselector'; // keep this attribute for backward compatibility
        this.options = options;
        this.onChangeProp = onChangeProp;
    }    

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class MinMaxValueInput{
    constructor(minName, valueName, maxName){
        this.type = 'minvaluemax'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.minName = minName;
        this.valueName = valueName;
        this.maxName = maxName;
    }

    onChange(el, value, data){
        el.style[this.minName] = value['min'];
        el.style[this.valueName] = value['value'];
        el.style[this.maxName] = value['max'];
    }
}

class TextInput{
    constructor(onChangeProp){
        this.type = 'text'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class ComboBox{
    constructor(options, onChangeProp){
        this.type = 'combobox'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.options = options;
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class RadioButton{
    constructor(options, onChangeProp, defaultValue){
        this.type = 'radio'; // keep this attribute for backward compatibility
        this.toggleType = 'radio'; // keep this attribute for backward compatibility
        this.options = options;
        this.defaultValue = defaultValue || [];
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class CheckboxButton{
    constructor(options, onChangeProp, defaultValue){
        this.type = 'radio'; // keep this attribute for backward compatibility
        this.toggleType = 'checkbox'; // keep this attribute for backward compatibility
        this.options = options;
        this.defaultValue = defaultValue || [];
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class ColorPicker{
    constructor(name){
        this.type = 'color'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.name = name;
    }

    onChange(el, value, data){
        el.style[this.name] = value;
    }
}

class IconPicker{
    constructor(){
        this.type = 'iconselector'; // keep this attribute for backward compatibility
        this.text = i18n.get_string('selecticon');
    }

    onChange(el, value, data){
        el.setAttribute('class', value);
    }
}

class PixabayPicker{
    constructor(onChangeProp){
        this.type = 'pixabay'; // keep this attribute for backward compatibility
        this.text = `${i18n.get_string('imagebank')} Pixabay`;
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class GridBuilder{
    constructor(){
        this.type = 'gridbuilder'; // keep this attribute for backward compatibility
        this.text = i18n.get_string('gridbuilder');
    }
}

class ImageSrc{
    constructor(onChangeProp, accept){
        this.type = 'ImageSrc'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.onChangeProp = onChangeProp || null;

        if (accept){
            this.accept = accept;
        }else{
            this.accept = ".jpg,.png";
        }
    }

    onChange(el, value, data){
        if(this.onChangeProp){
            this.onChangeProp(el, value, data);
        }
        else{
            el.src = value;
        }
    }
}

class TextArea{
    constructor(onChangeProp){
        this.type = 'textarea'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class LayoutSpacing{
    constructor(options, onChangeProp){
        this.type = 'layoutspacing'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.options = options;
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class MultiSelect{
    constructor(options, onChangeProp){
        this.type = 'multipleselect'; // keep this attribute for backward compatibility
        this.defaultValue = '';
        this.options = options;
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class ButtonGroup{
    constructor(options){
        this.type = 'buttongroup'; // keep this attribute for backward compatibility
        this.options = options;
    }
}

class LayoutSpacingEditor{
    constructor(onChangeProp){
        this.type = 'layoutspacingeditor'; // keep this attribute for backward compatibility
        this.onChangeProp = onChangeProp;
    }

    onChange(el, value, data){
        this.onChangeProp(el, value, data);
    }
}

class HTMLProperty{
    constructor(name, text, input){
        this.name = name || "";
        this.text = text || "";
        this.input = input || null;
    }

    getFlags(){ return {}; }
    getValue(){ return ""; }; // abstract method
}

export class HTMLWidthProperty extends HTMLProperty{
    constructor(){
        super('width',  i18n.get_string('width'), new MinMaxValueInput('minWidth', 'width', 'maxWidth'));
    }

    getValue(el, data){
        return {min:el.style.minWidth, value:el.style.width, max:el.style.maxWidth};
    }
}

export class HTMLHeightProperty extends HTMLProperty{
    constructor(){
        super('height',  i18n.get_string('height'), new MinMaxValueInput('minHeight', 'height', 'maxHeight'));
    }

    getValue(el, data){
        return {min:el.style.minWidth, value:el.style.width, max:el.style.maxWidth};
    }
}

export class HTMLFontSizeProperty extends HTMLProperty{
    constructor(){
        super('fontsize',  i18n.get_string('fontsize'));
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.style.fontSize;
    }

    onChange(el, value, data){
        el.style.fontSize = value;
    }
}

export class HTMLStyleProperty extends HTMLProperty{
    constructor(){
        super('style',  i18n.get_string('style'));
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.getAttribute('style');
    }

    onChange(el, value, data){
        el.setAttribute('style', value);
    }
}

export class HTMLFontFamilyProperty extends HTMLProperty{
    constructor(){
        super('fontfamily',  i18n.get_string('font'));

        this.options = [
            {text: 'Sans-serif', value:'sans-serif'},
            {text: 'Serif', value:'serif'},
            {text: 'Monospace', value:'monospace'},
            {text: 'Cursive', value:'cursive'},
            {text: 'Fantasy', value:'fantasy'},
            ...UtilsHTML.getAvailableFonts(),
        ];

        this.input = new ComboBox(this.options, this.onChange.bind(this));
    }

    getValue(el, data){
        return el.style.fontFamily;
    }

    onChange(el, value, data){
        el.style.fontFamily = value;
    }
}

export class HTMLColorProperty extends HTMLProperty{
    constructor(){
        super('color',  i18n.get_string('textcolor'), new ColorPicker('color'));
    }

    getValue(el, data){
        return (el.style.color ? el.style.color : '#000000');
    }
}

export class HTMLBackgroundProperty extends HTMLProperty{
    constructor(){
        super('backgroundcolor',  i18n.get_string('backgroundcolor'), new ColorPicker('backgroundColor'));
    }

    getValue(el, data){
        return (el.style.backgroundColor ? el.style.backgroundColor : '#FFFFFF');
    }
}

export class HTMLHrefProperty extends HTMLProperty{
    constructor(){
        super('href',  i18n.get_string('href'));
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.getAttribute('href');
    }

    onChange(el, value, data){
        el.setAttribute('href', value);
    }
}

export class HTMLTargetProperty extends HTMLProperty{
    constructor(){
        super('target',  i18n.get_string('linkaction'));

        this.options = [
            {text: i18n.get_string('samepage'), value:'_self'},
            {text: i18n.get_string('newtab'), value:'_blank' },
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }

    getValue(el, data){
        return [el.getAttribute('target')];
    }

    onChange(el, value, data){
        el.setAttribute('target', value);
    }
}

export class HTMLSourceProperty extends HTMLProperty{
    constructor(accept){
        super('src',  i18n.get_string('source'), new ImageSrc(null, accept));
    }

    getValue(el, data){
        return el.src;
    }
}

export class HTMLImageBankProperty extends HTMLProperty{
    constructor(isSrc){
        super('src', '');
        this.input = new PixabayPicker(this.onChange.bind(this));
        this.isSrc = isSrc;
    }

    getFlags(){
        return {autoAdd: false, showLabel: false};
    }
    
    getValue(el, data){
        if (this.isSrc){
            return el.src;
        }else{
            return el.style.backgroundImage;
        }
    }

    onChange(el, value, data){
        if (this.isSrc){
           el.setAttribute('src', value);
        }else{
            el.style.backgroundImage = 'url('+value+')';
        }
    }
}

export class HTMLAltProperty extends HTMLProperty{
    constructor(){
        super('alt',  <>{i18n.get_string('description')} <a target='_blank' href='https://www.w3.org/WAI/tutorials/images/decision-tree/'><FontAwesomeIcon icon={faInfoCircle}/> </a></>);
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.alt;
    }

    onChange(el, value, data){
        el.setAttribute("alt",  value);
    }
}

export class HTMLOuterHTMLProperty extends HTMLProperty{
    constructor(){
        super('outerhtml', i18n.get_string('sourcecode'));
        this.input = new TextArea(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.outerHTML;
    }

    onChange(el, value, data){
        let el2 = document.createElement('div');
        el2.innerHTML = value;
        if (el2.children[0] && el2.children[0].tagName == 'IFRAME'){
            for (let attr of el2.children[0].getAttributeNames()){
                el.setAttribute(attr, el2.children[0].getAttribute(attr))
            }
        }
        el2.remove()
    }
}

export class HTMLIdProperty extends HTMLProperty{
    constructor(){
        super('id',  i18n.get_string('id'));
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.getAttribute("id") || "";
    }

    onChange(el, value, data){
        el.setAttribute("id",  value);
    }
}

export class HTMLVideoButtonProperty extends HTMLProperty{
    constructor(){
        super('src',  i18n.get_string('videourl'));
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.getAttribute('data-videourl') || '';
    }

    onChange(el, value, data){
        value = Utils.formatVideoURLEmbed(value);
        el.setAttribute('data-videourl', value);
    }
}

export class HTMLVideoSourceProperty extends HTMLProperty{
    constructor(){
        super('src',  i18n.get_string('videourl'));
        this.input = new TextInput(this.onChange.bind(this));
    }

    getValue(el, data){
        let iframe = el;
        if (el.tagName == 'DIV') iframe = el.querySelector('iframe');
        return iframe.src;
    }

    onChange(el, value, data){
        let iframe = el;
        value = Utils.formatVideoURLEmbed(value);
        if (el.tagName == 'DIV') iframe = el.querySelector('iframe');
        iframe.src = value;
    }
}

export class HTMLEmbedProperty extends HTMLProperty{
    constructor(){
        super('src',  i18n.get_string('htmlcode'));
        this.input = new TextArea(this.onChange.bind(this));
    }

    getValue(el, data){
        return el.innerHTML;
    }

    onChange(el, value, data){
        el.innerHTML = value;
    }
}

export class HTMLClassProperty extends HTMLProperty{
    constructor(){
        super('classlist',  i18n.get_string('classlist'));
        this.input = new MultiSelect([], this.onChange.bind(this));
    }
    
    getFlags(){
        return {autoAdd: true, showLabel: true};
    }

    getValue(el, data){
        let list = [];
        for (let c of el.classList){
            list.push({value:c, text:c});
        }
        return list;
    }

    onChange(el, value, data){
        el.className = value.join(' ');
    }
}

export class HTMLMarginBorderPaddingProperty extends HTMLProperty{
    constructor(){
        super('layoutspacing',  i18n.get_string('spacing'));
        
        this.defaultValue = '';
        this.input = new LayoutSpacingEditor(this.onChange.bind(this));
    }
    
    getFlags(){
        return {showLabel: false};
    }

    getValue(el, data){
        let list = {};
        for (let c of VCLayoutSpacingEditor.styleKeys){
            if (el.style[c]){
                list[c] = el.style[c];
            }else{
                list[c] = '';
            }
        }
        return list;
    }

    onChange(el, value, data){
        el.style[value.name] = value.value;
    }
}

export class BsBackgroundProperty extends HTMLProperty{
    constructor(){
        super('bsBackground',  i18n.get_string('backgroundcolor'));

        this.options = [
            {text:"", value: "primary"},
            {text:"", value: "secondary"},
            {text:"", value: "success"},
            {text:"", value: "danger"},
            {text:"", value: "warning"},
            {text:"", value: "info"},
            {text:"", value: "light"},
            {text:"", value: "dark"},
            {text:"", value: "white"}
        ];

        this.input = new ColorSelectorInput(this.options, this.onChange.bind(this));
    }

    getFlags(el){
        let elClass = HTMLElementData.getElementClass(null, el);
        let prefix = (elClass ? `${elClass.cssProp.prefix}` : 'bg');
        return {fetchFromTheme: true, prefix: `${prefix}-`};
    }

    getValue(el, data){
        let result = "";
        let elClass = HTMLElementData.getElementClass(null, el);
        let prefix = (elClass ? `${elClass.cssProp.prefix}` : 'bg');

        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(`${prefix}-${item.value}`)){
                result = item.value;
                break;
            }
            if(classList.includes(`${prefix}-outline-${item.value}`)){
                result = item.value.replace('outline-', '');
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){
        let elClass = HTMLElementData.getElementClass(null, el);
        let prefix = (elClass ? `${elClass.cssProp.prefix}` : 'bg');
        let middlefix = '';

        for(let item of data.input.options){
            if (el.classList.contains(`${prefix}-${item.value}`)){
                el.classList.remove(`${prefix}-${item.value}`);
            }
            if (el.classList.contains(`${prefix}-outline-${item.value}`)){
                el.classList.remove(`${prefix}-outline-${item.value}`);
                middlefix = '-outline';
            }
        }

        if(value.length > 0){
            el.classList.add(`${prefix}${middlefix}-${value}`);
        }
    }
}

export class BsBackgroundImageProperty extends HTMLProperty{
    constructor(){
       super('backgroundimage',  i18n.get_string('backgroundimage'));
       this.input = new ImageSrc(this.onChange.bind(this));
    }

    getValue(el, data){
        return (el.style.backgroundImage ? el.style.backgroundImage : '');
    }

    onChange(el, value, data){
        if(value.length > 0){
            el.style.backgroundImage = `url('${value}')`;
        }
        else{
            el.style.backgroundImage = "";
        }
    }
}

export class HTMLBackgroundCoverProperty extends HTMLProperty{
    constructor(){
        super('backgroundcover', <>{i18n.get_string('backgroundcover')} <OverlayTrigger overlay={
            <Tooltip>{i18n.get_string('appliedasstyle')}</Tooltip>}>
                <a className='color-primary'><FontAwesomeIcon icon={faInfoCircle}/> </a></OverlayTrigger></>);

        this.options = [
            {text:i18n.get_string('yes'), value: "cover"},
            {text:i18n.get_string('no'), value: ""}                       
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = "";
                        
        if(el.style.backgroundSize == 'cover'){
            result = "cover";
        }

        return result;
    }

    onChange(el, value, data){

        if(value.length > 0){
            el.style.backgroundSize = 'cover';
        }else{
            el.style.backgroundSize = '';
        }
    }
}

export class BsShadowProperty extends HTMLProperty{
    constructor(){
        super('shadow',  i18n.get_string('shadow'));

        this.options = [
            {text: <FontAwesomeIcon icon={faRemoveFormat} title={i18n.get_string('removeformat')}/>, value:'default'},
            {text:i18n.get_string('none'), value: "shadow-none"},
            {text:"SM", value: "shadow-sm"},
            {text:"REG", value: "shadow"},
            {text:"LG", value: "shadow-lg"}
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this), ['default']);
    }

    getValue(el, data){
        let result = data.input.defaultValue;

        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(item.value)){
                result = [item.value];
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){
        for(let item of data.input.options){
            el.classList.remove(item.value);
        }

        if((value.length > 0) && (value !== data.input.defaultValue[0])){
            el.classList.add(value);
        }
    }
}

export class BsIconProperty extends HTMLProperty{
    constructor(){
       super('icon', '', new IconPicker());
    }

    getFlags(){
        return {autoAdd: false, showLabel: false};
    }

    getValue(el, data){
        return el.getAttribute('class');
    }
}

export class ModalGridProperty extends HTMLProperty{
    constructor(){
       super('grid',  i18n.get_string('grid'), new GridBuilder());
    }

    getValue(el, data){
        return el;
    }

    getFlags(){
        return {showLabel:false};
    }
}

export class BsIconSizeProperty extends HTMLProperty{
    constructor(){
        super('iconsize',  i18n.get_string('iconsize'));

        this.options = [
            {text:"fa-lg", value: "fa-lg"},
            {text:"fa-xs", value: "fa-xs"},
            {text:"fa-sm", value: "fa-sm"},
            {text:"fa-1x", value: "fa-1x"},
            {text:"fa-2x", value: "fa-2x"},
            {text:"fa-3x", value: "fa-3x"},
            {text:"fa-4x", value: "fa-4x"},
            {text:"fa-5x", value: "fa-5x"},
            {text:"fa-6x", value: "fa-6x"},
            {text:"fa-7x", value: "fa-7x"},
            {text:"fa-8x", value: "fa-8x"},
            {text:"fa-9x", value: "fa-9x"},
            {text:"fa-10x", value: "fa-10x"},
            {text:"fa-fw", value: "fa-fw"},
        ];

        this.input = new ComboBox(this.options, this.onChange.bind(this));
     }
 
    getValue(el, data){
        let result = "";
    
        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(item.value)){
                result = item.value;
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){                       
        for(let item of data.input.options){
            el.classList.remove(item.value);
        }

        if(value.length > 0){
            el.classList.add(value);
        }
    }
}

export class BsMarginProperty extends HTMLProperty{
    constructor(){
        super('margin',  i18n.get_string('margin'));

        let items = [0, 1, 2, 3, 4, 5]
        this.options = [
            {name: "mt", items: items}, 
            {name: "mr", items: items}, 
            {name: "mb", items: items}, 
            {name: "ml", items: items}, 
            {name: "m", items: items}
        ];

        this.input = new LayoutSpacing(this.options, this.onChange.bind(this));
     }
 
    getValue(el, data){
        let result = [];

        for(let i = 0; i <= 5; i++){
            for(let item of data.input.options){
                let className = `${item.name}-${i}`;
                if(el.classList.contains(className)){
                    result.push({name: item.name, value: i});
                }
            }
        }
        return result;
    }

    onChange(el, value, data){        
        value.oldValue = value.oldValue.toString();
        value.newValue = value.newValue.toString();

        if(value.oldValue.length > 0){
            el.classList.remove(`${value.name}-${value.oldValue}`);
        }
       
        if(value.newValue.length > 0){
            el.classList.add(`${value.name}-${value.newValue}`);
        }
    }
}

export class BsPaddingProperty extends HTMLProperty{
    constructor(){
        super('padding',  i18n.get_string('padding'));

        let items = [0, 1, 2, 3, 4, 5];
        this.options = [
            {name: "pt", items: items}, 
            {name: "pr", items: items}, 
            {name: "pb", items: items}, 
            {name: "pl", items: items}, 
            {name: "p", items: items}
        ];

        this.input = new LayoutSpacing(this.options, this.onChange.bind(this));
     }
 
    getValue(el, data){
        let result = [];

        for(let i = 0; i <= 5; i++){
            for(let item of data.input.options){
                let className = `${item.name}-${i}`;
                if(el.classList.contains(className)){
                    result.push({name: item.name, value: i});
                }
            }
        }
        return result;
    }

    onChange(el, value, data){       
        value.oldValue = value.oldValue.toString();
        value.newValue = value.newValue.toString();

        if(value.oldValue.length > 0){
            el.classList.remove(`${value.name}-${value.oldValue}`);
        }
       
        if(value.newValue.length > 0){
            el.classList.add(`${value.name}-${value.newValue}`);
        }
    }
}

export class BsTabProperty extends HTMLProperty{
    constructor(){
        super('style',  i18n.get_string('style'));

        this.options = [
            {text: <FontAwesomeIcon icon={faFolder} title={i18n.get_string('tab')}/>, value:'nav-tabs'},
            {text: <FontAwesomeIcon icon={faEllipsisH} title={i18n.get_string('pill')}/>, value:'nav-pills'}
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
     }
 
    getValue(el, data){
        let tab = el;
        if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
        if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
        if (el.classList.contains('tabs')) tab = el.querySelector('.nav');

        if (tab && tab.classList.contains('nav-pills')) return 'nav-pills';
        return '';
    }

    onChange(el, value, data){                       
        let tab = el;
        if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
        if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
        if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
        
        if(tab){
            tab.classList.remove('nav-pills');
            tab.classList.remove('nav-tabs');
            tab.classList.add(value);
        }
    }
}

export class BsTabJustifyProperty extends HTMLProperty{
    constructor(){
        super('justify',  i18n.get_string('justify'));

        this.options = [
            {text: <FontAwesomeIcon icon={faAlignLeft} title={i18n.get_string('left')}/>, value:''},
            {text: <FontAwesomeIcon icon={faAlignCenter} title={i18n.get_string('center')}/>, value:'justify-content-center'},
            {text: <FontAwesomeIcon icon={faAlignRight} title={i18n.get_string('right')}/>, value:'justify-content-end'},
            {text: <FontAwesomeIcon icon={faAlignJustify} title={i18n.get_string('fullwidth')}/>, value:'nav-fill'},
            {text: <FontAwesomeIcon icon={faEllipsisV} title={i18n.get_string('horizontal')}/>, value:'flex-column'},
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
     }
 
    getValue(el, data){
        let tab = el;
        if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
        if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
        if (el.classList.contains('tabs')) tab = el.querySelector('.nav');

        for(let item of data.input.options){
            if (tab.classList.contains(item.value)) return item.value;
        }
        return '';
    }

    onChange(el, value, data){                       
        let tab = el;
        if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
        if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
        if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
        
        if(tab){
            if (tab.classList.length > 0){
                for(let item of data.input.options){
                    if (item.value.length > 0)
                        tab.classList.remove(item.value);
                }
            }
            tab.classList.add(value);
        }
    }
}

export class BsAddTabProperty extends HTMLProperty{
    constructor(){
        super('addtab',  i18n.get_string('actions'));

        this.options = [
            {
                text: <span><FontAwesomeIcon icon={faPlus} title={i18n.get_string('addtab')}/>{i18n.get_string('tab')}</span>,
                onClick: function(el, value, data){
                    let tab = el;
                    if (el.classList.contains('nav-link')) tab = el.parentElement.parentElement;
                    if (el.classList.contains('tab-pane')) tab = el.parentElement.parentElement.querySelector('.nav');
                    if (el.classList.contains('tabs')) tab = el.querySelector('.nav');
                    
                    let items = tab.parentElement.querySelectorAll('.tab-pane');
                    for(let it of items){
                        it.classList.remove('active', 'show');
                    }
                    items = tab.parentElement.querySelectorAll('.nav-link');
                    for(let it of items){
                        it.classList.remove('active', 'show');
                    }
                    
                    let nav = document.createElement('li');
                    nav.classList.add('nav-item');
                    tab.appendChild(nav);
                    
                    let link = document.createElement('a');
                    link.classList.add('nav-link', 'active', 'show');

                    let tabid = tab.querySelectorAll('.nav-link').length + 1;
                    link.innerText = `Onglet ${tabid}`;
                    tabid = `tab${tabid}`;

                    link.setAttribute('data-toggle', 'tab');
                    link.setAttribute('role', 'tab');
                    link.setAttribute('href', '#'+tabid);
                    link.setAttribute('aria-controls', tabid);
                    nav.appendChild(link)

                    let content = tab.parentElement.querySelector('.tab-content');
                    let div = document.createElement('div');
                    div.classList.add('tab-pane', 'fade', 'mt-3', 'active', 'show');
                    div.setAttribute('role', 'tabpanel');
                    div.setAttribute('id', tabid);
                    div.setAttribute('aria-labelledby', tabid);
                    div.innerHTML = "<p>Contenu "+tabid+"</p>";
                    content.appendChild(div);
    
                    return {action: 'insert', nodes: [nav,content]};
                }
            }
        ];

        this.input = new ButtonGroup(this.options);
     }
 
    getValue(el, data){
        return el;
    }
}

export class BsAddAccordionProperty extends HTMLProperty{
    constructor(){
        super('addaccordion',  i18n.get_string('actions'));

        this.options = [
            {
                text: <span><FontAwesomeIcon icon={faPlus} title={i18n.get_string('add')}/>{i18n.get_string('accordion')}</span>,
                onClick: function(el, value, data){
                    let tab = el;
                    if (el.classList.contains('btn')) tab = el.parentElement.parentElement.parentElement.parentElement;
                    
                    let items = tab.parentElement.querySelectorAll('.collapse');
                    for(let it of items){
                        it.classList.remove('active', 'show');
                    }
                    let id = items.length + 1;
                    
                    let nav = document.createElement('div');
                    nav.classList.add('card');
                    tab.appendChild(nav);
                    nav.innerHTML = `
                    <div class="card-header" id="heading${id}">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">
                          Item #${id}
                        </button>
                      </h2>
                    </div>
                    <div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#${el.id}">
                      <div class="card-body">
                        Item #${id}
                      </div>
                    </div>`;
                    
    
                    return {action: 'insert', nodes: [nav]};
                }
            }
        ];

        this.input = new ButtonGroup(this.options);
     }
 
    getValue(el, data){
        return el;
    }
}

export class BsBorderProperty extends HTMLProperty{
    constructor(){
        super('border', <>{i18n.get_string('border')} <OverlayTrigger overlay={
            <Tooltip>{i18n.get_string('appliedasstyle')}</Tooltip>}>
                <a className='color-primary'><FontAwesomeIcon icon={faInfoCircle}/> </a></OverlayTrigger></>);

        this.options = [
            {name: "-top", items: ['0px','1px','2px','5px','10px','20px']}, 
            {name: "-right", items: ['0px','1px','2px','5px','10px','20px']}, 
            {name: "-bottom", items: ['0px','1px','2px','5px','10px','20px']}, 
            {name: "-left", items: ['0px','1px','2px','5px','10px','20px']}, 
            {name: "", items: ['0px','1px','2px','5px','10px','20px']}
        ];

        this.input = new LayoutSpacing(this.options, this.onChange.bind(this));
     }
 
    getValue(el, data){
        let result = [];

        for(let i = 0; i <= 5; i++){
            for(let item of data.input.options){
                if(el.style['border'+item.name+'-width'] == item.items[i]){
                    result.push({name:item.name, value: item.items[i]});
                }
            }
        }
        
        return result;
    }

    onChange(el, value, data){
        value.oldValue = value.oldValue.toString();
        value.newValue = value.newValue.toString();

        if(value.oldValue.length > 0){
            el.style['border'+value.name+'-width'] = '';
            el.style['border'+value.name+'-style'] = '';
        }
        
        if(value.newValue.length > 0){
            el.style['border'+value.name+'-width'] = value.newValue;
            if (!el.style['border-style']){
                el.style['border'+value.name+'-style'] = 'solid'; //Set solid if not set, otherwise border wont show
            }
        }
    }
}

export class BsHeadingProperty extends HTMLProperty{
    constructor(){
        super('headingprop', i18n.get_string('headingstyle'));

        this.options = [
            {text:'h1', value: "h1"},                
            {text:'h2', value: "h2"},                
            {text:'h3', value: "h3"},                
            {text:'h4', value: "h4"},                
            {text:'h5', value: "h5"},                
            {text:'h6', value: "h6"},
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }

    getValue(el, data){
        let result = "";

        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(`${item.value}`)){
                result = item.value;
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){                       
        for(let item of data.input.options){
            el.classList.remove(`${item.value}`);
        }

        if(value.length > 0){
            el.classList.add(`${value}`);
        }
    }
}

export class BsBorderColorProperty extends HTMLProperty{
    constructor(){
        super('bordercolor',  i18n.get_string('bordercolor'));

        this.options = [
            {text:"", value: "primary"},
            {text:"", value: "secondary"},
            {text:"", value: "success"},
            {text:"", value: "danger"},
            {text:"", value: "warning"},
            {text:"", value: "info"},
            {text:"", value: "light"},
            {text:"", value: "dark"},
            {text:"", value: "white"}
        
        ];

        this.input = new ColorSelectorInput(this.options, this.onChange.bind(this));
    }
 
    getFlags(){
        return {prefix: 'border-', fetchFromTheme: true};
    }

    getValue(el, data){
        let result = "";

        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(`border-${item.value}`)){
                result = item.value;
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){                       
        for(let item of data.input.options){
            el.classList.remove(`border-${item.value}`);
        }

        if(value.length > 0){
            el.classList.add(`border-${value}`);
        }
    }
}

export class BsBorderStyleProperty extends HTMLProperty{
    constructor(){
        super('borderstyle',  i18n.get_string('borderstyle'));

        this.options = [
            {text: <FontAwesomeIcon className="mr-1" icon={faRemoveFormat} title="Default"/>, value:''},
            {text: <FontAwesomeIcon className="mr-1" icon={faSquare} title="Solide"/>, value:'solid'},
            {text: <FontAwesomeIcon className="mr-1" icon={faRuler} title="Barré"/>, value:'dashed' },
            {text: <FontAwesomeIcon className="mr-1" icon={faEllipsisH} title="Pointillé"/>, value:'dotted' },
            {text: <FontAwesomeIcon className="mr-1" icon={faGripLines} title="Double"/>, value:'double' }
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        return [el.style.borderStyle];
    }

    onChange(el, value, data){
        for (let c of ['top', 'bottom', 'left', 'right']){
            el.style['border-'+c+'-style'] = '';
        }                      
        el.style.borderStyle = value;
    }
}

export class BsBorderRadiusProperty extends HTMLProperty{
    constructor(){
        super('borderradius',  i18n.get_string('borderradius'));

        this.options = [
            {text:"Rounded", value: "rounded"},
            {text:"Rounded-Top", value: "rounded-top"},
            {text:"Rounded-Right", value: "rounded-right"},
            {text:"Rounded-Bottom", value: "rounded-bottom"},
            {text:"Rounded-Left", value: "rounded-left"},
            {text:"Rounded-Circle", value: "rounded-circle"},
            {text:"Rounded-Pill", value: "rounded-pill"},
            {text:"Rounded-0", value: "rounded-0"},
        
        ];

        this.input = new ComboBox(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = "";

        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(item.value)){
                result = item.value;
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){                       
        for(let item of data.input.options){
            el.classList.remove(item.value);
        }

        if(value.length > 0){
            el.classList.add(value);
        }
    }
}

export class BsTextColorProperty extends HTMLProperty{
    constructor(){
        super('color',  i18n.get_string('textcolor'));

        this.options = [
            {text:"", value: "primary"},
            {text:"", value: "secondary"},
            {text:"", value: "success"},
            {text:"", value: "danger"},
            {text:"", value: "warning"},
            {text:"", value: "info"},
            {text:"", value: "light"},
            {text:"", value: "dark"},
            {text:"", value: "white"}
        
        ];

        this.input = new ColorSelectorInput(this.options, this.onChange.bind(this));
    }
 
    getFlags(){
        return {prefix: 'text-', fetchFromTheme: true};
    }

    getValue(el, data){
        let result = "";

        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(`text-${item.value}`)){
                result = item.value;
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){                       
        for(let item of data.input.options){
            el.classList.remove(`text-${item.value}`);
        }

        if(value.length > 0){
            el.classList.add(`text-${value}`);
        }
    }
}

export class BsTextAlignmentProperty extends HTMLProperty{
    constructor(){
        super('alignment',  i18n.get_string('alignment'));

        this.options = [
            {text: <FontAwesomeIcon icon={faRemoveFormat} title={i18n.get_string('default')}/>, value:'default'},
            {text: <FontAwesomeIcon icon={faAlignLeft} title={i18n.get_string('left')}/>, value:'text-left' },
            {text: <FontAwesomeIcon icon={faAlignCenter} title={i18n.get_string('center')}/>, value:'text-center' },
            {text: <FontAwesomeIcon icon={faAlignRight} title={i18n.get_string('right')}/>, value:'text-right' },
            {text: <FontAwesomeIcon icon={faAlignJustify} title={i18n.get_string('justify')}/>, value:'text-justify' }
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this), ['default']);
    }
 
    getValue(el, data){
        for(let option of data.input.options){
            if (el.classList.contains(option.value)){
                return [option.value];
            }
        }
        
        return data.input.defaultValue;
    }

    onChange(el, value, data){                       
        if(el.classList.length > 0){
            for(let option of data.input.options){
                el.classList.remove(option.value);
            }
        }
        
        if(data.input.defaultValue.join() === value){
            return;
        }

        el.classList.add(value)
    }
}

export class BsBtnBlockProperty extends HTMLProperty{
    constructor(){
        super('btnblock',  i18n.get_string('buttonfullwidth'));

        this.options = [
            {text:i18n.get_string('yes'), value: "btn-block"},
            {text:i18n.get_string('no'), value: ""}                       
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = "";
                        
        if(el.classList.contains("btn-block")){
            result = "btn-block";
        }

        return result;
    }

    onChange(el, value, data){                       
        if(el.classList.contains("btn-block")){
            el.classList.remove("btn-block");
        }

        if(value.length > 0){
            el.classList.add(value);
        }
    }
}

export class BsGridResponsiveProperty extends HTMLProperty{
    constructor(){
        super('gridresponsive', i18n.get_string('reverserow'));

        this.options = [
            {text:i18n.get_string('yes'), value: "flex-md-row-reverse"},
            {text:i18n.get_string('no'), value: ""}     
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = "";
                        
        if(el.classList.contains("flex-md-row-reverse")){
            result = "flex-md-row-reverse";
        }

        return result;
    }

    onChange(el, value, data){                       
        if(el.classList.contains("flex-md-row-reverse")){
            el.classList.remove("flex-md-row-reverse");
        }
        if(el.classList.contains("flex-md-row")){
            el.classList.remove("flex-md-row");
        }

        if(value.length > 0){
            el.classList.add(value);
        }
    }
}

export class BsGridVerticalAlignProperty extends HTMLProperty{
    constructor(){
        super('gridalign', i18n.get_string('verticalalign'));

        this.options = [
            {text:i18n.get_string('yes'), value: "align-self-center"},
            {text:i18n.get_string('no'), value: ""}     
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = "";
                        
        if(el.classList.contains("align-self-center")){
            result = "align-self-center";
        }

        return result;
    }

    onChange(el, value, data){
        if(el.classList.contains("align-self-center")){
            el.classList.remove("align-self-center");
        }

        if(value.length > 0){
            el.classList.add(value);
        }
    }
}

export class BsGridPaddingProperty extends HTMLProperty{
    static classList = {
        top: ['pt-3', 'pt-md-4', 'pt-lg-5'],
        bottom: ['pb-3', 'pb-md-4', 'pb-lg-5'],
        lateral: ['px-3', 'px-md-4', 'px-lg-5'],
        remove: ['p-', 'pb-', 'pt-', 'pl-', 'pr-', 'px-', 'py-']
    }

    static getPaddingClassList(){
        let result = [];
        for (let item of BsGridPaddingProperty.classList['remove']){
            for(let i = 0; i < 6; i++){
                result.push(item+i);
                result.push(`${item}md-${i}`);
                result.push(`${item}lg-${i}`);
            }
        }

        return result;
    }

    constructor(){
        super('gridpadding', i18n.get_string('paddingtype'));

        this.options = [
            {text:<FontAwesomeIcon icon={faRemoveFormat}/>, value: "remove"},
            {text:i18n.get_string('top'), value: "top"},
            {text:i18n.get_string('bottom'), value: "bottom"},   
            {text:i18n.get_string('lateral'), value: "lateral"},  
        ];

        this.input = new CheckboxButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = [];
    
        for (let v in BsGridPaddingProperty.classList){
            let exists = true;
            for (let cl of BsGridPaddingProperty.classList[v]){
                if(!el.classList.contains(cl)){
                    exists = false;
                }
            }
            if (exists){
                result.push(v)
            }
        }

        return result;
    }

    onChange(el, values, data){
        if (values.includes('remove')){
            let combinations = BsGridPaddingProperty.getPaddingClassList();
            el.classList.remove(...combinations);
            
            return;
        }

        for (let v in BsGridPaddingProperty.classList){
            for (let cl of BsGridPaddingProperty.classList[v]){
                if(el.classList.contains(cl)){
                    el.classList.remove(cl);
                }
            }
        }

        if(values.length > 0){
            for (let v of values){
                for (let cl of BsGridPaddingProperty.classList[v]){
                    el.classList.add(cl);
                }
            }
        }
    }
}

export class BsBtnOutlineProperty extends HTMLProperty{
    constructor(){
        super('btnoutline',  i18n.get_string('btnoutline'));

        this.options = [
            {text:i18n.get_string('yes'), value: true},
            {text:i18n.get_string('no'), value: false}
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        for (let c of el.classList){
            if (c.includes('btn-outline')){
                return true;
            }
        }
        return false;
    }

    onChange(el, value, data){                       
        if (value == false){
            for (let c of el.classList){
                if (c.includes('btn-outline')){
                    let classN = c.replace('outline-', '');
                    el.classList.remove(c);
                    el.classList.add(classN);
                }
            }
        }else{
            for (let c of el.classList){
                if (c.includes('btn-')){
                    let classN = c.replace('btn-', 'btn-outline-');
                    el.classList.remove(c);
                    el.classList.add(classN);
                }
            }
        }
    }
}

export class BsBtnSizeProperty extends HTMLProperty{
    constructor(){
        super('btnsize',  i18n.get_string('size'));

        this.options = [
            {text:<FontAwesomeIcon icon={faRemoveFormat}/>, value: ""},
            {text:i18n.get_string('big'), value: "btn-lg"},
            {text:i18n.get_string('small'), value: "btn-sm"},
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        let result = "";
    
        let classList = [...el.classList]

        for(let item of data.input.options){
            if(classList.includes(item.value)){
                result = item.value;
                break;
            }
        }

        return result;
    }

    onChange(el, value, data){                       
        for(let item of data.input.options){
            if (item.value.length > 0){
                el.classList.remove(item.value);
            }
        }

        if(value.length > 0){
            el.classList.add(value);
        }
    }
}

export class BsTableActionProperty extends HTMLProperty{
    constructor(){
        super('tableaction',  i18n.get_string('actions'));

        this.options = [ 
            {
                text: <span><FontAwesomeIcon icon={faPlus}/>{" Colonne"}</span>, 
                onClick: function(el){
                    let table = el;                                
                    let result = UtilsHTML.tableAddCol(table);
                    return {action: 'insert', nodes: result};
                }
            },
            {
                text: <span><FontAwesomeIcon icon={faPlus}/>{" Ligne"}</span>, 
                onClick: function(el){
                    let result = {action: '', nodes: null};
                    let table = el;
                    result.nodes = UtilsHTML.tableAddRow(table);

                    if(result.nodes.length > 0){
                        result.action = 'insert';
                    }

                    return result;
                }
            }
        ];

        this.input = new ButtonGroup(this.options);
    }
 
    getValue(el, data){
        return el;
    }
}

export class BsTableBorderProperty extends HTMLProperty{
    constructor(){
        super('tableborder',  i18n.get_string('border'));

        this.options = [
            {text: i18n.get_string('no'), value:0},
            {text: i18n.get_string('yes'), value:1},
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        return el.border ? 1 : 0;
    }

    onChange(el, value, data){                       
        if(value == 1){
            el.border = true;
        }else{
            el.removeAttribute('border');
        }
    }
}

export class BsTableStripedProperty extends HTMLProperty{
    constructor(){
        super('tablestriped',  i18n.get_string('striped'));

        this.options = [
            {text: i18n.get_string('no'), value:0},
            {text: i18n.get_string('yes'), value:1},
        ];

        this.input = new RadioButton(this.options, this.onChange.bind(this));
    }
 
    getValue(el, data){
        return el.classList.contains('table-striped') ? 1 : 0;
    }

    onChange(el, value, data){                       
        if(value == 1){
            el.classList.add('table-striped');
        }else{
            el.classList.remove('table-striped');
        }
    }
}

export class BsTableCellActionProperty extends HTMLProperty{
    constructor(){
        super('tablecellaction',  i18n.get_string('actions'));

        this.options = [ 
            {
                text: <span><FontAwesomeIcon icon={faMinus}/>{i18n.get_string('line')}</span>, 
                onClick: function(el){
                    let table = el.parentElement.parentElement;
                    for (let row of table.rows){
                        
                        try{
                            el.deleted = true;
                            row.deleteCell(el.cellIndex);
                        }
                        catch(ex){
                            console.log(ex);
                        }
                        
                    }
                    //deleteRow
                    return {action: 'delete', nodes: null};
                }
            },
            {
                text: <span><FontAwesomeIcon icon={faPlus}/>{i18n.get_string('line')}</span>, 
                onClick: function(el){
                    let result = {action: '', nodes: null};
                    let table = UtilsHTML.getTableFromCell(el);
                    
                    if(table === null){
                        return result;
                    }
                    
                    result.nodes = UtilsHTML.tableAddRow(table);

                    if(result.nodes.length > 0){
                        result.action = 'insert';
                    }
                    
                    return result;
                }
            },
            {
                text: <span><FontAwesomeIcon icon={faPlus}/>{i18n.get_string('column')}</span>, 
                onClick: function(el){
                    let table = UtilsHTML.getTableFromCell(el);
                    let result = UtilsHTML.tableAddCol(table);
                    return {action: 'insert', nodes: result};
                }
            },
        ];

        this.input = new ButtonGroup(this.options);
    }
 
    getValue(el, data){
        return el;
    }
}

export class HTMLPropertiesData{
    static propsAssignmentFacade = {
        general: {
            min: ['bs-general'],
            all: ['bs-general', 'htmlattributes']
        },
        text: {
            min: ['bs-text'],
            all: ['bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'font', 'layout', 'background', 'htmlattributes']
        },
        image:  {
            min:['source', 'alt'],
            all:['source', 'alt', 'bs-general', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'htmlattributes']
        },
        video: {
            min: ['videosource'],
            all: ['bs-general', 'bs-spacing', 'bs-border', 'videosource', 'layout', 'background', 'htmlattributes']
        },
        icon: {
            min: ['icon'],
            all: ['icon', 'font', 'bs-general', 'bs-text', 'bs-spacing', 'bs-border', 'background', 'htmlattributes']
        },
        link: {
            min: ['link', 'bs-button'],
            all: ['bs-general', 'bs-button', 'bs-spacing', 'bs-border', 'font', 'layout', 'link', 'htmlattributes']
        },
        buttons: {
            min: ['link', 'bs-button'], 
            all: ['bs-general', 'bs-button', 'bs-spacing', 'bs-border', 'font', 'layout', 'link', 'htmlattributes']
        },
        containers: {
            min: ['bs-background', 'bs-border'],
            all: ['bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
        },
        accordion: {
            min: ['accordion'],
            all: ['accordion', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']
        }
    };
}