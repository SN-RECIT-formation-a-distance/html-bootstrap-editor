import { DlgConfirm } from "../../common/DlgConfirm";
import { $glVars, Event, i18n, IWrapper } from "../../RecitEditor";
import React, { Component } from 'react';
import {ButtonGroup, Button, Nav } from 'react-bootstrap';
import { faPlus, faRefresh, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class BootstrapMigrator {
    constructor(root) {
      this.root = root;
  
      this.classMap = {
        // spacing
        "ml-": "ms-",
        "mr-": "me-",
        "pl-": "ps-",
        "pr-": "pe-",
  
        // text
        "text-left": "text-start",
        "text-sm-left": "text-sm-start",
        "text-md-left": "text-md-start",
        "text-lg-left": "text-lg-start",
        "text-xl-left": "text-xl-start",
        "text-right": "text-end",
        "text-sm-right": "text-sm-end",
        "text-md-right": "text-md-end",
        "text-lg-right": "text-lg-end",
        "text-xl-right": "text-xl-end",
  
        // float
        "float-left": "float-start",
        "float-sm-left": "float-sm-start",
        "float-md-left": "float-md-start",
        "float-lg-left": "float-lg-start",
        "float-xl-left": "float-xl-start",
        "float-right": "float-end",
        "float-sm-right": "float-sm-end",
        "float-md-right": "float-md-end",
        "float-lg-right": "float-lg-end",
        "float-xl-right": "float-xl-end",
  
        // border
        "border-left": "border-start",
        "border-right": "border-end",
  
        // rounded
        "rounded-left": "rounded-start",
        "rounded-right": "rounded-end",
  
        // buttons
        "btn-block": "w-100",
        "media": "d-flex",
  
        // forms
        "form-row": "row",
        "custom-select": "form-select",
        "custom-control": "form-check",
        "custom-checkbox": "form-check",
        "custom-radio": "form-check",
  
        // ratio
        "embed-responsive": "ratio",
        "embed-responsive-16by9": "ratio-16x9",
        "embed-responsive-4by3": "ratio-4x3",
        "embed-responsive-1by1": "ratio-1x1",
        "embed-responsive-21by9": "ratio-21x9",

        "attoreciteditor_img-popup": "htmlbootstrapeditor_img-popup",
        "attoreciteditor_videobtn": "htmlbootstrapeditor_videobtn",
        "attoreciteditor_flipcard2": "htmlbootstrapeditor_flipcard2",

        // badge
        "badge-pill": "rounded-pill",
        "badge-primary": "bg-primary",
        "badge-secondary": "bg-secondary",
        "badge-success": "bg-success",
        "badge-danger": "bg-danger",
        "badge-warning": "bg-warning text-dark",
        "badge-info": "bg-info text-dark",
        "badge-light": "bg-light text-dark",
        "badge-dark": "bg-dark",
      };
  
      // Classes à supprimer
      this.removeClasses = [
        "input-group-append",
        "input-group-prepend"
      ];
    }
  
    /**
     * Vérifie si le DOM contient des classes Bootstrap 4 legacy
     */
    detectLegacy() {
      let found = false;
  
      this.root.querySelectorAll("*").forEach(el => {
        el.classList.forEach(cls => {
          // match exact
          if (this.classMap[cls]) {
            found = true;
          }
  
          // match prefix (ml-1, mr-2, etc.)
          for (let key in this.classMap) {
            if (key.endsWith("-") && cls.startsWith(key)) {
              found = true;
            }
          }
  
          // classes à supprimer
          if (this.removeClasses.includes(cls)) {
            found = true;
          }
        });
  
        // data attributes BS4
        Array.from(el.attributes).forEach(attr => {
          if (attr.name.startsWith("data-") && !attr.name.startsWith("data-bs-")) {
            if (["data-toggle", "data-target", "data-dismiss"].includes(attr.name)) {
              found = true;
            }
          }
        });
      });
  
      return found;
    }
  
    migrate() {
      this.migrateAccordions();
      this.root.querySelectorAll("*").forEach(el => {
        // ===== CLASSES =====
        let newClasses = [];
  
        el.classList.forEach(cls => {
          let replaced = false;
  
          // exact match
          if (this.classMap[cls]) {
            newClasses.push(this.classMap[cls]);
            replaced = true;
          }
  
          // prefix match (ml-1 → ms-1)
          if (!replaced) {
            for (let key in this.classMap) {
              if (key.endsWith("-") && cls.startsWith(key)) {
                newClasses.push(cls.replace(key, this.classMap[key]));
                replaced = true;
                break;
              }
            }
          }
  
          // remove classes
          if (this.removeClasses.includes(cls)) {
            replaced = true;
          }
  
          if (!replaced) {
            newClasses.push(cls);
          }
        });
  
        el.className = newClasses.join(" ");
  
        // ===== DATA ATTRIBUTES =====
        Array.from(el.attributes).forEach(attr => {
          if (attr.name === "data-toggle") {
            el.setAttribute("data-bs-toggle", attr.value);
            el.removeAttribute(attr.name);
          }
          if (attr.name === "data-target") {
            el.setAttribute("data-bs-target", attr.value);
            el.removeAttribute(attr.name);
          }
          if (attr.name === "data-dismiss") {
            el.setAttribute("data-bs-dismiss", attr.value);
            el.removeAttribute(attr.name);
          }
        });
  
        // ===== SPECIAL CASE: RATIO =====
        if (el.classList.contains("ratio")) {
          const iframe = el.querySelector("iframe, video, embed");
          if (iframe) {
            iframe.classList.remove("embed-responsive-item");
          }
        }
      });
    }
    migrateAccordions() {
        const accordions = this.root.querySelectorAll(".accordion");
      
        accordions.forEach(accordion => {
          const cards = accordion.querySelectorAll(".card");
      
          cards.forEach(card => {
            const header = card.querySelector(".card-header");
            const collapse = card.querySelector(".collapse");
            const body = card.querySelector(".card-body");
      
            if (!header || !collapse || !body) return;
      
            // ===== CREATE NEW STRUCTURE =====
            const item = document.createElement("div");
            item.className = "accordion-item";
            const item2 = document.createElement("div");
            item2.className = "accordion-header";
      
            // HEADER
            const headerId = header.id || `heading-${Math.random().toString(36).slice(2)}`;
            const collapseId = collapse.id || `collapse-${Math.random().toString(36).slice(2)}`;
      
            const h2 = document.createElement("h2");
            h2.className = "mb-0";
            h2.id = headerId;
      
            // Find existing button or create one
            let btn = header.querySelector("button, a");
      
            if (!btn) {
              btn = document.createElement("button");
              btn.textContent = header.textContent.trim();
            }
      
            btn.classList.remove("btn", "btn-link");
            btn.classList.add("accordion-button");
      
            if (!collapse.classList.contains("show")) {
              btn.classList.add("collapsed");
            }
      
            btn.setAttribute("type", "button");
            btn.setAttribute("data-bs-toggle", "collapse");
            btn.setAttribute("data-bs-target", `#${collapseId}`);
            btn.setAttribute("aria-expanded", collapse.classList.contains("show") ? "true" : "false");
            btn.setAttribute("aria-controls", collapseId);
      
            h2.appendChild(btn);
      
            // COLLAPSE
            const collapseDiv = document.createElement("div");
            collapseDiv.id = collapseId;
            collapseDiv.className = "accordion-collapse collapse";
      
            if (collapse.classList.contains("show")) {
              collapseDiv.classList.add("show");
            }
      
            collapseDiv.setAttribute("aria-labelledby", headerId);
      
            if (accordion.id) {
              collapseDiv.setAttribute("data-bs-parent", `#${accordion.id}`);
            }
      
            // BODY
            const bodyDiv = document.createElement("div");
            bodyDiv.className = "accordion-body";
            bodyDiv.innerHTML = body.innerHTML;
      
            collapseDiv.appendChild(bodyDiv);
      
            // FINAL ASSEMBLY
            item2.appendChild(h2);
            item.appendChild(item2);
            item.appendChild(collapseDiv);
      
            // REPLACE OLD CARD
            card.replaceWith(item);
          });
        });
      }

}


export class BootstrapMigratorBtn extends Component {
    static defaultProps = {        
        onChange: null,
    };
    
    constructor(props){
        super(props);
        let settings = IWrapper.getSettings();
        
        this.state = {checked: false, isWarningActive: settings.enable_migration_popup};
        Event.listen('onViewChange', (args) => {
            if (args.view == 'designer'){
                this.getBody = args.getBody;
                setTimeout(() => this.check(this.getBody), 1000);
            }
        })
        Event.listen('onViewUpdate', (args) => {
            this.check(this.getBody);
        })
    }

    check(getBody, noPrompt){
        if (!getBody()) return;
        // Check for legacy classes
        let migrator = new BootstrapMigrator(getBody());
        if (migrator.detectLegacy()){
            this.setState({checked: true});
            let migrate = () => {
                this.setState({checked: false});
                migrator.migrate();
                $glVars.feedback.showInfo(i18n.get_string('pluginname'), i18n.get_string('msgsuccess'), 3);

            }
            if (!noPrompt){
                if (this.state.isWarningActive){
                    DlgConfirm.render('', i18n.get_string('migratelegacy'), i18n.get_string('no'), i18n.get_string('yes'), null, migrate);
                }
            }else{
                migrate();
            }
        }else{
            this.setState({checked: false});
        }
    }
    
    render() {

        let main = 
        <Nav className="ms-2">
            <Button variant={this.state.checked ? 'danger' : 'secondary'} onClick={() => this.onClick()}>
                {this.state.checked ? 
                <><div className="spinner-grow spinner-grow-sm text-primary" role="status">
                </div></> 
                : <FontAwesomeIcon icon={faRefresh} title={'migrate'}/> }
                <span className='d-mobile-none'>{i18n.get_string('migrate')}</span>
                </Button>
        </Nav>
        return (main);
    }
    
    onClick(event){
        this.check(this.getBody, true);
    }
}