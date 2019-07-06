import React, { Component } from 'react';
import passenger from './img/passenger.svg';

export default class SidebarDetails extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    const { ticketsNumLeave, cost } = this.props;
    let totalTickets = ticketsNumLeave.adult + ticketsNumLeave.child + ticketsNumLeave.baby;
    this.setState({
      costPerPerson: Math.ceil(cost / totalTickets)
    });
  }
  
  timeFormatConverter(time) {
    if (String(time).length === 1) return `0${time}`;
    return time;
  }
  
  render() {
    const { direction, dateLeave, dateBack, ticketsNumLeave, cost } = this.props;
    const { costPerPerson } = this.state;
    let departureFromTime = new Date(direction.departure.from.datetime),
        departureToTime = new Date(direction.departure.to.datetime),
        departureDurationTravel = new Date(direction.departure.duration);
    
    return (
      <React.Fragment>
        <div className="details">
          <h3 className="details__title">Детали поездки</h3>
          <hr/>

          <details className="leave-wrap" open>
            <summary className="leave">
              <div className="leave__arrow">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
              <p className="leave__title">Туда</p>
              <p className="leave__date">{dateLeave}</p>
              <div className="leave__button">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <i className="fa fa-minus" aria-hidden="true"></i>
              </div>
            </summary>

            <div className="details__row details__row_center">
              <p className="train-num__caption">№ Поезда</p>
              <p className="train-num__value train-num__value_leave">
                {parseInt(direction.departure.train.name.replace(/\D+/g,''), 10)}
              </p>
            </div>
            <div className="details__row">
              <p className="train-name__caption">Название</p>
              <p className="train-name__value train-name__value_leave">{direction.departure.train.name.replace(/[\s*-\s*\d+]/g,'')}</p>
            </div>

            <div className="details__row">
              <div className="details__info_leave_departure">
                <p className="details__info-time">
                { `${this.timeFormatConverter(departureFromTime.getHours())}:${this.timeFormatConverter(departureFromTime.getMinutes())}` }
                </p>
                <p className="details__info-date">{dateLeave}</p>
                <p className="details__info-city">{direction.departure.from.city.name[0].toUpperCase() + direction.departure.from.city.name.substring(1)}</p>
                <p className="details__info-station">{`${direction.departure.from.railway_station_name} вокзал`}</p>
              </div>
              <div className="details__info_leave_arrow">
                <p className="details__travel-time">
                  { `${departureDurationTravel.getHours()}:${this.timeFormatConverter(departureDurationTravel.getMinutes())}` }
                </p>
                <i className="fa fa-long-arrow-right details__arrow" aria-hidden="true"></i>
              </div>
              <div className="details__info_leave_arrival">
                <p className="details__info-time">
                { `${this.timeFormatConverter(departureToTime.getHours())}:${this.timeFormatConverter(departureToTime.getMinutes())}` }</p>
                <p className="details__info-date">{dateLeave}</p>
                <p className="details__info-city">{direction.departure.to.city.name[0].toUpperCase() + direction.departure.to.city.name.substring(1)}</p>
                <p className="details__info-station">{`${direction.departure.to.railway_station_name} вокзал`}</p>
              </div>
            </div>

          </details>
          <hr/>

          { direction.arrival &&
          <React.Fragment>
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
          </React.Fragment>
          }

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
                <p className="passengers-info__item">{`${ticketsNumLeave.adult} Взрослых`}</p>
                <div className="passengers-info__price">{ticketsNumLeave.adult * costPerPerson} <i className="fa fa-rub" aria-hidden="true"></i></div>
              </div>
              { (ticketsNumLeave.child > 0 || ticketsNumLeave.baby > 0) && 
              <div className="passengers-info__row">
                <p className="passengers-info__item">{`${ticketsNumLeave.child + ticketsNumLeave.baby} Ребенок`}</p>
                <div className="passengers-info__price">{ticketsNumLeave.child * costPerPerson} <i className="fa fa-rub" aria-hidden="true"></i></div>
              </div>
              }
            </div>

          </details>
          <hr/>

          <div className="details__total">
            <h3 className="details__total_subtitle">Итог</h3>
            <p className="details__total_price">{cost} <i className="fa fa-rub" aria-hidden="true"></i></p>
          </div>

        </div>
      </React.Fragment>
    );    
  }
  
}
