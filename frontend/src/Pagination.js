import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="pagination">
        <div className="pagination__arrow pagination__arrow_left">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="pagination__page pagination__page_active">1</div>
        <div className="pagination__page">2</div>
        <div className="pagination__page">3</div>
        <div className="pagination__arrow pagination__arrow_right">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    );    
  }
  
}