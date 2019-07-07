import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import SidebarDetails from './SidebarDetails.js';
import loader from './img/preloader.gif';
import passenger from './img/passenger.svg';

import {
  NavLink
} from 'react-router-dom';

export default class Payment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      customer: {
        name: '',
        patronymic: '',
        surname: '',
        phone: '',
        email: '',
        paymentOnline: false,
        paymentCash: false
      },
      preloader: false,
      nextStepAllow: false
    };
  }
  
  // Функция, проверяющая все ли поля заполнены
  nextStepIsAllow(customer = {}) {
    let arr = [];

    for (let key in customer) {
      if (customer[key] === '') {
        arr.push('empty');
      } else if ( (key === 'paymentOnline') && (customer.paymentOnline === customer.paymentCash) ) {
        arr.push('empty');
      } else {
        arr.push('filled');
      }
    }

    let foundEl = arr.find(function(el) {
      return el === 'empty';
    });

    if (foundEl) {
      return false;
    } else {
      return true;
    }
  }
  
  customerInfoHandler(property, event) {
    const customer = this.state.customer;
    if (property === 'paymentOnline') {
      customer.paymentOnline = true;
      customer.paymentCash = false;
    } else if (property === 'paymentCash') {
      customer.paymentOnline = false;
      customer.paymentCash = true;
    } else {
      customer[property] = event.currentTarget.value;
    }
    
    let nextStepAllow = this.nextStepIsAllow(customer);
    
    this.setState({
      customer: customer,
      nextStepAllow: nextStepAllow
    });
  }
  
  render() {
    const { cityFrom, cityTo, direction, dateLeave, dateBack, ticketsNumLeave, chosenSeats, cost, passengers } = this.props.location.state;
    
    const { customer, preloader, nextStepAllow } = this.state;
    
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
          
          <Steps currentStep={3} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">
               
                <SidebarDetails direction={direction} dateLeave={dateLeave} dateBack={dateBack} ticketsNumLeave={ticketsNumLeave} cost={cost} />
                
              </section>

              <section className="content">

                <div className="payment">
                  <div className="payment-row payment-row_title">
                    <p className="payment__title">Персональные данные</p>
                  </div>

                  <div className="payment-row payment-row_dotted">
                    <label className="passenger__name passenger__name_dark">
                      Фамилия
                      <input className="passenger__input" name="surname" type="text" value={customer.surname} onChange={this.customerInfoHandler.bind(this, 'surname')} />
                    </label>

                    <label className="passenger__name passenger__name_dark">
                      Имя
                      <input className="passenger__input" name="name" type="text" value={customer.name} onChange={this.customerInfoHandler.bind(this, 'name')} />
                    </label>

                    <label className="passenger__name passenger__name_dark">
                      Отчество
                      <input className="passenger__input" name="patronymic" type="text" value={customer.patronymic} onChange={this.customerInfoHandler.bind(this, 'patronymic')} />
                    </label>
                  </div>

                  <div className="payment-row">
                    <label className="passenger__phone">
                      Контактный телефон
                      <input className="passenger__input" name="phone" type="text" placeholder="+7 ___ ___ __ __" value={customer.phone} onChange={this.customerInfoHandler.bind(this, 'phone')} />
                    </label>
                  </div>

                  <div className="payment-row">
                    <label className="passenger__phone">
                      E-mail
                      <input className="passenger__input" name="email" type="text" placeholder="inbox@gmail.com" value={customer.email} onChange={this.customerInfoHandler.bind(this, 'email')} />
                    </label>
                  </div>

                  <div className="payment-row payment-row_title payment-row_ways">
                    <p className="payment__title">Способы оплаты</p>
                  </div>

                  <div className="payment-row payment-row_margin-top">
                    <input className="yellow-checkbox" type="checkbox" id="checkbox_pay-online" checked={customer.paymentOnline} onChange={this.customerInfoHandler.bind(this, 'paymentOnline')} />
                    <label className="payment__checkbox-label" htmlFor="checkbox_pay-online">Онлайн</label>
                  </div>

                  <div className="payment-row payment-row_methods payment-row_margin-bottom">
                    <p className="payment__method">Банковской картой</p>
                    <p className="payment__method">PayPal</p>
                    <p className="payment__method">Visa QIWI Wallet</p>
                  </div>

                  <div className="payment-row payment-row_dotted payment-row_margin-bottom">
                    <input className="yellow-checkbox" type="checkbox" id="checkbox_pay-cash" checked={customer.paymentCash} onChange={this.customerInfoHandler.bind(this, 'paymentCash')} />
                    <label className="payment__checkbox-label payment__checkbox-label_cash" htmlFor="checkbox_pay-cash">Наличными</label>
                  </div>

                </div>
                
                { nextStepAllow ? 
                  <NavLink to={{ 
                    pathname: '/order-confirm/',
                    state: {
                      cityFrom: cityFrom,
                      cityTo: cityTo,
                      direction: direction,
                      dateLeave: dateLeave,
                      dateBack: dateBack,
                      ticketsNumLeave: ticketsNumLeave,
                      chosenSeats: chosenSeats,
                      cost: cost,
                      passengers: passenger,
                      customer: customer
                    }
                  }} className="next-button">Купить билеты</NavLink> :
                  <a className="next-button next-button_inactive" href="#">Купить билеты</a>
                }

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}