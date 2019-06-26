import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../css/input-range.css';

export default class PriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPriceInterval = this.debounce(this.handleNewPriceInterval, 2000, this);
    this.state = {
      value: {
        min: 0,
        max: 7000
      }
    };
  }
  
  componentWillMount() {
    const { minPrice, maxPrice } = this.props;
    this.setState({
      value: {
        min: minPrice,
        max: maxPrice
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
  
  handleNewPriceInterval(context) {
    context.props.priceRangeHandler(context.state.value);
  }
  
  render() {
    return (
      <form className="price-range">
        <div className="input-range__labels">
          <p className="input-range__label">от</p>
          <p className="input-range__label">до</p>
        </div>
        <InputRange
          maxValue={7000}
          minValue={0}
          value={this.state.value}
          step={500}
          onChange={value => this.setState({ value: value })}
          onChangeComplete={this.handleNewPriceInterval.bind(this)}
          value={this.state.value} />
      </form>
    );
  }
}
