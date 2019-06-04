import React, { Component } from 'react';

export default class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
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
    );    
  }
  
}