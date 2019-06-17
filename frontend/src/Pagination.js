import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {    
    const { total, showByNum, currentPage, trainsListUpdate } = this.props;
    
    if (total <= showByNum) return null;
    
    let totalPages = Math.ceil(total / showByNum);
    const totalPagesArr = [];
    
    for (let i = 1; i <= totalPages; i++) {
      totalPagesArr.push(i);
    }
    
    return (
      <div className="pagination">
        { (currentPage > 1) &&
        <div className="pagination__arrow pagination__arrow_left" onClick={trainsListUpdate.bind(this, currentPage - 1)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        }
        
        {totalPagesArr.map((item,i) => <div key={i} className={(currentPage === item) ? "pagination__page pagination__page_active" : "pagination__page"} onClick={trainsListUpdate.bind(this, item)}>{item}</div>)}

        { (currentPage < totalPages) &&
        <div className="pagination__arrow pagination__arrow_right" onClick={trainsListUpdate.bind(this, currentPage + 1)}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        }
      </div>
    );    
  }
  
}