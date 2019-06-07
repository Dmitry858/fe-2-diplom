import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import Calendar from './Calendar.js';
import LastTickets from './LastTickets.js';
import loader from './img/preloader.gif';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import lux from './img/lux_seat.svg';
import coupe from './img/coupe.svg';
import reservedSeat from './img/reserved_seat.svg';
import seatPlace from './img/seat_place.svg';
import train from './img/train.svg';
import trainYellow from './img/train_yellow.svg';
import clock from './img/clock.svg';
import wagonScheme from './img/wagon-scheme.png';

import {
  NavLink
} from 'react-router-dom';

export default class SeatsChoosing extends Component {
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
          
          <Steps currentStep={1} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">
                <div className="search-filter">
                  <p className="search-filter__field-title">Дата поездки</p>
                  <div className="search-filter__form-field-wrap">
                    <input className="search-filter__form-field" type="text" placeholder="ДД/ММ/ГГ" />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <Calendar />
                  </div>

                  <p className="search-filter__field-title">Дата возвращения</p>
                  <div className="search-filter__form-field-wrap">
                    <input className="search-filter__form-field" type="text" placeholder="ДД/ММ/ГГ" />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <Calendar />
                  </div>
                  <hr/>

                  <div className="switches">
                    <div className="switch">
                      <div className="switch__icon-wrap">
                        <img className="switch__icon" src={coupe} alt="Купе" />
                      </div>
                      <div className="switch__name">Купе</div>
                      <div className="switch__toggle">
                        <div className="switch__toggle-button">
                          <input type="checkbox" className="switch__checkbox" />
                          <div className="switch__knobs"></div>
                          <div className="switch__layer"></div>
                        </div>
                      </div>
                    </div>

                    <div className="switch">
                      <div className="switch__icon-wrap">
                        <img className="switch__icon" src={reservedSeat} alt="Плацкарт" />
                      </div>
                      <div className="switch__name">Плацкарт</div>
                      <div className="switch__toggle">
                        <div className="switch__toggle-button">
                          <input type="checkbox" className="switch__checkbox" />
                          <div className="switch__knobs"></div>
                          <div className="switch__layer"></div>
                        </div>
                      </div>
                    </div>

                    <div className="switch">
                      <div className="switch__icon-wrap">
                        <img className="switch__icon" src={seatPlace} alt="Сидячий" />
                      </div>
                      <div className="switch__name">Сидячий</div>
                      <div className="switch__toggle">
                        <div className="switch__toggle-button">
                          <input type="checkbox" className="switch__checkbox" />
                          <div className="switch__knobs"></div>
                          <div className="switch__layer"></div>
                        </div>
                      </div>
                    </div>

                    <div className="switch">
                      <div className="switch__icon-wrap">
                        <img className="switch__icon" src={lux} alt="Люкс" />
                      </div>
                      <div className="switch__name">Люкс</div>
                      <div className="switch__toggle">
                        <div className="switch__toggle-button">
                          <input type="checkbox" className="switch__checkbox" />
                          <div className="switch__knobs"></div>
                          <div className="switch__layer"></div>
                        </div>
                      </div>
                    </div>

                    <div className="switch">
                      <div className="switch__icon-wrap">
                        <img className="switch__icon" src={wifi} alt="Wi-Fi" />
                      </div>
                      <div className="switch__name">Wi-Fi</div>
                      <div className="switch__toggle">
                        <div className="switch__toggle-button">
                          <input type="checkbox" className="switch__checkbox" />
                          <div className="switch__knobs"></div>
                          <div className="switch__layer"></div>
                        </div>
                      </div>
                    </div>

                    <div className="switch">
                      <div className="switch__icon-wrap">
                        <img className="switch__icon" src={express} alt="Экспресс" />
                      </div>
                      <div className="switch__name">Экспресс</div>
                      <div className="switch__toggle">
                        <div className="switch__toggle-button">
                          <input type="checkbox" className="switch__checkbox" />
                          <div className="switch__knobs"></div>
                          <div className="switch__layer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>

                  <p className="price-range-title">Стоимость</p>
                  <div className="input-range input-range_price">
                    <div className="input-range__labels">
                      <p className="input-range__label">от</p>
                      <p className="input-range__label">до</p>
                    </div>
                    <div className="scale">
                      <div className="scale__band" style={{left: 0 + 'px', right: 0 + 'px'}}>
                        <div className="scale__band-slider scale__band-slider_min">
                          <span className="scale__band-num scale__band-num_min">0</span>
                        </div>
                        <div className="scale__band-slider scale__band-slider_max">
                          <span className="scale__band-num scale__band-num_max">3000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>

                  <details className="leave-wrap">
                    <summary className="leave">
                      <div className="leave__arrow">
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </div>
                      <p className="leave__title">Туда</p>
                      <div className="leave__button">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </div>
                    </summary>

                    <div className="input-range input-range_leave_departure">
                      <p className="leave-range-title">Время отбытия</p>
                      <div className="scale scale_leave_departure">
                        <div className="scale__band scale__band_leave_departure" style={{left: 0 + 'px', right: 0 + 'px'}}>
                          <div className="scale__band-slider scale__band-slider_min scale__band-slider_min_leave_departure">
                            <span className="scale__band-num scale__band-num_min scale__band-num_min_leave_departure">0:00</span>
                          </div>
                          <div className="scale__band-slider scale__band-slider_max scale__band-slider_max_leave_departure">
                            <span className="scale__band-num scale__band-num_max scale__band-num_max_leave_departure">24:00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="input-range input-range_leave_return">
                      <p className="leave-range-title">Время прибытия</p>
                      <div className="scale scale_leave_return">
                        <div className="scale__band scale__band_leave_return" style={{left: 0 + 'px', right: 0 + 'px'}}>
                          <div className="scale__band-slider scale__band-slider_min scale__band-slider_min_leave_return">
                            <span className="scale__band-num scale__band-num_min scale__band-num_min_leave_return">0:00</span>
                          </div>
                          <div className="scale__band-slider scale__band-slider_max scale__band-slider_max_leave_return">
                            <span className="scale__band-num scale__band-num_max scale__band-num_max_leave_return">24:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <hr/>

                  <details className="back-wrap">
                    <summary className="back">
                      <div className="back__arrow">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                      </div>
                      <p className="back__title">Обратно</p>
                      <div className="back__button">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </div>
                    </summary>

                    <div className="input-range input-range_back_departure">
                      <p className="back-range-title">Время отбытия</p>
                      <div className="scale scale_back_departure">
                        <div className="scale__band scale__band_back_departure" style={{left: 0 + 'px', right: 0 + 'px'}}>
                          <div className="scale__band-slider scale__band-slider_min scale__band-slider_min_back_departure">
                            <span className="scale__band-num scale__band-num_min scale__band-num_min_back_departure">0:00</span>
                          </div>
                          <div className="scale__band-slider scale__band-slider_max scale__band-slider_max_back_departure">
                            <span className="scale__band-num scale__band-num_max scale__band-num_max_back_departure">24:00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="input-range input-range_back_return">
                      <p className="back-range-title">Время прибытия</p>
                      <div className="scale scale_back_return">
                        <div className="scale__band scale__band_back_return" style={{left: 0 + 'px', right: 0 + 'px'}}>
                          <div className="scale__band-slider scale__band-slider_min scale__band-slider_min_back_return">
                            <span className="scale__band-num scale__band-num_min scale__band-num_min_back_return">0:00</span>
                          </div>
                          <div className="scale__band-slider scale__band-slider_max scale__band-slider_max_back_return">
                            <span className="scale__band-num scale__band-num_max scale__band-num_max_back_return">24:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>

                <LastTickets />
              </section>

              <section className="content">
                <h2 className="content__title">Выбор мест</h2>

                <div className="seat-choosing-wrap">
                  <div className="seat-choosing-row seat-choosing-row_padding">
                    <div className="leave__arrow leave__arrow_content">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                    <a className="seat-choosing__other" href="#">Выбрать другой поезд</a>
                  </div>

                  <div className="seat-choosing-row seat-choosing-row_space-between">
                    <div className="train-data">
                      <div className="train__icon train__icon_content">
                        <img src={trainYellow} alt="" />
                      </div>
                      <div className="train__route">
                        <div className="train__name train__name_content">116С</div>
                        <p className="train__route-point train__route-point_inactive">Адлер <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                        <p className="train__route-point">Москва <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                        <p className="train__route-point">Санкт-Петербург</p>
                      </div>
                    </div>

                    <div className="train__info train__info_leave train__info_content">
                      <div className="train__info_leave_departure">
                        <p className="train__info-time">00:10</p>
                        <p className="train__info-city">Москва</p>
                        <p className="train__info-station">Курский вокзал</p>
                      </div>
                      <div className="train__info_leave_arrow">
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </div>
                      <div className="train__info_leave_arrival">
                        <p className="train__info-time">09:52</p>
                        <p className="train__info-city">Санкт-Петербург</p>
                        <p className="train__info-station">Ладожский вокзал</p>
                      </div>
                    </div>

                    <div className="travel-time">
                      <img className="travel-time__icon" src={clock} alt="Clock" />
                      <p className="travel-time__text">9 часов<br/>42 минуты</p>
                    </div>
                  </div>

                  <div className="seat-choosing-row">
                    <h3 className="tickets-num-title">Количество билетов</h3>
                  </div>

                  <div className="seat-choosing-row tickets-num">
                    <div className="tickets-num__type tickets-num__type_adult tickets-num__type_active">
                      <input className="tickets-num__input" type="text" value="Взрослых - 2" />
                      <p className="tickets-num__comment tickets-num__comment_active">Можно добавить еще 3 пассажиров</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_child">
                      <input className="tickets-num__input" type="text" value="Детских - 1" />
                      <p className="tickets-num__comment">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_baby">
                      <input className="tickets-num__input" type="text" value="Детских «без места» - 0" />
                    </div>
                  </div>

                  <div className="seat-choosing-row">
                    <h3 className="wagon-title">Тип вагона</h3>
                  </div>

                  <div className="seat-choosing-row">
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_seat"></div>
                      <div className="wagon-type__name">Сидячий</div>
                    </div>
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_reserved"></div>
                      <div className="wagon-type__name">Плацкарт</div>
                    </div>
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_coupe_active"></div>
                      <div className="wagon-type__name wagon-type__name_active">Купе</div>
                    </div>
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_lux"></div>
                      <div className="wagon-type__name">Люкс</div>
                    </div>
                  </div>

                  <div className="seat-choosing-row wagon">
                      <p className="wagon__available">
                        Вагоны
                        <span className="wagon__available_num wagon__available_num_active">07</span>
                        <span className="wagon__available_num">09</span>
                      </p>
                      <p className="wagon__note">Нумерация вагонов начинается с головы поезда</p>
                      <div className="wagon__number">07<span className="wagon__number_caption">вагон</span></div>
                      <div className="wagon__seats">
                        <p className="wagon__seats_general">Места <span className="wagon__seats_general_num">11</span></p>
                        <p className="wagon__seats_upper">Верхние <span className="wagon__seats_upper_num">3</span></p>
                        <p className="wagon__seats_lower">Нижние <span className="wagon__seats_lower_num">8</span></p>
                      </div>
                      <div className="wagon__price">
                        <p className="wagon__price_subtitle">Стоимость</p>
                        <p className="wagon__price_upper">2 920 <i className="fa fa-rub" aria-hidden="true"></i></p>
                        <p className="wagon__price_lower">3 530 <i className="fa fa-rub" aria-hidden="true"></i></p>
                      </div>
                      <div className="wagon__service">
                        <p className="wagon__service-subtitle">Обслуживание <span>ФПК</span></p>
                        <div className="wagon__service-icons">
                          <div className="wagon__service-icon wagon__service-icon_cond">
                            <div className="wagon__service_desc wagon__service_desc_cond">кондиционер</div>
                          </div>
                          <div className="wagon__service-icon wagon__service-icon_wifi">
                            <div className="wagon__service_desc wagon__service_desc_wifi">wi-fi</div>
                          </div>
                          <div className="wagon__service-icon wagon__service-icon_active wagon__service-icon_linen_active">
                            <div className="wagon__service_desc wagon__service_desc_linen">белье</div>
                          </div>
                          <div className="wagon__service-icon wagon__service-icon_active wagon__service-icon_tea_active">
                            <div className="wagon__service_desc wagon__service_desc_tea">чай</div>
                          </div>
                        </div>
                      </div>

                      <div className="wagon__message-wrap">
                        <div className="wagon__message">11 человек выбирают места в этом поезде</div>
                      </div>
                      <div className="wagon__scheme">
                        <img src={wagonScheme} alt="Схема вагона" />
                      </div>
                  </div>

                </div>


                <div className="seat-choosing-wrap">
                  <div className="seat-choosing-row seat-choosing-row_back seat-choosing-row_padding">
                    <div className="back__arrow back__arrow_content">
                      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </div>
                    <a className="seat-choosing__other" href="#">Выбрать другой поезд</a>
                  </div>

                  <div className="seat-choosing-row seat-choosing-row_space-between">
                    <div className="train-data">
                      <div className="train__icon train__icon_content">
                        <img src={trainYellow} alt="" />
                      </div>
                      <div className="train__route">
                        <div className="train__name train__name_content">116С</div>
                        <p className="train__route-point train__route-point_inactive">Адлер <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                        <p className="train__route-point">Москва <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                        <p className="train__route-point">Санкт-Петербург</p>
                      </div>
                    </div>

                    <div className="train__info train__info_leave train__info_content">
                      <div className="train__info_back_departure">
                        <p className="train__info-time">00:10</p>
                        <p className="train__info-city">Москва</p>
                        <p className="train__info-station">Курский вокзал</p>
                      </div>
                      <div className="train__info_back_arrow">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                      </div>
                      <div className="train__info_back_arrival">
                        <p className="train__info-time">09:52</p>
                        <p className="train__info-city">Санкт-Петербург</p>
                        <p className="train__info-station">Ладожский вокзал</p>
                      </div>
                    </div>

                    <div className="travel-time">
                      <img className="travel-time__icon" src={clock} alt="Clock" />
                      <p className="travel-time__text">9 часов<br/>42 минуты</p>
                    </div>
                  </div>

                  <div className="seat-choosing-row">
                    <h3 className="tickets-num-title">Количество билетов</h3>
                  </div>

                  <div className="seat-choosing-row tickets-num">
                    <div className="tickets-num__type tickets-num__type_adult tickets-num__type_active">
                      <input className="tickets-num__input" type="text" value="Взрослых - 2" />
                      <p className="tickets-num__comment tickets-num__comment_active">Можно добавить еще 3 пассажиров</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_child">
                      <input className="tickets-num__input" type="text" value="Детских - 1" />
                      <p className="tickets-num__comment">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_baby">
                      <input className="tickets-num__input" type="text" value="Детских «без места» - 0" />
                    </div>
                  </div>

                  <div className="seat-choosing-row">
                    <h3 className="wagon-title">Тип вагона</h3>
                  </div>

                  <div className="seat-choosing-row">
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_seat"></div>
                      <div className="wagon-type__name">Сидячий</div>
                    </div>
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_reserved"></div>
                      <div className="wagon-type__name">Плацкарт</div>
                    </div>
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_coupe_active"></div>
                      <div className="wagon-type__name wagon-type__name_active">Купе</div>
                    </div>
                    <div className="wagon-type">
                      <div className="wagon-type__icon wagon-type__icon_lux"></div>
                      <div className="wagon-type__name">Люкс</div>
                    </div>
                  </div>

                  <div className="seat-choosing-row wagon">
                      <p className="wagon__available">
                        Вагоны
                        <span className="wagon__available_num wagon__available_num_active">07</span>
                        <span className="wagon__available_num">09</span>
                      </p>
                      <p className="wagon__note">Нумерация вагонов начинается с головы поезда</p>
                      <div className="wagon__number">07<span className="wagon__number_caption">вагон</span></div>
                      <div className="wagon__seats">
                        <p className="wagon__seats_general">Места <span className="wagon__seats_general_num">11</span></p>
                        <p className="wagon__seats_upper">Верхние <span className="wagon__seats_upper_num">3</span></p>
                        <p className="wagon__seats_lower">Нижние <span className="wagon__seats_lower_num">8</span></p>
                      </div>
                      <div className="wagon__price">
                        <p className="wagon__price_subtitle">Стоимость</p>
                        <p className="wagon__price_upper">2 920 <i className="fa fa-rub" aria-hidden="true"></i></p>
                        <p className="wagon__price_lower">3 530 <i className="fa fa-rub" aria-hidden="true"></i></p>
                      </div>
                      <div className="wagon__service">
                        <p className="wagon__service-subtitle">Обслуживание <span>ФПК</span></p>
                        <div className="wagon__service-icons">
                          <div className="wagon__service-icon wagon__service-icon_cond">
                            <div className="wagon__service_desc wagon__service_desc_cond">кондиционер</div>
                          </div>
                          <div className="wagon__service-icon wagon__service-icon_wifi">
                            <div className="wagon__service_desc wagon__service_desc_wifi">wi-fi</div>
                          </div>
                          <div className="wagon__service-icon wagon__service-icon_active wagon__service-icon_linen_active">
                            <div className="wagon__service_desc wagon__service_desc_linen">белье</div>
                          </div>
                          <div className="wagon__service-icon wagon__service-icon_active wagon__service-icon_tea_active">
                            <div className="wagon__service_desc wagon__service_desc_tea">чай</div>
                          </div>
                        </div>
                      </div>

                      <div className="wagon__message-wrap">
                        <div className="wagon__message">11 человек выбирают места в этом поезде</div>
                      </div>
                      <div className="wagon__scheme">
                        <img src={wagonScheme} alt="Схема вагона" />
                      </div>
                  </div>

                </div>

                <NavLink to={{ pathname: '/passengers/' }} className="next-button">Далее</NavLink>

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}