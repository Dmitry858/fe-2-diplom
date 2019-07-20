import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import Calendar from './Calendar.js';
import LastTickets from './LastTickets.js';
import Pagination from './Pagination.js';
import TrainArrivalInfo from './TrainArrivalInfo.js';
import TrainSeatSnippet from './TrainSeatSnippet.js';
import SidebarFilter from './SidebarFilter.js';
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
      showByNum: 5,
      currentPage: 1,
      sort: 'date',
      preloader: true
    };
  }
  
  componentWillMount() {
    let regExp = /&limit=\d+/,
        regExpNum = /\d+/,
        cityFrom = '',
        cityTo = '',
        dateLeave = '',
        dateBack = '',
        showByNum = 5,
        currentPage = 1,
        filter = {
          have_first_class: false,
          have_second_class: false,
          have_third_class: false,
          have_fourth_class: false,
          have_wifi: false,
          have_express: false
        },
        minPrice = 0,
        maxPrice = 7000,
        startDepartureTime = {
          min: 0,
          max: 24
        },
        startArrivalTime = {
          min: 0,
          max: 24
        },
        endDepartureTime = {
          min: 0,
          max: 24
        },
        endArrivalTime = {
          min: 0,
          max: 24
        }, 
        sort = this.state.sort;

    if (window.location.href.includes('&have_first_class=true')) filter.have_first_class = true;
    if (window.location.href.includes('&have_second_class=true')) filter.have_second_class = true;
    if (window.location.href.includes('&have_third_class=true')) filter.have_third_class = true;
    if (window.location.href.includes('&have_fourth_class=true')) filter.have_fourth_class = true;
    if (window.location.href.includes('&have_wifi=true')) filter.have_wifi = true;
    if (window.location.href.includes('&have_express=true')) filter.have_express = true;
    if (window.location.href.includes('&price_from=')) {
      let minPriceStr = /&price_from=\d+/.exec(window.location.href);
      minPrice = parseInt(minPriceStr[0].substring(12), 10);
    }
    if (window.location.href.includes('&price_to=')) {
      let maxPriceStr = /&price_to=\d+/.exec(window.location.href);
      maxPrice = parseInt(maxPriceStr[0].substring(10), 10);
    }
    if (window.location.href.includes('&start_departure_hour_from=')) {
      let timeFrom = /&start_departure_hour_from=\d+/.exec(window.location.href);
      timeFrom = parseInt(timeFrom[0].substring(27), 10);
      let timeTo = /&start_departure_hour_to=\d+/.exec(window.location.href);
      timeTo = parseInt(timeTo[0].substring(25), 10);
      startDepartureTime = {
        min: parseInt(timeFrom, 10),
        max: parseInt(timeTo, 10)
      };
    }
    if (window.location.href.includes('&start_arrival_hour_from=')) {
      let timeFrom = /&start_arrival_hour_from=\d+/.exec(window.location.href);
      timeFrom = parseInt(timeFrom[0].substring(25), 10);
      let timeTo = /&start_arrival_hour_to=\d+/.exec(window.location.href);
      timeTo = parseInt(timeTo[0].substring(23), 10);
      startArrivalTime = {
        min: parseInt(timeFrom, 10),
        max: parseInt(timeTo, 10)
      };
    }
    
    if (window.location.href.includes('&end_departure_hour_from=')) {
      let timeFrom = /&end_departure_hour_from=\d+/.exec(window.location.href);
      timeFrom = parseInt(timeFrom[0].substring(25), 10);
      let timeTo = /&end_departure_hour_to=\d+/.exec(window.location.href);
      timeTo = parseInt(timeTo[0].substring(23), 10);
      endDepartureTime = {
        min: parseInt(timeFrom, 10),
        max: parseInt(timeTo, 10)
      };
    }
    if (window.location.href.includes('&end_arrival_hour_from=')) {
      let timeFrom = /&end_arrival_hour_from=\d+/.exec(window.location.href);
      timeFrom = parseInt(timeFrom[0].substring(23), 10);
      let timeTo = /&end_arrival_hour_to=\d+/.exec(window.location.href);
      timeTo = parseInt(timeTo[0].substring(21), 10);
      endArrivalTime = {
        min: parseInt(timeFrom, 10),
        max: parseInt(timeTo, 10)
      };
    }

    if (this.props.location.state) {
      sessionStorage.setItem('cityFrom', JSON.stringify(this.props.location.state.cityFrom));
      sessionStorage.setItem('cityTo', JSON.stringify(this.props.location.state.cityTo));
      cityFrom = this.props.location.state.cityFrom;
      cityTo = this.props.location.state.cityTo;
      if (this.props.location.state.dateLeave) {
        sessionStorage.setItem('dateLeave', this.props.location.state.dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}));
        dateLeave = this.props.location.state.dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'});
      }
      if (this.props.location.state.dateBack) {
        sessionStorage.setItem('dateBack', this.props.location.state.dateBack.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}));
        dateBack = this.props.location.state.dateBack.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'});
      }
    } else {
      cityFrom = JSON.parse(sessionStorage.getItem('cityFrom'));
      cityTo = JSON.parse(sessionStorage.getItem('cityTo'));
      dateLeave = sessionStorage.getItem('dateLeave');
      dateBack = sessionStorage.getItem('dateBack');
    }
    
    if (regExp.test(this.props.location.search)) {
      let result = regExp.exec(this.props.location.search);
      showByNum = parseInt(result[0].replace('&limit=', ''), 10);
    };
    
    if (this.props.location.query.offset) {
      let offset = parseInt(this.props.location.query.offset, 10);
      if (offset === 0) {
        currentPage = 1;
      } else {
        currentPage = offset / showByNum + 1;
      };
    }
    
    if (this.props.location.query.sort) sort = this.props.location.query.sort;

    fetch( `https://netology-trainbooking.herokuapp.com/routes${this.props.location.search}` )
      .then( response => response.json())
      .then( data => {
        this.setState({
          data: data,
          cityFrom: cityFrom,
          cityTo: cityTo,
          dateLeave: dateLeave,
          dateBack: dateBack,
          showByNum: showByNum,
          currentPage: currentPage,
          sort: sort,
          filter: filter,
          minPrice: minPrice,
          maxPrice: maxPrice,
          startDepartureTime: startDepartureTime,
          startArrivalTime: startArrivalTime,
          endDepartureTime: endDepartureTime,
          endArrivalTime: endArrivalTime,
          preloader: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.preloader && (prevState.sort !== this.state.sort) && (this.state.sort !== 'price')) {
      let getParams = this.props.location.search.replace(/&sort=[^&]*/, '');
      window.history.pushState(null, '', `${getParams}&sort=${this.state.sort}`);
      fetch( `https://netology-trainbooking.herokuapp.com/routes${getParams}&sort=${this.state.sort}` )
        .then( response => response.json())
        .then( data => {
          this.setState({
            data: data,
            preloader: false
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (this.props.location.state) {
      if ((prevProps.location.state.cityFrom !== this.props.location.state.cityFrom) || (prevProps.location.state.cityTo !== this.props.location.state.cityTo)) {
        const { cityFrom, cityTo, dateLeave, dateBack } = this.props.location.state;
        let formatDateLeave = '',
            formatDateBack = '';
        if (dateLeave && dateBack) {
          formatDateLeave = `${dateLeave.getFullYear()}-${dateLeave.toLocaleString("ru", {month: '2-digit'})}-${dateLeave.toLocaleString("ru", {day: '2-digit'})}`;
          formatDateBack = `${dateBack.getFullYear()}-${dateBack.toLocaleString("ru", {month: '2-digit'})}-${dateBack.toLocaleString("ru", {day: '2-digit'})}`;
        }
        fetch( `https://netology-trainbooking.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_start=${formatDateLeave}&date_end=${formatDateBack}` )
          .then( response => response.json())
          .then( data => {
            this.setState({
              data: data,
              cityFrom: cityFrom,
              cityTo: cityTo,
              preloader: false
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  
  timeFormatConverter(time) {
    if (String(time).length === 1) return `0${time}`;
    return time;
  }
  
  sortHandler(event) {
    if (event.target.value === 'price') return;
    if (event.target.value !== this.state.sort) {
      this.setState({
        sort: event.target.value,
        preloader: true
      });
    }
  }
  
  showByHandler(num, event) {
    if (num === this.state.showByNum) return;
    
    let newGetParams = window.location.search,
        regExp = /&limit=\d+/,
        regExpOffset = /&offset=\d+/;
    
    if (regExpOffset.test(window.location.search)) {
      newGetParams = newGetParams.replace(regExpOffset, '');
    }
    
    if (regExp.test(window.location.search)) {
      newGetParams = newGetParams.replace(regExp, `&limit=${num}`);
    } else {
      newGetParams = newGetParams + `&limit=${num}`;
    }
    
    this.useFetch(num, 'showBy', newGetParams);
  }
  
  trainsListUpdate(pageNum = 1) {
    const { showByNum, currentPage } = this.state;
    if (pageNum === currentPage) return;

    let regExp = /&offset=\d+/,
        newGetParams = window.location.search;
    
    if (regExp.test(window.location.search)) {
      newGetParams = newGetParams.replace(regExp, `&offset=${(pageNum - 1) * showByNum}`);
    } else {
      newGetParams = newGetParams + `&offset=${(pageNum - 1) * showByNum}`;
    }
    this.useFetch(pageNum, 'pagination', newGetParams);
  }
  
  // Новый GET-запрос при изменении параметров фильтра
  useFetch(param, type, newGetParams) {
    setTimeout(() => {
      this.setState({
        preloader: true
      });
      window.history.pushState(null, '', newGetParams);
      fetch( `https://netology-trainbooking.herokuapp.com/routes${newGetParams}` )
        .then( response => response.json())
        .then( data => {
          if (type === 'date_from') {
            this.setState({
              data: data,
              dateLeave: param.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}),
              preloader: false
            });
          } else if (type === 'date_to') {
            this.setState({
              data: data,
              dateBack: param.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}),
              preloader: false
            }); 
          } else if (type === 'checkbox') {
            this.setState({
              data: data,
              filter: param,
              preloader: false
            }); 
          } else if (type === 'pricerange') {
            this.setState({
              data: data,
              minPrice: param.min,
              maxPrice: param.max,
              preloader: false
            });
          } else if (type === 'timestartdeprange') {
            this.setState({
              data: data,
              startDepartureTime: param,
              preloader: false
            });
          } else if (type === 'timestartarrange') {
            this.setState({
              data: data,
              startArrivalTime: param,
              preloader: false
            });
          } else if (type === 'timeenddeprange') {
            this.setState({
              data: data,
              endDepartureTime: param,
              preloader: false
            }); 
          } else if (type === 'timeendarrange') {
            this.setState({
              data: data,
              endArrivalTime: param,
              preloader: false
            });  
          } else if (type === 'showBy') {
            this.setState({
              data: data,
              showByNum: param,
              currentPage: 1,
              preloader: false
            });
          } else if (type === 'pagination') {
            this.setState({
              data: data,
              currentPage: param,
              preloader: false
            });  
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 400);
  }
  
  // Функция, принимающая данные от SidebarFilter
  getSidebarFilterData(param, type) {
    let newGetParams = window.location.search;
    if (type === 'date_from') {
      let formatDateLeave = `${param.getFullYear()}-${param.toLocaleString("ru", {month: '2-digit'})}-${param.toLocaleString("ru", {day: '2-digit'})}`;
      newGetParams = window.location.search.replace(/&date_start=[^&]*/, `&date_start=${formatDateLeave}`);
      this.useFetch(param, type, newGetParams);
    }
    if (type === 'date_to') {
      let formatDateBack = `${param.getFullYear()}-${param.toLocaleString("ru", {month: '2-digit'})}-${param.toLocaleString("ru", {day: '2-digit'})}`;
      newGetParams = window.location.search.replace(/&date_end=[^&]*/, `&date_end=${formatDateBack}`);
      this.useFetch(param, type, newGetParams);
    }
    
    if (type === 'checkbox') {
      const filter = this.state.filter;
      for (let key in filter) {
        if (param === key) {
          if (filter[key]) {
            filter[key] = false;
            newGetParams = window.location.search.replace(`&${param}=true`, '');
          } else {
            filter[key] = true;
            newGetParams = window.location.search + `&${param}=true`;
          }
        }
      }
      this.useFetch(filter, type, newGetParams);
    }
    
    if (type === 'pricerange') {
      if (window.location.search.includes('&price_from=')) {
        newGetParams = newGetParams.replace(/&price_from=\d+/, `&price_from=${param.min}`);
        newGetParams = newGetParams.replace(/&price_to=\d+/, `&price_to=${param.max}`);
      } else {
        newGetParams = newGetParams + `&price_from=${param.min}&price_to=${param.max}`;
      }
      this.useFetch(param, type, newGetParams);
    }

    if (type === 'timestartdeprange') {
      if (window.location.search.includes('&start_departure_hour_from=')) {
        newGetParams = newGetParams.replace(/&start_departure_hour_from=\d+/, `&start_departure_hour_from=${param.min}`);
        newGetParams = newGetParams.replace(/&start_departure_hour_to=\d+/, `&start_departure_hour_to=${param.max}`);
      } else {
        newGetParams = newGetParams + `&start_departure_hour_from=${param.min}&start_departure_hour_to=${param.max}`;
      }
      this.useFetch(param, type, newGetParams);
    }
    
    if (type === 'timestartarrange') {
      if (window.location.href.includes('&start_arrival_hour_from=')) {
        newGetParams = newGetParams.replace(/&start_arrival_hour_from=\d+/, `&start_arrival_hour_from=${param.min}`);
        newGetParams = newGetParams.replace(/&start_arrival_hour_to=\d+/, `&start_arrival_hour_to=${param.max}`);
      } else {
        newGetParams = newGetParams + `&start_arrival_hour_from=${param.min}&start_arrival_hour_to=${param.max}`;
      }
      this.useFetch(param, type, newGetParams);
    }
    
    if (type === 'timeenddeprange') {
      if (window.location.href.includes('&end_departure_hour_from=')) {
        newGetParams = newGetParams.replace(/&end_departure_hour_from=\d+/, `&end_departure_hour_from=${param.min}`);
        newGetParams = newGetParams.replace(/&end_departure_hour_to=\d+/, `&end_departure_hour_to=${param.max}`);
      } else {
        newGetParams = newGetParams + `&end_departure_hour_from=${param.min}&end_departure_hour_to=${param.max}`;
      }
      this.useFetch(param, type, newGetParams);
    }
    
    if (type === 'timeendarrange') {
      if (window.location.href.includes('&end_arrival_hour_from=')) {
        newGetParams = newGetParams.replace(/&end_arrival_hour_from=\d+/, `&end_arrival_hour_from=${param.min}`);
        newGetParams = newGetParams.replace(/&end_arrival_hour_to=\d+/, `&end_arrival_hour_to=${param.max}`);
      } else {
        newGetParams = newGetParams + `&end_arrival_hour_from=${param.min}&end_arrival_hour_to=${param.max}`;
      }
      this.useFetch(param, type, newGetParams);
    }
  }
  
  render() {
    const { data, showByNum, currentPage, cityFrom, cityTo, dateLeave, dateBack, filter, minPrice, maxPrice, startDepartureTime, startArrivalTime, endDepartureTime, endArrivalTime, preloader } = this.state;
    
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
                  filterParams={filter}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  startDepartureTime={startDepartureTime}
                  startArrivalTime={startArrivalTime}
                  endDepartureTime={endDepartureTime}
                  endArrivalTime={endArrivalTime}
                  sendData={this.getSidebarFilterData.bind(this)}
                  step='train-choosing'
                />

                <LastTickets />                
              </section>

              <section className="content">
                <div className="content__header">
                  <p className="train-found">Найдено <span className="train-found__num">{data.total_count}</span></p>
                  <p className="train-sort-label">Сортировать по:
                    <select className="train-sort" value={this.state.sort} onChange={this.sortHandler.bind(this)}>
                      <option className="train-sort__item" value="date">времени</option>
                      <option className="train-sort__item" value="price">стоимости</option>
                      <option className="train-sort__item" value="duration" >длительности</option>
                    </select>
                  </p>
                  <p className="show-by">
                    Показывать по:
                    <span className={(showByNum === 5) ? "show-by__num_active" : "show-by__num"} onClick={this.showByHandler.bind(this, 5)}>5</span> 
                    { (data.total_count > 9) && <span className={(showByNum === 10) ? "show-by__num_active" : "show-by__num"} onClick={this.showByHandler.bind(this, 10)}>10</span> } 
                    { (data.total_count > 19) && <span className={(showByNum === 20) ? "show-by__num_active" : "show-by__num"} onClick={this.showByHandler.bind(this, 20)}>20</span> }        
                  </p>         
                </div>

                {data.items.map((item, i) => {
                  let departureFromTime = new Date(item.departure.from.datetime);
                  let departureToTime = new Date(item.departure.to.datetime);
                  let departureDurationTravel = new Date(item.departure.duration);
                  
                  return (
                    <div className="train" key={i}>
                      <div className="train__name-wrap">
                        <div className="train__icon">
                          <img src={train} alt="" />
                        </div>
                        <div className="train__name">{item.departure.train.name}</div>
                        <div className="train__route">
                          <p className="train__route-point">{item.departure.from.city.name[0].toUpperCase() + item.departure.from.city.name.substring(1)} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                          <p className="train__route-point">{item.departure.to.city.name[0].toUpperCase() + item.departure.to.city.name.substring(1)}</p>
                        </div>
                      </div>
                      <div className="train__info-wrap">
                        <div className="train__info train__info_leave">
                          <div className="train__info_leave_departure">
                            <p className="train__info-time">{ `${this.timeFormatConverter(departureFromTime.getHours())}:${this.timeFormatConverter(departureFromTime.getMinutes())}` }</p>
                            <p className="train__info-city">{item.departure.from.city.name[0].toUpperCase() + item.departure.from.city.name.substring(1)}</p>
                            <p className="train__info-station">{`${item.departure.from.railway_station_name} вокзал`}</p>
                          </div>
                          <div className="train__info_leave_arrow">
                            <p className="train__travel-time">{ `${departureDurationTravel.getHours()} : ${this.timeFormatConverter(departureDurationTravel.getMinutes())}` }</p>
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                          </div>
                          <div className="train__info_leave_arrival">
                            <p className="train__info-time">{ `${this.timeFormatConverter(departureToTime.getHours())}:${this.timeFormatConverter(departureToTime.getMinutes())}` }</p>
                            <p className="train__info-city">{item.departure.to.city.name[0].toUpperCase() + item.departure.to.city.name.substring(1)}</p>
                            <p className="train__info-station">{`${item.departure.to.railway_station_name} вокзал`}</p>
                          </div>
                        </div>

                        <TrainArrivalInfo item={item} />
                      </div>
                      
                      <div className="train__seats-wrap">
                        <TrainSeatSnippet item={item} hasClass={item.departure.have_fourth_class} wagonType={'fourth_class'} />
                       
                        <TrainSeatSnippet item={item} hasClass={item.departure.have_third_class} wagonType={'third_class'} />

                        <TrainSeatSnippet item={item} hasClass={item.departure.have_second_class} wagonType={'second_class'} />
                        
                        <TrainSeatSnippet item={item} hasClass={item.departure.have_first_class} wagonType={'first_class'} />

                        <div className="train__seat-filters">
                          { item.departure.have_wifi && <img className="last-tickets__item-filter-icon" src={wifi} alt="Wi-Fi" /> }
                          { item.departure.is_express && <img className="last-tickets__item-filter-icon" src={express} alt="Экспресс" /> }
                          { item.departure.have_first_class && <img className="last-tickets__item-filter-icon" src={lux} alt="Люкс" /> }
                          { item.departure.have_second_class && <img className="last-tickets__item-filter-icon" src={coupe} alt="Купе" /> }
                          { item.departure.have_third_class && <img className="last-tickets__item-filter-icon" src={reservedSeat} alt="Плацкарт" /> }
                          { item.departure.have_fourth_class && <img className="last-tickets__item-filter-icon" src={seatPlace} alt="Сидячий" /> }
                        </div>
                        <NavLink to={{ 
                          pathname: '/seats-choosing/',
                          state: {
                            cityFrom: cityFrom,
                            cityTo: cityTo,
                            direction: item,
                            getParams: this.props.location.search,
                            dateLeave: dateLeave,
                            dateBack: dateBack,
                            filterParams: filter,
                            minPrice: minPrice,
                            maxPrice: maxPrice,
                            startDepartureTime: startDepartureTime,
                            startArrivalTime: startArrivalTime,
                            endDepartureTime: endDepartureTime,
                            endArrivalTime: endArrivalTime,
                          }
                        }} className="train__seats-choice">Выбрать места
                        </NavLink>
                      </div>
                    </div>
                  );

                  }
                )}

                <Pagination total={data.total_count} showByNum={showByNum} currentPage={currentPage} trainsListUpdate={this.trainsListUpdate.bind(this)} />
              </section>

            </div>
          </div>
          
        </React.Fragment>
      );
    }
  }
  
}