import React, { Component } from 'react';
import wagonScheme from './img/wagon-scheme.png';
import firstScheme from './img/first-scheme.png';
import secondScheme from './img/second-scheme.png';
import thirdScheme from './img/third-scheme.png';
import fourthScheme from './img/fourth-scheme.png';

export default class WagonScheme extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    const { currentWagon } = this.props;
    if (currentWagon) {
      let seats = currentWagon.seats;
      if (currentWagon.coach.class_type === 'first' && seats.length < 16) {
        while (seats.length < 16) {
          seats.push({
            index: seats.length + 1,
            available: false
          });
        }
      }
      let seatsRows = seats.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, []);

      this.setState({
        seats: seats, 
        seatsRows: seatsRows
      }); 
    }
  }
  
  chooseSeatHandler(event) {
    if (event.currentTarget.classList.contains('wagon__scheme-seat_available')) {
      event.currentTarget.classList.toggle('wagon__scheme-seat_active');
    }
  }
  
  render() {
    const { currentWagon } = this.props;
    console.log(currentWagon);
    if (!currentWagon) return null;
    
    return (
      <div className="wagon__scheme">
        <div className="wagon__num">
          {parseInt(currentWagon.coach.name.replace(/\D+/g,''), 10)}
        </div>
        <div className={`wagon__scheme-row wagon__scheme-row_${currentWagon.coach.class_type}`}>
          {this.state.seatsRows.map((item, i) => {
            return (
              <div key={i} className="wagon__scheme-section">
                <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_available" : "wagon__scheme-seat"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_available" : "wagon__scheme-seat"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
              </div>
            );
          })}
        </div>
        
        { currentWagon.coach.class_type === 'first' && <img src={firstScheme} alt="Схема вагона" /> }
        { currentWagon.coach.class_type === 'second' && <img src={secondScheme} alt="Схема вагона" /> }
        { currentWagon.coach.class_type === 'third' && <img src={thirdScheme} alt="Схема вагона" /> }
        { currentWagon.coach.class_type === 'fourth' && <img src={fourthScheme} alt="Схема вагона" /> }
      </div>
    );    
  }
  
}