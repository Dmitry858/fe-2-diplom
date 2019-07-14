import React, { Component } from 'react';
import logo from './img/logo.png';
import roundArrows from './img/round_arrows.png';
import './css/style-header.css';
import Calendar from './Calendar.js';

import {
  Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      citiesFrom: [],
      citiesTo: [],
      cityFrom: '',
      cityTo: '',
      calendarFrom: false,
      calendarTo: false,
      trainChoosingAllow: false
    };
  }
  
  handleButton(event) {
    event.preventDefault();
  }
  
  handleChangeFrom(event) {
    fetch( `https://netology-trainbooking.herokuapp.com/routes/cities?name=${event.target.value}` )
      .then( response => response.json())
      .then( data => {
              if (Array.isArray(data) && data.length > 0) {
                this.setState({
                  citiesFrom: data,
                  cityFrom: ''
                });
              } else {
                this.setState({
                  citiesFrom: []
                });
              };
            }
           );
  }
  
  handleChangeTo(event) {
    fetch( `https://netology-trainbooking.herokuapp.com/routes/cities?name=${event.target.value}` )
      .then( response => response.json())
      .then( data => {
              if (Array.isArray(data) && data.length > 0) {
                this.setState({
                  citiesTo: data,
                  cityTo: ''
                });
              } else {
                this.setState({
                  citiesTo: []
                });
              };
            }
           );
  }
  
  selectCity(item, direction, event) {
    let city = item.name[0].toUpperCase() + item.name.substring(1);
    event.target.parentElement.parentElement.firstChild.value = city;
    
    if (direction === 'from' && this.state.cityTo === '') {
      this.setState({
        cityFrom: item,
        citiesFrom: []
      });
    } else if (direction === 'from' && typeof this.state.cityTo !== 'string') {
      this.setState({
        cityFrom: item,
        citiesFrom: [],
        trainChoosingAllow: true
      });
    } else if (direction === 'to' && this.state.cityFrom === '') {
      this.setState({
        cityTo: item,
        citiesTo: []
      });
    } else if (direction === 'to' && typeof this.state.cityFrom !== 'string') {
      this.setState({
        cityTo: item,
        citiesTo: [],
        trainChoosingAllow: true
      });
    }
  }
  
  // Получение классов элементов хедера в зависимости от текущей страницы
  getHeaderClasses(el) {
    const { currentPage } = this.props;
    
    if (el === 'header' && currentPage === 'home') return "header";
    if (el === 'header' && currentPage === 'inner') return "header_inner";
    if (el === 'header' && currentPage === 'end') return "header header_end";
    
    if (el === 'row' && currentPage === 'home') return "header__row container";
    if (el === 'row' && currentPage === 'inner') return "header__row header__row_inner container";
    if (el === 'row' && currentPage === 'end') return "header__row header__row_end container";
    
    if (el === 'header-title' && currentPage === 'home') return "header__title";
    if (el === 'header-title' && currentPage === 'inner') return "header__title hidden";
    if (el === 'header-title' && currentPage === 'end') return "header__title header__title_end";

    if (el === 'form-wrap' && currentPage === 'home') return "header__form-wrap";
    if (el === 'form-wrap' && currentPage === 'inner') return "header__form-wrap header__form-wrap_inner";
    if (el === 'form-wrap' && currentPage === 'end') return "hidden";
    
    if (el === 'field-title' && currentPage === 'home') return "header__form-field-title";
    if (el === 'field-title' && currentPage === 'inner') return "header__form-field-title header__form-field-title_inner";
    
    if (el === 'field-wrap' && currentPage === 'home') return "header__form-field-wrap";
    if (el === 'field-wrap' && currentPage === 'inner') return "header__form-field-wrap header__form-field-wrap_inner";
    
    if (el === 'arrows' && currentPage === 'home') return "form-round-arrows";
    if (el === 'arrows' && currentPage === 'inner') return "form-round-arrows form-round-arrows_inner";  
  }
  
  handleCalendar(point, event) {
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
  
  handleCalendarResponse(response, direction) {
    if (direction === 'from') {
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
    const { trainChoosingAllow, citiesFrom, cityFrom, citiesTo, cityTo, dateLeave, dateBack } = this.state;
    const { currentPage } = this.props;
    const currentDate = new Date();
    let formatDateLeave = '',
        formatDateBack = '';
    
    if (dateLeave && dateBack) {
      formatDateLeave = `${dateLeave.getFullYear()}-${dateLeave.toLocaleString("ru", {month: '2-digit'})}-${dateLeave.toLocaleString("ru", {day: '2-digit'})}`;
      formatDateBack = `${dateBack.getFullYear()}-${dateBack.toLocaleString("ru", {month: '2-digit'})}-${dateBack.toLocaleString("ru", {day: '2-digit'})}`;
    }
    
    return (
      <React.Fragment>
        <header id="top" className={this.getHeaderClasses('header')}>
          <div className="header__logo-wrap">
            <div className="container">
              <NavLink to={{ pathname: '/' }}><img className="header__logo" src={logo} alt="Лого" /></NavLink>
            </div>
          </div>

          <div className="header__nav-wrap">
            <input type="checkbox" id="menu-checkbox" />
            <nav className="container">
              <NavLink to={{ pathname: '/' }}><img className="header__logo_mobile" src={logo} alt="Лого" /></NavLink>
              <label htmlFor="menu-checkbox" className="toggle-button" data-open="Menu" data-close="Close" onclick></label>
              <ul className="header__nav">
                <li className="header__nav-item"><NavLink to={{ pathname: '/', hash: '#about-us' }}>О нас</NavLink></li>
                <li className="header__nav-item"><NavLink to={{ pathname: '/', hash: '#how-it-works' }}>Как это работает</NavLink></li>
                <li className="header__nav-item"><NavLink to={{ pathname: '/', hash: '#reviews-block' }}>Отзывы</NavLink></li>
                <li className="header__nav-item"><NavLink to={{ pathname: '/', hash: '#contacts' }}>Контакты</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className={this.getHeaderClasses('row')}>
            <div className={this.getHeaderClasses('header-title')}>
              <h1 className={(currentPage === 'home') ? "" : "hidden"}><span className="thin-text">Вся жизнь -</span> <br/>путешествие!</h1>
              <h1 className={(currentPage === 'end') ? "" : "hidden"}>Благодарим Вас за заказ!</h1>
            </div>
            
            <div className={this.getHeaderClasses('form-wrap')}>
              <form className="header__form" action="">
                <p className={this.getHeaderClasses('field-title')}>Направление</p>
                <p className={(currentPage === 'home') ? "hidden" : "header__form-field-title header__form-field-title_inner"}>Дата</p>
                <div className={this.getHeaderClasses('field-wrap')}>
                  <input className="header__form-field" type="text" placeholder="Откуда" onChange={this.handleChangeFrom.bind(this)} defaultValue={this.props.cityFrom ? (this.props.cityFrom[0].toUpperCase() + this.props.cityFrom.substring(1)) : ''} />
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <ul className={(citiesFrom.length === 0) ? "header__form-field_hint hidden" : "header__form-field_hint"}>
                    {citiesFrom.map((item, i) => <li key={i} onClick={this.selectCity.bind(this, item, 'from')}>{item.name}</li>)}
                  </ul>
                </div>
                <img className={this.getHeaderClasses('arrows')} src={roundArrows} alt="" />
                <div className={this.getHeaderClasses('field-wrap')}>
                  <input className="header__form-field" type="text" placeholder="Куда" onChange={this.handleChangeTo.bind(this)} defaultValue={this.props.cityTo ? (this.props.cityTo[0].toUpperCase() + this.props.cityTo.substring(1)) : ''} />
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <ul className={(citiesTo.length === 0) ? "header__form-field_hint hidden" : "header__form-field_hint"}>
                    {citiesTo.map((item, i) => <li key={i} onClick={this.selectCity.bind(this, item, 'to')}>{item.name}</li>)}
                  </ul>
                </div>
                <p className={(currentPage === 'home') ? "header__form-field-title" : "hidden"}>Дата</p>
                <div className={this.getHeaderClasses('field-wrap')}>
                  {
                    this.props.dateLeave ?
                    <input className="header__form-field" type="text" placeholder="ДД.ММ.ГГГГ" onFocus={this.handleCalendar.bind(this, 'from')} onBlur={this.handleCalendar.bind(this, 'from')} defaultValue={this.props.dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'})} /> :
                    <input className="header__form-field" type="text" placeholder="ДД.ММ.ГГГГ" onFocus={this.handleCalendar.bind(this, 'from')} onBlur={this.handleCalendar.bind(this, 'from')} defaultValue={(dateLeave) ? dateLeave.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) : ''} />
                  }
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  { this.state.calendarFrom && <Calendar currentDate={currentDate} direction={'from'} responseHandler={this.handleCalendarResponse.bind(this)} /> }
                </div>

                <div className={this.getHeaderClasses('field-wrap')}>
                  {
                    this.props.dateBack ?
                    <input className="header__form-field" type="text" placeholder="ДД.ММ.ГГГГ" onFocus={this.handleCalendar.bind(this, 'to')} onBlur={this.handleCalendar.bind(this, 'to')} defaultValue={this.props.dateBack.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'})} /> :
                    <input className="header__form-field" type="text" placeholder="ДД.ММ.ГГГГ" onFocus={this.handleCalendar.bind(this, 'to')} onBlur={this.handleCalendar.bind(this, 'to')} defaultValue={(dateBack) ? dateBack.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'}) : ''} />
                  }
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  { this.state.calendarTo && <Calendar currentDate={currentDate} direction={'to'} responseHandler={this.handleCalendarResponse.bind(this)} /> }
                </div>
                
                { (trainChoosingAllow) ? 
                <NavLink 
                  to={{ 
                    pathname: '/train-choosing/',
                    search: `?from_city_id=${this.state.cityFrom._id}&to_city_id=${this.state.cityTo._id}&date_start=${formatDateLeave}&date_end=${formatDateBack}`,
                    state: {
                      cityFrom: cityFrom.name, 
                      cityTo: cityTo.name,
                      dateLeave: dateLeave,
                      dateBack: dateBack,
                    }
                  }}
                  className={(currentPage === 'home') ? "header__form-button" : "header__form-button header__form-button_inner"}>
                  Найти билеты
                </NavLink> :
                <button className={(currentPage === 'home') ? "header__form-button" : "header__form-button header__form-button_inner"} type="submit" onClick={this.handleButton.bind(this)}>Найти билеты</button> }
              
              </form>
            </div>
          </div>
        </header>
      </React.Fragment>
    );    
  }
  
}