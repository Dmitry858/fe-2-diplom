import React, { Component } from 'react';

export default class RatingStars extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stars: ['fa-star-o', 'fa-star-o', 'fa-star-o', 'fa-star-o', 'fa-star-o'],
      isRated: false
    };
  }
  
  mouseEnterHandler(index) {
    if (this.state.isRated) return;
    let newArray = this.state.stars.map((item, i) => {
      if (i <= index) {
        return 'fa-star';
      } else {
        return 'fa-star-o';
      }
    });

    this.setState({
      stars: newArray
    });
  }
  
  mouseLeaveHandler() {
    if (this.state.isRated) return;
    this.setState({
      stars: ['fa-star-o', 'fa-star-o', 'fa-star-o', 'fa-star-o', 'fa-star-o']
    });
  }
  
  clickHandler() {
    this.setState({
      isRated: true
    });
  }
  
  render() {
    const { stars } = this.state;
    
    return (
      <div className="order-card__rating-stars">
        { stars.map((item, i) => {
          return (
            <i key={i} className={`fa ${item}`} aria-hidden="true" onMouseEnter={this.mouseEnterHandler.bind(this, i)} onMouseLeave={this.mouseLeaveHandler.bind(this)} onClick={this.clickHandler.bind(this)}></i>
          );
        })}
      </div>
    );    
  }
  
}