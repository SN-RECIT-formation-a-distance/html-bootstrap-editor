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

import {i18n, Assets} from '../../RecitEditor';
import {HTMLPropertiesData} from './HTMLProperties';
 
 /**
  * Abstract class
  */
class HTMLElement{
     constructor(name, tagName, type, properties){
         this.name = name || "";
         this.tagName = tagName || "";
         this.type = type || "native";
         this.properties = properties || {all: [], min: []};
         this.cssProp = {prefix: "bg"};
         this.visible = true;
         this.panels = {components: 1, properties: 0, treeView: 1};
     }
 
     getDesc(el){
         return this.name;
     }

     getHelpText(el){
        return null;
     }
 
     create(){ 
         let el = document.createElement(this.tagName);
         return el;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.tagName.toLowerCase() === this.tagName.toLowerCase());
     }
 
     createElementDZ(desc){
         let el = document.createElement("div");
         el.classList.add("dropping-zone");
         el.innerHTML = desc || "";
         return el;
     }

     getDescDZ(el){
        return "<span class='p-1 disabled badge ml-2 badge-warning nopointerevents'>"+this.getDesc(el)+"</span>";
     }

     prepareDroppingZones(el){ 
        let elName = this.getDescDZ(el);
         if(el.children.length > 0){
             el.insertBefore(this.createElementDZ(i18n.get_string('insidebegining')+elName), el.firstChild);    
             el.appendChild(this.createElementDZ(i18n.get_string('insideend')+elName));
         } 
         else{
             el.appendChild(this.createElementDZ(i18n.get_string('inside')+elName));
         }
 
         el.parentNode.insertBefore(this.createElementDZ(i18n.get_string('before')+elName), el);
         el.parentNode.insertBefore(this.createElementDZ(i18n.get_string('after')+elName), el.nextSibling);
     }
 }
 
 export class HTMLBodyElement extends HTMLElement{
     constructor(){
         super('Body', 'body', 'native');
         this.visible = false;
     }
 
     prepareDroppingZones(el){ 
         if(el.children.length > 0){
             el.insertBefore(this.createElementDZ(i18n.get_string('insidebegining')), el.firstChild);    
             el.appendChild(this.createElementDZ(i18n.get_string('insideend')));
         } 
         else{
             el.appendChild(this.createElementDZ(i18n.get_string('inside')));
         }
     }
 }
 
 export class HTMLHeadingElement extends HTMLElement{
     constructor(name, tagName, icon){
         super(name, tagName, 'native', {
            min: ['heading', 'bs-text'],
            all: ['heading', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'font', 'layout', 'background',  'htmlattributes']
        },);
        this.icon = icon;
     }
 
     create(){ 
         let el = document.createElement(this.tagName);
         el.innerText = i18n.get_string('heading');
         if (this.icon){
            el.innerHTML = "<i class='fa fa-search'></i> " + el.innerText;
        }
         return el;
     }
 
     prepareDroppingZones(el){        
         el.parentNode.insertBefore(this.createElementDZ(i18n.get_string('before')+this.getDescDZ(el)), el);
         el.parentNode.insertBefore(this.createElementDZ(i18n.get_string('after')+this.getDescDZ(el)), el.nextSibling);
     }
 
     equal(el){
         if(el === null){ return false; }
 
         for (let i = 1; i < 7; i++){
            if (el.tagName.toLowerCase() == "h"+i){
                return true;
            }
        }
        return false;
     }

     getDesc(el){
        return el.tagName;
     }
 }

 
 export class HTMLParagraphElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('paragraph'), 'p', 'native', HTMLPropertiesData.propsAssignmentFacade.text);
     }
 
     create(){ 
         let el = document.createElement(this.tagName);
         el.innerText = i18n.get_string('paragraph');
         return el;
     }
 
     prepareDroppingZones(el){        
         el.parentNode.insertBefore(this.createElementDZ(i18n.get_string('before')+this.getDescDZ()), el);
         el.parentNode.insertBefore(this.createElementDZ(i18n.get_string('after')+this.getDescDZ()), el.nextSibling);
     }
 }
 
 export class HTMLLinkElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('link'), "a", 'native', HTMLPropertiesData.propsAssignmentFacade.link);
         this.cssProp.prefix = 'btn';
     }
 
     create(){ 
         let el = document.createElement(this.tagName);
         el.innerText = i18n.get_string('link');
         el.setAttribute('href', '#');
         el.setAttribute('target', '_self');
         return el;
     }
 }
 
 export class HTMLImageFigureElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('imagewithcaption'), "figure", 'native', HTMLPropertiesData.propsAssignmentFacade.general);
         this.visible = false;
     }
 }
 
 export class HTMLButtonElement extends HTMLElement{
     constructor(name, tagName, type, properties){
         super(name, tagName, type, properties);
         this.cssProp.prefix = 'btn';
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('btn') && el.tagName.toLowerCase() !== "a");
     }
 
     create(){ 
         let el = document.createElement("a");
         el.setAttribute("href", "#");
         el.classList.add('btn');
         el.classList.add('btn-primary');
         el.innerHTML = i18n.get_string('button');
         return el;
     }
 }
 
 /*export class HTMLButtonCollapseElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('collapsebutton'), 'buttoncollapse', 'bootstrap', [...HTMLPropertiesData.propsAssignmentFacade.controls, 'collapse']);
         this.cssProp.prefix = 'btn';
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('btn-collapse'));
     }
 
     create(){ 
         let el = document.createElement("button");
         el.classList.add('btn');
         el.classList.add('btn-primary', 'btn-collapse');
         el.setAttribute('data-bs-toggle', 'collapse');
         el.innerHTML = i18n.get_string('collapsebutton');
         return el;
     }
 }*/
 
 export class HTMLButtonVideoElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('videobutton'), 'videobtn', 'bootstrap', {all: [...HTMLPropertiesData.propsAssignmentFacade.buttons.all, 'videobtn'], min: ['videobtn']});
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('attoreciteditor_videobtn') || el.classList.contains('videobtn'));//Videobtn is legacy class
     }
 
     create(){ 
         let el = document.createElement("button");
         el.innerHTML = i18n.get_string('videobutton');
         el.classList.add('btn');
         el.classList.add('btn-primary');
         el.classList.add('attoreciteditor_videobtn');
         el.setAttribute('data-videourl', 'https://www.youtube.com/embed/WvljI0VIq-E?rel=0');
         return el;
     }
 }
 
 export class HTMLMediaElement extends HTMLElement{
     constructor(name, tagName, type, properties){
         super(name, tagName, type, properties);
     }
 }
 
 export class HTMLAudioElement extends HTMLMediaElement{
     constructor(){
         super(i18n.get_string('audio'), 'audio', 'native', {all: ['bs-general', 'bs-spacingborder', 'htmlattributes', 'sourceaudio', 'layout'], min:['sourceaudio']});
     }
 
     create(){ 
         let el = document.createElement(this.tagName);
         el.setAttribute('controls', '');
         return el;
     }

     getHelpText(){
        return i18n.get_string('audiohelp');
     }
 }
 
 export class HTMLVideoElement extends HTMLMediaElement{
     constructor(name, tagName, type){
         super(name, 'video', type, HTMLPropertiesData.propsAssignmentFacade.video);
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('video') || el.classList.contains('video-container'));
     }
 
     create(){
         let el = document.createElement("div");
         el.classList.add('embed-responsive');
         el.classList.add('embed-responsive-16by9');
         el.classList.add('video-container');
         
         let iframe = document.createElement("iframe");
         iframe.classList.add('embed-responsive-item');
         iframe.classList.add('video');
         iframe.setAttribute('frameborder', '0');
         iframe.setAttribute('allowfullscreen', '1');
         iframe.src = 'https://www.youtube.com/embed/WvljI0VIq-E?rel=0'
         el.appendChild(iframe)
         return el;
     }
 }
 
 export class HTMLDivElement extends HTMLElement{
     constructor(name, tagName, type, properties){
         super(name || "Div", tagName || "div", type || 'native', properties || HTMLPropertiesData.propsAssignmentFacade.containers);
     }
 }
 
 export class HTMLEmbedElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('embed'), 'div', 'bootstrap', {all: ['bs-general', 'bs-spacingborder','marginborderpadding', 'layout', 'embed'], min: ['embed']});
     }
 
     create(){ 
         let el = document.createElement('div');
         el.classList.add('embedelement');
         return el;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('embedelement'));
     }
 }
 
 export class HTMLIframeElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('iframe'), 'iframe', 'native', {all: ['outerhtml','marginborderpadding', 'layout'], min: ['outerhtml']});
         this.visible = false;
     }
 
     create(){ 
         let el = document.createElement('iframe');
         return el;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.tagName == 'IFRAME');
     }
 }
 
 export class HTMLSpanElement extends HTMLElement{
     constructor(){
         super("Span", "span", 'native', HTMLPropertiesData.propsAssignmentFacade.containers);
         this.visible = false;
     }
 }
 
 export class HTMLSectionElement extends HTMLElement{
     constructor(){
         super("Section", "section", 'native', {
            min: ['bs-grid', 'modal-grid', 'bs-background', 'bs-border'],
            all: ['bs-grid', 'modal-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']});
     }
 }
 
 export class HTMLGridElement extends HTMLElement{
     constructor(){
         super('Container', 'grid', 'bootstrap', {
         min: ['bs-grid', 'modal-grid', 'bs-background', 'bs-border'],
         all: ['bs-grid', 'modal-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']});
         this.modalCreation = true;
     }

    create(){
    let el = document.createElement("div");
    el.classList.add("container-fluid");
    el.setAttribute('data-empty', '1')
    
    let row = document.createElement("div");
    row.classList.add("row");
    el.appendChild(row);

    
    let col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);

    col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);

    col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);

    return el;
    }
 
    equal(el){
        if(el === null){ return false; }

        return (el.classList.contains('container') || el.classList.contains('container-fluid'));
    }
     
 }
 
 export class HTMLRowElement extends HTMLElement{
     constructor(){
         super('Row', 'row', 'bootstrap', {
            min: ['bs-row', 'bs-background', 'bs-border'],
            all: ['bs-row', 'bs-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']});
         this.visible = false;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('row') || el.classList.contains('attoreciteditor_row-fluid'));
     }
 
     create(){
         let el = document.createElement("div");
         el.classList.add("row");
         return el;
     }
 }
 
 export class HTMLColElement extends HTMLElement{
     constructor(){
         super('Col', 'col', 'bootstrap', {
            min: ['bs-col', 'bs-background', 'bs-border'],
            all: ['bs-col', 'bs-grid', 'bs-general', 'bs-text', 'bs-background', 'bs-spacing', 'bs-border', 'layout', 'background', 'htmlattributes']});
         this.visible = false;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         let containsCol = false;
         for (let i = 0; i <= 12; i++){
             if (el.classList.contains('col-'+i)){
                 containsCol = true;
             }
         }
         return (el.classList.contains('col') || containsCol);
     }
 
     create(){
         let el = document.createElement("div");
         el.classList.add("col");
         return el;
     }
 
     prepareDroppingZones(el){        
         if(el.children.length > 0){
             el.insertBefore(this.createElementDZ(i18n.get_string('insidebegining')+this.getDescDZ()), el.firstChild);    
             el.appendChild(this.createElementDZ(i18n.get_string('insideend')+this.getDescDZ()));
         } 
         else{
             el.appendChild(this.createElementDZ(i18n.get_string('inside')+this.getDescDZ()));
         }
     }
 }
 
 export class HTMLUListElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('list'), "ul", 'native', HTMLPropertiesData.propsAssignmentFacade.containers);
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.innerHTML = "<li>"+i18n.get_string('list')+"</li>";
         return el;
     }
 }
 
 export class HTMLOListElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('numberedlist'), "ol", 'native', HTMLPropertiesData.propsAssignmentFacade.containers);
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.innerHTML = "<li>"+i18n.get_string('numberedlist')+"</li>";
         return el;
     }
 }
 
 export class HTMLTableElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('table'), 'table', 'nativecomponent', {all: ['bs-table', ...HTMLPropertiesData.propsAssignmentFacade.containers.all], min: ['bs-table']});
         this.cssProp.prefix = 'table';
     }
 
     create(){
         let el = document.createElement('table');
         el.classList.add('table')
         let tbody = document.createElement('tbody')
         el.appendChild(tbody)
        
         for (let i = 0; i < 2; i++){
             let row = document.createElement('tr');
             tbody.appendChild(row);
             for (let j = 0; j < 2; j++){
                 let tag = 'td';
                 if (i == 0) tag = 'th'
                 let cell = document.createElement(tag)
                 row.appendChild(cell)
             }
         }
 
         return el;
     }
 }
 
 export class HTMLTableDataCellElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('tablecell'), "td", 'native', {all: ['bs-tablecell', ...HTMLPropertiesData.propsAssignmentFacade.containers.all], min: ['bs-tablecell']});
         this.visible = false;
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.innerHTML = i18n.get_string('tablecell');
         return el;
     }
 }
 
 export class HTMLTableHeaderCellElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('tableheader'), "th", 'native', {all: ['bs-tablecell', ...HTMLPropertiesData.propsAssignmentFacade.containers.all], min: ['bs-tablecell']});
         this.visible = false;
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.innerHTML = i18n.get_string('tablecell');
         return el;
     }
 }
 
 export class HTMLTableRowElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('tablerow'), "tr", 'native', HTMLPropertiesData.propsAssignmentFacade.containers);
         this.visible = false;
     }
 
     create(){
         let el = document.createElement(this.tagName);
         return el;
     }
 }
 
 export class HTMLLIElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('listitem'), "li", 'native', {all: ['bs-general', 'bs-spacingborder', 'htmlattributes', 'font', 'layout', 'background'], min: []});
        this.visible = false;
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.innerText = i18n.get_string('listitem');
         return el;
     }
 }
 
 export class HTMLAlertElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('alert'), "div", 'bootstrap');
         this.cssProp.prefix = "alert";
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('alert'));
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.classList.add("alert");
         el.classList.add("alert-primary");
         el.setAttribute("role", "alert");
         let p = document.createElement('p');
         el.appendChild(p)
         return el;
     }
 }
 
 export class HTMLAvatarCardElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('avatarcard'), "div", 'bootstrap');
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('avatarcard'));
     }
 
     create(){
         let card = document.createElement("div");
         card.classList.add("card", "shadow");
         card.style.marginTop = '60px';
         
         let header = document.createElement("div");
         header.classList.add('mx-auto', 'bg-white');
         card.appendChild(header);
         
         let el = document.createElement("img");
         el.classList.add("rounded-circle", "img-fluid", "shadow");
         el.setAttribute("src", `${Assets.ImageAvatar}`);
         el.style.height = '120px';
         el.style.width = '120px';
         el.style.marginTop = '-60px';
         el.style.overflow = 'hidden';
         el.style.borderRadius = '50%'
         header.appendChild(el);
 
         let body = document.createElement("div");
         body.classList.add("card-body");
         card.appendChild(body);

         el = document.createElement("h3");
         el.innerHTML = i18n.get_string('title');
         el.classList.add("text-center");
         el.classList.add("mb-4");
         body.appendChild(el);
         
         el = document.createElement("hr");
         body.appendChild(el);

         el = document.createElement("p");
         el.classList.add('dark-gray-text', 'text-center', 'mt-5');
         el.innerHTML = 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis voluptate ab error quam dolores doloremque, quae consectetur.';
         body.appendChild(el);
 
         return card;
     }
 }
 
 export class HTMLCardElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('card'), "div", 'bootstrap');
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('card'));
     }
 
     create(){
         let card = document.createElement("div");
         card.classList.add("card", "shadow", "border-0");
         
         
         let el = document.createElement("img");
         el.classList.add("card-img-top");
         el.setAttribute("src", `${Assets.ImageEmpty}`);
         card.appendChild(el);
 
         let body = document.createElement("div");
         body.classList.add("card-body", "bg-white");
         card.appendChild(body);

         el = document.createElement("h3");
         el.innerHTML = i18n.get_string('title');
         el.classList.add("text-center");
         el.classList.add("mb-4");
         body.appendChild(el);
         
         el = document.createElement("p");
         el.innerHTML = 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis voluptate ab error quam dolores doloremque, quae consectetur.';
         body.appendChild(el);
 
         el = document.createElement("div");
         el.classList.add("card-footer", "bg-white", "border-0", "mb-0");
         card.appendChild(el);
 
         return card;
     }
 }
 
 export class HTMLCardBodyElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('cardbody'), "div", 'bootstrap');
         this.visible = false;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('card-body'));
     }
 
     create(){
         let el = document.createElement("div");
         el.classList.add("card-body");
         return el;
     }
 }
 
 export class HTMLCardHeaderElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('cardheader'), "div", 'bootstrap');
         this.visible = false;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('card-header'));
     }
 
     create(){
         let el = document.createElement("div");
         el.classList.add("card-header");
         return el;
     }
 }
 
 export class HTMLCardFooterElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('cardfooter'), "div", 'bootstrap');
         this.visible = false;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('card-footer'));
     }
 
     create(){
         let el = document.createElement("div");
         el.classList.add("card-footer");
         return el;
     }
 }
 
 export class HTMLFlipCardElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('flipcard'), "div", 'nativecomponent');
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('attoreciteditor_flipcard2'));
     }
 
     create(){
         let card = document.createElement("div");
         card.classList.add("card");
         card.classList.add("attoreciteditor_flipcard2");
         card.classList.add("manual-flip-click");
         card.style.marginTop = '60px';

         let cardinner = document.createElement("div");
         cardinner.classList.add("flipcard-inner");
         card.appendChild(cardinner);
         
         for (let v of ['front', 'back']){
             let face = document.createElement("div");
             face.classList.add(v);
             cardinner.appendChild(face);
             
             let head = document.createElement("div");
             head.classList.add("card-header");
             head.classList.add("bg-primary");
             head.classList.add("text-center");
             head.classList.add("rounded-top");
             face.appendChild(head);
 
             let head2 = document.createElement("div");
             head.appendChild(head2);
             
             let el = document.createElement("img");
             el.classList.add("rounded-circle");
             el.classList.add("shadow");
             el.setAttribute("src", `${Assets.ImageAvatar}`);
             el.style.height = '120px';
             el.style.width = '120px';
             el.style.marginTop = '-60px';
             head2.appendChild(el);
             
             el = document.createElement("h3");
             el.innerHTML = i18n.get_string('title')+' '+i18n.get_string(v);
             el.classList.add("text-white");
             el.classList.add("mt-3");
             head2.appendChild(el);
 
             let body = document.createElement("div");
             body.classList.add("card-body");
             face.appendChild(body);
             
             el = document.createElement("p");
             el.classList.add('dark-gray-text', 'text-center');
             el.innerHTML = 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta corporis voluptate ab error quam dolores doloremque, quae consectetur.';
             body.appendChild(el);
         }
 
         return card;
     }
 }
 
 export class HTMLFlipCardFrontElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('front'), "div", 'nativecomponent');
         this.panels = {components: 0, properties: 1, treeView: 1};
         this.visible = false;
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('front'));
     }
 
     onSelect(el){
         let flipcard = el.parentElement.parentElement;
         flipcard.classList.remove('hover');
     }
 }
 
 export class HTMLFlipCardBackElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('rear'), "div", 'nativecomponent');
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('back'));
     }
 
     onSelect(el){
         let flipcard = el.parentElement.parentElement;
         flipcard.classList.add('hover');
     }
 }
 
 export class HTMLCarouselElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('carousel'), "div", 'nativecomponent', HTMLPropertiesData.propsAssignmentFacade.general);
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('carousel') || el.classList.contains('carousel-inner') || el.classList.contains('carousel-item'));
     }

     getDesc(el){
        if (el.classList.contains('carousel')) return i18n.get_string('carousel');
        if (el.classList.contains('carousel-inner')) return 'Carousel inner';
        if (el.classList.contains('carousel-item')) return 'Carousel item';
     }
 
     create(){
         let slider = document.createElement("div");
         slider.classList.add("carousel");
         slider.classList.add("slide");
         slider.setAttribute("data-ride", "carousel");
 
         slider.innerHTML = 
             `<div id="carouselInd" class="carousel slide" data-ride="carousel" data-tag-id="3">
         <ol class="carousel-indicators" data-tag-id="4">
             <li data-target="#carouselInd" data-slide-to="0" data-tag-id="5">
             </li>
             <li data-target="#carouselInd" data-slide-to="1" data-tag-id="6">
             </li>
             <li data-target="#carouselInd" data-slide-to="2" data-tag-id="7">
             </li>
         </ol>
         <div class="carousel-inner" data-tag-id="8">
             <div class="carousel-item active" data-tag-id="9">
             <img class="d-block w-100" src="https://picsum.photos/1500/480" alt="First slide" data-tag-id="10">
             <div class="carousel-caption d-none d-md-block" data-tag-id="11">
                 <h3 class="h5" data-tag-id="12">
                 Titre 1
                 </h3>
                 <p data-tag-id="13">
                 Paragraphe 1
                 </p>
             </div>
             </div>
             <div class="carousel-item" data-tag-id="14">
             <img class="d-block w-100" src="https://picsum.photos/1500/480" alt="Second slide" data-tag-id="15">
             <div class="carousel-caption d-none d-md-block" data-tag-id="16">
                 <h3 class="h5" data-tag-id="17">
                 Titre 2
                 </h3>
                 <p data-tag-id="18">
                 Paragraphe 2
                 </p>
             </div>
             </div>
             <div class="carousel-item" data-tag-id="19">
             <img class="d-block w-100" src="https://picsum.photos/1500/480" alt="Third slide" data-tag-id="20">
             <div class="carousel-caption d-none d-md-block" data-tag-id="21">
                 <h3 class="h5" data-tag-id="22">
                 Titre 3
                 </h3>
                 <p data-tag-id="23">
                 Paragraphe 3
                 </p>
             </div>
             </div>
         </div>
         <a class="carousel-control-prev" href="#carouselInd" role="button" data-slide="prev" data-tag-id="24">
             <i class="fa-3x fa fa-arrow-circle-left" data-tag-id="25"></i>
             <span class="sr-only" data-tag-id="26">
                 Précédent
                 </span>
         </a>
         <a class="carousel-control-next" href="#carouselInd" role="button" data-slide="next" data-tag-id="27">
             <i class="fa-3x fa fa-arrow-circle-right" data-tag-id="28"></i>
             <span class="sr-only" data-tag-id="29">
                 Suivant
                 </span>
         </a>
         </div>`;
 
         return slider;
     }
 
     onSelect(el){
         if(el.classList.contains("carousel-item")){
             let slider = el.parentElement;
             let slides = slider.querySelectorAll('.carousel-item');
             for(let slide of slides){
                 slide.classList.remove('active');
             }
             el.classList.add('active');
         }
     }
 }
 
 export class HTMLCarouselNavElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('carouselnav'), "div", 'nativecomponent', HTMLPropertiesData.propsAssignmentFacade.general);
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('carousel-control-prev') || el.classList.contains('carousel-control-next'));
     }
 }
 
 export class HTMLTabElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('tab'), "div", 'nativecomponent', {all: ['tab', ...HTMLPropertiesData.propsAssignmentFacade.containers.all], min:[]});
         this.cssProp.prefix = 'tab';
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('tabs') || el.classList.contains('carousel-control-next'));
     }
 
     create(){
         let slider = document.createElement("div");
         slider.classList.add("tabs");
 
         slider.innerHTML = 
             `
             <ul class="nav nav-tabs" role="tablist">
                 <li class="nav-item">
                 <a class="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1">
                     Onglet 1
                 </a>
                 </li>
                 <li class="nav-item">
                 <a class="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2">
                     Onglet 2
                 </a>
                 </li>
                 <li class="nav-item">
                 <a class="nav-link" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3">
                     Onglet 3
                 </a>
                 </li>
             </ul>
             <div class="tab-content">
                 <div class="tab-pane fade show active mt-3" id="tab1" role="tabpanel" aria-labelledby="tab1">
                     <p>Contenu de l'onglet 1</p>
                 </div>
                 <div class="tab-pane fade mt-3" id="tab2" role="tabpanel" aria-labelledby="tab2">
                     <p>Contenu de l'onglet 2</p>
                 </div>
                 <div class="tab-pane fade mt-3" id="tab3" role="tabpanel" aria-labelledby="tab3">
                     <p>Contenu de l'onglet 3</p>
                 </div>
             </div>`;
 
         return slider;
     }
 }
 
 export class HTMLAccordionElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('accordion'), "div", 'nativecomponent', HTMLPropertiesData.propsAssignmentFacade.accordion);
         this.cssProp.prefix = 'accordion';
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('accordion'));
     }
 
     create(){
         let slider = document.createElement("div");
         slider.classList.add("accordion");
         slider.id = "accordion-"+ Math.floor(Math.random() * 1000);
 
         slider.innerHTML = 
             `
             <div class="card">
               <div class="card-header" id="headingOne">
                 <h2 class="mb-0">
                   <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Item #1
                   </button>
                 </h2>
               </div>
           
               <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#${slider.id}">
                 <div class="card-body">
                   Item #1
                 </div>
               </div>
             </div>
             <div class="card">
               <div class="card-header" id="headingTwo">
                 <h2 class="mb-0">
                   <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     Item #2
                   </button>
                 </h2>
               </div>
               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#${slider.id}">
                 <div class="card-body">
                   Item #2
                 </div>
               </div>
             </div>
             <div class="card">
               <div class="card-header" id="headingThree">
                 <h2 class="mb-0">
                   <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     Item #3
                   </button>
                 </h2>
               </div>
               <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#${slider.id}">
                 <div class="card-body">
                   Item #3
                 </div>
               </div>
             </div>`;
 
         return slider;
     }
 }
 
 export class HTMLAccordionNavElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('accordionitem'), "button", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.accordion);
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
         if(!el.parentElement || 
             !el.parentElement.parentElement || 
             !el.parentElement.parentElement.parentElement || 
             !el.parentElement.parentElement.parentElement.parentElement){ return false; }
 
 
         return (el.parentElement.parentElement.parentElement.parentElement.classList.contains('accordion'));
     }
 }
 
 export class HTMLTabContentElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('tabcontent'), "div", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.general);
         this.cssProp.prefix = 'tab';
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('tab-content'));
     }
 }
 
 export class HTMLTabPaneElement extends HTMLDivElement{
     constructor(){
         super(i18n.get_string('tabcontent'), "div", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.general);
         this.cssProp.prefix = 'tab';
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('tab-pane'));
     }
 
     getDesc(el){
         let tab = el.parentElement.parentElement;
         let target = tab.querySelector('[aria-controls="'+el.id+'"]');
         if (!target) return this.name;
         return i18n.get_string('tabcontent')+' '+target.innerText;
     }
 }
 
 export class HTMLNavElement extends HTMLElement{
     constructor(){
         super("Nav", "nav", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.general);
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('nav'));
     }
 }
 
 export class HTMLNavItemElement extends HTMLElement{
     constructor(){
         super("NavItem", "li", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.general);
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('nav-item'));
     }
 }
 
 export class HTMLNavLinkElement extends HTMLElement{
     constructor(){
         super("NavLink", "a", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.link);
         this.cssProp.prefix = 'btn';
         this.visible = false;
         this.panels = {components: 0, properties: 1, treeView: 1};
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('nav-link'));
     }
 
     onSelect(el){
         if(el.parentElement.parentElement.parentElement.classList.contains("tabs")){
             let tab = el.parentElement.parentElement.parentElement;
             let target = el.getAttribute('aria-controls');
             target = tab.querySelector('#'+target);
             if (!target) return;
             let items = tab.querySelectorAll('.tab-pane');
             for(let it of items){
                 it.classList.remove('active', 'show');
             }
             items = tab.querySelectorAll('.nav-link');
             for(let it of items){
                 it.classList.remove('active', 'show');
             }
             
             el.classList.add('active', 'show');
             target.classList.add('active', 'show');
         }
     }
 }
 
 export class HTMLHRElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('split'), "hr", 'native', HTMLPropertiesData.propsAssignmentFacade.containers);
     }
 }

 export class HTMLHorizontalBarElement extends HTMLElement{
    constructor(){
        super(i18n.get_string('horizontalbar'), "hr", 'native', HTMLPropertiesData.propsAssignmentFacade.containers);
    }

    create(){
        let el = document.createElement("hr");
        el.classList.add("bg-primary");
        el.classList.add("p-2");
        el.classList.add("m-0");
        return el;
    }
}
 
 export class HTMLImageElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('image'), "img", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.image);
     }
 
     create(){
         let el = document.createElement("img");
         el.setAttribute('src', `${Assets.ImageEmpty}`);
         el.classList.add("img-fluid");
         return el;
     }
 }
 
 export class HTMLImageWithCaptionElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('imagewithcaption'), "figure", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.image);
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('attoreciteditor_img-popup'));
     }
 
     create(){
         let div = document.createElement("figure");
         div.classList.add('figure-caption');
         div.classList.add('text-center');
         div.classList.add('p-2');
         
         let el = document.createElement("img");
         el.setAttribute('src', `${Assets.ImageEmpty}`);
         el.classList.add("img-fluid");
         el.classList.add("attoreciteditor_img-popup");
         div.appendChild(el);
 
         el = document.createElement("figcaption");
         el.innerHTML = "Source : Nom de l'auteur, <em>titre de la photo ou de l'oeuvre</em> (année), nom de l'institution qui possède l'œuvre.";
         div.appendChild(el);
 
         return div;
     }
 }
 
 export class HTMLClickableImageElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('clickableimage'), "div", 'bootstrap', HTMLPropertiesData.propsAssignmentFacade.image);
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('attoreciteditor_imgclick'));
     }
 
     create(){
         let div = document.createElement("div");
         div.classList.add('attoreciteditor_imgclick');
         
         let el = document.createElement("img");
         el.setAttribute('src', `${Assets.ImageEmpty}`);
         el.classList.add("img-fluid");
         div.appendChild(el);
 
         let div2 = document.createElement("div");
         div2.classList.add('imgclickcontent');
         el = document.createElement("a");
         el.classList.add('border');
         el.classList.add('border-white');
         el.classList.add('rounded');
         el.classList.add('p-2');
         el.href = '#';
         el.innerHTML = i18n.get_string('getstarted');
         div2.appendChild(el);
         div.appendChild(div2);
 
         return div;
     }
 }
 
 export class HTMLIconElement extends HTMLElement{
     constructor(){
         super(i18n.get_string('icon'), "i", 'native', HTMLPropertiesData.propsAssignmentFacade.icon);
     }
 
     equal(el){
         if(el === null){ return false; }
 
         return (el.classList.contains('fa') || (el.tagName == 'I' && el.classList[0] && el.innerHTML == ''));
     }
 
     create(){
         let el = document.createElement(this.tagName);
         el.classList.add('fa', 'fa-anchor'); //Default icon
         return el;
     }
 }