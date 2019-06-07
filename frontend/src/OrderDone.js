import React, { Component } from 'react';
import Header from './Header.js';
import cardIcon1 from './img/order-card_icon1.png';
import cardIcon2 from './img/order-card_icon2.png';
import cardIcon3 from './img/order-card_icon3.png';

import {
  NavLink
} from 'react-router-dom';

export default class OrderDone extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <Header currentPage={'end'} />

        <div className="order-card container">
          <div className="order-card__header">
            <h3 className="order-card__title">№Заказа 285АА</h3>
            <p className="order-card__total">сумма <span className="order-card__total_num">7 760</span> <i className="fa fa-rub" aria-hidden="true"></i></p>
          </div>

          <div className="order-card__steps">
            <div className="order-card__step">
              <img className="order-card__step-icon" src={cardIcon1} alt="" />
              <div className="order-card__step-text">билеты будут отправлены на ваш e-mail</div>
            </div>
            <div className="order-card__step">
              <img className="order-card__step-icon" src={cardIcon2} alt="" />
              <div className="order-card__step-text">распечатайте и сохраняйте билеты до даты поездки</div>
            </div>
            <div className="order-card__step">
              <img className="order-card__step-icon" src={cardIcon3} alt="" />
              <div className="order-card__step-text">предьявите распечатанные билеты при посадке</div>
            </div>
          </div>

          <div className="order-card__text">
            <h4 className="order-card__text-title">Ирина Эдуардовна!</h4>
            <p>Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
            <p><strong>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</strong></p>
          </div>

          <div className="order-card__rating">
            <p className="order-card__rating-caption">Оценить сервис</p>
            <div className="order-card__rating-stars">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <NavLink to={{ pathname: '/' }} className="order-card__link">Вернуться на главную</NavLink>
          </div>
        </div>
      </React.Fragment>
    );    
  }
  
}