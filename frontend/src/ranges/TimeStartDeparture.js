import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../css/input-range.css';

export default class TimeStartDeparture extends React.Component {
  constructor(props) {
    super(props);
//    this.handleNewPriceInterval = this.debounce(this.handleNewPriceInterval, 2000, this);
    this.state = {
      value: {
        min: 0,
        max: 24
      }
    };
  }
  
//  componentWillMount() {
//    const { minPrice, maxPrice } = this.props;
//    this.setState({
//      value: {
//        min: minPrice,
//        max: maxPrice
//      }
//    });
//  }

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
  
  handleNewPriceInterval(context) {
//    context.props.priceRangeHandler(context.state.value);
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
          onChangeComplete={this.handleNewPriceInterval.bind(this)}
          value={this.state.value} />
      </form>
    );
  }
}
