import React, { Component } from 'react';

export default class TrainArrivalInfo extends Component {
  constructor (props) {
    super(props);
  }
  
  timeFormatConverter(time) {
    if (String(time).length === 1) return `0${time}`;
    return time;
  }
  
  render() {
    const { item } = this.props;
    if (item.arrival) {
      let arrivalFromTime = new Date(item.arrival.from.datetime);
      let arrivalToTime = new Date(item.arrival.to.datetime);
      let arrivalDurationTravel = new Date(item.arrival.duration);
      
      return (
        <div className="train__info train__info_back">
          <div className="train__info_back_departure">
            <p className="train__info-time">{ `${this.timeFormatConverter(arrivalFromTime.getHours())}:${this.timeFormatConverter(arrivalFromTime.getMinutes())}` }</p>
            <p className="train__info-city">{item.arrival.from.city.name[0].toUpperCase() + item.arrival.from.city.name.substring(1)}</p>
            <p className="train__info-station">{`${item.arrival.from.railway_station_name} вокзал`}</p>
          </div>
          <div className="train__info_back_arrow">
            <p className="train__travel-time">{ `${arrivalDurationTravel.getHours()} : ${this.timeFormatConverter(arrivalDurationTravel.getMinutes())}` }</p>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
          <div className="train__info_back_arrival">
            <p className="train__info-time">{ `${this.timeFormatConverter(arrivalToTime.getHours())}:${this.timeFormatConverter(arrivalToTime.getMinutes())}` }</p>
            <p className="train__info-city">{item.arrival.to.city.name[0].toUpperCase() + item.arrival.to.city.name.substring(1)}</p>
            <p className="train__info-station">{`${item.arrival.to.railway_station_name} вокзал`}</p>
          </div>
        </div>
      ); 
    } else return null;
  }
}