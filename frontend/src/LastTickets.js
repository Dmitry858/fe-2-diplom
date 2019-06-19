import React, { Component } from 'react';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import lux from './img/lux_seat.svg';
import coupe from './img/coupe.svg';
import reservedSeat from './img/reserved_seat.svg';
import seatPlace from './img/seat_place.svg';

export default class LastTickets extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      preloader: true
    };
  }
  
  componentWillMount() {
    fetch( 'https://netology-trainbooking.herokuapp.com/routes/last' )
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          preloader: false
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data, preloader } = this.state;
    if (this.state.preloader) {
      return (
        <div className="last-tickets">
          <div className="last-tickets__title">Последние билеты</div>
          <p>данные загружаются...</p>
        </div>
      );
    } else {
      return (
        <div className="last-tickets">
          <div className="last-tickets__title">Последние билеты</div>
          {data.map((item, i) => 
            <div key={i} className="last-tickets__item">
              <div className="last-tickets__item-points">
                <p className="last-tickets__item-departure">{item.departure.from.city.name[0].toUpperCase() + item.departure.from.city.name.substring(1)}</p>
                <p className="last-tickets__item-arrival">{item.departure.to.city.name[0].toUpperCase() + item.departure.to.city.name.substring(1)}</p>
              </div>
              <div className="last-tickets__item-points-name">
                <p className="last-tickets__point-departure-name">{`${item.departure.from.railway_station_name} вокзал`}</p>
                <p className="last-tickets__point-arrival-name">{`${item.departure.to.railway_station_name} вокзал`}</p>
              </div>
              <div className="last-tickets__item-price-wrap">
                <div className="last-tickets__item-filters">
                  { item.departure.have_wifi && <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" title="Wi-Fi" /> }
                  { item.departure.is_express && <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" title="Экспресс" /> }
                  { item.departure.have_first_class && <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" title="Люкс" /> }
                  { item.departure.have_second_class && <img className="last-tickets__item-filter-icon" src={coupe} alt="Купе" title="Купе" /> }
                  { item.departure.have_third_class && <img className="last-tickets__item-filter-icon" src={reservedSeat} alt="Плацкарт" title="Плацкарт" /> }
                  { item.departure.have_fourth_class && <img className="last-tickets__item-filter-icon" src={seatPlace} alt="Сидячий" title="Сидячий" /> }
                </div>
                <div className="last-tickets__item-price">
                  от <span className="last-tickets__item-price_yellow">{item.min_price} </span>
                  <i className="fa fa-rub" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          )}
        </div>
      );  
    }  
  }
  
}