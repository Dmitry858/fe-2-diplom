import React, { Component } from 'react';
import logo from './img/logo.png';
import roundArrows from './img/round_arrows.png';
import './css/style-header.css';

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <header id="top" className="header">
          <div className="header__logo-wrap">
            <div className="container">
              <a href="/"><img className="header__logo" src={logo} alt="Лого" /></a>
            </div>
          </div>

          <div className="header__nav-wrap">
            <input type="checkbox" id="menu-checkbox" />
            <nav className="container">
              <a href="/"><img className="header__logo_mobile" src={logo} alt="Лого" /></a>
              <label htmlFor="menu-checkbox" className="toggle-button" data-open="Menu" data-close="Close" onclick></label>
              <ul className="header__nav">
                <li className="header__nav-item"><a href="#about-us">О нас</a></li>
                <li className="header__nav-item"><a href="#how-it-works">Как это работает</a></li>
                <li className="header__nav-item"><a href="#reviews-block">Отзывы</a></li>
                <li className="header__nav-item"><a href="#contacts">Контакты</a></li>
              </ul>
            </nav>
          </div>

          <div className="header__row container">
            <div className="header__title">
              <h1><span className="thin-text">Вся жизнь -</span> <br/>путешествие!</h1>
            </div>
            <div className="header__form-wrap">
              <form className="header__form" action="">
                <p className="header__form-field-title">Направление</p>
                <div className="header__form-field-wrap">
                  <input className="header__form-field" type="text" placeholder="Откуда" />
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <img className="form-round-arrows" src={roundArrows} alt="" />
                <div className="header__form-field-wrap">
                  <input className="header__form-field" type="text" placeholder="Куда" />
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <p className="header__form-field-title">Дата</p>
                <div className="header__form-field-wrap">
                  <input className="header__form-field" type="text" placeholder="ДД/ММ/ГГ" />
                  <i className="fa fa-calendar" aria-hidden="true"></i>

                  <div className="calendar">
                    <div className="calendar__header">
                      <i className="fa fa-caret-left" aria-hidden="true"></i>
                      <p className="calendar__header-month">Август</p>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </div>
                    <div className="calendar__days-wrap">
                      <ul className="calendar__days-row">
                        <li className="calendar__day calendar__day_inactive">30</li>
                        <li className="calendar__day calendar__day_inactive">31</li>
                        <li className="calendar__day">1</li>
                        <li className="calendar__day">2</li>
                        <li className="calendar__day">3</li>
                        <li className="calendar__day">4</li>
                        <li className="calendar__day">5</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">6</li>
                        <li className="calendar__day">7</li>
                        <li className="calendar__day">8</li>
                        <li className="calendar__day">9</li>
                        <li className="calendar__day">10</li>
                        <li className="calendar__day">11</li>
                        <li className="calendar__day">12</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">13</li>
                        <li className="calendar__day">14</li>
                        <li className="calendar__day">15</li>
                        <li className="calendar__day">16</li>
                        <li className="calendar__day">17</li>
                        <li className="calendar__day">18</li>
                        <li className="calendar__day">19</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">20</li>
                        <li className="calendar__day">21</li>
                        <li className="calendar__day">22</li>
                        <li className="calendar__day">23</li>
                        <li className="calendar__day">24</li>
                        <li className="calendar__day">25</li>
                        <li className="calendar__day">26</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">27</li>
                        <li className="calendar__day">28</li>
                        <li className="calendar__day">29</li>
                        <li className="calendar__day">30</li>
                        <li className="calendar__day">31</li>
                        <li className="calendar__day calendar__day_inactive">1</li>
                        <li className="calendar__day calendar__day_inactive">2</li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="header__form-field-wrap">
                  <input className="header__form-field" type="text" placeholder="ДД/ММ/ГГ" />
                  <i className="fa fa-calendar" aria-hidden="true"></i>

                  <div className="calendar">
                    <div className="calendar__header">
                      <i className="fa fa-caret-left" aria-hidden="true"></i>
                      <p className="calendar__header-month">Август</p>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </div>
                    <div className="calendar__days-wrap">
                      <ul className="calendar__days-row">
                        <li className="calendar__day calendar__day_inactive">30</li>
                        <li className="calendar__day calendar__day_inactive">31</li>
                        <li className="calendar__day">1</li>
                        <li className="calendar__day">2</li>
                        <li className="calendar__day">3</li>
                        <li className="calendar__day">4</li>
                        <li className="calendar__day">5</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">6</li>
                        <li className="calendar__day">7</li>
                        <li className="calendar__day">8</li>
                        <li className="calendar__day">9</li>
                        <li className="calendar__day">10</li>
                        <li className="calendar__day">11</li>
                        <li className="calendar__day">12</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">13</li>
                        <li className="calendar__day">14</li>
                        <li className="calendar__day">15</li>
                        <li className="calendar__day">16</li>
                        <li className="calendar__day">17</li>
                        <li className="calendar__day">18</li>
                        <li className="calendar__day">19</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">20</li>
                        <li className="calendar__day">21</li>
                        <li className="calendar__day">22</li>
                        <li className="calendar__day">23</li>
                        <li className="calendar__day">24</li>
                        <li className="calendar__day">25</li>
                        <li className="calendar__day">26</li>
                      </ul>

                      <ul className="calendar__days-row">
                        <li className="calendar__day">27</li>
                        <li className="calendar__day">28</li>
                        <li className="calendar__day">29</li>
                        <li className="calendar__day">30</li>
                        <li className="calendar__day">31</li>
                        <li className="calendar__day calendar__day_inactive">1</li>
                        <li className="calendar__day calendar__day_inactive">2</li>
                      </ul>
                    </div>
                  </div>

                </div>
                <button className="header__form-button" type="submit">Найти билеты</button>
              </form>
            </div>
          </div>
        </header>
      </React.Fragment>
    );    
  }
  
}