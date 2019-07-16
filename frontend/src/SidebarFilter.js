import React, { Component } from 'react';
import Calendar from './Calendar.js';
import coupe from './img/coupe.svg';
import reservedSeat from './img/reserved_seat.svg';
import seatPlace from './img/seat_place.svg';
import lux from './img/lux_seat.svg';
import wifi from './img/wi_fi.svg';
import express from './img/express.svg';
import PriceRange from './ranges/PriceRange.js';
import TimeStartDeparture from './ranges/TimeStartDeparture.js';
import TimeStartArrival from './ranges/TimeStartArrival.js';
import TimeEndDeparture from './ranges/TimeEndDeparture.js';
import TimeEndArrival from './ranges/TimeEndArrival.js';

export default class SidebarFilter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dateLeave: '',
      dateBack: '',
      calendarFrom: false,
      calendarTo: false
    };
  }
  
  handleCalendar(point, event) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      if (point === 'from' && !this.state.calendarFrom && event.type === 'focus') {
        this.setState({
          calendarFrom: true
        });
      }
      if (point === 'from' && this.state.calendarFrom) {
        this.setState({
          calendarFrom: false
        });
      }
      if (point === 'to' && !this.state.calendarTo && event.type === 'focus') {
        this.setState({
          calendarTo: true
        });
      }
      if (point === 'to' && this.state.calendarTo) {
        this.setState({
          calendarTo: false
        });
      }
    }
  }
  
  
  checkboxHandler(param) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      this.props.sendData(param, 'checkbox');
    }
  }
  
  priceRangeHandler(param) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      this.props.sendData(param, 'pricerange');
    }
  }

  timeStartDepartureHandler(param) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      this.props.sendData(param, 'timestartdeprange');
    }
  }
  
  timeStartArrivalHandler(param) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      this.props.sendData(param, 'timestartarrange');
    }
  }
  
  timeEndDepartureHandler(param) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      this.props.sendData(param, 'timeenddeprange');
    }
  }
  
  timeEndArrivalHandler(param) {
    if (this.props.step === 'seats-choosing') {
      this.props.sendData();
    } else {
      this.props.sendData(param, 'timeendarrange');
    }
  }
  
  handleCalendarResponse(response, direction) {
    if (direction === 'from') {
      this.props.sendData(response, 'date_from');
      this.setState({
        dateLeave: response,
        calendarFrom: false
      }); 
    }
    if (direction === 'to') {
      this.setState({
        dateBack: response,
        calendarTo: false
      }); 
    }
  }
  
  render() {
    const { filterParams, minPrice, maxPrice, startDepartureTime, startArrivalTime, endDepartureTime, endArrivalTime } = this.props;
    const currentDate = new Date();
    
    return (
      <React.Fragment>
        <div className="search-filter">
          <p className="search-filter__field-title">Дата поездки</p>
          <div className="search-filter__form-field-wrap">
            <input className="search-filter__form-field" type="text" placeholder="ДД.ММ.ГГГГ" defaultValue={this.props.dateLeave ? this.props.dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) : this.state.dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'})} onFocus={this.handleCalendar.bind(this, 'from')} />
            <i className="fa fa-calendar" aria-hidden="true"></i>
            { this.state.calendarFrom && <Calendar currentDate={currentDate} direction={'from'} responseHandler={this.handleCalendarResponse.bind(this)} /> }
            
          </div>

          <p className="search-filter__field-title">Дата возвращения</p>
          <div className="search-filter__form-field-wrap">
            <input className="search-filter__form-field" type="text" placeholder="ДД.ММ.ГГГГ" defaultValue={this.props.dateBack ? this.props.dateBack.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) : ''} onFocus={this.handleCalendar.bind(this, 'to')} />
            <i className="fa fa-calendar" aria-hidden="true"></i>
            { this.state.calendarTo && <Calendar currentDate={currentDate} direction={'to'} responseHandler={this.handleCalendarResponse.bind(this)} /> }
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
          <PriceRange priceRangeHandler={this.priceRangeHandler.bind(this)} minPrice={minPrice} maxPrice={maxPrice} />
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
              <TimeStartDeparture timeStartDepartureHandler={this.timeStartDepartureHandler.bind(this)} startDepartureTime={startDepartureTime} />
            </div>

            <div className="input-range input-range_leave_return">
              <p className="leave-range-title">Время прибытия</p>
              <TimeStartArrival timeStartArrivalHandler={this.timeStartArrivalHandler.bind(this)} startArrivalTime={startArrivalTime} />
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
              <TimeEndDeparture timeEndDepartureHandler={this.timeEndDepartureHandler.bind(this)} endDepartureTime={endDepartureTime} />
            </div>

            <div className="input-range input-range_back_return">
              <p className="back-range-title">Время прибытия</p>
              <TimeEndArrival timeEndArrivalHandler={this.timeEndArrivalHandler.bind(this)} endArrivalTime={endArrivalTime} />
            </div>
          </details>
        </div>
      </React.Fragment>
    );    
  }
  
}
