import React, { Component } from 'react';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import lux from './img/lux_seat.svg';

export default class LastTickets extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="last-tickets">
        <div className="last-tickets__title">Последние билеты</div>
        <div className="last-tickets__item">
          <div className="last-tickets__item-points">
            <p className="last-tickets__item-departure">Санкт-Петербург</p>
            <p className="last-tickets__item-arrival">Самара</p>
          </div>
          <div className="last-tickets__item-points-name">
            <p className="last-tickets__point-departure-name">Курский вокзал</p>
            <p className="last-tickets__point-arrival-name">Московский вокзал</p>
          </div>
          <div className="last-tickets__item-price-wrap">
            <div className="last-tickets__item-filters">
              <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" />
              <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" />
              <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" />
            </div>
            <div className="last-tickets__item-price">
              от <span className="last-tickets__item-price_yellow">2500</span>
              <i className="fa fa-rub" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="last-tickets__item">
          <div className="last-tickets__item-points">
            <p className="last-tickets__item-departure">Санкт-Петербург</p>
            <p className="last-tickets__item-arrival">Самара</p>
          </div>
          <div className="last-tickets__item-points-name">
            <p className="last-tickets__point-departure-name">Курский вокзал</p>
            <p className="last-tickets__point-arrival-name">Московский вокзал</p>
          </div>
          <div className="last-tickets__item-price-wrap">
            <div className="last-tickets__item-filters">
              <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" />
              <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" />
              <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" />
            </div>
            <div className="last-tickets__item-price">
              от <span className="last-tickets__item-price_yellow">2500</span>
              <i className="fa fa-rub" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );    
  }
  
}