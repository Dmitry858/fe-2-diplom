import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import loader from './img/preloader.gif';
import passenger from './img/passenger.svg';

import {
  NavLink
} from 'react-router-dom';

export default class Payment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      preloader: false
    };
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
      return (
        <React.Fragment>
          <Header currentPage={'inner'} />
          
          <Steps currentStep={3} />
          
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

                <div className="payment">
                  <div className="payment-row payment-row_title">
                    <p className="payment__title">Персональные данные</p>
                  </div>

                  <div className="payment-row payment-row_dotted">
                    <label className="passenger__name passenger__name_dark">
                      Фамилия
                      <input className="passenger__input" name="surname" type="text" />
                    </label>

                    <label className="passenger__name passenger__name_dark">
                      Имя
                      <input className="passenger__input" name="name" type="text" />
                    </label>

                    <label className="passenger__name passenger__name_dark">
                      Отчество
                      <input className="passenger__input" name="patronymic" type="text" />
                    </label>
                  </div>

                  <div className="payment-row">
                    <label className="passenger__phone">
                      Контактный телефон
                      <input className="passenger__input" name="phone" type="text" placeholder="+7 ___ ___ __ __" />
                    </label>
                  </div>

                  <div className="payment-row">
                    <label className="passenger__phone">
                      E-mail
                      <input className="passenger__input" name="email" type="text" placeholder="inbox@gmail.com" />
                    </label>
                  </div>

                  <div className="payment-row payment-row_title payment-row_ways">
                    <p className="payment__title">Способы оплаты</p>
                  </div>

                  <div className="payment-row payment-row_margin-top">
                    <input className="yellow-checkbox" type="checkbox" id="checkbox_pay-online" />
                    <label className="payment__checkbox-label" for="checkbox_pay-online">Онлайн</label>
                  </div>

                  <div className="payment-row payment-row_methods payment-row_margin-bottom">
                    <p className="payment__method">Банковской картой</p>
                    <p className="payment__method">PayPal</p>
                    <p className="payment__method">Visa QIWI Wallet</p>
                  </div>

                  <div className="payment-row payment-row_dotted payment-row_margin-bottom">
                    <input className="yellow-checkbox" type="checkbox" id="checkbox_pay-cash" />
                    <label className="payment__checkbox-label payment__checkbox-label_cash" for="checkbox_pay-cash">Наличными</label>
                  </div>

                </div>

                <NavLink to={{ pathname: '/order-confirm/' }} className="next-button">Купить билеты</NavLink>

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}