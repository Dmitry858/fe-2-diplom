import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../css/input-range.css';

export default class TimeEndArrival extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeEndArrival = this.debounce(this.handleTimeEndArrival, 2000, this);
    this.state = {
      value: {
        min: 0,
        max: 24
      }
    };
  }
  
 componentWillMount() {
   const { endArrivalTime } = this.props;
   this.setState({
     value: {
       min: endArrivalTime.min,
       max: endArrivalTime.max
     }
   });
 }

  debounce(callback, delay, context) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        callback(context);
      }, delay);
    };
  };
  
  handleTimeEndArrival(context) {
    context.props.timeEndArrivalHandler(context.state.value);
  }
  
  render() {
    return (
      <form className="time-range">
        <InputRange
          maxValue={24}
          minValue={0}
          step={1}
          formatLabel={value => value.toFixed(2)}
          value={this.state.value}
          onChange={value => this.setState({ value: value })}
          onChangeComplete={this.handleTimeEndArrival.bind(this)}
          value={this.state.value} />
      </form>
    );
  }
}
