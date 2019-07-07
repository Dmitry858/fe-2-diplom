import React, { Component } from 'react';
import Header from './Header.js';
import RatingStars from './RatingStars.js';
import cardIcon1 from './img/order-card_icon1.png';
import cardIcon2 from './img/order-card_icon2.png';
import cardIcon3 from './img/order-card_icon3.png';
import loader from './img/preloader.gif';

import {
  NavLink
} from 'react-router-dom';

export default class OrderDone extends Component {
  constructor (props) {
    super(props);
    this.state = {
      preloader: true
    };
  }
  
  componentWillMount() {
    const { direction, ticketsNumLeave, chosenSeats, cost, passengers, customer } = this.props.location.state;
  
    let paymentMethod;
    if (customer.paymentOnline) {
      paymentMethod = 'online';
    } else {
      paymentMethod = 'cash';
    }
    
    const seats = [];
    
    passengers.forEach((item, i) => {
      let is_adult;
      if (item.type === 'adult') {
        is_adult = true;
      } else {
        is_adult = false;
      }
      seats.push({
        "coach_id": chosenSeats[i].wagonNum,
        "person_info": {
          "is_adult": is_adult,
          "first_name": item.name,
          "last_name": item.surname,
          "patronymic": item.patronymic,
          "gender": item.gender,
          "birthday": item.dateOfBirth,
          "document_type": item.docType,
          "document_data": `${item.docSeries} ${item.docNum}`
        },
        "seat_number": chosenSeats[i].seatNum,
        "is_child": !is_adult,
        "include_children_seat": false
      });
    });

    fetch( 'https://netology-trainbooking.herokuapp.com/order', {
        method: 'POST',
        body: JSON.stringify({
          "user": {
              "first_name": customer.name,
              "last_name": customer.surname,
              "patronymic": customer.patronymic,
              "phone": customer.phone,
              "email": customer.email,
              "payment_method": paymentMethod
            },
            "departure": {
              "route_direction_id": direction.departure._id,
              "seats": seats
            }
          })
      })
        .then( response => response.json() )
        .then( (data) => {
          console.log(data);
          this.setState({
            preloader: false
          });
        })
        .catch( (err) => {
          console.log(err);
        });
  }
  
  render() {
    const { cost, customer } = this.props.location.state;
    
    if (this.state.preloader) {
      return (
        <React.Fragment>
          <Header currentPage={'end'} />

          <div className="content-wrap content-wrap_loader">
            <p className="loader-text">идет обработка данных заказа</p>
            <img className="loader" src={loader} alt="Loader" />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header currentPage={'end'} />

          <div className="order-card container">
            <div className="order-card__header">
              <h3 className="order-card__title">№Заказа 285АА</h3>
              <p className="order-card__total">сумма <span className="order-card__total_num">{cost}</span> <i className="fa fa-rub" aria-hidden="true"></i></p>
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
              <h4 className="order-card__text-title">{`${customer.name} ${customer.patronymic}!`}</h4>
              <p>Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
              <p><strong>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</strong></p>
            </div>

            <div className="order-card__rating">
              <p className="order-card__rating-caption">Оценить сервис</p>
              <RatingStars />

              <NavLink to={{ pathname: '/' }} className="order-card__link">Вернуться на главную</NavLink>
            </div>
          </div>
        </React.Fragment>
      );
    }  
  }
  
}