import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import Calendar from './Calendar.js';
import SidebarFilter from './SidebarFilter.js';
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
import WagonScheme from './WagonScheme.js';
import Modal from './Modal.js';

import {
  NavLink
} from 'react-router-dom';

export default class SeatsChoosing extends Component {
  constructor (props) {
    super(props);
//    this.getResponseFromModal = this.getResponseFromModal.bind(this); 
    this.state = {
      chosenSeats: [],
      cost: 0,
      preloader: true,
      ticketsNumLeave: {
        adult: 0,
        child: 0,
        baby: 0
      },
      wagonTypeLeave: '',
      currentWagon: '',
      modal: {
        hidden: true,
        message: ''
      }
    };
  }
  
  componentWillMount() {
    const { direction } = this.props.location.state;
    fetch( `https://netology-trainbooking.herokuapp.com/routes/${direction.departure._id}/seats` )
      .then( response => response.json())
      .then( data => {
        this.setState({
          seats: data,
          wagonTypeLeave: data[0].coach.class_type,
          currentWagon: data[0],
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
  
  ticketsNumHandler(param, event) {
    let value = event.target.value;
    value = value.replace(/\D+/, '');
    if (/0\d/.test(value)) value = value.replace(/^0/, '');
    if (event.target.value === '') value = 0;
    if (param === 'adult') {
      this.setState({
        ticketsNumLeave: {
          adult: parseInt(value, 10),
          child: this.state.ticketsNumLeave.child,
          baby: this.state.ticketsNumLeave.baby
        }
      });
    }
    if (param === 'child') {
      this.setState({
        ticketsNumLeave: {
          adult: this.state.ticketsNumLeave.adult,
          child: parseInt(value, 10),
          baby: this.state.ticketsNumLeave.baby
        }
      });
    }
    if (param === 'baby') {
      this.setState({
        ticketsNumLeave: {
          adult: this.state.ticketsNumLeave.adult,
          child: this.state.ticketsNumLeave.child,
          baby: parseInt(value, 10)
        }
      });
    }
  }
  
  changeParentAndSiblingClass(event) {
    if (event.type === 'focus') {
      event.currentTarget.parentElement.classList.add('tickets-num__type_active');
      event.currentTarget.nextElementSibling.classList.add('tickets-num__comment_active');
    }
    if (event.type === 'blur') {
      event.currentTarget.parentElement.classList.remove('tickets-num__type_active');
      event.currentTarget.nextElementSibling.classList.remove('tickets-num__comment_active');
    }
  }
  
  changeWagonTypeLeave(param) {
    let foundEl = this.state.seats.find(function(el) {
      return el.coach.class_type === param;
    });
    if (foundEl) {
      this.setState({
        wagonTypeLeave: param,
        currentWagon: foundEl
      });
    }
  }

  changeWagonLeave(item, type) {
    this.setState({
      wagonTypeLeave: type,
      currentWagon: item
    });
  }
  
  // Обработчик данных, полученных от компонента WagonScheme
  wagonSchemeDataHandler(seat, action) {
    const { cost, wagonTypeLeave, currentWagon } = this.state;
    let chosenSeats = this.state.chosenSeats;
    let totalCost = cost;
    if (action === 'add') {
      chosenSeats.push(seat);
      if (wagonTypeLeave === 'first') {
        totalCost = totalCost + currentWagon.coach.price;
      } else {
        totalCost = totalCost + currentWagon.coach.bottom_price;
      }
    }
    if (action === 'remove') {
      let foundEl = chosenSeats.find((item, i, arr) => {
        if (item.seatNum === seat.seatNum && item.wagonNum === seat.wagonNum) return item;
      });
      let i = chosenSeats.indexOf(foundEl);
      chosenSeats.splice(i, 1);
    }
    this.setState({
      chosenSeats: chosenSeats,
      cost: totalCost
    });
  }
  
  // Обработчик данных, полученных от компонента Modal
  getResponseFromModal() {
    this.setState({
      modal: {
        hidden: true,
        message: ''
      }
    });
  }
  
  // Функция, принимающая ответ от SidebarFilter
  getSidebarFilterResponse() {
    this.setState({      
      modal: {
        hidden: false,
        message: 'На данном этапе изменять параметры фильтра нельзя. Вы можете воспользоваться кнопкой "Выбрать другой поезд", чтобы вернуться на предыдущий этап.'
      }
    })
  }
  
  render() {
    const { preloader, ticketsNumLeave, seats, wagonTypeLeave, currentWagon, chosenSeats, cost, modal } = this.state;
    const { cityFrom, cityTo, direction, getParams, dateLeave, dateBack, filterParams, minPrice, maxPrice, startDepartureTime, startArrivalTime, endDepartureTime, endArrivalTime } = this.props.location.state;
    
    if (preloader) {
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
      let departureFromTime = new Date(direction.departure.from.datetime);
      let departureToTime = new Date(direction.departure.to.datetime);
      let departureDurationTravel = new Date(direction.departure.duration);
      
      return (
        <React.Fragment>
          <Header currentPage={'inner'} cityFrom={cityFrom} cityTo={cityTo} dateLeave={dateLeave} dateBack={dateBack} />
          
          <Steps currentStep={1} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">
                <SidebarFilter
                  dateLeave={dateLeave}
                  dateBack={dateBack}
                  filterParams={filterParams}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  startDepartureTime={startDepartureTime}
                  startArrivalTime={startArrivalTime}
                  endDepartureTime={endDepartureTime}
                  endArrivalTime={endArrivalTime}
                  sendData={this.getSidebarFilterResponse.bind(this)}
                  step='seats-choosing'
                />

                <LastTickets />
              </section>

              <section className="content">
                <h2 className="content__title">Выбор мест</h2>

                <div className="seat-choosing-wrap">
                  <div className="seat-choosing-row seat-choosing-row_padding">
                    <div className="leave__arrow leave__arrow_content">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                    <NavLink to={{
                      pathname: '/train-choosing/',
                      search: getParams
                    }} 
                    className="seat-choosing__other">Выбрать другой поезд</NavLink>
                  </div>

                  <div className="seat-choosing-row seat-choosing-row_space-between">
                    <div className="train-data">
                      <div className="train__icon train__icon_content">
                        <img src={trainYellow} alt="" />
                      </div>
                      <div className="train__route">
                        <div className="train__name train__name_content">{direction.departure.train.name}</div>
                        <p className="train__route-point">{direction.departure.from.city.name[0].toUpperCase() + direction.departure.from.city.name.substring(1)} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                        <p className="train__route-point">{direction.departure.to.city.name[0].toUpperCase() + direction.departure.to.city.name.substring(1)}</p>
                      </div>
                    </div>

                    <div className="train__info train__info_leave train__info_content">
                      <div className="train__info_leave_departure">
                        <p className="train__info-time">{ `${this.timeFormatConverter(departureFromTime.getHours())}:${this.timeFormatConverter(departureFromTime.getMinutes())}` }</p>
                        <p className="train__info-city">{direction.departure.from.city.name[0].toUpperCase() + direction.departure.from.city.name.substring(1)}</p>
                        <p className="train__info-station">{`${direction.departure.from.railway_station_name} вокзал`}</p>
                      </div>
                      <div className="train__info_leave_arrow">
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </div>
                      <div className="train__info_leave_arrival">
                        <p className="train__info-time">{ `${this.timeFormatConverter(departureToTime.getHours())}:${this.timeFormatConverter(departureToTime.getMinutes())}` }</p>
                        <p className="train__info-city">{direction.departure.to.city.name[0].toUpperCase() + direction.departure.to.city.name.substring(1)}</p>
                        <p className="train__info-station">{`${direction.departure.to.railway_station_name} вокзал`}</p>
                      </div>
                    </div>

                    <div className="travel-time">
                      <img className="travel-time__icon" src={clock} alt="Clock" />
                      <p className="travel-time__text">{`${departureDurationTravel.getHours()} часов`}<br/>{`${this.timeFormatConverter(departureDurationTravel.getMinutes())} минут`}</p>
                    </div>
                  </div>

                  <div className="seat-choosing-row">
                    <h3 className="tickets-num-title">Количество билетов</h3>
                  </div>

                  <div className="seat-choosing-row tickets-num">
                    <div className="tickets-num__type tickets-num__type_adult">
                      <input 
                        className="tickets-num__input tickets-num__input_adult"
                        type="text"
                        maxLength="2"
                        value={ticketsNumLeave.adult}
                        onChange={this.ticketsNumHandler.bind(this, 'adult')}
                        onFocus={this.changeParentAndSiblingClass.bind(this)}
                        onBlur={this.changeParentAndSiblingClass.bind(this)}
                      />
                      <p className="tickets-num__comment">Можно добавить еще 3 пассажиров</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_child">
                      <input
                        className="tickets-num__input tickets-num__input_child"
                        type="text"
                        maxLength="2"
                        value={ticketsNumLeave.child}
                        onChange={this.ticketsNumHandler.bind(this, 'child')}
                        onFocus={this.changeParentAndSiblingClass.bind(this)}
                        onBlur={this.changeParentAndSiblingClass.bind(this)}
                      />
                      <p className="tickets-num__comment">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_baby">
                      <input
                        className="tickets-num__input tickets-num__input_baby"
                        type="text"
                        maxLength="2"
                        value={ticketsNumLeave.baby}
                        onChange={this.ticketsNumHandler.bind(this, 'baby')}
                        onFocus={this.changeParentAndSiblingClass.bind(this)}
                        onBlur={this.changeParentAndSiblingClass.bind(this)}
                      />
                      <p className="tickets-num__comment"></p>
                    </div>
                  </div>

                  <div className="seat-choosing-row">
                    <h3 className="wagon-title">Тип вагона</h3>
                  </div>

                  <div className="seat-choosing-row">
                    <div className="wagon-type" onClick={this.changeWagonTypeLeave.bind(this, 'fourth')}>
                      <div className={
                        (wagonTypeLeave === 'fourth') ?
                        "wagon-type__icon wagon-type__icon_seat_active" :
                        "wagon-type__icon wagon-type__icon_seat"
                      }></div>
                      <div className={
                        (wagonTypeLeave === 'fourth') ?
                        "wagon-type__name wagon-type__name_active" :
                        "wagon-type__name"
                      }>Сидячий</div>
                    </div>
                    <div className="wagon-type" onClick={this.changeWagonTypeLeave.bind(this, 'third')}>
                      <div className={
                        (wagonTypeLeave === 'third') ?
                        "wagon-type__icon wagon-type__icon_reserved_active" :
                        "wagon-type__icon wagon-type__icon_reserved"
                      }></div>
                      <div className={
                        (wagonTypeLeave === 'third') ?
                        "wagon-type__name wagon-type__name_active" :
                        "wagon-type__name"
                      }>Плацкарт</div>
                    </div>
                    <div className="wagon-type" onClick={this.changeWagonTypeLeave.bind(this, 'second')}>
                      <div className={
                        (wagonTypeLeave === 'second') ?
                        "wagon-type__icon wagon-type__icon_coupe_active" :
                        "wagon-type__icon wagon-type__icon_coupe"
                      }></div>
                      <div className={
                        (wagonTypeLeave === 'second') ?
                        "wagon-type__name wagon-type__name_active" :
                        "wagon-type__name"
                      }>Купе</div>
                    </div>
                    <div className="wagon-type" onClick={this.changeWagonTypeLeave.bind(this, 'first')}>
                      <div className={
                        (wagonTypeLeave === 'first') ?
                        "wagon-type__icon wagon-type__icon_lux_active" :
                        "wagon-type__icon wagon-type__icon_lux"
                      }></div>
                      <div className={
                        (wagonTypeLeave === 'first') ?
                        "wagon-type__name wagon-type__name_active" :
                        "wagon-type__name"
                      }>Люкс</div>
                    </div>
                  </div>

                  <div className="seat-choosing-row wagon">
                      <p className="wagon__available">
                        Вагоны 
                        {seats.map((item) => 
                          <span 
                            key={item.coach._id} 
                            className={
                            (item.coach.class_type === wagonTypeLeave) ?
                            "wagon__available_num wagon__available_num_active" :
                            "wagon__available_num"
                            }
                            onClick={this.changeWagonLeave.bind(this, item, item.coach.class_type)}
                          > {item.coach.name}</span>
                        )}
                      </p>
                      <p className="wagon__note">Нумерация вагонов начинается с головы поезда</p>
                      <div className="wagon__number">
                        {parseInt(currentWagon.coach.name.replace(/\D+/g,''), 10)}
                        <span className="wagon__number_caption">вагон</span>
                      </div>
                      <div className="wagon__seats">
                        <p className="wagon__seats_general">
                          Места 
                          <span className="wagon__seats_general_num"> {currentWagon.coach.available_seats}</span>
                        </p>
                        { (wagonTypeLeave === 'second' || wagonTypeLeave === 'third') &&
                        <React.Fragment>
                        <p className="wagon__seats_upper">Верхние <span className="wagon__seats_upper_num">-</span></p>
                        <p className="wagon__seats_lower">Нижние <span className="wagon__seats_lower_num">-</span></p>
                        </React.Fragment>
                        }
                      </div>
                      <div className="wagon__price">
                        <p className="wagon__price_subtitle">Стоимость</p>
                        <p className="wagon__price_upper">{(wagonTypeLeave === 'first') ? currentWagon.coach.price : currentWagon.coach.top_price} <i className="fa fa-rub" aria-hidden="true"></i></p>
                        { (wagonTypeLeave === 'second' || wagonTypeLeave === 'third') && 
                        <p className="wagon__price_lower">{currentWagon.coach.bottom_price} <i className="fa fa-rub" aria-hidden="true"></i></p>
                        }
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
                      <WagonScheme currentWagon={currentWagon} chosenSeats={chosenSeats} sendData={this.wagonSchemeDataHandler.bind(this)} />
                  </div>

                </div>

                { direction.arrival &&
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
                      <input className="tickets-num__input tickets-num__input_adult" type="text" defaultValue="0" />
                      <p className="tickets-num__comment tickets-num__comment_active">Можно добавить еще 3 пассажиров</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_child">
                      <input className="tickets-num__input tickets-num__input_child" type="text" defaultValue="0" />
                      <p className="tickets-num__comment">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                    </div>
                    <div className="tickets-num__type tickets-num__type_baby">
                      <input className="tickets-num__input tickets-num__input_baby" type="text" defaultValue="0" />
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
                        <span className="wagon__available_num wagon__available_num_active"> 07</span>
                        <span className="wagon__available_num"> 09</span>
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
                      <WagonScheme />
                  </div>

                </div>
                }

                { (chosenSeats.length > 0) ?
                  <NavLink to={{ 
                    pathname: '/passengers/',
                    state: {
                      cityFrom: cityFrom,
                      cityTo: cityTo,
                      direction: direction,
                      dateLeave: dateLeave,
                      dateBack: dateBack,
                      getParams: getParams,
                      filterParams: filterParams,
                      minPrice: minPrice,
                      maxPrice: maxPrice,
                      startDepartureTime: startDepartureTime,
                      startArrivalTime: startArrivalTime,
                      endDepartureTime: endDepartureTime,
                      endArrivalTime: endArrivalTime,
                      ticketsNumLeave: ticketsNumLeave,
                      chosenSeats: chosenSeats,
                      cost: cost
                    }
                  }} className="next-button">Далее</NavLink> :
                  <a className="next-button next-button_inactive" href="">Далее</a>
                }

              </section>

            </div>
          </div>
          
          <Modal hidden={modal.hidden} message={modal.message} sendResponse={this.getResponseFromModal.bind(this)} />
        </React.Fragment>
      );
    }
  }
  
}