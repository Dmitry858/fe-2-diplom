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

  seatsInfoGenerator(props) {
    const currentWagon = props.currentWagon;
    if (currentWagon) {
      let seats = currentWagon.seats;
      let schemeSections = [];
      if (currentWagon.coach.class_type === 'first' ) {
        if (seats.length < 16) {
          while (seats.length < 16) {
            seats.push({
              index: seats.length + 1,
              available: false
            });
          }
        }

        schemeSections = seats.reduce(function(result, value, index, array) {
          if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
          return result;
        }, []);
      }

      if (currentWagon.coach.class_type === 'second' ) {
        if (seats.length < 32) {
          while (seats.length < 32) {
            seats.push({
              index: seats.length + 1,
              available: false
            });
          }
        }

        schemeSections = seats.reduce(function(result, value, index, array) {
          if (index % 4 === 0)
            result.push(array.slice(index, index + 4));
          return result;
        }, []);
      }

      this.setState({
        seats: seats, 
        schemeSections: schemeSections
      }); 
    }
  }
  
  componentWillMount() {
    this.seatsInfoGenerator(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentWagon !== this.props.currentWagon) {
      this.seatsInfoGenerator(nextProps);
    }
  }
  
  chooseSeatHandler(event) {
    if (event.currentTarget.classList.contains('wagon__scheme-seat_available')) {
      event.currentTarget.classList.toggle('wagon__scheme-seat_active');
    }
  }
  
  render() {
    const { currentWagon } = this.props;
    if (!currentWagon) return null;

        console.log(this.state);

    return (
      <div className="wagon__scheme">
        <div className="wagon__num">
          {parseInt(currentWagon.coach.name.replace(/\D+/g,''), 10)}
        </div>
        <div className={`wagon__scheme-row wagon__scheme-row_${currentWagon.coach.class_type}`}>

          { currentWagon.coach.class_type === 'first' && 
            this.state.schemeSections.map((item, i) => {
              return (
                <div key={i} className="wagon__scheme-section">
                  <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_available" : "wagon__scheme-seat"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                  <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_available" : "wagon__scheme-seat"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
                </div>
              );
            })
          }

          { currentWagon.coach.class_type === 'second' && 
            this.state.schemeSections.map((item, i) => {
              return (
                <div key={i} className="wagon__scheme-section">
                  <div className="wagon__seats-group">
                    <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_second wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_second"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
                    <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_second wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_second"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                  </div>
                  <div className="wagon__seats-group">
                    <div className={(item[3].available) ? "wagon__scheme-seat wagon__scheme-seat_second wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_second"} onClick={this.chooseSeatHandler.bind(this)}>{item[3].index}</div>
                    <div className={(item[2].available) ? "wagon__scheme-seat wagon__scheme-seat_second wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_second"} onClick={this.chooseSeatHandler.bind(this)}>{item[2].index}</div>
                  </div>
                </div>
              );
            })
          } 
        </div>
        
        { currentWagon.coach.class_type === 'first' && <img src={firstScheme} alt="Схема вагона" /> }
        { currentWagon.coach.class_type === 'second' && <img src={secondScheme} alt="Схема вагона" /> }
        { currentWagon.coach.class_type === 'third' && <img src={thirdScheme} alt="Схема вагона" /> }
        { currentWagon.coach.class_type === 'fourth' && <img src={fourthScheme} alt="Схема вагона" /> }
      </div>
    );    
  }
  
}