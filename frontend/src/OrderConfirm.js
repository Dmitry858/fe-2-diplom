import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import loader from './img/preloader.gif';
import passenger from './img/passenger.svg';
import passengerIcon from './img/passenger-icon.svg';
import train from './img/train.svg';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import lux from './img/lux_seat.svg';

import {
  NavLink
} from 'react-router-dom';

export default class OrderConfirm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      preloader: false
    };
  }
  
  render() {
    const { cityFrom, cityTo, direction, dateLeave, dateBack, ticketsNumLeave, chosenSeats, cost, passengers, customer } = this.props.location.state;
    
    if (this.state.preloader) {
      return (
        <React.Fragment>
          <Header currentPage={'inner'} cityFrom={cityFrom} cityTo={cityTo} dateLeave={dateLeave} dateBack={dateBack} />

          <div className="content-wrap content-wrap_loader">
            <p className="loader-text">идет поиск</p>
            <img className="loader" src={loader} alt="Loader" />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header currentPage={'inner'} cityFrom={cityFrom} cityTo={cityTo} dateLeave={dateLeave} dateBack={dateBack} />
          
          <Steps currentStep={4} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">
                <div className="details">
                  <h3 className="details__title">Детали поездки</h3>
                  <hr/>

                  <details className="leave-wrap" open>
                    <summary className="leave">
                      <div className="leave__arrow">
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </div>
                      <p className="leave__title">Туда</p>
                      <p className="leave__date">30.08.2018</p>
                      <div className="leave__button">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </div>
                    </summary>

                    <div className="details__row details__row_center">
                      <p className="train-num__caption">№ Поезда</p>
                      <p className="train-num__value train-num__value_leave">116C</p>
                    </div>
                    <div className="details__row">
                      <p className="train-name__caption">Название</p>
                      <p className="train-name__value train-name__value_leave">Адлер<br/>Санкт-Петербург</p>
                    </div>

                    <div className="details__row">
                      <div className="details__info_leave_departure">
                        <p className="details__info-time">00:10</p>
                        <p className="details__info-date">30.08.2018</p>
                        <p className="details__info-city">Москва</p>
                        <p className="details__info-station">Курский вокзал</p>
                      </div>
                      <div className="details__info_leave_arrow">
                        <p className="details__travel-time">9:42</p>
                        <i className="fa fa-long-arrow-right details__arrow" aria-hidden="true"></i>
                      </div>
                      <div className="details__info_leave_arrival">
                        <p className="details__info-time">09:52</p>
                        <p className="details__info-date">31.08.2018</p>
                        <p className="details__info-city">Санкт-Петербург</p>
                        <p className="details__info-station">Ладожский вокзал</p>
                      </div>
                    </div>

                  </details>
                  <hr/>

                  <details className="back-wrap" open>
                    <summary className="back">
                      <div className="back__arrow">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                      </div>
                      <p className="back__title">Обратно</p>
                      <p className="back__date">09.09.2018</p>
                      <div className="back__button">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </div>
                    </summary>

                    <div className="details__row details__row_center">
                      <p className="train-num__caption">№ Поезда</p>
                      <p className="train-num__value train-num__value_back">116C</p>
                    </div>
                    <div className="details__row">
                      <p className="train-name__caption">Название</p>
                      <p className="train-name__value train-name__value_back">Адлер<br/>Санкт-Петербург</p>
                    </div>

                    <div className="details__row">
                      <div className="details__info_back_departure">
                        <p className="details__info-time">00:10</p>
                        <p className="details__info-date">30.08.2018</p>
                        <p className="details__info-city">Москва</p>
                        <p className="details__info-station">Курский вокзал</p>
                      </div>
                      <div className="details__info_back_arrow">
                        <p className="details__travel-time">9:42</p>
                        <i className="fa fa-long-arrow-left details__arrow" aria-hidden="true"></i>
                      </div>
                      <div className="details__info_back_arrival">
                        <p className="details__info-time">09:52</p>
                        <p className="details__info-date">31.08.2018</p>
                        <p className="details__info-city">Санкт-Петербург</p>
                        <p className="details__info-station">Ладожский вокзал</p>
                      </div>
                    </div>

                  </details>
                  <hr/>

                  <details className="passengers-wrap" open>
                    <summary className="passengers">
                      <div className="passengers__icon">
                        <img src={passenger} alt="Пассажиры" />
                      </div>
                      <p className="passengers__title">Пассажиры</p>
                      <div className="passengers__button">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </div>
                    </summary>

                    <div className="passengers-info">
                      <div className="passengers-info__row">
                        <p className="passengers-info__item">2 Взрослых</p>
                        <div className="passengers-info__price">5 840 <i className="fa fa-rub" aria-hidden="true"></i></div>
                      </div>
                      <div className="passengers-info__row">
                        <p className="passengers-info__item">1 Ребенок</p>
                        <div className="passengers-info__price">1 920 <i className="fa fa-rub" aria-hidden="true"></i></div>
                      </div>
                    </div>

                  </details>
                  <hr/>

                  <div className="details__total">
                    <h3 className="details__total_subtitle">Итог</h3>
                    <p className="details__total_price">7 760 <i className="fa fa-rub" aria-hidden="true"></i></p>
                  </div>

                </div>

              </section>

              <section className="content">

                <div className="train train_confirm content-container">
                  <div className="train-title">Поезд</div>
                  <div className="train__name-wrap">
                    <div className="train__icon">
                      <img src={train} alt="" />
                    </div>
                    <div className="train__name">116С</div>
                    <div className="train__route">
                      <p className="train__route-point train__route-point_inactive">Адлер <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                      <p className="train__route-point">Москва <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                      <p className="train__route-point">Санкт-Петербург</p>
                    </div>
                  </div>
                  <div className="train__info-wrap">
                    <div className="train__info train__info_leave">
                      <div className="train__info_leave_departure">
                        <p className="train__info-time">00:10</p>
                        <p className="train__info-city">Москва</p>
                        <p className="train__info-station">Курский вокзал</p>
                      </div>
                      <div className="train__info_leave_arrow">
                        <p className="train__travel-time">9 : 42</p>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </div>
                      <div className="train__info_leave_arrival">
                        <p className="train__info-time">09:52</p>
                        <p className="train__info-city">Санкт-Петербург</p>
                        <p className="train__info-station">Ладожский вокзал</p>
                      </div>
                    </div>
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
                  </div>
                  <div className="train__seats-wrap">
                    <div className="train__seat">
                      <div className="train__seat-name">Сидячий</div>
                      <div className="train__seat-number">88</div>
                      <div className="train__seat-price">
                        от <span className="train__seat-price_value">1 920</span>
                        <i className="fa fa-rub" aria-hidden="true"></i>
                      </div>
                    </div>

                    <div className="train__seat">
                      <div className="train__seat-name">Плацкарт</div>
                      <div className="train__seat-number">52</div>
                      <div className="train__seat-price">
                        от <span className="train__seat-price_value">2 530</span>
                        <i className="fa fa-rub" aria-hidden="true"></i>
                      </div>
                    </div>

                    <div className="train__seat">
                      <div className="train__seat-name">Купе</div>
                      <div className="train__seat-number">24</div>
                      <div className="train__seat-price">
                        от <span className="train__seat-price_value">3 820</span>
                        <i className="fa fa-rub" aria-hidden="true"></i>
                      </div>
                      <div className="train__seat_subtypes hidden">
                        <div className="train__seat_subtype">
                          <div className="train__seat-name">верхние</div>
                          <div className="train__seat-number train__seat-number_subtype">19</div>
                          <div className="train__seat-price">
                            <span className="train__seat-price_value">2 920</span>
                            <i className="fa fa-rub" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="train__seat_subtype">
                          <div className="train__seat-name">нижние</div>
                          <div className="train__seat-number train__seat-number_subtype">5</div>
                          <div className="train__seat-price">
                            <span className="train__seat-price_value">3 530</span>
                            <i className="fa fa-rub" aria-hidden="true"></i>
                          </div>
                        </div>  
                      </div>
                    </div>

                    <div className="train__seat-filters">
                      <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" />
                      <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" />
                      <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" />
                    </div>
                    <a className="change__button" href="#">Изменить</a>
                  </div>
                </div>

                <div className="content-container">
                  <div className="content-container__title">Пассажиры</div>
                  <div className="passengers-list">
                    <div className="passengers-list__item">
                      <div className="passengers-list__item-icon">
                        <img src={passengerIcon} alt="" />
                        Взрослый
                      </div>
                      <div className="passengers-list__item-info">
                        <p className="passengers-list__item-name">Мартынюк Ирина Эдуардовна</p>
                        <p className="passengers-list__item-gender">Пол женский</p>
                        <p className="passengers-list__item-birth">Дата рождения 17.02.1985</p>
                        <p className="passengers-list__item-document">Паспорт РФ 4204 380694</p>
                      </div>
                    </div>

                    <div className="passengers-list__item">
                      <div className="passengers-list__item-icon">
                        <img src={passengerIcon} alt="" />
                        Детский
                      </div>
                      <div className="passengers-list__item-info">
                        <p className="passengers-list__item-name">Мартынюк Кирилл Сергеевич</p>
                        <p className="passengers-list__item-gender">Пол мужской</p>
                        <p className="passengers-list__item-birth">Дата рождения 25.01.2006</p>
                        <p className="passengers-list__item-document">Свидетельство о рождении VIII УН 256319</p>
                      </div>
                    </div>

                    <div className="passengers-list__item">
                      <div className="passengers-list__item-icon">
                        <img src={passengerIcon} alt="" />
                        Детский
                      </div>
                      <div className="passengers-list__item-info">
                        <p className="passengers-list__item-name">Мартынюк Кирилл Сергеевич</p>
                        <p className="passengers-list__item-gender">Пол мужской</p>
                        <p className="passengers-list__item-birth">Дата рождения 25.01.2006</p>
                        <p className="passengers-list__item-document">Свидетельство о рождении VIII УН 256319</p>
                      </div>
                    </div>
                  </div>

                  <div className="total-wrap">
                    <div className="total">
                      <h3 className="total__subtitle">Всего</h3>
                      <p className="total__price">7 760 <i className="fa fa-rub total__price_icon" aria-hidden="true"></i></p>
                    </div>

                    <a className="change__button" href="#">Изменить</a>
                  </div>
                </div>

                <div className="content-container">
                  <div className="content-container__title">Способ оплаты</div>
                  <div className="content-container__col">
                    <p className="payment__method_confirm">Наличными</p>
                  </div>

                  <div className="total-wrap">
                    <a className="change__button" href="#">Изменить</a>
                  </div>
                </div>

                <NavLink to={{ pathname: '/order-done/' }} className="next-button">Подтвердить</NavLink>

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}