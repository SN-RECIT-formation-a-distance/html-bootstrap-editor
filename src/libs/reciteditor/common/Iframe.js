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

import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export class IFrame extends Component {
    static defaultProps = {
        style: null,
        children: null,
        head: []
    };

    constructor(props) {
        super(props)

        this.state = {
            mountNode: null
        }

        this.ref = React.createRef();
    }

    componentDidMount(){
        let iFrameDocument = this.ref.current.contentDocument;

        for(let item of this.props.head){
            let link = iFrameDocument.createElement('link');
            link.setAttribute('rel', "stylesheet");
            link.setAttribute('href', item);
            iFrameDocument.head.append(link);
        }
        
        this.setState({mountNode: iFrameDocument.body});
    }

    render() {
        let main = 
            <iframe ref={this.ref} style={this.props.style}>
                {this.state.mountNode && createPortal(this.props.children, this.state.mountNode)}
            </iframe>;

        return main;
    }
}