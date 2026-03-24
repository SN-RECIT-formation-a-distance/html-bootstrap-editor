import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'; 
import { Button, ButtonGroup, ButtonToolbar, Modal} from 'react-bootstrap';
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class DlgConfirm extends Component{
    static defaultProps = {        
        title: "",
        msg: "",
        cancelStr: "",
        applyStr: "",
        onCancel: null,
        onApply: null
    };

    static root = null;

    static render(title, msg, cancelStr, applyStr, onCancel, onApply){
        let placeholder = document.createElement("div");
        window.document.body.appendChild(placeholder);
        DlgConfirm.root = ReactDOM.createRoot(placeholder);
        DlgConfirm.root.render(<DlgConfirm title={title} msg={msg} cancelStr={cancelStr} applyStr={applyStr} onCancel={onCancel} onApply={onApply}/>);
    }

    constructor(props){
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onApply = this.onApply.bind(this);
    }

    render(){
        let main = 
            <Modal show={true} onHide={this.onCancel} size="md" backdrop='static' tabIndex="-1">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body dangerouslySetInnerHTML={{ __html: this.props.msg }}></Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <ButtonGroup >
                            <Button variant='secondary'  onClick={this.onCancel}>
                                 <FontAwesomeIcon icon={faTimes}/>{` ${this.props.cancelStr}`}
                            </Button>
                            <Button  variant='success' onClick={this.onApply}>
                                <FontAwesomeIcon icon={faCheck}/>{` ${this.props.applyStr}`}
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    
                </Modal.Footer>
            </Modal>;
 
        return main;
    }

    onApply(){
        if(this.props.onApply){
            this.props.onApply();
        }

        this.unmount();
    }

    onCancel(){
        if(this.props.onCancel){
            this.props.onCancel();
        }

        this.unmount();
    }

    unmount(){
        DlgConfirm.root.unmount();
    }
}