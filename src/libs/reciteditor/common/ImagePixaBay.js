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

import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { i18n, ComboBox, MoodleUploadFile } from '../RecitEditor';
import { Pagination } from './Pagination';

export class ImagePixaBay extends Component {
    static defaultProps = {
        name: "",
        value: '',
        placeholder: "",
        onChange: null,
        onKeyDown: null,
        autoFocus: false,
        autoSelect: false,
        onCommit: null,
        disabled: false,
        size: ""
    };
    
    constructor(props){
        super(props);
        this.api_key = M.recit.reciteditor.settings.pixabaykey || '';
        this.per_page = 50;
        this.categories = [
            {"text": i18n.get_string('none'), "value": ''},
            {"text": "backgrounds",
                "value": "backgrounds"},
            {"text": "fashion",
                "value": "fashion"},
            {"text": "nature",
                "value": "nature"},
            {"text": "science",
                "value": "science"},
            {"text": "education",
                "value": "education"},
            {"text": "feelings",
                "value": "feelings"},
            {"text": "health",
                "value": "health"},
            {"text": "people",
                "value": "people"},
            {"text": "religion",
                "value": "religion"},
            {"text": "places",
                "value": "places"},
            {"text": "animals",
                "value": "animals"},
            {"text": "industry",
                "value": "industry"},
            {"text": "computer",
                "value": "computer"},
            {"text": "food",
                "value": "food"},
            {"text": "sports",
                "value": "sports"},
            {"text": "transportation",
                "value": "transportation"},
            {"text": "travel",
                "value": "travel"},
            {"text": "buildings",
                "value": "buildings"},
            {"text": "business",
                "value": "business"},
            {"text": "music",
                "value": "music"
            }
        ]
    
        this.state = {modal: false, data: [], pagination: {}, category: ''}
        this.moodleUpload = new MoodleUploadFile();
    }


    render() {
        if (this.api_key.length == 0) return null;

        let main = 
            <Button key="1" name={this.props.name} size="sm" variant="primary" onClick={() => this.handleShow()} disabled={this.props.disabled}>
                <FontAwesomeIcon icon={faImage}/>{` ${this.props.text}`}
            </Button>;
     
        let modal = <Modal key="2" dialogClassName='iconselectormodal' show={this.state.modal} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title><a href="https://pixabay.com/" target="_blank" style={{margin:'auto'}}>
                    <img src="https://pixabay.com/static/img/logo.svg" style={{width:"94px"}}/> Free Images
                </a></Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
            <Form.Row>               
                <Form.Group as={Col} className='col-8'>
                    <Form.Label>{i18n.get_string('keyword')}</Form.Label>
                    <FormControl className={"InputText"} type="text" value={this.state.search} onChange={(e) => this.onSearch(e)} onSubmit={() => this.onQuery()} />
                </Form.Group>
                <Form.Group as={Col} className='col-3'>
                    <Form.Label>{i18n.get_string('category')}</Form.Label>
                    <ComboBox onChange={(e) => this.setState({category: e.target.value})} value={this.state.category} options={this.categories}/>
                </Form.Group>
                <Form.Group as={Col} className='col-1'>
                    <Form.Label>&nbsp;</Form.Label>
                    <Button onClick={() => this.onQuery()} className='form-control' title= {i18n.get_string('search')}><FontAwesomeIcon icon={faSearch} /></Button>
                </Form.Group>
            </Form.Row>
            <div className='d-flex mb-5' style={{flexWrap:'wrap',maxHeight:'600px',overflowY:'auto'}}>
                {this.state.data.map((res, i) => {
                    return <div key={i} className='m-2 img-bay' onClick={() => this.onUpload(res.largeImageURL)}><img src={res.previewURL}/></div>
                })}
            </div>
            {this.state.data.length > 0 && <Pagination pagination={this.state.pagination} onChangePage={(p) => this.onChangePage(p)}/>}
        </Modal.Body>
      </Modal>;
        return [modal, main];
    }

    handleClose(){
        this.setState({modal:false})
    }

    handleShow(){
        this.setState({modal:true})
    }

    onSearch(event){
        this.setState({search:event.target.value, pagination: {current_page: 1, item_per_page: this.per_page, count: 0}, data: []});
    }

    onChangePage(p){
        let pagination = this.state.pagination;
        pagination.current_page = p;
        this.setState({pagination: pagination});
        this.onQuery();
    }

    onQuery(){
        let q = this.state.search;
        let url = "https://pixabay.com/api/?username=mjweaver01&key="+this.api_key+"&q=" + q + "&per_page=" + this.per_page + "&page=" +this.state.pagination.current_page + "&category=" + this.state.category + "&image_type=photo";
        fetch(url).then(response => {
            return response.json()
        }).then(response => {
            if (response.hits){
                let pagination = this.state.pagination;
                pagination.count = response.total;
                this.setState({data: response.hits, pagination: pagination})
            }else{
                this.setState({data: []})                
            }
        })
    }

    onUpload(url){
        this.handleClose();
        this.moodleUpload.onUploadDone = (url) => this.onAdd(url);
        fetch(url)
        .then(res => res.blob())
        .then(blob => {
            this.moodleUpload.upload(this.generateFileName(), blob)
        });
    }

    generateFileName(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid + '.jpg';
    }    

    onAdd(url){
        let eventData = {
            target: {name: this.props.name, value: url}                
        };
        if (this.props.onChange){
            this.props.onChange(eventData);
        }
        if (this.props.onCommit){
            this.props.onCommit(eventData);
        }
    }
}
