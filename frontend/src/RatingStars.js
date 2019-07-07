import React, { Component } from 'react';

export default class RatingStars extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="order-card__rating-stars">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </div>
    );    
  }
  
}