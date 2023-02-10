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
import {ButtonGroup, Button } from 'react-bootstrap';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../RecitEditor';

export class TableActions extends Component {
    static defaultProps = {        
        onChange: null,
        showRmCol: false,
    };
    
    constructor(props){
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }
    
    render() {

        let main = 
                <ButtonGroup size='sm'>
                    {this.props.showRmCol && <Button onClick={() => this.onClick('rmcol')}><FontAwesomeIcon icon={faMinus}/>{" "+i18n.get_string('column')}</Button>}
                    <Button onClick={() => this.onClick('addcol')}><FontAwesomeIcon icon={faPlus}/>{" "+i18n.get_string('column')}</Button>
                    <Button onClick={() => this.onClick('addline')}><FontAwesomeIcon icon={faPlus}/>{" "+i18n.get_string('line')}</Button>
                </ButtonGroup>    
        return (main);
    }   
    
    onClick(event){
        this.props.onChange({target:{value:event}});
    }
}
