import React, { Component } from 'react';

export default class TrainArrivalInfo extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    if (this.props.item.arrival) {
      return (
        <div className="train__info train__info_back">
          <div className="train__info_back_departure">
            <p className="train__info-time">00:10</p>
            <p className="train__info-city">Москва</p>
            <p className="train__info-station">Курский вокзал</p>
          </div>
          <div className="train__info_back_arrow">
            <p className="train__travel-time">9 : 42</p>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
          <div className="train__info_back_arrival">
            <p className="train__info-time">09:52</p>
            <p className="train__info-city">Санкт-Петербург</p>
            <p className="train__info-station">Ладожский вокзал</p>
          </div>
        </div>
      ); 
    } else return null;
  }
}