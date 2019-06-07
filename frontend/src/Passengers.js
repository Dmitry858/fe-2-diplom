import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import loader from './img/preloader.gif';
import passenger from './img/passenger.svg';

import {
  NavLink
} from 'react-router-dom';

export default class Passengers extends Component {
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
          
          <Steps currentStep={2} />
          
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

                <div className="passenger">
                  <div className="passenger__announce">
                    <div className="passenger__toggle">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </div>
                    <p className="passenger__title">Пассажир 1</p>
                    <div className="passenger__close">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="passenger__detail">
                    <div className="passenger__detail-row">
                      <select className="passenger__type">
                        <option className="passenger__type-item" value="взрослый">Взрослый</option>
                        <option className="passenger__type-item" value="детский">Детский</option>
                      </select>
                    </div>
                    <div className="passenger__detail-row">
                      <label className="passenger__name">
                        Фамилия
                        <input className="passenger__input" name="surname" type="text" />
                      </label>

                      <label className="passenger__name">
                        Имя
                        <input className="passenger__input" name="name" type="text" />
                      </label>

                      <label className="passenger__name">
                        Отчество
                        <input className="passenger__input" name="patronymic" type="text" />
                      </label>
                    </div>

                    <div className="passenger__detail-row passenger__detail-row_left">
                      <div className="passenger__gender">
                        Пол
                        <div className="passenger__gender-field">
                          <div className="passenger__gender-value passenger__gender-value_man">М</div>
                          <div className="passenger__gender-value passenger__gender-value_woman passenger__gender-value_active">Ж</div>
                        </div>
                      </div>

                      <label className="passenger__date-birth">
                        Дата рождения
                        <input className="passenger__input passenger__input_date-birth" name="birth" type="text" placeholder="ДД/ММ/ГГ" />
                      </label>
                    </div>

                    <div className="passenger__detail-row">
                      <input type="checkbox" id="checkbox_passenger1" />
                      <label for="checkbox_passenger1">ограниченная подвижность</label>
                    </div>

                    <div className="passenger__detail-row passenger__document-wrap">
                      <label className="passenger__document">
                        Тип документа
                        <select className="passenger__document-type">
                          <option className="passenger__document-item" value="паспорт">Паспорт РФ</option>
                          <option className="passenger__document-item" value="свидетельство">Свидетельство о рождении</option>
                        </select>
                      </label>

                      <label className="passenger__document">
                        Серия
                        <input className="passenger__input" name="doc-series" type="text" />
                      </label>

                      <label className="passenger__document">
                        Номер
                        <input className="passenger__input" name="doc-number" type="text" />
                      </label>
                    </div>

                    <div className="passenger__detail-row passenger__next-wrap passenger__next-wrap_allow">
                      <div className="passenger__next-message passenger__next-message_allow">
                        <div className="passenger__message-icon passenger__message-icon_allow">
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                        Готово
                      </div>

                      <a className="passenger__next-button" href="#">Следующий пассажир</a>
                    </div>

                  </div>
                </div>

                <div className="passenger">
                  <div className="passenger__announce passenger__announce_collapse">
                    <div className="passenger__toggle passenger__toggle_collapse">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p className="passenger__title">Пассажир 3</p>
                    <div className="passenger__close hidden">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="passenger__detail hidden"></div>
                </div>

                <div className="add-passenger">
                  <div className="passenger__announce passenger__announce_collapse">
                    <p className="add-passenger__title">Добавить пассажира</p>
                    <div className="add-passenger__icon">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <NavLink to={{ pathname: '/payment/' }} className="next-button">Далее</NavLink>

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}