import React, { Component } from 'react';

export default class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    this.setState({
      date: this.props.currentDate
    });
  }
  
  calendarHandler(event) {
    event.preventDefault();
  }
  
  changeMonth(direction) {
    const { date } = this.state;
    let year = date.getFullYear(),
        month = date.getMonth() + direction,
        newDate = new Date(year, month);
    this.setState({
      date: newDate
    });
  }
  
  render() {
    const { date } = this.state;
    const { currentDate, responseHandler, direction } = this.props;
    const month = date.toLocaleString('ru', {month: 'long'});
    
    const daysInMonth = 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
    const calendar = calendarGenerator();

    function calendarGenerator() {
      const daysArray = [];
      /* Определяем количество дней предыдущего и следующего месяцев, которые нужно отразить в календаре */
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
            lastDay = new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay();
      let LastMonthDaysNum,
          NextMonthDaysNum;
      if (firstDay === 0) {
        LastMonthDaysNum = 6;
      }
      if (firstDay === 1) {
        LastMonthDaysNum = 0;
      }
      if (firstDay > 1 ) {
        LastMonthDaysNum = firstDay - 1;
      }
      if (lastDay === 0) {
        NextMonthDaysNum = 0;
      }
      if (lastDay > 0) {
        NextMonthDaysNum = 7 - lastDay;
      }

      /* Добавляем в календарь дни предыдущего месяца */
      for (let i = 1; i <= LastMonthDaysNum; i++) {
        let item = {
          day: `${new Date(date.getFullYear(), date.getMonth(), 1 - i).getDate()}`,
          class: 'calendar__day calendar__day_inactive'
        }
        daysArray.unshift(item);
      }

      /* Добавляем в календарь дни текущего месяца */
      for (let i = 1; i <= daysInMonth; i++) {
        let item = {
          day: `${new Date(date.getFullYear(), date.getMonth(), i).getDate()}`,
          class: 'calendar__day'
        }
        if ( (Number(item.day) === currentDate.getDate()) && (currentDate.getMonth() === date.getMonth()) && (currentDate.getFullYear() === date.getFullYear()) ) {
          item.class = 'calendar__day calendar__day_now';
        }
        daysArray.push(item);
      }

      /* Добавляем в календарь дни следующего месяца */
      for (let i = 1; i <= NextMonthDaysNum; i++) {
        let item = {
          day: `${new Date(date.getFullYear(), date.getMonth(), daysInMonth + i).getDate()}`,
          class: 'calendar__day calendar__day_inactive'
        }
        daysArray.push(item);
      }

      /* Группируем все дни по неделям */
      const weeksArray = [];
      const weeksNumber = daysArray.length / 7;
      for (let i = 0; i < weeksNumber; i++) {
        let item = daysArray.splice(0, 7);
        weeksArray.push(item);
      }

      /* Возвращаем массив недель для календаря */
      return weeksArray;
    }

    /* Функция, возвращающая сниппет недели */
    function getWeekRow(item, index) {
      return (
        <ul key={index} className="calendar__days-row">
          {item.map ((day, i) =>
            <li key={i} className={day.class} onClick={chooseDate}>{day.day}</li>
          )}
        </ul>
      );
    }
    
    function chooseDate(event) {
      let chosenDate = new Date(date.getFullYear(), date.getMonth(), parseInt(event.target.textContent, 10));
      responseHandler(chosenDate, direction);
    }
    
    return (
      <div className="calendar" onMouseDown={this.calendarHandler}>
        <div className="calendar__header">
          <i className="fa fa-caret-left" aria-hidden="true" onClick={this.changeMonth.bind(this, -1)}></i>
          <p className="calendar__header-month">{month[0].toUpperCase() + month.substring(1)}</p>
          <i className="fa fa-caret-right" aria-hidden="true" onClick={this.changeMonth.bind(this, 1)}></i>
        </div>
        <div className="calendar__days-wrap">
          { calendar.map(getWeekRow) }
        </div>
      </div>
    );    
  }
  
}