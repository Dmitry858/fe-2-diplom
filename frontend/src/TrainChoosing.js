import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import Calendar from './Calendar.js';
import LastTickets from './LastTickets.js';
import Pagination from './Pagination.js';
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
      preloader: true
    };
  }
  
  componentWillMount() {
    fetch( `https://netology-trainbooking.herokuapp.com/routes/${this.props.location.search}` )
      .then( response => response.json())
      .then( data => {
        this.setState({
          data: data,
          preloader: false
        });
      });
  }
  
  render() {
    console.log(this.state);
    
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
                <div className="content__header">
                  <p className="train-found">Найдено <span className="train-found__num">20</span></p>
                  <p className="train-sort-label">Сортировать по:
                    <select className="train-sort">
                      <option className="train-sort__item" value="времени">времени</option>
                      <option className="train-sort__item" value="стоимости">стоимости</option>
                      <option className="train-sort__item" value="длительности">длительности</option>
                    </select>
                  </p>
                  <p className="show-by">
                    Показывать по:
                    <span className="show-by__num_active">5</span> 
                    <span className="show-by__num">10</span> 
                    <span className="show-by__num">20</span>
                  </p>         
                </div>

                <div className="train">
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
                    <NavLink to={{ pathname: '/seats-choosing/' }} className="train__seats-choice">Выбрать места</NavLink>
                  </div>
                </div>

                <Pagination />
              </section>

            </div>
          </div>
          
        </React.Fragment>
      );
    }
  }
  
}