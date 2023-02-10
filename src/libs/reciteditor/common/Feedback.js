import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import {faExclamationTriangle, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Singleton class
 */
export class FeedbackCtrl
{
    static instance = null;
   
    constructor(){
        if(this.constructor.instance){
            return this.constructor.instance;
        }

        this.constructor.instance = this;

        this.observers = [];
        this.msg = [];
    }

    static getInstance(){
        if (!FeedbackCtrl.instance){
            FeedbackCtrl.instance = new FeedbackCtrl();
        }
        return FeedbackCtrl.instance;
    }

    addObserver(id, update){
        let found = false;
        for(let item of this.observers){
            if(item.id === id){
                found = true;
            }
        }

        if(!found){
            this.observers.push({id:id, update:update});
        }
    }

    removeObserver(id){
        for(let i = 0; i < this.observers.length; i++){
            if(this.observers[i].id === id){
                this.observers.splice(i,1);
            }
        }
    }

    notifyObservers(){        
        for(let o of this.observers){
            o.update();
        }
    }

    showInfo(title, msg, timeout){
        this.msg.push({title: title, msg: msg, type: "info", timeout: timeout});
        this.notifyObservers();
    }
    
    showError(title, msg, timeout){
        this.msg.push({title: title, msg: msg, type: "error", timeout: timeout});
        this.notifyObservers();
    }
    
    showWarning(title, msg, timeout){
        this.msg.push({title: title, msg: msg, type: "warning", timeout: timeout});
        this.notifyObservers();
    }

    removeItem(index){
        if(this.msg.splice(index,1) !== null){
            this.notifyObservers();
        }
    }
}

export class VisualFeedback extends Component {
    constructor(props){
        super(props);
        
        this.onDismiss = this.onDismiss.bind(this);
    }
    
    static defaultProps = {
        id: 0,
        title: "",
        msg: "",
        type: "",
        timeout: 0 // in secs
    };
    
    render() {
        let bsStyle = "";
        let icon = "";
        
        switch(this.props.type){
            case 'error':
                bsStyle = "danger";
                icon = faExclamationTriangle;
                break;
            case 'warning':
                bsStyle = "warning";
                icon = faExclamationTriangle;
                break;
            case 'info':                
                bsStyle = "info";
                icon = faInfoCircle;
                break;
            default:
                bsStyle = "danger";
                icon = faExclamationTriangle;
        }

        if(this.props.timeout){
            setTimeout(this.onDismiss, this.props.timeout * 1000);
        }
        
        let main = 
                <div className="VisualFeedback" data-feedback-type={this.props.type}>
                    <Alert variant={bsStyle} onClose={this.onDismiss} dismissible>
                        <Alert.Heading>{this.props.title}</Alert.Heading>                    
                        <p><FontAwesomeIcon icon={icon} />{' '}{this.props.msg}</p>
                    </Alert>
                </div>;
        return (main);
    }
    
    onDismiss(){
        FeedbackCtrl.instance.removeItem(this.props.id);
    }
}

