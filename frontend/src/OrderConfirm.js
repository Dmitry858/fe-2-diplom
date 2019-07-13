import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header.js';
import Steps from './Steps.js';
import SidebarDetails from './SidebarDetails.js';
import TrainArrivalInfo from './TrainArrivalInfo.js';
import TrainSeatSnippet from './TrainSeatSnippet.js';
import loader from './img/preloader.gif';
import passenger from './img/passenger.svg';
import passengerIcon from './img/passenger-icon.svg';
import train from './img/train.svg';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import lux from './img/lux_seat.svg';
import coupe from './img/coupe.svg';
import reservedSeat from './img/reserved_seat.svg';
import seatPlace from './img/seat_place.svg';

export default class OrderConfirm extends Component {
  constructor (props) {
    super(props);
  }
  
  timeFormatConverter(time) {
    if (String(time).length === 1) return `0${time}`;
    return time;
  }
  
  render() {
    const { cityFrom, cityTo, direction, dateLeave, dateBack, getParams, ticketsNumLeave, chosenSeats, cost, passengers, customer } = this.props.location.state;
    
    let departureFromTime = new Date(direction.departure.from.datetime);
    let departureToTime = new Date(direction.departure.to.datetime);
    let departureDurationTravel = new Date(direction.departure.duration);

    return (
      <React.Fragment>
        <Header currentPage={'inner'} cityFrom={cityFrom} cityTo={cityTo} dateLeave={dateLeave} dateBack={dateBack} />

        <Steps currentStep={4} />

        <div className="content-wrap">
          <div className="container">
            <section className="sidebar">

              <SidebarDetails direction={direction} dateLeave={dateLeave} dateBack={dateBack} ticketsNumLeave={ticketsNumLeave} cost={cost} />

            </section>

            <section className="content">

              <div className="train train_confirm content-container">
                <div className="train-title">Поезд</div>
                <div className="train__name-wrap">
                  <div className="train__icon">
                    <img src={train} alt="" />
                  </div>
                  <div className="train__name">{direction.departure.train.name}</div>
                  <div className="train__route">
                    <p className="train__route-point">{direction.departure.from.city.name[0].toUpperCase() + direction.departure.from.city.name.substring(1)} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <p className="train__route-point">{direction.departure.to.city.name[0].toUpperCase() + direction.departure.to.city.name.substring(1)}</p>
                  </div>
                </div>
                <div className="train__info-wrap">
                  <div className="train__info train__info_leave">
                    <div className="train__info_leave_departure">
                      <p className="train__info-time">{ `${this.timeFormatConverter(departureFromTime.getHours())}:${this.timeFormatConverter(departureFromTime.getMinutes())}` }</p>
                      <p className="train__info-city">{direction.departure.from.city.name[0].toUpperCase() + direction.departure.from.city.name.substring(1)}</p>
                      <p className="train__info-station">{`${direction.departure.from.railway_station_name} вокзал`}</p>
                    </div>
                    <div className="train__info_leave_arrow">
                      <p className="train__travel-time">{ `${departureDurationTravel.getHours()} : ${this.timeFormatConverter(departureDurationTravel.getMinutes())}` }</p>
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="train__info_leave_arrival">
                      <p className="train__info-time">{ `${this.timeFormatConverter(departureToTime.getHours())}:${this.timeFormatConverter(departureToTime.getMinutes())}` }</p>
                      <p className="train__info-city">{direction.departure.to.city.name[0].toUpperCase() + direction.departure.to.city.name.substring(1)}</p>
                      <p className="train__info-station">{`${direction.departure.to.railway_station_name} вокзал`}</p>
                    </div>
                  </div>

                  <TrainArrivalInfo item={direction} />
                </div>
                <div className="train__seats-wrap">
                  <TrainSeatSnippet item={direction} hasClass={direction.departure.have_fourth_class} wagonType={'fourth_class'} />

                  <TrainSeatSnippet item={direction} hasClass={direction.departure.have_third_class} wagonType={'third_class'} />

                  <TrainSeatSnippet item={direction} hasClass={direction.departure.have_second_class} wagonType={'second_class'} />

                  <TrainSeatSnippet item={direction} hasClass={direction.departure.have_first_class} wagonType={'first_class'} />

                  <div className="train__seat-filters">
                    { direction.departure.have_wifi && <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" /> }
                    { direction.departure.is_express && <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" /> }
                    { direction.departure.have_first_class && <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" /> }
                    { direction.departure.have_second_class && <img className="last-tickets__item-filter-icon" src={coupe} alt="Купе" /> }
                    { direction.departure.have_third_class && <img className="last-tickets__item-filter-icon" src={reservedSeat} alt="Плацкарт" /> }
                    { direction.departure.have_fourth_class && <img className="last-tickets__item-filter-icon" src={seatPlace} alt="Сидячий" /> }
                  </div>

                  <NavLink 
                    to={{ pathname: '/train-choosing/', search: getParams }}
                    className="change__button">
                    Изменить
                  </NavLink>

                </div>
              </div>

              <div className="content-container">
                <div className="content-container__title">Пассажиры</div>
                <div className="passengers-list">
                  { passengers.map((item, i) => {
                    return (
                      <div key={i} className="passengers-list__item">
                        <div className="passengers-list__item-icon">
                          <img src={passengerIcon} alt="" />
                          {item.type === 'adult' ? 'Взрослый' : 'Детский'} 
                        </div>
                        <div className="passengers-list__item-info">
                          <p className="passengers-list__item-name">{`${item.surname} ${item.name} ${item.patronymic}`}</p>
                          <p className="passengers-list__item-gender">Пол {item.gender === 'М' ? 'мужской' : 'женский'}</p>
                          <p className="passengers-list__item-birth">{`Дата рождения ${item.dateOfBirth}`}</p>
                          <p className="passengers-list__item-document">{item.docType === 'passport' ? 'Паспорт РФ' : 'Свидетельство о рождении'} {`${item.docSeries} ${item.docNum}`}</p>
                        </div>
                      </div>
                    );
                    }
                  )}
                </div>

                <div className="total-wrap">
                  <div className="total">
                    <h3 className="total__subtitle">Всего</h3>
                    <p className="total__price">{cost} <i className="fa fa-rub total__price_icon" aria-hidden="true"></i></p>
                  </div>
                  
                  <NavLink 
                    to={{ 
                      pathname: '/passengers/',
                      state: {
                        cityFrom: cityFrom,
                        cityTo: cityTo,
                        direction: direction,
                        dateLeave: dateLeave,
                        dateBack: dateBack,
                        getParams: getParams,
                        ticketsNumLeave: ticketsNumLeave,
                        chosenSeats: chosenSeats,
                        cost: cost,
                        passengers: passengers
                      }
                    }}
                    className="change__button">
                    Изменить
                  </NavLink>
                  
                </div>
              </div>

              <div className="content-container">
                <div className="content-container__title">Способ оплаты</div>
                <div className="content-container__col">
                  <p className="payment__method_confirm">{customer.paymentCash ? 'Наличными' : 'Онлайн'}</p>
                </div>

                <div className="total-wrap">
                  <NavLink 
                    to={{ 
                      pathname: '/payment/', 
                      state: {
                        cityFrom: cityFrom,
                        cityTo: cityTo,
                        direction: direction,
                        dateLeave: dateLeave,
                        dateBack: dateBack,
                        getParams: getParams,
                        ticketsNumLeave: ticketsNumLeave,
                        chosenSeats: chosenSeats,
                        cost: cost,
                        passengers: passengers,
                        customer: customer
                      }
                    }}
                    className="change__button">
                    Изменить
                  </NavLink>
                </div>
              </div>

              <NavLink to={{ 
                pathname: '/order-done/',
                state: {
                  direction: direction,
                  ticketsNumLeave: ticketsNumLeave,
                  chosenSeats: chosenSeats,
                  cost: cost,
                  passengers: passengers,
                  customer: customer
                }
              }} className="next-button">Подтвердить</NavLink>

            </section>

          </div>
        </div>
      </React.Fragment>
    );
  }
  
}