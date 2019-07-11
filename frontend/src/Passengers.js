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
      passengers: [],
      preloader: false,
      nextStepAllow: false
    };
  }
  
  componentWillMount() {
    const { ticketsNumLeave } = this.props.location.state;
    const passengers = [];
    let passengersNum = ticketsNumLeave.adult + ticketsNumLeave.child + ticketsNumLeave.baby;
    const template = {
      collapsed: false,
      type: 'adult',
      name: '',
      patronymic: '',
      surname: '',
      gender: '',
      dateOfBirth: '',
      limitedMobility: false,
      docType: 'passport',
      docSeries: '',
      docNum: ''
    };
    for (let i = 0; i < passengersNum; i++) {
      let tpl = {...template};
      if (i > 0) tpl.collapsed = true;
      passengers.push(tpl);
    }
    this.setState({
      passengers: passengers
    });
  }

  // Функция, проверяющая все ли данные по пассажирам заполнены
  nextStepIsAllow(passengers = []) {
    let arr = [];
    passengers.forEach(function(item) {
      for (let key in item) {
        if (item[key] === '') {
          arr.push('empty');
        } else {
          arr.push('filled');
        }
      }
    });
    let foundEl = arr.find(function(el) {
      return el === 'empty';
    });

    if (foundEl) {
      return false;
    } else {
      return true;
    }
  }
  
  passengerInfoHandler(property, index, event) {
    const passengers = [];
    for (let i = 0; i < this.state.passengers.length; i++) {
      passengers[i] = {...this.state.passengers[i]};
    }
    if (property === 'gender') {
      passengers[index][property] = event.currentTarget.textContent;
    } else if (property === 'limitedMobility') {
      passengers[index][property] = event.currentTarget.checked;
    } else if (property === 'collapsed') {
      if (passengers[index][property]) {
        passengers[index][property] = false;
      } else {
        passengers[index][property] = true;
      }
    } else {
      passengers[index][property] = event.currentTarget.value;
    }
    
    let nextStepAllow = this.nextStepIsAllow(passengers);
    this.setState({
      passengers: passengers,
      nextStepAllow: nextStepAllow
    });
  }
  
  goToNextPassenger(index, event) {
    event.preventDefault();
    let nextIndex = index + 1;
    if (nextIndex >= this.state.passengers.length) return;
    
    const passengers = [];
    for (let i = 0; i < this.state.passengers.length; i++) {
      passengers[i] = {...this.state.passengers[i]};
    }
    passengers[index].collapsed = true;
    passengers[nextIndex].collapsed = false;

    this.setState({
      passengers: passengers
    });
  }
  
  render() {
    const { passengers, preloader, nextStepAllow } = this.state;
    const { cityFrom, cityTo, direction, dateLeave, dateBack, getParams, ticketsNumLeave, chosenSeats, cost } = this.props.location.state;

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
          
          <Steps currentStep={2} />
          
          <div className="content-wrap">
            <div className="container">
              <section className="sidebar">

                <SidebarDetails direction={direction} dateLeave={dateLeave} dateBack={dateBack} ticketsNumLeave={ticketsNumLeave} cost={cost} />

              </section>

              <section className="content">

                { passengers.map((item, i) => {
                    return (
                      <div key={i} className="passenger">
                        <div className={item.collapsed ? "passenger__announce passenger__announce_collapse" : "passenger__announce"}>
                          <div className={item.collapsed ? "passenger__toggle passenger__toggle_collapse" : "passenger__toggle"} onClick={this.passengerInfoHandler.bind(this, 'collapsed', i)}>
                            <i className={item.collapsed ? "fa fa-plus" : "fa fa-minus"} aria-hidden="true"></i>
                          </div>
                          <p className="passenger__title" onClick={this.passengerInfoHandler.bind(this, 'collapsed', i)}>{`Пассажир ${i + 1}`}</p>
                          <div className={item.collapsed ? "passenger__close hidden" : "passenger__close"}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </div>
                        </div>

                        <div className={item.collapsed ? "passenger__detail hidden" : "passenger__detail"}>
                          <div className="passenger__detail-row">
                            <select className="passenger__type" onChange={this.passengerInfoHandler.bind(this, 'type', i)}>
                              <option className="passenger__type-item" value="adult">Взрослый</option>
                              <option className="passenger__type-item" value="child">Детский</option>
                            </select>
                          </div>
                          <div className="passenger__detail-row">
                            <label className="passenger__name">
                              Фамилия
                              <input className="passenger__input" name={`surname${i}`} type="text" value={item.surname} onChange={this.passengerInfoHandler.bind(this, 'surname', i)} />
                            </label>

                            <label className="passenger__name">
                              Имя
                              <input className="passenger__input" name="name" type="text" value={item.name} onChange={this.passengerInfoHandler.bind(this, 'name', i)} />
                            </label>

                            <label className="passenger__name">
                              Отчество
                              <input className="passenger__input" name="patronymic" type="text" value={item.patronymic} onChange={this.passengerInfoHandler.bind(this, 'patronymic', i)} />
                            </label>
                          </div>

                          <div className="passenger__detail-row passenger__detail-row_left">
                            <div className="passenger__gender">
                              Пол
                              <div className="passenger__gender-field">
                                <div className={(item.gender === 'М') ? "passenger__gender-value passenger__gender-value_man passenger__gender-value_active" : "passenger__gender-value passenger__gender-value_man"} onClick={this.passengerInfoHandler.bind(this, 'gender', i)}>М</div>
                                <div className={(item.gender === 'Ж') ? "passenger__gender-value passenger__gender-value_woman passenger__gender-value_active" : "passenger__gender-value passenger__gender-value_woman"} onClick={this.passengerInfoHandler.bind(this, 'gender', i)}>Ж</div>
                              </div>
                            </div>

                            <label className="passenger__date-birth">
                              Дата рождения
                              <input className="passenger__input passenger__input_date-birth" name="birth" type="text" placeholder="ДД/ММ/ГГ" value={item.dateOfBirth} onChange={this.passengerInfoHandler.bind(this, 'dateOfBirth', i)} />
                            </label>
                          </div>

                          <div className="passenger__detail-row">
                            <input type="checkbox" id={`checkbox_passenger${i+1}`} onChange={this.passengerInfoHandler.bind(this, 'limitedMobility', i)} />
                            <label htmlFor={`checkbox_passenger${i+1}`}>ограниченная подвижность</label>
                          </div>

                          <div className="passenger__detail-row passenger__document-wrap">
                            <label className="passenger__document">
                              Тип документа
                              <select className="passenger__document-type" onChange={this.passengerInfoHandler.bind(this, 'docType', i)}>
                                <option className="passenger__document-item" value="passport">Паспорт РФ</option>
                                <option className="passenger__document-item" value="certificate">Свидетельство о рождении</option>
                              </select>
                            </label>

                            <label className="passenger__document">
                              Серия
                              <input className="passenger__input" name="doc-series" type="text" value={item.docSeries} onChange={this.passengerInfoHandler.bind(this, 'docSeries', i)} />
                            </label>

                            <label className="passenger__document">
                              Номер
                              <input className="passenger__input" name="doc-number" type="text" value={item.docNum} onChange={this.passengerInfoHandler.bind(this, 'docNum', i)} />
                            </label>
                          </div>

                          <div className="passenger__detail-row passenger__next-wrap">
                            <a className="passenger__next-button" href="#" onClick={this.goToNextPassenger.bind(this, i)}>Следующий пассажир</a>
                          </div>

                        </div>
                      </div>
                    );
                  })
                }

                <div className="add-passenger">
                  <div className="passenger__announce passenger__announce_collapse">
                    <p className="add-passenger__title">Добавить пассажира</p>
                    <div className="add-passenger__icon">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                { nextStepAllow ? 
                  <NavLink to={{ 
                    pathname: '/payment/',
                    state: {
                      cityFrom: cityFrom,
                      cityTo: cityTo,
                      direction: direction,
                      dateLeave: dateLeave,
                      dateBack: dateBack,
                      getParams: getParams,
                      ticketsNumLeave: ticketsNumLeave,
                      chosenSeats: chosenSeats,
                      cost: cost,
                      passengers: passengers
                    }
                  }} className="next-button">Далее</NavLink> :
                  <a className="next-button next-button_inactive" href="#">Далее</a>
                }
                

              </section>

            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
}