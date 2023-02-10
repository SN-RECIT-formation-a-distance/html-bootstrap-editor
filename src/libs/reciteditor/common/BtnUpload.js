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
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class BtnUpload extends Component {
    static defaultProps = {
        onChange: null,
        accept: "",
        id: "",
        size: "",
        title: ""
    };

    render() {       
        let main =
                <label htmlFor={this.props.id} className={`btn btn-primary ${this.props.size}`} title={this.props.title} style={{margin: 0}}>
                    <FontAwesomeIcon icon={faCloudUploadAlt}/>
                    <input id={this.props.id} style={{display: "none"}} type="file" onChange={this.props.onChange} accept={this.props.accept}/>
                </label>

        return (main);
    }   
}
