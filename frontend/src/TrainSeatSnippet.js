import React, { Component } from 'react';

export default class TrainSeatSnippet extends Component {
  constructor (props) {
    super(props);
    this.state = {
      wagonType: '',
      seatsNumber: 0,
      price: 0,
      topSeatPrice: 0,
      bottomSeatPrice: 0,
      hidden: true
    };
  }
  
  updateData() {
    const { item, hasClass, wagonType } = this.props;
    let value,
        num,
        price,
        topSeatPrice,
        bottomSeatPrice;
    if (wagonType === 'fourth_class') {
      value = 'Сидячий';
      num = item.departure.available_seats_info.fourth;
      price = item.departure.price_info.fourth.top_price;
      topSeatPrice = item.departure.price_info.fourth.top_price;
      bottomSeatPrice = item.departure.price_info.fourth.bottom_price;
    } else if (wagonType === 'third_class') {
      value = 'Плацкарт';
      num = item.departure.available_seats_info.third;
      price = item.departure.price_info.third.side_price;
      topSeatPrice = item.departure.price_info.third.top_price;
      bottomSeatPrice = item.departure.price_info.third.bottom_price;
    } else if (wagonType === 'second_class') {
      value = 'Купе';
      num = item.departure.available_seats_info.second;
      price = item.departure.price_info.second.top_price;
      topSeatPrice = item.departure.price_info.second.top_price;
      bottomSeatPrice = item.departure.price_info.second.bottom_price;
    } else if (wagonType === 'first_class') {
      value = 'Люкс';
      num = item.departure.available_seats_info.first;
      price = item.departure.price_info.first.price;
      topSeatPrice = item.departure.price_info.first.top_price;
      bottomSeatPrice = item.departure.price_info.first.bottom_price;
    }

    this.setState({
      item: item,
      wagonType: value,
      seatsNumber: num,
      price: price,
      topSeatPrice: topSeatPrice,
      bottomSeatPrice: bottomSeatPrice
    });
  }
  
  componentWillMount() {
    const { item, hasClass, wagonType } = this.props;
    if (hasClass) {
      this.updateData();
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.item && prevProps.item !== this.props.item) {
      if (this.props.hasClass) {
        this.updateData();
      }
    }
  }
  
  displaySubtypes() {
    if (this.state.hidden) {
      this.setState({
        hidden: false
      });
    } else {
      this.setState({
        hidden: true
      });
    }
  }
  
  render() {
    const { hasClass } = this.props;
    const { item, wagonType, seatsNumber, price, topSeatPrice, bottomSeatPrice, hidden } = this.state;
    
    if (item && hasClass) {
      return (
        <div className="train__seat">
          <div className="train__seat-name">{wagonType}</div>
          <div className="train__seat-number" onClick={this.displaySubtypes.bind(this)}>{seatsNumber}</div>
          <div className="train__seat-price">
            от <span className="train__seat-price_value">{price} </span>
            <i className="fa fa-rub" aria-hidden="true"></i>
          </div>

          <div className={(hidden) ? "train__seat_subtypes hidden" : "train__seat_subtypes"}>
            <div className="train__seat_subtype">
              <div className="train__seat-name">верхние</div>
              <div className="train__seat-number train__seat-number_subtype"></div>
              <div className="train__seat-price">
                <span className="train__seat-price_value">{topSeatPrice} </span>
                <i className="fa fa-rub" aria-hidden="true"></i>
              </div>
            </div>
            <div className="train__seat_subtype">
              <div className="train__seat-name">нижние</div>
              <div className="train__seat-number train__seat-number_subtype"></div>
              <div className="train__seat-price">
                <span className="train__seat-price_value">{bottomSeatPrice} </span>
                <i className="fa fa-rub" aria-hidden="true"></i>
              </div>
            </div>  
          </div>
        </div>
      ); 
    } else return null;
  }
}