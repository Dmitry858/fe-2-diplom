import React, { Component } from 'react';
//import logo from './img/logo.png';
import './css/style-content.css';
import './css/style-reviews-slider.css';

export default class Content extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <section id="about-us" className="about container">
          <h2 className="about__title">О нас</h2>
          <p className="about__content">Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
          <p className="about__content">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
          <p className="about__content">Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
        </section>
      </React.Fragment>
    );    
  }
  
}