import React, { Component } from 'react';
import Calendar from './Calendar.js';
import coupe from './img/coupe.svg';
import reservedSeat from './img/reserved_seat.svg';
import seatPlace from './img/seat_place.svg';
import lux from './img/lux_seat.svg';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';

export default class SidebarFilter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      calendarFrom: false,
      calendarTo: false
    };
  }
  
  checkboxHandler(param) {
    this.props.sendData(param);
  }
  
  render() {
    const { filterParams } = this.props;
    const currentDate = new Date();
    
    return (
      <React.Fragment>
        <div className="search-filter">
          <p className="search-filter__field-title">Дата поездки</p>
          <div className="search-filter__form-field-wrap">
            <input className="search-filter__form-field" type="text" placeholder="ДД.ММ.ГГГГ" defaultValue={this.props.dateLeave ? this.props.dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) : ''} />
            <i className="fa fa-calendar" aria-hidden="true"></i>
            { this.state.calendarFrom && <Calendar currentDate={currentDate} /> }
            
          </div>

          <p className="search-filter__field-title">Дата возвращения</p>
          <div className="search-filter__form-field-wrap">
            <input className="search-filter__form-field" type="text" placeholder="ДД.ММ.ГГГГ" defaultValue={this.props.dateBack ? this.props.dateBack.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) : ''} />
            <i className="fa fa-calendar" aria-hidden="true"></i>
            { this.state.calendarTo && <Calendar currentDate={currentDate} /> }
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
                  <input type="checkbox" className="switch__checkbox" checked={filterParams.have_second_class} onChange={this.checkboxHandler.bind(this, 'have_second_class')} />
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
                  <input type="checkbox" className="switch__checkbox" checked={filterParams.have_third_class} onChange={this.checkboxHandler.bind(this, 'have_third_class')} />
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
                  <input type="checkbox" className="switch__checkbox" checked={filterParams.have_fourth_class} onChange={this.checkboxHandler.bind(this, 'have_fourth_class')} />
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
                  <input type="checkbox" className="switch__checkbox" checked={filterParams.have_first_class} onChange={this.checkboxHandler.bind(this, 'have_first_class')} />
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
                  <input type="checkbox" className="switch__checkbox" checked={filterParams.have_wifi} onChange={this.checkboxHandler.bind(this, 'have_wifi')} />
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
                  <input type="checkbox" className="switch__checkbox" checked={filterParams.have_express} onChange={this.checkboxHandler.bind(this, 'have_express')} />
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
      </React.Fragment>
    );    
  }
  
}
