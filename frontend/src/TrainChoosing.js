import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import Calendar from './Calendar.js';
import LastTickets from './LastTickets.js';
import Pagination from './Pagination.js';
import TrainArrivalInfo from './TrainArrivalInfo.js';
import TrainSeatSnippet from './TrainSeatSnippet.js';
import SidebarFilter from './SidebarFilter.js';
import './css/style-content.css';
import loader from './img/preloader.gif';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import lux from './img/lux_seat.svg';
import coupe from './img/coupe.svg';
import reservedSeat from './img/reserved_seat.svg';
import seatPlace from './img/seat_place.svg';
import train from './img/train.svg';

import {
  NavLink
} from 'react-router-dom';

export default class TrainChoosing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showByNum: 5,
      preloader: true
    };
  }
  
  componentWillMount() {
    let regExp = /&limit=\d+/,
        regExpNum = /\d+/,
        showByNum;
    if (regExp.test(this.props.location.search)) {
      let result = regExp.exec(this.props.location.search);
      showByNum = parseInt(result[0].replace('&limit=', ''), 10);
    } else {
      showByNum = 5;
    }
    
    fetch( `https://netology-trainbooking.herokuapp.com/routes${this.props.location.search}` )
      .then( response => response.json())
      .then( data => {
        this.setState({
          data: data,
          showByNum: showByNum,
          preloader: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  timeFormatConverter(time) {
    if (String(time).length === 1) return `0${time}`;
    return time;
  }
  
  showByHandler(num, event) {
    if (num === this.state.showByNum) return;
    
    let regExp = /&limit=\d+/;
    
    if (regExp.test(this.props.location.search)) {
      window.location.href = window.location.href.replace(regExp, `&limit=${num}`);
    } else {
      window.location.href = window.location.href + `&limit=${num}`;
    }
  }
  
  render() {
    if (this.state.preloader) {
      return (
        <React.Fragment>
          <Header currentPage={'inner'} />

          <div className="content-wrap content-wrap_loader">
            <p className="loader-text">идет поиск</p>
            <img className="loader" src={loader} alt="Loader" />
          </div>
        </React.Fragment>
      );
    } else {
      const { data, showByNum } = this.state;

      return (
        <React.Fragment>
          <Header currentPage={'inner'} />

          <Steps currentStep={1} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">
                <SidebarFilter />

                <LastTickets />                
              </section>

              <section className="content">
                <div className="content__header">
                  <p className="train-found">Найдено <span className="train-found__num">{data.total_count}</span></p>
                  <p className="train-sort-label">Сортировать по:
                    <select className="train-sort">
                      <option className="train-sort__item" value="времени">времени</option>
                      <option className="train-sort__item" value="стоимости">стоимости</option>
                      <option className="train-sort__item" value="длительности">длительности</option>
                    </select>
                  </p>
                  <p className="show-by">
                    Показывать по:
                    <span className={(showByNum === 5) ? "show-by__num_active" : "show-by__num"} onClick={this.showByHandler.bind(this, 5)}>5</span> 
                    { (data.total_count > 9) && <span className={(showByNum === 10) ? "show-by__num_active" : "show-by__num"} onClick={this.showByHandler.bind(this, 10)}>10</span> } 
                    { (data.total_count > 19) && <span className={(showByNum === 20) ? "show-by__num_active" : "show-by__num"} onClick={this.showByHandler.bind(this, 20)}>20</span> }        
                  </p>         
                </div>

                {data.items.map((item, i) => {
                  let departureFromTime = new Date(item.departure.from.datetime);
                  let departureToTime = new Date(item.departure.to.datetime);
                  let departureDurationTravel = new Date(item.departure.duration);
                  
                  return (
                    <div className="train" key={i}>
                      <div className="train__name-wrap">
                        <div className="train__icon">
                          <img src={train} alt="" />
                        </div>
                        <div className="train__name">{item.departure.train.name}</div>
                        <div className="train__route">
                          <p className="train__route-point">{item.departure.from.city.name[0].toUpperCase() + item.departure.from.city.name.substring(1)} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                          <p className="train__route-point">{item.departure.to.city.name[0].toUpperCase() + item.departure.to.city.name.substring(1)}</p>
                        </div>
                      </div>
                      <div className="train__info-wrap">
                        <div className="train__info train__info_leave">
                          <div className="train__info_leave_departure">
                            <p className="train__info-time">{ `${this.timeFormatConverter(departureFromTime.getHours())}:${this.timeFormatConverter(departureFromTime.getMinutes())}` }</p>
                            <p className="train__info-city">{item.departure.from.city.name[0].toUpperCase() + item.departure.from.city.name.substring(1)}</p>
                            <p className="train__info-station">{`${item.departure.from.railway_station_name} вокзал`}</p>
                          </div>
                          <div className="train__info_leave_arrow">
                            <p className="train__travel-time">{ `${departureDurationTravel.getHours()} : ${this.timeFormatConverter(departureDurationTravel.getMinutes())}` }</p>
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                          </div>
                          <div className="train__info_leave_arrival">
                            <p className="train__info-time">{ `${this.timeFormatConverter(departureToTime.getHours())}:${this.timeFormatConverter(departureToTime.getMinutes())}` }</p>
                            <p className="train__info-city">{item.departure.to.city.name[0].toUpperCase() + item.departure.to.city.name.substring(1)}</p>
                            <p className="train__info-station">{`${item.departure.to.railway_station_name} вокзал`}</p>
                          </div>
                        </div>

                        <TrainArrivalInfo item={item} />
                      </div>
                      
                      <div className="train__seats-wrap">
                        <TrainSeatSnippet item={item} hasClass={item.departure.have_fourth_class} wagonType={'fourth_class'} />
                       
                        <TrainSeatSnippet item={item} hasClass={item.departure.have_third_class} wagonType={'third_class'} />

                        <TrainSeatSnippet item={item} hasClass={item.departure.have_second_class} wagonType={'second_class'} />
                        
                        <TrainSeatSnippet item={item} hasClass={item.departure.have_first_class} wagonType={'first_class'} />

                        <div className="train__seat-filters">
                          { item.departure.have_wifi && <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" /> }
                          { item.departure.is_express && <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" /> }
                          { item.departure.have_first_class && <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" /> }
                          { item.departure.have_second_class && <img className="last-tickets__item-filter-icon" src={coupe} alt="Купе" /> }
                          { item.departure.have_third_class && <img className="last-tickets__item-filter-icon" src={reservedSeat} alt="Плацкарт" /> }
                          { item.departure.have_fourth_class && <img className="last-tickets__item-filter-icon" src={seatPlace} alt="Сидячий" /> }
                        </div>
                        <NavLink to={{ pathname: '/seats-choosing/', state: {train: item, getParams: this.props.location.search} }} className="train__seats-choice">Выбрать места</NavLink>
                      </div>
                    </div>
                  );

                  }
                )}

                <Pagination />
              </section>

            </div>
          </div>
          
        </React.Fragment>
      );
    }
  }
  
}