import React, { Component } from 'react';
import Header from './Header.js';
import Reviews from './Reviews.js';
import monitor_icon from './img/monitor_icon.png';
import building_icon from './img/building_icon.png';
import globe_icon from './img/globe_icon.png';
import './css/style-content.css';
import './css/style-reviews-slider.css';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    if (window.location.hash !== '') this.scrollToAnchor();
  }
  
  componentDidUpdate() {
    if (window.location.hash !== '') this.scrollToAnchor();
  }
  
  scrollToAnchor() {
    let elemId = window.location.hash.replace('#', '');
    if (document.getElementById(elemId)) {
      let pageY = document.getElementById(elemId).getBoundingClientRect().y;
      window.scrollTo(0, pageY);
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Header currentPage={'home'} />
       
        <section id="about-us" className="about container">
          <h2 className="about__title">О нас</h2>
          <p className="about__content">Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
          <p className="about__content">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
          <p className="about__content">Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
        </section>
        
        <section id="how-it-works" className="advantages">
          <div className="container">
            <h2 className="advantages__title">Как это работает</h2>
            <a href="#" className="advantages__link-more">Узнать больше</a>

            <div className="advantages__content">
              <div className="advantages__content-item">
                <div className="advantages__img-wrap">
                  <img className="advantages__img" src={monitor_icon} alt="" />
                </div>
                <p>Удобный заказ на сайте</p>
              </div>

              <div className="advantages__content-item">
                <div className="advantages__img-wrap">
                  <img className="advantages__img" src={building_icon} alt="" />
                </div>
                <p>Нет необходимости ехать в офис</p>
              </div>

              <div className="advantages__content-item">
                <div className="advantages__img-wrap">
                  <img className="advantages__img" src={globe_icon} alt="" />
                </div>
                <p>Огромный выбор направлений</p>
              </div>
            </div>

          </div>
        </section>
        
        <Reviews />
      </React.Fragment>
    );    
  }
  
}