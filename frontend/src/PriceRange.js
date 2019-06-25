import React, { Component } from 'react';
import InputRange from 'react-input-range';
import './css/input-range.css';

export default class PriceRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value5: {
        min: 0,
        max: 7000
      }
    };
  }

  render() {
    return (
      <form className="price-range">
        <div className="input-range__labels">
          <p className="input-range__label">от</p>
          <p className="input-range__label">до</p>
        </div>
        <InputRange
          draggableTrack
          maxValue={7000}
          minValue={0}
          step={500}
          onChange={value => this.setState({ value5: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value5} />
      </form>
    );
  }
}
