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
 * @package    tool_htmlbootstrapeditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */

M = M || {};
M.recit = M.recit || {};
M.recit.htmlbootstrapeditor = M.recit.htmlbootstrapeditor || {};

M.recit.htmlbootstrapeditor.Popup = class {
    constructor(content) {        
        let modal = document.createElement('div');
        modal.classList.add('modal', 'fade', 'htmlbootstrapeditor_popup');
        let inner2 = document.createElement('div');
        inner2.classList.add('modal-dialog');
        modal.appendChild(inner2);
        let inner = document.createElement('div');
        inner.classList.add('modal-content');
        inner2.appendChild(inner);

        let header = document.createElement('div');
        header.classList.add('modal-header');
        inner.appendChild(header);
        let btn = document.createElement('button');
        btn.classList.add('close');
        btn.innerHTML = '<span aria-hidden="true">&times;</span>';
        btn.setAttribute('data-dismiss', 'modal');
        header.appendChild(btn);
        
        let body = document.createElement('div');
        body.classList.add('modal-body');
        inner.appendChild(body);
        body.appendChild(content);
        
        document.body.appendChild(modal);
        this.popup = modal;
        $(modal).modal({show: true, backdrop: true});
        let that = this;
        $(".modal-backdrop").click(() => $(this.popup).modal('hide'));
        $(modal).on('hidden.bs.modal', function (e) {
            that.destroy()
        })
      }
      destroy(){
          this.popup.remove();
      }
      update(){
        $(this.popup).modal('handleUpdate');
      }
}

document.body.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('htmlbootstrapeditor_videobtn')){
        let url = e.target.getAttribute('data-videourl');
        if (url){
            let iframe = document.createElement('iframe');
            iframe.src = url;
            new M.recit.htmlbootstrapeditor.Popup(iframe);
        }
        e.preventDefault();
    }else if(e.target && e.target.classList.contains('htmlbootstrapeditor_img-popup')){
        let url = e.target.src;
        if (url){
            let img = document.createElement('img');
            img.src = url;
            new M.recit.htmlbootstrapeditor.Popup(img);
        }
        e.preventDefault();
    }else if(e.target && e.target.matches('.htmlbootstrapeditor_flipcard2 *')){ //Check if user clicked on a flipcard or its children
        let el = e.target;
        while (el = el.parentElement){
            if (el.classList.contains('htmlbootstrapeditor_flipcard2')){
                break;
            }
        }
        if (!el) return;
        if(el.classList.contains("hover2")){
            el.classList.remove('hover2');
        }else{
            el.classList.add('hover2');
        }
        e.preventDefault();
    }
});