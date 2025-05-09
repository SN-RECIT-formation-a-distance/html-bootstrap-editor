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

import { faDesktop, faLaptop, faMobileAlt, faSave, faTable, faTabletAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { i18n, ToggleButtons } from '../../RecitEditor';

export class GridBuilder extends Component{
     static defaultProps = {
         onClose: null,
         onSave: null,
         value: '',
         text: '',
         isEmpty: false,
         name: ''
     };    
 
     constructor(props){
        super(props);
 
        this.onDataChange = this.onDataChange.bind(this);
        this.onColChange = this.onColChange.bind(this);
        this.deviceList = ['xs','sm','md','lg','xl'];
 
        let cols = [];
        for (let i = 0; i <= 12; i++){
            let t = {};
            cols.push(t);
        }
        this.state = {data: {numcols: 0, cols: cols, responsive: 'md', verticalspace: 1}, modal:false};
        if (this.isEmpty()){
            this.state.modal = true;
        }
     }

     isEmpty(){
        return this.props.value.getAttribute('data-empty') == '1';
     }

     componentDidUpdate(prevProps){
        if (!prevProps.value.isSameNode(this.props.value)){
            if (this.isEmpty()){
                this.setState({modal: true})
            }
        }
     }

     getPreviewMaxWidth(responsive){
        switch(responsive){
            case 'sm':
                return '40%';
            case 'md':
                return '60%';
            case 'lg':
                return '80%';
            default:
                return '100%';
        }
     }
 
     render(){
        let numcols = this.state.data.numcols;        
        
        let modal = 
             <Modal key='3' show={this.state.modal} onHide={() => this.onClose()} size="xl" backdrop="static" keyboard={false} >
                 <Modal.Header closeButton>
                     <Modal.Title>{this.props.text}</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5>{i18n.get_string('howmuchcols')}</h5>
                            <select value={numcols} name="numcols" onChange={this.onDataChange}>
                                {(() => {
                                    const arr = [];
                                    arr.push(
                                        <option key={0} value='0' disabled>{i18n.get_string('selectoption')}</option>
                                    );
                                    for (let i = 1; i <= 4; i++) {
                                        arr.push(
                                            <option key={i} value={i}>{i}</option>
                                        );
                                    }
                                    return arr;
                                })()}
                            </select>
                        </div>
                        <div className='col-md-6'>
                            
                            <h5>{i18n.get_string('verticalspace')}</h5>
                            <ToggleButtons type="radio" bsSize="sm" className='gridbuilder_toggle' name='verticalspace' value={this.state.data.verticalspace} options={[
                                {text:i18n.get_string('yes'), value: 1},
                                {text:i18n.get_string('no'), value: 0}
                            ]} onChange={this.onDataChange}/>
                        </div>
                    </div>
                     {numcols > 0 && <div className='p-1 mt-2'><h5 className='mt-3'>{i18n.get_string('definecols')}</h5>
                     <p className='text-primary'>{i18n.get_string('coltotal')}</p>
                     <p>{i18n.get_string('hdscreen')} (1920x1080):</p>
                     {this.preview('xl')}
                     <hr/>
                     <p>{i18n.get_string('horizontaltablet')} (1024x768):</p>
                     {this.preview('lg')}
                     <hr/>
                     <p>{i18n.get_string('verticaltablet')} (768x1024):</p>
                     {this.preview('md')}
                     <hr/>
                     <p>{i18n.get_string('smartphone')} (390x944):</p>
                     {this.preview('sm', true)}
                    </div>}
                 </Modal.Body>
                 <Modal.Footer>
                     <Button variant="secondary" onClick={() => this.onClose()}><FontAwesomeIcon icon={faTimes} title={i18n.get_string('cancel')}/> {i18n.get_string('cancel')}</Button>
                     <Button variant="success" onClick={() => this.onSave()}><FontAwesomeIcon icon={faSave} title={i18n.get_string('save')}/> {i18n.get_string('create')}</Button>
                 </Modal.Footer>
             </Modal>
         return [modal];
     }
     
     preview(responsive, noEdit){
        let numcols = this.state.data.numcols;
        let cols = this.state.data.cols;
        let style = {maxWidth:this.getPreviewMaxWidth(responsive),backgroundColor:'#efefef', border: '10px solid #797970', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', justifyContent: 'center'};
        if (responsive == 'lg'){
            style.borderLeftWidth = '40px';
        }else{
            style.borderBottomWidth = '40px';
        }
        return <div className={'row m-auto p-4 ' + (responsive == 'xl' ? '' : 'rounded')} style={style}>
        {(() => {
            const arr = [];
            for (let i = 1; i <= numcols; i++) {
                let colNum = cols[i];
                arr.push(
                    <div key={i} className={'p-4 '+this.getColClasses(i, true, responsive)} style={{wordBreak:'break-all',maxHeight:'360px',overflow:'hidden'}}>
                    <div className={'p-3 '} style={{border:'1px solid #000', backgroundColor: '#fff'}}>
                        {!noEdit && <select className='mt-2' value={colNum[responsive] || 'na'} name={i} onChange={(e) => this.onColChange(e, responsive)}>
                            {(() => {
                                const arr = [<option key='0' value='na'>{i18n.get_string('herit')}</option>];
                                for (let i = 1; i <= 12; i++) {
                                    arr.push(
                                        <option key={i} value={i}>{i}</option>
                                    );
                                }
                                return arr;
                            })()}
                        </select>}<br/>
                        Col #{i}<br/>
                        <span className='badge badge-warning'>{this.getColClasses(i, false, responsive)}</span><br/>
                        Lorem ipsum dolor sit
                    </div>
                    </div>
                    
                );
            }
            return arr;
        })()}
     </div>
     }

     getColClasses(col, preview, responsive){
        let cols = this.state.data.cols;
        let curDev = responsive;

        if (preview && cols[col][curDev]){
            return "col-12 col-"+curDev+"-"+cols[col][curDev];
        }else if (preview){
            return this.getLarger(col, responsive);
        }
        let cl = "col-12";
        if (this.state.data.verticalspace == 1){
            cl = cl + " py-2";
        }
        for (let dev in cols[col]){
            cl = cl + " col-"+dev+"-"+cols[col][dev]+" ";
        }
        return cl;
     }
     
     getLarger(col, responsive){
        let cls = false;
        let cols = this.state.data.cols;
        switch(responsive){
            case 'xl':
                cls = ['md', 'lg', 'sm'];
                break;
            case 'md':
                cls = ['sm'];
                break;
            case 'lg':
                cls = ['md','sm'];
                break;
        }
        if (cls){
            for (let v of cls){
                if (cols[col][v]){
                    return "col-"+responsive+"-"+cols[col][v];
                }
            }
        }
        return "col-12";
     }

     getRemainingColSpace(){
        let numcols = this.state.data.numcols;
        let cols = this.state.data.cols;
        let colSpace = 0;
        for (let i = 1; i <= numcols; i++) {
            colSpace = colSpace + cols[i];
        }
        return 12 - colSpace; 
     }
 
    onDataChange(event){
        let data = this.state.data;
        data[event.target.name] = event.target.value;
        if (event.target.name == 'numcols'){
            data.numcols = parseInt(event.target.value)
            let cols = [];
            switch (data.numcols){
                case 2:
                    data.responsive = 'md';
                    break;
                case 3:
                    data.responsive = 'lg';
                    break;
                case 4:
                    data.responsive = 'xl';
                    break;
            }
            for (let i = 0; i <= 12; i++){
                let t = {};
                t[data.responsive] = Math.floor(12 / data.numcols);

                if (data.numcols == 4){
                    t['lg'] = 6;
                }
                cols.push(t);
            }
            data.cols = cols
        }
        this.setState({data: data});
    }
    
    onColChange(event, responsive){
        let data = this.state.data;
        let val = event.target.value;
        if (parseInt(val)){
            data['cols'][event.target.name][responsive] = parseInt(event.target.value);
        }else{
            delete data['cols'][event.target.name][responsive];
        }
        this.setState({data: data});
    }

    onSave(){
        //if (!confirm(i18n.get_string('confirmreplace'))) return;
        let numcols = this.state.data.numcols;
        if (numcols == 0) return;
        let html = '<div class="row flex-md-row justify-content-md-center">';
        
        for (let i = 1; i <= numcols; i++) {
            html = html + "<div class='"+this.getColClasses(i, false, this.state.data.responsive)+"'></div>";
        }
        html = html + "</div>";
        this.props.value.innerHTML = html;
        this.props.value.removeAttribute('data-empty')
        this.props.onSave({target:{value:html}});
        this.setState({modal:false})

    }

    onClose(){
 //       this.props.value.removeAttribute('data-empty');
        this.setState({modal:false})
    }
 }