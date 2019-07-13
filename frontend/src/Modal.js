import React, { Component } from 'react';

export default class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }
  
  clickHandler(event) {
    event.preventDefault();
    this.props.sendResponse();
  }
  
  render() {
    const { hidden, message } = this.props;
    
    return (
      <React.Fragment>
        <div className={ hidden ? "modal hidden" : "modal" }>
          <div className="modal__header">
            <i className="fa fa-info-circle modal__icon" aria-hidden="true"></i>
          </div>
          <div className="modal__content">
            <p>{message}</p>
          </div>
          <div className="modal__footer">
            <a className="modal__link" href="#" onClick={this.clickHandler.bind(this)}>Понятно</a>
          </div>
        </div>
        <div className={ hidden ? "overlay hidden" : "overlay" }></div>
      </React.Fragment>
    );    
  }
  
}