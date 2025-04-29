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
import {ButtonGroup, Button, Nav } from 'react-bootstrap';
import { faPlus, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Event, i18n } from '../../RecitEditor';

export class AccessibilityChecker extends Component {
    static defaultProps = {        
        onChange: null,
    };
    
    constructor(props){
        super(props);
        
        this.onClick = this.onClick.bind(this);
        this.onHover = this.onHover.bind(this);
        this.state = {checked: false, isActive: false};
        Event.listen('onViewChange', (args) => {
            if (args.view == 'designer'){
                this.getBody = args.getBody;
                this.setState({isActive: true});
            }
        })
        Event.listen('onBeforeViewChange', (args) => {
            if (args.view != 'designer'){
                if (this.state.checked){
                    this.onDisable();
                }
                this.setState({isActive: false, checked: false});
            }
        })
        Event.listen('onViewUpdate', (args) => {
            if (this.state.checked){
                this.onDisable();
                this.onEnable();
            }
        })
        Event.listen('onSaveAndClose', (args) => {
            if (this.state.checked){
                this.onDisable();
            }
        })
    }
    
    render() {
        if (!this.state.isActive) return null;

        let main = 
        <Nav activeKey={this.state.checked ? 'acc' : ''}>
            <Button variant={this.state.checked ? 'danger' : 'secondary'} onClick={this.onClick}><FontAwesomeIcon icon={faUniversalAccess} title={'accessibility'}/> <span className='d-mobile-none'>{i18n.get_string('accessibility')}</span></Button>
        </Nav>
        return (main);
    }
    
    onClick(event){
        let state = !this.state.checked;
        if (state){
            this.onEnable();
        }else{
            this.onDisable();
        }
        this.setState({checked: state});
    }

    onDisable(){
        let body = this.getBody();
        if (!body) return;
        
        let els = body.querySelectorAll('*[data-accessibility]');
        for (let i of els){
            i.removeAttribute('data-accessibility');
            i.removeEventListener("mouseover", this.onHover);
        }
    }

    onEnable(){
        this.processBody();
    }

    processBody(){
        let body = this.getBody();
        if (!body) return;

        let els = body.querySelectorAll('img:not([alt]), img[alt=""]');//Images with no alt
        for (let i of els){
            i.setAttribute('data-accessibility', i18n.get_string('imgalterror'));
            i.addEventListener("mouseover", this.onHover);
        }
        els = body.querySelectorAll('iframe:not([title]), iframe[title=""]');//Iframe with no title
        for (let i of els){
            i.setAttribute('data-accessibility', i18n.get_string('iframeerror'));
            i.addEventListener("mouseover", this.onHover);
        }
        
        els = body.querySelectorAll('h1,h2,h3,h4,h5,h6');//Scan headings so that they can't skip i.e h5 needs an h4 first
        let h3detected,h4detected,h5detected = false;
        for (let i of els){
            if (i.tagName == 'H1'){
                i.setAttribute('data-accessibility', i18n.get_string('h1error'));
                i.addEventListener("mouseover", this.onHover);
            }
            if (i.tagName == 'H2'){
                i.setAttribute('data-accessibility', i18n.get_string('h2error'));
                i.addEventListener("mouseover", this.onHover);
            }
            if (i.tagName == 'H3'){
                h3detected = true;
            }
            if (i.tagName == 'H4'){
                h4detected = true;
                if (!h3detected){
                    i.setAttribute('data-accessibility', i18n.get_string('h4error'));
                    i.addEventListener("mouseover", this.onHover);
                }
            }
            if (i.tagName == 'H5'){
                h5detected = true;
                if (!h4detected){
                    i.setAttribute('data-accessibility', i18n.get_string('h5error'));
                    i.addEventListener("mouseover", this.onHover);
                }
            }
            if (i.tagName == 'H6'){
                if (!h5detected){
                    i.setAttribute('data-accessibility', i18n.get_string('h6error'));
                    i.addEventListener("mouseover", this.onHover);
                }
            }
        }

    }

    onHover(event){
        if (event.target.getAttribute("data-accessibility")) {
            this.createTooltip(event.target.getAttribute('data-accessibility'), event);
        }

    }

    createTooltip(txt, event){
        let body = this.getBody();
        let existingTooltip = body.querySelector("#tooltip");
        if (existingTooltip) {
            existingTooltip.remove();
        }
        let pos = event.target.getBoundingClientRect();
        let tooltip = document.createElement("div");
        tooltip.innerText = txt;
        tooltip.style.position = "absolute";
        tooltip.style.background = "#d34141";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "14px";
        tooltip.style.pointerEvents = "none";
        tooltip.style.border = "none";
        tooltip.style.top = pos.y + pos.height + body.scrollTop + 2 + "px";
        tooltip.style.left = pos.x + "px";
        tooltip.setAttribute("id", "tooltip");

        body.appendChild(tooltip);

        event.target.addEventListener("mouseleave", function removeTooltip() {
        let existingTooltip = body.querySelector("#tooltip");
        if (existingTooltip) {
            existingTooltip.remove();
        }
        event.target.removeEventListener("mouseleave", removeTooltip);
        });
        return tooltip
    }
}
