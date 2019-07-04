import React, { Component } from 'react';
import Header from './Header.js';
import Steps from './Steps.js';
import SidebarDetails from './SidebarDetails.js';
import loader from './img/preloader.gif';

import {
  NavLink
} from 'react-router-dom';

export default class Passengers extends Component {
  constructor (props) {
    super(props);
    this.state = {
      preloader: false
    };
  }
  
  render() {
    console.log(this.props.location.state);

    const { direction, dateLeave, dateBack, ticketsNumLeave, cost } = this.props.location.state;

    if (this.state.preloader) {
      return (
        <React.Fragment>
          <Header currentPage={'inner'} />

          <div className="content-wrap content-wrap_loader">
            <p className="loader-text">идет поиск</p>
            <img className="loader" src={loader} alt="Loader" />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header currentPage={'inner'} />
          
          <Steps currentStep={2} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">

                <SidebarDetails direction={direction} dateLeave={dateLeave} dateBack={dateBack} ticketsNumLeave={ticketsNumLeave} cost={cost} />

              </section>

              <section className="content">

                <div className="passenger">
                  <div className="passenger__announce">
                    <div className="passenger__toggle">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </div>
                    <p className="passenger__title">Пассажир 1</p>
                    <div className="passenger__close">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="passenger__detail">
                    <div className="passenger__detail-row">
                      <select className="passenger__type">
                        <option className="passenger__type-item" value="взрослый">Взрослый</option>
                        <option className="passenger__type-item" value="детский">Детский</option>
                      </select>
                    </div>
                    <div className="passenger__detail-row">
                      <label className="passenger__name">
                        Фамилия
                        <input className="passenger__input" name="surname" type="text" />
                      </label>

                      <label className="passenger__name">
                        Имя
                        <input className="passenger__input" name="name" type="text" />
                      </label>

                      <label className="passenger__name">
                        Отчество
                        <input className="passenger__input" name="patronymic" type="text" />
                      </label>
                    </div>

                    <div className="passenger__detail-row passenger__detail-row_left">
                      <div className="passenger__gender">
                        Пол
                        <div className="passenger__gender-field">
                          <div className="passenger__gender-value passenger__gender-value_man">М</div>
                          <div className="passenger__gender-value passenger__gender-value_woman passenger__gender-value_active">Ж</div>
                        </div>
                      </div>

                      <label className="passenger__date-birth">
                        Дата рождения
                        <input className="passenger__input passenger__input_date-birth" name="birth" type="text" placeholder="ДД/ММ/ГГ" />
                      </label>
                    </div>

                    <div className="passenger__detail-row">
                      <input type="checkbox" id="checkbox_passenger1" />
                      <label htmlFor="checkbox_passenger1">ограниченная подвижность</label>
                    </div>

                    <div className="passenger__detail-row passenger__document-wrap">
                      <label className="passenger__document">
                        Тип документа
                        <select className="passenger__document-type">
                          <option className="passenger__document-item" value="паспорт">Паспорт РФ</option>
                          <option className="passenger__document-item" value="свидетельство">Свидетельство о рождении</option>
                        </select>
                      </label>

                      <label className="passenger__document">
                        Серия
                        <input className="passenger__input" name="doc-series" type="text" />
                      </label>

                      <label className="passenger__document">
                        Номер
                        <input className="passenger__input" name="doc-number" type="text" />
                      </label>
                    </div>

                    <div className="passenger__detail-row passenger__next-wrap passenger__next-wrap_allow">
                      <div className="passenger__next-message passenger__next-message_allow">
                        <div className="passenger__message-icon passenger__message-icon_allow">
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                        Готово
                      </div>

                      <a className="passenger__next-button" href="#">Следующий пассажир</a>
                    </div>

                  </div>
                </div>

                <div className="passenger">
                  <div className="passenger__announce passenger__announce_collapse">
                    <div className="passenger__toggle passenger__toggle_collapse">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p className="passenger__title">Пассажир 3</p>
                    <div className="passenger__close hidden">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="passenger__detail hidden"></div>
                </div>

                <div className="add-passenger">
                  <div className="passenger__announce passenger__announce_collapse">
                    <p className="add-passenger__title">Добавить пассажира</p>
                    <div className="add-passenger__icon">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <NavLink to={{ pathname: '/payment/' }} className="next-button">Далее</NavLink>

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}