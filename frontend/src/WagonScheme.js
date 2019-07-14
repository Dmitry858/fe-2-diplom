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
      let seats = currentWagon.seats,
          schemeSections = [],
          schemeRows = [];
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

      if (currentWagon.coach.class_type === 'third' ) {
        if (seats.length < 48) {
          while (seats.length < 48) {
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
        
        schemeRows[0] = schemeSections.slice(0, 8);
        schemeRows[1] = schemeSections.slice(8);
      }
      
      if (currentWagon.coach.class_type === 'fourth' ) {
        if (seats.length < 62) {
          while (seats.length < 62) {
            seats.push({
              index: seats.length + 1,
              available: false
            });
          }
        }
        
        seats.splice(32, 0, {
          index: 0,
          available: false
        });
        seats.splice(62, 0, {
          index: 0,
          available: false
        });

        schemeSections = seats.reduce(function(result, value, index, array) {
          if (index % 4 === 0)
            result.push(array.slice(index, index + 4));
          return result;
        }, []);
        
        schemeRows[0] = schemeSections.slice(0, 8);
        schemeRows[1] = schemeSections.slice(8);
      }

      this.setState({
        seats: seats, 
        schemeSections: schemeSections,
        schemeRows: schemeRows
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
  
  componentDidMount() {
    this.doInvisibleElements();
    this.markChosenSeats();
  }
  
  componentDidUpdate() {
    this.doInvisibleElements();
    this.markChosenSeats();
  }
  
  doInvisibleElements() {
    if (this.props.currentWagon.coach.class_type === 'fourth') {
      Array.from(document.getElementsByClassName('wagon__scheme-seat_fourth')).forEach(function(item, i) {
        if (item.textContent === '0') {
          item.classList.add('invisible');
        }
      });
    }
  }
  
  markChosenSeats() {
    const { currentWagon, chosenSeats } = this.props;
    const wagonNum = parseInt(currentWagon.coach.name.replace(/\D+/g,''), 10);
    let allSeats = Array.from(document.getElementsByClassName('wagon__scheme-seat'));
    const foundElements = chosenSeats.filter((item) => {
      return item.wagonNum === wagonNum;
    });
    foundElements.forEach((item) => {
      let el = allSeats.find((seat) => {
        return item.seatNum === parseInt(seat.textContent, 10);
      });
      if (el) el.classList.add('wagon__scheme-seat_active');
    });
  }
  
  chooseSeatHandler(event) {
    const { chosenSeats, ticketsNumLeave } = this.props;
    
    let seatNum = parseInt(event.currentTarget.textContent, 10);
    if (event.currentTarget.classList.contains('wagon__scheme-seat_active')) {
      event.currentTarget.classList.remove('wagon__scheme-seat_active');
      this.props.sendData({
        seatNum: seatNum,
        wagonNum: parseInt(this.props.currentWagon.coach.name.replace(/\D+/g,''), 10)
      }, 'remove');
    } else {
      if (chosenSeats.length === (ticketsNumLeave.adult + ticketsNumLeave.child)) {
        this.props.sendData({}, 'modal');
      } else {
        event.currentTarget.classList.add('wagon__scheme-seat_active');
        this.props.sendData({
          seatNum: seatNum,
          wagonNum: parseInt(this.props.currentWagon.coach.name.replace(/\D+/g,''), 10)
        }, 'add'); 
      }
    } 
  }
  
  render() {
    const { currentWagon, chosenSeats } = this.props;
    if (!currentWagon) return null;

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
          
          { currentWagon.coach.class_type === 'third' && 
            this.state.schemeRows.map((row, i) => {
              if (i === 0) {
                return (
                  <div key={i} className="wagon__row-inner wagon__row-inner_third">
                    {row.map((item, i) => {
                      return (
                        <div key={i} className="wagon__scheme-section">
                          <div className="wagon__seats-group">
                            <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
                            <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                          </div>
                          <div className="wagon__seats-group">
                            <div className={(item[3].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[3].index}</div>
                            <div className={(item[2].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[2].index}</div>
                          </div>
                        </div>
                      ); 
                    })}                 
                  </div>
                );
              } else {
                return (
                  <div key={i} className="wagon__row-inner wagon__row-inner_third">
                    {row.map((item, i) => {
                      return (
                        <div key={i} className="wagon__scheme-section wagon__scheme-section_horizontal">
                          <div className="wagon__seats-group wagon__seats-group_horizontal">
                            <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                            <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
                          </div>
                          <div className="wagon__seats-group wagon__seats-group_horizontal">
                            <div className={(item[2].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[2].index}</div>
                            <div className={(item[3].available) ? "wagon__scheme-seat wagon__scheme-seat_third wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_third"} onClick={this.chooseSeatHandler.bind(this)}>{item[3].index}</div>
                          </div>
                        </div>
                      ); 
                    })}                 
                  </div>
                );
              }
            })
          }
          
          { currentWagon.coach.class_type === 'fourth' && 
            this.state.schemeRows.map((row, i) => {
              if (i === 0) {
                return (
                  <div key={i} className="wagon__row-inner">
                    {row.map((item, i) => {
                      return (
                        <div key={i} className="wagon__scheme-section">
                          <div className="wagon__seats-group">
                            <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
                            <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                          </div>
                          <div className="wagon__seats-group">
                            <div className={(item[3].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[3].index}</div>
                            <div className={(item[2].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[2].index}</div>
                          </div>
                        </div>
                      ); 
                    })}                 
                  </div>
                );
              } else {
                return (
                  <div key={i} className="wagon__row-inner">
                    {row.map((item, i) => {
                      return (
                        <div key={i} className="wagon__scheme-section">
                          <div className="wagon__seats-group">
                            <div className={(item[0].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[0].index}</div>
                            <div className={(item[1].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[1].index}</div>
                          </div>
                          <div className="wagon__seats-group">
                            <div className={(item[2].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[2].index}</div>
                            <div className={(item[3].available) ? "wagon__scheme-seat wagon__scheme-seat_fourth wagon__scheme-seat_available" : "wagon__scheme-seat wagon__scheme-seat_fourth"} onClick={this.chooseSeatHandler.bind(this)}>{item[3].index}</div>
                          </div>
                        </div>
                      ); 
                    })}                 
                  </div>
                );
              }
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